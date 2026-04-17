/**
 * Queue Management
 * Handles practice strategy selection with adaptive weighting
 */

export function createQueueManager(state, elements, srsManager, getKanaCategoryFn) {
  /**
   * Filter list to only romaji in current kana set selection
   */
  function filterRomajiForCurrentKanaSet(romajiList) {
    const setMode = elements.kanaSetSelect.value;
    if (setMode === "all") {
      return romajiList;
    }
    return romajiList.filter((romaji) => getKanaCategoryFn(romaji) === setMode);
  }

  /**
   * Get preferred romaji list based on practice strategy
   * Adapts weighting as user progresses:
   * - Early (<100 attempts): 80% mistakes, 20% SRS due
   * - Mid (100-300): 60% mistakes, 40% SRS due
   * - Advanced (300+): 40% mistakes, 60% SRS due
   */
  function getPreferredRomajiList() {
    if (state.practiceStrategy === "mistakeReview") {
      return filterRomajiForCurrentKanaSet(state.recentMistakes).slice(0, 30);
    }

    if (state.practiceStrategy === "srs") {
      return filterRomajiForCurrentKanaSet(srsManager.getDueRomajiList()).slice(0, 30);
    }

    // Mixed mode: adaptive weighting based on progress
    const totalAttempts = srsManager.getTotalAttempts();
    let mistakesCount, dueCount;

    if (totalAttempts < 100) {
      mistakesCount = 24; // 80%
      dueCount = 6;       // 20%
    } else if (totalAttempts < 300) {
      mistakesCount = 18; // 60%
      dueCount = 12;      // 40%
    } else {
      mistakesCount = 12; // 40%
      dueCount = 18;      // 60%
    }

    const due = filterRomajiForCurrentKanaSet(srsManager.getDueRomajiList()).slice(0, dueCount);
    const mistakes = filterRomajiForCurrentKanaSet(state.recentMistakes).slice(0, mistakesCount);
    return [...new Set([...mistakes, ...due])];
  }

  /**
   * Update queue meta display with current counts
   */
  function updateQueueMeta() {
    const due = srsManager.getDueRomajiList().length;
    const mistakes = state.recentMistakes.length;
    const strategy = state.practiceStrategy === "mistakeReview"
      ? `Mistakes: ${mistakes}`
      : state.practiceStrategy === "srs"
        ? `Due: ${due}`
        : `Due ${due} • Mistakes ${mistakes}`;
    elements.queueMeta.textContent = strategy;
  }

  return {
    getPreferredRomajiList,
    updateQueueMeta,
    filterRomajiForCurrentKanaSet
  };
}
