import { addDailyAttempt, renderDailyProgress } from "../features/progress.js";
import { getTodayKey } from "../core/utils.js";

function createFakeCanvasContext() {
  return {
    setTransform() {},
    clearRect() {},
    fillRect() {},
    beginPath() {},
    moveTo() {},
    lineTo() {},
    stroke() {},
    fillText() {},
    save() {},
    restore() {},
    translate() {},
    rotate() {},
    arc() {},
    fill() {},
    strokeStyle: "",
    fillStyle: "",
    lineWidth: 1,
    font: ""
  };
}

function createFakeElements() {
  return {
    compareDayASelect: { value: "", innerHTML: "" },
    compareDayBSelect: { value: "", innerHTML: "" },
    compareSummary: { innerHTML: "" },
    dailyHistoryTable: { innerHTML: "" },
    dailyProgressGraph: { clientWidth: 860, width: 0, height: 0 },
    dailyProgressGraphCtx: createFakeCanvasContext()
  };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runTests() {
  const results = [];

  function test(name, fn) {
    try {
      fn();
      results.push({ name, ok: true });
    } catch (error) {
      results.push({ name, ok: false, error: error.message });
    }
  }

  test("addDailyAttempt increments typing and drawing counters", () => {
    const state = {
      dailyStats: {},
      progressUiDayMarker: getTodayKey()
    };

    addDailyAttempt(state, "typing", true);
    addDailyAttempt(state, "typing", false);
    addDailyAttempt(state, "drawing", true);
    addDailyAttempt(state, "drawing", false);

    const today = state.dailyStats[getTodayKey()];
    assert(!!today, "Expected daily entry for today");
    assert(today.typingRight === 1, "Expected typingRight = 1");
    assert(today.typingWrong === 1, "Expected typingWrong = 1");
    assert(today.drawingRight === 1, "Expected drawingRight = 1");
    assert(today.drawingWrong === 1, "Expected drawingWrong = 1");
  });

  test("renderDailyProgress renders expected percentages and totals", () => {
    const elements = createFakeElements();
    const state = {
      dailyStats: {
        "2026-04-17": { typingRight: 3, typingWrong: 1, drawingRight: 2, drawingWrong: 0 },
        "2026-04-16": { typingRight: 1, typingWrong: 2, drawingRight: 1, drawingWrong: 1 }
      },
      progressUiDayMarker: getTodayKey()
    };

    const calls = [];
    const setActiveProgressTab = (_elements, tab) => calls.push(tab);

    renderDailyProgress({ elements, state, setActiveProgressTab });

    assert(elements.compareSummary.innerHTML.includes("Typing Accuracy"), "Expected typing comparison card");
    assert(elements.compareSummary.innerHTML.includes("75%"), "Expected 75% in comparison output");
    assert(elements.dailyHistoryTable.innerHTML.includes("<table>"), "Expected daily history table");
    assert(elements.dailyHistoryTable.innerHTML.includes("5/6 (83%)"), "Expected 5/6 (83%) total for 2026-04-17");
    assert(calls.length === 0, "Expected no tab reset on same-day render");
  });

  test("daily rollover resets tab and comparison day selectors", () => {
    const elements = createFakeElements();
    const state = {
      dailyStats: {
        "2026-04-17": { typingRight: 2, typingWrong: 0, drawingRight: 2, drawingWrong: 0 },
        "2026-04-16": { typingRight: 1, typingWrong: 1, drawingRight: 1, drawingWrong: 1 }
      },
      progressUiDayMarker: "2000-01-01"
    };

    const calls = [];
    const setActiveProgressTab = (_elements, tab) => calls.push(tab);

    renderDailyProgress({ elements, state, setActiveProgressTab });

    assert(calls.length === 1, "Expected a tab reset on day rollover");
    assert(calls[0] === "backlog", "Expected rollover tab reset target to backlog");
    assert(elements.compareDayASelect.value === "2026-04-17", "Expected Day A to latest date");
    assert(elements.compareDayBSelect.value === "2026-04-16", "Expected Day B to previous date");
  });

  return results;
}

function renderResults(results) {
  const summary = document.getElementById("summary");
  const log = document.getElementById("log");

  const passed = results.filter((r) => r.ok).length;
  const failed = results.length - passed;

  summary.innerHTML = `
    <p class="${failed === 0 ? "pass" : "fail"}">
      ${passed}/${results.length} tests passed${failed > 0 ? `, ${failed} failed` : ""}.
    </p>
  `;

  const lines = results.map((result) => {
    if (result.ok) {
      return `[PASS] ${result.name}`;
    }
    return `[FAIL] ${result.name} -> ${result.error}`;
  });

  log.textContent = lines.join("\n");

  if (failed > 0) {
    throw new Error(`${failed} progress tests failed.`);
  }
}

const results = runTests();
renderResults(results);
