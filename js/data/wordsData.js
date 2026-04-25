function makeWordEntry({ id, japanese, romaji, meanings, category = "core", helperRomaji = romaji }) {
  return {
    id,
    japanese,
    romaji,
    helperRomaji,
    meanings,
    category
  };
}

const baseWords = [
  makeWordEntry({ id: "word-daigaku", japanese: "だいがく", romaji: "daigaku", meanings: ["college", "university", "uni"], category: "school" }),
  makeWordEntry({ id: "word-kookoo", japanese: "こうこう", romaji: "kookoo", meanings: ["high school"], category: "school" }),
  makeWordEntry({ id: "word-gakusee", japanese: "がくせい", romaji: "gakusee", meanings: ["student", "pupil"], category: "school" }),
  makeWordEntry({ id: "word-daigakusee", japanese: "だいがくせい", romaji: "daigakusee", meanings: ["college student"], category: "school" }),
  makeWordEntry({ id: "word-ryuugakusee", japanese: "りゅうがくせい", romaji: "ryuugakusee", meanings: ["international student", "foreign student", "exchange student"], category: "school" }),
  makeWordEntry({ id: "word-sensee", japanese: "せんせい", romaji: "sensee", meanings: ["teacher", "instructor", "professor"], category: "school" }),
  makeWordEntry({ id: "word-senkoo", japanese: "せんこう", romaji: "senkoo", meanings: ["major"], category: "school" }),
  makeWordEntry({ id: "word-watashi", japanese: "わたし", romaji: "watashi", meanings: ["i"], category: "people" }),
  makeWordEntry({ id: "word-tomodachi", japanese: "ともだち", romaji: "tomodachi", meanings: ["friend"], category: "people" }),
  makeWordEntry({ id: "word-san", japanese: "さん", romaji: "san", meanings: ["mr", "ms", "mr/ms"], category: "people" }),
  makeWordEntry({ id: "word-jin", japanese: "じん", romaji: "jin", meanings: ["people"], category: "people" }),
  makeWordEntry({ id: "word-nihonjin", japanese: "にほんじん", romaji: "nihonjin", meanings: ["japanese people", "japanese person"], category: "people" }),
  makeWordEntry({ id: "word-ima", japanese: "いま", romaji: "ima", meanings: ["now"], category: "time" }),
  makeWordEntry({ id: "word-gozen", japanese: "ごぜん", romaji: "gozen", meanings: ["a.m.", "am", "morning", "before noon"], category: "time" }),
  makeWordEntry({ id: "word-gogo", japanese: "ごご", romaji: "gogo", meanings: ["p.m.", "pm", "afternoon"], category: "time" }),
  makeWordEntry({ id: "word-han", japanese: "はん", romaji: "han", meanings: ["half"], category: "time" }),
  makeWordEntry({ id: "word-nihon", japanese: "にほん", romaji: "nihon", meanings: ["japan", "japanese nation"], category: "countries" }),
  makeWordEntry({ id: "word-amerika", japanese: "アメリカ", romaji: "amerika", meanings: ["usa", "us", "u.s.a", "u.s.", "united states", "united states of america", "america", "the states"], category: "countries" }),
  makeWordEntry({ id: "word-go", japanese: "ご", romaji: "go", meanings: ["language"], category: "core" }),
  makeWordEntry({ id: "word-sai", japanese: "さい", romaji: "sai", meanings: ["years old"], category: "core" }),
  makeWordEntry({ id: "word-denwa", japanese: "でんわ", romaji: "denwa", meanings: ["telephone", "phone", "telephone call", "call"], category: "core" }),
  makeWordEntry({ id: "word-bangoo", japanese: "ばんごう", romaji: "bangoo", meanings: ["number"], category: "core" }),
  makeWordEntry({ id: "word-namae", japanese: "なまえ", romaji: "namae", meanings: ["name"], category: "core" }),
  makeWordEntry({ id: "word-nan-nani", japanese: "なん/なに", romaji: "nan/nani", meanings: ["what", "which thing"], category: "core" }),
  makeWordEntry({ id: "word-anoo", japanese: "あのう", romaji: "anoo", meanings: ["um"], category: "core" }),
  makeWordEntry({ id: "word-hai", japanese: "はい", romaji: "hai", meanings: ["yes"], category: "core" }),
  makeWordEntry({ id: "word-soo-desu", japanese: "そうです", romaji: "soo desu", meanings: ["thats right", "that's right"], category: "core" }),
  makeWordEntry({ id: "word-soo-desu-ka", japanese: "そうですか", romaji: "soo desu ka", meanings: ["i see", "is that so"], category: "core" }),
  makeWordEntry({ id: "word-igirisu", japanese: "イギリス", romaji: "igirisu", meanings: ["britain", "uk", "united kingdom"], category: "countries" }),
  makeWordEntry({ id: "word-oosutoria", japanese: "オーストラリア", romaji: "oosutoria", meanings: ["australia"], category: "countries" }),
  makeWordEntry({ id: "word-kankoku", japanese: "かんこく", romaji: "kankoku", meanings: ["korea"], category: "countries" }),
  makeWordEntry({ id: "word-kanada", japanese: "カナダ", romaji: "kanada", meanings: ["canada"], category: "countries" }),
  makeWordEntry({ id: "word-chuugoku", japanese: "ちゅうごく", romaji: "chuugoku", meanings: ["china"], category: "countries" }),
  makeWordEntry({ id: "word-indo", japanese: "インド", romaji: "indo", meanings: ["india"], category: "countries" }),
  makeWordEntry({ id: "word-ejiputo", japanese: "エジプト", romaji: "ejiputo", meanings: ["egypt"], category: "countries" }),
  makeWordEntry({ id: "word-firipin", japanese: "フィリピン", romaji: "firipin", meanings: ["philippines", "philippiness"], category: "countries" }),
  makeWordEntry({ id: "word-ajia-kenkyuu", japanese: "あじあ けんきゅう", romaji: "ajia kenkyuu", meanings: ["asian studies"], category: "majors" }),
  makeWordEntry({ id: "word-keezai", japanese: "けいざい", romaji: "keezai", meanings: ["economics"], category: "majors" }),
  makeWordEntry({ id: "word-koogaku", japanese: "こうがく", romaji: "koogaku", meanings: ["engineering"], category: "majors" }),
  makeWordEntry({ id: "word-kokusaikankee", japanese: "こくさいかんけい", romaji: "kokusaikankee", meanings: ["international relations"], category: "majors" }),
  makeWordEntry({ id: "word-kanpyuutaa", japanese: "コンピューター", romaji: "kanpyuutaa", meanings: ["computer"], category: "majors" }),
  makeWordEntry({ id: "word-seeji", japanese: "せいじ", romaji: "seeji", meanings: ["politics"], category: "majors" }),
  makeWordEntry({ id: "word-seebutsugaku", japanese: "せいぶつがく", romaji: "seebutsugaku", meanings: ["biology"], category: "majors" }),
  makeWordEntry({ id: "word-bijinesu", japanese: "ビジネス", romaji: "bijinesu", meanings: ["business"], category: "majors" }),
  makeWordEntry({ id: "word-bungaku", japanese: "ぶんがく", romaji: "bungaku", meanings: ["literature"], category: "majors" }),
  makeWordEntry({ id: "word-rekishi", japanese: "れきし", romaji: "rekishi", meanings: ["history"], category: "majors" }),
  makeWordEntry({ id: "word-isha", japanese: "いしゃ", romaji: "isha", meanings: ["doctor"], category: "jobs" }),
  makeWordEntry({ id: "word-kaishain", japanese: "かいしゃいん", romaji: "kaishain", meanings: ["office worker"], category: "jobs" }),
  makeWordEntry({ id: "word-kangoshi", japanese: "かんごし", romaji: "kangoshi", meanings: ["nurse"], category: "jobs" }),
  makeWordEntry({ id: "word-kookoosee", japanese: "こうこうせい", romaji: "kookoosee", meanings: ["high school student"], category: "jobs" }),
  makeWordEntry({ id: "word-shufu", japanese: "しゅふ", romaji: "shufu", meanings: ["housewife"], category: "jobs" }),
  makeWordEntry({ id: "word-daigakuinsee", japanese: "だいがくいんせい", romaji: "daigakuinsee", meanings: ["graduate student"], category: "jobs" }),
  makeWordEntry({ id: "word-bangoshi", japanese: "べんごし", romaji: "bangoshi", meanings: ["lawyer"], category: "jobs" }),
  makeWordEntry({ id: "word-okaasan", japanese: "おかあさん", romaji: "okaasan", meanings: ["mother"], category: "family" }),
  makeWordEntry({ id: "word-otoosan", japanese: "おとうさん", romaji: "otoosan", meanings: ["father"], category: "family" }),
  makeWordEntry({ id: "word-oneesan", japanese: "おねえさん", romaji: "oneesan", meanings: ["older sister", "big sister"], category: "family" }),
  makeWordEntry({ id: "word-oniisan", japanese: "おにいさん", romaji: "oniisan", meanings: ["older brother", "big brother"], category: "family" }),
  makeWordEntry({ id: "word-imooto", japanese: "いもうと", romaji: "imooto", meanings: ["younger sister", "little sister"], category: "family" }),
  makeWordEntry({ id: "word-otooto", japanese: "おとうと", romaji: "otooto", meanings: ["younger brother", "little brother"], category: "family" })
];

const yearWords = [
  [1, "いちねんせい", "ichinensee", "first year student"],
  [2, "にねんせい", "ninensee", "second year student"],
  [3, "さんねんせい", "sannensee", "third year student"],
  [4, "よねんせい", "yonnensee", "fourth year student"],
  [5, "ごねんせい", "gonensee", "fifth year student"]
].map(([year, japanese, romaji, meaning]) => makeWordEntry({
  id: `word-year-${year}`,
  japanese,
  romaji,
  meanings: [meaning],
  category: "school"
}));

const timeWords = [
  ["にじ さんじゅうよんぷん", "niji sanjuuyonpun", ["2:34", "2 34"]],
  ["よじ じゅうきゅうふん", "yoji juukyuufun", ["4:19", "4 19", "16:19", "16 19"]],
  ["しちじ はん", "shichiji han", ["7:30", "7 30"]],
  ["じゅういちじ ごふん", "juuichiji gofun", ["11:05", "11 05"]],
  ["くじ よんじゅっぷん", "kuji yonjuppun", ["9:40", "9 40"]]
].map(([japanese, romaji, meanings], index) => makeWordEntry({
  id: `word-time-${index + 1}`,
  japanese,
  romaji,
  meanings,
  category: "time"
}));

const ageWords = [5, 8, 12, 17, 20, 23, 31, 44, 58, 67, 75, 88].map((age) => makeWordEntry({
  id: `word-age-${age}`,
  japanese: `${age}さい`,
  romaji: `${age} sai`,
  meanings: [`${age} years old`, `${age}`],
  category: "core"
}));

export const wordsData = [
  ...baseWords,
  ...yearWords,
  ...timeWords,
  ...ageWords
];
