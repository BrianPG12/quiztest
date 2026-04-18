export function getKanaCategory(romaji, YOON_SET, DAKUTEN_SET) {
  if (YOON_SET.has(romaji)) return "yoon";
  if (DAKUTEN_SET.has(romaji)) return "dakuten";
  return "normal";
}

function getCardStatus(stats) {
  if (stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong === 0) return "";

  const typingNetPositive = stats.typingRight > stats.typingWrong;
  const drawingNetPositive = stats.drawingRight > stats.drawingWrong;
  const enoughCombinedCorrect = stats.typingRight + stats.drawingRight > 3;
  if (typingNetPositive && drawingNetPositive && enoughCombinedCorrect) return "status-good";

  return "status-bad";
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

export function renderBacklog({ kanaData, backlog, drawingsByKana, getKanaCategoryFn }) {
  function makeCard(kanaChar, romaji, row, scriptType) {
    const stats = getScriptStats(row, scriptType);
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

    document.getElementById(prefix + "HiraganaGrid").innerHTML = items
      .map((item) => {
        const row = backlog[item.romaji];
        return makeCard(item.hiragana, getDisplayRomaji(item, "hiragana"), row, "hiragana");
      })
      .join("");

    document.getElementById(prefix + "KatakanaGrid").innerHTML = items
      .map((item) => {
        const row = backlog[item.romaji];
        return makeCard(item.katakana, getDisplayRomaji(item, "katakana"), row, "katakana");
      })
      .join("");
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
