export function pickQuestion({
  kanaData,
  kanaSet,
  getKanaCategoryFn,
  getQuestionWeightFn,
  backlog,
  preferredRomajiList = null
}) {
  const basePool = kanaSet === "all"
    ? kanaData
    : kanaData.filter((item) => getKanaCategoryFn(item.romaji) === kanaSet);

  // Fallback to full list if a filtered set is empty due stale selector values.
  const safeBasePool = basePool.length > 0 ? basePool : kanaData;

  let pool = safeBasePool;
  if (Array.isArray(preferredRomajiList) && preferredRomajiList.length > 0) {
    const preferredSet = new Set(preferredRomajiList);
    const targeted = safeBasePool.filter((item) => preferredSet.has(item.romaji));
    if (targeted.length > 0) {
      pool = targeted;
    }
  }

  if (pool.length === 0) {
    throw new Error("No kana available for the current settings.");
  }

  const weights = pool.map((item) => getQuestionWeightFn(backlog, item));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let rand = Math.random() * totalWeight;

  for (let i = 0; i < pool.length; i++) {
    rand -= weights[i];
    if (rand <= 0) return pool[i];
  }

  return pool[pool.length - 1];
}

function resolveTypingRomaji(item, scriptName) {
  if (scriptName === "Hiragana" && item.hiragana === "を") {
    return "o";
  }
  if (scriptName === "Katakana" && item.katakana === "ヲ") {
    return "wo";
  }
  return item.romaji;
}

function resolveDrawingRomaji(item, canvasMode) {
  if (canvasMode === "hiragana" && item.hiragana === "を") {
    return "o";
  }
  if (canvasMode === "katakana" && item.katakana === "ヲ") {
    return "wo";
  }
  return item.romaji;
}

export function pickTypingQuestion({
  kanaData,
  scriptMode,
  kanaSet,
  getKanaCategoryFn,
  getQuestionWeightFn,
  backlog,
  preferredRomajiList
}) {
  const item = pickQuestion({
    kanaData,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList
  });

  if (scriptMode === "hiragana") {
    const scriptName = "Hiragana";
    return {
      kind: "typing",
      romaji: resolveTypingRomaji(item, scriptName),
      kana: item.hiragana,
      scriptName
    };
  }

  if (scriptMode === "katakana") {
    const scriptName = "Katakana";
    return {
      kind: "typing",
      romaji: resolveTypingRomaji(item, scriptName),
      kana: item.katakana,
      scriptName
    };
  }

  const useHiragana = Math.random() > 0.5;
  const scriptName = useHiragana ? "Hiragana" : "Katakana";
  return {
    kind: "typing",
    romaji: resolveTypingRomaji(item, scriptName),
    kana: useHiragana ? item.hiragana : item.katakana,
    scriptName
  };
}

export function pickWritingQuestion({
  kanaData,
  writingMode,
  kanaSet,
  getKanaCategoryFn,
  getQuestionWeightFn,
  backlog,
  preferredRomajiList
}) {
  const item = pickQuestion({
    kanaData,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList
  });

  if (writingMode === "both") {
    return {
      kind: "drawing",
      romaji: item.romaji,
      hiragana: item.hiragana,
      katakana: item.katakana,
      canvasMode: "both",
      promptText: `${item.romaji} (Draw Hiragana + Katakana)`,
      revealText: `Answer: Hiragana ${item.hiragana} | Katakana ${item.katakana}. Mark yourself right or wrong.`
    };
  }

  if (writingMode === "hiragana") {
    const drawingRomaji = resolveDrawingRomaji(item, "hiragana");
    return {
      kind: "drawing",
      romaji: item.romaji,
      hiragana: item.hiragana,
      katakana: item.katakana,
      canvasMode: "hiragana",
      promptText: `${drawingRomaji} (Draw Hiragana)`,
      revealText: `Answer: Hiragana ${item.hiragana} | Katakana ${item.katakana}. Mark yourself right or wrong.`
    };
  }

  if (writingMode === "katakana") {
    const drawingRomaji = resolveDrawingRomaji(item, "katakana");
    return {
      kind: "drawing",
      romaji: item.romaji,
      hiragana: item.hiragana,
      katakana: item.katakana,
      canvasMode: "katakana",
      promptText: `${drawingRomaji} (Draw Katakana)`,
      revealText: `Answer: Katakana ${item.katakana} | Hiragana ${item.hiragana}. Mark yourself right or wrong.`
    };
  }

  const useHiragana = Math.random() > 0.5;
  const drawingRomaji = resolveDrawingRomaji(item, useHiragana ? "hiragana" : "katakana");
  return {
    kind: "drawing",
    romaji: item.romaji,
    hiragana: item.hiragana,
    katakana: item.katakana,
    canvasMode: useHiragana ? "hiragana" : "katakana",
    promptText: `${drawingRomaji} (Draw ${useHiragana ? "Hiragana" : "Katakana"})`,
    revealText: `Answer: ${useHiragana ? "Hiragana" : "Katakana"} ${useHiragana ? item.hiragana : item.katakana} | Other script: ${useHiragana ? item.katakana : item.hiragana}. Mark yourself right or wrong.`
  };
}

export function getScriptContextForTyping(question) {
  return question.scriptName === "Hiragana" ? "hiragana" : "katakana";
}
