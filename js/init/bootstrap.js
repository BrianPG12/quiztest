/**
 * Application Bootstrap
 *
 * Single responsibility: orchestrate feature managers and wire business-logic
 * handlers to the event bus.  No DOM event listeners are registered here —
 * those live in eventBinder.js.
 *
 * Dependency Inversion: all cross-feature communication flows through the
 * event bus; this module subscribes to events and calls the appropriate
 * business-logic functions in response.
 */

import {
  kanaData,
  YOON_SET,
  DAKUTEN_SET,
  STORAGE_KEY,
  MAX_DRAWINGS_PER_KANA,
  DAILY_HISTORY_LIMIT
} from "../data/kanaData.js";
import { getElements } from "../dom/elements.js";
import { createState } from "../core/state.js";
import { sanitizeRomaji, getTodayKey } from "../core/utils.js";
import { eventBus, EVENT_NAMES } from "../core/eventBus.js";
import { updateStats, resetResult, showResult, showTypingMistake, setActiveProgressTab } from "../core/ui.js";
import { getKanaCategory, renderBacklog, updateBacklog, getQuestionWeight } from "../features/backlog.js";
import { pickTypingQuestion, pickWritingQuestion } from "../features/quiz.js";
import { saveProgress, loadProgress, buildProgressPayload, applyProgressPayload } from "../features/storage.js";
import {
  addDailyAttempt,
  renderDailyProgress,
  bindProgressCompareSelectors,
  redrawProgressGraph,
  renderGoalProgress
} from "../features/progress.js";
import { createDrawingFeature } from "../features/drawing.js";
import { setupCloudSync } from "../features/cloudSync.js";
import { createSrsManager } from "../features/srs.js";
import { createQueueManager } from "../features/queue.js";
import { createAudioManager } from "../features/audio.js";
import { createAnsweringManager } from "../features/answering.js";
import { createProgressLayoutManager } from "../features/progressLayout.js";
import { createProgressPreferencesManager } from "../features/progressPreferences.js";
import { createBackupManager } from "../features/backup.js";
import { createDistractorRenderer } from "../features/distractors.js";
import { createHintsManager } from "../features/hints.js";
import { KeyboardController } from "../core/keyboard.js";
import { createSwipeDetector } from "../core/swipe.js";
import { showConfirm } from "../core/confirm.js";
import { bindEvents } from "./eventBinder.js";

// ─── Module-level singletons ─────────────────────────────────────────────────

const elements = getElements();
const state = createState(kanaData);

const drawingFeature = createDrawingFeature({
  elements,
  state,
  maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
  eventBus,
  EVENT_NAMES
});

const getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);
const srsManager = createSrsManager(state);
const queueManager = createQueueManager(state, elements, srsManager, getKanaCategoryFn);
const audioManager = createAudioManager(state, elements);
const hintsManager = createHintsManager();

const answeringManager = createAnsweringManager({
  state,
  elements,
  srsManager,
  queueManager,
  hintsManager,
  showResult: (msg, ok) => showResult(elements, msg, ok),
  showTypingMistake: (user, correct) => showTypingMistake(elements, user, correct),
  updateBacklog,
  addDailyAttemptFn: (targetState, mode, wasCorrect, romaji) => {
    addDailyAttempt(targetState, mode, wasCorrect, getKanaCategoryFn(romaji));
  },
  eventBus
});

let cloudSync = { queueUpload() {}, async syncNow() {} };
let progressLayoutManager = null;
let progressPreferencesManager = null;
let backupManager = null;
let distractorRenderer = null;
let deferredInstallPrompt = null;

const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

// ─── Input helpers ────────────────────────────────────────────────────────────

function getAnswerInputValue() {
  if ("value" in elements.answerInput) return elements.answerInput.value;
  return elements.answerInput.textContent || "";
}

function setAnswerInputValue(value) {
  if ("value" in elements.answerInput) {
    elements.answerInput.value = value;
  } else {
    elements.answerInput.textContent = value;
  }
}

function focusAnswerInput() {
  elements.answerInput.focus();
}

function shouldAutoFocusAnswer() {
  return !isCoarsePointer;
}

// ─── Layout helpers ───────────────────────────────────────────────────────────

function ensureAudioButtonsAboveKanaBox() {
  const playAudioBtn = document.getElementById("playAudioBtn");
  const muteAudioBtn = document.getElementById("muteAudioBtn");
  const promptWrap = document.querySelector(".prompt-wrap");
  const quizCard = promptWrap ? promptWrap.closest(".quiz") : null;

  if (!playAudioBtn || !muteAudioBtn || !promptWrap || !quizCard) return;

  let quickActions = quizCard.querySelector(".quiz-quick-actions");
  if (!quickActions) {
    quickActions = document.createElement("div");
    quickActions.className = "quiz-quick-actions";
  }

  quickActions.append(playAudioBtn, muteAudioBtn);
  quizCard.insertBefore(quickActions, promptWrap);
}

function setupPwaInstall() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker.register("sw.js").catch(() => {
    // Non-blocking.
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installAppBtn.classList.remove("hidden");
  });

  elements.installAppBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
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

// ─── State helpers ────────────────────────────────────────────────────────────

function renderBacklogView() {
  renderBacklog({
    kanaData,
    backlog: state.backlog,
    drawingsByKana: state.drawingsByKana,
    getKanaCategoryFn,
    filters: state.backlogFilters,
    srsByRomaji: state.srsByRomaji
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

function refreshProgressView() {
  renderDailyProgress({ elements, state, setActiveProgressTab });
  renderGoalProgress(elements, state);
  progressLayoutManager && progressLayoutManager.render();
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

// ─── Quiz logic ───────────────────────────────────────────────────────────────

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
    if (shouldAutoFocusAnswer()) focusAnswerInput();
    if (elements.quickAnswerOptions) elements.quickAnswerOptions.classList.remove("hidden");
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

  hintsManager.reset();

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
    hintsManager.setQuestion(state.currentQuestion);
    updateHintButton();
    if (shouldAutoFocusAnswer()) focusAnswerInput();
  } else {
    drawingFeature.setDrawingCanvasVisibility(state.currentQuestion.canvasMode);
    elements.promptElement.textContent = state.currentQuestion.promptText;
  }

  distractorRenderer && distractorRenderer.renderQuickAnswerOptions();
  queueManager.updateQueueMeta();
  eventBus.emit(EVENT_NAMES.QUESTION_NEW);
}

// ─── Hint system integration ──────────────────────────────────────────────────

function updateHintButton() {
  const btn = document.getElementById("hintBtn");
  if (!btn) return;

  const hintText = hintsManager.getNextHint();
  if (hintText === null) {
    btn.textContent = "Hint";
    btn.disabled = false;
    btn.classList.remove("hint-exhausted");
    return;
  }

  if (hintsManager.isExhausted()) {
    btn.textContent = hintsManager.getFullHint();
    btn.disabled = true;
    btn.classList.add("hint-exhausted");
    return;
  }

  btn.disabled = false;
  btn.classList.remove("hint-exhausted");
  btn.textContent = `Hint (${hintsManager.getHintsUsed()}/${hintsManager.getTotalHints()})`;
}

// ─── Answer handling ──────────────────────────────────────────────────────────

function scheduleNextTypingQuestion(delayMs = 700) {
  if (state.nextQuestionTimer) clearTimeout(state.nextQuestionTimer);
  state.nextQuestionTimer = setTimeout(() => {
    state.nextQuestionTimer = null;
    newQuestion();
  }, delayMs);
}

function checkTypingAnswer(forcedAnswer = null) {
  const rawAnswer = typeof forcedAnswer === "string"
    ? forcedAnswer
    : (forcedAnswer && typeof forcedAnswer === "object" && typeof forcedAnswer.answer === "string")
      ? forcedAnswer.answer
      : getAnswerInputValue();
  const userAnswer = sanitizeRomaji(rawAnswer);
  const outcome = answeringManager.processTypingAnswer(userAnswer);
  if (!outcome || !outcome.accepted) return null;
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

// ─── Reset (with confirm dialog) ─────────────────────────────────────────────

async function resetAllData() {
  const confirmed = await showConfirm(
    "Reset all quiz data, including backlog, drawings, and daily history?"
  );
  if (!confirmed) return;

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
  state.confusionPairs = {};
  state.srsAccuracyWindow = {};
  state.dailyDetailStats = {};

  progressPreferencesManager && progressPreferencesManager.resetBacklogFilters();
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
    row.right = 0; row.wrong = 0;
    row.typingRight = 0; row.typingWrong = 0;
    row.drawingRight = 0; row.drawingWrong = 0;
    row.hiraganaTypingRight = 0; row.hiraganaTypingWrong = 0;
    row.hiraganaDrawingRight = 0; row.hiraganaDrawingWrong = 0;
    row.hiraganaRight = 0; row.hiraganaWrong = 0;
    row.katakanaTypingRight = 0; row.katakanaTypingWrong = 0;
    row.katakanaDrawingRight = 0; row.katakanaDrawingWrong = 0;
    row.katakanaRight = 0; row.katakanaWrong = 0;
  });

  Object.keys(state.drawingsByKana).forEach((k) => delete state.drawingsByKana[k]);
  Object.keys(state.dailyStats).forEach((k) => delete state.dailyStats[k]);
  Object.keys(state.dailyCategoryStats).forEach((k) => delete state.dailyCategoryStats[k]);

  state.progressUiDayMarker = getTodayKey();
  state.lastSavedAt = 0;
  localStorage.removeItem(STORAGE_KEY);

  elements.practiceStrategySelect.value = state.practiceStrategy;
  progressPreferencesManager && progressPreferencesManager.renderDailyGoalInputs();
  progressPreferencesManager && progressPreferencesManager.renderBacklogFilterInputs();
  queueManager.updateQueueMeta();
  updateStats(elements, state);
  renderGoalProgress(elements, state);
  renderBacklogView();
  refreshProgressView();
  drawingFeature.clearAllCanvases();
  drawingFeature.setDrawingMarkButtonsEnabled(false);
  setActiveProgressTab(elements, "backlog");
  showResult(elements, "All saved progress has been reset.", true);
}

// ─── Credentials guard ────────────────────────────────────────────────────────

function setupAnswerInputGuards() {
  const input = elements.answerInput;

  function looksLikeCredential(value) {
    if (!value) return false;
    if (value.length > 24) return true;
    return /@|\s|https?:\/\//i.test(value) || /[^a-z-]/i.test(value);
  }

  function clearCredentialLikeValue() {
    const current = "value" in input ? input.value : input.textContent || "";
    if (looksLikeCredential(current)) {
      if ("value" in input) input.value = "";
      else input.textContent = "";
    }
  }

  input.addEventListener("focus", clearCredentialLikeValue);
  input.addEventListener("pointerdown", clearCredentialLikeValue);
  input.addEventListener("touchstart", clearCredentialLikeValue);
  input.addEventListener("keydown", clearCredentialLikeValue);
  setTimeout(clearCredentialLikeValue, 200);
}

// ─── Progress view helpers ────────────────────────────────────────────────────

function normalizeDailyGoalsFromState() {
  progressPreferencesManager && progressPreferencesManager.normalizeDailyGoalsFromState();
}
function renderDailyGoalInputs() {
  progressPreferencesManager && progressPreferencesManager.renderDailyGoalInputs();
}
function saveDailyGoalFromUi() {
  progressPreferencesManager && progressPreferencesManager.saveDailyGoalFromUi();
}
function resetBacklogFilters() {
  progressPreferencesManager && progressPreferencesManager.resetBacklogFilters();
}
function renderBacklogFilterInputs() {
  progressPreferencesManager && progressPreferencesManager.renderBacklogFilterInputs();
}
function applyBacklogFiltersFromUi() {
  progressPreferencesManager && progressPreferencesManager.applyBacklogFiltersFromUi();
}
function normalizeProgressLayoutState() {
  progressLayoutManager && progressLayoutManager.normalizeState();
}
function renderProgressSubtabUi() {
  progressLayoutManager && progressLayoutManager.render();
}
function setActiveProgressSubtab(subtabName) {
  progressLayoutManager && progressLayoutManager.setActiveSubtab(subtabName);
}
function toggleProgressSection(sectionName) {
  progressLayoutManager && progressLayoutManager.toggleSection(sectionName);
}
function exportLocalProgress() {
  backupManager && backupManager.exportLocalProgress();
}
async function importLocalProgressFromFile(file) {
  backupManager && await backupManager.importLocalProgressFromFile(file);
}
function getLocalPayload() {
  return backupManager ? backupManager.getLocalPayload() : {};
}
function applyRemotePayload(payload) {
  backupManager && backupManager.applyRemotePayload(payload);
}

// ─── Event bus subscriptions ──────────────────────────────────────────────────

function subscribeToEvents() {
  // Answer side-effects (emitted by answering.js)
  const onAnswerProcessed = () => {
    updateStats(elements, state);
    renderGoalProgress(elements, state);
    renderBacklogView();
    refreshProgressView();
    persistState();
  };
  eventBus.on(EVENT_NAMES.ANSWER_CORRECT, onAnswerProcessed);
  eventBus.on(EVENT_NAMES.ANSWER_WRONG, onAnswerProcessed);

  // Quiz controls
  eventBus.on(EVENT_NAMES.QUIZ_REQUEST_NEW, () => newQuestion());

  eventBus.on(EVENT_NAMES.QUIZ_MODE_CHANGED, () => {
    switchModeUI();
    newQuestion();
  });

  eventBus.on(EVENT_NAMES.QUIZ_KANA_SET_CHANGED, () => {
    queueManager.updateQueueMeta();
    newQuestion();
  });

  eventBus.on(EVENT_NAMES.QUIZ_STRATEGY_CHANGED, () => {
    state.practiceStrategy = elements.practiceStrategySelect.value;
    queueManager.updateQueueMeta();
    persistState();
    newQuestion();
  });

  eventBus.on(EVENT_NAMES.QUIZ_WRITING_SCRIPT_CHANGED, () => {
    const mode = elements.modeSelect.value;
    if (mode === "romajiToKana" || mode === "mixedPractice") newQuestion();
  });

  eventBus.on(EVENT_NAMES.QUIZ_CHECK_ANSWER, () => checkTypingAnswer());

  eventBus.on(EVENT_NAMES.QUIZ_QUICK_ANSWER, ({ answer }) => {
    const normalizedAnswer = typeof answer === "string"
      ? answer
      : (answer && typeof answer === "object" && typeof answer.answer === "string")
        ? answer.answer
        : "";
    setAnswerInputValue(normalizedAnswer);
    const outcome = checkTypingAnswer(normalizedAnswer);
    if (!outcome || !outcome.accepted) return;

    const optionButtons = elements.quickAnswerOptions
      ? Array.from(elements.quickAnswerOptions.querySelectorAll(".quick-answer-btn"))
      : [];
    optionButtons.forEach((btn) => { btn.disabled = true; });

    if (outcome.correct) {
      const clicked = optionButtons.find((btn) => btn.dataset.answer === normalizedAnswer);
      if (clicked) clicked.classList.add("is-correct");
      return;
    }

    const clicked = optionButtons.find((btn) => btn.dataset.answer === normalizedAnswer);
    if (clicked) clicked.classList.add("is-wrong");
    const correctBtn = optionButtons.find((btn) => btn.dataset.answer === outcome.correctAnswer);
    if (correctBtn) correctBtn.classList.add("is-correct");
  });

  eventBus.on(EVENT_NAMES.QUIZ_REVEAL_DRAWING, () => revealDrawingAnswer());
  eventBus.on(EVENT_NAMES.QUIZ_CLEAR_CANVAS, () => drawingFeature.clearAllCanvases());
  eventBus.on(EVENT_NAMES.QUIZ_MARK_RIGHT, () => markDrawingResult(true));
  eventBus.on(EVENT_NAMES.QUIZ_MARK_WRONG, () => markDrawingResult(false));
  eventBus.on(EVENT_NAMES.QUIZ_RESET_ALL, () => resetAllData());

  // Navigation
  eventBus.on(EVENT_NAMES.TAB_BACKLOG, () => setActiveProgressTab(elements, "backlog"));
  eventBus.on(EVENT_NAMES.TAB_PROGRESS, () => setActiveProgressTab(elements, "daily"));
  eventBus.on(EVENT_NAMES.TAB_SYNC, () => {
    setActiveProgressTab(elements, "daily");
    progressLayoutManager && progressLayoutManager.openSyncSection();
    elements.syncCard.scrollIntoView({ behavior: "smooth", block: "start" });
    elements.syncEmail.focus();
  });

  // Progress sub-navigation
  eventBus.on(EVENT_NAMES.PROGRESS_TAB_CHANGED, ({ tab }) => {
    setActiveProgressSubtab(tab);
    persistState();
  });
  eventBus.on(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, ({ section }) => {
    toggleProgressSection(section);
  });

  // Backlog filters
  eventBus.on(EVENT_NAMES.BACKLOG_FILTER_CHANGED, () => applyBacklogFiltersFromUi());
  eventBus.on(EVENT_NAMES.BACKLOG_FILTER_RESET, () => {
    resetBacklogFilters();
    renderBacklogFilterInputs();
    renderBacklogView();
    persistState();
  });

  // Settings
  eventBus.on(EVENT_NAMES.SETTINGS_SAVE_GOAL, () => saveDailyGoalFromUi());
  eventBus.on(EVENT_NAMES.SETTINGS_DRAW_GUIDE_CHANGED, () => {
    state.drawGuideEnabled = elements.drawGuideToggle.checked;
    drawingFeature.setGuideEnabled(state.drawGuideEnabled);
    persistState();
  });

  // Data operations
  eventBus.on(EVENT_NAMES.DATA_EXPORT, () => exportLocalProgress());
  eventBus.on(EVENT_NAMES.DATA_IMPORT, async ({ file }) => {
    await importLocalProgressFromFile(file);
  });

  // Audio
  eventBus.on(EVENT_NAMES.AUDIO_PLAY, () => audioManager.playCurrentAudio());
  eventBus.on(EVENT_NAMES.AUDIO_TOGGLE_MUTE, () => {
    audioManager.toggleAudioMute();
    persistState();
  });

  // Gallery
  eventBus.on(EVENT_NAMES.GALLERY_OPEN, ({ kanaChar }) => drawingFeature.openDrawingGallery(kanaChar));
  eventBus.on(EVENT_NAMES.GALLERY_CLOSE, () => elements.drawingGalleryDialog.close());

  // Visibility / window events
  eventBus.on(EVENT_NAMES.UI_VISIBLE, () => refreshProgressView());

  // Cloud sync conflict — show a dismissable toast
  eventBus.on(EVENT_NAMES.SYNC_CONFLICT_APPLIED, () => {
    showConflictToast("Cloud data was newer — your local progress was updated from the cloud.");
  });

  // Hint button (wired once the element exists)
  const hintBtn = document.getElementById("hintBtn");
  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      const reveal = hintsManager.revealNext();
      if (reveal) {
        // Show partial hint in answer input placeholder only (non-destructive)
        elements.answerInput.placeholder = reveal;
      }
      updateHintButton();
    });
  }
}

// ─── Conflict toast ───────────────────────────────────────────────────────────

function showConflictToast(message) {
  const existing = document.getElementById("syncConflictToast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "syncConflictToast";
  toast.className = "conflict-toast";
  toast.setAttribute("role", "alert");
  toast.innerHTML = `
    <span>${message}</span>
    <button type="button" class="conflict-toast-close" aria-label="Dismiss">✕</button>
  `;
  toast.querySelector(".conflict-toast-close").addEventListener("click", () => toast.remove());
  document.body.appendChild(toast);

  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 7000);
}

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────

function setupKeyboardShortcuts() {
  const keyboard = new KeyboardController(elements.answerInput);

  keyboard.register("Space", () => {
    const mode = elements.modeSelect.value;
    if (mode === "romajiToKana" || mode === "mixedPractice") {
      eventBus.emit(EVENT_NAMES.QUIZ_REVEAL_DRAWING);
    }
  });

  keyboard.register("KeyR", () => {
    const mode = elements.modeSelect.value;
    if (mode === "romajiToKana" || mode === "mixedPractice") {
      if (!elements.markRightBtn.disabled) eventBus.emit(EVENT_NAMES.QUIZ_MARK_RIGHT);
    }
  });

  keyboard.register("KeyW", () => {
    const mode = elements.modeSelect.value;
    if (mode === "romajiToKana" || mode === "mixedPractice") {
      if (!elements.markWrongBtn.disabled) eventBus.emit(EVENT_NAMES.QUIZ_MARK_WRONG);
    }
  });

  keyboard.register("KeyN", () => eventBus.emit(EVENT_NAMES.QUIZ_REQUEST_NEW));
}

// ─── Swipe gestures ───────────────────────────────────────────────────────────

function setupSwipeGestures() {
  const questionCard = document.querySelector(".quiz.card");
  if (!questionCard) return;

  createSwipeDetector(questionCard, {
    onSwipeRight() {
      const mode = elements.modeSelect.value;
      if (mode === "romajiToKana" || mode === "mixedPractice") {
        if (!elements.markRightBtn.disabled) eventBus.emit(EVENT_NAMES.QUIZ_MARK_RIGHT);
      }
    },
    onSwipeLeft() {
      const mode = elements.modeSelect.value;
      if (mode === "romajiToKana" || mode === "mixedPractice") {
        if (!elements.markWrongBtn.disabled) eventBus.emit(EVENT_NAMES.QUIZ_MARK_WRONG);
      }
    }
  });
}

// ─── Application init ─────────────────────────────────────────────────────────

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
    showResult: (msg, ok) => showResult(elements, msg, ok)
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
      renderGoalProgress(elements, state);
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
      renderGoalProgress(elements, state);
      renderBacklogView();
      refreshProgressView();
      queueManager.updateQueueMeta();
      saveProgress({ storageKey: STORAGE_KEY, state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
    },
    onLocalStateSaved(payload) {
      state.lastSavedAt = Number(payload.savedAt || state.lastSavedAt || 0);
      state.lastCloudSyncAt = Number(payload.cloudSyncedAt || state.lastCloudSyncAt || 0);
      state.syncUserEmail = payload.userEmail || state.syncUserEmail || "";
    },
    eventBus
  }).then((syncApi) => {
    cloudSync = syncApi;
  }).catch((error) => {
    elements.syncStatus.textContent = `Cloud sync unavailable: ${error.message}`;
  });

  subscribeToEvents();
  bindEvents(elements, state);
  drawingFeature.bindCanvasEvents();
  setupKeyboardShortcuts();
  setupSwipeGestures();
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
  renderGoalProgress(elements, state);
  renderBacklogView();
  refreshProgressView();
  setActiveProgressTab(elements, "backlog");
}

init();
