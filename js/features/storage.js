export function trimDailyStatsToLimit(dailyStats, limit) {
  const sorted = Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
  if (sorted.length <= limit) {
    return;
  }

  sorted.slice(limit).forEach((dateKey) => {
    delete dailyStats[dateKey];
  });
}

export function saveProgress({ storageKey, state, dailyHistoryLimit }) {
  trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);

  const payload = {
    typingRightCount: state.typingRightCount,
    typingWrongCount: state.typingWrongCount,
    drawingRightCount: state.drawingRightCount,
    drawingWrongCount: state.drawingWrongCount,
    backlog: state.backlog,
    drawingsByKana: state.drawingsByKana,
    dailyStats: state.dailyStats
  };

  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch {
    // Ignore storage quota or blocked storage errors.
  }
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

  state.typingRightCount = Number(parsed.typingRightCount || 0);
  state.typingWrongCount = Number(parsed.typingWrongCount || 0);
  state.drawingRightCount = Number(parsed.drawingRightCount || 0);
  state.drawingWrongCount = Number(parsed.drawingWrongCount || 0);

  if (parsed.backlog && typeof parsed.backlog === "object") {
    kanaData.forEach((item) => {
      const saved = parsed.backlog[item.romaji];
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

  if (parsed.drawingsByKana && typeof parsed.drawingsByKana === "object") {
    Object.keys(parsed.drawingsByKana).forEach((kanaChar) => {
      const savedList = parsed.drawingsByKana[kanaChar];
      if (Array.isArray(savedList)) {
        state.drawingsByKana[kanaChar] = savedList
          .filter((value) => typeof value === "string")
          .slice(0, maxDrawingsPerKana);
      }
    });
  }

  if (parsed.dailyStats && typeof parsed.dailyStats === "object") {
    Object.keys(parsed.dailyStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const saved = parsed.dailyStats[dateKey];
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
