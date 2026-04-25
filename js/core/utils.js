export function sanitizeRomaji(text) {
  let raw = "";

  if (typeof text === "string") {
    raw = text;
  } else if (text && typeof text === "object" && typeof text.answer === "string") {
    raw = text.answer;
  } else if (text == null) {
    raw = "";
  } else {
    // Defensive: avoid turning arbitrary objects into "[object Object]" answers.
    raw = "";
  }

  return raw.trim().toLowerCase();
}

export function normalizeLooseText(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ");
}

export function normalizeEnglishAnswer(text) {
  return normalizeLooseText(text)
    .replace(/[.;:,!?()[\]{}]/g, "")
    .replace(/\b(the|a|an)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeForgivingRomaji(text) {
  return sanitizeRomaji(text)
    .replace(/-/g, "")
    .replace(/ou/g, "oo")
    .replace(/ei/g, "ee")
    .replace(/sy/g, "sh")
    .replace(/ty/g, "ch")
    .replace(/si/g, "shi")
    .replace(/ti/g, "chi")
    .replace(/tu/g, "tsu")
    .replace(/hu/g, "fu")
    .replace(/zi/g, "ji")
    .replace(/du/g, "zu");
}

export function matchesAnyNormalizedAnswer(input, acceptedAnswers, normalizeFn = normalizeLooseText) {
  const normalizedInput = normalizeFn(input);
  if (!normalizedInput) {
    return false;
  }

  return acceptedAnswers.some((answer) => normalizeFn(answer) === normalizedInput);
}

export function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function asPercent(part, total) {
  if (total === 0) {
    return "-";
  }
  return `${Math.round((part / total) * 100)}%`;
}

export function formatDateLabel(dateKey) {
  const parsed = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return dateKey;
  }
  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
