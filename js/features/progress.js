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

function renderDailyHistoryTable(elements, dailyStats) {
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
            <tr>
              <td>${formatDateLabel(dateKey)}</td>
              <td>${day.typingRight}/${totals.typingTotal} (${asPercent(day.typingRight, totals.typingTotal)})</td>
              <td>${day.drawingRight}/${totals.drawingTotal} (${asPercent(day.drawingRight, totals.drawingTotal)})</td>
              <td>${totals.allRight}/${totals.allTotal} (${asPercent(totals.allRight, totals.allTotal)})</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

export function addDailyAttempt(state, mode, wasCorrect) {
  const todayKey = getTodayKey();
  if (!state.dailyStats[todayKey]) {
    state.dailyStats[todayKey] = {
      typingRight: 0,
      typingWrong: 0,
      drawingRight: 0,
      drawingWrong: 0
    };
  }

  const entry = state.dailyStats[todayKey];
  if (mode === "typing") {
    if (wasCorrect) {
      entry.typingRight += 1;
    } else {
      entry.typingWrong += 1;
    }
    return;
  }

  if (wasCorrect) {
    entry.drawingRight += 1;
  } else {
    entry.drawingWrong += 1;
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
  renderDailyHistoryTable(elements, state.dailyStats);
}

export function bindProgressCompareSelectors(elements, state) {
  elements.compareDayASelect.addEventListener("change", () => renderDayComparison(elements, state.dailyStats));
  elements.compareDayBSelect.addEventListener("change", () => renderDayComparison(elements, state.dailyStats));
}

export function redrawProgressGraph(elements, state) {
  renderDailyProgressGraph(elements, state.dailyStats);
}
