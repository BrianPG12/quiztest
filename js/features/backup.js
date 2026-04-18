import { clampDailyGoal } from "./progressPreferences.js";

/**
 * Manages all backup, import, export, and merge operations.
 *
 * @param {object} deps
 * @param {object} deps.state - Shared application state (mutated in-place)
 * @param {object} deps.kanaData - Full kana dataset
 * @param {number} deps.MAX_DRAWINGS_PER_KANA
 * @param {number} deps.DAILY_HISTORY_LIMIT
 * @param {function} deps.showResultFn - (message: string, success: boolean) => void
 * @param {function} deps.buildProgressPayload - ({ state, dailyHistoryLimit }) => object
 * @param {function} deps.applyProgressPayload - ({ payload, state, kanaData, ... }) => void
 * @param {function} deps.onImportComplete - () => void, called after state is replaced/merged
 */
export function createBackupManager({
  state,
  kanaData,
  MAX_DRAWINGS_PER_KANA,
  DAILY_HISTORY_LIMIT,
  showResultFn,
  buildProgressPayload,
  applyProgressPayload,
  onImportComplete
}) {
  // ─── helpers ────────────────────────────────────────────────────────────────

  function toSafeCount(value) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }
    return parsed;
  }

  function mergeSrsEntry(localEntry, importedEntry) {
    const localDueAt = toSafeCount(localEntry && localEntry.dueAt);
    const importDueAt = toSafeCount(importedEntry && importedEntry.dueAt);
    const dueCandidates = [localDueAt, importDueAt].filter((value) => value > 0);
    const dueAt = dueCandidates.length > 0 ? Math.min(...dueCandidates) : 0;

    const localSeenAt = toSafeCount(localEntry && localEntry.lastSeenAt);
    const importSeenAt = toSafeCount(importedEntry && importedEntry.lastSeenAt);

    return {
      dueAt,
      intervalHours: Math.max(
        toSafeCount(localEntry && localEntry.intervalHours),
        toSafeCount(importedEntry && importedEntry.intervalHours)
      ),
      lastSeenAt: Math.max(localSeenAt, importSeenAt),
      lastCorrect: importSeenAt >= localSeenAt
        ? Boolean(importedEntry && importedEntry.lastCorrect)
        : Boolean(localEntry && localEntry.lastCorrect)
    };
  }

  function mergeBacklogRow(targetRow, incomingRow) {
    if (!incomingRow || typeof incomingRow !== "object") {
      return;
    }

    const numericKeys = [
      "right", "wrong",
      "typingRight", "typingWrong",
      "drawingRight", "drawingWrong",
      "hiraganaTypingRight", "hiraganaTypingWrong",
      "hiraganaDrawingRight", "hiraganaDrawingWrong",
      "hiraganaRight", "hiraganaWrong",
      "katakanaTypingRight", "katakanaTypingWrong",
      "katakanaDrawingRight", "katakanaDrawingWrong",
      "katakanaRight", "katakanaWrong"
    ];

    numericKeys.forEach((key) => {
      targetRow[key] = toSafeCount(targetRow[key]) + toSafeCount(incomingRow[key]);
    });
  }

  function mergeDailyStats(localDailyStats, incomingDailyStats) {
    if (!incomingDailyStats || typeof incomingDailyStats !== "object") {
      return;
    }

    Object.keys(incomingDailyStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const incoming = incomingDailyStats[dateKey];
      if (!incoming || typeof incoming !== "object") {
        return;
      }

      if (!localDailyStats[dateKey]) {
        localDailyStats[dateKey] = {
          typingRight: 0,
          typingWrong: 0,
          drawingRight: 0,
          drawingWrong: 0
        };
      }

      localDailyStats[dateKey].typingRight += toSafeCount(incoming.typingRight);
      localDailyStats[dateKey].typingWrong += toSafeCount(incoming.typingWrong);
      localDailyStats[dateKey].drawingRight += toSafeCount(incoming.drawingRight);
      localDailyStats[dateKey].drawingWrong += toSafeCount(incoming.drawingWrong);
    });
  }

  function mergeDailyCategoryStats(localDailyCategoryStats, incomingDailyCategoryStats) {
    if (!incomingDailyCategoryStats || typeof incomingDailyCategoryStats !== "object") {
      return;
    }

    Object.keys(incomingDailyCategoryStats).forEach((dateKey) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        return;
      }

      const incoming = incomingDailyCategoryStats[dateKey];
      if (!incoming || typeof incoming !== "object") {
        return;
      }

      if (!localDailyCategoryStats[dateKey]) {
        localDailyCategoryStats[dateKey] = { normal: 0, dakuten: 0, yoon: 0 };
      }

      localDailyCategoryStats[dateKey].normal += toSafeCount(incoming.normal);
      localDailyCategoryStats[dateKey].dakuten += toSafeCount(incoming.dakuten);
      localDailyCategoryStats[dateKey].yoon += toSafeCount(incoming.yoon);
    });
  }

  function mergeProgressPayload(importedPayload) {
    if (!importedPayload || typeof importedPayload !== "object") {
      return;
    }

    const localPayload = buildProgressPayload({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });

    state.typingRightCount = toSafeCount(localPayload.typingRightCount) + toSafeCount(importedPayload.typingRightCount);
    state.typingWrongCount = toSafeCount(localPayload.typingWrongCount) + toSafeCount(importedPayload.typingWrongCount);
    state.drawingRightCount = toSafeCount(localPayload.drawingRightCount) + toSafeCount(importedPayload.drawingRightCount);
    state.drawingWrongCount = toSafeCount(localPayload.drawingWrongCount) + toSafeCount(importedPayload.drawingWrongCount);

    Object.keys(state.srsByRomaji).forEach((romaji) => {
      const localEntry = localPayload.srsByRomaji && localPayload.srsByRomaji[romaji];
      const incomingEntry = importedPayload.srsByRomaji && importedPayload.srsByRomaji[romaji];
      state.srsByRomaji[romaji] = mergeSrsEntry(localEntry, incomingEntry);
    });

    Object.keys(state.backlog).forEach((romaji) => {
      const incomingRow = importedPayload.backlog && importedPayload.backlog[romaji];
      mergeBacklogRow(state.backlog[romaji], incomingRow);
    });

    mergeDailyStats(state.dailyStats, importedPayload.dailyStats);
    mergeDailyCategoryStats(state.dailyCategoryStats, importedPayload.dailyCategoryStats);

    const combinedTypingMistakes = [
      ...(Array.isArray(importedPayload.recentTypingMistakes) ? importedPayload.recentTypingMistakes : []),
      ...(Array.isArray(localPayload.recentTypingMistakes) ? localPayload.recentTypingMistakes : [])
    ].filter((value) => typeof value === "string");

    const combinedDrawingMistakes = [
      ...(Array.isArray(importedPayload.recentDrawingMistakes) ? importedPayload.recentDrawingMistakes : []),
      ...(Array.isArray(localPayload.recentDrawingMistakes) ? localPayload.recentDrawingMistakes : [])
    ].filter((value) => typeof value === "string");

    state.recentTypingMistakes = [...new Set(combinedTypingMistakes)].slice(0, 120);
    state.recentDrawingMistakes = [...new Set(combinedDrawingMistakes)].slice(0, 120);
    state.recentMistakes = [...new Set([...state.recentTypingMistakes, ...state.recentDrawingMistakes])].slice(0, 120);

    if (importedPayload.drawingsByKana && typeof importedPayload.drawingsByKana === "object") {
      Object.keys(importedPayload.drawingsByKana).forEach((kanaChar) => {
        const localList = Array.isArray(state.drawingsByKana[kanaChar]) ? state.drawingsByKana[kanaChar] : [];
        const incomingList = Array.isArray(importedPayload.drawingsByKana[kanaChar])
          ? importedPayload.drawingsByKana[kanaChar].filter((value) => typeof value === "string")
          : [];
        state.drawingsByKana[kanaChar] = [...new Set([...incomingList, ...localList])].slice(0, MAX_DRAWINGS_PER_KANA);
      });
    }

    const localGoals = localPayload.dailyGoals && typeof localPayload.dailyGoals === "object"
      ? localPayload.dailyGoals
      : { total: localPayload.dailyGoal };
    const incomingGoals = importedPayload.dailyGoals && typeof importedPayload.dailyGoals === "object"
      ? importedPayload.dailyGoals
      : { total: importedPayload.dailyGoal };

    const localTotalGoal = clampDailyGoal(localGoals.total, 5, 200, 25);
    const importedTotalGoal = clampDailyGoal(incomingGoals.total, 5, 200, 25);
    const shouldUseImportedGoals = localTotalGoal === 25 && importedTotalGoal !== 25;

    state.dailyGoals = {
      total: shouldUseImportedGoals ? importedTotalGoal : localTotalGoal,
      typing: shouldUseImportedGoals
        ? clampDailyGoal(incomingGoals.typing, 0, 200, 12)
        : clampDailyGoal(localGoals.typing, 0, 200, 12),
      drawing: shouldUseImportedGoals
        ? clampDailyGoal(incomingGoals.drawing, 0, 200, 8)
        : clampDailyGoal(localGoals.drawing, 0, 200, 8),
      normal: shouldUseImportedGoals
        ? clampDailyGoal(incomingGoals.normal, 0, 200, 10)
        : clampDailyGoal(localGoals.normal, 0, 200, 10),
      dakuten: shouldUseImportedGoals
        ? clampDailyGoal(incomingGoals.dakuten, 0, 200, 6)
        : clampDailyGoal(localGoals.dakuten, 0, 200, 6),
      yoon: shouldUseImportedGoals
        ? clampDailyGoal(incomingGoals.yoon, 0, 200, 6)
        : clampDailyGoal(localGoals.yoon, 0, 200, 6)
    };
    state.dailyGoal = state.dailyGoals.total;
    state.lastSavedAt = Math.max(toSafeCount(localPayload.savedAt), toSafeCount(importedPayload.savedAt));
  }

  // ─── public api ─────────────────────────────────────────────────────────────

  function downloadTextFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function exportLocalProgress() {
    const payload = buildProgressPayload({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
    const now = new Date();
    const timestamp = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
      "-",
      String(now.getHours()).padStart(2, "0"),
      String(now.getMinutes()).padStart(2, "0"),
      String(now.getSeconds()).padStart(2, "0")
    ].join("");
    const filename = `kana-quiz-backup-${timestamp}.json`;
    downloadTextFile(filename, JSON.stringify(payload, null, 2), "application/json");
    showResultFn("Backup exported to JSON.", true);
  }

  async function importLocalProgressFromFile(file) {
    if (!file) {
      return;
    }

    let payload = null;
    try {
      const raw = await file.text();
      payload = JSON.parse(raw);
    } catch {
      showResultFn("Import failed: invalid JSON file.", false);
      return;
    }

    if (!payload || typeof payload !== "object") {
      showResultFn("Import failed: backup format is not valid.", false);
      return;
    }

    const shouldMerge = window.confirm(
      "Merge imported progress into current local progress? Click OK to merge, or Cancel to choose replace/cancel."
    );

    if (shouldMerge) {
      mergeProgressPayload(payload);
    } else {
      const shouldReplace = window.confirm("Replace current local progress with imported data?");
      if (!shouldReplace) {
        return;
      }

      applyProgressPayload({
        payload,
        state,
        kanaData,
        maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
        dailyHistoryLimit: DAILY_HISTORY_LIMIT
      });
    }

    onImportComplete();
    showResultFn(
      shouldMerge
        ? "Backup merged into local progress."
        : "Backup imported and local progress restored.",
      true
    );
  }

  function getLocalPayload() {
    return buildProgressPayload({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
  }

  function applyRemotePayload(payload) {
    applyProgressPayload({
      payload,
      state,
      kanaData,
      maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
      dailyHistoryLimit: DAILY_HISTORY_LIMIT
    });
  }

  return {
    exportLocalProgress,
    importLocalProgressFromFile,
    getLocalPayload,
    applyRemotePayload
  };
}
