export function updateStats(elements, state) {
  elements.typingRightCountElement.textContent = String(state.typingRightCount);
  elements.typingWrongCountElement.textContent = String(state.typingWrongCount);
  elements.drawingRightCountElement.textContent = String(state.drawingRightCount);
  elements.drawingWrongCountElement.textContent = String(state.drawingWrongCount);
}

export function resetResult(elements) {
  elements.resultElement.textContent = "";
  elements.resultElement.classList.remove("ok", "bad");
}

export function showResult(elements, message, isCorrect) {
  elements.resultElement.textContent = message;
  elements.resultElement.classList.toggle("ok", isCorrect);
  elements.resultElement.classList.toggle("bad", !isCorrect);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function showTypingMistake(elements, userAnswer, correctAnswer) {
  const user = userAnswer ? userAnswer : "(blank)";
  const correct = correctAnswer || "-";
  elements.resultElement.innerHTML = `
    <div class="result-title">Not quite</div>
    <div class="result-compare">
      <div class="result-row">
        <span class="result-row-label">You typed</span>
        <span class="result-row-value">${escapeHtml(user)}</span>
      </div>
      <div class="result-row">
        <span class="result-row-label">Correct</span>
        <span class="result-row-value">${escapeHtml(correct)}</span>
      </div>
    </div>
  `;
  elements.resultElement.classList.remove("ok");
  elements.resultElement.classList.add("bad");
}

export function setActiveProgressTab(elements, tabName) {
  const showBacklog = tabName === "backlog";
  elements.backlogPanel.classList.toggle("hidden", !showBacklog);
  elements.progressPanel.classList.toggle("hidden", showBacklog);

  elements.backlogTabBtn.classList.toggle("active", showBacklog);
  elements.dailyProgressTabBtn.classList.toggle("active", !showBacklog);
  elements.backlogTabBtn.setAttribute("aria-selected", String(showBacklog));
  elements.dailyProgressTabBtn.setAttribute("aria-selected", String(!showBacklog));
}
