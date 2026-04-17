import {
  kanaData,
  YOON_SET,
  DAKUTEN_SET,
  STORAGE_KEY,
  MAX_DRAWINGS_PER_KANA,
  DAILY_HISTORY_LIMIT
} from "./data/kanaData.js";
import { getElements } from "./dom/elements.js";
import { createState } from "./core/state.js";
import { sanitizeRomaji, getTodayKey } from "./core/utils.js";
import { updateStats, resetResult, showResult, setActiveProgressTab } from "./core/ui.js";
import { getKanaCategory, renderBacklog, updateBacklog, getQuestionWeight } from "./features/backlog.js";
import { pickTypingQuestion, pickWritingQuestion, getScriptContextForTyping } from "./features/quiz.js";
import { saveProgress, loadProgress, buildProgressPayload, applyProgressPayload } from "./features/storage.js";
import {
  addDailyAttempt,
  renderDailyProgress,
  bindProgressCompareSelectors,
  redrawProgressGraph
} from "./features/progress.js";
import { createDrawingFeature } from "./features/drawing.js";
import { setupCloudSync } from "./features/cloudSync.js";

const elements = getElements();
const state = createState(kanaData);
const drawingFeature = createDrawingFeature({
  elements,
  state,
  maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA
});
let cloudSync = { queueUpload() {}, async syncNow() {} };
let deferredInstallPrompt = null;
const MAX_RECENT_MISTAKES = 120;

const getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);

function getDueRomajiList() {
  const now = Date.now();
  return Object.entries(state.srsByRomaji)
    .filter(([, entry]) => Number(entry.dueAt || 0) <= now)
    .sort((a, b) => Number(a[1].dueAt || 0) - Number(b[1].dueAt || 0))
    .map(([romaji]) => romaji);
}

function filterRomajiForCurrentKanaSet(romajiList) {
  const setMode = elements.kanaSetSelect.value;
  if (setMode === "all") {
    return romajiList;
  }

  return romajiList.filter((romaji) => getKanaCategoryFn(romaji) === setMode);
}

function getPreferredRomajiList() {
  if (state.practiceStrategy === "mistakeReview") {
    return filterRomajiForCurrentKanaSet(state.recentMistakes).slice(0, 30);
  }

  if (state.practiceStrategy === "srs") {
    return filterRomajiForCurrentKanaSet(getDueRomajiList()).slice(0, 30);
  }

  // Adaptive weighting: emphasize mistakes early, shift to SRS as data accumulates
  const totalAttempts = Object.values(state.srsByRomaji)
    .reduce((sum, entry) => sum + (Number(entry.lastSeenAt) > 0 ? 1 : 0), 0);
  
  let mistakesCount, dueCount;
  if (totalAttempts < 100) {
    // Early stage: 80% mistakes, 20% due
    mistakesCount = 24;
    dueCount = 6;
  } else if (totalAttempts < 300) {
    // Mid stage: 60% mistakes, 40% due
    mistakesCount = 18;
    dueCount = 12;
  } else {
    // Advanced: 40% mistakes, 60% due
    mistakesCount = 12;
    dueCount = 18;
  }

  const due = filterRomajiForCurrentKanaSet(getDueRomajiList()).slice(0, dueCount);
  const mistakes = filterRomajiForCurrentKanaSet(state.recentMistakes).slice(0, mistakesCount);
  return [...new Set([...mistakes, ...due])];
}

function updateQueueMeta() {
  const due = getDueRomajiList().length;
  const mistakes = state.recentMistakes.length;
  const strategy = state.practiceStrategy === "mistakeReview"
    ? `Mistakes: ${mistakes}`
    : state.practiceStrategy === "srs"
      ? `Due: ${due}`
      : `Due ${due} • Mistakes ${mistakes}`;
  elements.queueMeta.textContent = strategy;
}

function upsertRecentMistake(romaji) {
  state.recentMistakes = [romaji, ...state.recentMistakes.filter((value) => value !== romaji)].slice(0, MAX_RECENT_MISTAKES);
}

function removeRecentMistake(romaji) {
  state.recentMistakes = state.recentMistakes.filter((value) => value !== romaji);
}

function updateSrsOnAttempt(romaji, wasCorrect) {
  const current = state.srsByRomaji[romaji] || {
    dueAt: 0,
    intervalHours: 0,
    lastSeenAt: 0,
    lastCorrect: false
  };

  const now = Date.now();
  if (wasCorrect) {
    const previous = Number(current.intervalHours || 0);
    // Aggressive intervals for daily practice: 1.5h start, 2.5x multiplier, 14-day cap
    const nextInterval = previous <= 0 ? 1.5 : Math.min(previous * 2.5, 24 * 14);
    current.intervalHours = nextInterval;
    current.dueAt = now + nextInterval * 60 * 60 * 1000;
    removeRecentMistake(romaji);
  } else {
    current.intervalHours = 0.5;
    current.dueAt = now + 30 * 60 * 1000; // 30 minutes for quick retry on mistakes
    upsertRecentMistake(romaji);
  }

  current.lastSeenAt = now;
  current.lastCorrect = wasCorrect;
  state.srsByRomaji[romaji] = current;
}

function getAudioTextForQuestion(question) {
  if (!question) {
    return "";
  }

  if (question.kind === "typing") {
    return question.kana;
  }

  if (question.canvasMode === "both") {
    return `${question.hiragana} ${question.katakana}`;
  }

  return question.canvasMode === "hiragana" ? question.hiragana : question.katakana;
}

function playCurrentAudio() {
  if (state.audioMuted) {
    showResult(elements, "Audio is muted.", false);
    return;
  }

  if (!window.speechSynthesis) {
    showResult(elements, "Audio unavailable in this browser.", false);
    return;
  }

  const text = getAudioTextForQuestion(state.currentQuestion);
  if (!text) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.75;          // Slower for clarity
  utterance.pitch = 1.2;          // Slightly higher pitch
  utterance.volume = 1.0;         // Full volume
  
  // Wait for voices to load if empty, then speak
  const speak = () => {
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => v.lang && v.lang.startsWith('ja-'));
    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = speak;
    setTimeout(speak, 100); // Fallback if voices don't load
  } else {
    speak();
  }
}

function refreshAudioButton() {
  elements.muteAudioBtn.textContent = state.audioMuted ? "Audio: Off" : "Audio: On";
  elements.muteAudioBtn.setAttribute("aria-pressed", String(state.audioMuted));
}

function setupPwaInstall() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker.register("sw.js").catch(() => {
    // Non-blocking. Quiz still works without service worker registration.
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installAppBtn.classList.remove("hidden");
  });

  elements.installAppBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    elements.installAppBtn.classList.add("hidden");
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    elements.installAppBtn.classList.add("hidden");
  });
}

function renderBacklogView() {
  renderBacklog({
    kanaData,
    backlog: state.backlog,
    drawingsByKana: state.drawingsByKana,
    getKanaCategoryFn
  });
}

function persistState() {
  saveProgress({
    storageKey: STORAGE_KEY,
    state,
    dailyHistoryLimit: DAILY_HISTORY_LIMIT
  });
  cloudSync.queueUpload();
}

function getLocalPayload() {
  return buildProgressPayload({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
}

function applyRemotePayload(payload) {
  applyProgressPayload({
    payload,
    state,
    kanaData,
    maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
    dailyHistoryLimit: DAILY_HISTORY_LIMIT
  });
}

function refreshProgressView() {
  renderDailyProgress({ elements, state, setActiveProgressTab });
}

function ensureTodayEntry() {
  const todayKey = getTodayKey();
  if (!state.dailyStats[todayKey]) {
    state.dailyStats[todayKey] = {
      typingRight: 0,
      typingWrong: 0,
      drawingRight: 0,
      drawingWrong: 0
    };
  }
}

function scheduleNextTypingQuestion() {
  if (state.nextQuestionTimer) {
    clearTimeout(state.nextQuestionTimer);
  }

  state.nextQuestionTimer = setTimeout(() => {
    state.nextQuestionTimer = null;
    newQuestion();
  }, 700);
}

function switchModeUI() {
  const mode = elements.modeSelect.value;
  const isMixedMode = mode === "mixedPractice";
  const activeQuestionKind = state.currentQuestion ? state.currentQuestion.kind : "typing";
  const isTypingQuestion = mode === "kanaToRomaji" || (isMixedMode && activeQuestionKind === "typing");
  const isDrawingQuestion = mode === "romajiToKana" || (isMixedMode && activeQuestionKind === "drawing");

  elements.typingArea.classList.toggle("hidden", !isTypingQuestion);
  elements.drawingArea.classList.toggle("hidden", !isDrawingQuestion);
  elements.scriptSelect.disabled = !isTypingQuestion;
  elements.writingScriptGroup.classList.toggle("hidden", !isDrawingQuestion);
  drawingFeature.setDrawingMarkButtonsEnabled(false);

  if (isDrawingQuestion) {
    const currentMode = state.currentQuestion && state.currentQuestion.canvasMode
      ? state.currentQuestion.canvasMode
      : elements.writingScriptSelect.value === "mixed"
        ? "both"
        : elements.writingScriptSelect.value;
    drawingFeature.setDrawingCanvasVisibility(currentMode);
  }

  if (isTypingQuestion) {
    elements.answerInput.focus();
  }

  resetResult(elements);
}

function newQuestion() {
  if (state.nextQuestionTimer) {
    clearTimeout(state.nextQuestionTimer);
    state.nextQuestionTimer = null;
  }

  const preferredRomajiList = getPreferredRomajiList();
  const mode = elements.modeSelect.value;
  if (mode === "kanaToRomaji") {
    state.currentQuestion = pickTypingQuestion({
      kanaData,
      scriptMode: elements.scriptSelect.value,
      kanaSet: elements.kanaSetSelect.value,
      getKanaCategoryFn,
      getQuestionWeightFn: getQuestionWeight,
      backlog: state.backlog,
      preferredRomajiList
    });
  } else if (mode === "romajiToKana") {
    state.currentQuestion = pickWritingQuestion({
      kanaData,
      writingMode: elements.writingScriptSelect.value,
      kanaSet: elements.kanaSetSelect.value,
      getKanaCategoryFn,
      getQuestionWeightFn: getQuestionWeight,
      backlog: state.backlog,
      preferredRomajiList
    });
  } else {
    state.currentQuestion = Math.random() > 0.5
      ? pickTypingQuestion({
        kanaData,
        scriptMode: elements.scriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog,
        preferredRomajiList
      })
      : pickWritingQuestion({
        kanaData,
        writingMode: elements.writingScriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog,
        preferredRomajiList
      });
  }

  switchModeUI();
  resetResult(elements);
  elements.answerInput.value = "";
  drawingFeature.clearAllCanvases();
  drawingFeature.setDrawingMarkButtonsEnabled(false);

  if (state.currentQuestion.kind === "typing") {
    elements.promptElement.textContent = state.currentQuestion.kana;
    elements.answerInput.focus();
  } else {
    drawingFeature.setDrawingCanvasVisibility(state.currentQuestion.canvasMode);
    elements.promptElement.textContent = state.currentQuestion.promptText;
  }

  updateQueueMeta();
}

function checkTypingAnswer() {
  if (!state.currentQuestion) {
    showResult(elements, "Create a question first.", false);
    return;
  }

  const userAnswer = sanitizeRomaji(elements.answerInput.value);
  if (!userAnswer) {
    showResult(elements, "Type a romaji answer.", false);
    return;
  }

  const correct = userAnswer === state.currentQuestion.romaji;
  if (correct) {
    state.typingRightCount += 1;
    showResult(elements, "Correct!", true);
  } else {
    state.typingWrongCount += 1;
    showResult(elements, `Not quite. Correct answer: ${state.currentQuestion.romaji}`, false);
  }

  updateBacklog({
    backlog: state.backlog,
    romaji: state.currentQuestion.romaji,
    wasCorrect: correct,
    scriptContext: getScriptContextForTyping(state.currentQuestion),
    answerMode: "typing"
  });

  updateSrsOnAttempt(state.currentQuestion.romaji, correct);
  addDailyAttempt(state, "typing", correct);
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
  updateQueueMeta();
  persistState();
  scheduleNextTypingQuestion();
}

function revealDrawingAnswer() {
  if (!state.currentQuestion) {
    showResult(elements, "Create a question first.", false);
    return;
  }

  showResult(elements, state.currentQuestion.revealText, true);
  drawingFeature.setDrawingMarkButtonsEnabled(true);
}

function markDrawingResult(wasCorrect) {
  if (!state.currentQuestion) {
    showResult(elements, "Create a question first.", false);
    return;
  }

  if (wasCorrect) {
    state.drawingRightCount += 1;
    drawingFeature.saveCurrentDrawingIfCorrect();
  } else {
    state.drawingWrongCount += 1;
  }

  updateBacklog({
    backlog: state.backlog,
    romaji: state.currentQuestion.romaji,
    wasCorrect,
    scriptContext: state.currentQuestion.canvasMode,
    answerMode: "drawing"
  });

  updateSrsOnAttempt(state.currentQuestion.romaji, wasCorrect);
  addDailyAttempt(state, "drawing", wasCorrect);
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
  updateQueueMeta();
  persistState();
  drawingFeature.setDrawingMarkButtonsEnabled(false);
  showResult(
    elements,
    wasCorrect ? "Saved as correct for this romaji." : "Saved as wrong for this romaji.",
    wasCorrect
  );
  newQuestion();
}

function resetAllData() {
  const shouldReset = window.confirm("Reset all quiz data, including backlog, drawings, and daily history?");
  if (!shouldReset) {
    return;
  }

  state.typingRightCount = 0;
  state.typingWrongCount = 0;
  state.drawingRightCount = 0;
  state.drawingWrongCount = 0;
  state.recentMistakes = [];
  state.practiceStrategy = "srs";
  state.lastCloudSyncAt = 0;
  state.syncUserEmail = "";

  Object.keys(state.srsByRomaji).forEach((romaji) => {
    state.srsByRomaji[romaji] = {
      dueAt: 0,
      intervalHours: 0,
      lastSeenAt: 0,
      lastCorrect: false
    };
  });

  Object.keys(state.backlog).forEach((romaji) => {
    const row = state.backlog[romaji];
    row.right = 0;
    row.wrong = 0;
    row.typingRight = 0;
    row.typingWrong = 0;
    row.drawingRight = 0;
    row.drawingWrong = 0;
    row.hiraganaTypingRight = 0;
    row.hiraganaTypingWrong = 0;
    row.hiraganaDrawingRight = 0;
    row.hiraganaDrawingWrong = 0;
    row.hiraganaRight = 0;
    row.hiraganaWrong = 0;
    row.katakanaTypingRight = 0;
    row.katakanaTypingWrong = 0;
    row.katakanaDrawingRight = 0;
    row.katakanaDrawingWrong = 0;
    row.katakanaRight = 0;
    row.katakanaWrong = 0;
  });

  Object.keys(state.drawingsByKana).forEach((kanaChar) => {
    delete state.drawingsByKana[kanaChar];
  });

  Object.keys(state.dailyStats).forEach((dateKey) => {
    delete state.dailyStats[dateKey];
  });

  state.progressUiDayMarker = getTodayKey();
  state.lastSavedAt = 0;
  localStorage.removeItem(STORAGE_KEY);

  elements.practiceStrategySelect.value = state.practiceStrategy;
  updateQueueMeta();
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
  drawingFeature.clearAllCanvases();
  drawingFeature.setDrawingMarkButtonsEnabled(false);
  setActiveProgressTab(elements, "backlog");
  showResult(elements, "All saved progress has been reset.", true);
}

function bindEvents() {
  elements.newQuestionBtn.addEventListener("click", newQuestion);
  elements.modeSelect.addEventListener("change", () => {
    switchModeUI();
    newQuestion();
  });
  elements.scriptSelect.addEventListener("change", newQuestion);
  elements.kanaSetSelect.addEventListener("change", () => {
    updateQueueMeta();
    newQuestion();
  });
  elements.practiceStrategySelect.addEventListener("change", () => {
    state.practiceStrategy = elements.practiceStrategySelect.value;
    updateQueueMeta();
    persistState();
    newQuestion();
  });
  elements.writingScriptSelect.addEventListener("change", () => {
    if (elements.modeSelect.value === "romajiToKana" || elements.modeSelect.value === "mixedPractice") {
      newQuestion();
    }
  });

  elements.backlogTabBtn.addEventListener("click", () => setActiveProgressTab(elements, "backlog"));
  elements.dailyProgressTabBtn.addEventListener("click", () => setActiveProgressTab(elements, "daily"));
  elements.openSyncBtn.addEventListener("click", () => {
    setActiveProgressTab(elements, "daily");
    elements.syncCard.scrollIntoView({ behavior: "smooth", block: "start" });
    elements.syncEmail.focus();
  });
  elements.resetAllDataBtn.addEventListener("click", resetAllData);
  bindProgressCompareSelectors(elements, state);

  elements.checkBtn.addEventListener("click", checkTypingAnswer);
  elements.playAudioBtn.addEventListener("click", playCurrentAudio);
  elements.muteAudioBtn.addEventListener("click", () => {
    state.audioMuted = !state.audioMuted;
    refreshAudioButton();
    persistState();
  });
  elements.revealBtn.addEventListener("click", revealDrawingAnswer);
  elements.clearCanvasBtn.addEventListener("click", drawingFeature.clearAllCanvases);
  elements.markRightBtn.addEventListener("click", () => markDrawingResult(true));
  elements.markWrongBtn.addEventListener("click", () => markDrawingResult(false));
  elements.drawGuideToggle.addEventListener("change", () => {
    state.drawGuideEnabled = elements.drawGuideToggle.checked;
    drawingFeature.setGuideEnabled(state.drawGuideEnabled);
    persistState();
  });
  elements.closeGalleryBtn.addEventListener("click", () => elements.drawingGalleryDialog.close());

  window.addEventListener("resize", () => redrawProgressGraph(elements, state));
  window.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      refreshProgressView();
    }
  });

  elements.backlogPanel.addEventListener("click", (event) => {
    const button = event.target.closest(".view-drawings-btn");
    if (!button) {
      return;
    }

    const kanaChar = button.dataset.kana;
    if (kanaChar) {
      drawingFeature.openDrawingGallery(kanaChar);
    }
  });

  elements.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkTypingAnswer();
    }
  });

  drawingFeature.bindCanvasEvents();
}

function init() {
  loadProgress({
    storageKey: STORAGE_KEY,
    state,
    kanaData,
    maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
    dailyHistoryLimit: DAILY_HISTORY_LIMIT
  });

  ensureTodayEntry();
  setupCloudSync({
    elements,
    state,
    getLocalPayload,
    applyRemotePayload,
    onLocalStateApplied() {
      updateStats(elements, state);
      renderBacklogView();
      refreshProgressView();
      updateQueueMeta();
      saveProgress({ storageKey: STORAGE_KEY, state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
    },
    onLocalStateSaved(payload) {
      state.lastSavedAt = Number(payload.savedAt || state.lastSavedAt || 0);
      state.lastCloudSyncAt = Number(payload.cloudSyncedAt || state.lastCloudSyncAt || 0);
      state.syncUserEmail = payload.userEmail || state.syncUserEmail || "";
    }
  }).then((syncApi) => {
    cloudSync = syncApi;
  }).catch((error) => {
    elements.syncStatus.textContent = `Cloud sync unavailable: ${error.message}`;
  });

  bindEvents();
  setupPwaInstall();
  elements.practiceStrategySelect.value = state.practiceStrategy;
  elements.drawGuideToggle.checked = state.drawGuideEnabled;
  drawingFeature.setGuideEnabled(state.drawGuideEnabled);
  refreshAudioButton();
  updateQueueMeta();
  switchModeUI();
  drawingFeature.clearAllCanvases();
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
  setActiveProgressTab(elements, "backlog");
}

init();
