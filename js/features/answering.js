/**
 * Answer Validation & Processing
 * Handles answer checking, result display, and state updates
 */

export function createAnsweringManager(state, elements, srsManager, queueManager, showResult, updateStats, updateBacklog, addDailyAttemptFn, renderBacklogViewFn, refreshProgressViewFn, persistStateFn) {
  /**
   * Validate and process typing answer
   * Returns: { correct: boolean, answer: string }
   */
  function validateTypingAnswer(romaji) {
    if (!romaji) {
      return { correct: false, answer: "", reason: "Type a romaji answer" };
    }
    return { correct: true, answer: romaji };
  }

  /**
   * Process a typing answer and update all related state
   */
  function processTypingAnswer(userRomaji) {
    if (!state.currentQuestion) {
      showResult(elements, "Create a question first.", false);
      return;
    }

    const validation = validateTypingAnswer(userRomaji);
    if (!validation.correct) {
      showResult(elements, validation.reason, false);
      return;
    }

    const correct = userRomaji === state.currentQuestion.romaji;
    if (correct) {
      state.typingRightCount += 1;
      showResult(elements, "Correct!", true);
    } else {
      state.typingWrongCount += 1;
      showResult(elements, `Not quite. Correct answer: ${state.currentQuestion.romaji}`, false);
    }

    // Update all tracking systems
    updateBacklog({
      backlog: state.backlog,
      romaji: state.currentQuestion.romaji,
      wasCorrect: correct,
      scriptContext: state.currentQuestion.scriptName === "Hiragana" ? "hiragana" : "katakana",
      answerMode: "typing"
    });

    srsManager.updateSrsOnAttempt(state.currentQuestion.romaji, correct);
    addDailyAttemptFn(state, "typing", correct);
    updateStats(elements, state);
    renderBacklogViewFn();
    refreshProgressViewFn();
    queueManager.updateQueueMeta();
    persistStateFn();
  }

  /**
   * Process a drawing answer and update all related state
   */
  function processDrawingResult(wasCorrect, saveDrawingFn) {
    if (!state.currentQuestion) {
      showResult(elements, "Create a question first.", false);
      return;
    }

    if (wasCorrect) {
      state.drawingRightCount += 1;
      saveDrawingFn();
    } else {
      state.drawingWrongCount += 1;
    }

    // Update all tracking systems
    updateBacklog({
      backlog: state.backlog,
      romaji: state.currentQuestion.romaji,
      wasCorrect,
      scriptContext: state.currentQuestion.canvasMode,
      answerMode: "drawing"
    });

    srsManager.updateSrsOnAttempt(state.currentQuestion.romaji, wasCorrect);
    addDailyAttemptFn(state, "drawing", wasCorrect);
    updateStats(elements, state);
    renderBacklogViewFn();
    refreshProgressViewFn();
    queueManager.updateQueueMeta();
    persistStateFn();
  }

  return {
    validateTypingAnswer,
    processTypingAnswer,
    processDrawingResult
  };
}
