export function getKanaCategory(romaji, YOON_SET, DAKUTEN_SET) {
  if (YOON_SET.has(romaji)) return "yoon";
  if (DAKUTEN_SET.has(romaji)) return "dakuten";
  return "normal";
}

function getCardStatus(stats) {
  const totalAttempts = stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong;
  if (totalAttempts === 0) return "";

  const typingAttempts = stats.typingRight + stats.typingWrong;
  const drawingAttempts = stats.drawingRight + stats.drawingWrong;

  const typingPositive = typingAttempts > 0 && stats.typingRight > stats.typingWrong;
  const drawingPositive = drawingAttempts > 0 && stats.drawingRight > stats.drawingWrong;
  const typingNegative = typingAttempts > 0 && stats.typingRight <= stats.typingWrong;
  const drawingNegative = drawingAttempts > 0 && stats.drawingRight <= stats.drawingWrong;
  const bothAttempted = typingAttempts > 0 && drawingAttempts > 0;

  // Green only when both modes have been played and both are net-positive.
  if (bothAttempted && typingPositive && drawingPositive) {
    return "status-good";
  }

  // With one untouched mode, a net-positive attempted mode is "in progress" (yellow).
  if (!bothAttempted && (typingPositive || drawingPositive)) {
    return "status-mixed";
  }

  // Red when both attempted modes are net-negative, or when single attempted mode is not positive.
  if ((bothAttempted && typingNegative && drawingNegative) || (!bothAttempted && (typingNegative || drawingNegative))) {
    return "status-bad";
  }

  // Mixed outcomes (one positive, one negative) are yellow.
  return "status-mixed";
}

function getTotalAttempts(stats) {
  return stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
    minAttempts: 0,
    compact: false
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

    const compactClass = activeFilters.compact ? " compact" : "";

    return `<div class="kana-card ${status}${compactClass}">
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

  // Phase 4 — empty-state messaging when all grids are empty after filtering
  const grids = document.querySelectorAll(
    "#normalHiraganaGrid, #normalKatakanaGrid, #dakutenHiraganaGrid, #dakutenKatakanaGrid, #yoonHiraganaGrid, #yoonKatakanaGrid"
  );
  const allEmpty = Array.from(grids).every((g) => {
    const cards = g.querySelectorAll(".kana-card:not(.empty-card)");
    return cards.length === 0;
  });

  const existingMsg = document.getElementById("backlogEmptyState");
  if (allEmpty) {
    if (!existingMsg) {
      const msg = document.createElement("div");
      msg.id = "backlogEmptyState";
      msg.className = "backlog-empty-state";
      msg.textContent = "No kana match your current filters. Try adjusting the filters above.";
      const panel = document.getElementById("backlogPanel");
      if (panel) panel.appendChild(msg);
    }
  } else {
    if (existingMsg) existingMsg.remove();
  }
}

export function renderDatasetBacklog({ datasetId, items, backlog, drawingsByItem, container }) {
  if (!container) {
    return;
  }

  function passesFilters(row, item) {
    const attempts = getTotalAttempts(row);
    const minAttempts = Math.max(0, Number(container.dataset.minAttempts || 0));
    if (attempts < minAttempts) {
      return false;
    }

    const statusFilter = container.dataset.statusFilter || "all";
    const status = getCardStatus(row);
    if (statusFilter === "unseen" && attempts > 0) {
      return false;
    }
    if (statusFilter === "weak" && status !== "status-bad" && status !== "status-mixed") {
      return false;
    }
    if (statusFilter === "strong" && status !== "status-good") {
      return false;
    }

    const weaknessFilter = container.dataset.weaknessFilter || "all";
    if (weaknessFilter === "typing" && !(row.typingWrong > row.typingRight)) {
      return false;
    }
    if (weaknessFilter === "drawing" && !(row.drawingWrong > row.drawingRight)) {
      return false;
    }

    const categoryFilter = container.dataset.categoryFilter || "all";
    const category = String(item.category || "core");
    if (categoryFilter !== "all" && category !== categoryFilter) {
      return false;
    }

    return true;
  }

  const cards = items.map((item) => {
    const itemId = item.id;
    const row = backlog[itemId];
    if (!row) {
      return "";
    }
    if (!passesFilters(row, item)) {
      return "";
    }

    const status = getCardStatus(row);
    const attempts = getTotalAttempts(row);
    const helper = datasetId === "words"
      ? `${escapeHtml(item.romaji)} • ${escapeHtml(item.meanings[0] || "")}`
      : `${escapeHtml((item.romaji || []).join(", "))} • ${escapeHtml(item.meanings[0] || "")}`;
    const primary = datasetId === "words" ? item.japanese : item.kanji;
    const category = String(item.category || "core");
    const drawingsCount = datasetId === "kanji" ? ((drawingsByItem[primary] || []).length) : 0;

    return `
      <div class="kana-card ${status}">
        <div class="kana-char">${escapeHtml(primary)}</div>
        <div class="kana-romaji">${helper}</div>
        <div class="kana-romaji">Category: ${escapeHtml(category)}</div>
        <div class="kana-stats">
          <div class="mode-row"><span class="mode-tag">T</span><span class="k-right">✓${row.typingRight}</span><span class="k-wrong">✗${row.typingWrong}</span></div>
          ${datasetId === "words"
            ? ""
            : `<div class="mode-row"><span class="mode-tag">D</span><span class="k-right">✓${row.drawingRight}</span><span class="k-wrong">✗${row.drawingWrong}</span></div>`}
        </div>
        <div class="kana-romaji">Attempts: ${attempts}</div>
        ${datasetId === "kanji" ? `<button type="button" class="btn-secondary view-drawings-btn" data-kana="${escapeHtml(primary)}">Drawings (${drawingsCount})</button>` : ""}
      </div>
    `;
  }).filter(Boolean);

  container.innerHTML = cards.length
    ? `<div class="kana-grid">${cards.join("")}</div>`
    : `<div class="compare-empty">No ${datasetId} attempts yet. Start a few rounds to build progress.</div>`;
  container.classList.remove("hidden");
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
