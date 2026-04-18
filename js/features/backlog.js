export function getKanaCategory(romaji, YOON_SET, DAKUTEN_SET) {
  if (YOON_SET.has(romaji)) return "yoon";
  if (DAKUTEN_SET.has(romaji)) return "dakuten";
  return "normal";
}

function getCardStatus(stats) {
  if (stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong === 0) return "";

  const typingNetPositive = stats.typingRight > stats.typingWrong;
  const drawingNetPositive = stats.drawingRight > stats.drawingWrong;

  if (typingNetPositive && drawingNetPositive) return "status-good";
  if (!typingNetPositive && !drawingNetPositive) return "status-bad";
  return "status-mixed";
}

function getTotalAttempts(stats) {
  return stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong;
}

function getScriptStats(row, scriptType) {
  if (scriptType === "hiragana") {
    return {
      typingRight: row.hiraganaTypingRight,
      typingWrong: row.hiraganaTypingWrong,
      drawingRight: row.hiraganaDrawingRight,
      drawingWrong: row.hiraganaDrawingWrong
    };
  }

  return {
    typingRight: row.katakanaTypingRight,
    typingWrong: row.katakanaTypingWrong,
    drawingRight: row.katakanaDrawingRight,
    drawingWrong: row.katakanaDrawingWrong
  };
}

function getDisplayRomaji(item, scriptType) {
  if (scriptType === "hiragana" && item.hiragana === "を") {
    return "o";
  }
  if (scriptType === "katakana" && item.katakana === "ヲ") {
    return "wo";
  }
  return item.romaji;
}

export function renderBacklog({ kanaData, backlog, drawingsByKana, getKanaCategoryFn, filters }) {
  const activeFilters = filters || {
    status: "all",
    script: "all",
    weakness: "all",
    minAttempts: 0
  };

  function passesFilters(stats) {
    const attempts = getTotalAttempts(stats);
    const status = getCardStatus(stats);
    const minAttempts = Math.max(0, Number(activeFilters.minAttempts || 0));
    if (attempts < minAttempts) {
      return false;
    }

    if (activeFilters.status === "unseen" && attempts > 0) {
      return false;
    }
    if (activeFilters.status === "weak" && status !== "status-bad" && status !== "status-mixed") {
      return false;
    }
    if (activeFilters.status === "strong" && status !== "status-good") {
      return false;
    }

    if (activeFilters.weakness === "typing" && !(stats.typingWrong > stats.typingRight)) {
      return false;
    }
    if (activeFilters.weakness === "drawing" && !(stats.drawingWrong > stats.drawingRight)) {
      return false;
    }

    return true;
  }

  function makeCard(kanaChar, romaji, row, scriptType) {
    const stats = getScriptStats(row, scriptType);
    if (!passesFilters(stats)) {
      return "";
    }

    const status = getCardStatus(stats);
    const drawingsCount = (drawingsByKana[kanaChar] || []).length;

    return `<div class="kana-card ${status}">
      <div class="kana-char">${kanaChar}</div>
      <div class="kana-romaji">${romaji}</div>
      <div class="kana-stats">
        <div class="mode-row"><span class="mode-tag">T</span><span class="k-right">\u2713${stats.typingRight}</span><span class="k-wrong">\u2717${stats.typingWrong}</span></div>
        <div class="mode-row"><span class="mode-tag">D</span><span class="k-right">\u2713${stats.drawingRight}</span><span class="k-wrong">\u2717${stats.drawingWrong}</span></div>
      </div>
      <button type="button" class="btn-secondary view-drawings-btn" data-kana="${kanaChar}">Drawings (${drawingsCount})</button>
    </div>`;
  }

  function fillSection(prefix, category) {
    const items = kanaData.filter((item) => getKanaCategoryFn(item.romaji) === category);

    const shouldShowHiragana = activeFilters.script === "all" || activeFilters.script === "hiragana";
    const shouldShowKatakana = activeFilters.script === "all" || activeFilters.script === "katakana";

    const hiraganaCards = shouldShowHiragana
      ? items
        .map((item) => {
          const row = backlog[item.romaji];
          return makeCard(item.hiragana, getDisplayRomaji(item, "hiragana"), row, "hiragana");
        })
        .filter(Boolean)
      : [];

    const katakanaCards = shouldShowKatakana
      ? items
        .map((item) => {
          const row = backlog[item.romaji];
          return makeCard(item.katakana, getDisplayRomaji(item, "katakana"), row, "katakana");
        })
        .filter(Boolean)
      : [];

    document.getElementById(prefix + "HiraganaGrid").innerHTML = shouldShowHiragana
      ? (hiraganaCards.length > 0 ? hiraganaCards.join("") : "<div class=\"kana-card empty-card\">No matches</div>")
      : "";

    document.getElementById(prefix + "KatakanaGrid").innerHTML = shouldShowKatakana
      ? (katakanaCards.length > 0 ? katakanaCards.join("") : "<div class=\"kana-card empty-card\">No matches</div>")
      : "";
  }

  fillSection("normal", "normal");
  fillSection("dakuten", "dakuten");
  fillSection("yoon", "yoon");
}

export function updateBacklog({ backlog, romaji, wasCorrect, scriptContext, answerMode }) {
  const row = backlog[romaji];
  if (!row) {
    return;
  }

  if (wasCorrect) {
    row.right += 1;
  } else {
    row.wrong += 1;
  }

  if (answerMode === "typing") {
    if (wasCorrect) {
      row.typingRight += 1;
    } else {
      row.typingWrong += 1;
    }
  } else if (answerMode === "drawing") {
    if (wasCorrect) {
      row.drawingRight += 1;
    } else {
      row.drawingWrong += 1;
    }
  }

  if (scriptContext === "hiragana" || scriptContext === "both") {
    if (answerMode === "typing") {
      if (wasCorrect) {
        row.hiraganaTypingRight += 1;
      } else {
        row.hiraganaTypingWrong += 1;
      }
    } else if (answerMode === "drawing") {
      if (wasCorrect) {
        row.hiraganaDrawingRight += 1;
      } else {
        row.hiraganaDrawingWrong += 1;
      }
    }

    if (wasCorrect) {
      row.hiraganaRight += 1;
    } else {
      row.hiraganaWrong += 1;
    }
  }

  if (scriptContext === "katakana" || scriptContext === "both") {
    if (answerMode === "typing") {
      if (wasCorrect) {
        row.katakanaTypingRight += 1;
      } else {
        row.katakanaTypingWrong += 1;
      }
    } else if (answerMode === "drawing") {
      if (wasCorrect) {
        row.katakanaDrawingRight += 1;
      } else {
        row.katakanaDrawingWrong += 1;
      }
    }

    if (wasCorrect) {
      row.katakanaRight += 1;
    } else {
      row.katakanaWrong += 1;
    }
  }
}

export function getQuestionWeight(backlog, item) {
  const entry = backlog[item.romaji];
  if (!entry || entry.right + entry.wrong === 0) {
    return 4;
  }
  return Math.max(1, 3 + entry.wrong - entry.right);
}
