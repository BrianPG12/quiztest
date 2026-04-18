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

function getLastVowel(romaji) {
  const match = String(romaji).match(/[aiueo](?!.*[aiueo])/);
  return match ? match[0] : "";
}

function getStem(romaji) {
  return String(romaji).replace(/[aiueo]$/, "");
}

function getLevenshteinDistance(a, b) {
  const s = String(a);
  const t = String(b);
  const rows = s.length + 1;
  const cols = t.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < cols; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[s.length][t.length];
}

function scoreDistractorSimilarity(correct, candidate) {
  let score = 0;
  const correctStr = String(correct);
  const candidateStr = String(candidate);

  if (candidateStr[0] === correctStr[0]) {
    score += 4;
  }
  if (candidateStr.slice(0, 2) === correctStr.slice(0, 2)) {
    score += 3;
  }
  if (getLastVowel(candidateStr) === getLastVowel(correctStr)) {
    score += 2;
  }
  if (getStem(candidateStr) === getStem(correctStr)) {
    score += 3;
  }
  if ((candidateStr.includes("y") && correctStr.includes("y")) || (candidateStr.includes("sh") && correctStr.includes("sh"))) {
    score += 1;
  }

  score -= getLevenshteinDistance(correctStr, candidateStr);
  return score;
}

function shuffleArray(values) {
  const arr = [...values];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandomDistinct(source, count, excluded = new Set()) {
  const filtered = source.filter((item) => !excluded.has(item));
  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, count);
}

function renderQuickAnswerOptions() {
  if (!elements.quickAnswerOptions) {
    return;
  }

  if (!state.currentQuestion || state.currentQuestion.kind !== "typing") {
    elements.quickAnswerOptions.innerHTML = "";
    elements.quickAnswerOptions.classList.add("hidden");
    return;
  }

  const correct = state.currentQuestion.romaji;
  const allRomaji = kanaData.map((item) => item.romaji).filter((romaji) => romaji !== correct);
  const ranked = allRomaji
    .map((romaji) => ({ romaji, score: scoreDistractorSimilarity(correct, romaji) }))
    .sort((a, b) => b.score - a.score);

  let similarPool = ranked.filter((item) => item.score >= 3).map((item) => item.romaji);
  if (similarPool.length < 6) {
    similarPool = ranked.slice(0, 12).map((item) => item.romaji);
  }

  const distractorSet = new Set();

  // Keep most choices close to the target so they feel like genuine confusions.
  pickRandomDistinct(similarPool, 2).forEach((romaji) => distractorSet.add(romaji));

  // Keep one option more random to avoid being too predictable.
  pickRandomDistinct(allRomaji, 1, distractorSet).forEach((romaji) => distractorSet.add(romaji));

  if (distractorSet.size < 3) {
    pickRandomDistinct(allRomaji, 3 - distractorSet.size, distractorSet).forEach((romaji) => distractorSet.add(romaji));
  }

  const options = shuffleArray([correct, ...distractorSet].slice(0, 4));

  elements.quickAnswerOptions.innerHTML = options
    .map((romaji) => `<button type="button" class="quick-answer-btn" data-answer="${romaji}">${romaji}</button>`)
    .join("");
  elements.quickAnswerOptions.classList.remove("hidden");
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

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportLocalProgress() {
  const payload = buildProgressPayload({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
  const now = new Date();
  const timestamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    "-",
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0")
  ].join("");
  const filename = `kana-quiz-backup-${timestamp}.json`;
  downloadTextFile(filename, JSON.stringify(payload, null, 2), "application/json");
  showResult(elements, "Backup exported to JSON.", true);
}

function toSafeCount(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }
  return parsed;
}

function mergeSrsEntry(localEntry, importedEntry) {
  const localDueAt = toSafeCount(localEntry && localEntry.dueAt);
  const importDueAt = toSafeCount(importedEntry && importedEntry.dueAt);
  const dueCandidates = [localDueAt, importDueAt].filter((value) => value > 0);
  const dueAt = dueCandidates.length > 0 ? Math.min(...dueCandidates) : 0;

  const localSeenAt = toSafeCount(localEntry && localEntry.lastSeenAt);
  const importSeenAt = toSafeCount(importedEntry && importedEntry.lastSeenAt);

  return {
    dueAt,
    intervalHours: Math.max(toSafeCount(localEntry && localEntry.intervalHours), toSafeCount(importedEntry && importedEntry.intervalHours)),
    lastSeenAt: Math.max(localSeenAt, importSeenAt),
    lastCorrect: importSeenAt >= localSeenAt
      ? Boolean(importedEntry && importedEntry.lastCorrect)
      : Boolean(localEntry && localEntry.lastCorrect)
  };
}

function mergeBacklogRow(targetRow, incomingRow) {
  if (!incomingRow || typeof incomingRow !== "object") {
    return;
  }

  const numericKeys = [
    "right", "wrong",
    "typingRight", "typingWrong",
    "drawingRight", "drawingWrong",
    "hiraganaTypingRight", "hiraganaTypingWrong",
    "hiraganaDrawingRight", "hiraganaDrawingWrong",
    "hiraganaRight", "hiraganaWrong",
    "katakanaTypingRight", "katakanaTypingWrong",
    "katakanaDrawingRight", "katakanaDrawingWrong",
    "katakanaRight", "katakanaWrong"
  ];

  numericKeys.forEach((key) => {
    targetRow[key] = toSafeCount(targetRow[key]) + toSafeCount(incomingRow[key]);
  });
}

function mergeDailyStats(localDailyStats, incomingDailyStats) {
  if (!incomingDailyStats || typeof incomingDailyStats !== "object") {
    return;
  }

  Object.keys(incomingDailyStats).forEach((dateKey) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
      return;
    }

    const incoming = incomingDailyStats[dateKey];
    if (!incoming || typeof incoming !== "object") {
      return;
    }

    if (!localDailyStats[dateKey]) {
      localDailyStats[dateKey] = {
        typingRight: 0,
        typingWrong: 0,
        drawingRight: 0,
        drawingWrong: 0
      };
    }

    localDailyStats[dateKey].typingRight += toSafeCount(incoming.typingRight);
    localDailyStats[dateKey].typingWrong += toSafeCount(incoming.typingWrong);
    localDailyStats[dateKey].drawingRight += toSafeCount(incoming.drawingRight);
    localDailyStats[dateKey].drawingWrong += toSafeCount(incoming.drawingWrong);
  });
}

function mergeDailyCategoryStats(localDailyCategoryStats, incomingDailyCategoryStats) {
  if (!incomingDailyCategoryStats || typeof incomingDailyCategoryStats !== "object") {
    return;
  }

  Object.keys(incomingDailyCategoryStats).forEach((dateKey) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
      return;
    }

    const incoming = incomingDailyCategoryStats[dateKey];
    if (!incoming || typeof incoming !== "object") {
      return;
    }

    if (!localDailyCategoryStats[dateKey]) {
      localDailyCategoryStats[dateKey] = {
        normal: 0,
        dakuten: 0,
        yoon: 0
      };
    }

    localDailyCategoryStats[dateKey].normal += toSafeCount(incoming.normal);
    localDailyCategoryStats[dateKey].dakuten += toSafeCount(incoming.dakuten);
    localDailyCategoryStats[dateKey].yoon += toSafeCount(incoming.yoon);
  });
}

function mergeProgressPayload(importedPayload) {
  if (!importedPayload || typeof importedPayload !== "object") {
    return;
  }

  const localPayload = buildProgressPayload({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });

  state.typingRightCount = toSafeCount(localPayload.typingRightCount) + toSafeCount(importedPayload.typingRightCount);
  state.typingWrongCount = toSafeCount(localPayload.typingWrongCount) + toSafeCount(importedPayload.typingWrongCount);
  state.drawingRightCount = toSafeCount(localPayload.drawingRightCount) + toSafeCount(importedPayload.drawingRightCount);
  state.drawingWrongCount = toSafeCount(localPayload.drawingWrongCount) + toSafeCount(importedPayload.drawingWrongCount);

  Object.keys(state.srsByRomaji).forEach((romaji) => {
    const localEntry = localPayload.srsByRomaji && localPayload.srsByRomaji[romaji];
    const incomingEntry = importedPayload.srsByRomaji && importedPayload.srsByRomaji[romaji];
    state.srsByRomaji[romaji] = mergeSrsEntry(localEntry, incomingEntry);
  });

  Object.keys(state.backlog).forEach((romaji) => {
    const incomingRow = importedPayload.backlog && importedPayload.backlog[romaji];
    mergeBacklogRow(state.backlog[romaji], incomingRow);
  });

  mergeDailyStats(state.dailyStats, importedPayload.dailyStats);
  mergeDailyCategoryStats(state.dailyCategoryStats, importedPayload.dailyCategoryStats);

  const combinedTypingMistakes = [
    ...(Array.isArray(importedPayload.recentTypingMistakes) ? importedPayload.recentTypingMistakes : []),
    ...(Array.isArray(localPayload.recentTypingMistakes) ? localPayload.recentTypingMistakes : [])
  ].filter((value) => typeof value === "string");

  const combinedDrawingMistakes = [
    ...(Array.isArray(importedPayload.recentDrawingMistakes) ? importedPayload.recentDrawingMistakes : []),
    ...(Array.isArray(localPayload.recentDrawingMistakes) ? localPayload.recentDrawingMistakes : [])
  ].filter((value) => typeof value === "string");

  state.recentTypingMistakes = [...new Set(combinedTypingMistakes)].slice(0, 120);
  state.recentDrawingMistakes = [...new Set(combinedDrawingMistakes)].slice(0, 120);
  state.recentMistakes = [...new Set([...state.recentTypingMistakes, ...state.recentDrawingMistakes])].slice(0, 120);

  if (importedPayload.drawingsByKana && typeof importedPayload.drawingsByKana === "object") {
    Object.keys(importedPayload.drawingsByKana).forEach((kanaChar) => {
      const localList = Array.isArray(state.drawingsByKana[kanaChar]) ? state.drawingsByKana[kanaChar] : [];
      const incomingList = Array.isArray(importedPayload.drawingsByKana[kanaChar])
        ? importedPayload.drawingsByKana[kanaChar].filter((value) => typeof value === "string")
        : [];
      state.drawingsByKana[kanaChar] = [...new Set([...incomingList, ...localList])].slice(0, MAX_DRAWINGS_PER_KANA);
    });
  }

  const localGoals = localPayload.dailyGoals && typeof localPayload.dailyGoals === "object"
    ? localPayload.dailyGoals
    : { total: localPayload.dailyGoal };
  const incomingGoals = importedPayload.dailyGoals && typeof importedPayload.dailyGoals === "object"
    ? importedPayload.dailyGoals
    : { total: importedPayload.dailyGoal };

  const localTotalGoal = clampDailyGoal(localGoals.total, 5, 200, 25);
  const importedTotalGoal = clampDailyGoal(incomingGoals.total, 5, 200, 25);
  const shouldUseImportedGoals = localTotalGoal === 25 && importedTotalGoal !== 25;

  state.dailyGoals = {
    total: shouldUseImportedGoals ? importedTotalGoal : localTotalGoal,
    typing: shouldUseImportedGoals
      ? clampDailyGoal(incomingGoals.typing, 0, 200, 12)
      : clampDailyGoal(localGoals.typing, 0, 200, 12),
    drawing: shouldUseImportedGoals
      ? clampDailyGoal(incomingGoals.drawing, 0, 200, 8)
      : clampDailyGoal(localGoals.drawing, 0, 200, 8),
    normal: shouldUseImportedGoals
      ? clampDailyGoal(incomingGoals.normal, 0, 200, 10)
      : clampDailyGoal(localGoals.normal, 0, 200, 10),
    dakuten: shouldUseImportedGoals
      ? clampDailyGoal(incomingGoals.dakuten, 0, 200, 6)
      : clampDailyGoal(localGoals.dakuten, 0, 200, 6),
    yoon: shouldUseImportedGoals
      ? clampDailyGoal(incomingGoals.yoon, 0, 200, 6)
      : clampDailyGoal(localGoals.yoon, 0, 200, 6)
  };
  state.dailyGoal = state.dailyGoals.total;
  state.lastSavedAt = Math.max(toSafeCount(localPayload.savedAt), toSafeCount(importedPayload.savedAt));
}

async function importLocalProgressFromFile(file) {
  if (!file) {
    return;
  }

  let payload = null;
  try {
    const raw = await file.text();
    payload = JSON.parse(raw);
  } catch {
    showResult(elements, "Import failed: invalid JSON file.", false);
    return;
  }

  if (!payload || typeof payload !== "object") {
    showResult(elements, "Import failed: backup format is not valid.", false);
    return;
  }

  const shouldMerge = window.confirm(
    "Merge imported progress into current local progress? Click OK to merge, or Cancel to choose replace/cancel."
  );

  if (shouldMerge) {
    mergeProgressPayload(payload);
  } else {
    const shouldReplace = window.confirm("Replace current local progress with imported data?");
    if (!shouldReplace) {
      return;
    }

    applyProgressPayload({
      payload,
      state,
      kanaData,
      maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
      dailyHistoryLimit: DAILY_HISTORY_LIMIT
    });
  }

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
  showResult(elements, shouldMerge
    ? "Backup merged into local progress."
    : "Backup imported and local progress restored.", true);
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
    const preferredRomajiList = queueManager.getPreferredRomajiList(nextQuestionKind);

    if (nextQuestionKind === "typing") {
      state.currentQuestion = pickTypingQuestion({
        kanaData,
        scriptMode: elements.scriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog,
        preferredRomajiList
      });
    } else {
      state.currentQuestion = pickWritingQuestion({
        kanaData,
        writingMode: elements.writingScriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog,
        preferredRomajiList
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

  renderQuickAnswerOptions();
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
