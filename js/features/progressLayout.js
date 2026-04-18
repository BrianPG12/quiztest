export function createProgressLayoutManager({ state, elements, persistState }) {
  function normalizeState() {
    const validSubtabs = ["overview", "trends", "compare", "sync"];
    state.progressSubtab = validSubtabs.includes(state.progressSubtab) ? state.progressSubtab : "overview";

    if (!state.progressCollapsedSections || typeof state.progressCollapsedSections !== "object") {
      state.progressCollapsedSections = {
        overview: false,
        trends: false,
        compare: false,
        sync: false
      };
      return;
    }

    state.progressCollapsedSections = {
      overview: Boolean(state.progressCollapsedSections.overview),
      trends: Boolean(state.progressCollapsedSections.trends),
      compare: Boolean(state.progressCollapsedSections.compare),
      sync: Boolean(state.progressCollapsedSections.sync)
    };
  }

  function render() {
    normalizeState();

    const tabMap = {
      overview: elements.progressOverviewTabBtn,
      trends: elements.progressTrendsTabBtn,
      compare: elements.progressCompareTabBtn,
      sync: elements.progressSyncTabBtn
    };

    const panelMap = {
      overview: elements.progressOverviewSection,
      trends: elements.progressTrendsSection,
      compare: elements.progressCompareSection,
      sync: elements.progressSyncSection
    };

    const bodyMap = {
      overview: elements.progressOverviewBody,
      trends: elements.progressTrendsBody,
      compare: elements.progressCompareBody,
      sync: elements.progressSyncBody
    };

    const toggleMap = {
      overview: elements.toggleOverviewSectionBtn,
      trends: elements.toggleTrendsSectionBtn,
      compare: elements.toggleCompareSectionBtn,
      sync: elements.toggleSyncSectionBtn
    };

    Object.keys(tabMap).forEach((key) => {
      const isActive = state.progressSubtab === key;
      tabMap[key].classList.toggle("active", isActive);
      tabMap[key].setAttribute("aria-selected", String(isActive));
      panelMap[key].classList.toggle("hidden", !isActive);

      const isCollapsed = Boolean(state.progressCollapsedSections[key]);
      bodyMap[key].classList.toggle("hidden", isCollapsed);
      toggleMap[key].textContent = isCollapsed ? "Show" : "Hide";
      toggleMap[key].setAttribute("aria-expanded", String(!isCollapsed));
    });
  }

  function setActiveSubtab(subtabName, persist = false) {
    state.progressSubtab = subtabName;
    render();
    if (persist) {
      persistState();
    }
  }

  function toggleSection(sectionName) {
    normalizeState();
    state.progressCollapsedSections[sectionName] = !state.progressCollapsedSections[sectionName];
    render();
    persistState();
  }

  function openSyncSection() {
    normalizeState();
    state.progressCollapsedSections.sync = false;
    setActiveSubtab("sync", true);
  }

  return {
    normalizeState,
    render,
    setActiveSubtab,
    toggleSection,
    openSyncSection
  };
}
