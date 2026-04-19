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
import { updateStats, resetResult, showResult, showTypingMistake, setActiveProgressTab } from "./core/ui.js";
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
import { createSrsManager } from "./features/srs.js";
import { createQueueManager } from "./features/queue.js";
import { createAudioManager } from "./features/audio.js";
import { createAnsweringManager } from "./features/answering.js";
import { createProgressLayoutManager } from "./features/progressLayout.js";
import { createProgressPreferencesManager } from "./features/progressPreferences.js";
import { createBackupManager } from "./features/backup.js";
import { createDistractorRenderer } from "./features/distractors.js";

const elements = getElements();
const state = createState(kanaData);
const drawingFeature = createDrawingFeature({
  elements,
  state,
  maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA
});

// Feature managers
const getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);
const srsManager = createSrsManager(state);
const queueManager = createQueueManager(state, elements, srsManager, getKanaCategoryFn);
const audioManager = createAudioManager(state, elements);
const answeringManager = createAnsweringManager({
  state,
  elements,
  srsManager,
  queueManager,
  showResult,
  showTypingMistake,
  updateStats,
  updateBacklog,
  addDailyAttemptFn: (targetState, mode, wasCorrect, romaji) => {
    addDailyAttempt(targetState, mode, wasCorrect, getKanaCategoryFn(romaji));
  },
  renderBacklogViewFn: () => renderBacklogView(),
  refreshProgressViewFn: () => refreshProgressView(),
  persistStateFn: () => persistState()
});

let cloudSync = { queueUpload() {}, async syncNow() {} };
let progressLayoutManager = null;
let progressPreferencesManager = null;
let backupManager = null;
let distractorRenderer = null;
let deferredInstallPrompt = null;
const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

function getAnswerInputValue() {
  if ("value" in elements.answerInput) {
    return elements.answerInput.value;
  }
  return elements.answerInput.textContent || "";
}

function setAnswerInputValue(value) {
  if ("value" in elements.answerInput) {
    elements.answerInput.value = value;
    return;
  }
  elements.answerInput.textContent = value;
}

function focusAnswerInput() {
  elements.answerInput.focus();
}

function shouldAutoFocusAnswer() {
  return !isCoarsePointer;
}

function ensureAudioButtonsAboveKanaBox() {
  const playAudioBtn = document.getElementById("playAudioBtn");
  const muteAudioBtn = document.getElementById("muteAudioBtn");
  const promptWrap = document.querySelector(".prompt-wrap");
  const quizCard = promptWrap ? promptWrap.closest(".quiz") : null;

  if (!playAudioBtn || !muteAudioBtn || !promptWrap || !quizCard) {
    return;
  }

  let quickActions = quizCard.querySelector(".quiz-quick-actions");
  if (!quickActions) {
    quickActions = document.createElement("div");
    quickActions.className = "quiz-quick-actions";
  }

  quickActions.append(playAudioBtn, muteAudioBtn);
  quizCard.insertBefore(quickActions, promptWrap);
}

function    setupPwaInstall() {
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
    getKanaCategoryFn,
    filters: state.backlogFilters
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

function clampDailyGoal(value, min = 0, max = 200, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.round(parsed)));
}

function normalizeDailyGoalsFromState() {
  progressPreferencesManager.normalizeDailyGoalsFromState();
}

function renderDailyGoalInputs() {
  progressPreferencesManager.renderDailyGoalInputs();
}

function saveDailyGoalFromUi() {
  progressPreferencesManager.saveDailyGoalFromUi();
}

function resetBacklogFilters() {
  progressPreferencesManager.resetBacklogFilters();
}

function renderBacklogFilterInputs() {
  progressPreferencesManager.renderBacklogFilterInputs();
}

function applyBacklogFiltersFromUi() {
  progressPreferencesManager.applyBacklogFiltersFromUi();
}

function normalizeProgressLayoutState() {
  progressLayoutManager.normalizeState();
}

function renderProgressSubtabUi() {
  progressLayoutManager.render();
}

function setActiveProgressSubtab(subtabName) {
  progressLayoutManager.setActiveSubtab(subtabName);
}

function toggleProgressSection(sectionName) {
  progressLayoutManager.toggleSection(sectionName);
}

function exportLocalProgress() {
  backupManager.exportLocalProgress();
}

async function importLocalProgressFromFile(file) {
  await backupManager.importLocalProgressFromFile(file);
}

function getLocalPayload() {
  return backupManager.getLocalPayload();
}

function applyRemotePayload(payload) {
  backupManager.applyRemotePayload(payload);
}

function refreshProgressView() {
  renderDailyProgress({ elements, state, setActiveProgressTab });
  renderProgressSubtabUi();
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

  if (!state.dailyCategoryStats[todayKey]) {
    state.dailyCategoryStats[todayKey] = {
      normal: 0,
      dakuten: 0,
      yoon: 0
    };
  }
}

function setupAnswerInputGuards() {
  const input = elements.answerInput;

  function looksLikeCredential(value) {
    if (!value) {
      return false;
    }
    if (value.length > 24) {
      return true;
    }
    return /@|\s|https?:\/\//i.test(value) || /[^a-z-]/i.test(value);
  }

  function clearCredentialLikeValue() {
    const currentValue = "value" in input ? input.value : input.textContent || "";
    if (looksLikeCredential(currentValue)) {
      if ("value" in input) {
        input.value = "";
      } else {
        input.textContent = "";
      }
    }
  }

  input.addEventListener("focus", clearCredentialLikeValue);
  input.addEventListener("pointerdown", clearCredentialLikeValue);
  input.addEventListener("touchstart", clearCredentialLikeValue);
  input.addEventListener("keydown", clearCredentialLikeValue);

  // Some password managers inject slightly after first paint.
  setTimeout(() => {
    clearCredentialLikeValue();
  }, 200);
}

function scheduleNextTypingQuestion(delayMs = 700) {
  if (state.nextQuestionTimer) {
    clearTimeout(state.nextQuestionTimer);
  }

  state.nextQuestionTimer = setTimeout(() => {
    state.nextQuestionTimer = null;
    newQuestion();
  }, delayMs);
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
    if (shouldAutoFocusAnswer()) {
      focusAnswerInput();
    }
    if (elements.quickAnswerOptions) {
      elements.quickAnswerOptions.classList.remove("hidden");
    }
  } else if (elements.quickAnswerOptions) {
    elements.quickAnswerOptions.classList.add("hidden");
  }

  resetResult(elements);
}

function newQuestion() {
  if (state.nextQuestionTimer) {
    clearTimeout(state.nextQuestionTimer);
    state.nextQuestionTimer = null;
  }

  try {
    const mode = elements.modeSelect.value;
    const nextQuestionKind = mode === "kanaToRomaji"
      ? "typing"
      : mode === "romajiToKana"
        ? "drawing"
        : (Math.random() > 0.5 ? "typing" : "drawing");
    const previousRomaji = state.currentQuestion
      ? (state.currentQuestion.trackingRomaji || state.currentQuestion.romaji || null)
      : null;
    const preferredRomajiList = queueManager.getPreferredRomajiList(nextQuestionKind);

    if (nextQuestionKind === "typing") {
      state.currentQuestion = pickTypingQuestion({
        kanaData,
        scriptMode: elements.scriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog,
        preferredRomajiList,
        avoidRomaji: previousRomaji
      });
    } else {
      state.currentQuestion = pickWritingQuestion({
        kanaData,
        writingMode: elements.writingScriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog,
        preferredRomajiList,
        avoidRomaji: previousRomaji
      });
    }
  } catch (error) {
    state.currentQuestion = null;
    showResult(elements, `Question error: ${error.message}`, false);
    return;
  }

  switchModeUI();
  resetResult(elements);
  setAnswerInputValue("");
  drawingFeature.clearAllCanvases();
  drawingFeature.setDrawingMarkButtonsEnabled(false);

  if (state.currentQuestion.kind === "typing") {
    elements.promptElement.textContent = state.currentQuestion.kana;
    if (shouldAutoFocusAnswer()) {
      focusAnswerInput();
    }
  } else {
    drawingFeature.setDrawingCanvasVisibility(state.currentQuestion.canvasMode);
    elements.promptElement.textContent = state.currentQuestion.promptText;
  }

  distractorRenderer.renderQuickAnswerOptions();
  queueManager.updateQueueMeta();
}

function checkTypingAnswer(forcedAnswer = null) {
  const rawAnswer = typeof forcedAnswer === "string" ? forcedAnswer : getAnswerInputValue();
  const userAnswer = sanitizeRomaji(rawAnswer);
  const outcome = answeringManager.processTypingAnswer(userAnswer);
  if (!outcome || !outcome.accepted) {
    return null;
  }
  setAnswerInputValue("");
  scheduleNextTypingQuestion(outcome.correct ? 850 : 2200);
  return outcome;
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
  answeringManager.processDrawingResult(wasCorrect, () => drawingFeature.saveCurrentDrawingIfCorrect());
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
  state.recentTypingMistakes = [];
  state.recentDrawingMistakes = [];
  state.practiceStrategy = "srs";
  state.lastCloudSyncAt = 0;
  state.syncUserEmail = "";
  state.dailyGoals = {
    total: 25,
    typing: 12,
    drawing: 8,
    normal: 10,
    dakuten: 6,
    yoon: 6
  };
  state.dailyGoal = 25;
  resetBacklogFilters();
  state.progressSubtab = "overview";
  state.progressCollapsedSections = {
    overview: false,
    trends: false,
    compare: false,
    sync: false
  };

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
  Object.keys(state.dailyCategoryStats).forEach((dateKey) => {
    delete state.dailyCategoryStats[dateKey];
  });

  state.progressUiDayMarker = getTodayKey();
  state.lastSavedAt = 0;
  localStorage.removeItem(STORAGE_KEY);

  elements.practiceStrategySelect.value = state.practiceStrategy;
  renderDailyGoalInputs();
  renderBacklogFilterInputs();
  queueManager.updateQueueMeta();
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
    queueManager.updateQueueMeta();
    newQuestion();
  });
  elements.practiceStrategySelect.addEventListener("change", () => {
    state.practiceStrategy = elements.practiceStrategySelect.value;
    queueManager.updateQueueMeta();
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
    progressLayoutManager.openSyncSection();
    elements.syncCard.scrollIntoView({ behavior: "smooth", block: "start" });
    elements.syncEmail.focus();
  });
  elements.resetAllDataBtn.addEventListener("click", resetAllData);
  elements.saveDailyGoalBtn.addEventListener("click", saveDailyGoalFromUi);
  [
    elements.dailyGoalTotalInput,
    elements.dailyGoalTypingInput,
    elements.dailyGoalDrawingInput,
    elements.dailyGoalNormalInput,
    elements.dailyGoalDakutenInput,
    elements.dailyGoalYoonInput
  ].forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        saveDailyGoalFromUi();
      }
    });
  });

  elements.backlogStatusFilter.addEventListener("change", applyBacklogFiltersFromUi);
  elements.backlogScriptFilter.addEventListener("change", applyBacklogFiltersFromUi);
  elements.backlogWeaknessFilter.addEventListener("change", applyBacklogFiltersFromUi);
  elements.backlogMinAttemptsFilter.addEventListener("change", applyBacklogFiltersFromUi);
  elements.resetBacklogFiltersBtn.addEventListener("click", () => {
    resetBacklogFilters();
    renderBacklogFilterInputs();
    renderBacklogView();
    persistState();
  });

  elements.progressOverviewTabBtn.addEventListener("click", () => {
    setActiveProgressSubtab("overview");
    persistState();
  });
  elements.progressTrendsTabBtn.addEventListener("click", () => {
    setActiveProgressSubtab("trends");
    persistState();
  });
  elements.progressCompareTabBtn.addEventListener("click", () => {
    setActiveProgressSubtab("compare");
    persistState();
  });
  elements.progressSyncTabBtn.addEventListener("click", () => {
    setActiveProgressSubtab("sync");
    persistState();
  });

  elements.toggleOverviewSectionBtn.addEventListener("click", () => toggleProgressSection("overview"));
  elements.toggleTrendsSectionBtn.addEventListener("click", () => toggleProgressSection("trends"));
  elements.toggleCompareSectionBtn.addEventListener("click", () => toggleProgressSection("compare"));
  elements.toggleSyncSectionBtn.addEventListener("click", () => toggleProgressSection("sync"));
  elements.exportDataBtn.addEventListener("click", exportLocalProgress);
  elements.importDataBtn.addEventListener("click", () => {
    elements.importDataInput.click();
  });
  elements.importDataInput.addEventListener("change", async () => {
    const file = elements.importDataInput.files && elements.importDataInput.files[0]
      ? elements.importDataInput.files[0]
      : null;
    await importLocalProgressFromFile(file);
    elements.importDataInput.value = "";
  });
  bindProgressCompareSelectors(elements, state);

  elements.checkBtn.addEventListener("click", checkTypingAnswer);
  elements.playAudioBtn.addEventListener("click", () => audioManager.playCurrentAudio());
  elements.muteAudioBtn.addEventListener("click", () => {
    audioManager.toggleAudioMute();
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
      event.preventDefault();
      checkTypingAnswer();
    }
  });

  elements.answerInput.addEventListener("input", () => {
    const value = getAnswerInputValue().replace(/[\r\n]+/g, "");
    if (value !== getAnswerInputValue()) {
      setAnswerInputValue(value);
    }
  });

  if (elements.quickAnswerOptions) {
    elements.quickAnswerOptions.addEventListener("click", (event) => {
      const button = event.target.closest(".quick-answer-btn");
      if (!button || button.disabled) {
        return;
      }

      const answer = button.dataset.answer || "";
      setAnswerInputValue(answer);
      const outcome = checkTypingAnswer(answer);
      if (!outcome || !outcome.accepted) {
        return;
      }

      const optionButtons = Array.from(elements.quickAnswerOptions.querySelectorAll(".quick-answer-btn"));
      optionButtons.forEach((optBtn) => {
        optBtn.disabled = true;
      });

      if (outcome.correct) {
        button.classList.add("is-correct");
        return;
      }

      button.classList.add("is-wrong");
      const correctButton = optionButtons.find((optBtn) => optBtn.dataset.answer === outcome.correctAnswer);
      if (correctButton) {
        correctButton.classList.add("is-correct");
      }
    });
  }

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

  progressPreferencesManager = createProgressPreferencesManager({
    state,
    elements,
    persistState,
    refreshProgressView,
    renderBacklogView,
    showResult
  });

  progressLayoutManager = createProgressLayoutManager({
    state,
    elements,
    persistState
  });

  backupManager = createBackupManager({
    state,
    kanaData,
    MAX_DRAWINGS_PER_KANA,
    DAILY_HISTORY_LIMIT,
    showResultFn: (message, success) => showResult(elements, message, success),
    buildProgressPayload,
    applyProgressPayload,
    onImportComplete() {
      ensureTodayEntry();
      elements.practiceStrategySelect.value = state.practiceStrategy;
      elements.drawGuideToggle.checked = state.drawGuideEnabled;
      renderDailyGoalInputs();
      renderBacklogFilterInputs();
      drawingFeature.setGuideEnabled(state.drawGuideEnabled);
      audioManager.refreshAudioButton();
      updateStats(elements, state);
      renderBacklogView();
      refreshProgressView();
      queueManager.updateQueueMeta();
      persistState();
    }
  });

  distractorRenderer = createDistractorRenderer({ elements, state, kanaData });

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
      queueManager.updateQueueMeta();
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
  ensureAudioButtonsAboveKanaBox();
  setupAnswerInputGuards();
  setupPwaInstall();
  elements.practiceStrategySelect.value = state.practiceStrategy;
  elements.drawGuideToggle.checked = state.drawGuideEnabled;
  normalizeDailyGoalsFromState();
  normalizeProgressLayoutState();
  renderDailyGoalInputs();
  renderBacklogFilterInputs();
  renderProgressSubtabUi();
  drawingFeature.setGuideEnabled(state.drawGuideEnabled);
  audioManager.refreshAudioButton();
  queueManager.updateQueueMeta();
  switchModeUI();
  drawingFeature.clearAllCanvases();
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
  setActiveProgressTab(elements, "backlog");
}

init();
