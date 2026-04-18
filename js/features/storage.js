export function trimDailyStatsToLimit(dailyStats, limit) {
  const sorted = Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
  if (sorted.length <= limit) {
    return;
  }

  sorted.slice(limit).forEach((dateKey) => {
    delete dailyStats[dateKey];
  });
}

function clampGoal(value, min = 0, max = 200, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.round(parsed)));
}

function normalizeDailyGoals(state, payload) {
  const legacyTotal = clampGoal(payload && payload.dailyGoal, 5, 200, 25);
  const source = payload && payload.dailyGoals && typeof payload.dailyGoals === "object"
    ? payload.dailyGoals
    : {};

  const total = clampGoal(source.total, 5, 200, legacyTotal);
  return {
    total,
    typing: clampGoal(source.typing, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.typing, 0, 200, 12)),
    drawing: clampGoal(source.drawing, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.drawing, 0, 200, 8)),
    normal: clampGoal(source.normal, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.normal, 0, 200, 10)),
    dakuten: clampGoal(source.dakuten, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.dakuten, 0, 200, 6)),
    yoon: clampGoal(source.yoon, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.yoon, 0, 200, 6))
  };
}

function normalizeBacklogFilters(payload) {
  const source = payload && payload.backlogFilters && typeof payload.backlogFilters === "object"
    ? payload.backlogFilters
    : {};

  const status = ["all", "weak", "strong", "unseen"].includes(source.status) ? source.status : "all";
  const script = ["all", "hiragana", "katakana"].includes(source.script) ? source.script : "all";
  const weakness = ["all", "typing", "drawing"].includes(source.weakness) ? source.weakness : "all";
  const minAttempts = clampGoal(source.minAttempts, 0, 999, 0);

  return { status, script, weakness, minAttempts };
}

export function buildProgressPayload({ state, dailyHistoryLimit }) {
  trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
  trimDailyStatsToLimit(state.dailyCategoryStats, dailyHistoryLimit);

  const savedAt = Date.now();
  state.lastSavedAt = savedAt;

  return {
    savedAt,
    practiceStrategy: state.practiceStrategy,
    recentMistakes: state.recentMistakes,
    recentTypingMistakes: state.recentTypingMistakes,
    recentDrawingMistakes: state.recentDrawingMistakes,
    srsByRomaji: state.srsByRomaji,
    audioMuted: state.audioMuted,
    drawGuideEnabled: state.drawGuideEnabled,
    dailyGoal: state.dailyGoal,
    dailyGoals: state.dailyGoals,
    backlogFilters: state.backlogFilters,
    lastCloudSyncAt: state.lastCloudSyncAt,
    syncUserEmail: state.syncUserEmail,
    typingRightCount: state.typingRightCount,
    typingWrongCount: state.typingWrongCount,
    drawingRightCount: state.drawingRightCount,
    drawingWrongCount: state.drawingWrongCount,
    backlog: state.backlog,
    drawingsByKana: state.drawingsByKana,
    dailyStats: state.dailyStats,
    dailyCategoryStats: state.dailyCategoryStats
  };
}

export function applyProgressPayload({ payload, state, kanaData, maxDrawingsPerKana, dailyHistoryLimit }) {
  if (!payload || typeof payload !== "object") {
    return;
  }

  state.lastSavedAt = Number(payload.savedAt || 0);
  state.practiceStrategy = payload.practiceStrategy === "mistakeReview" || payload.practiceStrategy === "mixed" || payload.practiceStrategy === "frequentMistakes"
    ? payload.practiceStrategy
    : "srs";

  const legacyMistakes = Array.isArray(payload.recentMistakes)
    ? payload.recentMistakes.filter((romaji) => typeof romaji === "string").slice(0, 120)
    : [];

  state.recentTypingMistakes = Array.isArray(payload.recentTypingMistakes)
    ? payload.recentTypingMistakes.filter((romaji) => typeof romaji === "string").slice(0, 120)
    : [...legacyMistakes];

  state.recentDrawingMistakes = Array.isArray(payload.recentDrawingMistakes)
    ? payload.recentDrawingMistakes.filter((romaji) => typeof romaji === "string").slice(0, 120)
    : [...legacyMistakes];

  state.recentMistakes = [...new Set([...state.recentTypingMistakes, ...state.recentDrawingMistakes])].slice(0, 120);
  state.audioMuted = Boolean(payload.audioMuted);
  state.drawGuideEnabled = payload.drawGuideEnabled !== false;
  state.dailyGoals = normalizeDailyGoals(state, payload);
  state.dailyGoal = state.dailyGoals.total;
  state.backlogFilters = normalizeBacklogFilters(payload);
  state.lastCloudSyncAt = Number(payload.lastCloudSyncAt || 0);
  state.syncUserEmail = typeof payload.syncUserEmail === "string" ? payload.syncUserEmail : "";
  state.typingRightCount = Number(payload.typingRightCount || 0);
  state.typingWrongCount = Number(payload.typingWrongCount || 0);
  state.drawingRightCount = Number(payload.drawingRightCount || 0);
  state.drawingWrongCount = Number(payload.drawingWrongCount || 0);

  Object.keys(state.drawingsByKana).forEach((kanaChar) => {
    delete state.drawingsByKana[kanaChar];
  });
  Object.keys(state.dailyStats).forEach((dateKey) => {
    delete state.dailyStats[dateKey];
  });
  Object.keys(state.dailyCategoryStats).forEach((dateKey) => {
    delete state.dailyCategoryStats[dateKey];
  });

  kanaData.forEach((item) => {
    const savedSrs = payload.srsByRomaji && payload.srsByRomaji[item.romaji];
    state.srsByRomaji[item.romaji] = {
      dueAt: Number(savedSrs && savedSrs.dueAt || 0),
      intervalHours: Number(savedSrs && savedSrs.intervalHours || 0),
      lastSeenAt: Number(savedSrs && savedSrs.lastSeenAt || 0),
      lastCorrect: Boolean(savedSrs && savedSrs.lastCorrect)
    };
  });

  if (payload.backlog && typeof payload.backlog === "object") {
    kanaData.forEach((item) => {
      const saved = payload.backlog[item.romaji];
      if (!saved || typeof saved !== "object") {
        return;
      }

      const target = state.backlog[item.romaji];
      target.right = Number(saved.right || 0);
      target.wrong = Number(saved.wrong || 0);
      target.typingRight = Number(saved.typingRight || 0);
      target.typingWrong = Number(saved.typingWrong || 0);
      target.drawingRight = Number(saved.drawingRight || 0);
      target.drawingWrong = Number(saved.drawingWrong || 0);
      target.hiraganaTypingRight = Number(saved.hiraganaTypingRight || 0);
      target.hiraganaTypingWrong = Number(saved.hiraganaTypingWrong || 0);
      target.hiraganaDrawingRight = Number(saved.hiraganaDrawingRight || 0);
      target.hiraganaDrawingWrong = Number(saved.hiraganaDrawingWrong || 0);
      target.hiraganaRight = Number(saved.hiraganaRight || 0);
      target.hiraganaWrong = Number(saved.hiraganaWrong || 0);
      target.katakanaTypingRight = Number(saved.katakanaTypingRight || 0);
      target.katakanaTypingWrong = Number(saved.katakanaTypingWrong || 0);
      target.katakanaDrawingRight = Number(saved.katakanaDrawingRight || 0);
      target.katakanaDrawingWrong = Number(saved.katakanaDrawingWrong || 0);
      target.katakanaRight = Number(saved.katakanaRight || 0);
      target.katakanaWrong = Number(saved.katakanaWrong || 0);
    });
  }

  if (payload.drawingsByKana && typeof payload.drawingsByKana === "object") {
    Object.keys(payload.drawingsByKana).forEach((kanaChar) => {
      const savedList = payload.drawingsByKana[kanaChar];
      if (Array.isArray(savedList)) {
        state.drawingsByKana[kanaChar] = savedList
          .filter((value) => typeof value === "string")
          .slice(0, maxDrawingsPerKana);
      }
    });
  }

  if (payload.dailyStats && typeof payload.dailyStats === "object") {
    Object.keys(payload.dailyStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const saved = payload.dailyStats[dateKey];
      if (!saved || typeof saved !== "object") {
        return;
      }

      state.dailyStats[dateKey] = {
        typingRight: Number(saved.typingRight || 0),
        typingWrong: Number(saved.typingWrong || 0),
        drawingRight: Number(saved.drawingRight || 0),
        drawingWrong: Number(saved.drawingWrong || 0)
      };
    });
  }

  if (payload.dailyCategoryStats && typeof payload.dailyCategoryStats === "object") {
    Object.keys(payload.dailyCategoryStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const saved = payload.dailyCategoryStats[dateKey];
      if (!saved || typeof saved !== "object") {
        return;
      }

      state.dailyCategoryStats[dateKey] = {
        normal: Number(saved.normal || 0),
        dakuten: Number(saved.dakuten || 0),
        yoon: Number(saved.yoon || 0)
      };
    });
  }

  trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
  trimDailyStatsToLimit(state.dailyCategoryStats, dailyHistoryLimit);
}

export function saveProgress({ storageKey, state, dailyHistoryLimit }) {
  const payload = buildProgressPayload({ state, dailyHistoryLimit });
  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch {
    // Ignore storage quota or blocked storage errors.
  }
  return payload;
}

export function loadProgress({ storageKey, state, kanaData, maxDrawingsPerKana, dailyHistoryLimit }) {
  let parsed = null;
  try {
    parsed = JSON.parse(localStorage.getItem(storageKey) || "null");
  } catch {
    parsed = null;
  }

  if (!parsed || typeof parsed !== "object") {
    return;
  }

  applyProgressPayload({
    payload: parsed,
    state,
    kanaData,
    maxDrawingsPerKana,
    dailyHistoryLimit
  });
}
