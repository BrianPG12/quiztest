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
    srsByRomaji,
    audioMuted: false,
    drawGuideEnabled: true,
    dailyGoal: 25,
    installPromptSeen: false,
    typingRightCount: 0,
    typingWrongCount: 0,
    drawingRightCount: 0,
    drawingWrongCount: 0,
    drawingsByKana: {},
    dailyStats: {},
    lastSavedAt: 0,
    lastCloudSyncAt: 0,
    syncUserEmail: "",
    progressUiDayMarker: getTodayKey(),
    backlog: createBacklog(kanaData)
  };
}
