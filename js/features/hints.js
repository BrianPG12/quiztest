/**
 * Hints Manager (Phase 2)
 *
 * Single responsibility: track hint state for the current typing question.
 * Reveals the correct romaji one character at a time.  When a hint is used,
 * the SRS multiplier is halved by signalling the answering manager.
 */

export function createHintsManager() {
  let _fullAnswer = "";
  let _revealed = 0;

  /** Call when a new question is set. */
  function setQuestion(question) {
    _fullAnswer = String(question && question.romaji ? question.romaji : "");
    _revealed = 0;
  }

  /** Reset state (called by newQuestion). */
  function reset() {
    _fullAnswer = "";
    _revealed = 0;
  }

  /** How many characters have been hinted so far. */
  function getHintsUsed() {
    return _revealed;
  }

  /** Total hint steps available (= answer length). */
  function getTotalHints() {
    return _fullAnswer.length;
  }

  /** Whether all hints have been revealed. */
  function isExhausted() {
    return _revealed >= _fullAnswer.length && _fullAnswer.length > 0;
  }

  /**
   * Reveal the next character.  Returns the partial answer string shown so far,
   * or null if the question hasn't been set yet.
   */
  function revealNext() {
    if (!_fullAnswer) return null;
    if (_revealed < _fullAnswer.length) _revealed += 1;
    return _fullAnswer.slice(0, _revealed);
  }

  /**
   * Peek at what the next hint string would be without consuming it.
   * Returns null when nothing is set.
   */
  function getNextHint() {
    if (!_fullAnswer) return null;
    return _fullAnswer.slice(0, _revealed + 1);
  }

  /** Return the fully revealed answer. */
  function getFullHint() {
    return _fullAnswer;
  }

  return {
    setQuestion,
    reset,
    getHintsUsed,
    getTotalHints,
    isExhausted,
    revealNext,
    getNextHint,
    getFullHint
  };
}
