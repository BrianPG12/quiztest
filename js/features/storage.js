export function trimDailyStatsToLimit(dailyStats, limit) {
  const sorted = Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
  if (sorted.length <= limit) {
    return;
  }

  sorted.slice(limit).forEach((dateKey) => {
    delete dailyStats[dateKey];
  });
}

export function buildProgressPayload({ state, dailyHistoryLimit }) {
  trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);

  const savedAt = Date.now();
  state.lastSavedAt = savedAt;

  return {
    savedAt,
    typingRightCount: state.typingRightCount,
    typingWrongCount: state.typingWrongCount,
    drawingRightCount: state.drawingRightCount,
    drawingWrongCount: state.drawingWrongCount,
    backlog: state.backlog,
    drawingsByKana: state.drawingsByKana,
    dailyStats: state.dailyStats
  };
}

export function applyProgressPayload({ payload, state, kanaData, maxDrawingsPerKana, dailyHistoryLimit }) {
  if (!payload || typeof payload !== "object") {
    return;
  }

  state.lastSavedAt = Number(payload.savedAt || 0);
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

  trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
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
