/**
 * Confirm Dialog (Phase 4)
 *
 * Single responsibility: show a styled confirmation modal and return a
 * Promise<boolean>.  Replaces window.confirm() calls across the app so
 * that destructive actions never use the browser's native modal.
 *
 * Open/Closed: the dialog appearance is controlled entirely via CSS
 * (.confirm-overlay, .confirm-dialog, etc.) without touching this module.
 */

/**
 * Display a confirmation dialog.
 * @param {string} message  - Question to ask the user
 * @param {string} [confirmLabel]  - Label for the confirm button (default: "Confirm")
 * @param {string} [cancelLabel]   - Label for the cancel button (default: "Cancel")
 * @returns {Promise<boolean>}     - Resolves true on confirm, false on cancel / close
 */
export function showConfirm(message, confirmLabel = "Confirm", cancelLabel = "Cancel") {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "confirm-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Confirmation");

    const dialog = document.createElement("div");
    dialog.className = "confirm-dialog";

    const msg = document.createElement("p");
    msg.className = "confirm-message";
    msg.textContent = message;

    const actions = document.createElement("div");
    actions.className = "confirm-actions";

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "btn-secondary confirm-cancel";
    cancelBtn.textContent = cancelLabel;

    const confirmBtn = document.createElement("button");
    confirmBtn.type = "button";
    confirmBtn.className = "btn-danger confirm-ok";
    confirmBtn.textContent = confirmLabel;

    actions.append(cancelBtn, confirmBtn);
    dialog.append(msg, actions);
    overlay.append(dialog);
    document.body.append(overlay);

    // Focus the cancel button by default (safer default)
    cancelBtn.focus();

    function cleanup(result) {
      overlay.remove();
      resolve(result);
    }

    confirmBtn.addEventListener("click", () => cleanup(true));
    cancelBtn.addEventListener("click", () => cleanup(false));

    // Clicking outside the dialog = cancel
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) cleanup(false);
    });

    // Escape key = cancel
    function onKeyDown(event) {
      if (event.key === "Escape") {
        document.removeEventListener("keydown", onKeyDown);
        cleanup(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
  });
}
