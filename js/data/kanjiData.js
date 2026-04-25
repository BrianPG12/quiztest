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
  makeKanjiEntry({ id: "kanji-ichi", kanji: "一", meanings: ["one", "1", "single", "first"], onyomi: ["ichi"], kunyomi: ["hito(tsu)"], romaji: ["ichi", "hitotsu"] }),
  makeKanjiEntry({ id: "kanji-ni", kanji: "二", meanings: ["two", "2", "double", "second"], onyomi: ["ni"], kunyomi: ["futa(tsu)"], romaji: ["ni", "futatsu"] }),
  makeKanjiEntry({ id: "kanji-san", kanji: "三", meanings: ["three", "3", "triple", "third"], onyomi: ["san"], kunyomi: ["mit(tsu)"], romaji: ["san", "mittsu"] }),
  makeKanjiEntry({ id: "kanji-yon", kanji: "四", meanings: ["four", "4", "fourth"], onyomi: ["shi"], kunyomi: ["yon", "yo(tsu)"], romaji: ["shi", "yon", "yottsu"] }),
  makeKanjiEntry({ id: "kanji-go", kanji: "五", meanings: ["five", "5", "fifth"], onyomi: ["go"], kunyomi: ["itsu(tsu)"], romaji: ["go", "itsutsu"] }),
  makeKanjiEntry({ id: "kanji-roku", kanji: "六", meanings: ["six", "6", "sixth"], onyomi: ["roku"], kunyomi: ["mut(tsu)"], romaji: ["roku", "muttsu"] }),
  makeKanjiEntry({ id: "kanji-nana", kanji: "七", meanings: ["seven", "7", "seventh"], onyomi: ["shichi"], kunyomi: ["nana(tsu)"], romaji: ["shichi", "nana", "nanatsu"] }),
  makeKanjiEntry({ id: "kanji-hachi", kanji: "八", meanings: ["eight", "8", "eighth"], onyomi: ["hachi"], kunyomi: ["ya(tsu)"], romaji: ["hachi", "yattsu"] }),
  makeKanjiEntry({ id: "kanji-kyuu", kanji: "九", meanings: ["nine", "9", "ninth"], onyomi: ["kyuu", "ku"], kunyomi: ["kokono(tsu)"], romaji: ["kyuu", "ku", "kokonotsu"] }),
  makeKanjiEntry({ id: "kanji-juu", kanji: "十", meanings: ["ten", "10", "tenth"], onyomi: ["juu"], kunyomi: ["too"], romaji: ["juu", "too"] })
];