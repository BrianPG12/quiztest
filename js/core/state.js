import { getTodayKey } from "./utils.js";

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

export function createState(kanaData) {
  const srsByRomaji = kanaData.reduce((acc, item) => {
    acc[item.romaji] = {
      dueAt: 0,
      intervalHours: 0,
      lastSeenAt: 0,
      lastCorrect: false
    };
    return acc;
  }, {});

  return {
    currentQuestion: null,
    nextQuestionTimer: null,
    practiceStrategy: "srs",
    recentMistakes: [],
    recentTypingMistakes: [],
    recentDrawingMistakes: [],
    srsByRomaji,
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
    typingRightCount: 0,
    typingWrongCount: 0,
    drawingRightCount: 0,
    drawingWrongCount: 0,
    drawingsByKana: {},
    dailyStats: {},
    dailyCategoryStats: {},
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
    },
    backlog: createBacklog(kanaData)
  };

  // New fields for Phase 2–3 features. Added via Object.assign so existing
  // state objects loaded from localStorage pick them up via applyProgressPayload.
  const extensions = {
    // Phase 2: smarter distractors — tracks which romaji the user has confused together.
    // Shape: { [correctRomaji]: { [wrongInput]: count } }
    confusionPairs: {},
    // Phase 2: adaptive SRS — rolling window of last 10 attempt outcomes per romaji.
    // Shape: { [romaji]: boolean[] }  (true = correct)
    srsAccuracyWindow: {},
    // Phase 3: per-day per-romaji detail for drill-down view.
    // Shape: { [dateKey]: { [romaji]: { right: number, wrong: number } } }
    dailyDetailStats: {}
  };

  Object.assign(state, extensions);

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
