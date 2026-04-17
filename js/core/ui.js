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

export function setActiveProgressTab(elements, tabName) {
  const showBacklog = tabName === "backlog";
  elements.backlogPanel.classList.toggle("hidden", !showBacklog);
  elements.progressPanel.classList.toggle("hidden", showBacklog);

  elements.backlogTabBtn.classList.toggle("active", showBacklog);
  elements.dailyProgressTabBtn.classList.toggle("active", !showBacklog);
  elements.backlogTabBtn.setAttribute("aria-selected", String(showBacklog));
  elements.dailyProgressTabBtn.setAttribute("aria-selected", String(!showBacklog));
}
