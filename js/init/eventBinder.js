/**
 * Event Binder (Single Responsibility: DOM → eventBus)
 *
 * Maps raw DOM events to named application events on the event bus.
 * This module knows nothing about business logic — it only translates
 * user interactions into declarative event emissions.
 *
 * Open/Closed: adding a new control means adding a new `.on()` here,
 * without touching any business-logic module.
 *
 * Dependency Inversion: depends on the eventBus abstraction, not on concrete
 * action functions.
 */

import { eventBus, EVENT_NAMES } from "../core/eventBus.js";
import { bindProgressCompareSelectors, redrawProgressGraph } from "../features/progress.js";

/**
 * @param {object} elements  - DOM element map from getElements()
 * @param {object} state     - shared state (read-only here; only for compare selectors)
 */
export function bindEvents(elements, state) {
  // ── Quiz controls ──────────────────────────────────────────────────────────
  elements.newQuestionBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_REQUEST_NEW));

  elements.modeSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_MODE_CHANGED));

  elements.scriptSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_REQUEST_NEW));

  elements.kanaSetSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_KANA_SET_CHANGED));

  elements.practiceStrategySelect.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.QUIZ_STRATEGY_CHANGED)
  );

  elements.writingScriptSelect.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.QUIZ_WRITING_SCRIPT_CHANGED)
  );

  // ── Answer controls ────────────────────────────────────────────────────────
  elements.checkBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_CHECK_ANSWER));

  elements.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      eventBus.emit(EVENT_NAMES.QUIZ_CHECK_ANSWER);
    }
  });

  elements.answerInput.addEventListener("input", () => {
    const el = elements.answerInput;
    const current = "value" in el ? el.value : el.textContent || "";
    const cleaned = current.replace(/[\r\n]+/g, "");
    if (cleaned !== current) {
      if ("value" in el) {
        el.value = cleaned;
      } else {
        el.textContent = cleaned;
      }
    }
  });

  if (elements.quickAnswerOptions) {
    elements.quickAnswerOptions.addEventListener("click", (event) => {
      const button = event.target.closest(".quick-answer-btn");
      if (!button || button.disabled) return;
      eventBus.emit(EVENT_NAMES.QUIZ_QUICK_ANSWER, { answer: button.dataset.answer || "" });
    });
  }

  // ── Drawing controls ───────────────────────────────────────────────────────
  elements.revealBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_REVEAL_DRAWING));
  elements.clearCanvasBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_CLEAR_CANVAS));
  elements.markRightBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_MARK_RIGHT));
  elements.markWrongBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_MARK_WRONG));

  // ── Audio controls ─────────────────────────────────────────────────────────
  elements.playAudioBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.AUDIO_PLAY));
  elements.muteAudioBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.AUDIO_TOGGLE_MUTE));

  // ── Navigation tabs ────────────────────────────────────────────────────────
  elements.backlogTabBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.TAB_BACKLOG));
  elements.dailyProgressTabBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.TAB_PROGRESS));
  elements.openSyncBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.TAB_SYNC));

  // ── Progress sub-tabs ─────────────────────────────────────────────────────
  elements.progressOverviewTabBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "overview" })
  );
  elements.progressTrendsTabBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "trends" })
  );
  elements.progressCompareTabBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "compare" })
  );
  elements.progressSyncTabBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "sync" })
  );

  // ── Progress section toggles ───────────────────────────────────────────────
  elements.toggleOverviewSectionBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "overview" })
  );
  elements.toggleTrendsSectionBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "trends" })
  );
  elements.toggleCompareSectionBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "compare" })
  );
  elements.toggleSyncSectionBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "sync" })
  );

  // ── Backlog filters ────────────────────────────────────────────────────────
  elements.backlogStatusFilter.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
  );
  elements.backlogScriptFilter.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
  );
  elements.backlogWeaknessFilter.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
  );
  elements.backlogMinAttemptsFilter.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
  );
  elements.backlogCompactToggle.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
  );
  elements.resetBacklogFiltersBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_RESET)
  );

  // ── Settings ───────────────────────────────────────────────────────────────
  elements.saveDailyGoalBtn.addEventListener("click", () =>
    eventBus.emit(EVENT_NAMES.SETTINGS_SAVE_GOAL)
  );

  [
    elements.dailyGoalTotalInput,
    elements.dailyGoalTypingInput,
    elements.dailyGoalDrawingInput,
    elements.dailyGoalNormalInput,
    elements.dailyGoalDakutenInput,
    elements.dailyGoalYoonInput
  ].forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        eventBus.emit(EVENT_NAMES.SETTINGS_SAVE_GOAL);
      }
    });
  });

  elements.drawGuideToggle.addEventListener("change", () =>
    eventBus.emit(EVENT_NAMES.SETTINGS_DRAW_GUIDE_CHANGED)
  );

  // ── Data operations ────────────────────────────────────────────────────────
  elements.exportDataBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.DATA_EXPORT));
  elements.importDataBtn.addEventListener("click", () => elements.importDataInput.click());
  elements.importDataInput.addEventListener("change", () => {
    const file = elements.importDataInput.files && elements.importDataInput.files[0]
      ? elements.importDataInput.files[0]
      : null;
    eventBus.emit(EVENT_NAMES.DATA_IMPORT, { file });
    elements.importDataInput.value = "";
  });
  elements.resetAllDataBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_RESET_ALL));

  // ── Drawing gallery ────────────────────────────────────────────────────────
  elements.backlogPanel.addEventListener("click", (event) => {
    const button = event.target.closest(".view-drawings-btn");
    if (!button) return;
    const kanaChar = button.dataset.kana;
    if (kanaChar) eventBus.emit(EVENT_NAMES.GALLERY_OPEN, { kanaChar });
  });
  elements.closeGalleryBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.GALLERY_CLOSE));

  // ── Window-level ──────────────────────────────────────────────────────────
  window.addEventListener("resize", () => {
    redrawProgressGraph(elements, state);
    eventBus.emit(EVENT_NAMES.UI_RESIZE);
  });
  window.addEventListener("visibilitychange", () => {
    if (!document.hidden) eventBus.emit(EVENT_NAMES.UI_VISIBLE);
  });

  // ── Day comparison selectors (already uses internal state, keeps its own listeners) ──
  bindProgressCompareSelectors(elements, state);
}
