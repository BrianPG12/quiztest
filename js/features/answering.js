/**
 * Answer Validation & Processing
 *
 * Single responsibility: validate answers, update data state, and emit events.
 * Does NOT call render or persist functions — those are side effects owned by
 * bootstrap.js which subscribes to 'answer:correct' / 'answer:wrong'.
 *
 * Interface Segregation: deps trimmed to only what this module truly needs.
 * Dependency Inversion: depends on eventBus abstraction, not concrete callbacks.
 */

import {
  getTodayKey,
  matchesAnyNormalizedAnswer,
  normalizeEnglishAnswer,
  normalizeForgivingRomaji,
  normalizeLooseText
} from "../core/utils.js";

export function createAnsweringManager({
  state,
  elements,
  srsManager,
  queueManager,
  hintsManager,
  showResult,
  showTypingMistake,
  updateBacklog,
  addDailyAttemptFn,
  eventBus
}) {
  // ─── Private helpers ────────────────────────────────────────────────────────

  function getAcceptedRomajiSet(question) {
    const primary = String(question.romaji || "");
    const accepted = new Set([primary]);
    const kana = String(question.kana || "");

    if (kana === "ぢ" || kana === "ヂ") {
      accepted.add("di");
      accepted.add("ji");
    }

    if (kana === "づ" || kana === "ヅ") {
      accepted.add("du");
      accepted.add("zu");
    }

    return accepted;
  }

  function getAnswerNormalizer(question) {
    if (question && question.answerNormalizer === "english") {
      return normalizeEnglishAnswer;
    }
    if (question && question.answerNormalizer === "forgiving-romaji") {
      return normalizeForgivingRomaji;
    }
    if (question && question.answerNormalizer === "exact") {
      return (value) => String(value || "").trim();
    }
    return normalizeLooseText;
  }

  function isTypingAnswerCorrect(question, userAnswer) {
    if (Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length > 0) {
      return matchesAnyNormalizedAnswer(userAnswer, question.acceptedAnswers, getAnswerNormalizer(question));
    }

    return getAcceptedRomajiSet(question).has(userAnswer);
  }

  /** Track per-day per-romaji outcomes for the drill-down view (Phase 3). */
  function recordDailyDetail(romaji, wasCorrect) {
    if (!state.dailyDetailStats) state.dailyDetailStats = {};
    const todayKey = getTodayKey();
    if (!state.dailyDetailStats[todayKey]) state.dailyDetailStats[todayKey] = {};
    const entry = state.dailyDetailStats[todayKey][romaji] || { right: 0, wrong: 0 };
    if (wasCorrect) { entry.right += 1; } else { entry.wrong += 1; }
    state.dailyDetailStats[todayKey][romaji] = entry;
  }

  // ─── Validate ───────────────────────────────────────────────────────────────

  function validateTypingAnswer(answer) {
    if (!answer) {
      const reason = state.currentQuestion && state.currentQuestion.answerLabel
        ? `${state.currentQuestion.answerLabel}.`
        : "Type an answer.";
      return { correct: false, answer: "", reason };
    }
    return { correct: true, answer };
  }

  // ─── Process typing ─────────────────────────────────────────────────────────

  function processTypingAnswer(userRomaji) {
    if (!state.currentQuestion) {
      showResult("Create a question first.", false);
      return { accepted: false, correct: false };
    }

    const validation = validateTypingAnswer(userRomaji);
    if (!validation.correct) {
      showResult(validation.reason, false);
      return { accepted: false, correct: false };
    }

    const correctAnswer = state.currentQuestion.displayAnswer || state.currentQuestion.romaji;
    const trackingRomaji = state.currentQuestion.trackingId || state.currentQuestion.trackingRomaji || state.currentQuestion.romaji;
    const correct = isTypingAnswerCorrect(state.currentQuestion, userRomaji);
    const hintUsed = hintsManager && hintsManager.getHintsUsed() > 0;

    if (correct) {
      state.typingRightCount += 1;
      showResult("Correct!", true);
    } else {
      state.typingWrongCount += 1;
      showTypingMistake(userRomaji, correctAnswer);

      if (userRomaji) {
        if (!state.confusionPairs[trackingRomaji]) {
          state.confusionPairs[trackingRomaji] = {};
        }
        state.confusionPairs[trackingRomaji][userRomaji] =
          (state.confusionPairs[trackingRomaji][userRomaji] || 0) + 1;
      }
    }

    updateBacklog({
      backlog: state.backlog,
      romaji: trackingRomaji,
      wasCorrect: correct,
      scriptContext: state.currentQuestion.scriptContext || (state.currentQuestion.scriptName === "Hiragana" ? "hiragana" : "katakana"),
      answerMode: "typing"
    });

    srsManager.updateSrsOnAttempt(trackingRomaji, correct, "typing", hintUsed);
    addDailyAttemptFn(state, "typing", correct, trackingRomaji);
    recordDailyDetail(trackingRomaji, correct);
    queueManager.updateQueueMeta();

    eventBus.emit(correct ? "answer:correct" : "answer:wrong", { romaji: trackingRomaji, mode: "typing", userInput: userRomaji });
    return { accepted: true, correct, correctAnswer };
  }

  // ─── Process drawing ────────────────────────────────────────────────────────

  function processDrawingResult(wasCorrect, saveDrawingFn) {
    if (!state.currentQuestion) {
      showResult("Create a question first.", false);
      return;
    }

    if (wasCorrect) {
      state.drawingRightCount += 1;
      saveDrawingFn();
    } else {
      state.drawingWrongCount += 1;
    }

    const romaji = state.currentQuestion.trackingId || state.currentQuestion.romaji;

    updateBacklog({ backlog: state.backlog, romaji, wasCorrect, scriptContext: state.currentQuestion.canvasMode, answerMode: "drawing" });
    srsManager.updateSrsOnAttempt(romaji, wasCorrect, "drawing", false);
    addDailyAttemptFn(state, "drawing", wasCorrect, romaji);
    recordDailyDetail(romaji, wasCorrect);
    queueManager.updateQueueMeta();
    eventBus.emit(wasCorrect ? "answer:correct" : "answer:wrong", { romaji, mode: "drawing" });
  }

  // ─── Public API ─────────────────────────────────────────────────────────────

  return {
    validateTypingAnswer,
    processTypingAnswer,
    processDrawingResult
  };
}
