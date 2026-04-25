import { getTodayKey } from "./utils.js";

export const DATASET_IDS = {
  KANA: "kana",
  WORDS: "words",
  KANJI: "kanji"
};

function createGenericBacklog(items, getId, getMeta = () => ({})) {
  return items.reduce((acc, item) => {
    const id = getId(item);
    acc[id] = {
      id,
      right: 0,
      wrong: 0,
      typingRight: 0,
      typingWrong: 0,
      drawingRight: 0,
      drawingWrong: 0,
      ...getMeta(item)
    };
    return acc;
  }, {});
}

export function createBacklog(kanaData) {
  return kanaData.reduce((acc, item) => {
    acc[item.romaji] = {
      romaji: item.romaji,
      hiragana: item.hiragana,
      katakana: item.katakana,
      right: 0,
      wrong: 0,
      typingRight: 0,
      typingWrong: 0,
      drawingRight: 0,
      drawingWrong: 0,
      hiraganaTypingRight: 0,
      hiraganaTypingWrong: 0,
      hiraganaDrawingRight: 0,
      hiraganaDrawingWrong: 0,
      hiraganaRight: 0,
      hiraganaWrong: 0,
      katakanaTypingRight: 0,
      katakanaTypingWrong: 0,
      katakanaDrawingRight: 0,
      katakanaDrawingWrong: 0,
      katakanaRight: 0,
      katakanaWrong: 0
    };
    return acc;
  }, {});
}

function createBaseDatasetState({ backlog = {}, srsByItem = {} } = {}) {
  return {
    practiceStrategy: "srs",
    recentMistakes: [],
    recentTypingMistakes: [],
    recentDrawingMistakes: [],
    srsByItem,
    typingRightCount: 0,
    typingWrongCount: 0,
    drawingRightCount: 0,
    drawingWrongCount: 0,
    drawingsByItem: {},
    dailyStats: {},
    dailyCategoryStats: {},
    dailyDetailStats: {},
    confusionPairs: {},
    srsAccuracyWindow: {},
    backlog
  };
}

function createKanaDatasetState(kanaData) {
  const srsByItem = kanaData.reduce((acc, item) => {
    acc[item.romaji] = {
      dueAt: 0,
      intervalHours: 0,
      lastSeenAt: 0,
      lastCorrect: false
    };
    return acc;
  }, {});

  return createBaseDatasetState({
    backlog: createBacklog(kanaData),
    srsByItem
  });
}

function createDatasetStateFromItems(items, getId, getMeta) {
  const srsByItem = items.reduce((acc, item) => {
    acc[getId(item)] = {
      dueAt: 0,
      intervalHours: 0,
      lastSeenAt: 0,
      lastCorrect: false
    };
    return acc;
  }, {});

  return createBaseDatasetState({
    backlog: createGenericBacklog(items, getId, getMeta),
    srsByItem
  });
}

function getDatasetStateForAlias(hostState, datasetId) {
  const selectedId = datasetId === DATASET_IDS.KANA
    ? DATASET_IDS.KANA
    : (hostState.activeDataset && hostState.datasets[hostState.activeDataset]
      ? hostState.activeDataset
      : DATASET_IDS.KANA);
  return hostState.datasets[selectedId];
}

function defineKanaCompatibilityAliases(state) {
  const aliasDescriptors = {
    practiceStrategy: {
      get() { return getDatasetStateForAlias(this).practiceStrategy; },
      set(value) { getDatasetStateForAlias(this).practiceStrategy = value; }
    },
    recentMistakes: {
      get() { return getDatasetStateForAlias(this).recentMistakes; },
      set(value) { getDatasetStateForAlias(this).recentMistakes = Array.isArray(value) ? value : []; }
    },
    recentTypingMistakes: {
      get() { return getDatasetStateForAlias(this).recentTypingMistakes; },
      set(value) { getDatasetStateForAlias(this).recentTypingMistakes = Array.isArray(value) ? value : []; }
    },
    recentDrawingMistakes: {
      get() { return getDatasetStateForAlias(this).recentDrawingMistakes; },
      set(value) { getDatasetStateForAlias(this).recentDrawingMistakes = Array.isArray(value) ? value : []; }
    },
    srsByRomaji: {
      get() { return getDatasetStateForAlias(this).srsByItem; },
      set(value) { getDatasetStateForAlias(this).srsByItem = value && typeof value === "object" ? value : {}; }
    },
    typingRightCount: {
      get() { return getDatasetStateForAlias(this).typingRightCount; },
      set(value) { getDatasetStateForAlias(this).typingRightCount = Number(value || 0); }
    },
    typingWrongCount: {
      get() { return getDatasetStateForAlias(this).typingWrongCount; },
      set(value) { getDatasetStateForAlias(this).typingWrongCount = Number(value || 0); }
    },
    drawingRightCount: {
      get() { return getDatasetStateForAlias(this).drawingRightCount; },
      set(value) { getDatasetStateForAlias(this).drawingRightCount = Number(value || 0); }
    },
    drawingWrongCount: {
      get() { return getDatasetStateForAlias(this).drawingWrongCount; },
      set(value) { getDatasetStateForAlias(this).drawingWrongCount = Number(value || 0); }
    },
    drawingsByKana: {
      get() { return getDatasetStateForAlias(this).drawingsByItem; },
      set(value) { getDatasetStateForAlias(this).drawingsByItem = value && typeof value === "object" ? value : {}; }
    },
    dailyStats: {
      get() { return getDatasetStateForAlias(this).dailyStats; },
      set(value) { getDatasetStateForAlias(this).dailyStats = value && typeof value === "object" ? value : {}; }
    },
    dailyCategoryStats: {
      get() { return getDatasetStateForAlias(this).dailyCategoryStats; },
      set(value) { getDatasetStateForAlias(this).dailyCategoryStats = value && typeof value === "object" ? value : {}; }
    },
    dailyDetailStats: {
      get() { return getDatasetStateForAlias(this).dailyDetailStats; },
      set(value) { getDatasetStateForAlias(this).dailyDetailStats = value && typeof value === "object" ? value : {}; }
    },
    confusionPairs: {
      get() { return getDatasetStateForAlias(this).confusionPairs; },
      set(value) { getDatasetStateForAlias(this).confusionPairs = value && typeof value === "object" ? value : {}; }
    },
    srsAccuracyWindow: {
      get() { return getDatasetStateForAlias(this).srsAccuracyWindow; },
      set(value) { getDatasetStateForAlias(this).srsAccuracyWindow = value && typeof value === "object" ? value : {}; }
    },
    backlog: {
      get() { return getDatasetStateForAlias(this).backlog; },
      set(value) { getDatasetStateForAlias(this).backlog = value && typeof value === "object" ? value : {}; }
    }
  };

  Object.defineProperties(state, aliasDescriptors);
}

export function createState(kanaData) {
  const datasetsInput = Array.isArray(kanaData)
    ? { kanaData, wordsData: [], kanjiData: [] }
    : (kanaData || {});
  const resolvedKanaData = Array.isArray(datasetsInput.kanaData) ? datasetsInput.kanaData : [];
  const resolvedWordsData = Array.isArray(datasetsInput.wordsData) ? datasetsInput.wordsData : [];
  const resolvedKanjiData = Array.isArray(datasetsInput.kanjiData) ? datasetsInput.kanjiData : [];

  const state = {
    currentQuestion: null,
    nextQuestionTimer: null,
    activeDataset: DATASET_IDS.KANA,
    showWordHelper: false,
    showKanjiHelper: false,
    datasets: {
      [DATASET_IDS.KANA]: createKanaDatasetState(resolvedKanaData),
      [DATASET_IDS.WORDS]: createDatasetStateFromItems(resolvedWordsData, (item) => item.id, (item) => ({
        label: item.japanese,
        helperRomaji: item.helperRomaji || item.romaji || "",
        meanings: item.meanings || []
      })),
      [DATASET_IDS.KANJI]: createDatasetStateFromItems(resolvedKanjiData, (item) => item.id, (item) => ({
        label: item.kanji,
        romaji: item.romaji || [],
        meanings: item.meanings || []
      }))
    },
    audioMuted: false,
    drawGuideEnabled: true,
    dailyGoal: 25,
    dailyGoals: {
      total: 25,
      typing: 12,
      drawing: 8,
      normal: 10,
      dakuten: 6,
      yoon: 6
    },
    backlogFilters: {
      status: "all",
      script: "all",
      weakness: "all",
      minAttempts: 0,
      compact: false
    },
    installPromptSeen: false,
    lastSavedAt: 0,
    lastCloudSyncAt: 0,
    syncUserEmail: "",
    progressUiDayMarker: getTodayKey(),
    progressSubtab: "overview",
    progressCollapsedSections: {
      overview: false,
      trends: false,
      compare: false,
      sync: false
    }
  };

  defineKanaCompatibilityAliases(state);

  /**
   * Merge a partial patch into state.
   * Prefer mutate() for new code; old direct assignments remain valid.
   * @param {object} patch
   */
  state.mutate = function mutate(patch) {
    Object.assign(this, patch);
  };

  return state;
}
