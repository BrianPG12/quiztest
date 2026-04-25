export function pickQuestion({
  kanaData,
  kanaSet,
  getKanaCategoryFn,
  getQuestionWeightFn,
  backlog,
  preferredRomajiList = null,
  avoidRomaji = null
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

  // Prevent immediate back-to-back repeats when there are alternatives.
  if (typeof avoidRomaji === "string" && avoidRomaji && pool.length > 1) {
    const withoutRepeat = pool.filter((item) => item.romaji !== avoidRomaji);
    if (withoutRepeat.length > 0) {
      pool = withoutRepeat;
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

function pickGenericQuestion({
  items,
  backlog,
  preferredIds = null,
  avoidId = null,
  getItemId
}) {
  const safeItems = Array.isArray(items) ? items : [];
  let pool = safeItems;

  if (Array.isArray(preferredIds) && preferredIds.length > 0) {
    const preferredSet = new Set(preferredIds);
    const targeted = safeItems.filter((item) => preferredSet.has(getItemId(item)));
    if (targeted.length > 0) {
      pool = targeted;
    }
  }

  if (typeof avoidId === "string" && avoidId && pool.length > 1) {
    const filtered = pool.filter((item) => getItemId(item) !== avoidId);
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  if (pool.length === 0) {
    throw new Error("No quiz items available for the current settings.");
  }

  const weights = pool.map((item) => {
    const itemId = getItemId(item);
    const row = backlog && backlog[itemId] ? backlog[itemId] : null;
    if (!row || row.right + row.wrong === 0) {
      return 4;
    }
    return Math.max(1, 3 + row.wrong - row.right);
  });

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let rand = Math.random() * totalWeight;

  for (let i = 0; i < pool.length; i++) {
    rand -= weights[i];
    if (rand <= 0) {
      return pool[i];
    }
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
  preferredRomajiList,
  avoidRomaji
}) {
  const item = pickQuestion({
    kanaData,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList,
    avoidRomaji
  });

  if (scriptMode === "hiragana") {
    const scriptName = "Hiragana";
    return {
      kind: "typing",
      romaji: resolveTypingRomaji(item, scriptName),
      trackingRomaji: item.romaji,
      kana: item.hiragana,
      scriptName
    };
  }

  if (scriptMode === "katakana") {
    const scriptName = "Katakana";
    return {
      kind: "typing",
      romaji: resolveTypingRomaji(item, scriptName),
      trackingRomaji: item.romaji,
      kana: item.katakana,
      scriptName
    };
  }

  const useHiragana = Math.random() > 0.5;
  const scriptName = useHiragana ? "Hiragana" : "Katakana";
  return {
    kind: "typing",
    romaji: resolveTypingRomaji(item, scriptName),
    trackingRomaji: item.romaji,
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
  preferredRomajiList,
  avoidRomaji
}) {
  const item = pickQuestion({
    kanaData,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList,
    avoidRomaji
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

export function pickWordQuestion({
  wordsData,
  mode,
  backlog,
  preferredIds,
  avoidId,
  showRomaji
}) {
  const item = pickGenericQuestion({
    items: wordsData,
    backlog,
    preferredIds,
    avoidId,
    getItemId: (entry) => entry.id
  });

  if (mode === "englishToJapanese") {
    return {
      kind: "typing",
      dataset: "words",
      trackingId: item.id,
      promptText: item.meanings[0],
      helperText: showRomaji ? item.helperRomaji || item.romaji : "",
      answerLabel: "Type Japanese",
      placeholder: "e.g. daigaku",
      acceptedAnswers: [item.japanese, item.romaji],
      answerNormalizer: "forgiving-romaji",
      displayAnswer: item.japanese,
      hintAnswer: item.romaji,
      quickAnswerEnabled: false
    };
  }

  return {
    kind: "typing",
    dataset: "words",
    trackingId: item.id,
    promptText: item.japanese,
    helperText: showRomaji && item.helperRomaji && item.helperRomaji !== item.japanese ? item.helperRomaji : "",
    answerLabel: "Type English",
    placeholder: "e.g. college",
    acceptedAnswers: item.meanings,
    answerNormalizer: "english",
    displayAnswer: item.meanings[0],
    hintAnswer: item.meanings[0],
    quickAnswerEnabled: false
  };
}

export function pickKanjiQuestion({
  kanjiData,
  mode,
  backlog,
  preferredIds,
  avoidId,
  showRomaji
}) {
  const item = pickGenericQuestion({
    items: kanjiData,
    backlog,
    preferredIds,
    avoidId,
    getItemId: (entry) => entry.id
  });

  if (mode === "meaningToKanji") {
    return {
      kind: "typing",
      dataset: "kanji",
      trackingId: item.id,
      promptText: item.meanings[0],
      helperText: showRomaji ? item.romaji.join(", ") : "",
      answerLabel: "Type Kanji",
      placeholder: "e.g. 一",
      acceptedAnswers: [item.kanji],
      answerNormalizer: "exact",
      displayAnswer: item.kanji,
      hintAnswer: item.kanji,
      quickAnswerEnabled: false
    };
  }

  if (mode === "promptToKanji") {
    const useMeaningPrompt = Math.random() > 0.5;
    const promptText = useMeaningPrompt
      ? item.meanings[0]
      : ((item.romaji && item.romaji[0]) || (item.onyomi && item.onyomi[0]) || (item.kunyomi && item.kunyomi[0]) || item.meanings[0]);
    return {
      kind: "typing",
      dataset: "kanji",
      trackingId: item.id,
      promptText,
      helperText: useMeaningPrompt && showRomaji ? item.romaji.join(", ") : "",
      answerLabel: "Type Kanji",
      placeholder: "e.g. 一",
      acceptedAnswers: [item.kanji],
      answerNormalizer: "exact",
      displayAnswer: item.kanji,
      hintAnswer: item.kanji,
      quickAnswerEnabled: false
    };
  }

  if (mode === "kanjiDrawing") {
    return {
      kind: "drawing",
      dataset: "kanji",
      trackingId: item.id,
      romaji: item.id,
      kanji: item.kanji,
      canvasMode: "kanji",
      promptText: `Draw ${item.kanji}`,
      revealText: `Answer: ${item.kanji} (${item.meanings[0]}${item.romaji.length ? ` | ${item.romaji.join(", ")}` : ""}). Mark yourself right or wrong.`
    };
  }

  return {
    kind: "typing",
    dataset: "kanji",
    trackingId: item.id,
    promptText: item.kanji,
    helperText: showRomaji ? item.romaji.join(", ") : "",
    answerLabel: "Type Meaning",
    placeholder: "e.g. one",
    acceptedAnswers: item.meanings,
    answerNormalizer: "english",
    displayAnswer: item.meanings[0],
    hintAnswer: item.meanings[0],
    quickAnswerEnabled: false
  };
}
