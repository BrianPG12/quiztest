import { asPercent, formatDateLabel, getTodayKey } from "../core/utils.js";

function getSortedDateKeys(dailyStats) {
  return Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
}

function getDayTotals(day) {
  const typingTotal = day.typingRight + day.typingWrong;
  const drawingTotal = day.drawingRight + day.drawingWrong;
  return {
    typingTotal,
    drawingTotal,
    allRight: day.typingRight + day.drawingRight,
    allWrong: day.typingWrong + day.drawingWrong,
    allTotal: typingTotal + drawingTotal
  };
}

function getCategoryTotals(categoryEntry) {
  return {
    normal: Number(categoryEntry && categoryEntry.normal || 0),
    dakuten: Number(categoryEntry && categoryEntry.dakuten || 0),
    yoon: Number(categoryEntry && categoryEntry.yoon || 0)
  };
}

function buildDayOptions(elements, dailyStats) {
  const dateKeys = getSortedDateKeys(dailyStats);
  const options = dateKeys
    .map((dateKey) => `<option value="${dateKey}">${formatDateLabel(dateKey)}</option>`)
    .join("");

  elements.compareDayASelect.innerHTML = options;
  elements.compareDayBSelect.innerHTML = options;

  if (dateKeys.length === 0) {
    elements.compareDayASelect.innerHTML = "";
    elements.compareDayBSelect.innerHTML = "";
    return;
  }

  if (!dateKeys.includes(elements.compareDayASelect.value)) {
    elements.compareDayASelect.value = dateKeys[0];
  }

  if (!dateKeys.includes(elements.compareDayBSelect.value)) {
    elements.compareDayBSelect.value = dateKeys[1] || dateKeys[0];
  }
}

function resetProgressTabForNewDay(elements, dailyStats) {
  const dateKeys = getSortedDateKeys(dailyStats);
  if (dateKeys.length === 0) {
    return;
  }

  elements.compareDayASelect.value = dateKeys[0];
  elements.compareDayBSelect.value = dateKeys[1] || dateKeys[0];
}

function renderDailyProgressGraph(elements, dailyStats) {
  const ctx = elements.dailyProgressGraphCtx;
  const canvas = elements.dailyProgressGraph;
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth || 860;
  const cssHeight = 260;

  canvas.width = Math.round(cssWidth * dpr);
  canvas.height = Math.round(cssHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  const dateKeys = getSortedDateKeys(dailyStats).reverse().slice(-14);
  if (dateKeys.length < 2) {
    ctx.fillStyle = "#5e5446";
    ctx.font = "600 14px IBM Plex Sans";
    ctx.fillText("Complete attempts on at least two days to draw the graph.", 20, 38);
    return;
  }

  const left = 52;
  const top = 18;
  const width = Math.max(100, cssWidth - 72);
  const height = 190;
  const bottom = top + height;

  ctx.strokeStyle = "#c7b8a2";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = top + (i * height) / 4;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(left + width, y);
    ctx.stroke();

    ctx.fillStyle = "#5e5446";
    ctx.font = "12px IBM Plex Sans";
    ctx.fillText(`${100 - i * 25}%`, 8, y + 4);
  }

  function getPoint(index, ratio) {
    const x = left + (index * width) / (dateKeys.length - 1);
    const y = bottom - ratio * height;
    return { x, y };
  }

  const typingPoints = [];
  const drawingPoints = [];

  dateKeys.forEach((dateKey, index) => {
    const day = dailyStats[dateKey];
    const totals = getDayTotals(day);
    const typingRatio = totals.typingTotal ? day.typingRight / totals.typingTotal : 0;
    const drawingRatio = totals.drawingTotal ? day.drawingRight / totals.drawingTotal : 0;
    typingPoints.push(getPoint(index, typingRatio));
    drawingPoints.push(getPoint(index, drawingRatio));

    if (index % 2 === 0 || index === dateKeys.length - 1) {
      const label = formatDateLabel(dateKey);
      ctx.save();
      ctx.translate(left + (index * width) / (dateKeys.length - 1), bottom + 10);
      ctx.rotate(-0.45);
      ctx.fillStyle = "#6a5f51";
      ctx.font = "11px IBM Plex Sans";
      ctx.fillText(label, 0, 0);
      ctx.restore();
    }
  });

  function drawLine(points, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();

    ctx.fillStyle = color;
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  drawLine(typingPoints, "#136f48");
  drawLine(drawingPoints, "#c95730");

  ctx.fillStyle = "#136f48";
  ctx.fillRect(left, bottom + 46, 14, 3);
  ctx.fillStyle = "#3f362c";
  ctx.font = "12px IBM Plex Sans";
  ctx.fillText("Typing accuracy", left + 20, bottom + 50);

  ctx.fillStyle = "#c95730";
  ctx.fillRect(left + 140, bottom + 46, 14, 3);
  ctx.fillStyle = "#3f362c";
  ctx.fillText("Drawing accuracy", left + 160, bottom + 50);
}

function renderDayComparison(elements, dailyStats) {
  const dayAKey = elements.compareDayASelect.value;
  const dayBKey = elements.compareDayBSelect.value;
  const dayA = dailyStats[dayAKey];
  const dayB = dailyStats[dayBKey];

  if (!dayA || !dayB) {
    elements.compareSummary.innerHTML = "<div class=\"compare-empty\">Do a few quiz attempts to unlock day-to-day comparison.</div>";
    return;
  }

  const totalsA = getDayTotals(dayA);
  const totalsB = getDayTotals(dayB);
  const typingAccuracyA = totalsA.typingTotal ? dayA.typingRight / totalsA.typingTotal : 0;
  const typingAccuracyB = totalsB.typingTotal ? dayB.typingRight / totalsB.typingTotal : 0;
  const drawingAccuracyA = totalsA.drawingTotal ? dayA.drawingRight / totalsA.drawingTotal : 0;
  const drawingAccuracyB = totalsB.drawingTotal ? dayB.drawingRight / totalsB.drawingTotal : 0;
  const overallAccuracyA = totalsA.allTotal ? totalsA.allRight / totalsA.allTotal : 0;
  const overallAccuracyB = totalsB.allTotal ? totalsB.allRight / totalsB.allTotal : 0;

  function formatDelta(newValue, oldValue) {
    const delta = Math.round((newValue - oldValue) * 100);
    if (delta === 0) return "0 pts";
    return `${delta > 0 ? "+" : ""}${delta} pts`;
  }

  elements.compareSummary.innerHTML = `
    <div class="compare-grid">
      <div class="compare-card">
        <h4>Typing Accuracy</h4>
        <div class="compare-line">${formatDateLabel(dayAKey)}: ${asPercent(dayA.typingRight, totalsA.typingTotal)}</div>
        <div class="compare-line">${formatDateLabel(dayBKey)}: ${asPercent(dayB.typingRight, totalsB.typingTotal)}</div>
        <div class="compare-delta">Delta (A - B): ${formatDelta(typingAccuracyA, typingAccuracyB)}</div>
      </div>
      <div class="compare-card">
        <h4>Drawing Accuracy</h4>
        <div class="compare-line">${formatDateLabel(dayAKey)}: ${asPercent(dayA.drawingRight, totalsA.drawingTotal)}</div>
        <div class="compare-line">${formatDateLabel(dayBKey)}: ${asPercent(dayB.drawingRight, totalsB.drawingTotal)}</div>
        <div class="compare-delta">Delta (A - B): ${formatDelta(drawingAccuracyA, drawingAccuracyB)}</div>
      </div>
      <div class="compare-card">
        <h4>Overall Accuracy</h4>
        <div class="compare-line">${formatDateLabel(dayAKey)}: ${asPercent(totalsA.allRight, totalsA.allTotal)}</div>
        <div class="compare-line">${formatDateLabel(dayBKey)}: ${asPercent(totalsB.allRight, totalsB.allTotal)}</div>
        <div class="compare-delta">Delta (A - B): ${formatDelta(overallAccuracyA, overallAccuracyB)}</div>
      </div>
    </div>
  `;
}

function renderDailyHistoryTable(elements, dailyStats, dailyDetailStats = {}) {
  const dateKeys = getSortedDateKeys(dailyStats);
  if (dateKeys.length === 0) {
    elements.dailyHistoryTable.innerHTML = "<div class=\"compare-empty\">No daily history yet. Start practicing to populate this table.</div>";
    return;
  }

  elements.dailyHistoryTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Typing</th>
          <th>Drawing</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${dateKeys.map((dateKey) => {
          const day = dailyStats[dateKey];
          const totals = getDayTotals(day);
          return `
            <tr class="history-day-row" data-date="${dateKey}">
              <td>${formatDateLabel(dateKey)}</td>
              <td>${day.typingRight}/${totals.typingTotal} (${asPercent(day.typingRight, totals.typingTotal)})</td>
              <td>${day.drawingRight}/${totals.drawingTotal} (${asPercent(day.drawingRight, totals.drawingTotal)})</td>
              <td>${totals.allRight}/${totals.allTotal} (${asPercent(totals.allRight, totals.allTotal)})</td>
            </tr>
            <tr class="history-detail-row hidden" data-date-detail="${dateKey}">
              <td colspan="4"><div class="drill-down-panel"></div></td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  const rows = elements.dailyHistoryTable.querySelectorAll(".history-day-row");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      const dateKey = row.dataset.date;
      const detailRow = elements.dailyHistoryTable.querySelector(`[data-date-detail="${dateKey}"]`);
      if (!detailRow) return;
      const panel = detailRow.querySelector(".drill-down-panel");
      const details = dailyDetailStats[dateKey] || {};

      if (!detailRow.classList.contains("hidden")) {
        detailRow.classList.add("hidden");
        panel.innerHTML = "";
        return;
      }

      const detailItems = Object.entries(details)
        .map(([romaji, entry]) => ({ romaji, right: Number(entry.right || 0), wrong: Number(entry.wrong || 0) }))
        .sort((a, b) => (b.right + b.wrong) - (a.right + a.wrong));

      panel.innerHTML = detailItems.length
        ? `<strong>Attempt breakdown:</strong> ${detailItems.map((d) => `${d.romaji} (✓${d.right}/✗${d.wrong})`).join(", ")}`
        : "No detailed per-kana stats stored for this day yet.";

      detailRow.classList.remove("hidden");
    });
  });
}

function renderInsights(elements, state) {
  if (!elements.insightsGrid) {
    return;
  }

  const now = Date.now();
  const dueCount = Object.values(state.srsByRomaji || {}).filter((entry) => Number(entry.dueAt || 0) <= now).length;
  const mistakesCount = (state.recentMistakes || []).length;
  const today = state.dailyStats[getTodayKey()] || { typingRight: 0, typingWrong: 0, drawingRight: 0, drawingWrong: 0 };
  const todayCategory = getCategoryTotals(state.dailyCategoryStats && state.dailyCategoryStats[getTodayKey()]);
  const todayDone = today.typingRight + today.typingWrong + today.drawingRight + today.drawingWrong;
  const goals = state.dailyGoals || {
    total: Number(state.dailyGoal || 25),
    typing: 12,
    drawing: 8,
    normal: 10,
    dakuten: 6,
    yoon: 6
  };

  const weakRows = Object.values(state.backlog || {})
    .map((row) => {
      const attempts = row.typingRight + row.typingWrong + row.drawingRight + row.drawingWrong;
      const right = row.typingRight + row.drawingRight;
      const accuracy = attempts ? Math.round((right / attempts) * 100) : 100;
      return { romaji: row.romaji, attempts, accuracy };
    })
    .filter((row) => row.attempts >= 4)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3);

  const recentDateKeys = getSortedDateKeys(state.dailyStats).slice(0, 7);
  let weekRight = 0;
  let weekTotal = 0;
  recentDateKeys.forEach((dateKey) => {
    const day = state.dailyStats[dateKey];
    weekRight += day.typingRight + day.drawingRight;
    weekTotal += day.typingRight + day.typingWrong + day.drawingRight + day.drawingWrong;
  });
  const weekAccuracy = weekTotal ? `${Math.round((weekRight / weekTotal) * 100)}%` : "-";

  const weakText = weakRows.length
    ? weakRows.map((row) => `${row.romaji} (${row.accuracy}%)`).join(", ")
    : "Need more attempts";

  const typingDone = today.typingRight + today.typingWrong;
  const drawingDone = today.drawingRight + today.drawingWrong;

  function goalLine(label, done, goal) {
    const safeGoal = Number(goal || 0);
    const pct = safeGoal > 0 ? Math.min(100, Math.round((done / safeGoal) * 100)) : 0;
    return `${label}: ${done}/${safeGoal} (${pct}%)`;
  }

  elements.insightsGrid.innerHTML = `
    <article class="insight-card">
      <h4>Due Reviews</h4>
      <div class="insight-value">${dueCount}</div>
      <p>Ready in spaced repetition queue.</p>
    </article>
    <article class="insight-card">
      <h4>Mistake Queue</h4>
      <div class="insight-value">${mistakesCount}</div>
      <p>Kana waiting for review mode.</p>
    </article>
    <article class="insight-card">
      <h4>Today Goals</h4>
      <div class="insight-value">${todayDone}/${goals.total}</div>
      <p>${goalLine("Typing", typingDone, goals.typing)}</p>
      <p>${goalLine("Drawing", drawingDone, goals.drawing)}</p>
      <p>${goalLine("Normal", todayCategory.normal, goals.normal)}</p>
      <p>${goalLine("Dakuten", todayCategory.dakuten, goals.dakuten)}</p>
      <p>${goalLine("Yoon", todayCategory.yoon, goals.yoon)}</p>
    </article>
    <article class="insight-card">
      <h4>7-Day Accuracy</h4>
      <div class="insight-value">${weekAccuracy}</div>
      <p>Typing + drawing combined.</p>
    </article>
    <article class="insight-card wide">
      <h4>Weakest Kana</h4>
      <p>${weakText}</p>
    </article>
  `;
}

function getRomajiRowGroup(romaji) {
  const value = String(romaji || "");
  if (/^(a|i|u|e|o)$/.test(value)) {
    return "vowel";
  }
  if (value.startsWith("ch") || value.startsWith("ts")) {
    return "t";
  }
  if (value.startsWith("sh") || value.startsWith("j")) {
    return "s";
  }
  return value[0] || "other";
}

function renderScriptHeatmap(elements, state) {
  if (!elements.scriptHeatmap) {
    return;
  }

  const groups = [
    { key: "vowel", label: "Vowel" },
    { key: "k", label: "K" },
    { key: "s", label: "S" },
    { key: "t", label: "T" },
    { key: "n", label: "N" },
    { key: "h", label: "H" },
    { key: "m", label: "M" },
    { key: "y", label: "Y" },
    { key: "r", label: "R" },
    { key: "w", label: "W" },
    { key: "g", label: "G" },
    { key: "z", label: "Z/J" },
    { key: "d", label: "D" },
    { key: "b", label: "B" },
    { key: "p", label: "P" }
  ];

  const metrics = groups.reduce((acc, group) => {
    acc[group.key] = {
      hiraganaRight: 0,
      hiraganaWrong: 0,
      katakanaRight: 0,
      katakanaWrong: 0
    };
    return acc;
  }, {});

  Object.values(state.backlog || {}).forEach((row) => {
    const key = getRomajiRowGroup(row.romaji);
    if (!metrics[key]) {
      return;
    }
    metrics[key].hiraganaRight += Number(row.hiraganaRight || 0);
    metrics[key].hiraganaWrong += Number(row.hiraganaWrong || 0);
    metrics[key].katakanaRight += Number(row.katakanaRight || 0);
    metrics[key].katakanaWrong += Number(row.katakanaWrong || 0);
  });

  function colorFor(ratio, attempts) {
    if (attempts === 0) {
      return "#f3f4f6";
    }
    if (ratio >= 0.85) {
      return "#b7e4c7";
    }
    if (ratio >= 0.7) {
      return "#fde68a";
    }
    return "#fecaca";
  }

  function tile(label, right, wrong) {
    const attempts = right + wrong;
    const ratio = attempts > 0 ? right / attempts : 0;
    const percent = attempts > 0 ? `${Math.round(ratio * 100)}%` : "-";
    return `<div class="heat-cell" style="background:${colorFor(ratio, attempts)}"><strong>${label}</strong><span>${percent}</span><small>${right}/${attempts || 0}</small></div>`;
  }

  elements.scriptHeatmap.innerHTML = `
    <div class="heat-head">Row</div>
    <div class="heat-head">Hiragana</div>
    <div class="heat-head">Katakana</div>
    ${groups.map((group) => {
      const row = metrics[group.key];
      return `
        <div class="heat-row-label">${group.label}</div>
        ${tile("H", row.hiraganaRight, row.hiraganaWrong)}
        ${tile("K", row.katakanaRight, row.katakanaWrong)}
      `;
    }).join("")}
  `;
}

/**
 * Phase 1 — Goal progress bar rendered directly inside the quiz card.
 * Shows how close today's attempts are to each daily goal.
 */
export function renderGoalProgress(elements, state) {
  const container = elements.goalProgressBar;
  if (!container) return;

  const todayKey = getTodayKey();
  const today = state.dailyStats[todayKey] || { typingRight: 0, typingWrong: 0, drawingRight: 0, drawingWrong: 0 };
  const todayCategory = (state.dailyCategoryStats && state.dailyCategoryStats[todayKey]) || { normal: 0, dakuten: 0, yoon: 0 };
  const goals = state.dailyGoals || {
    total: Number(state.dailyGoal || 25),
    typing: 12,
    drawing: 8,
    normal: 10,
    dakuten: 6,
    yoon: 6
  };

  const typingDone = today.typingRight + today.typingWrong;
  const drawingDone = today.drawingRight + today.drawingWrong;
  const totalDone = typingDone + drawingDone;

  function bar(label, done, goal) {
    const safeGoal = Number(goal || 1);
    const pct = Math.min(100, Math.round((done / safeGoal) * 100));
    const met = done >= safeGoal;
    return `
      <div class="goal-bar-wrap${met ? " goal-met" : ""}">
        <span class="goal-bar-label">${label}</span>
        <div class="goal-bar-track"><div class="goal-bar-fill" style="width:${pct}%"></div></div>
        <span class="goal-bar-count">${done}/${safeGoal}</span>
      </div>`;
  }

  container.innerHTML =
    bar("Total", totalDone, goals.total) +
    bar("Typing", typingDone, goals.typing) +
    bar("Drawing", drawingDone, goals.drawing) +
    bar("Normal", todayCategory.normal || 0, goals.normal) +
    bar("Dakuten", todayCategory.dakuten || 0, goals.dakuten) +
    bar("Yoon", todayCategory.yoon || 0, goals.yoon);
}

/**
 * Phase 3 — SRS schedule: bar chart of items due per day for the next 7 days.
 */
export function renderSrsScheduleGraph(elements, state) {
  const container = elements.srsScheduleGraph;
  if (!container) return;

  const now = Date.now();
  const buckets = Array.from({ length: 7 }, (_, i) => {
    const start = now + i * 86_400_000;
    const end = start + 86_400_000;
    return { label: i === 0 ? "Today" : i === 1 ? "Tmrw" : `+${i}d`, start, end, count: 0 };
  });

  Object.values(state.srsByRomaji || {}).forEach((entry) => {
    const due = Number(entry.dueAt || 0);
    if (due <= 0) return;
    const bucket = buckets.find((b) => due >= b.start && due < b.end);
    if (bucket) bucket.count += 1;
  });

  const max = Math.max(1, ...buckets.map((b) => b.count));

  container.innerHTML = `
    <div class="srs-schedule-graph">
      ${buckets.map((b) => {
        const height = Math.round((b.count / max) * 80);
        return `
          <div class="srs-bar-col">
            <span class="srs-bar-val">${b.count}</span>
            <div class="srs-bar" style="height:${height}px"></div>
            <span class="srs-bar-label">${b.label}</span>
          </div>`;
      }).join("")}
    </div>`;
}

export function addDailyAttempt(state, mode, wasCorrect, category = null) {
  const todayKey = getTodayKey();
  if (!state.dailyStats[todayKey]) {
    state.dailyStats[todayKey] = {
      typingRight: 0,
      typingWrong: 0,
      drawingRight: 0,
      drawingWrong: 0
    };
  }

  if (!state.dailyCategoryStats[todayKey]) {
    state.dailyCategoryStats[todayKey] = {
      normal: 0,
      dakuten: 0,
      yoon: 0
    };
  }

  const entry = state.dailyStats[todayKey];
  if (mode === "typing") {
    if (wasCorrect) {
      entry.typingRight += 1;
    } else {
      entry.typingWrong += 1;
    }
  } else {
    if (wasCorrect) {
      entry.drawingRight += 1;
    } else {
      entry.drawingWrong += 1;
    }
  }

  if (category && state.dailyCategoryStats[todayKey][category] !== undefined) {
    state.dailyCategoryStats[todayKey][category] += 1;
  }
}

export function renderDailyProgress({ elements, state, setActiveProgressTab }) {
  const todayKey = getTodayKey();
  const hasNewDay = todayKey !== state.progressUiDayMarker;
  state.progressUiDayMarker = todayKey;

  buildDayOptions(elements, state.dailyStats);
  if (hasNewDay) {
    resetProgressTabForNewDay(elements, state.dailyStats);
    setActiveProgressTab(elements, "backlog");
  }

  renderDailyProgressGraph(elements, state.dailyStats);
  renderDayComparison(elements, state.dailyStats);
  renderDailyHistoryTable(elements, state.dailyStats, state.dailyDetailStats || {});
  renderInsights(elements, state);
  renderScriptHeatmap(elements, state);
  renderSrsScheduleGraph(elements, state);
}

export function bindProgressCompareSelectors(elements, state) {
  elements.compareDayASelect.addEventListener("change", () => renderDayComparison(elements, state.dailyStats));
  elements.compareDayBSelect.addEventListener("change", () => renderDayComparison(elements, state.dailyStats));
}

export function redrawProgressGraph(elements, state) {
  renderDailyProgressGraph(elements, state.dailyStats);
}
