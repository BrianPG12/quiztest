function buildKanjiQuestions({ datasetId, levelLabel, kanjiItems }) {
  const questions = [];
  kanjiItems.forEach((item) => {
    questions.push({
      id: `${datasetId}-kanji-meaning-${item.id}`,
      category: "kanji",
      promptText: item.kanji,
      answerLabel: `${levelLabel} Meaning`,
      placeholder: "e.g. station",
      acceptedAnswers: item.meanings,
      answerNormalizer: "english",
      displayAnswer: item.meanings[0] || "",
      hintAnswer: item.meanings[0] || "",
      meanings: item.meanings || []
    });

    questions.push({
      id: `${datasetId}-kanji-char-${item.id}`,
      category: "kanji",
      promptText: item.meanings[0] || "",
      answerLabel: `${levelLabel} Kanji`,
      placeholder: "e.g. 駅",
      acceptedAnswers: [item.kanji],
      answerNormalizer: "exact",
      displayAnswer: item.kanji,
      hintAnswer: item.kanji,
      meanings: [item.kanji]
    });
  });
  return questions;
}

function buildVocabQuestions({ datasetId, vocabItems }) {
  return vocabItems.flatMap((item) => ([
    {
      id: `${datasetId}-vocab-eng-${item.id}`,
      category: "vocab",
      promptText: item.word,
      answerLabel: "English Meaning",
      placeholder: "e.g. friend",
      acceptedAnswers: item.meanings,
      answerNormalizer: "english",
      displayAnswer: item.meanings[0] || "",
      hintAnswer: item.meanings[0] || "",
      meanings: item.meanings || []
    },
    {
      id: `${datasetId}-vocab-jp-${item.id}`,
      category: "vocab",
      promptText: item.meanings[0] || "",
      answerLabel: "Japanese Word",
      placeholder: "e.g. ともだち",
      acceptedAnswers: [item.word],
      answerNormalizer: "exact",
      displayAnswer: item.word,
      hintAnswer: item.word,
      meanings: [item.word]
    }
  ]));
}

function buildGrammarQuestions({ datasetId, grammarItems }) {
  return grammarItems.flatMap((item) => ([
    {
      id: `${datasetId}-grammar-meaning-${item.id}`,
      category: "grammar",
      promptText: item.pattern,
      answerLabel: "Grammar Meaning",
      placeholder: "e.g. must not do",
      acceptedAnswers: item.meanings,
      answerNormalizer: "english",
      displayAnswer: item.meanings[0] || "",
      hintAnswer: item.meanings[0] || "",
      meanings: item.meanings || []
    },
    {
      id: `${datasetId}-grammar-pattern-${item.id}`,
      category: "grammar",
      promptText: item.example,
      answerLabel: "Grammar Pattern",
      placeholder: "e.g. Vてください",
      acceptedAnswers: [item.pattern],
      answerNormalizer: "exact",
      displayAnswer: item.pattern,
      hintAnswer: item.pattern,
      meanings: [item.pattern]
    }
  ]));
}

function buildSentenceQuestions({ datasetId, sentenceItems }) {
  return sentenceItems.flatMap((item) => ([
    {
      id: `${datasetId}-sentence-eng-${item.id}`,
      category: "reading",
      promptText: item.japanese,
      answerLabel: "English Meaning",
      placeholder: "e.g. I am a student.",
      acceptedAnswers: item.englishAnswers,
      answerNormalizer: "english",
      displayAnswer: item.englishAnswers[0] || "",
      hintAnswer: item.englishAnswers[0] || "",
      meanings: item.englishAnswers || []
    },
    {
      id: `${datasetId}-sentence-cloze-${item.id}`,
      category: "reading",
      promptText: item.clozePrompt || item.japanese,
      answerLabel: "Fill in the Blank",
      placeholder: "e.g. は",
      acceptedAnswers: Array.isArray(item.clozeAnswers) && item.clozeAnswers.length > 0 ? item.clozeAnswers : [item.japanese],
      answerNormalizer: "exact",
      displayAnswer: Array.isArray(item.clozeAnswers) && item.clozeAnswers.length > 0 ? item.clozeAnswers[0] : item.japanese,
      hintAnswer: item.japanese,
      meanings: [item.japanese]
    }
  ]));
}

export function buildJlptN5MockQuestions({ kanjiData, vocabData, grammarData, sentencesData }) {
  return [
    ...buildKanjiQuestions({ datasetId: "jlptn5test", levelLabel: "N5", kanjiItems: kanjiData }),
    ...buildVocabQuestions({ datasetId: "jlptn5test", vocabItems: vocabData }),
    ...buildGrammarQuestions({ datasetId: "jlptn5test", grammarItems: grammarData }),
    ...buildSentenceQuestions({ datasetId: "jlptn5test", sentenceItems: sentencesData })
  ];
}

export function buildJlptN4MockQuestions({ n4KanjiData, n4VocabData, n4GrammarData, sentencesData }) {
  return [
    ...buildKanjiQuestions({ datasetId: "jlptn4test", levelLabel: "N4", kanjiItems: n4KanjiData }),
    ...buildVocabQuestions({ datasetId: "jlptn4test", vocabItems: n4VocabData }),
    ...buildGrammarQuestions({ datasetId: "jlptn4test", grammarItems: n4GrammarData }),
    ...buildSentenceQuestions({ datasetId: "jlptn4test", sentenceItems: sentencesData })
  ];
}
