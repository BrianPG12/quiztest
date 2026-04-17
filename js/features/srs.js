/**
 * Spaced Repetition System (SRS)
 * Handles interval scheduling, mistake tracking, and SRS state updates
 */

const MAX_RECENT_MISTAKES = 120;

export function createSrsManager(state) {
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
  function upsertRecentMistake(romaji) {
    state.recentMistakes = [
      romaji,
      ...state.recentMistakes.filter((value) => value !== romaji)
    ].slice(0, MAX_RECENT_MISTAKES);
  }

  /**
   * Remove romaji from mistake queue (on correct answer)
   */
  function removeRecentMistake(romaji) {
    state.recentMistakes = state.recentMistakes.filter((value) => value !== romaji);
  }

  /**
   * Update SRS intervals based on attempt correctness
   * Correct: interval grows (1.5h → 3.75h → ... → 14 days)
   * Wrong: interval resets to 0.5h (30 min retry), added to mistakes queue
   */
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
      // Aggressive intervals: 1.5h start, 2.5x multiplier, 14-day cap
      const nextInterval = previous <= 0 ? 1.5 : Math.min(previous * 2.5, 24 * 14);
      current.intervalHours = nextInterval;
      current.dueAt = now + nextInterval * 60 * 60 * 1000;
      removeRecentMistake(romaji);
    } else {
      current.intervalHours = 0.5;
      current.dueAt = now + 30 * 60 * 1000; // 30 minutes for quick retry
      upsertRecentMistake(romaji);
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
    upsertRecentMistake,
    removeRecentMistake,
    updateSrsOnAttempt,
    getTotalAttempts
  };
}
