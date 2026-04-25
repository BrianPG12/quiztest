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
    state.backlogFilters = {
      status: "all",
      script: "all",
      weakness: "all",
      minAttempts: 0,
      compact: false
    };
  }

  function renderBacklogFilterInputs() {
    if (!state.backlogFilters || typeof state.backlogFilters !== "object") {
      resetBacklogFilters();
    }

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
    state.backlogFilters = {
      status: elements.backlogStatusFilter.value,
      script: elements.backlogScriptFilter.value,
      weakness: elements.backlogWeaknessFilter.value,
      minAttempts: clampDailyGoal(elements.backlogMinAttemptsFilter.value, 0, 999, 0),
      compact: Boolean(elements.backlogCompactToggle && elements.backlogCompactToggle.checked)
    };
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
