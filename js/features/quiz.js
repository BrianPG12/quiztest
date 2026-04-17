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

  let pool = basePool;
  if (Array.isArray(preferredRomajiList) && preferredRomajiList.length > 0) {
    const preferredSet = new Set(preferredRomajiList);
    const targeted = basePool.filter((item) => preferredSet.has(item.romaji));
    if (targeted.length > 0) {
      pool = targeted;
    }
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
    return {
      kind: "typing",
      romaji: item.romaji,
      kana: item.hiragana,
      scriptName: "Hiragana"
    };
  }

  if (scriptMode === "katakana") {
    return {
      kind: "typing",
      romaji: item.romaji,
      kana: item.katakana,
      scriptName: "Katakana"
    };
  }

  const useHiragana = Math.random() > 0.5;
  return {
    kind: "typing",
    romaji: item.romaji,
    kana: useHiragana ? item.hiragana : item.katakana,
    scriptName: useHiragana ? "Hiragana" : "Katakana"
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
    return {
      kind: "drawing",
      romaji: item.romaji,
      hiragana: item.hiragana,
      katakana: item.katakana,
      canvasMode: "hiragana",
      promptText: `${item.romaji} (Draw Hiragana)`,
      revealText: `Answer: Hiragana ${item.hiragana} | Katakana ${item.katakana}. Mark yourself right or wrong.`
    };
  }

  if (writingMode === "katakana") {
    return {
      kind: "drawing",
      romaji: item.romaji,
      hiragana: item.hiragana,
      katakana: item.katakana,
      canvasMode: "katakana",
      promptText: `${item.romaji} (Draw Katakana)`,
      revealText: `Answer: Katakana ${item.katakana} | Hiragana ${item.hiragana}. Mark yourself right or wrong.`
    };
  }

  const useHiragana = Math.random() > 0.5;
  return {
    kind: "drawing",
    romaji: item.romaji,
    hiragana: item.hiragana,
    katakana: item.katakana,
    canvasMode: useHiragana ? "hiragana" : "katakana",
    promptText: `${item.romaji} (Draw ${useHiragana ? "Hiragana" : "Katakana"})`,
    revealText: `Answer: ${useHiragana ? "Hiragana" : "Katakana"} ${useHiragana ? item.hiragana : item.katakana} | Other script: ${useHiragana ? item.katakana : item.hiragana}. Mark yourself right or wrong.`
  };
}

export function getScriptContextForTyping(question) {
  return question.scriptName === "Hiragana" ? "hiragana" : "katakana";
}
