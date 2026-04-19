/**
 * Swipe Detector (Phase 4)
 *
 * Single responsibility: detect horizontal swipe gestures on a DOM element
 * and invoke callbacks without coupling to application logic.
 *
 * Minimum horizontal travel: 60 px (configurable).
 * The vertical movement must be less than horizontal to avoid false-positives
 * during vertical scrolling.
 */

const DEFAULT_MIN_DISTANCE = 60;
const DEFAULT_MAX_VERTICAL_RATIO = 0.6;

/**
 * Attach a swipe detector to an element.
 * @param {HTMLElement} element
 * @param {{ onSwipeLeft?: function, onSwipeRight?: function, minDistance?: number }} options
 * @returns {{ destroy: function }} — call destroy() to remove listeners
 */
export function createSwipeDetector(element, options = {}) {
  const minDistance = options.minDistance ?? DEFAULT_MIN_DISTANCE;
  const onSwipeLeft = options.onSwipeLeft || null;
  const onSwipeRight = options.onSwipeRight || null;

  let startX = 0;
  let startY = 0;
  let tracking = false;

  function onPointerDown(event) {
    // Only track single-finger / primary pointer
    if (!event.isPrimary) return;
    startX = event.clientX;
    startY = event.clientY;
    tracking = true;
  }

  function onPointerUp(event) {
    if (!tracking || !event.isPrimary) return;
    tracking = false;

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    if (Math.abs(dx) < minDistance) return;
    if (Math.abs(dy) > Math.abs(dx) * DEFAULT_MAX_VERTICAL_RATIO) return;

    if (dx > 0 && onSwipeRight) {
      try { onSwipeRight(); } catch (err) { console.error("[SwipeDetector] onSwipeRight error:", err); }
    } else if (dx < 0 && onSwipeLeft) {
      try { onSwipeLeft(); } catch (err) { console.error("[SwipeDetector] onSwipeLeft error:", err); }
    }
  }

  function onPointerCancel() {
    tracking = false;
  }

  element.addEventListener("pointerdown", onPointerDown);
  element.addEventListener("pointerup", onPointerUp);
  element.addEventListener("pointercancel", onPointerCancel);

  return {
    destroy() {
      element.removeEventListener("pointerdown", onPointerDown);
      element.removeEventListener("pointerup", onPointerUp);
      element.removeEventListener("pointercancel", onPointerCancel);
    }
  };
}
