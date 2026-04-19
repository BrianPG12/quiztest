/**
 * Application-wide event bus (pub/sub).
 *
 * Single responsibility: route named events between producers and consumers
 * so that modules depend on the event contract rather than on each other.
 *
 * Usage:
 *   import { eventBus } from '../core/eventBus.js';
 *   const off = eventBus.on('answer:correct', ({ romaji, mode }) => { ... });
 *   eventBus.emit('answer:correct', { romaji: 'ka', mode: 'typing' });
 *   off(); // unsubscribe
 *
 * Defined event names (keep in sync with EVENT_NAMES below):
 *   answer:correct   { romaji, mode }
 *   answer:wrong     { romaji, mode, userInput }
 *   question:new     {}
 *   sync:conflictApplied  {}
 *   quiz:requestNewQuestion {}
 *   quiz:modeChanged  {}
 *   quiz:kanaSetChanged {}
 *   quiz:strategyChanged {}
 *   quiz:writingScriptChanged {}
 *   quiz:checkAnswer  {}
 *   quiz:quickAnswer  { answer }
 *   quiz:revealDrawing {}
 *   quiz:clearCanvas  {}
 *   quiz:markRight    {}
 *   quiz:markWrong    {}
 *   quiz:resetAll     {}
 *   tab:backlog       {}
 *   tab:progress      {}
 *   tab:sync          {}
 *   progress:tabChanged  { tab }
 *   progress:sectionToggled { section }
 *   backlog:filterChanged {}
 *   backlog:filterReset {}
 *   settings:saveGoal {}
 *   settings:drawGuideChanged {}
 *   data:export       {}
 *   data:import       { file }
 *   audio:play        {}
 *   audio:toggleMute  {}
 *   gallery:open      { kanaChar }
 *   gallery:close     {}
 *   ui:resize         {}
 *   ui:visible        {}
 *   state:changed     {}
 */

export const EVENT_NAMES = Object.freeze({
  ANSWER_CORRECT: "answer:correct",
  ANSWER_WRONG: "answer:wrong",
  QUESTION_NEW: "question:new",
  SYNC_CONFLICT_APPLIED: "sync:conflictApplied",
  QUIZ_REQUEST_NEW: "quiz:requestNewQuestion",
  QUIZ_MODE_CHANGED: "quiz:modeChanged",
  QUIZ_KANA_SET_CHANGED: "quiz:kanaSetChanged",
  QUIZ_STRATEGY_CHANGED: "quiz:strategyChanged",
  QUIZ_WRITING_SCRIPT_CHANGED: "quiz:writingScriptChanged",
  QUIZ_CHECK_ANSWER: "quiz:checkAnswer",
  QUIZ_QUICK_ANSWER: "quiz:quickAnswer",
  QUIZ_REVEAL_DRAWING: "quiz:revealDrawing",
  QUIZ_CLEAR_CANVAS: "quiz:clearCanvas",
  QUIZ_MARK_RIGHT: "quiz:markRight",
  QUIZ_MARK_WRONG: "quiz:markWrong",
  QUIZ_RESET_ALL: "quiz:resetAll",
  TAB_BACKLOG: "tab:backlog",
  TAB_PROGRESS: "tab:progress",
  TAB_SYNC: "tab:sync",
  PROGRESS_TAB_CHANGED: "progress:tabChanged",
  PROGRESS_SECTION_TOGGLED: "progress:sectionToggled",
  BACKLOG_FILTER_CHANGED: "backlog:filterChanged",
  BACKLOG_FILTER_RESET: "backlog:filterReset",
  SETTINGS_SAVE_GOAL: "settings:saveGoal",
  SETTINGS_DRAW_GUIDE_CHANGED: "settings:drawGuideChanged",
  DATA_EXPORT: "data:export",
  DATA_IMPORT: "data:import",
  AUDIO_PLAY: "audio:play",
  AUDIO_TOGGLE_MUTE: "audio:toggleMute",
  GALLERY_OPEN: "gallery:open",
  GALLERY_CLOSE: "gallery:close",
  UI_RESIZE: "ui:resize",
  UI_VISIBLE: "ui:visible",
  STATE_CHANGED: "state:changed"
});

const _handlers = new Map();

export const eventBus = {
  /**
   * Subscribe to an event. Returns an unsubscribe function.
   * @param {string} event
   * @param {function} handler
   * @returns {function} unsubscribe
   */
  on(event, handler) {
    if (!_handlers.has(event)) {
      _handlers.set(event, new Set());
    }
    _handlers.get(event).add(handler);
    return () => this.off(event, handler);
  },

  /**
   * Unsubscribe a specific handler from an event.
   * @param {string} event
   * @param {function} handler
   */
  off(event, handler) {
    const set = _handlers.get(event);
    if (set) {
      set.delete(handler);
    }
  },

  /**
   * Emit an event, invoking all registered handlers.
   * Errors in individual handlers are caught and logged without stopping other handlers.
   * @param {string} event
   * @param {*} data
   */
  emit(event, data) {
    const set = _handlers.get(event);
    if (!set || set.size === 0) {
      return;
    }
    set.forEach((handler) => {
      try {
        handler(data);
      } catch (err) {
        console.error(`[eventBus] Error in handler for "${event}":`, err);
      }
    });
  }
};
