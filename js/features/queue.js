/**
 * Queue Management
 * Handles practice strategy selection with adaptive weighting
 */

export function createQueueManager(state, elements, srsManager, getKanaCategoryFn) {
  function getActiveDatasetId() {
    return state.activeDataset || "kana";
  }

  function getQuestionKindForCurrentMode() {
    const mode = elements.modeSelect.value;
    if (mode === "romajiToKana" || mode === "kanjiDrawing") {
      return "drawing";
    }
    if (mode === "mixedPractice" || mode === "kanjiMixed") {
      return "mixed";
    }
    return "typing";
  }

  function getMistakeEntriesForKind(questionKind = "typing") {
    if (questionKind === "drawing") {
      return srsManager.getRecentMistakesByMode("drawing");
    }
    if (questionKind === "mixed") {
      return [
        ...new Set([
          ...srsManager.getRecentMistakesByMode("typing"),
          ...srsManager.getRecentMistakesByMode("drawing")
        ])
      ];
    }
    return srsManager.getRecentMistakesByMode("typing");
  }

  function getFrequentMistakesRomajiList(questionKind = "typing") {
    const entries = Object.values(state.backlog)
      .map((row) => {
        let wrong = row.typingWrong;
        let right = row.typingRight;

        if (questionKind === "drawing") {
          wrong = row.drawingWrong;
          right = row.drawingRight;
        } else if (questionKind === "mixed") {
          wrong = row.typingWrong + row.drawingWrong;
          right = row.typingRight + row.drawingRight;
        }

        return {
          romaji: row.id || row.romaji,
          wrong,
          right,
          pressure: wrong * 2 - right
        };
      })
      .filter((item) => item.wrong >= 3 && item.pressure >= 4)
      .sort((a, b) => b.pressure - a.pressure || b.wrong - a.wrong)
      .map((item) => item.romaji);

    return filterRomajiForCurrentKanaSet(entries).slice(0, 40);
  }

  /**
   * Filter list to only romaji in current kana set selection
   */
  function filterRomajiForCurrentKanaSet(romajiList) {
    if (getActiveDatasetId() !== "kana") {
      return romajiList;
    }

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
  function getPreferredRomajiList(questionKind = getQuestionKindForCurrentMode()) {
    if (state.practiceStrategy === "mistakeReview") {
      return filterRomajiForCurrentKanaSet(getMistakeEntriesForKind(questionKind)).slice(0, 30);
    }

    if (state.practiceStrategy === "frequentMistakes") {
      return getFrequentMistakesRomajiList(questionKind);
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
    const mistakes = filterRomajiForCurrentKanaSet(getMistakeEntriesForKind(questionKind)).slice(0, mistakesCount);
    return [...new Set([...mistakes, ...due])];
  }

  /**
   * Update queue meta display with current counts
   */
  function updateQueueMeta() {
    const questionKind = getQuestionKindForCurrentMode();
    const due = srsManager.getDueRomajiList().length;
    const mistakes = getMistakeEntriesForKind(questionKind).length;
    const frequentMistakes = getFrequentMistakesRomajiList(questionKind).length;
    const strategy = state.practiceStrategy === "mistakeReview"
      ? `Mistakes: ${mistakes}`
      : state.practiceStrategy === "frequentMistakes"
        ? `Frequent mistakes: ${frequentMistakes}`
      : state.practiceStrategy === "srs"
        ? `Due: ${due}`
        : `Due ${due} • Mistakes ${mistakes}`;
    elements.queueMeta.textContent = strategy;
  }

  return {
    getPreferredRomajiList,
    getFrequentMistakesRomajiList,
    updateQueueMeta,
    filterRomajiForCurrentKanaSet
  };
}
