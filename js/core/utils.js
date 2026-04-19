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
