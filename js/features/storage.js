export function trimDailyStatsToLimit(dailyStats, limit) {
  const sorted = Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
  if (sorted.length <= limit) {
    return;
  }

  sorted.slice(limit).forEach((dateKey) => {
    delete dailyStats[dateKey];
  });
}

function getDatasetBucket(payload, datasetId) {
  if (payload && payload.datasets && typeof payload.datasets === "object") {
    const bucket = payload.datasets[datasetId];
    if (bucket && typeof bucket === "object") {
      return bucket;
    }
  }
  return null;
}

function ensureDatasetObject(value) {
  return value && typeof value === "object" ? value : {};
}

function buildDatasetPayload(datasetState) {
  return {
    practiceStrategy: datasetState.practiceStrategy,
    recentMistakes: datasetState.recentMistakes,
    recentTypingMistakes: datasetState.recentTypingMistakes,
    recentDrawingMistakes: datasetState.recentDrawingMistakes,
    srsByItem: datasetState.srsByItem,
    typingRightCount: datasetState.typingRightCount,
    typingWrongCount: datasetState.typingWrongCount,
    drawingRightCount: datasetState.drawingRightCount,
    drawingWrongCount: datasetState.drawingWrongCount,
    backlog: datasetState.backlog,
    drawingsByItem: datasetState.drawingsByItem,
    dailyStats: datasetState.dailyStats,
    dailyCategoryStats: datasetState.dailyCategoryStats,
    dailyDetailStats: datasetState.dailyDetailStats,
    confusionPairs: datasetState.confusionPairs,
    srsAccuracyWindow: datasetState.srsAccuracyWindow
  };
}

function normalizeDatasetRuntimeState(targetDataset, sourceDataset) {
  const source = ensureDatasetObject(sourceDataset);
  targetDataset.practiceStrategy = source.practiceStrategy === "mistakeReview" || source.practiceStrategy === "mixed" || source.practiceStrategy === "frequentMistakes"
    ? source.practiceStrategy
    : "srs";
  targetDataset.recentMistakes = Array.isArray(source.recentMistakes)
    ? source.recentMistakes.filter((item) => typeof item === "string").slice(0, 120)
    : [];
  targetDataset.recentTypingMistakes = Array.isArray(source.recentTypingMistakes)
    ? source.recentTypingMistakes.filter((item) => typeof item === "string").slice(0, 120)
    : [];
  targetDataset.recentDrawingMistakes = Array.isArray(source.recentDrawingMistakes)
    ? source.recentDrawingMistakes.filter((item) => typeof item === "string").slice(0, 120)
    : [];
  const nextSrsByItem = ensureDatasetObject(targetDataset.srsByItem);
  Object.entries(ensureDatasetObject(source.srsByItem)).forEach(([itemId, entry]) => {
    nextSrsByItem[itemId] = {
      dueAt: Number(entry && entry.dueAt || 0),
      intervalHours: Number(entry && entry.intervalHours || 0),
      lastSeenAt: Number(entry && entry.lastSeenAt || 0),
      lastCorrect: Boolean(entry && entry.lastCorrect)
    };
  });
  targetDataset.srsByItem = nextSrsByItem;
  targetDataset.typingRightCount = Number(source.typingRightCount || 0);
  targetDataset.typingWrongCount = Number(source.typingWrongCount || 0);
  targetDataset.drawingRightCount = Number(source.drawingRightCount || 0);
  targetDataset.drawingWrongCount = Number(source.drawingWrongCount || 0);
  const nextBacklog = ensureDatasetObject(targetDataset.backlog);
  Object.entries(ensureDatasetObject(source.backlog)).forEach(([itemId, entry]) => {
    nextBacklog[itemId] = {
      ...(nextBacklog[itemId] || {}),
      ...entry
    };
  });
  targetDataset.backlog = nextBacklog;
  targetDataset.drawingsByItem = ensureDatasetObject(source.drawingsByItem);
  targetDataset.dailyStats = ensureDatasetObject(source.dailyStats);
  targetDataset.dailyCategoryStats = ensureDatasetObject(source.dailyCategoryStats);
  targetDataset.dailyDetailStats = ensureDatasetObject(source.dailyDetailStats);
  targetDataset.confusionPairs = ensureDatasetObject(source.confusionPairs);
  targetDataset.srsAccuracyWindow = ensureDatasetObject(source.srsAccuracyWindow);
}

function buildLegacyKanaDatasetPayload(payload) {
  return {
    practiceStrategy: payload.practiceStrategy,
    recentMistakes: payload.recentMistakes,
    recentTypingMistakes: payload.recentTypingMistakes,
    recentDrawingMistakes: payload.recentDrawingMistakes,
    srsByItem: payload.srsByRomaji,
    typingRightCount: payload.typingRightCount,
    typingWrongCount: payload.typingWrongCount,
    drawingRightCount: payload.drawingRightCount,
    drawingWrongCount: payload.drawingWrongCount,
    backlog: payload.backlog,
    drawingsByItem: payload.drawingsByKana,
    dailyStats: payload.dailyStats,
    dailyCategoryStats: payload.dailyCategoryStats,
    dailyDetailStats: payload.dailyDetailStats,
    confusionPairs: payload.confusionPairs,
    srsAccuracyWindow: payload.srsAccuracyWindow
  };
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

function normalizeProgressSubtab(payload) {
  const value = payload && typeof payload.progressSubtab === "string" ? payload.progressSubtab : "overview";
  return ["overview", "trends", "compare", "sync"].includes(value) ? value : "overview";
}

function normalizeProgressCollapsedSections(payload) {
  const source = payload && payload.progressCollapsedSections && typeof payload.progressCollapsedSections === "object"
    ? payload.progressCollapsedSections
    : {};

  return {
    overview: Boolean(source.overview),
    trends: Boolean(source.trends),
    compare: Boolean(source.compare),
    sync: Boolean(source.sync)
  };
}

export function buildProgressPayload({ state, dailyHistoryLimit }) {
  trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
  trimDailyStatsToLimit(state.dailyCategoryStats, dailyHistoryLimit);
  Object.values(state.datasets || {}).forEach((datasetState) => {
    trimDailyStatsToLimit(datasetState.dailyStats || {}, dailyHistoryLimit);
    trimDailyStatsToLimit(datasetState.dailyCategoryStats || {}, dailyHistoryLimit);
  });

  const savedAt = Date.now();
  state.lastSavedAt = savedAt;

  const kanaDataset = state.datasets && state.datasets.kana ? state.datasets.kana : {};

  return {
    schemaVersion: 2,
    savedAt,
    activeDataset: state.activeDataset || "kana",
    showWordHelper: Boolean(state.showWordHelper),
    showKanjiHelper: Boolean(state.showKanjiHelper),
    datasets: {
      kana: buildDatasetPayload(kanaDataset),
      words: buildDatasetPayload((state.datasets && state.datasets.words) || {}),
      kanji: buildDatasetPayload((state.datasets && state.datasets.kanji) || {})
    },
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
    progressSubtab: state.progressSubtab,
    progressCollapsedSections: state.progressCollapsedSections,
    lastCloudSyncAt: state.lastCloudSyncAt,
    syncUserEmail: state.syncUserEmail,
    typingRightCount: kanaDataset.typingRightCount,
    typingWrongCount: kanaDataset.typingWrongCount,
    drawingRightCount: kanaDataset.drawingRightCount,
    drawingWrongCount: kanaDataset.drawingWrongCount,
    backlog: kanaDataset.backlog,
    drawingsByKana: kanaDataset.drawingsByItem,
    dailyStats: kanaDataset.dailyStats,
    dailyCategoryStats: kanaDataset.dailyCategoryStats,
    dailyDetailStats: kanaDataset.dailyDetailStats,
    confusionPairs: kanaDataset.confusionPairs,
    srsAccuracyWindow: kanaDataset.srsAccuracyWindow
  };
}

export function applyProgressPayload({ payload, state, kanaData, maxDrawingsPerKana, dailyHistoryLimit }) {
  if (!payload || typeof payload !== "object") {
    return;
  }

  state.lastSavedAt = Number(payload.savedAt || 0);
  state.activeDataset = typeof payload.activeDataset === "string" ? payload.activeDataset : "kana";
  state.showWordHelper = Boolean(payload.showWordHelper);
  state.showKanjiHelper = Boolean(payload.showKanjiHelper);

  const kanaPayload = getDatasetBucket(payload, "kana") || buildLegacyKanaDatasetPayload(payload);
  const wordsPayload = getDatasetBucket(payload, "words") || {};
  const kanjiPayload = getDatasetBucket(payload, "kanji") || {};

  normalizeDatasetRuntimeState(state.datasets.kana, kanaPayload);
  normalizeDatasetRuntimeState(state.datasets.words, wordsPayload);
  normalizeDatasetRuntimeState(state.datasets.kanji, kanjiPayload);

  if (state.recentTypingMistakes.length === 0 && Array.isArray(payload.recentMistakes)) {
    state.recentTypingMistakes = payload.recentMistakes.filter((romaji) => typeof romaji === "string").slice(0, 120);
    state.recentDrawingMistakes = [...state.recentTypingMistakes];
    state.recentMistakes = [...new Set(state.recentTypingMistakes)].slice(0, 120);
  }

  state.audioMuted = Boolean(payload.audioMuted);
  state.drawGuideEnabled = payload.drawGuideEnabled !== false;
  state.dailyGoals = normalizeDailyGoals(state, payload);
  state.dailyGoal = state.dailyGoals.total;
  state.backlogFilters = normalizeBacklogFilters(payload);
  state.progressSubtab = normalizeProgressSubtab(payload);
  state.progressCollapsedSections = normalizeProgressCollapsedSections(payload);
  state.lastCloudSyncAt = Number(payload.lastCloudSyncAt || 0);
  state.syncUserEmail = typeof payload.syncUserEmail === "string" ? payload.syncUserEmail : "";

  kanaData.forEach((item) => {
    const savedSrs = state.srsByRomaji && state.srsByRomaji[item.romaji];
    state.srsByRomaji[item.romaji] = {
      dueAt: Number(savedSrs && savedSrs.dueAt || 0),
      intervalHours: Number(savedSrs && savedSrs.intervalHours || 0),
      lastSeenAt: Number(savedSrs && savedSrs.lastSeenAt || 0),
      lastCorrect: Boolean(savedSrs && savedSrs.lastCorrect)
    };
  });

  if (state.backlog && typeof state.backlog === "object") {
    kanaData.forEach((item) => {
      const saved = state.backlog[item.romaji];
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

  if (state.drawingsByKana && typeof state.drawingsByKana === "object") {
    Object.keys(state.drawingsByKana).forEach((kanaChar) => {
      const savedList = state.drawingsByKana[kanaChar];
      if (Array.isArray(savedList)) {
        state.drawingsByKana[kanaChar] = savedList
          .filter((value) => typeof value === "string")
          .slice(0, maxDrawingsPerKana);
      }
    });
  }

  if (state.dailyStats && typeof state.dailyStats === "object") {
    Object.keys(state.dailyStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const saved = state.dailyStats[dateKey];
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

  if (state.dailyCategoryStats && typeof state.dailyCategoryStats === "object") {
    Object.keys(state.dailyCategoryStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const saved = state.dailyCategoryStats[dateKey];
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
