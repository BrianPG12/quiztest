/**
 * Manages distractor selection and rendering for quick-answer (multiple-choice) mode.
 *
 * @param {object} deps
 * @param {object} deps.elements - DOM element references
 * @param {object} deps.state - Shared application state
 * @param {Array}  deps.kanaData - Full kana dataset
 */
export function createDistractorRenderer({ elements, state, kanaData }) {
  // ─── pure helpers ────────────────────────────────────────────────────────────

  function getLastVowel(romaji) {
    const match = String(romaji).match(/[aiueo](?!.*[aiueo])/);
    return match ? match[0] : "";
  }

  function getStem(romaji) {
    return String(romaji).replace(/[aiueo]$/, "");
  }

  function getLevenshteinDistance(a, b) {
    const s = String(a);
    const t = String(b);
    const rows = s.length + 1;
    const cols = t.length + 1;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
      dp[i][0] = i;
    }
    for (let j = 0; j < cols; j++) {
      dp[0][j] = j;
    }

    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        const cost = s[i - 1] === t[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[s.length][t.length];
  }

  function scoreDistractorSimilarity(correct, candidate) {
    let score = 0;
    const correctStr = String(correct);
    const candidateStr = String(candidate);

    if (candidateStr[0] === correctStr[0]) {
      score += 4;
    }
    if (candidateStr.slice(0, 2) === correctStr.slice(0, 2)) {
      score += 3;
    }
    if (getLastVowel(candidateStr) === getLastVowel(correctStr)) {
      score += 2;
    }
    if (getStem(candidateStr) === getStem(correctStr)) {
      score += 3;
    }
    if (
      (candidateStr.includes("y") && correctStr.includes("y")) ||
      (candidateStr.includes("sh") && correctStr.includes("sh"))
    ) {
      score += 1;
    }

    score -= getLevenshteinDistance(correctStr, candidateStr);
    return score;
  }

  function shuffleArray(values) {
    const arr = [...values];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function pickRandomDistinct(source, count, excluded = new Set()) {
    const filtered = source.filter((item) => !excluded.has(item));
    const shuffled = shuffleArray(filtered);
    return shuffled.slice(0, count);
  }

  // ─── public api ──────────────────────────────────────────────────────────────

  function renderQuickAnswerOptions() {
    if (!elements.quickAnswerOptions) {
      return;
    }

    if (!state.currentQuestion || state.currentQuestion.kind !== "typing") {
      elements.quickAnswerOptions.innerHTML = "";
      elements.quickAnswerOptions.classList.add("hidden");
      return;
    }

    const correct = state.currentQuestion.romaji;
    const allRomaji = kanaData.map((item) => item.romaji).filter((romaji) => romaji !== correct);
    const ranked = allRomaji
      .map((romaji) => ({ romaji, score: scoreDistractorSimilarity(correct, romaji) }))
      .sort((a, b) => b.score - a.score);

    let similarPool = ranked.filter((item) => item.score >= 3).map((item) => item.romaji);
    if (similarPool.length < 6) {
      similarPool = ranked.slice(0, 12).map((item) => item.romaji);
    }

    const distractorSet = new Set();

    // Boost historically-confused items: pick up to 2 from confusion pairs (Phase 2)
    const confusionPairs = (state.confusionPairs && state.confusionPairs[correct]) || {};
    const confusedRomaji = Object.entries(confusionPairs)
      .sort((a, b) => b[1] - a[1])          // most-confused first
      .map(([romaji]) => romaji)
      .filter((romaji) => romaji !== correct && kanaData.some((k) => k.romaji === romaji));

    confusedRomaji.slice(0, 2).forEach((romaji) => distractorSet.add(romaji));

    // Keep most choices close to the target so they feel like genuine confusions.
    const similarNeeded = Math.max(0, 2 - distractorSet.size);
    pickRandomDistinct(similarPool, similarNeeded, distractorSet).forEach((romaji) => distractorSet.add(romaji));

    // Keep one option more random to avoid being too predictable.
    pickRandomDistinct(allRomaji, 1, distractorSet).forEach((romaji) => distractorSet.add(romaji));

    if (distractorSet.size < 3) {
      pickRandomDistinct(allRomaji, 3 - distractorSet.size, distractorSet).forEach((romaji) =>
        distractorSet.add(romaji)
      );
    }

    const options = shuffleArray([correct, ...distractorSet].slice(0, 4));

    elements.quickAnswerOptions.innerHTML = options
      .map(
        (romaji) =>
          `<button type="button" class="quick-answer-btn" data-answer="${romaji}">${romaji}</button>`
      )
      .join("");
    elements.quickAnswerOptions.classList.remove("hidden");
  }

  return { renderQuickAnswerOptions };
}
