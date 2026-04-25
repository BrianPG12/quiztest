export function clampDailyGoal(value, min = 0, max = 200, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.round(parsed)));
}

export function createProgressPreferencesManager({
  state,
  elements,
  persistState,
  refreshProgressView,
  renderBacklogView,
  showResult
}) {
  const DATASET_IDS = ["kana", "words", "kanji"];

  function createDefaultBacklogFilters() {
    return {
      status: "all",
      script: "all",
      weakness: "all",
      minAttempts: 0,
      compact: false
    };
  }

  function normalizeBacklogFiltersShape(filters) {
    const source = filters && typeof filters === "object" ? filters : {};
    const status = ["all", "weak", "strong", "unseen"].includes(source.status) ? source.status : "all";
    const weakness = ["all", "typing", "drawing"].includes(source.weakness) ? source.weakness : "all";
    const scriptValue = typeof source.script === "string" && source.script.trim()
      ? source.script.trim().slice(0, 64)
      : "all";
    return {
      status,
      script: scriptValue,
      weakness,
      minAttempts: clampDailyGoal(source.minAttempts, 0, 999, 0),
      compact: Boolean(source.compact)
    };
  }

  function getActiveDatasetId() {
    return DATASET_IDS.includes(state.activeDataset) ? state.activeDataset : "kana";
  }

  function ensureBacklogFiltersByDataset() {
    const activeDatasetId = getActiveDatasetId();
    const sourceMap = state.backlogFiltersByDataset && typeof state.backlogFiltersByDataset === "object"
      ? state.backlogFiltersByDataset
      : {};
    const legacyActiveFilters = normalizeBacklogFiltersShape(state.backlogFilters);
    const nextMap = {};

    DATASET_IDS.forEach((datasetId) => {
      if (sourceMap[datasetId] && typeof sourceMap[datasetId] === "object") {
        nextMap[datasetId] = normalizeBacklogFiltersShape(sourceMap[datasetId]);
        return;
      }
      if (datasetId === activeDatasetId) {
        nextMap[datasetId] = legacyActiveFilters;
        return;
      }
      nextMap[datasetId] = createDefaultBacklogFilters();
    });

    state.backlogFiltersByDataset = nextMap;
    state.backlogFilters = { ...nextMap[activeDatasetId] };
    return state.backlogFilters;
  }

  function normalizeDailyGoalsFromState() {
    const current = state.dailyGoals || {};
    const next = {
      total: clampDailyGoal(current.total, 5, 200, 25),
      typing: clampDailyGoal(current.typing, 0, 200, 12),
      drawing: clampDailyGoal(current.drawing, 0, 200, 8),
      normal: clampDailyGoal(current.normal, 0, 200, 10),
      dakuten: clampDailyGoal(current.dakuten, 0, 200, 6),
      yoon: clampDailyGoal(current.yoon, 0, 200, 6)
    };
    state.dailyGoals = next;
    state.dailyGoal = next.total;
  }

  function renderDailyGoalInputs() {
    normalizeDailyGoalsFromState();
    elements.dailyGoalTotalInput.value = String(state.dailyGoals.total);
    elements.dailyGoalTypingInput.value = String(state.dailyGoals.typing);
    elements.dailyGoalDrawingInput.value = String(state.dailyGoals.drawing);
    elements.dailyGoalNormalInput.value = String(state.dailyGoals.normal);
    elements.dailyGoalDakutenInput.value = String(state.dailyGoals.dakuten);
    elements.dailyGoalYoonInput.value = String(state.dailyGoals.yoon);
  }

  function saveDailyGoalFromUi() {
    state.dailyGoals = {
      total: clampDailyGoal(elements.dailyGoalTotalInput.value, 5, 200, 25),
      typing: clampDailyGoal(elements.dailyGoalTypingInput.value, 0, 200, 12),
      drawing: clampDailyGoal(elements.dailyGoalDrawingInput.value, 0, 200, 8),
      normal: clampDailyGoal(elements.dailyGoalNormalInput.value, 0, 200, 10),
      dakuten: clampDailyGoal(elements.dailyGoalDakutenInput.value, 0, 200, 6),
      yoon: clampDailyGoal(elements.dailyGoalYoonInput.value, 0, 200, 6)
    };
    state.dailyGoal = state.dailyGoals.total;
    renderDailyGoalInputs();
    persistState();
    refreshProgressView();
    showResult("Daily goals saved.", true);
  }

  function resetBacklogFilters() {
    ensureBacklogFiltersByDataset();
    const activeDatasetId = getActiveDatasetId();
    const defaults = createDefaultBacklogFilters();
    state.backlogFiltersByDataset[activeDatasetId] = defaults;
    state.backlogFilters = { ...defaults };
  }

  function renderBacklogFilterInputs() {
    ensureBacklogFiltersByDataset();

    function setSelectValue(selectElement, desiredValue, fallback = "all") {
      const options = Array.from(selectElement.options).map((option) => option.value);
      if (options.includes(desiredValue)) {
        selectElement.value = desiredValue;
        return desiredValue;
      }
      selectElement.value = options.includes(fallback) ? fallback : (options[0] || "");
      return selectElement.value;
    }

    state.backlogFilters.status = setSelectValue(elements.backlogStatusFilter, state.backlogFilters.status, "all");
    state.backlogFilters.script = setSelectValue(elements.backlogScriptFilter, state.backlogFilters.script, "all");
    state.backlogFilters.weakness = setSelectValue(elements.backlogWeaknessFilter, state.backlogFilters.weakness, "all");
    elements.backlogMinAttemptsFilter.value = String(state.backlogFilters.minAttempts);
    if (elements.backlogCompactToggle) {
      elements.backlogCompactToggle.checked = Boolean(state.backlogFilters.compact);
    }
  }

  function applyBacklogFiltersFromUi() {
    ensureBacklogFiltersByDataset();
    const activeDatasetId = getActiveDatasetId();
    const nextFilters = {
      status: elements.backlogStatusFilter.value,
      script: elements.backlogScriptFilter.value,
      weakness: elements.backlogWeaknessFilter.value,
      minAttempts: clampDailyGoal(elements.backlogMinAttemptsFilter.value, 0, 999, 0),
      compact: Boolean(elements.backlogCompactToggle && elements.backlogCompactToggle.checked)
    };
    state.backlogFilters = nextFilters;
    state.backlogFiltersByDataset[activeDatasetId] = { ...nextFilters };
    renderBacklogFilterInputs();
    renderBacklogView();
    persistState();
  }

  return {
    clampDailyGoal,
    normalizeDailyGoalsFromState,
    renderDailyGoalInputs,
    saveDailyGoalFromUi,
    resetBacklogFilters,
    renderBacklogFilterInputs,
    applyBacklogFiltersFromUi
  };
}
