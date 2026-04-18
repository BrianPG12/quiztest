/**
 * Answer Validation & Processing
 * Handles answer checking, result display, and state updates
 */

export function createAnsweringManager(state, elements, srsManager, queueManager, showResult, showTypingMistake, updateStats, updateBacklog, addDailyAttemptFn, renderBacklogViewFn, refreshProgressViewFn, persistStateFn) {
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
      return { accepted: false, correct: false };
    }

    const validation = validateTypingAnswer(userRomaji);
    if (!validation.correct) {
      showResult(elements, validation.reason, false);
      return { accepted: false, correct: false };
    }

    const correctAnswer = state.currentQuestion.romaji;
    const acceptedAnswers = getAcceptedRomajiSet(state.currentQuestion);
    const correct = acceptedAnswers.has(userRomaji);
    if (correct) {
      state.typingRightCount += 1;
      showResult(elements, "Correct!", true);
    } else {
      state.typingWrongCount += 1;
      showTypingMistake(elements, userRomaji, correctAnswer);
    }

    // Update all tracking systems
    updateBacklog({
      backlog: state.backlog,
      romaji: state.currentQuestion.romaji,
      wasCorrect: correct,
      scriptContext: state.currentQuestion.scriptName === "Hiragana" ? "hiragana" : "katakana",
      answerMode: "typing"
    });

    srsManager.updateSrsOnAttempt(state.currentQuestion.romaji, correct, "typing");
    addDailyAttemptFn(state, "typing", correct);
    updateStats(elements, state);
    renderBacklogViewFn();
    refreshProgressViewFn();
    queueManager.updateQueueMeta();
    persistStateFn();
    return { accepted: true, correct, correctAnswer };
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

    srsManager.updateSrsOnAttempt(state.currentQuestion.romaji, wasCorrect, "drawing");
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
