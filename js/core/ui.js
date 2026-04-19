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

function getDefaultElements() {
  return {
    resultElement: document.getElementById("result")
  };
}

function isElementsShape(value) {
  return Boolean(value && typeof value === "object" && value.resultElement);
}

export function showResult(arg1, arg2, arg3) {
  let elements;
  let message;
  let isCorrect;

  if (isElementsShape(arg1)) {
    elements = arg1;
    message = arg2;
    isCorrect = arg3;
  } else {
    elements = getDefaultElements();
    message = arg1;
    isCorrect = arg2;
  }

  if (!elements.resultElement) return;

  elements.resultElement.textContent = String(message ?? "");
  elements.resultElement.classList.toggle("ok", Boolean(isCorrect));
  elements.resultElement.classList.toggle("bad", !Boolean(isCorrect));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function showTypingMistake(arg1, arg2, arg3) {
  let elements;
  let userAnswer;
  let correctAnswer;

  if (isElementsShape(arg1)) {
    elements = arg1;
    userAnswer = arg2;
    correctAnswer = arg3;
  } else {
    elements = getDefaultElements();
    userAnswer = arg1;
    correctAnswer = arg2;
  }

  if (!elements.resultElement) return;

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
