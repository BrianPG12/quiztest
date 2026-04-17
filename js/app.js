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
import { saveProgress, loadProgress } from "./features/storage.js";
import {
  addDailyAttempt,
  renderDailyProgress,
  bindProgressCompareSelectors,
  redrawProgressGraph
} from "./features/progress.js";
import { createDrawingFeature } from "./features/drawing.js";

const elements = getElements();
const state = createState(kanaData);
const drawingFeature = createDrawingFeature({
  elements,
  state,
  maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA
});

const getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);

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

  const mode = elements.modeSelect.value;
  if (mode === "kanaToRomaji") {
    state.currentQuestion = pickTypingQuestion({
      kanaData,
      scriptMode: elements.scriptSelect.value,
      kanaSet: elements.kanaSetSelect.value,
      getKanaCategoryFn,
      getQuestionWeightFn: getQuestionWeight,
      backlog: state.backlog
    });
  } else if (mode === "romajiToKana") {
    state.currentQuestion = pickWritingQuestion({
      kanaData,
      writingMode: elements.writingScriptSelect.value,
      kanaSet: elements.kanaSetSelect.value,
      getKanaCategoryFn,
      getQuestionWeightFn: getQuestionWeight,
      backlog: state.backlog
    });
  } else {
    state.currentQuestion = Math.random() > 0.5
      ? pickTypingQuestion({
        kanaData,
        scriptMode: elements.scriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog
      })
      : pickWritingQuestion({
        kanaData,
        writingMode: elements.writingScriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog
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

  addDailyAttempt(state, "typing", correct);
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
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

  addDailyAttempt(state, "drawing", wasCorrect);
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
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
  localStorage.removeItem(STORAGE_KEY);

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
  elements.kanaSetSelect.addEventListener("change", newQuestion);
  elements.writingScriptSelect.addEventListener("change", () => {
    if (elements.modeSelect.value === "romajiToKana" || elements.modeSelect.value === "mixedPractice") {
      newQuestion();
    }
  });

  elements.backlogTabBtn.addEventListener("click", () => setActiveProgressTab(elements, "backlog"));
  elements.dailyProgressTabBtn.addEventListener("click", () => setActiveProgressTab(elements, "daily"));
  elements.resetAllDataBtn.addEventListener("click", resetAllData);
  bindProgressCompareSelectors(elements, state);

  elements.checkBtn.addEventListener("click", checkTypingAnswer);
  elements.revealBtn.addEventListener("click", revealDrawingAnswer);
  elements.clearCanvasBtn.addEventListener("click", drawingFeature.clearAllCanvases);
  elements.markRightBtn.addEventListener("click", () => markDrawingResult(true));
  elements.markWrongBtn.addEventListener("click", () => markDrawingResult(false));
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
  bindEvents();
  switchModeUI();
  drawingFeature.clearAllCanvases();
  updateStats(elements, state);
  renderBacklogView();
  refreshProgressView();
  setActiveProgressTab(elements, "backlog");
}

init();
