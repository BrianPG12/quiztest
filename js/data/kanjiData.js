function makeKanjiEntry({ id, kanji, meanings, onyomi = [], kunyomi = [], romaji = [] }) {
  return {
    id,
    kanji,
    meanings,
    onyomi,
    kunyomi,
    romaji
  };
}

export const kanjiData = [
  makeKanjiEntry({ id: "kanji-ichi", kanji: "一", meanings: ["one", "1"], onyomi: ["ichi"], kunyomi: ["hito(tsu)"], romaji: ["ichi", "hitotsu"] }),
  makeKanjiEntry({ id: "kanji-ni", kanji: "二", meanings: ["two", "2"], onyomi: ["ni"], kunyomi: ["futa(tsu)"], romaji: ["ni", "futatsu"] }),
  makeKanjiEntry({ id: "kanji-san", kanji: "三", meanings: ["three", "3"], onyomi: ["san"], kunyomi: ["mit(tsu)"], romaji: ["san", "mittsu"] }),
  makeKanjiEntry({ id: "kanji-yon", kanji: "四", meanings: ["four", "4"], onyomi: ["shi"], kunyomi: ["yon", "yo(tsu)"], romaji: ["shi", "yon", "yottsu"] }),
  makeKanjiEntry({ id: "kanji-go", kanji: "五", meanings: ["five", "5"], onyomi: ["go"], kunyomi: ["itsu(tsu)"], romaji: ["go", "itsutsu"] }),
  makeKanjiEntry({ id: "kanji-roku", kanji: "六", meanings: ["six", "6"], onyomi: ["roku"], kunyomi: ["mut(tsu)"], romaji: ["roku", "muttsu"] }),
  makeKanjiEntry({ id: "kanji-nana", kanji: "七", meanings: ["seven", "7"], onyomi: ["shichi"], kunyomi: ["nana(tsu)"], romaji: ["shichi", "nana", "nanatsu"] }),
  makeKanjiEntry({ id: "kanji-hachi", kanji: "八", meanings: ["eight", "8"], onyomi: ["hachi"], kunyomi: ["ya(tsu)"], romaji: ["hachi", "yattsu"] }),
  makeKanjiEntry({ id: "kanji-kyuu", kanji: "九", meanings: ["nine", "9"], onyomi: ["kyuu", "ku"], kunyomi: ["kokono(tsu)"], romaji: ["kyuu", "ku", "kokonotsu"] }),
  makeKanjiEntry({ id: "kanji-juu", kanji: "十", meanings: ["ten", "10"], onyomi: ["juu"], kunyomi: ["too"], romaji: ["juu", "too"] })
];