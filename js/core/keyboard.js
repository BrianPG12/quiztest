/**
 * Keyboard Controller (Phase 1)
 *
 * Single responsibility: listen for keydown events and invoke registered
 * handlers only when the answer text input is NOT focused.
 *
 * Open/Closed: new shortcuts are added via `register()` without modifying
 * this module.
 */

export class KeyboardController {
  /**
   * @param {HTMLElement} inputElement - The typing answer input element.
   *   Shortcuts are suppressed while this element has focus.
   */
  constructor(inputElement) {
    this._input = inputElement;
    this._handlers = new Map();
    this._listener = this._onKeyDown.bind(this);
    document.addEventListener("keydown", this._listener);
  }

  /**
   * Register a keyboard shortcut.
   * @param {string} code - KeyboardEvent.code value, e.g. "Space", "KeyR"
   * @param {function} handler
   */
  register(code, handler) {
    this._handlers.set(code, handler);
  }

  /** Remove a registered shortcut. */
  unregister(code) {
    this._handlers.delete(code);
  }

  /** Detach the global listener (call on teardown). */
  destroy() {
    document.removeEventListener("keydown", this._listener);
  }

  _onKeyDown(event) {
    if (document.querySelector(".confirm-overlay")) {
      return;
    }

    // Suppress when typing in any input or textarea
    const active = document.activeElement;
    if (
      active === this._input ||
      active instanceof HTMLInputElement ||
      active instanceof HTMLTextAreaElement
    ) {
      return;
    }

    const handler = this._handlers.get(event.code);
    if (!handler) return;

    event.preventDefault();
    try {
      handler(event);
    } catch (err) {
      console.error(`[KeyboardController] Error in handler for "${event.code}":`, err);
    }
  }
}
