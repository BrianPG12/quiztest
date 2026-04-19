/**
 * Spaced Repetition System (SRS)
 * Handles interval scheduling, mistake tracking, and SRS state updates
 */

const MAX_RECENT_MISTAKES = 120;
const ACCURACY_WINDOW_SIZE = 10;

export function createSrsManager(state) {
  function getMistakeKey(answerMode = "typing") {
    return answerMode === "drawing" ? "recentDrawingMistakes" : "recentTypingMistakes";
  }

  /**
   * Get all romaji items due for review now
   */
  function getDueRomajiList() {
    const now = Date.now();
    return Object.entries(state.srsByRomaji)
      .filter(([, entry]) => Number(entry.dueAt || 0) <= now)
      .sort((a, b) => Number(a[1].dueAt || 0) - Number(b[1].dueAt || 0))
      .map(([romaji]) => romaji);
  }

  /**
   * Add or move romaji to front of mistake queue
   */
  function upsertRecentMistake(romaji, answerMode = "typing") {
    const key = getMistakeKey(answerMode);
    const source = Array.isArray(state[key]) ? state[key] : [];
    state[key] = [
      romaji,
      ...source.filter((value) => value !== romaji)
    ].slice(0, MAX_RECENT_MISTAKES);

    // Keep legacy field in sync for backward compatibility with older clients.
    state.recentMistakes = [...new Set([...(state.recentTypingMistakes || []), ...(state.recentDrawingMistakes || [])])]
      .slice(0, MAX_RECENT_MISTAKES);
  }

  /**
   * Remove romaji from mistake queue (on correct answer)
   */
  function removeRecentMistake(romaji, answerMode = "typing") {
    const key = getMistakeKey(answerMode);
    const source = Array.isArray(state[key]) ? state[key] : [];
    state[key] = source.filter((value) => value !== romaji);

    // Keep legacy field in sync for backward compatibility with older clients.
    state.recentMistakes = [...new Set([...(state.recentTypingMistakes || []), ...(state.recentDrawingMistakes || [])])]
      .slice(0, MAX_RECENT_MISTAKES);
  }

  function getRecentMistakesByMode(answerMode = "typing") {
    const key = getMistakeKey(answerMode);
    return Array.isArray(state[key]) ? state[key] : [];
  }

  /**
   * Update SRS intervals based on attempt correctness.
   * Correct: interval grows — multiplier is adaptive based on rolling accuracy.
   * Wrong: interval resets to 0.5h (30 min retry), added to mistakes queue.
   * @param {string} romaji
   * @param {boolean} wasCorrect
   * @param {string} answerMode
   * @param {boolean} [hintUsed] — halves the multiplier when true
   */
  function updateSrsOnAttempt(romaji, wasCorrect, answerMode = "typing", hintUsed = false) {
    const current = state.srsByRomaji[romaji] || {
      dueAt: 0,
      intervalHours: 0,
      lastSeenAt: 0,
      lastCorrect: false
    };

    // Maintain rolling accuracy window
    if (!state.srsAccuracyWindow) state.srsAccuracyWindow = {};
    const window = Array.isArray(state.srsAccuracyWindow[romaji])
      ? state.srsAccuracyWindow[romaji]
      : [];
    window.push(wasCorrect);
    if (window.length > ACCURACY_WINDOW_SIZE) window.shift();
    state.srsAccuracyWindow[romaji] = window;

    const now = Date.now();
    if (wasCorrect) {
      const previous = Number(current.intervalHours || 0);

      // Adaptive multiplier based on rolling window accuracy
      const accuracy = window.length > 0
        ? window.filter(Boolean).length / window.length
        : 0.5;
      let baseMultiplier;
      if (accuracy < 0.3) {
        baseMultiplier = 1.2;
      } else if (accuracy >= 0.7) {
        baseMultiplier = 3.5;
      } else {
        baseMultiplier = 2.5;
      }

      const multiplier = hintUsed ? Math.min(baseMultiplier, 1.25) : baseMultiplier;
      const nextInterval = previous <= 0 ? 1.5 : Math.min(previous * multiplier, 24 * 14);
      current.intervalHours = nextInterval;
      current.dueAt = now + nextInterval * 60 * 60 * 1000;
      removeRecentMistake(romaji, answerMode);
    } else {
      current.intervalHours = 0.5;
      current.dueAt = now + 30 * 60 * 1000; // 30 minutes for quick retry
      upsertRecentMistake(romaji, answerMode);
    }

    current.lastSeenAt = now;
    current.lastCorrect = wasCorrect;
    state.srsByRomaji[romaji] = current;
  }

  /**
   * Get count of kana items ever attempted
   */
  function getTotalAttempts() {
    return Object.values(state.srsByRomaji)
      .reduce((sum, entry) => sum + (Number(entry.lastSeenAt) > 0 ? 1 : 0), 0);
  }

  return {
    getDueRomajiList,
    getRecentMistakesByMode,
    upsertRecentMistake,
    removeRecentMistake,
    updateSrsOnAttempt,
    getTotalAttempts
  };
}
