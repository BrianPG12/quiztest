(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name4 in all)
      __defProp(target, name4, { get: all[name4], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // js/data/kanaData.js
  var kanaData, YOON_SET, DAKUTEN_SET, STORAGE_KEY, MAX_DRAWINGS_PER_KANA, DAILY_HISTORY_LIMIT;
  var init_kanaData = __esm({
    "js/data/kanaData.js"() {
      kanaData = [
        { romaji: "a", hiragana: "\u3042", katakana: "\u30A2" },
        { romaji: "i", hiragana: "\u3044", katakana: "\u30A4" },
        { romaji: "u", hiragana: "\u3046", katakana: "\u30A6" },
        { romaji: "e", hiragana: "\u3048", katakana: "\u30A8" },
        { romaji: "o", hiragana: "\u304A", katakana: "\u30AA" },
        { romaji: "ka", hiragana: "\u304B", katakana: "\u30AB" },
        { romaji: "ki", hiragana: "\u304D", katakana: "\u30AD" },
        { romaji: "ku", hiragana: "\u304F", katakana: "\u30AF" },
        { romaji: "ke", hiragana: "\u3051", katakana: "\u30B1" },
        { romaji: "ko", hiragana: "\u3053", katakana: "\u30B3" },
        { romaji: "sa", hiragana: "\u3055", katakana: "\u30B5" },
        { romaji: "shi", hiragana: "\u3057", katakana: "\u30B7" },
        { romaji: "su", hiragana: "\u3059", katakana: "\u30B9" },
        { romaji: "se", hiragana: "\u305B", katakana: "\u30BB" },
        { romaji: "so", hiragana: "\u305D", katakana: "\u30BD" },
        { romaji: "ta", hiragana: "\u305F", katakana: "\u30BF" },
        { romaji: "chi", hiragana: "\u3061", katakana: "\u30C1" },
        { romaji: "tsu", hiragana: "\u3064", katakana: "\u30C4" },
        { romaji: "te", hiragana: "\u3066", katakana: "\u30C6" },
        { romaji: "to", hiragana: "\u3068", katakana: "\u30C8" },
        { romaji: "na", hiragana: "\u306A", katakana: "\u30CA" },
        { romaji: "ni", hiragana: "\u306B", katakana: "\u30CB" },
        { romaji: "nu", hiragana: "\u306C", katakana: "\u30CC" },
        { romaji: "ne", hiragana: "\u306D", katakana: "\u30CD" },
        { romaji: "no", hiragana: "\u306E", katakana: "\u30CE" },
        { romaji: "ha", hiragana: "\u306F", katakana: "\u30CF" },
        { romaji: "hi", hiragana: "\u3072", katakana: "\u30D2" },
        { romaji: "fu", hiragana: "\u3075", katakana: "\u30D5" },
        { romaji: "he", hiragana: "\u3078", katakana: "\u30D8" },
        { romaji: "ho", hiragana: "\u307B", katakana: "\u30DB" },
        { romaji: "ma", hiragana: "\u307E", katakana: "\u30DE" },
        { romaji: "mi", hiragana: "\u307F", katakana: "\u30DF" },
        { romaji: "mu", hiragana: "\u3080", katakana: "\u30E0" },
        { romaji: "me", hiragana: "\u3081", katakana: "\u30E1" },
        { romaji: "mo", hiragana: "\u3082", katakana: "\u30E2" },
        { romaji: "ya", hiragana: "\u3084", katakana: "\u30E4" },
        { romaji: "yu", hiragana: "\u3086", katakana: "\u30E6" },
        { romaji: "yo", hiragana: "\u3088", katakana: "\u30E8" },
        { romaji: "ra", hiragana: "\u3089", katakana: "\u30E9" },
        { romaji: "ri", hiragana: "\u308A", katakana: "\u30EA" },
        { romaji: "ru", hiragana: "\u308B", katakana: "\u30EB" },
        { romaji: "re", hiragana: "\u308C", katakana: "\u30EC" },
        { romaji: "ro", hiragana: "\u308D", katakana: "\u30ED" },
        { romaji: "wa", hiragana: "\u308F", katakana: "\u30EF" },
        { romaji: "wo", hiragana: "\u3092", katakana: "\u30F2" },
        { romaji: "n", hiragana: "\u3093", katakana: "\u30F3" },
        { romaji: "ga", hiragana: "\u304C", katakana: "\u30AC" },
        { romaji: "gi", hiragana: "\u304E", katakana: "\u30AE" },
        { romaji: "gu", hiragana: "\u3050", katakana: "\u30B0" },
        { romaji: "ge", hiragana: "\u3052", katakana: "\u30B2" },
        { romaji: "go", hiragana: "\u3054", katakana: "\u30B4" },
        { romaji: "za", hiragana: "\u3056", katakana: "\u30B6" },
        { romaji: "ji", hiragana: "\u3058", katakana: "\u30B8" },
        { romaji: "zu", hiragana: "\u305A", katakana: "\u30BA" },
        { romaji: "ze", hiragana: "\u305C", katakana: "\u30BC" },
        { romaji: "zo", hiragana: "\u305E", katakana: "\u30BE" },
        { romaji: "da", hiragana: "\u3060", katakana: "\u30C0" },
        { romaji: "di", hiragana: "\u3062", katakana: "\u30C2" },
        { romaji: "de", hiragana: "\u3067", katakana: "\u30C7" },
        { romaji: "do", hiragana: "\u3069", katakana: "\u30C9" },
        { romaji: "du", hiragana: "\u3065", katakana: "\u30C5" },
        { romaji: "ba", hiragana: "\u3070", katakana: "\u30D0" },
        { romaji: "bi", hiragana: "\u3073", katakana: "\u30D3" },
        { romaji: "bu", hiragana: "\u3076", katakana: "\u30D6" },
        { romaji: "be", hiragana: "\u3079", katakana: "\u30D9" },
        { romaji: "bo", hiragana: "\u307C", katakana: "\u30DC" },
        { romaji: "pa", hiragana: "\u3071", katakana: "\u30D1" },
        { romaji: "pi", hiragana: "\u3074", katakana: "\u30D4" },
        { romaji: "pu", hiragana: "\u3077", katakana: "\u30D7" },
        { romaji: "pe", hiragana: "\u307A", katakana: "\u30DA" },
        { romaji: "po", hiragana: "\u307D", katakana: "\u30DD" },
        { romaji: "kya", hiragana: "\u304D\u3083", katakana: "\u30AD\u30E3" },
        { romaji: "kyu", hiragana: "\u304D\u3085", katakana: "\u30AD\u30E5" },
        { romaji: "kyo", hiragana: "\u304D\u3087", katakana: "\u30AD\u30E7" },
        { romaji: "gya", hiragana: "\u304E\u3083", katakana: "\u30AE\u30E3" },
        { romaji: "gyu", hiragana: "\u304E\u3085", katakana: "\u30AE\u30E5" },
        { romaji: "gyo", hiragana: "\u304E\u3087", katakana: "\u30AE\u30E7" },
        { romaji: "sha", hiragana: "\u3057\u3083", katakana: "\u30B7\u30E3" },
        { romaji: "shu", hiragana: "\u3057\u3085", katakana: "\u30B7\u30E5" },
        { romaji: "sho", hiragana: "\u3057\u3087", katakana: "\u30B7\u30E7" },
        { romaji: "ja", hiragana: "\u3058\u3083", katakana: "\u30B8\u30E3" },
        { romaji: "ju", hiragana: "\u3058\u3085", katakana: "\u30B8\u30E5" },
        { romaji: "jo", hiragana: "\u3058\u3087", katakana: "\u30B8\u30E7" },
        { romaji: "cha", hiragana: "\u3061\u3083", katakana: "\u30C1\u30E3" },
        { romaji: "chu", hiragana: "\u3061\u3085", katakana: "\u30C1\u30E5" },
        { romaji: "cho", hiragana: "\u3061\u3087", katakana: "\u30C1\u30E7" },
        { romaji: "nya", hiragana: "\u306B\u3083", katakana: "\u30CB\u30E3" },
        { romaji: "nyu", hiragana: "\u306B\u3085", katakana: "\u30CB\u30E5" },
        { romaji: "nyo", hiragana: "\u306B\u3087", katakana: "\u30CB\u30E7" },
        { romaji: "hya", hiragana: "\u3072\u3083", katakana: "\u30D2\u30E3" },
        { romaji: "hyu", hiragana: "\u3072\u3085", katakana: "\u30D2\u30E5" },
        { romaji: "hyo", hiragana: "\u3072\u3087", katakana: "\u30D2\u30E7" },
        { romaji: "bya", hiragana: "\u3073\u3083", katakana: "\u30D3\u30E3" },
        { romaji: "byu", hiragana: "\u3073\u3085", katakana: "\u30D3\u30E5" },
        { romaji: "byo", hiragana: "\u3073\u3087", katakana: "\u30D3\u30E7" },
        { romaji: "pya", hiragana: "\u3074\u3083", katakana: "\u30D4\u30E3" },
        { romaji: "pyu", hiragana: "\u3074\u3085", katakana: "\u30D4\u30E5" },
        { romaji: "pyo", hiragana: "\u3074\u3087", katakana: "\u30D4\u30E7" },
        { romaji: "mya", hiragana: "\u307F\u3083", katakana: "\u30DF\u30E3" },
        { romaji: "myu", hiragana: "\u307F\u3085", katakana: "\u30DF\u30E5" },
        { romaji: "myo", hiragana: "\u307F\u3087", katakana: "\u30DF\u30E7" },
        { romaji: "rya", hiragana: "\u308A\u3083", katakana: "\u30EA\u30E3" },
        { romaji: "ryu", hiragana: "\u308A\u3085", katakana: "\u30EA\u30E5" },
        { romaji: "ryo", hiragana: "\u308A\u3087", katakana: "\u30EA\u30E7" }
      ];
      YOON_SET = /* @__PURE__ */ new Set([
        "kya",
        "kyu",
        "kyo",
        "gya",
        "gyu",
        "gyo",
        "sha",
        "shu",
        "sho",
        "ja",
        "ju",
        "jo",
        "cha",
        "chu",
        "cho",
        "nya",
        "nyu",
        "nyo",
        "hya",
        "hyu",
        "hyo",
        "bya",
        "byu",
        "byo",
        "pya",
        "pyu",
        "pyo",
        "mya",
        "myu",
        "myo",
        "rya",
        "ryu",
        "ryo"
      ]);
      DAKUTEN_SET = /* @__PURE__ */ new Set([
        "ga",
        "gi",
        "gu",
        "ge",
        "go",
        "za",
        "ji",
        "zu",
        "ze",
        "zo",
        "da",
        "di",
        "de",
        "do",
        "du",
        "ba",
        "bi",
        "bu",
        "be",
        "bo",
        "pa",
        "pi",
        "pu",
        "pe",
        "po"
      ]);
      STORAGE_KEY = "kanaQuizTrainer.v1";
      MAX_DRAWINGS_PER_KANA = 16;
      DAILY_HISTORY_LIMIT = 120;
    }
  });

  // js/data/wordsData.js
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
  var baseWords, yearWords, timeWords, ageWords, wordsData;
  var init_wordsData = __esm({
    "js/data/wordsData.js"() {
      baseWords = [
        makeWordEntry({ id: "word-daigaku", japanese: "\u3060\u3044\u304C\u304F", romaji: "daigaku", meanings: ["college", "university", "uni"], category: "school" }),
        makeWordEntry({ id: "word-kookoo", japanese: "\u3053\u3046\u3053\u3046", romaji: "kookoo", meanings: ["high school"], category: "school" }),
        makeWordEntry({ id: "word-gakusee", japanese: "\u304C\u304F\u305B\u3044", romaji: "gakusee", meanings: ["student", "pupil"], category: "school" }),
        makeWordEntry({ id: "word-daigakusee", japanese: "\u3060\u3044\u304C\u304F\u305B\u3044", romaji: "daigakusee", meanings: ["college student"], category: "school" }),
        makeWordEntry({ id: "word-ryuugakusee", japanese: "\u308A\u3085\u3046\u304C\u304F\u305B\u3044", romaji: "ryuugakusee", meanings: ["international student", "foreign student", "exchange student"], category: "school" }),
        makeWordEntry({ id: "word-sensee", japanese: "\u305B\u3093\u305B\u3044", romaji: "sensee", meanings: ["teacher", "instructor", "professor"], category: "school" }),
        makeWordEntry({ id: "word-senkoo", japanese: "\u305B\u3093\u3053\u3046", romaji: "senkoo", meanings: ["major"], category: "school" }),
        makeWordEntry({ id: "word-watashi", japanese: "\u308F\u305F\u3057", romaji: "watashi", meanings: ["i"], category: "people" }),
        makeWordEntry({ id: "word-tomodachi", japanese: "\u3068\u3082\u3060\u3061", romaji: "tomodachi", meanings: ["friend"], category: "people" }),
        makeWordEntry({ id: "word-san", japanese: "\u3055\u3093", romaji: "san", meanings: ["mr", "ms", "mr/ms"], category: "people" }),
        makeWordEntry({ id: "word-jin", japanese: "\u3058\u3093", romaji: "jin", meanings: ["people"], category: "people" }),
        makeWordEntry({ id: "word-nihonjin", japanese: "\u306B\u307B\u3093\u3058\u3093", romaji: "nihonjin", meanings: ["japanese people", "japanese person"], category: "people" }),
        makeWordEntry({ id: "word-ima", japanese: "\u3044\u307E", romaji: "ima", meanings: ["now"], category: "time" }),
        makeWordEntry({ id: "word-gozen", japanese: "\u3054\u305C\u3093", romaji: "gozen", meanings: ["a.m.", "am", "morning", "before noon"], category: "time" }),
        makeWordEntry({ id: "word-gogo", japanese: "\u3054\u3054", romaji: "gogo", meanings: ["p.m.", "pm", "afternoon"], category: "time" }),
        makeWordEntry({ id: "word-han", japanese: "\u306F\u3093", romaji: "han", meanings: ["half"], category: "time" }),
        makeWordEntry({ id: "word-nihon", japanese: "\u306B\u307B\u3093", romaji: "nihon", meanings: ["japan", "japanese nation"], category: "countries" }),
        makeWordEntry({ id: "word-amerika", japanese: "\u30A2\u30E1\u30EA\u30AB", romaji: "amerika", meanings: ["usa", "us", "u.s.a", "u.s.", "united states", "united states of america", "america", "the states"], category: "countries" }),
        makeWordEntry({ id: "word-go", japanese: "\u3054", romaji: "go", meanings: ["language"], category: "core" }),
        makeWordEntry({ id: "word-sai", japanese: "\u3055\u3044", romaji: "sai", meanings: ["years old"], category: "core" }),
        makeWordEntry({ id: "word-denwa", japanese: "\u3067\u3093\u308F", romaji: "denwa", meanings: ["telephone", "phone", "telephone call", "call"], category: "core" }),
        makeWordEntry({ id: "word-bangoo", japanese: "\u3070\u3093\u3054\u3046", romaji: "bangoo", meanings: ["number"], category: "core" }),
        makeWordEntry({ id: "word-namae", japanese: "\u306A\u307E\u3048", romaji: "namae", meanings: ["name"], category: "core" }),
        makeWordEntry({ id: "word-nan-nani", japanese: "\u306A\u3093/\u306A\u306B", romaji: "nan/nani", meanings: ["what", "which thing"], category: "core" }),
        makeWordEntry({ id: "word-anoo", japanese: "\u3042\u306E\u3046", romaji: "anoo", meanings: ["um"], category: "core" }),
        makeWordEntry({ id: "word-hai", japanese: "\u306F\u3044", romaji: "hai", meanings: ["yes"], category: "core" }),
        makeWordEntry({ id: "word-soo-desu", japanese: "\u305D\u3046\u3067\u3059", romaji: "soo desu", meanings: ["thats right", "that's right"], category: "core" }),
        makeWordEntry({ id: "word-soo-desu-ka", japanese: "\u305D\u3046\u3067\u3059\u304B", romaji: "soo desu ka", meanings: ["i see", "is that so"], category: "core" }),
        makeWordEntry({ id: "word-igirisu", japanese: "\u30A4\u30AE\u30EA\u30B9", romaji: "igirisu", meanings: ["britain", "uk", "united kingdom"], category: "countries" }),
        makeWordEntry({ id: "word-oosutoria", japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2", romaji: "oosutoria", meanings: ["australia"], category: "countries" }),
        makeWordEntry({ id: "word-kankoku", japanese: "\u304B\u3093\u3053\u304F", romaji: "kankoku", meanings: ["korea"], category: "countries" }),
        makeWordEntry({ id: "word-kanada", japanese: "\u30AB\u30CA\u30C0", romaji: "kanada", meanings: ["canada"], category: "countries" }),
        makeWordEntry({ id: "word-chuugoku", japanese: "\u3061\u3085\u3046\u3054\u304F", romaji: "chuugoku", meanings: ["china"], category: "countries" }),
        makeWordEntry({ id: "word-indo", japanese: "\u30A4\u30F3\u30C9", romaji: "indo", meanings: ["india"], category: "countries" }),
        makeWordEntry({ id: "word-ejiputo", japanese: "\u30A8\u30B8\u30D7\u30C8", romaji: "ejiputo", meanings: ["egypt"], category: "countries" }),
        makeWordEntry({ id: "word-firipin", japanese: "\u30D5\u30A3\u30EA\u30D4\u30F3", romaji: "firipin", meanings: ["philippines", "philippiness"], category: "countries" }),
        makeWordEntry({ id: "word-ajia-kenkyuu", japanese: "\u3042\u3058\u3042 \u3051\u3093\u304D\u3085\u3046", romaji: "ajia kenkyuu", meanings: ["asian studies"], category: "majors" }),
        makeWordEntry({ id: "word-keezai", japanese: "\u3051\u3044\u3056\u3044", romaji: "keezai", meanings: ["economics"], category: "majors" }),
        makeWordEntry({ id: "word-koogaku", japanese: "\u3053\u3046\u304C\u304F", romaji: "koogaku", meanings: ["engineering"], category: "majors" }),
        makeWordEntry({ id: "word-kokusaikankee", japanese: "\u3053\u304F\u3055\u3044\u304B\u3093\u3051\u3044", romaji: "kokusaikankee", meanings: ["international relations"], category: "majors" }),
        makeWordEntry({ id: "word-kanpyuutaa", japanese: "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC", romaji: "kanpyuutaa", meanings: ["computer"], category: "majors" }),
        makeWordEntry({ id: "word-seeji", japanese: "\u305B\u3044\u3058", romaji: "seeji", meanings: ["politics"], category: "majors" }),
        makeWordEntry({ id: "word-seebutsugaku", japanese: "\u305B\u3044\u3076\u3064\u304C\u304F", romaji: "seebutsugaku", meanings: ["biology"], category: "majors" }),
        makeWordEntry({ id: "word-bijinesu", japanese: "\u30D3\u30B8\u30CD\u30B9", romaji: "bijinesu", meanings: ["business"], category: "majors" }),
        makeWordEntry({ id: "word-bungaku", japanese: "\u3076\u3093\u304C\u304F", romaji: "bungaku", meanings: ["literature"], category: "majors" }),
        makeWordEntry({ id: "word-rekishi", japanese: "\u308C\u304D\u3057", romaji: "rekishi", meanings: ["history"], category: "majors" }),
        makeWordEntry({ id: "word-isha", japanese: "\u3044\u3057\u3083", romaji: "isha", meanings: ["doctor"], category: "jobs" }),
        makeWordEntry({ id: "word-kaishain", japanese: "\u304B\u3044\u3057\u3083\u3044\u3093", romaji: "kaishain", meanings: ["office worker"], category: "jobs" }),
        makeWordEntry({ id: "word-kangoshi", japanese: "\u304B\u3093\u3054\u3057", romaji: "kangoshi", meanings: ["nurse"], category: "jobs" }),
        makeWordEntry({ id: "word-kookoosee", japanese: "\u3053\u3046\u3053\u3046\u305B\u3044", romaji: "kookoosee", meanings: ["high school student"], category: "jobs" }),
        makeWordEntry({ id: "word-shufu", japanese: "\u3057\u3085\u3075", romaji: "shufu", meanings: ["housewife"], category: "jobs" }),
        makeWordEntry({ id: "word-daigakuinsee", japanese: "\u3060\u3044\u304C\u304F\u3044\u3093\u305B\u3044", romaji: "daigakuinsee", meanings: ["graduate student"], category: "jobs" }),
        makeWordEntry({ id: "word-bangoshi", japanese: "\u3079\u3093\u3054\u3057", romaji: "bangoshi", meanings: ["lawyer"], category: "jobs" }),
        makeWordEntry({ id: "word-okaasan", japanese: "\u304A\u304B\u3042\u3055\u3093", romaji: "okaasan", meanings: ["mother"], category: "family" }),
        makeWordEntry({ id: "word-otoosan", japanese: "\u304A\u3068\u3046\u3055\u3093", romaji: "otoosan", meanings: ["father"], category: "family" }),
        makeWordEntry({ id: "word-oneesan", japanese: "\u304A\u306D\u3048\u3055\u3093", romaji: "oneesan", meanings: ["older sister"], category: "family" }),
        makeWordEntry({ id: "word-oniisan", japanese: "\u304A\u306B\u3044\u3055\u3093", romaji: "oniisan", meanings: ["older brother"], category: "family" }),
        makeWordEntry({ id: "word-imooto", japanese: "\u3044\u3082\u3046\u3068", romaji: "imooto", meanings: ["younger sister"], category: "family" }),
        makeWordEntry({ id: "word-otooto", japanese: "\u304A\u3068\u3046\u3068", romaji: "otooto", meanings: ["younger brother"], category: "family" })
      ];
      yearWords = [
        [1, "\u3044\u3061\u306D\u3093\u305B\u3044", "ichinensee", "first year student"],
        [2, "\u306B\u306D\u3093\u305B\u3044", "ninensee", "second year student"],
        [3, "\u3055\u3093\u306D\u3093\u305B\u3044", "sannensee", "third year student"],
        [4, "\u3088\u306D\u3093\u305B\u3044", "yonnensee", "fourth year student"],
        [5, "\u3054\u306D\u3093\u305B\u3044", "gonensee", "fifth year student"]
      ].map(([year, japanese, romaji, meaning]) => makeWordEntry({
        id: `word-year-${year}`,
        japanese,
        romaji,
        meanings: [meaning],
        category: "school"
      }));
      timeWords = [
        ["\u306B\u3058 \u3055\u3093\u3058\u3085\u3046\u3088\u3093\u3077\u3093", "niji sanjuuyonpun", ["2:34", "2 34"]],
        ["\u3088\u3058 \u3058\u3085\u3046\u304D\u3085\u3046\u3075\u3093", "yoji juukyuufun", ["4:19", "4 19", "16:19", "16 19"]],
        ["\u3057\u3061\u3058 \u306F\u3093", "shichiji han", ["7:30", "7 30"]],
        ["\u3058\u3085\u3046\u3044\u3061\u3058 \u3054\u3075\u3093", "juuichiji gofun", ["11:05", "11 05"]],
        ["\u304F\u3058 \u3088\u3093\u3058\u3085\u3063\u3077\u3093", "kuji yonjuppun", ["9:40", "9 40"]]
      ].map(([japanese, romaji, meanings], index) => makeWordEntry({
        id: `word-time-${index + 1}`,
        japanese,
        romaji,
        meanings,
        category: "time"
      }));
      ageWords = [5, 8, 12, 17, 20, 23, 31, 44, 58, 67, 75, 88].map((age) => makeWordEntry({
        id: `word-age-${age}`,
        japanese: `${age}\u3055\u3044`,
        romaji: `${age} sai`,
        meanings: [`${age} years old`, `${age}`],
        category: "core"
      }));
      wordsData = [
        ...baseWords,
        ...yearWords,
        ...timeWords,
        ...ageWords
      ];
    }
  });

  // js/data/kanjiData.js
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
  var kanjiData;
  var init_kanjiData = __esm({
    "js/data/kanjiData.js"() {
      kanjiData = [
        makeKanjiEntry({ id: "kanji-ichi", kanji: "\u4E00", meanings: ["one", "1", "single", "first"], onyomi: ["ichi"], kunyomi: ["hito(tsu)"], romaji: ["ichi", "hitotsu"] }),
        makeKanjiEntry({ id: "kanji-ni", kanji: "\u4E8C", meanings: ["two", "2", "double", "second"], onyomi: ["ni"], kunyomi: ["futa(tsu)"], romaji: ["ni", "futatsu"] }),
        makeKanjiEntry({ id: "kanji-san", kanji: "\u4E09", meanings: ["three", "3", "triple", "third"], onyomi: ["san"], kunyomi: ["mit(tsu)"], romaji: ["san", "mittsu"] }),
        makeKanjiEntry({ id: "kanji-yon", kanji: "\u56DB", meanings: ["four", "4", "fourth"], onyomi: ["shi"], kunyomi: ["yon", "yo(tsu)"], romaji: ["shi", "yon", "yottsu"] }),
        makeKanjiEntry({ id: "kanji-go", kanji: "\u4E94", meanings: ["five", "5", "fifth"], onyomi: ["go"], kunyomi: ["itsu(tsu)"], romaji: ["go", "itsutsu"] }),
        makeKanjiEntry({ id: "kanji-roku", kanji: "\u516D", meanings: ["six", "6", "sixth"], onyomi: ["roku"], kunyomi: ["mut(tsu)"], romaji: ["roku", "muttsu"] }),
        makeKanjiEntry({ id: "kanji-nana", kanji: "\u4E03", meanings: ["seven", "7", "seventh"], onyomi: ["shichi"], kunyomi: ["nana(tsu)"], romaji: ["shichi", "nana", "nanatsu"] }),
        makeKanjiEntry({ id: "kanji-hachi", kanji: "\u516B", meanings: ["eight", "8", "eighth"], onyomi: ["hachi"], kunyomi: ["ya(tsu)"], romaji: ["hachi", "yattsu"] }),
        makeKanjiEntry({ id: "kanji-kyuu", kanji: "\u4E5D", meanings: ["nine", "9", "ninth"], onyomi: ["kyuu", "ku"], kunyomi: ["kokono(tsu)"], romaji: ["kyuu", "ku", "kokonotsu"] }),
        makeKanjiEntry({ id: "kanji-juu", kanji: "\u5341", meanings: ["ten", "10", "tenth"], onyomi: ["juu"], kunyomi: ["too"], romaji: ["juu", "too"] })
      ];
    }
  });

  // js/dom/elements.js
  function getElements() {
    const canvasHiragana = document.getElementById("drawCanvasHiragana");
    const canvasKatakana = document.getElementById("drawCanvasKatakana");
    return {
      datasetSelect: document.getElementById("datasetSelect"),
      scriptSelect: document.getElementById("scriptSelect"),
      modeSelect: document.getElementById("modeSelect"),
      writingScriptGroup: document.getElementById("writingScriptGroup"),
      writingScriptSelect: document.getElementById("writingScriptSelect"),
      kanaSetSelect: document.getElementById("kanaSetSelect"),
      practiceStrategySelect: document.getElementById("practiceStrategySelect"),
      helperToggleGroup: document.getElementById("helperToggleGroup"),
      helperToggle: document.getElementById("helperToggle"),
      newQuestionBtn: document.getElementById("newQuestionBtn"),
      promptElement: document.getElementById("prompt"),
      promptHelper: document.getElementById("promptHelper"),
      queueMeta: document.getElementById("queueMeta"),
      playAudioBtn: document.getElementById("playAudioBtn"),
      muteAudioBtn: document.getElementById("muteAudioBtn"),
      typingArea: document.getElementById("typingArea"),
      drawingArea: document.getElementById("drawingArea"),
      drawGuideToggle: document.getElementById("drawGuideToggle"),
      answerInputLabel: document.getElementById("answerInputLabel"),
      answerInput: document.getElementById("answerInput"),
      quickAnswerOptions: document.getElementById("quickAnswerOptions"),
      checkBtn: document.getElementById("checkBtn"),
      revealBtn: document.getElementById("revealBtn"),
      clearCanvasBtn: document.getElementById("clearCanvasBtn"),
      markRightBtn: document.getElementById("markRightBtn"),
      markWrongBtn: document.getElementById("markWrongBtn"),
      resultElement: document.getElementById("result"),
      typingRightCountElement: document.getElementById("typingRightCount"),
      typingWrongCountElement: document.getElementById("typingWrongCount"),
      drawingRightCountElement: document.getElementById("drawingRightCount"),
      drawingWrongCountElement: document.getElementById("drawingWrongCount"),
      backlogTabBtn: document.getElementById("backlogTabBtn"),
      dailyProgressTabBtn: document.getElementById("dailyProgressTabBtn"),
      installAppBtn: document.getElementById("installAppBtn"),
      exportDataBtn: document.getElementById("exportDataBtn"),
      importDataBtn: document.getElementById("importDataBtn"),
      importDataInput: document.getElementById("importDataInput"),
      openSyncBtn: document.getElementById("openSyncBtn"),
      resetAllDataBtn: document.getElementById("resetAllDataBtn"),
      backlogPanel: document.getElementById("backlogPanel"),
      datasetBacklogFallback: document.getElementById("datasetBacklogFallback"),
      progressPanel: document.getElementById("progressPanel"),
      progressOverviewTabBtn: document.getElementById("progressOverviewTabBtn"),
      progressTrendsTabBtn: document.getElementById("progressTrendsTabBtn"),
      progressCompareTabBtn: document.getElementById("progressCompareTabBtn"),
      progressSyncTabBtn: document.getElementById("progressSyncTabBtn"),
      progressOverviewSection: document.getElementById("progressOverviewSection"),
      progressTrendsSection: document.getElementById("progressTrendsSection"),
      progressCompareSection: document.getElementById("progressCompareSection"),
      progressSyncSection: document.getElementById("progressSyncSection"),
      progressOverviewBody: document.getElementById("progressOverviewBody"),
      progressTrendsBody: document.getElementById("progressTrendsBody"),
      progressCompareBody: document.getElementById("progressCompareBody"),
      progressSyncBody: document.getElementById("progressSyncBody"),
      toggleOverviewSectionBtn: document.getElementById("toggleOverviewSectionBtn"),
      toggleTrendsSectionBtn: document.getElementById("toggleTrendsSectionBtn"),
      toggleCompareSectionBtn: document.getElementById("toggleCompareSectionBtn"),
      toggleSyncSectionBtn: document.getElementById("toggleSyncSectionBtn"),
      backlogStatusFilter: document.getElementById("backlogStatusFilter"),
      backlogScriptFilterLabel: document.getElementById("backlogScriptFilterLabel"),
      backlogScriptFilter: document.getElementById("backlogScriptFilter"),
      backlogWeaknessFilterLabel: document.getElementById("backlogWeaknessFilterLabel"),
      backlogWeaknessFilter: document.getElementById("backlogWeaknessFilter"),
      backlogMinAttemptsFilter: document.getElementById("backlogMinAttemptsFilter"),
      backlogCompactToggle: document.getElementById("backlogCompactToggle"),
      resetBacklogFiltersBtn: document.getElementById("resetBacklogFiltersBtn"),
      compareDayASelect: document.getElementById("compareDayASelect"),
      compareDayBSelect: document.getElementById("compareDayBSelect"),
      dailyGoalTotalInput: document.getElementById("dailyGoalTotalInput"),
      dailyGoalTypingInput: document.getElementById("dailyGoalTypingInput"),
      dailyGoalDrawingInput: document.getElementById("dailyGoalDrawingInput"),
      dailyGoalNormalInput: document.getElementById("dailyGoalNormalInput"),
      dailyGoalDakutenInput: document.getElementById("dailyGoalDakutenInput"),
      dailyGoalYoonInput: document.getElementById("dailyGoalYoonInput"),
      saveDailyGoalBtn: document.getElementById("saveDailyGoalBtn"),
      insightsGrid: document.getElementById("insightsGrid"),
      scriptHeatmap: document.getElementById("scriptHeatmap"),
      compareSummary: document.getElementById("compareSummary"),
      dailyHistoryTable: document.getElementById("dailyHistoryTable"),
      syncEmail: document.getElementById("syncEmail"),
      syncPassword: document.getElementById("syncPassword"),
      signUpBtn: document.getElementById("signUpBtn"),
      loginBtn: document.getElementById("loginBtn"),
      forgotPasswordBtn: document.getElementById("forgotPasswordBtn"),
      logoutBtn: document.getElementById("logoutBtn"),
      syncNowBtn: document.getElementById("syncNowBtn"),
      forcePullBtn: document.getElementById("forcePullBtn"),
      forcePushBtn: document.getElementById("forcePushBtn"),
      syncCard: document.getElementById("syncCard"),
      syncAccountInfo: document.getElementById("syncAccountInfo"),
      syncStatus: document.getElementById("syncStatus"),
      dailyProgressGraph: document.getElementById("dailyProgressGraph"),
      drawingGalleryDialog: document.getElementById("drawingGalleryDialog"),
      galleryTitle: document.getElementById("galleryTitle"),
      galleryBody: document.getElementById("galleryBody"),
      closeGalleryBtn: document.getElementById("closeGalleryBtn"),
      drawPaneTitlePrimary: document.getElementById("drawPaneTitlePrimary"),
      drawPaneTitleSecondary: document.getElementById("drawPaneTitleSecondary"),
      canvasHiragana,
      canvasKatakana,
      ctxHiragana: canvasHiragana.getContext("2d"),
      ctxKatakana: canvasKatakana.getContext("2d"),
      dailyProgressGraphCtx: document.getElementById("dailyProgressGraph").getContext("2d"),
      goalProgressBar: document.getElementById("goalProgressBar"),
      hintBtn: document.getElementById("hintBtn"),
      srsScheduleGraph: document.getElementById("srsScheduleGraph")
    };
  }
  var init_elements = __esm({
    "js/dom/elements.js"() {
    }
  });

  // js/core/utils.js
  function sanitizeRomaji(text) {
    let raw = "";
    if (typeof text === "string") {
      raw = text;
    } else if (text && typeof text === "object" && typeof text.answer === "string") {
      raw = text.answer;
    } else if (text == null) {
      raw = "";
    } else {
      raw = "";
    }
    return raw.trim().toLowerCase();
  }
  function normalizeLooseText(text) {
    return String(text || "").toLowerCase().trim().replace(/[’']/g, "").replace(/\s+/g, " ");
  }
  function normalizeEnglishAnswer(text) {
    return normalizeLooseText(text).replace(/[.;:,!?()[\]{}]/g, "").replace(/\b(the|a|an)\b/g, "").replace(/\s+/g, " ").trim();
  }
  function normalizeForgivingRomaji(text) {
    return sanitizeRomaji(text).replace(/-/g, "").replace(/ou/g, "oo").replace(/ei/g, "ee").replace(/sy/g, "sh").replace(/ty/g, "ch").replace(/si/g, "shi").replace(/ti/g, "chi").replace(/tu/g, "tsu").replace(/hu/g, "fu").replace(/zi/g, "ji").replace(/du/g, "zu");
  }
  function matchesAnyNormalizedAnswer(input, acceptedAnswers, normalizeFn = normalizeLooseText) {
    const normalizedInput = normalizeFn(input);
    if (!normalizedInput) {
      return false;
    }
    return acceptedAnswers.some((answer) => normalizeFn(answer) === normalizedInput);
  }
  function getTodayKey() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function asPercent(part, total) {
    if (total === 0) {
      return "-";
    }
    return `${Math.round(part / total * 100)}%`;
  }
  function formatDateLabel(dateKey) {
    const parsed = /* @__PURE__ */ new Date(`${dateKey}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      return dateKey;
    }
    return parsed.toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  var init_utils = __esm({
    "js/core/utils.js"() {
    }
  });

  // js/core/state.js
  function createDefaultBacklogFilters() {
    return {
      status: "all",
      script: "all",
      weakness: "all",
      minAttempts: 0,
      compact: false
    };
  }
  function createGenericBacklog(items, getId, getMeta = () => ({})) {
    return items.reduce((acc, item) => {
      const id = getId(item);
      acc[id] = {
        id,
        right: 0,
        wrong: 0,
        typingRight: 0,
        typingWrong: 0,
        drawingRight: 0,
        drawingWrong: 0,
        ...getMeta(item)
      };
      return acc;
    }, {});
  }
  function createBacklog(kanaData2) {
    return kanaData2.reduce((acc, item) => {
      acc[item.romaji] = {
        romaji: item.romaji,
        hiragana: item.hiragana,
        katakana: item.katakana,
        right: 0,
        wrong: 0,
        typingRight: 0,
        typingWrong: 0,
        drawingRight: 0,
        drawingWrong: 0,
        hiraganaTypingRight: 0,
        hiraganaTypingWrong: 0,
        hiraganaDrawingRight: 0,
        hiraganaDrawingWrong: 0,
        hiraganaRight: 0,
        hiraganaWrong: 0,
        katakanaTypingRight: 0,
        katakanaTypingWrong: 0,
        katakanaDrawingRight: 0,
        katakanaDrawingWrong: 0,
        katakanaRight: 0,
        katakanaWrong: 0
      };
      return acc;
    }, {});
  }
  function createBaseDatasetState({ backlog = {}, srsByItem = {} } = {}) {
    return {
      practiceStrategy: "srs",
      recentMistakes: [],
      recentTypingMistakes: [],
      recentDrawingMistakes: [],
      srsByItem,
      typingRightCount: 0,
      typingWrongCount: 0,
      drawingRightCount: 0,
      drawingWrongCount: 0,
      drawingsByItem: {},
      dailyStats: {},
      dailyCategoryStats: {},
      dailyDetailStats: {},
      confusionPairs: {},
      srsAccuracyWindow: {},
      backlog
    };
  }
  function createKanaDatasetState(kanaData2) {
    const srsByItem = kanaData2.reduce((acc, item) => {
      acc[item.romaji] = {
        dueAt: 0,
        intervalHours: 0,
        lastSeenAt: 0,
        lastCorrect: false
      };
      return acc;
    }, {});
    return createBaseDatasetState({
      backlog: createBacklog(kanaData2),
      srsByItem
    });
  }
  function createDatasetStateFromItems(items, getId, getMeta) {
    const srsByItem = items.reduce((acc, item) => {
      acc[getId(item)] = {
        dueAt: 0,
        intervalHours: 0,
        lastSeenAt: 0,
        lastCorrect: false
      };
      return acc;
    }, {});
    return createBaseDatasetState({
      backlog: createGenericBacklog(items, getId, getMeta),
      srsByItem
    });
  }
  function getDatasetStateForAlias(hostState, datasetId) {
    const selectedId = datasetId === DATASET_IDS.KANA ? DATASET_IDS.KANA : hostState.activeDataset && hostState.datasets[hostState.activeDataset] ? hostState.activeDataset : DATASET_IDS.KANA;
    return hostState.datasets[selectedId];
  }
  function defineKanaCompatibilityAliases(state) {
    const aliasDescriptors = {
      practiceStrategy: {
        get() {
          return getDatasetStateForAlias(this).practiceStrategy;
        },
        set(value) {
          getDatasetStateForAlias(this).practiceStrategy = value;
        }
      },
      recentMistakes: {
        get() {
          return getDatasetStateForAlias(this).recentMistakes;
        },
        set(value) {
          getDatasetStateForAlias(this).recentMistakes = Array.isArray(value) ? value : [];
        }
      },
      recentTypingMistakes: {
        get() {
          return getDatasetStateForAlias(this).recentTypingMistakes;
        },
        set(value) {
          getDatasetStateForAlias(this).recentTypingMistakes = Array.isArray(value) ? value : [];
        }
      },
      recentDrawingMistakes: {
        get() {
          return getDatasetStateForAlias(this).recentDrawingMistakes;
        },
        set(value) {
          getDatasetStateForAlias(this).recentDrawingMistakes = Array.isArray(value) ? value : [];
        }
      },
      srsByRomaji: {
        get() {
          return getDatasetStateForAlias(this).srsByItem;
        },
        set(value) {
          getDatasetStateForAlias(this).srsByItem = value && typeof value === "object" ? value : {};
        }
      },
      typingRightCount: {
        get() {
          return getDatasetStateForAlias(this).typingRightCount;
        },
        set(value) {
          getDatasetStateForAlias(this).typingRightCount = Number(value || 0);
        }
      },
      typingWrongCount: {
        get() {
          return getDatasetStateForAlias(this).typingWrongCount;
        },
        set(value) {
          getDatasetStateForAlias(this).typingWrongCount = Number(value || 0);
        }
      },
      drawingRightCount: {
        get() {
          return getDatasetStateForAlias(this).drawingRightCount;
        },
        set(value) {
          getDatasetStateForAlias(this).drawingRightCount = Number(value || 0);
        }
      },
      drawingWrongCount: {
        get() {
          return getDatasetStateForAlias(this).drawingWrongCount;
        },
        set(value) {
          getDatasetStateForAlias(this).drawingWrongCount = Number(value || 0);
        }
      },
      drawingsByKana: {
        get() {
          return getDatasetStateForAlias(this).drawingsByItem;
        },
        set(value) {
          getDatasetStateForAlias(this).drawingsByItem = value && typeof value === "object" ? value : {};
        }
      },
      dailyStats: {
        get() {
          return getDatasetStateForAlias(this).dailyStats;
        },
        set(value) {
          getDatasetStateForAlias(this).dailyStats = value && typeof value === "object" ? value : {};
        }
      },
      dailyCategoryStats: {
        get() {
          return getDatasetStateForAlias(this).dailyCategoryStats;
        },
        set(value) {
          getDatasetStateForAlias(this).dailyCategoryStats = value && typeof value === "object" ? value : {};
        }
      },
      dailyDetailStats: {
        get() {
          return getDatasetStateForAlias(this).dailyDetailStats;
        },
        set(value) {
          getDatasetStateForAlias(this).dailyDetailStats = value && typeof value === "object" ? value : {};
        }
      },
      confusionPairs: {
        get() {
          return getDatasetStateForAlias(this).confusionPairs;
        },
        set(value) {
          getDatasetStateForAlias(this).confusionPairs = value && typeof value === "object" ? value : {};
        }
      },
      srsAccuracyWindow: {
        get() {
          return getDatasetStateForAlias(this).srsAccuracyWindow;
        },
        set(value) {
          getDatasetStateForAlias(this).srsAccuracyWindow = value && typeof value === "object" ? value : {};
        }
      },
      backlog: {
        get() {
          return getDatasetStateForAlias(this).backlog;
        },
        set(value) {
          getDatasetStateForAlias(this).backlog = value && typeof value === "object" ? value : {};
        }
      }
    };
    Object.defineProperties(state, aliasDescriptors);
  }
  function createState(kanaData2) {
    const datasetsInput = Array.isArray(kanaData2) ? { kanaData: kanaData2, wordsData: [], kanjiData: [] } : kanaData2 || {};
    const resolvedKanaData = Array.isArray(datasetsInput.kanaData) ? datasetsInput.kanaData : [];
    const resolvedWordsData = Array.isArray(datasetsInput.wordsData) ? datasetsInput.wordsData : [];
    const resolvedKanjiData = Array.isArray(datasetsInput.kanjiData) ? datasetsInput.kanjiData : [];
    const state = {
      currentQuestion: null,
      nextQuestionTimer: null,
      activeDataset: DATASET_IDS.KANA,
      showWordHelper: false,
      showKanjiHelper: false,
      datasets: {
        [DATASET_IDS.KANA]: createKanaDatasetState(resolvedKanaData),
        [DATASET_IDS.WORDS]: createDatasetStateFromItems(resolvedWordsData, (item) => item.id, (item) => ({
          label: item.japanese,
          helperRomaji: item.helperRomaji || item.romaji || "",
          meanings: item.meanings || []
        })),
        [DATASET_IDS.KANJI]: createDatasetStateFromItems(resolvedKanjiData, (item) => item.id, (item) => ({
          label: item.kanji,
          romaji: item.romaji || [],
          meanings: item.meanings || []
        }))
      },
      audioMuted: false,
      drawGuideEnabled: true,
      dailyGoal: 25,
      dailyGoals: {
        total: 25,
        typing: 12,
        drawing: 8,
        normal: 10,
        dakuten: 6,
        yoon: 6
      },
      backlogFilters: createDefaultBacklogFilters(),
      backlogFiltersByDataset: {
        [DATASET_IDS.KANA]: createDefaultBacklogFilters(),
        [DATASET_IDS.WORDS]: createDefaultBacklogFilters(),
        [DATASET_IDS.KANJI]: createDefaultBacklogFilters()
      },
      installPromptSeen: false,
      lastSavedAt: 0,
      lastCloudSyncAt: 0,
      syncUserEmail: "",
      progressUiDayMarker: getTodayKey(),
      progressSubtab: "overview",
      progressCollapsedSections: {
        overview: false,
        trends: false,
        compare: false,
        sync: false
      }
    };
    defineKanaCompatibilityAliases(state);
    state.mutate = function mutate(patch) {
      Object.assign(this, patch);
    };
    return state;
  }
  var DATASET_IDS;
  var init_state = __esm({
    "js/core/state.js"() {
      init_utils();
      DATASET_IDS = {
        KANA: "kana",
        WORDS: "words",
        KANJI: "kanji"
      };
    }
  });

  // js/core/eventBus.js
  var EVENT_NAMES, _handlers, eventBus;
  var init_eventBus = __esm({
    "js/core/eventBus.js"() {
      EVENT_NAMES = Object.freeze({
        ANSWER_CORRECT: "answer:correct",
        ANSWER_WRONG: "answer:wrong",
        QUESTION_NEW: "question:new",
        SYNC_CONFLICT_APPLIED: "sync:conflictApplied",
        QUIZ_REQUEST_NEW: "quiz:requestNewQuestion",
        QUIZ_DATASET_CHANGED: "quiz:datasetChanged",
        QUIZ_MODE_CHANGED: "quiz:modeChanged",
        QUIZ_KANA_SET_CHANGED: "quiz:kanaSetChanged",
        QUIZ_STRATEGY_CHANGED: "quiz:strategyChanged",
        QUIZ_WRITING_SCRIPT_CHANGED: "quiz:writingScriptChanged",
        QUIZ_CHECK_ANSWER: "quiz:checkAnswer",
        QUIZ_QUICK_ANSWER: "quiz:quickAnswer",
        QUIZ_REVEAL_DRAWING: "quiz:revealDrawing",
        QUIZ_CLEAR_CANVAS: "quiz:clearCanvas",
        QUIZ_MARK_RIGHT: "quiz:markRight",
        QUIZ_MARK_WRONG: "quiz:markWrong",
        QUIZ_RESET_ALL: "quiz:resetAll",
        TAB_BACKLOG: "tab:backlog",
        TAB_PROGRESS: "tab:progress",
        TAB_SYNC: "tab:sync",
        PROGRESS_TAB_CHANGED: "progress:tabChanged",
        PROGRESS_SECTION_TOGGLED: "progress:sectionToggled",
        BACKLOG_FILTER_CHANGED: "backlog:filterChanged",
        BACKLOG_FILTER_RESET: "backlog:filterReset",
        SETTINGS_SAVE_GOAL: "settings:saveGoal",
        SETTINGS_HELPER_TOGGLE_CHANGED: "settings:helperToggleChanged",
        SETTINGS_DRAW_GUIDE_CHANGED: "settings:drawGuideChanged",
        DATA_EXPORT: "data:export",
        DATA_IMPORT: "data:import",
        AUDIO_PLAY: "audio:play",
        AUDIO_TOGGLE_MUTE: "audio:toggleMute",
        GALLERY_OPEN: "gallery:open",
        GALLERY_CLOSE: "gallery:close",
        UI_RESIZE: "ui:resize",
        UI_VISIBLE: "ui:visible",
        STATE_CHANGED: "state:changed"
      });
      _handlers = /* @__PURE__ */ new Map();
      eventBus = {
        /**
         * Subscribe to an event. Returns an unsubscribe function.
         * @param {string} event
         * @param {function} handler
         * @returns {function} unsubscribe
         */
        on(event, handler) {
          if (!_handlers.has(event)) {
            _handlers.set(event, /* @__PURE__ */ new Set());
          }
          _handlers.get(event).add(handler);
          return () => this.off(event, handler);
        },
        /**
         * Unsubscribe a specific handler from an event.
         * @param {string} event
         * @param {function} handler
         */
        off(event, handler) {
          const set = _handlers.get(event);
          if (set) {
            set.delete(handler);
          }
        },
        /**
         * Emit an event, invoking all registered handlers.
         * Errors in individual handlers are caught and logged without stopping other handlers.
         * @param {string} event
         * @param {*} data
         */
        emit(event, data) {
          const set = _handlers.get(event);
          if (!set || set.size === 0) {
            return;
          }
          set.forEach((handler) => {
            try {
              handler(data);
            } catch (err) {
              console.error(`[eventBus] Error in handler for "${event}":`, err);
            }
          });
        }
      };
    }
  });

  // js/core/ui.js
  function updateStats(elements, state) {
    elements.typingRightCountElement.textContent = String(state.typingRightCount);
    elements.typingWrongCountElement.textContent = String(state.typingWrongCount);
    elements.drawingRightCountElement.textContent = String(state.drawingRightCount);
    elements.drawingWrongCountElement.textContent = String(state.drawingWrongCount);
  }
  function resetResult(elements) {
    elements.resultElement.textContent = "";
    elements.resultElement.classList.remove("ok", "bad");
  }
  function getDefaultElements() {
    return {
      resultElement: document.getElementById("result")
    };
  }
  function isElementsShape(value) {
    return Boolean(value && typeof value === "object" && value.resultElement);
  }
  function showResult(arg1, arg2, arg3) {
    let elements;
    let message;
    let isCorrect;
    if (isElementsShape(arg1)) {
      elements = arg1;
      message = arg2;
      isCorrect = arg3;
    } else {
      elements = getDefaultElements();
      message = arg1;
      isCorrect = arg2;
    }
    if (!elements.resultElement) return;
    elements.resultElement.textContent = String(message != null ? message : "");
    elements.resultElement.classList.toggle("ok", Boolean(isCorrect));
    elements.resultElement.classList.toggle("bad", !Boolean(isCorrect));
  }
  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function showTypingMistake(arg1, arg2, arg3) {
    let elements;
    let userAnswer;
    let correctAnswer;
    if (isElementsShape(arg1)) {
      elements = arg1;
      userAnswer = arg2;
      correctAnswer = arg3;
    } else {
      elements = getDefaultElements();
      userAnswer = arg1;
      correctAnswer = arg2;
    }
    if (!elements.resultElement) return;
    const user = userAnswer ? userAnswer : "(blank)";
    const correct = correctAnswer || "-";
    elements.resultElement.innerHTML = `
    <div class="result-title">Not quite</div>
    <div class="result-compare">
      <div class="result-row">
        <span class="result-row-label">You typed</span>
        <span class="result-row-value">${escapeHtml(user)}</span>
      </div>
      <div class="result-row">
        <span class="result-row-label">Correct</span>
        <span class="result-row-value">${escapeHtml(correct)}</span>
      </div>
    </div>
  `;
    elements.resultElement.classList.remove("ok");
    elements.resultElement.classList.add("bad");
  }
  function setActiveProgressTab(elements, tabName) {
    const showBacklog = tabName === "backlog";
    elements.backlogPanel.classList.toggle("hidden", !showBacklog);
    elements.progressPanel.classList.toggle("hidden", showBacklog);
    elements.backlogTabBtn.classList.toggle("active", showBacklog);
    elements.dailyProgressTabBtn.classList.toggle("active", !showBacklog);
    elements.backlogTabBtn.setAttribute("aria-selected", String(showBacklog));
    elements.dailyProgressTabBtn.setAttribute("aria-selected", String(!showBacklog));
  }
  var init_ui = __esm({
    "js/core/ui.js"() {
    }
  });

  // js/features/backlog.js
  function getKanaCategory(romaji, YOON_SET2, DAKUTEN_SET2) {
    if (YOON_SET2.has(romaji)) return "yoon";
    if (DAKUTEN_SET2.has(romaji)) return "dakuten";
    return "normal";
  }
  function getCardStatus(stats) {
    const totalAttempts = stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong;
    if (totalAttempts === 0) return "";
    const typingAttempts = stats.typingRight + stats.typingWrong;
    const drawingAttempts = stats.drawingRight + stats.drawingWrong;
    const typingPositive = typingAttempts > 0 && stats.typingRight > stats.typingWrong;
    const drawingPositive = drawingAttempts > 0 && stats.drawingRight > stats.drawingWrong;
    const typingNegative = typingAttempts > 0 && stats.typingRight <= stats.typingWrong;
    const drawingNegative = drawingAttempts > 0 && stats.drawingRight <= stats.drawingWrong;
    const bothAttempted = typingAttempts > 0 && drawingAttempts > 0;
    if (bothAttempted && typingPositive && drawingPositive) {
      return "status-good";
    }
    if (!bothAttempted && (typingPositive || drawingPositive)) {
      return "status-mixed";
    }
    if (bothAttempted && typingNegative && drawingNegative || !bothAttempted && (typingNegative || drawingNegative)) {
      return "status-bad";
    }
    return "status-mixed";
  }
  function getTotalAttempts(stats) {
    return stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong;
  }
  function escapeHtml2(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function getScriptStats(row, scriptType) {
    if (scriptType === "hiragana") {
      return {
        typingRight: row.hiraganaTypingRight,
        typingWrong: row.hiraganaTypingWrong,
        drawingRight: row.hiraganaDrawingRight,
        drawingWrong: row.hiraganaDrawingWrong
      };
    }
    return {
      typingRight: row.katakanaTypingRight,
      typingWrong: row.katakanaTypingWrong,
      drawingRight: row.katakanaDrawingRight,
      drawingWrong: row.katakanaDrawingWrong
    };
  }
  function getDisplayRomaji(item, scriptType) {
    if (scriptType === "hiragana" && item.hiragana === "\u3092") {
      return "o";
    }
    if (scriptType === "katakana" && item.katakana === "\u30F2") {
      return "wo";
    }
    return item.romaji;
  }
  function renderBacklog({ kanaData: kanaData2, backlog, drawingsByKana, getKanaCategoryFn, filters }) {
    const activeFilters = filters || {
      status: "all",
      script: "all",
      weakness: "all",
      minAttempts: 0,
      compact: false
    };
    function passesFilters(stats) {
      const attempts = getTotalAttempts(stats);
      const status = getCardStatus(stats);
      const minAttempts = Math.max(0, Number(activeFilters.minAttempts || 0));
      if (attempts < minAttempts) {
        return false;
      }
      if (activeFilters.status === "unseen" && attempts > 0) {
        return false;
      }
      if (activeFilters.status === "weak" && status !== "status-bad" && status !== "status-mixed") {
        return false;
      }
      if (activeFilters.status === "strong" && status !== "status-good") {
        return false;
      }
      if (activeFilters.weakness === "typing" && !(stats.typingWrong > stats.typingRight)) {
        return false;
      }
      if (activeFilters.weakness === "drawing" && !(stats.drawingWrong > stats.drawingRight)) {
        return false;
      }
      return true;
    }
    function makeCard(kanaChar, romaji, row, scriptType) {
      const stats = getScriptStats(row, scriptType);
      if (!passesFilters(stats)) {
        return "";
      }
      const status = getCardStatus(stats);
      const drawingsCount = (drawingsByKana[kanaChar] || []).length;
      const compactClass = activeFilters.compact ? " compact" : "";
      return `<div class="kana-card ${status}${compactClass}">
      <div class="kana-char">${kanaChar}</div>
      <div class="kana-romaji">${romaji}</div>
      <div class="kana-stats">
        <div class="mode-row"><span class="mode-tag">T</span><span class="k-right">\u2713${stats.typingRight}</span><span class="k-wrong">\u2717${stats.typingWrong}</span></div>
        <div class="mode-row"><span class="mode-tag">D</span><span class="k-right">\u2713${stats.drawingRight}</span><span class="k-wrong">\u2717${stats.drawingWrong}</span></div>
      </div>
      <button type="button" class="btn-secondary view-drawings-btn" data-kana="${kanaChar}">Drawings (${drawingsCount})</button>
    </div>`;
    }
    function fillSection(prefix, category) {
      const items = kanaData2.filter((item) => getKanaCategoryFn(item.romaji) === category);
      const shouldShowHiragana = activeFilters.script === "all" || activeFilters.script === "hiragana";
      const shouldShowKatakana = activeFilters.script === "all" || activeFilters.script === "katakana";
      const hiraganaCards = shouldShowHiragana ? items.map((item) => {
        const row = backlog[item.romaji];
        return makeCard(item.hiragana, getDisplayRomaji(item, "hiragana"), row, "hiragana");
      }).filter(Boolean) : [];
      const katakanaCards = shouldShowKatakana ? items.map((item) => {
        const row = backlog[item.romaji];
        return makeCard(item.katakana, getDisplayRomaji(item, "katakana"), row, "katakana");
      }).filter(Boolean) : [];
      document.getElementById(prefix + "HiraganaGrid").innerHTML = shouldShowHiragana ? hiraganaCards.length > 0 ? hiraganaCards.join("") : '<div class="kana-card empty-card">No matches</div>' : "";
      document.getElementById(prefix + "KatakanaGrid").innerHTML = shouldShowKatakana ? katakanaCards.length > 0 ? katakanaCards.join("") : '<div class="kana-card empty-card">No matches</div>' : "";
    }
    fillSection("normal", "normal");
    fillSection("dakuten", "dakuten");
    fillSection("yoon", "yoon");
    const grids = document.querySelectorAll(
      "#normalHiraganaGrid, #normalKatakanaGrid, #dakutenHiraganaGrid, #dakutenKatakanaGrid, #yoonHiraganaGrid, #yoonKatakanaGrid"
    );
    const allEmpty = Array.from(grids).every((g2) => {
      const cards = g2.querySelectorAll(".kana-card:not(.empty-card)");
      return cards.length === 0;
    });
    const existingMsg = document.getElementById("backlogEmptyState");
    if (allEmpty) {
      if (!existingMsg) {
        const msg = document.createElement("div");
        msg.id = "backlogEmptyState";
        msg.className = "backlog-empty-state";
        msg.textContent = "No kana match your current filters. Try adjusting the filters above.";
        const panel = document.getElementById("backlogPanel");
        if (panel) panel.appendChild(msg);
      }
    } else {
      if (existingMsg) existingMsg.remove();
    }
  }
  function renderDatasetBacklog({ datasetId, items, backlog, drawingsByItem, container }) {
    if (!container) {
      return;
    }
    function passesFilters(row, item) {
      const attempts = getTotalAttempts(row);
      const minAttempts = Math.max(0, Number(container.dataset.minAttempts || 0));
      if (attempts < minAttempts) {
        return false;
      }
      const statusFilter = container.dataset.statusFilter || "all";
      const status = getCardStatus(row);
      if (statusFilter === "unseen" && attempts > 0) {
        return false;
      }
      if (statusFilter === "weak" && status !== "status-bad" && status !== "status-mixed") {
        return false;
      }
      if (statusFilter === "strong" && status !== "status-good") {
        return false;
      }
      const weaknessFilter = container.dataset.weaknessFilter || "all";
      if (weaknessFilter === "typing" && !(row.typingWrong > row.typingRight)) {
        return false;
      }
      if (weaknessFilter === "drawing" && !(row.drawingWrong > row.drawingRight)) {
        return false;
      }
      const categoryFilter = container.dataset.categoryFilter || "all";
      const category = String(item.category || "core");
      if (categoryFilter !== "all" && category !== categoryFilter) {
        return false;
      }
      return true;
    }
    const cards = items.map((item) => {
      const itemId = item.id;
      const row = backlog[itemId];
      if (!row) {
        return "";
      }
      if (!passesFilters(row, item)) {
        return "";
      }
      const status = getCardStatus(row);
      const attempts = getTotalAttempts(row);
      const helper = datasetId === "words" ? `${escapeHtml2(item.romaji)} \u2022 ${escapeHtml2(item.meanings[0] || "")}` : `${escapeHtml2((item.romaji || []).join(", "))} \u2022 ${escapeHtml2(item.meanings[0] || "")}`;
      const primary = datasetId === "words" ? item.japanese : item.kanji;
      const category = String(item.category || "core");
      const drawingsCount = datasetId === "kanji" ? (drawingsByItem[primary] || []).length : 0;
      return `
      <div class="kana-card ${status}">
        <div class="kana-char">${escapeHtml2(primary)}</div>
        <div class="kana-romaji">${helper}</div>
        <div class="kana-romaji">Category: ${escapeHtml2(category)}</div>
        <div class="kana-stats">
          <div class="mode-row"><span class="mode-tag">T</span><span class="k-right">\u2713${row.typingRight}</span><span class="k-wrong">\u2717${row.typingWrong}</span></div>
          ${datasetId === "words" ? "" : `<div class="mode-row"><span class="mode-tag">D</span><span class="k-right">\u2713${row.drawingRight}</span><span class="k-wrong">\u2717${row.drawingWrong}</span></div>`}
        </div>
        <div class="kana-romaji">Attempts: ${attempts}</div>
        ${datasetId === "kanji" ? `<button type="button" class="btn-secondary view-drawings-btn" data-kana="${escapeHtml2(primary)}">Drawings (${drawingsCount})</button>` : ""}
      </div>
    `;
    }).filter(Boolean);
    container.innerHTML = cards.length ? `<div class="kana-grid">${cards.join("")}</div>` : `<div class="compare-empty">No ${datasetId} attempts yet. Start a few rounds to build progress.</div>`;
    container.classList.remove("hidden");
  }
  function updateBacklog({ backlog, romaji, wasCorrect, scriptContext, answerMode }) {
    const row = backlog[romaji];
    if (!row) {
      return;
    }
    if (wasCorrect) {
      row.right += 1;
    } else {
      row.wrong += 1;
    }
    if (answerMode === "typing") {
      if (wasCorrect) {
        row.typingRight += 1;
      } else {
        row.typingWrong += 1;
      }
    } else if (answerMode === "drawing") {
      if (wasCorrect) {
        row.drawingRight += 1;
      } else {
        row.drawingWrong += 1;
      }
    }
    if (scriptContext === "hiragana" || scriptContext === "both") {
      if (answerMode === "typing") {
        if (wasCorrect) {
          row.hiraganaTypingRight += 1;
        } else {
          row.hiraganaTypingWrong += 1;
        }
      } else if (answerMode === "drawing") {
        if (wasCorrect) {
          row.hiraganaDrawingRight += 1;
        } else {
          row.hiraganaDrawingWrong += 1;
        }
      }
      if (wasCorrect) {
        row.hiraganaRight += 1;
      } else {
        row.hiraganaWrong += 1;
      }
    }
    if (scriptContext === "katakana" || scriptContext === "both") {
      if (answerMode === "typing") {
        if (wasCorrect) {
          row.katakanaTypingRight += 1;
        } else {
          row.katakanaTypingWrong += 1;
        }
      } else if (answerMode === "drawing") {
        if (wasCorrect) {
          row.katakanaDrawingRight += 1;
        } else {
          row.katakanaDrawingWrong += 1;
        }
      }
      if (wasCorrect) {
        row.katakanaRight += 1;
      } else {
        row.katakanaWrong += 1;
      }
    }
  }
  function getQuestionWeight(backlog, item) {
    const entry = backlog[item.romaji];
    if (!entry || entry.right + entry.wrong === 0) {
      return 4;
    }
    return Math.max(1, 3 + entry.wrong - entry.right);
  }
  var init_backlog = __esm({
    "js/features/backlog.js"() {
    }
  });

  // js/features/quiz.js
  function pickQuestion({
    kanaData: kanaData2,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList = null,
    avoidRomaji = null
  }) {
    const basePool = kanaSet === "all" ? kanaData2 : kanaData2.filter((item) => getKanaCategoryFn(item.romaji) === kanaSet);
    const safeBasePool = basePool.length > 0 ? basePool : kanaData2;
    let pool = safeBasePool;
    if (Array.isArray(preferredRomajiList) && preferredRomajiList.length > 0) {
      const preferredSet = new Set(preferredRomajiList);
      const targeted = safeBasePool.filter((item) => preferredSet.has(item.romaji));
      if (targeted.length > 0) {
        pool = targeted;
      }
    }
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
    const totalWeight = weights.reduce((sum2, weight) => sum2 + weight, 0);
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
    const totalWeight = weights.reduce((sum2, weight) => sum2 + weight, 0);
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
    if (scriptName === "Hiragana" && item.hiragana === "\u3092") {
      return "o";
    }
    if (scriptName === "Katakana" && item.katakana === "\u30F2") {
      return "wo";
    }
    return item.romaji;
  }
  function resolveDrawingRomaji(item, canvasMode) {
    if (canvasMode === "hiragana" && item.hiragana === "\u3092") {
      return "o";
    }
    if (canvasMode === "katakana" && item.katakana === "\u30F2") {
      return "wo";
    }
    return item.romaji;
  }
  function pickTypingQuestion({
    kanaData: kanaData2,
    scriptMode,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList,
    avoidRomaji
  }) {
    const item = pickQuestion({
      kanaData: kanaData2,
      kanaSet,
      getKanaCategoryFn,
      getQuestionWeightFn,
      backlog,
      preferredRomajiList,
      avoidRomaji
    });
    if (scriptMode === "hiragana") {
      const scriptName2 = "Hiragana";
      return {
        kind: "typing",
        romaji: resolveTypingRomaji(item, scriptName2),
        trackingRomaji: item.romaji,
        kana: item.hiragana,
        scriptName: scriptName2
      };
    }
    if (scriptMode === "katakana") {
      const scriptName2 = "Katakana";
      return {
        kind: "typing",
        romaji: resolveTypingRomaji(item, scriptName2),
        trackingRomaji: item.romaji,
        kana: item.katakana,
        scriptName: scriptName2
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
  function pickWritingQuestion({
    kanaData: kanaData2,
    writingMode,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList,
    avoidRomaji
  }) {
    const item = pickQuestion({
      kanaData: kanaData2,
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
      const drawingRomaji2 = resolveDrawingRomaji(item, "hiragana");
      return {
        kind: "drawing",
        romaji: item.romaji,
        hiragana: item.hiragana,
        katakana: item.katakana,
        canvasMode: "hiragana",
        promptText: `${drawingRomaji2} (Draw Hiragana)`,
        revealText: `Answer: Hiragana ${item.hiragana} | Katakana ${item.katakana}. Mark yourself right or wrong.`
      };
    }
    if (writingMode === "katakana") {
      const drawingRomaji2 = resolveDrawingRomaji(item, "katakana");
      return {
        kind: "drawing",
        romaji: item.romaji,
        hiragana: item.hiragana,
        katakana: item.katakana,
        canvasMode: "katakana",
        promptText: `${drawingRomaji2} (Draw Katakana)`,
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
  function pickWordQuestion({
    wordsData: wordsData2,
    mode,
    backlog,
    preferredIds,
    avoidId,
    showRomaji
  }) {
    const resolvedMode = mode === "wordsMixed" ? Math.random() > 0.5 ? "japaneseToEnglish" : "englishToJapanese" : mode;
    const item = pickGenericQuestion({
      items: wordsData2,
      backlog,
      preferredIds,
      avoidId,
      getItemId: (entry) => entry.id
    });
    if (resolvedMode === "englishToJapanese") {
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
  function pickKanjiQuestion({
    kanjiData: kanjiData2,
    mode,
    backlog,
    preferredIds,
    avoidId,
    showRomaji
  }) {
    const typingModes = ["kanjiToMeaning", "meaningToKanji", "promptToKanji"];
    const resolvedMode = mode === "kanjiMixed" ? Math.random() < 0.3 ? "kanjiDrawing" : typingModes[Math.floor(Math.random() * typingModes.length)] : mode;
    const item = pickGenericQuestion({
      items: kanjiData2,
      backlog,
      preferredIds,
      avoidId,
      getItemId: (entry) => entry.id
    });
    if (resolvedMode === "meaningToKanji") {
      return {
        kind: "typing",
        dataset: "kanji",
        trackingId: item.id,
        promptText: item.meanings[0],
        helperText: showRomaji ? item.romaji.join(", ") : "",
        answerLabel: "Type Kanji",
        placeholder: "e.g. \u4E00",
        acceptedAnswers: [item.kanji],
        answerNormalizer: "exact",
        displayAnswer: item.kanji,
        hintAnswer: item.kanji,
        quickAnswerEnabled: false
      };
    }
    if (resolvedMode === "promptToKanji") {
      const useMeaningPrompt = Math.random() > 0.5;
      const promptText = useMeaningPrompt ? item.meanings[0] : item.romaji && item.romaji[0] || item.onyomi && item.onyomi[0] || item.kunyomi && item.kunyomi[0] || item.meanings[0];
      return {
        kind: "typing",
        dataset: "kanji",
        trackingId: item.id,
        promptText,
        helperText: useMeaningPrompt && showRomaji ? item.romaji.join(", ") : "",
        answerLabel: "Type Kanji",
        placeholder: "e.g. \u4E00",
        acceptedAnswers: [item.kanji],
        answerNormalizer: "exact",
        displayAnswer: item.kanji,
        hintAnswer: item.kanji,
        quickAnswerEnabled: false
      };
    }
    if (resolvedMode === "kanjiDrawing") {
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
  var init_quiz = __esm({
    "js/features/quiz.js"() {
    }
  });

  // js/features/storage.js
  function trimDailyStatsToLimit(dailyStats, limit2) {
    const sorted = Object.keys(dailyStats).sort((a, b2) => b2.localeCompare(a));
    if (sorted.length <= limit2) {
      return;
    }
    sorted.slice(limit2).forEach((dateKey) => {
      delete dailyStats[dateKey];
    });
  }
  function getDatasetBucket(payload, datasetId) {
    if (payload && payload.datasets && typeof payload.datasets === "object") {
      const bucket = payload.datasets[datasetId];
      if (bucket && typeof bucket === "object") {
        return bucket;
      }
    }
    return null;
  }
  function ensureDatasetObject(value) {
    return value && typeof value === "object" ? value : {};
  }
  function buildDatasetPayload(datasetState) {
    return {
      practiceStrategy: datasetState.practiceStrategy,
      recentMistakes: datasetState.recentMistakes,
      recentTypingMistakes: datasetState.recentTypingMistakes,
      recentDrawingMistakes: datasetState.recentDrawingMistakes,
      srsByItem: datasetState.srsByItem,
      typingRightCount: datasetState.typingRightCount,
      typingWrongCount: datasetState.typingWrongCount,
      drawingRightCount: datasetState.drawingRightCount,
      drawingWrongCount: datasetState.drawingWrongCount,
      backlog: datasetState.backlog,
      drawingsByItem: datasetState.drawingsByItem,
      dailyStats: datasetState.dailyStats,
      dailyCategoryStats: datasetState.dailyCategoryStats,
      dailyDetailStats: datasetState.dailyDetailStats,
      confusionPairs: datasetState.confusionPairs,
      srsAccuracyWindow: datasetState.srsAccuracyWindow
    };
  }
  function normalizeDatasetRuntimeState(targetDataset, sourceDataset) {
    const source = ensureDatasetObject(sourceDataset);
    targetDataset.practiceStrategy = source.practiceStrategy === "mistakeReview" || source.practiceStrategy === "mixed" || source.practiceStrategy === "frequentMistakes" ? source.practiceStrategy : "srs";
    targetDataset.recentMistakes = Array.isArray(source.recentMistakes) ? source.recentMistakes.filter((item) => typeof item === "string").slice(0, 120) : [];
    targetDataset.recentTypingMistakes = Array.isArray(source.recentTypingMistakes) ? source.recentTypingMistakes.filter((item) => typeof item === "string").slice(0, 120) : [];
    targetDataset.recentDrawingMistakes = Array.isArray(source.recentDrawingMistakes) ? source.recentDrawingMistakes.filter((item) => typeof item === "string").slice(0, 120) : [];
    const nextSrsByItem = ensureDatasetObject(targetDataset.srsByItem);
    Object.entries(ensureDatasetObject(source.srsByItem)).forEach(([itemId, entry]) => {
      nextSrsByItem[itemId] = {
        dueAt: Number(entry && entry.dueAt || 0),
        intervalHours: Number(entry && entry.intervalHours || 0),
        lastSeenAt: Number(entry && entry.lastSeenAt || 0),
        lastCorrect: Boolean(entry && entry.lastCorrect)
      };
    });
    targetDataset.srsByItem = nextSrsByItem;
    targetDataset.typingRightCount = Number(source.typingRightCount || 0);
    targetDataset.typingWrongCount = Number(source.typingWrongCount || 0);
    targetDataset.drawingRightCount = Number(source.drawingRightCount || 0);
    targetDataset.drawingWrongCount = Number(source.drawingWrongCount || 0);
    const nextBacklog = ensureDatasetObject(targetDataset.backlog);
    Object.entries(ensureDatasetObject(source.backlog)).forEach(([itemId, entry]) => {
      nextBacklog[itemId] = {
        ...nextBacklog[itemId] || {},
        ...entry
      };
    });
    targetDataset.backlog = nextBacklog;
    targetDataset.drawingsByItem = ensureDatasetObject(source.drawingsByItem);
    targetDataset.dailyStats = ensureDatasetObject(source.dailyStats);
    targetDataset.dailyCategoryStats = ensureDatasetObject(source.dailyCategoryStats);
    targetDataset.dailyDetailStats = ensureDatasetObject(source.dailyDetailStats);
    targetDataset.confusionPairs = ensureDatasetObject(source.confusionPairs);
    targetDataset.srsAccuracyWindow = ensureDatasetObject(source.srsAccuracyWindow);
  }
  function buildLegacyKanaDatasetPayload(payload) {
    return {
      practiceStrategy: payload.practiceStrategy,
      recentMistakes: payload.recentMistakes,
      recentTypingMistakes: payload.recentTypingMistakes,
      recentDrawingMistakes: payload.recentDrawingMistakes,
      srsByItem: payload.srsByRomaji,
      typingRightCount: payload.typingRightCount,
      typingWrongCount: payload.typingWrongCount,
      drawingRightCount: payload.drawingRightCount,
      drawingWrongCount: payload.drawingWrongCount,
      backlog: payload.backlog,
      drawingsByItem: payload.drawingsByKana,
      dailyStats: payload.dailyStats,
      dailyCategoryStats: payload.dailyCategoryStats,
      dailyDetailStats: payload.dailyDetailStats,
      confusionPairs: payload.confusionPairs,
      srsAccuracyWindow: payload.srsAccuracyWindow
    };
  }
  function clampGoal(value, min = 0, max = 200, fallback = 0) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) {
      return fallback;
    }
    return Math.max(min, Math.min(max, Math.round(parsed)));
  }
  function normalizeDailyGoals(state, payload) {
    const legacyTotal = clampGoal(payload && payload.dailyGoal, 5, 200, 25);
    const source = payload && payload.dailyGoals && typeof payload.dailyGoals === "object" ? payload.dailyGoals : {};
    const total = clampGoal(source.total, 5, 200, legacyTotal);
    return {
      total,
      typing: clampGoal(source.typing, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.typing, 0, 200, 12)),
      drawing: clampGoal(source.drawing, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.drawing, 0, 200, 8)),
      normal: clampGoal(source.normal, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.normal, 0, 200, 10)),
      dakuten: clampGoal(source.dakuten, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.dakuten, 0, 200, 6)),
      yoon: clampGoal(source.yoon, 0, 200, clampGoal(state.dailyGoals && state.dailyGoals.yoon, 0, 200, 6))
    };
  }
  function normalizeBacklogFilters(payload) {
    const source = payload && payload.backlogFilters && typeof payload.backlogFilters === "object" ? payload.backlogFilters : {};
    const status = ["all", "weak", "strong", "unseen"].includes(source.status) ? source.status : "all";
    const script = typeof source.script === "string" && source.script.trim() ? source.script.trim().slice(0, 64) : "all";
    const weakness = ["all", "typing", "drawing"].includes(source.weakness) ? source.weakness : "all";
    const minAttempts = clampGoal(source.minAttempts, 0, 999, 0);
    const compact = Boolean(source.compact);
    return { status, script, weakness, minAttempts, compact };
  }
  function normalizeBacklogFiltersByDataset(payload, activeDataset) {
    const datasetIds = ["kana", "words", "kanji"];
    const source = payload && payload.backlogFiltersByDataset && typeof payload.backlogFiltersByDataset === "object" ? payload.backlogFiltersByDataset : null;
    const activeId = datasetIds.includes(activeDataset) ? activeDataset : "kana";
    const legacy = normalizeBacklogFilters(payload);
    const out = {};
    datasetIds.forEach((datasetId) => {
      if (source && source[datasetId] && typeof source[datasetId] === "object") {
        out[datasetId] = normalizeBacklogFilters({ backlogFilters: source[datasetId] });
        return;
      }
      out[datasetId] = datasetId === activeId ? { ...legacy } : { status: "all", script: "all", weakness: "all", minAttempts: 0, compact: false };
    });
    return out;
  }
  function normalizeProgressSubtab(payload) {
    const value = payload && typeof payload.progressSubtab === "string" ? payload.progressSubtab : "overview";
    return ["overview", "trends", "compare", "sync"].includes(value) ? value : "overview";
  }
  function normalizeProgressCollapsedSections(payload) {
    const source = payload && payload.progressCollapsedSections && typeof payload.progressCollapsedSections === "object" ? payload.progressCollapsedSections : {};
    return {
      overview: Boolean(source.overview),
      trends: Boolean(source.trends),
      compare: Boolean(source.compare),
      sync: Boolean(source.sync)
    };
  }
  function buildProgressPayload({ state, dailyHistoryLimit }) {
    trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
    trimDailyStatsToLimit(state.dailyCategoryStats, dailyHistoryLimit);
    Object.values(state.datasets || {}).forEach((datasetState) => {
      trimDailyStatsToLimit(datasetState.dailyStats || {}, dailyHistoryLimit);
      trimDailyStatsToLimit(datasetState.dailyCategoryStats || {}, dailyHistoryLimit);
    });
    const savedAt = Date.now();
    state.lastSavedAt = savedAt;
    const kanaDataset = state.datasets && state.datasets.kana ? state.datasets.kana : {};
    return {
      schemaVersion: 2,
      savedAt,
      activeDataset: state.activeDataset || "kana",
      showWordHelper: Boolean(state.showWordHelper),
      showKanjiHelper: Boolean(state.showKanjiHelper),
      datasets: {
        kana: buildDatasetPayload(kanaDataset),
        words: buildDatasetPayload(state.datasets && state.datasets.words || {}),
        kanji: buildDatasetPayload(state.datasets && state.datasets.kanji || {})
      },
      practiceStrategy: state.practiceStrategy,
      recentMistakes: state.recentMistakes,
      recentTypingMistakes: state.recentTypingMistakes,
      recentDrawingMistakes: state.recentDrawingMistakes,
      srsByRomaji: state.srsByRomaji,
      audioMuted: state.audioMuted,
      drawGuideEnabled: state.drawGuideEnabled,
      dailyGoal: state.dailyGoal,
      dailyGoals: state.dailyGoals,
      backlogFilters: state.backlogFilters,
      backlogFiltersByDataset: state.backlogFiltersByDataset,
      progressSubtab: state.progressSubtab,
      progressCollapsedSections: state.progressCollapsedSections,
      lastCloudSyncAt: state.lastCloudSyncAt,
      syncUserEmail: state.syncUserEmail,
      typingRightCount: kanaDataset.typingRightCount,
      typingWrongCount: kanaDataset.typingWrongCount,
      drawingRightCount: kanaDataset.drawingRightCount,
      drawingWrongCount: kanaDataset.drawingWrongCount,
      backlog: kanaDataset.backlog,
      drawingsByKana: kanaDataset.drawingsByItem,
      dailyStats: kanaDataset.dailyStats,
      dailyCategoryStats: kanaDataset.dailyCategoryStats,
      dailyDetailStats: kanaDataset.dailyDetailStats,
      confusionPairs: kanaDataset.confusionPairs,
      srsAccuracyWindow: kanaDataset.srsAccuracyWindow
    };
  }
  function applyProgressPayload({ payload, state, kanaData: kanaData2, maxDrawingsPerKana, dailyHistoryLimit }) {
    if (!payload || typeof payload !== "object") {
      return;
    }
    state.lastSavedAt = Number(payload.savedAt || 0);
    state.activeDataset = ["kana", "words", "kanji"].includes(payload.activeDataset) ? payload.activeDataset : "kana";
    state.showWordHelper = Boolean(payload.showWordHelper);
    state.showKanjiHelper = Boolean(payload.showKanjiHelper);
    const kanaPayload = getDatasetBucket(payload, "kana") || buildLegacyKanaDatasetPayload(payload);
    const wordsPayload = getDatasetBucket(payload, "words") || {};
    const kanjiPayload = getDatasetBucket(payload, "kanji") || {};
    normalizeDatasetRuntimeState(state.datasets.kana, kanaPayload);
    normalizeDatasetRuntimeState(state.datasets.words, wordsPayload);
    normalizeDatasetRuntimeState(state.datasets.kanji, kanjiPayload);
    if (state.recentTypingMistakes.length === 0 && Array.isArray(payload.recentMistakes)) {
      state.recentTypingMistakes = payload.recentMistakes.filter((romaji) => typeof romaji === "string").slice(0, 120);
      state.recentDrawingMistakes = [...state.recentTypingMistakes];
      state.recentMistakes = [...new Set(state.recentTypingMistakes)].slice(0, 120);
    }
    state.audioMuted = Boolean(payload.audioMuted);
    state.drawGuideEnabled = payload.drawGuideEnabled !== false;
    state.dailyGoals = normalizeDailyGoals(state, payload);
    state.dailyGoal = state.dailyGoals.total;
    state.backlogFiltersByDataset = normalizeBacklogFiltersByDataset(payload, state.activeDataset);
    state.backlogFilters = { ...state.backlogFiltersByDataset[state.activeDataset] || normalizeBacklogFilters(payload) };
    state.progressSubtab = normalizeProgressSubtab(payload);
    state.progressCollapsedSections = normalizeProgressCollapsedSections(payload);
    state.lastCloudSyncAt = Number(payload.lastCloudSyncAt || 0);
    state.syncUserEmail = typeof payload.syncUserEmail === "string" ? payload.syncUserEmail : "";
    kanaData2.forEach((item) => {
      const savedSrs = state.srsByRomaji && state.srsByRomaji[item.romaji];
      state.srsByRomaji[item.romaji] = {
        dueAt: Number(savedSrs && savedSrs.dueAt || 0),
        intervalHours: Number(savedSrs && savedSrs.intervalHours || 0),
        lastSeenAt: Number(savedSrs && savedSrs.lastSeenAt || 0),
        lastCorrect: Boolean(savedSrs && savedSrs.lastCorrect)
      };
    });
    if (state.backlog && typeof state.backlog === "object") {
      kanaData2.forEach((item) => {
        const saved = state.backlog[item.romaji];
        if (!saved || typeof saved !== "object") {
          return;
        }
        const target = state.backlog[item.romaji];
        target.right = Number(saved.right || 0);
        target.wrong = Number(saved.wrong || 0);
        target.typingRight = Number(saved.typingRight || 0);
        target.typingWrong = Number(saved.typingWrong || 0);
        target.drawingRight = Number(saved.drawingRight || 0);
        target.drawingWrong = Number(saved.drawingWrong || 0);
        target.hiraganaTypingRight = Number(saved.hiraganaTypingRight || 0);
        target.hiraganaTypingWrong = Number(saved.hiraganaTypingWrong || 0);
        target.hiraganaDrawingRight = Number(saved.hiraganaDrawingRight || 0);
        target.hiraganaDrawingWrong = Number(saved.hiraganaDrawingWrong || 0);
        target.hiraganaRight = Number(saved.hiraganaRight || 0);
        target.hiraganaWrong = Number(saved.hiraganaWrong || 0);
        target.katakanaTypingRight = Number(saved.katakanaTypingRight || 0);
        target.katakanaTypingWrong = Number(saved.katakanaTypingWrong || 0);
        target.katakanaDrawingRight = Number(saved.katakanaDrawingRight || 0);
        target.katakanaDrawingWrong = Number(saved.katakanaDrawingWrong || 0);
        target.katakanaRight = Number(saved.katakanaRight || 0);
        target.katakanaWrong = Number(saved.katakanaWrong || 0);
      });
    }
    if (state.drawingsByKana && typeof state.drawingsByKana === "object") {
      Object.keys(state.drawingsByKana).forEach((kanaChar) => {
        const savedList = state.drawingsByKana[kanaChar];
        if (Array.isArray(savedList)) {
          state.drawingsByKana[kanaChar] = savedList.filter((value) => typeof value === "string").slice(0, maxDrawingsPerKana);
        }
      });
    }
    if (state.dailyStats && typeof state.dailyStats === "object") {
      Object.keys(state.dailyStats).forEach((dateKey) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
          return;
        }
        const saved = state.dailyStats[dateKey];
        if (!saved || typeof saved !== "object") {
          return;
        }
        state.dailyStats[dateKey] = {
          typingRight: Number(saved.typingRight || 0),
          typingWrong: Number(saved.typingWrong || 0),
          drawingRight: Number(saved.drawingRight || 0),
          drawingWrong: Number(saved.drawingWrong || 0)
        };
      });
    }
    if (state.dailyCategoryStats && typeof state.dailyCategoryStats === "object") {
      Object.keys(state.dailyCategoryStats).forEach((dateKey) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
          return;
        }
        const saved = state.dailyCategoryStats[dateKey];
        if (!saved || typeof saved !== "object") {
          return;
        }
        state.dailyCategoryStats[dateKey] = {
          normal: Number(saved.normal || 0),
          dakuten: Number(saved.dakuten || 0),
          yoon: Number(saved.yoon || 0)
        };
      });
    }
    trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
    trimDailyStatsToLimit(state.dailyCategoryStats, dailyHistoryLimit);
  }
  function saveProgress({ storageKey, state, dailyHistoryLimit }) {
    const payload = buildProgressPayload({ state, dailyHistoryLimit });
    try {
      localStorage.setItem(storageKey, JSON.stringify(payload));
    } catch (e) {
    }
    return payload;
  }
  function loadProgress({ storageKey, state, kanaData: kanaData2, maxDrawingsPerKana, dailyHistoryLimit }) {
    let parsed = null;
    try {
      parsed = JSON.parse(localStorage.getItem(storageKey) || "null");
    } catch (e) {
      parsed = null;
    }
    if (!parsed || typeof parsed !== "object") {
      return;
    }
    applyProgressPayload({
      payload: parsed,
      state,
      kanaData: kanaData2,
      maxDrawingsPerKana,
      dailyHistoryLimit
    });
  }
  var init_storage = __esm({
    "js/features/storage.js"() {
    }
  });

  // js/features/progress.js
  function getDatasetLabel(state) {
    return state.activeDataset === "words" ? "Words" : state.activeDataset === "kanji" ? "Kanji" : "Kana";
  }
  function getBacklogDisplayLabel(row) {
    return row.label || row.romaji || row.id || "item";
  }
  function getSortedDateKeys(dailyStats) {
    return Object.keys(dailyStats).sort((a, b2) => b2.localeCompare(a));
  }
  function getDayTotals(day) {
    const typingTotal = day.typingRight + day.typingWrong;
    const drawingTotal = day.drawingRight + day.drawingWrong;
    return {
      typingTotal,
      drawingTotal,
      allRight: day.typingRight + day.drawingRight,
      allWrong: day.typingWrong + day.drawingWrong,
      allTotal: typingTotal + drawingTotal
    };
  }
  function getCategoryTotals(categoryEntry) {
    return {
      normal: Number(categoryEntry && categoryEntry.normal || 0),
      dakuten: Number(categoryEntry && categoryEntry.dakuten || 0),
      yoon: Number(categoryEntry && categoryEntry.yoon || 0)
    };
  }
  function buildDayOptions(elements, dailyStats) {
    const dateKeys = getSortedDateKeys(dailyStats);
    const options = dateKeys.map((dateKey) => `<option value="${dateKey}">${formatDateLabel(dateKey)}</option>`).join("");
    elements.compareDayASelect.innerHTML = options;
    elements.compareDayBSelect.innerHTML = options;
    if (dateKeys.length === 0) {
      elements.compareDayASelect.innerHTML = "";
      elements.compareDayBSelect.innerHTML = "";
      return;
    }
    if (!dateKeys.includes(elements.compareDayASelect.value)) {
      elements.compareDayASelect.value = dateKeys[0];
    }
    if (!dateKeys.includes(elements.compareDayBSelect.value)) {
      elements.compareDayBSelect.value = dateKeys[1] || dateKeys[0];
    }
  }
  function resetProgressTabForNewDay(elements, dailyStats) {
    const dateKeys = getSortedDateKeys(dailyStats);
    if (dateKeys.length === 0) {
      return;
    }
    elements.compareDayASelect.value = dateKeys[0];
    elements.compareDayBSelect.value = dateKeys[1] || dateKeys[0];
  }
  function renderDailyProgressGraph(elements, dailyStats) {
    const ctx = elements.dailyProgressGraphCtx;
    const canvas = elements.dailyProgressGraph;
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth || 860;
    const cssHeight = 260;
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, cssWidth, cssHeight);
    const dateKeys = getSortedDateKeys(dailyStats).reverse().slice(-14);
    if (dateKeys.length < 2) {
      ctx.fillStyle = "#5e5446";
      ctx.font = "600 14px IBM Plex Sans";
      ctx.fillText("Complete attempts on at least two days to draw the graph.", 20, 38);
      return;
    }
    const left = 52;
    const top = 18;
    const width = Math.max(100, cssWidth - 72);
    const height = 190;
    const bottom = top + height;
    ctx.strokeStyle = "#c7b8a2";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y2 = top + i * height / 4;
      ctx.beginPath();
      ctx.moveTo(left, y2);
      ctx.lineTo(left + width, y2);
      ctx.stroke();
      ctx.fillStyle = "#5e5446";
      ctx.font = "12px IBM Plex Sans";
      ctx.fillText(`${100 - i * 25}%`, 8, y2 + 4);
    }
    function getPoint(index, ratio) {
      const x2 = left + index * width / (dateKeys.length - 1);
      const y2 = bottom - ratio * height;
      return { x: x2, y: y2 };
    }
    const typingPoints = [];
    const drawingPoints = [];
    dateKeys.forEach((dateKey, index) => {
      const day = dailyStats[dateKey];
      const totals = getDayTotals(day);
      const typingRatio = totals.typingTotal ? day.typingRight / totals.typingTotal : 0;
      const drawingRatio = totals.drawingTotal ? day.drawingRight / totals.drawingTotal : 0;
      typingPoints.push(getPoint(index, typingRatio));
      drawingPoints.push(getPoint(index, drawingRatio));
      if (index % 2 === 0 || index === dateKeys.length - 1) {
        const label = formatDateLabel(dateKey);
        ctx.save();
        ctx.translate(left + index * width / (dateKeys.length - 1), bottom + 10);
        ctx.rotate(-0.45);
        ctx.fillStyle = "#6a5f51";
        ctx.font = "11px IBM Plex Sans";
        ctx.fillText(label, 0, 0);
        ctx.restore();
      }
    });
    function drawLine(points, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();
      ctx.fillStyle = color;
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    drawLine(typingPoints, "#136f48");
    drawLine(drawingPoints, "#c95730");
    ctx.fillStyle = "#136f48";
    ctx.fillRect(left, bottom + 46, 14, 3);
    ctx.fillStyle = "#3f362c";
    ctx.font = "12px IBM Plex Sans";
    ctx.fillText("Typing accuracy", left + 20, bottom + 50);
    ctx.fillStyle = "#c95730";
    ctx.fillRect(left + 140, bottom + 46, 14, 3);
    ctx.fillStyle = "#3f362c";
    ctx.fillText("Drawing accuracy", left + 160, bottom + 50);
  }
  function renderDayComparison(elements, dailyStats) {
    const dayAKey = elements.compareDayASelect.value;
    const dayBKey = elements.compareDayBSelect.value;
    const dayA = dailyStats[dayAKey];
    const dayB = dailyStats[dayBKey];
    if (!dayA || !dayB) {
      elements.compareSummary.innerHTML = '<div class="compare-empty">Do a few quiz attempts to unlock day-to-day comparison.</div>';
      return;
    }
    const totalsA = getDayTotals(dayA);
    const totalsB = getDayTotals(dayB);
    const typingAccuracyA = totalsA.typingTotal ? dayA.typingRight / totalsA.typingTotal : 0;
    const typingAccuracyB = totalsB.typingTotal ? dayB.typingRight / totalsB.typingTotal : 0;
    const drawingAccuracyA = totalsA.drawingTotal ? dayA.drawingRight / totalsA.drawingTotal : 0;
    const drawingAccuracyB = totalsB.drawingTotal ? dayB.drawingRight / totalsB.drawingTotal : 0;
    const overallAccuracyA = totalsA.allTotal ? totalsA.allRight / totalsA.allTotal : 0;
    const overallAccuracyB = totalsB.allTotal ? totalsB.allRight / totalsB.allTotal : 0;
    function formatDelta(newValue, oldValue) {
      const delta = Math.round((newValue - oldValue) * 100);
      if (delta === 0) return "0 pts";
      return `${delta > 0 ? "+" : ""}${delta} pts`;
    }
    elements.compareSummary.innerHTML = `
    <div class="compare-grid">
      <div class="compare-card">
        <h4>Typing Accuracy</h4>
        <div class="compare-line">${formatDateLabel(dayAKey)}: ${asPercent(dayA.typingRight, totalsA.typingTotal)}</div>
        <div class="compare-line">${formatDateLabel(dayBKey)}: ${asPercent(dayB.typingRight, totalsB.typingTotal)}</div>
        <div class="compare-delta">Delta (A - B): ${formatDelta(typingAccuracyA, typingAccuracyB)}</div>
      </div>
      <div class="compare-card">
        <h4>Drawing Accuracy</h4>
        <div class="compare-line">${formatDateLabel(dayAKey)}: ${asPercent(dayA.drawingRight, totalsA.drawingTotal)}</div>
        <div class="compare-line">${formatDateLabel(dayBKey)}: ${asPercent(dayB.drawingRight, totalsB.drawingTotal)}</div>
        <div class="compare-delta">Delta (A - B): ${formatDelta(drawingAccuracyA, drawingAccuracyB)}</div>
      </div>
      <div class="compare-card">
        <h4>Overall Accuracy</h4>
        <div class="compare-line">${formatDateLabel(dayAKey)}: ${asPercent(totalsA.allRight, totalsA.allTotal)}</div>
        <div class="compare-line">${formatDateLabel(dayBKey)}: ${asPercent(totalsB.allRight, totalsB.allTotal)}</div>
        <div class="compare-delta">Delta (A - B): ${formatDelta(overallAccuracyA, overallAccuracyB)}</div>
      </div>
    </div>
  `;
  }
  function renderDailyHistoryTable(elements, state, dailyStats, dailyDetailStats = {}) {
    const dateKeys = getSortedDateKeys(dailyStats);
    if (dateKeys.length === 0) {
      elements.dailyHistoryTable.innerHTML = '<div class="compare-empty">No daily history yet. Start practicing to populate this table.</div>';
      return;
    }
    elements.dailyHistoryTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Typing</th>
          <th>Drawing</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${dateKeys.map((dateKey) => {
      const day = dailyStats[dateKey];
      const totals = getDayTotals(day);
      return `
            <tr class="history-day-row" data-date="${dateKey}">
              <td>${formatDateLabel(dateKey)}</td>
              <td>${day.typingRight}/${totals.typingTotal} (${asPercent(day.typingRight, totals.typingTotal)})</td>
              <td>${day.drawingRight}/${totals.drawingTotal} (${asPercent(day.drawingRight, totals.drawingTotal)})</td>
              <td>${totals.allRight}/${totals.allTotal} (${asPercent(totals.allRight, totals.allTotal)})</td>
            </tr>
            <tr class="history-detail-row hidden" data-date-detail="${dateKey}">
              <td colspan="4"><div class="drill-down-panel"></div></td>
            </tr>
          `;
    }).join("")}
      </tbody>
    </table>
  `;
    const rows = elements.dailyHistoryTable.querySelectorAll(".history-day-row");
    rows.forEach((row) => {
      row.addEventListener("click", () => {
        const dateKey = row.dataset.date;
        const detailRow = elements.dailyHistoryTable.querySelector(`[data-date-detail="${dateKey}"]`);
        if (!detailRow) return;
        const panel = detailRow.querySelector(".drill-down-panel");
        const details = dailyDetailStats[dateKey] || {};
        if (!detailRow.classList.contains("hidden")) {
          detailRow.classList.add("hidden");
          panel.innerHTML = "";
          return;
        }
        const detailItems = Object.entries(details).map(([romaji, entry]) => ({
          romaji,
          label: getBacklogDisplayLabel(state.backlog && state.backlog[romaji] || { id: romaji }),
          right: Number(entry.right || 0),
          wrong: Number(entry.wrong || 0)
        })).sort((a, b2) => b2.right + b2.wrong - (a.right + a.wrong));
        panel.innerHTML = detailItems.length ? `<strong>Attempt breakdown:</strong> ${detailItems.map((d2) => `${d2.label} (\u2713${d2.right}/\u2717${d2.wrong})`).join(", ")}` : "No detailed per-item stats stored for this day yet.";
        detailRow.classList.remove("hidden");
      });
    });
  }
  function renderInsights(elements, state) {
    if (!elements.insightsGrid) {
      return;
    }
    const datasetLabel = getDatasetLabel(state);
    const now = Date.now();
    const dueCount = Object.values(state.srsByRomaji || {}).filter((entry) => Number(entry.dueAt || 0) <= now).length;
    const mistakesCount = (state.recentMistakes || []).length;
    const today = state.dailyStats[getTodayKey()] || { typingRight: 0, typingWrong: 0, drawingRight: 0, drawingWrong: 0 };
    const todayCategory = getCategoryTotals(state.dailyCategoryStats && state.dailyCategoryStats[getTodayKey()]);
    const todayDone = today.typingRight + today.typingWrong + today.drawingRight + today.drawingWrong;
    const goals = state.dailyGoals || {
      total: Number(state.dailyGoal || 25),
      typing: 12,
      drawing: 8,
      normal: 10,
      dakuten: 6,
      yoon: 6
    };
    const weakRows = Object.values(state.backlog || {}).map((row) => {
      const attempts = row.typingRight + row.typingWrong + row.drawingRight + row.drawingWrong;
      const right = row.typingRight + row.drawingRight;
      const accuracy = attempts ? Math.round(right / attempts * 100) : 100;
      return { label: getBacklogDisplayLabel(row), attempts, accuracy };
    }).filter((row) => row.attempts >= 4).sort((a, b2) => a.accuracy - b2.accuracy).slice(0, 3);
    const recentDateKeys = getSortedDateKeys(state.dailyStats).slice(0, 7);
    let weekRight = 0;
    let weekTotal = 0;
    recentDateKeys.forEach((dateKey) => {
      const day = state.dailyStats[dateKey];
      weekRight += day.typingRight + day.drawingRight;
      weekTotal += day.typingRight + day.typingWrong + day.drawingRight + day.drawingWrong;
    });
    const weekAccuracy = weekTotal ? `${Math.round(weekRight / weekTotal * 100)}%` : "-";
    const weakText = weakRows.length ? weakRows.map((row) => `${row.label} (${row.accuracy}%)`).join(", ") : "Need more attempts";
    const typingDone = today.typingRight + today.typingWrong;
    const drawingDone = today.drawingRight + today.drawingWrong;
    function goalLine(label, done, goal) {
      const safeGoal = Number(goal || 0);
      const pct = safeGoal > 0 ? Math.min(100, Math.round(done / safeGoal * 100)) : 0;
      return `${label}: ${done}/${safeGoal} (${pct}%)`;
    }
    elements.insightsGrid.innerHTML = `
    <article class="insight-card">
      <h4>Due Reviews</h4>
      <div class="insight-value">${dueCount}</div>
      <p>Ready in spaced repetition queue.</p>
    </article>
    <article class="insight-card">
      <h4>Mistake Queue</h4>
      <div class="insight-value">${mistakesCount}</div>
      <p>${datasetLabel} waiting for review mode.</p>
    </article>
    <article class="insight-card">
      <h4>Today Goals</h4>
      <div class="insight-value">${todayDone}/${goals.total}</div>
      <p>${goalLine("Typing", typingDone, goals.typing)}</p>
      <p>${goalLine("Drawing", drawingDone, goals.drawing)}</p>
      ${state.activeDataset === "kana" ? `<p>${goalLine("Normal", todayCategory.normal, goals.normal)}</p>
      <p>${goalLine("Dakuten", todayCategory.dakuten, goals.dakuten)}</p>
      <p>${goalLine("Yoon", todayCategory.yoon, goals.yoon)}</p>` : ""}
    </article>
    <article class="insight-card">
      <h4>7-Day Accuracy</h4>
      <div class="insight-value">${weekAccuracy}</div>
      <p>Typing + drawing combined.</p>
    </article>
    <article class="insight-card wide">
      <h4>Weakest ${datasetLabel}</h4>
      <p>${weakText}</p>
    </article>
  `;
  }
  function getRomajiRowGroup(romaji) {
    const value = String(romaji || "");
    if (/^(a|i|u|e|o)$/.test(value)) {
      return "vowel";
    }
    if (value.startsWith("ch") || value.startsWith("ts")) {
      return "t";
    }
    if (value.startsWith("sh") || value.startsWith("j")) {
      return "s";
    }
    return value[0] || "other";
  }
  function renderScriptHeatmap(elements, state) {
    if (!elements.scriptHeatmap) {
      return;
    }
    if (state.activeDataset !== "kana") {
      const sortedRows = Object.values(state.backlog || {}).map((row) => {
        const attempts = row.typingRight + row.typingWrong + row.drawingRight + row.drawingWrong;
        const right = row.typingRight + row.drawingRight;
        const accuracy = attempts > 0 ? Math.round(right / attempts * 100) : 0;
        return {
          label: getBacklogDisplayLabel(row),
          attempts,
          accuracy,
          typing: `${row.typingRight}/${row.typingRight + row.typingWrong || 0}`,
          drawing: `${row.drawingRight}/${row.drawingRight + row.drawingWrong || 0}`
        };
      }).filter((row) => row.attempts > 0).sort((a, b2) => b2.attempts - a.attempts || a.accuracy - b2.accuracy).slice(0, 12);
      elements.scriptHeatmap.innerHTML = sortedRows.length ? `
        <div class="heat-head">Item</div>
        <div class="heat-head">Accuracy</div>
        <div class="heat-head">Mode Split</div>
        ${sortedRows.map((row) => `
          <div class="heat-row-label">${row.label}</div>
          <div class="heat-cell"><strong>${row.accuracy}%</strong><small>${row.attempts} attempts</small></div>
          <div class="heat-cell"><strong>T ${row.typing}</strong><small>D ${row.drawing}</small></div>
        `).join("")}
      ` : `<div class="compare-empty">No ${getDatasetLabel(state).toLowerCase()} attempts yet. Start practicing to see item-level progress.</div>`;
      return;
    }
    const groups = [
      { key: "vowel", label: "Vowel" },
      { key: "k", label: "K" },
      { key: "s", label: "S" },
      { key: "t", label: "T" },
      { key: "n", label: "N" },
      { key: "h", label: "H" },
      { key: "m", label: "M" },
      { key: "y", label: "Y" },
      { key: "r", label: "R" },
      { key: "w", label: "W" },
      { key: "g", label: "G" },
      { key: "z", label: "Z/J" },
      { key: "d", label: "D" },
      { key: "b", label: "B" },
      { key: "p", label: "P" }
    ];
    const metrics = groups.reduce((acc, group) => {
      acc[group.key] = {
        hiraganaRight: 0,
        hiraganaWrong: 0,
        katakanaRight: 0,
        katakanaWrong: 0
      };
      return acc;
    }, {});
    Object.values(state.backlog || {}).forEach((row) => {
      const key = getRomajiRowGroup(row.romaji);
      if (!metrics[key]) {
        return;
      }
      metrics[key].hiraganaRight += Number(row.hiraganaRight || 0);
      metrics[key].hiraganaWrong += Number(row.hiraganaWrong || 0);
      metrics[key].katakanaRight += Number(row.katakanaRight || 0);
      metrics[key].katakanaWrong += Number(row.katakanaWrong || 0);
    });
    function colorFor(ratio, attempts) {
      if (attempts === 0) {
        return "#f3f4f6";
      }
      if (ratio >= 0.85) {
        return "#b7e4c7";
      }
      if (ratio >= 0.7) {
        return "#fde68a";
      }
      return "#fecaca";
    }
    function tile(label, right, wrong) {
      const attempts = right + wrong;
      const ratio = attempts > 0 ? right / attempts : 0;
      const percent = attempts > 0 ? `${Math.round(ratio * 100)}%` : "-";
      return `<div class="heat-cell" style="background:${colorFor(ratio, attempts)}"><strong>${label}</strong><span>${percent}</span><small>${right}/${attempts || 0}</small></div>`;
    }
    elements.scriptHeatmap.innerHTML = `
    <div class="heat-head">Row</div>
    <div class="heat-head">Hiragana</div>
    <div class="heat-head">Katakana</div>
    ${groups.map((group) => {
      const row = metrics[group.key];
      return `
        <div class="heat-row-label">${group.label}</div>
        ${tile("H", row.hiraganaRight, row.hiraganaWrong)}
        ${tile("K", row.katakanaRight, row.katakanaWrong)}
      `;
    }).join("")}
  `;
  }
  function renderGoalProgress(elements, state) {
    const container = elements.goalProgressBar;
    if (!container) return;
    const todayKey = getTodayKey();
    const today = state.dailyStats[todayKey] || { typingRight: 0, typingWrong: 0, drawingRight: 0, drawingWrong: 0 };
    const todayCategory = state.dailyCategoryStats && state.dailyCategoryStats[todayKey] || { normal: 0, dakuten: 0, yoon: 0 };
    const goals = state.dailyGoals || {
      total: Number(state.dailyGoal || 25),
      typing: 12,
      drawing: 8,
      normal: 10,
      dakuten: 6,
      yoon: 6
    };
    const typingDone = today.typingRight + today.typingWrong;
    const drawingDone = today.drawingRight + today.drawingWrong;
    const totalDone = typingDone + drawingDone;
    function bar(label, done, goal) {
      const safeGoal = Number(goal || 1);
      const pct = Math.min(100, Math.round(done / safeGoal * 100));
      const met = done >= safeGoal;
      return `
      <div class="goal-bar-wrap${met ? " goal-met" : ""}">
        <span class="goal-bar-label">${label}</span>
        <div class="goal-bar-track"><div class="goal-bar-fill" style="width:${pct}%"></div></div>
        <span class="goal-bar-count">${done}/${safeGoal}</span>
      </div>`;
    }
    container.innerHTML = bar("Total", totalDone, goals.total) + bar("Typing", typingDone, goals.typing) + bar("Drawing", drawingDone, goals.drawing) + (state.activeDataset === "kana" ? bar("Normal", todayCategory.normal || 0, goals.normal) + bar("Dakuten", todayCategory.dakuten || 0, goals.dakuten) + bar("Yoon", todayCategory.yoon || 0, goals.yoon) : "");
  }
  function renderSrsScheduleGraph(elements, state) {
    const container = elements.srsScheduleGraph;
    if (!container) return;
    const now = Date.now();
    const buckets = Array.from({ length: 7 }, (_, i) => {
      const start = now + i * 864e5;
      const end = start + 864e5;
      return { label: i === 0 ? "Today" : i === 1 ? "Tmrw" : `+${i}d`, start, end, count: 0 };
    });
    Object.values(state.srsByRomaji || {}).forEach((entry) => {
      const due = Number(entry.dueAt || 0);
      if (due <= 0) return;
      const bucket = buckets.find((b2) => due >= b2.start && due < b2.end);
      if (bucket) bucket.count += 1;
    });
    const max = Math.max(1, ...buckets.map((b2) => b2.count));
    container.innerHTML = `
    <div class="srs-schedule-graph">
      ${buckets.map((b2) => {
      const height = Math.round(b2.count / max * 80);
      return `
          <div class="srs-bar-col">
            <span class="srs-bar-val">${b2.count}</span>
            <div class="srs-bar" style="height:${height}px"></div>
            <span class="srs-bar-label">${b2.label}</span>
          </div>`;
    }).join("")}
    </div>`;
  }
  function addDailyAttempt(state, mode, wasCorrect, category = null) {
    const todayKey = getTodayKey();
    if (!state.dailyStats[todayKey]) {
      state.dailyStats[todayKey] = {
        typingRight: 0,
        typingWrong: 0,
        drawingRight: 0,
        drawingWrong: 0
      };
    }
    if (!state.dailyCategoryStats[todayKey]) {
      state.dailyCategoryStats[todayKey] = {
        normal: 0,
        dakuten: 0,
        yoon: 0
      };
    }
    const entry = state.dailyStats[todayKey];
    if (mode === "typing") {
      if (wasCorrect) {
        entry.typingRight += 1;
      } else {
        entry.typingWrong += 1;
      }
    } else {
      if (wasCorrect) {
        entry.drawingRight += 1;
      } else {
        entry.drawingWrong += 1;
      }
    }
    if (category && state.dailyCategoryStats[todayKey][category] !== void 0) {
      state.dailyCategoryStats[todayKey][category] += 1;
    }
  }
  function renderDailyProgress({ elements, state, setActiveProgressTab: setActiveProgressTab2 }) {
    const todayKey = getTodayKey();
    const hasNewDay = todayKey !== state.progressUiDayMarker;
    state.progressUiDayMarker = todayKey;
    buildDayOptions(elements, state.dailyStats);
    if (hasNewDay) {
      resetProgressTabForNewDay(elements, state.dailyStats);
      setActiveProgressTab2(elements, "backlog");
    }
    renderDailyProgressGraph(elements, state.dailyStats);
    renderDayComparison(elements, state.dailyStats);
    renderDailyHistoryTable(elements, state, state.dailyStats, state.dailyDetailStats || {});
    renderInsights(elements, state);
    renderScriptHeatmap(elements, state);
    renderSrsScheduleGraph(elements, state);
  }
  function bindProgressCompareSelectors(elements, state) {
    elements.compareDayASelect.addEventListener("change", () => renderDayComparison(elements, state.dailyStats));
    elements.compareDayBSelect.addEventListener("change", () => renderDayComparison(elements, state.dailyStats));
  }
  function redrawProgressGraph(elements, state) {
    renderDailyProgressGraph(elements, state.dailyStats);
  }
  var init_progress = __esm({
    "js/features/progress.js"() {
      init_utils();
    }
  });

  // js/features/drawing.js
  function createDrawingFeature({ elements, state, maxDrawingsPerKana, eventBus: eventBus2, EVENT_NAMES: EVENT_NAMES2 }) {
    let drawing = false;
    let activeCanvas = null;
    let drawGuideEnabled = state.drawGuideEnabled !== false;
    const canvases = [
      { canvas: elements.canvasHiragana, ctx: elements.ctxHiragana },
      { canvas: elements.canvasKatakana, ctx: elements.ctxKatakana }
    ];
    function setDrawingMarkButtonsEnabled(enabled) {
      elements.markRightBtn.disabled = !enabled;
      elements.markWrongBtn.disabled = !enabled;
    }
    function setRevealEnabled(enabled) {
      elements.revealBtn.disabled = !enabled;
    }
    function setDrawingCanvasVisibility(mode) {
      const showHiragana = mode === "both" || mode === "hiragana" || mode === "kanji";
      const showKatakana = mode === "both" || mode === "katakana";
      elements.canvasHiragana.closest(".draw-pane").classList.toggle("hidden", !showHiragana);
      elements.canvasKatakana.closest(".draw-pane").classList.toggle("hidden", !showKatakana);
    }
    function clearCanvas(canvas, ctx) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (drawGuideEnabled) {
        ctx.save();
        ctx.strokeStyle = "rgba(79, 70, 229, 0.16)";
        ctx.lineWidth = 1;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, canvas.height);
        ctx.moveTo(0, centerY);
        ctx.lineTo(canvas.width, centerY);
        ctx.stroke();
        const boxPadX = canvas.width * 0.22;
        const boxPadY = canvas.height * 0.18;
        ctx.strokeRect(boxPadX, boxPadY, canvas.width - boxPadX * 2, canvas.height - boxPadY * 2);
        ctx.restore();
      }
    }
    function clearAllCanvases() {
      canvases.forEach(({ canvas, ctx }) => clearCanvas(canvas, ctx));
      setRevealEnabled(false);
    }
    function setGuideEnabled(enabled) {
      drawGuideEnabled = Boolean(enabled);
      clearAllCanvases();
    }
    function getCanvasPoint(canvas, event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * (canvas.width / rect.width),
        y: (event.clientY - rect.top) * (canvas.height / rect.height)
      };
    }
    function startDraw(event) {
      drawing = true;
      activeCanvas = event.currentTarget;
      activeCanvas.setPointerCapture(event.pointerId);
      const ctx = activeCanvas === elements.canvasHiragana ? elements.ctxHiragana : elements.ctxKatakana;
      const point = getCanvasPoint(activeCanvas, event);
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    }
    function draw(event) {
      if (!drawing || activeCanvas !== event.currentTarget) {
        return;
      }
      const ctx = activeCanvas === elements.canvasHiragana ? elements.ctxHiragana : elements.ctxKatakana;
      const point = getCanvasPoint(activeCanvas, event);
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#1f1f1f";
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }
    function endDraw() {
      drawing = false;
      activeCanvas = null;
      const visibleCanvases = canvases.filter(({ canvas }) => {
        const pane = canvas.closest(".draw-pane");
        return pane && !pane.classList.contains("hidden");
      });
      const anyInk = visibleCanvases.some(({ canvas, ctx }) => hasInk(canvas, ctx));
      setRevealEnabled(anyInk);
    }
    function hasInk(canvas, ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 0; i < imageData.length; i += 32) {
        if (imageData[i] < 245 || imageData[i + 1] < 245 || imageData[i + 2] < 245) {
          return true;
        }
      }
      return false;
    }
    function addDrawingSnapshot(kanaChar, canvas, ctx) {
      if (!hasInk(canvas, ctx)) {
        return;
      }
      const existing = state.drawingsByKana[kanaChar] || [];
      existing.unshift(canvas.toDataURL("image/png"));
      if (existing.length > maxDrawingsPerKana) {
        existing.length = maxDrawingsPerKana;
      }
      state.drawingsByKana[kanaChar] = existing;
    }
    function saveCurrentDrawingIfCorrect() {
      if (!state.currentQuestion || state.currentQuestion.kind !== "drawing") {
        return;
      }
      if (state.currentQuestion.canvasMode === "kanji") {
        addDrawingSnapshot(state.currentQuestion.kanji, elements.canvasHiragana, elements.ctxHiragana);
        return;
      }
      if (state.currentQuestion.canvasMode === "both") {
        addDrawingSnapshot(state.currentQuestion.hiragana, elements.canvasHiragana, elements.ctxHiragana);
        addDrawingSnapshot(state.currentQuestion.katakana, elements.canvasKatakana, elements.ctxKatakana);
        return;
      }
      if (state.currentQuestion.canvasMode === "hiragana") {
        addDrawingSnapshot(state.currentQuestion.hiragana, elements.canvasHiragana, elements.ctxHiragana);
        return;
      }
      addDrawingSnapshot(state.currentQuestion.katakana, elements.canvasKatakana, elements.ctxKatakana);
    }
    function openDrawingGallery(kanaChar) {
      const drawings = state.drawingsByKana[kanaChar] || [];
      elements.galleryTitle.textContent = `Saved Drawings: ${kanaChar}`;
      if (drawings.length === 0) {
        elements.galleryBody.innerHTML = '<div class="gallery-empty">No saved drawings yet for this item.</div>';
      } else {
        renderGalleryItems(kanaChar);
      }
      elements.drawingGalleryDialog.showModal();
    }
    function renderGalleryItems(kanaChar) {
      const drawings = state.drawingsByKana[kanaChar] || [];
      if (drawings.length === 0) {
        elements.galleryBody.innerHTML = '<div class="gallery-empty">No saved drawings yet for this item.</div>';
        return;
      }
      elements.galleryBody.innerHTML = drawings.map((imageData, index) => `
        <div class="gallery-item">
          <img src="${imageData}" alt="Saved drawing ${index + 1} for ${kanaChar}" />
          <button type="button" class="btn-danger gallery-delete-btn" data-index="${index}" data-kana="${kanaChar}" aria-label="Delete drawing ${index + 1}">\u2715</button>
        </div>
      `).join("");
      elements.galleryBody.querySelectorAll(".gallery-delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.dataset.index);
          const kana = btn.dataset.kana;
          if (!state.drawingsByKana[kana]) return;
          state.drawingsByKana[kana].splice(idx, 1);
          if (state.drawingsByKana[kana].length === 0) delete state.drawingsByKana[kana];
          renderGalleryItems(kana);
        });
      });
    }
    function bindCanvasEvents() {
      canvases.forEach(({ canvas }) => {
        canvas.addEventListener("pointerdown", startDraw);
        canvas.addEventListener("pointermove", draw);
        canvas.addEventListener("pointerup", endDraw);
        canvas.addEventListener("pointerleave", endDraw);
      });
      if (eventBus2 && EVENT_NAMES2) {
        eventBus2.on(EVENT_NAMES2.QUESTION_NEW, () => setRevealEnabled(false));
      }
    }
    return {
      setDrawingMarkButtonsEnabled,
      setDrawingCanvasVisibility,
      setGuideEnabled,
      clearAllCanvases,
      saveCurrentDrawingIfCorrect,
      openDrawingGallery,
      bindCanvasEvents,
      setRevealEnabled
    };
  }
  var init_drawing = __esm({
    "js/features/drawing.js"() {
    }
  });

  // js/config/syncConfig.js
  var syncConfig;
  var init_syncConfig = __esm({
    "js/config/syncConfig.js"() {
      syncConfig = {
        enabled: true,
        firebase: {
          apiKey: "AIzaSyDsdAj6TIyGkaWSNTg9eIv57OOZqqPvdtk",
          authDomain: "kanaquiz-d0918.firebaseapp.com",
          projectId: "kanaquiz-d0918",
          storageBucket: "kanaquiz-d0918.firebasestorage.app",
          messagingSenderId: "521211743479",
          appId: "1:521211743479:web:5d912e3058b411d4a9d7f2"
        }
      };
    }
  });

  // node_modules/@firebase/util/dist/index.esm2017.js
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("Unable to locate global object.");
  }
  function createMockUserToken(token, projectId) {
    if (token.uid) {
      throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    const header = {
      alg: "none",
      type: "JWT"
    };
    const project = projectId || "demo-project";
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
      throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({
      // Set all required fields to decent defaults
      iss: `https://securetoken.google.com/${project}`,
      aud: project,
      iat,
      exp: iat + 3600,
      auth_time: iat,
      sub,
      user_id: sub,
      firebase: {
        sign_in_provider: "custom",
        identities: {}
      }
    }, token);
    const signature = "";
    return [
      base64urlEncodeWithoutPadding(JSON.stringify(header)),
      base64urlEncodeWithoutPadding(JSON.stringify(payload)),
      signature
    ].join(".");
  }
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isMobileCordova() {
    return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
  }
  function isBrowser() {
    return typeof window !== "undefined" || isWebWorker();
  }
  function isWebWorker() {
    return typeof WorkerGlobalScope !== "undefined" && typeof self !== "undefined" && self instanceof WorkerGlobalScope;
  }
  function isBrowserExtension() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
    return typeof runtime === "object" && runtime.id !== void 0;
  }
  function isReactNative() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
  }
  function isIE() {
    const ua = getUA();
    return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
  }
  function isIndexedDBAvailable() {
    try {
      return typeof indexedDB === "object";
    } catch (e) {
      return false;
    }
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  function isEmpty(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  function deepEqual(a, b2) {
    if (a === b2) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b2);
    for (const k2 of aKeys) {
      if (!bKeys.includes(k2)) {
        return false;
      }
      const aProp = a[k2];
      const bProp = b2[k2];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k2 of bKeys) {
      if (!aKeys.includes(k2)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
      if (Array.isArray(value)) {
        value.forEach((arrayVal) => {
          params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
        });
      } else {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }
    return params.length ? "&" + params.join("&") : "";
  }
  function querystringDecode(querystring2) {
    const obj = {};
    const tokens = querystring2.replace(/^\?/, "").split("&");
    tokens.forEach((token) => {
      if (token) {
        const [key, value] = token.split("=");
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
    return obj;
  }
  function extractQuerystring(url) {
    const queryStart = url.indexOf("?");
    if (!queryStart) {
      return "";
    }
    const fragmentStart = url.indexOf("#", queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
  }
  function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
  }
  function implementsAnyMethods(obj, methods) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    for (const method of methods) {
      if (method in obj && typeof obj[method] === "function") {
        return true;
      }
    }
    return false;
  }
  function noop() {
  }
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }
  var stringToByteArray$1, byteArrayToString, base64, DecodeBase64StringError, base64Encode, base64urlEncodeWithoutPadding, base64Decode, getDefaultsFromGlobal, getDefaultsFromEnvVariable, getDefaultsFromCookie, getDefaults, getDefaultEmulatorHost, getDefaultEmulatorHostnameAndPort, getDefaultAppConfig, getExperimentalSetting, Deferred, ERROR_NAME, FirebaseError, ErrorFactory, PATTERN, ObserverProxy, MAX_VALUE_MILLIS;
  var init_index_esm2017 = __esm({
    "node_modules/@firebase/util/dist/index.esm2017.js"() {
      stringToByteArray$1 = function(str) {
        const out = [];
        let p2 = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c < 128) {
            out[p2++] = c;
          } else if (c < 2048) {
            out[p2++] = c >> 6 | 192;
            out[p2++] = c & 63 | 128;
          } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p2++] = c >> 18 | 240;
            out[p2++] = c >> 12 & 63 | 128;
            out[p2++] = c >> 6 & 63 | 128;
            out[p2++] = c & 63 | 128;
          } else {
            out[p2++] = c >> 12 | 224;
            out[p2++] = c >> 6 & 63 | 128;
            out[p2++] = c & 63 | 128;
          }
        }
        return out;
      };
      byteArrayToString = function(bytes) {
        const out = [];
        let pos = 0, c = 0;
        while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
          } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }
        return out.join("");
      };
      base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,
        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,
        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,
        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,
        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === "function",
        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error("encodeByteArray takes an array as a parameter");
          }
          this.init_();
          const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          const output = [];
          for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
        },
        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          const output = [];
          for (let i = 0; i < input.length; ) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                const outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      DecodeBase64StringError = class extends Error {
        constructor() {
          super(...arguments);
          this.name = "DecodeBase64StringError";
        }
      };
      base64Encode = function(str) {
        const utf8Bytes = stringToByteArray$1(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      base64urlEncodeWithoutPadding = function(str) {
        return base64Encode(str).replace(/\./g, "");
      };
      base64Decode = function(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      };
      getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
      getDefaultsFromEnvVariable = () => {
        if (typeof process === "undefined" || typeof process.env === "undefined") {
          return;
        }
        const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
        if (defaultsJsonString) {
          return JSON.parse(defaultsJsonString);
        }
      };
      getDefaultsFromCookie = () => {
        if (typeof document === "undefined") {
          return;
        }
        let match;
        try {
          match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
        } catch (e) {
          return;
        }
        const decoded = match && base64Decode(match[1]);
        return decoded && JSON.parse(decoded);
      };
      getDefaults = () => {
        try {
          return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
        } catch (e) {
          console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
          return;
        }
      };
      getDefaultEmulatorHost = (productName) => {
        var _a, _b;
        return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
      };
      getDefaultEmulatorHostnameAndPort = (productName) => {
        const host = getDefaultEmulatorHost(productName);
        if (!host) {
          return void 0;
        }
        const separatorIndex = host.lastIndexOf(":");
        if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
          throw new Error(`Invalid host ${host} with no separate hostname and port!`);
        }
        const port = parseInt(host.substring(separatorIndex + 1), 10);
        if (host[0] === "[") {
          return [host.substring(1, separatorIndex - 1), port];
        } else {
          return [host.substring(0, separatorIndex), port];
        }
      };
      getDefaultAppConfig = () => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
      };
      getExperimentalSetting = (name4) => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name4}`];
      };
      Deferred = class {
        constructor() {
          this.reject = () => {
          };
          this.resolve = () => {
          };
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        wrapCallback(callback) {
          return (error, value) => {
            if (error) {
              this.reject(error);
            } else {
              this.resolve(value);
            }
            if (typeof callback === "function") {
              this.promise.catch(() => {
              });
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        }
      };
      ERROR_NAME = "FirebaseError";
      FirebaseError = class _FirebaseError extends Error {
        constructor(code, message, customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          this.name = ERROR_NAME;
          Object.setPrototypeOf(this, _FirebaseError.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
      };
      ErrorFactory = class {
        constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        create(code, ...data) {
          const customData = data[0] || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : "Error";
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        }
      };
      PATTERN = /\{\$([^}]+)}/g;
      ObserverProxy = class {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        constructor(executor, onNoObservers) {
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          this.task.then(() => {
            executor(this);
          }).catch((e) => {
            this.error(e);
          });
        }
        next(value) {
          this.forEachObserver((observer) => {
            observer.next(value);
          });
        }
        error(error) {
          this.forEachObserver((observer) => {
            observer.error(error);
          });
          this.close(error);
        }
        complete() {
          this.forEachObserver((observer) => {
            observer.complete();
          });
          this.close();
        }
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */
        subscribe(nextOrObserver, error, complete) {
          let observer;
          if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
            throw new Error("Missing Observer.");
          }
          if (implementsAnyMethods(nextOrObserver, [
            "next",
            "error",
            "complete"
          ])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error,
              complete
            };
          }
          if (observer.next === void 0) {
            observer.next = noop;
          }
          if (observer.error === void 0) {
            observer.error = noop;
          }
          if (observer.complete === void 0) {
            observer.complete = noop;
          }
          const unsub = this.unsubscribeOne.bind(this, this.observers.length);
          if (this.finalized) {
            this.task.then(() => {
              try {
                if (this.finalError) {
                  observer.error(this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {
              }
              return;
            });
          }
          this.observers.push(observer);
          return unsub;
        }
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.
        unsubscribeOne(i) {
          if (this.observers === void 0 || this.observers[i] === void 0) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== void 0) {
            this.onNoObservers(this);
          }
        }
        forEachObserver(fn) {
          if (this.finalized) {
            return;
          }
          for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.
        sendOne(i, fn) {
          this.task.then(() => {
            if (this.observers !== void 0 && this.observers[i] !== void 0) {
              try {
                fn(this.observers[i]);
              } catch (e) {
                if (typeof console !== "undefined" && console.error) {
                  console.error(e);
                }
              }
            }
          });
        }
        close(err) {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          if (err !== void 0) {
            this.finalError = err;
          }
          this.task.then(() => {
            this.observers = void 0;
            this.onNoObservers = void 0;
          });
        }
      };
      MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
    }
  });

  // node_modules/@firebase/component/dist/esm/index.esm2017.js
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var Component, DEFAULT_ENTRY_NAME, Provider, ComponentContainer;
  var init_index_esm20172 = __esm({
    "node_modules/@firebase/component/dist/esm/index.esm2017.js"() {
      init_index_esm2017();
      Component = class {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        constructor(name4, instanceFactory, type) {
          this.name = name4;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          this.serviceProps = {};
          this.instantiationMode = "LAZY";
          this.onInstanceCreated = null;
        }
        setInstantiationMode(mode) {
          this.instantiationMode = mode;
          return this;
        }
        setMultipleInstances(multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        }
        setServiceProps(props) {
          this.serviceProps = props;
          return this;
        }
        setInstanceCreatedCallback(callback) {
          this.onInstanceCreated = callback;
          return this;
        }
      };
      DEFAULT_ENTRY_NAME = "[DEFAULT]";
      Provider = class {
        constructor(name4, container) {
          this.name = name4;
          this.container = container;
          this.component = null;
          this.instances = /* @__PURE__ */ new Map();
          this.instancesDeferred = /* @__PURE__ */ new Map();
          this.instancesOptions = /* @__PURE__ */ new Map();
          this.onInitCallbacks = /* @__PURE__ */ new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */
        get(identifier) {
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
              try {
                const instance = this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier
                });
                if (instance) {
                  deferred.resolve(instance);
                }
              } catch (e) {
              }
            }
          }
          return this.instancesDeferred.get(normalizedIdentifier).promise;
        }
        getImmediate(options) {
          var _a;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
          const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
          if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
              return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
            } catch (e) {
              if (optional) {
                return null;
              } else {
                throw e;
              }
            }
          } else {
            if (optional) {
              return null;
            } else {
              throw Error(`Service ${this.name} is not available`);
            }
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(component) {
          if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
          }
          if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
          }
          this.component = component;
          if (!this.shouldAutoInitialize()) {
            return;
          }
          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            } catch (e) {
            }
          }
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
              const instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
              instanceDeferred.resolve(instance);
            } catch (e) {
            }
          }
        }
        clearInstance(identifier = DEFAULT_ENTRY_NAME) {
          this.instancesDeferred.delete(identifier);
          this.instancesOptions.delete(identifier);
          this.instances.delete(identifier);
        }
        // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?
        async delete() {
          const services = Array.from(this.instances.values());
          await Promise.all([
            ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
            ...services.filter((service) => "_delete" in service).map((service) => service._delete())
          ]);
        }
        isComponentSet() {
          return this.component != null;
        }
        isInitialized(identifier = DEFAULT_ENTRY_NAME) {
          return this.instances.has(identifier);
        }
        getOptions(identifier = DEFAULT_ENTRY_NAME) {
          return this.instancesOptions.get(identifier) || {};
        }
        initialize(opts = {}) {
          const { options = {} } = opts;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
          if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
          }
          if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
          }
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
          });
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
              instanceDeferred.resolve(instance);
            }
          }
          return instance;
        }
        /**
         *
         * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
         * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
         *
         * @param identifier An optional instance identifier
         * @returns a function to unregister the callback
         */
        onInit(callback, identifier) {
          var _a;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
          existingCallbacks.add(callback);
          this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
          const existingInstance = this.instances.get(normalizedIdentifier);
          if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
          }
          return () => {
            existingCallbacks.delete(callback);
          };
        }
        /**
         * Invoke onInit callbacks synchronously
         * @param instance the service instance`
         */
        invokeOnInitCallbacks(instance, identifier) {
          const callbacks = this.onInitCallbacks.get(identifier);
          if (!callbacks) {
            return;
          }
          for (const callback of callbacks) {
            try {
              callback(instance, identifier);
            } catch (_a) {
            }
          }
        }
        getOrInitializeService({ instanceIdentifier, options = {} }) {
          let instance = this.instances.get(instanceIdentifier);
          if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
              instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
              options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            if (this.component.onInstanceCreated) {
              try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
              } catch (_a) {
              }
            }
          }
          return instance || null;
        }
        normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
          if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          } else {
            return identifier;
          }
        }
        shouldAutoInitialize() {
          return !!this.component && this.component.instantiationMode !== "EXPLICIT";
        }
      };
      ComponentContainer = class {
        constructor(name4) {
          this.name = name4;
          this.providers = /* @__PURE__ */ new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */
        addComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
          }
          provider.setComponent(component);
        }
        addOrOverwriteComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            this.providers.delete(component.name);
          }
          this.addComponent(component);
        }
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */
        getProvider(name4) {
          if (this.providers.has(name4)) {
            return this.providers.get(name4);
          }
          const provider = new Provider(name4, this);
          this.providers.set(name4, provider);
          return provider;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      };
    }
  });

  // node_modules/@firebase/logger/dist/esm/index.esm2017.js
  function setLogLevel(level) {
    instances.forEach((inst) => {
      inst.setLogLevel(level);
    });
  }
  function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
      let customLogLevel = null;
      if (options && options.level) {
        customLogLevel = levelStringToEnum[options.level];
      }
      if (logCallback === null) {
        instance.userLogHandler = null;
      } else {
        instance.userLogHandler = (instance2, level, ...args) => {
          const message = args.map((arg) => {
            if (arg == null) {
              return null;
            } else if (typeof arg === "string") {
              return arg;
            } else if (typeof arg === "number" || typeof arg === "boolean") {
              return arg.toString();
            } else if (arg instanceof Error) {
              return arg.message;
            } else {
              try {
                return JSON.stringify(arg);
              } catch (ignored) {
                return null;
              }
            }
          }).filter((arg) => arg).join(" ");
          if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance2.logLevel)) {
            logCallback({
              level: LogLevel[level].toLowerCase(),
              message,
              args,
              type: instance2.name
            });
          }
        };
      }
    }
  }
  var instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
  var init_index_esm20173 = __esm({
    "node_modules/@firebase/logger/dist/esm/index.esm2017.js"() {
      instances = [];
      (function(LogLevel2) {
        LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
        LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
        LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
        LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
        LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
        LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
      })(LogLevel || (LogLevel = {}));
      levelStringToEnum = {
        "debug": LogLevel.DEBUG,
        "verbose": LogLevel.VERBOSE,
        "info": LogLevel.INFO,
        "warn": LogLevel.WARN,
        "error": LogLevel.ERROR,
        "silent": LogLevel.SILENT
      };
      defaultLogLevel = LogLevel.INFO;
      ConsoleMethod = {
        [LogLevel.DEBUG]: "log",
        [LogLevel.VERBOSE]: "log",
        [LogLevel.INFO]: "info",
        [LogLevel.WARN]: "warn",
        [LogLevel.ERROR]: "error"
      };
      defaultLogHandler = (instance, logType, ...args) => {
        if (logType < instance.logLevel) {
          return;
        }
        const now = (/* @__PURE__ */ new Date()).toISOString();
        const method = ConsoleMethod[logType];
        if (method) {
          console[method](`[${now}]  ${instance.name}:`, ...args);
        } else {
          throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
        }
      };
      Logger = class {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        constructor(name4) {
          this.name = name4;
          this._logLevel = defaultLogLevel;
          this._logHandler = defaultLogHandler;
          this._userLogHandler = null;
          instances.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(val) {
          if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
          }
          this._logLevel = val;
        }
        // Workaround for setter/getter having to be the same type.
        setLogLevel(val) {
          this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(val) {
          if (typeof val !== "function") {
            throw new TypeError("Value assigned to `logHandler` must be a function");
          }
          this._logHandler = val;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(val) {
          this._userLogHandler = val;
        }
        /**
         * The functions below are all based on the `console` interface
         */
        debug(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
          this._logHandler(this, LogLevel.DEBUG, ...args);
        }
        log(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
          this._logHandler(this, LogLevel.VERBOSE, ...args);
        }
        info(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
          this._logHandler(this, LogLevel.INFO, ...args);
        }
        warn(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
          this._logHandler(this, LogLevel.WARN, ...args);
        }
        error(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
          this._logHandler(this, LogLevel.ERROR, ...args);
        }
      };
    }
  });

  // node_modules/idb/build/wrap-idb-value.js
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
  var init_wrap_idb_value = __esm({
    "node_modules/idb/build/wrap-idb-value.js"() {
      instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      cursorRequestMap = /* @__PURE__ */ new WeakMap();
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "objectStoreNames") {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
    }
  });

  // node_modules/idb/build/index.js
  function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name4, version4);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  var readMethods, writeMethods, cachedMethods;
  var init_build = __esm({
    "node_modules/idb/build/index.js"() {
      init_wrap_idb_value();
      init_wrap_idb_value();
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
    }
  });

  // node_modules/@firebase/app/dist/esm/index.esm2017.js
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  function _addComponent(app, component) {
    try {
      app.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
  }
  function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app of _apps.values()) {
      _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()) {
      _addComponent(serverApp, component);
    }
    return true;
  }
  function _getProvider(app, name4) {
    const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name4);
  }
  function _removeServiceInstance(app, name4, instanceIdentifier = DEFAULT_ENTRY_NAME2) {
    _getProvider(app, name4).clearInstance(instanceIdentifier);
  }
  function _isFirebaseApp(obj) {
    return obj.options !== void 0;
  }
  function _isFirebaseServerApp(obj) {
    return obj.settings !== void 0;
  }
  function _clearComponents() {
    _components.clear();
  }
  function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== "object") {
      const name5 = rawConfig;
      rawConfig = { name: name5 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name4 = config.name;
    if (typeof name4 !== "string" || !name4) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name4)
      });
    }
    options || (options = getDefaultAppConfig());
    if (!options) {
      throw ERROR_FACTORY.create(
        "no-options"
        /* AppError.NO_OPTIONS */
      );
    }
    const existingApp = _apps.get(name4);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
      }
    }
    const container = new ComponentContainer(name4);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
  }
  function initializeServerApp(_options, _serverAppConfig) {
    if (isBrowser() && !isWebWorker()) {
      throw ERROR_FACTORY.create(
        "invalid-server-app-environment"
        /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
      );
    }
    if (_serverAppConfig.automaticDataCollectionEnabled === void 0) {
      _serverAppConfig.automaticDataCollectionEnabled = false;
    }
    let appOptions;
    if (_isFirebaseApp(_options)) {
      appOptions = _options.options;
    } else {
      appOptions = _options;
    }
    const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
    if (nameObj.releaseOnDeref !== void 0) {
      delete nameObj.releaseOnDeref;
    }
    const hashCode = (s) => {
      return [...s].reduce((hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0, 0);
    };
    if (_serverAppConfig.releaseOnDeref !== void 0) {
      if (typeof FinalizationRegistry === "undefined") {
        throw ERROR_FACTORY.create("finalization-registry-not-supported", {});
      }
    }
    const nameString = "" + hashCode(JSON.stringify(nameObj));
    const existingApp = _serverApps.get(nameString);
    if (existingApp) {
      existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
      return existingApp;
    }
    const container = new ComponentContainer(nameString);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
  }
  function getApp(name4 = DEFAULT_ENTRY_NAME2) {
    const app = _apps.get(name4);
    if (!app && name4 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
      return initializeApp();
    }
    if (!app) {
      throw ERROR_FACTORY.create("no-app", { appName: name4 });
    }
    return app;
  }
  function getApps() {
    return Array.from(_apps.values());
  }
  async function deleteApp(app) {
    let cleanupProviders = false;
    const name4 = app.name;
    if (_apps.has(name4)) {
      cleanupProviders = true;
      _apps.delete(name4);
    } else if (_serverApps.has(name4)) {
      const firebaseServerApp = app;
      if (firebaseServerApp.decRefCount() <= 0) {
        _serverApps.delete(name4);
        cleanupProviders = true;
      }
    }
    if (cleanupProviders) {
      await Promise.all(app.container.getProviders().map((provider) => provider.delete()));
      app.isDeleted = true;
    }
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version4}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      `${library}-version`,
      () => ({ library, version: version4 }),
      "VERSION"
      /* ComponentType.VERSION */
    ));
  }
  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== "function") {
      throw ERROR_FACTORY.create(
        "invalid-log-argument"
        /* AppError.INVALID_LOG_ARGUMENT */
      );
    }
    setUserLogHandler(logCallback, options);
  }
  function setLogLevel2(logLevel) {
    setLogLevel(logLevel);
  }
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              try {
                db.createObjectStore(STORE_NAME);
              } catch (e) {
                console.warn(e);
              }
          }
        }
      }).catch((e) => {
        throw ERROR_FACTORY.create("idb-open", {
          originalErrorMessage: e.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME);
      const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
      await tx.done;
      return result;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-get", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app));
      await tx.done;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-set", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
  }
  function getUTCDateString() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    _registerComponent(new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name$p, version$1, variant);
    registerVersion(name$p, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  var PlatformLoggerServiceImpl, name$p, version$1, logger, name$o, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version, DEFAULT_ENTRY_NAME2, PLATFORM_LOG_STRING, _apps, _serverApps, _components, ERRORS, ERROR_FACTORY, FirebaseAppImpl, FirebaseServerAppImpl, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, STORED_HEARTBEAT_RETENTION_MAX_MILLIS, HeartbeatServiceImpl, HeartbeatStorageImpl;
  var init_index_esm20174 = __esm({
    "node_modules/@firebase/app/dist/esm/index.esm2017.js"() {
      init_index_esm20172();
      init_index_esm20173();
      init_index_esm2017();
      init_index_esm2017();
      init_build();
      PlatformLoggerServiceImpl = class {
        constructor(container) {
          this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        getPlatformInfoString() {
          const providers = this.container.getProviders();
          return providers.map((provider) => {
            if (isVersionServiceProvider(provider)) {
              const service = provider.getImmediate();
              return `${service.library}/${service.version}`;
            } else {
              return null;
            }
          }).filter((logString) => logString).join(" ");
        }
      };
      name$p = "@firebase/app";
      version$1 = "0.10.8";
      logger = new Logger("@firebase/app");
      name$o = "@firebase/app-compat";
      name$n = "@firebase/analytics-compat";
      name$m = "@firebase/analytics";
      name$l = "@firebase/app-check-compat";
      name$k = "@firebase/app-check";
      name$j = "@firebase/auth";
      name$i = "@firebase/auth-compat";
      name$h = "@firebase/database";
      name$g = "@firebase/database-compat";
      name$f = "@firebase/functions";
      name$e = "@firebase/functions-compat";
      name$d = "@firebase/installations";
      name$c = "@firebase/installations-compat";
      name$b = "@firebase/messaging";
      name$a = "@firebase/messaging-compat";
      name$9 = "@firebase/performance";
      name$8 = "@firebase/performance-compat";
      name$7 = "@firebase/remote-config";
      name$6 = "@firebase/remote-config-compat";
      name$5 = "@firebase/storage";
      name$4 = "@firebase/storage-compat";
      name$3 = "@firebase/firestore";
      name$2 = "@firebase/vertexai-preview";
      name$1 = "@firebase/firestore-compat";
      name = "firebase";
      version = "10.12.5";
      DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
      PLATFORM_LOG_STRING = {
        [name$p]: "fire-core",
        [name$o]: "fire-core-compat",
        [name$m]: "fire-analytics",
        [name$n]: "fire-analytics-compat",
        [name$k]: "fire-app-check",
        [name$l]: "fire-app-check-compat",
        [name$j]: "fire-auth",
        [name$i]: "fire-auth-compat",
        [name$h]: "fire-rtdb",
        [name$g]: "fire-rtdb-compat",
        [name$f]: "fire-fn",
        [name$e]: "fire-fn-compat",
        [name$d]: "fire-iid",
        [name$c]: "fire-iid-compat",
        [name$b]: "fire-fcm",
        [name$a]: "fire-fcm-compat",
        [name$9]: "fire-perf",
        [name$8]: "fire-perf-compat",
        [name$7]: "fire-rc",
        [name$6]: "fire-rc-compat",
        [name$5]: "fire-gcs",
        [name$4]: "fire-gcs-compat",
        [name$3]: "fire-fst",
        [name$1]: "fire-fst-compat",
        [name$2]: "fire-vertex",
        "fire-js": "fire-js",
        [name]: "fire-js-all"
      };
      _apps = /* @__PURE__ */ new Map();
      _serverApps = /* @__PURE__ */ new Map();
      _components = /* @__PURE__ */ new Map();
      ERRORS = {
        [
          "no-app"
          /* AppError.NO_APP */
        ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
        [
          "bad-app-name"
          /* AppError.BAD_APP_NAME */
        ]: "Illegal App name: '{$appName}'",
        [
          "duplicate-app"
          /* AppError.DUPLICATE_APP */
        ]: "Firebase App named '{$appName}' already exists with different options or config",
        [
          "app-deleted"
          /* AppError.APP_DELETED */
        ]: "Firebase App named '{$appName}' already deleted",
        [
          "server-app-deleted"
          /* AppError.SERVER_APP_DELETED */
        ]: "Firebase Server App has been deleted",
        [
          "no-options"
          /* AppError.NO_OPTIONS */
        ]: "Need to provide options, when not being deployed to hosting via source.",
        [
          "invalid-app-argument"
          /* AppError.INVALID_APP_ARGUMENT */
        ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        [
          "invalid-log-argument"
          /* AppError.INVALID_LOG_ARGUMENT */
        ]: "First argument to `onLog` must be null or a function.",
        [
          "idb-open"
          /* AppError.IDB_OPEN */
        ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "idb-get"
          /* AppError.IDB_GET */
        ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "idb-set"
          /* AppError.IDB_WRITE */
        ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "idb-delete"
          /* AppError.IDB_DELETE */
        ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "finalization-registry-not-supported"
          /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
        ]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        [
          "invalid-server-app-environment"
          /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
        ]: "FirebaseServerApp is not for use in browser environments."
      };
      ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
      FirebaseAppImpl = class {
        constructor(options, config, container) {
          this._isDeleted = false;
          this._options = Object.assign({}, options);
          this._config = Object.assign({}, config);
          this._name = config.name;
          this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
          this._container = container;
          this.container.addComponent(new Component(
            "app",
            () => this,
            "PUBLIC"
            /* ComponentType.PUBLIC */
          ));
        }
        get automaticDataCollectionEnabled() {
          this.checkDestroyed();
          return this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(val) {
          this.checkDestroyed();
          this._automaticDataCollectionEnabled = val;
        }
        get name() {
          this.checkDestroyed();
          return this._name;
        }
        get options() {
          this.checkDestroyed();
          return this._options;
        }
        get config() {
          this.checkDestroyed();
          return this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(val) {
          this._isDeleted = val;
        }
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */
        checkDestroyed() {
          if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
          }
        }
      };
      FirebaseServerAppImpl = class extends FirebaseAppImpl {
        constructor(options, serverConfig, name4, container) {
          const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== void 0 ? serverConfig.automaticDataCollectionEnabled : false;
          const config = {
            name: name4,
            automaticDataCollectionEnabled
          };
          if (options.apiKey !== void 0) {
            super(options, config, container);
          } else {
            const appImpl = options;
            super(appImpl.options, config, container);
          }
          this._serverConfig = Object.assign({ automaticDataCollectionEnabled }, serverConfig);
          this._finalizationRegistry = null;
          if (typeof FinalizationRegistry !== "undefined") {
            this._finalizationRegistry = new FinalizationRegistry(() => {
              this.automaticCleanup();
            });
          }
          this._refCount = 0;
          this.incRefCount(this._serverConfig.releaseOnDeref);
          this._serverConfig.releaseOnDeref = void 0;
          serverConfig.releaseOnDeref = void 0;
          registerVersion(name$p, version$1, "serverapp");
        }
        toJSON() {
          return void 0;
        }
        get refCount() {
          return this._refCount;
        }
        // Increment the reference count of this server app. If an object is provided, register it
        // with the finalization registry.
        incRefCount(obj) {
          if (this.isDeleted) {
            return;
          }
          this._refCount++;
          if (obj !== void 0 && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
          }
        }
        // Decrement the reference count.
        decRefCount() {
          if (this.isDeleted) {
            return 0;
          }
          return --this._refCount;
        }
        // Invoked by the FinalizationRegistry callback to note that this app should go through its
        // reference counts and delete itself if no reference count remain. The coordinating logic that
        // handles this is in deleteApp(...).
        automaticCleanup() {
          void deleteApp(this);
        }
        get settings() {
          this.checkDestroyed();
          return this._serverConfig;
        }
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */
        checkDestroyed() {
          if (this.isDeleted) {
            throw ERROR_FACTORY.create(
              "server-app-deleted"
              /* AppError.SERVER_APP_DELETED */
            );
          }
        }
      };
      SDK_VERSION = version;
      DB_NAME = "firebase-heartbeat-database";
      DB_VERSION = 1;
      STORE_NAME = "firebase-heartbeat-store";
      dbPromise = null;
      MAX_HEADER_BYTES = 1024;
      STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
      HeartbeatServiceImpl = class {
        constructor(container) {
          this.container = container;
          this._heartbeatsCache = null;
          const app = this.container.getProvider("app").getImmediate();
          this._storage = new HeartbeatStorageImpl(app);
          this._heartbeatsCachePromise = this._storage.read().then((result) => {
            this._heartbeatsCache = result;
            return result;
          });
        }
        /**
         * Called to report a heartbeat. The function will generate
         * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
         * to IndexedDB.
         * Note that we only store one heartbeat per day. So if a heartbeat for today is
         * already logged, subsequent calls to this function in the same day will be ignored.
         */
        async triggerHeartbeat() {
          var _a, _b;
          const platformLogger = this.container.getProvider("platform-logger").getImmediate();
          const agent = platformLogger.getPlatformInfoString();
          const date = getUTCDateString();
          if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
            if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
              return;
            }
          }
          if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
            return;
          } else {
            this._heartbeatsCache.heartbeats.push({ date, agent });
          }
          this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
          });
          return this._storage.overwrite(this._heartbeatsCache);
        }
        /**
         * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
         * It also clears all heartbeats from memory as well as in IndexedDB.
         *
         * NOTE: Consuming product SDKs should not send the header if this method
         * returns an empty string.
         */
        async getHeartbeatsHeader() {
          var _a;
          if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
          }
          if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
            return "";
          }
          const date = getUTCDateString();
          const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
          const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
          this._heartbeatsCache.lastSentHeartbeatDate = date;
          if (unsentEntries.length > 0) {
            this._heartbeatsCache.heartbeats = unsentEntries;
            await this._storage.overwrite(this._heartbeatsCache);
          } else {
            this._heartbeatsCache.heartbeats = [];
            void this._storage.overwrite(this._heartbeatsCache);
          }
          return headerString;
        }
      };
      HeartbeatStorageImpl = class {
        constructor(app) {
          this.app = app;
          this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
        }
        async runIndexedDBEnvironmentCheck() {
          if (!isIndexedDBAvailable()) {
            return false;
          } else {
            return validateIndexedDBOpenable().then(() => true).catch(() => false);
          }
        }
        /**
         * Read all heartbeats.
         */
        async read() {
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return { heartbeats: [] };
          } else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
              return idbHeartbeatObject;
            } else {
              return { heartbeats: [] };
            }
          }
        }
        // overwrite the storage with the provided heartbeats
        async overwrite(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: heartbeatsObject.heartbeats
            });
          }
        }
        // add heartbeats
        async add(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: [
                ...existingHeartbeatsObject.heartbeats,
                ...heartbeatsObject.heartbeats
              ]
            });
          }
        }
      };
      registerCoreComponents("");
    }
  });

  // node_modules/firebase/app/dist/esm/index.esm.js
  var index_esm_exports = {};
  __export(index_esm_exports, {
    FirebaseError: () => FirebaseError,
    SDK_VERSION: () => SDK_VERSION,
    _DEFAULT_ENTRY_NAME: () => DEFAULT_ENTRY_NAME2,
    _addComponent: () => _addComponent,
    _addOrOverwriteComponent: () => _addOrOverwriteComponent,
    _apps: () => _apps,
    _clearComponents: () => _clearComponents,
    _components: () => _components,
    _getProvider: () => _getProvider,
    _isFirebaseApp: () => _isFirebaseApp,
    _isFirebaseServerApp: () => _isFirebaseServerApp,
    _registerComponent: () => _registerComponent,
    _removeServiceInstance: () => _removeServiceInstance,
    _serverApps: () => _serverApps,
    deleteApp: () => deleteApp,
    getApp: () => getApp,
    getApps: () => getApps,
    initializeApp: () => initializeApp,
    initializeServerApp: () => initializeServerApp,
    onLog: () => onLog,
    registerVersion: () => registerVersion,
    setLogLevel: () => setLogLevel2
  });
  var name2, version2;
  var init_index_esm = __esm({
    "node_modules/firebase/app/dist/esm/index.esm.js"() {
      init_index_esm20174();
      init_index_esm20174();
      name2 = "firebase";
      version2 = "10.12.5";
      registerVersion(name2, version2, "app");
    }
  });

  // node_modules/tslib/tslib.es6.mjs
  function __rest(s, e) {
    var t = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t[p2[i]] = s[p2[i]];
      }
    return t;
  }
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
    }
  });

  // node_modules/@firebase/auth/dist/esm2017/index-21205181.js
  function _debugErrorMap() {
    return {
      [
        "admin-restricted-operation"
        /* AuthErrorCode.ADMIN_ONLY_OPERATION */
      ]: "This operation is restricted to administrators only.",
      [
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ]: "",
      [
        "app-not-authorized"
        /* AuthErrorCode.APP_NOT_AUTHORIZED */
      ]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
      [
        "app-not-installed"
        /* AuthErrorCode.APP_NOT_INSTALLED */
      ]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
      [
        "captcha-check-failed"
        /* AuthErrorCode.CAPTCHA_CHECK_FAILED */
      ]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
      [
        "code-expired"
        /* AuthErrorCode.CODE_EXPIRED */
      ]: "The SMS code has expired. Please re-send the verification code to try again.",
      [
        "cordova-not-ready"
        /* AuthErrorCode.CORDOVA_NOT_READY */
      ]: "Cordova framework is not ready.",
      [
        "cors-unsupported"
        /* AuthErrorCode.CORS_UNSUPPORTED */
      ]: "This browser is not supported.",
      [
        "credential-already-in-use"
        /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
      ]: "This credential is already associated with a different user account.",
      [
        "custom-token-mismatch"
        /* AuthErrorCode.CREDENTIAL_MISMATCH */
      ]: "The custom token corresponds to a different audience.",
      [
        "requires-recent-login"
        /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
      ]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
      [
        "dependent-sdk-initialized-before-auth"
        /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
      ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      [
        "dynamic-link-not-activated"
        /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */
      ]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
      [
        "email-change-needs-verification"
        /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */
      ]: "Multi-factor users must always have a verified email.",
      [
        "email-already-in-use"
        /* AuthErrorCode.EMAIL_EXISTS */
      ]: "The email address is already in use by another account.",
      [
        "emulator-config-failed"
        /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
      ]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
      [
        "expired-action-code"
        /* AuthErrorCode.EXPIRED_OOB_CODE */
      ]: "The action code has expired.",
      [
        "cancelled-popup-request"
        /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
      ]: "This operation has been cancelled due to another conflicting popup being opened.",
      [
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      ]: "An internal AuthError has occurred.",
      [
        "invalid-app-credential"
        /* AuthErrorCode.INVALID_APP_CREDENTIAL */
      ]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
      [
        "invalid-app-id"
        /* AuthErrorCode.INVALID_APP_ID */
      ]: "The mobile app identifier is not registered for the current project.",
      [
        "invalid-user-token"
        /* AuthErrorCode.INVALID_AUTH */
      ]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
      [
        "invalid-auth-event"
        /* AuthErrorCode.INVALID_AUTH_EVENT */
      ]: "An internal AuthError has occurred.",
      [
        "invalid-verification-code"
        /* AuthErrorCode.INVALID_CODE */
      ]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
      [
        "invalid-continue-uri"
        /* AuthErrorCode.INVALID_CONTINUE_URI */
      ]: "The continue URL provided in the request is invalid.",
      [
        "invalid-cordova-configuration"
        /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
      ]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
      [
        "invalid-custom-token"
        /* AuthErrorCode.INVALID_CUSTOM_TOKEN */
      ]: "The custom token format is incorrect. Please check the documentation.",
      [
        "invalid-dynamic-link-domain"
        /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
      ]: "The provided dynamic link domain is not configured or authorized for the current project.",
      [
        "invalid-email"
        /* AuthErrorCode.INVALID_EMAIL */
      ]: "The email address is badly formatted.",
      [
        "invalid-emulator-scheme"
        /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
      ]: "Emulator URL must start with a valid scheme (http:// or https://).",
      [
        "invalid-api-key"
        /* AuthErrorCode.INVALID_API_KEY */
      ]: "Your API key is invalid, please check you have copied it correctly.",
      [
        "invalid-cert-hash"
        /* AuthErrorCode.INVALID_CERT_HASH */
      ]: "The SHA-1 certificate hash provided is invalid.",
      [
        "invalid-credential"
        /* AuthErrorCode.INVALID_CREDENTIAL */
      ]: "The supplied auth credential is incorrect, malformed or has expired.",
      [
        "invalid-message-payload"
        /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */
      ]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
      [
        "invalid-multi-factor-session"
        /* AuthErrorCode.INVALID_MFA_SESSION */
      ]: "The request does not contain a valid proof of first factor successful sign-in.",
      [
        "invalid-oauth-provider"
        /* AuthErrorCode.INVALID_OAUTH_PROVIDER */
      ]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
      [
        "invalid-oauth-client-id"
        /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */
      ]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
      [
        "unauthorized-domain"
        /* AuthErrorCode.INVALID_ORIGIN */
      ]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
      [
        "invalid-action-code"
        /* AuthErrorCode.INVALID_OOB_CODE */
      ]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
      [
        "wrong-password"
        /* AuthErrorCode.INVALID_PASSWORD */
      ]: "The password is invalid or the user does not have a password.",
      [
        "invalid-persistence-type"
        /* AuthErrorCode.INVALID_PERSISTENCE */
      ]: "The specified persistence type is invalid. It can only be local, session or none.",
      [
        "invalid-phone-number"
        /* AuthErrorCode.INVALID_PHONE_NUMBER */
      ]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
      [
        "invalid-provider-id"
        /* AuthErrorCode.INVALID_PROVIDER_ID */
      ]: "The specified provider ID is invalid.",
      [
        "invalid-recipient-email"
        /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */
      ]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
      [
        "invalid-sender"
        /* AuthErrorCode.INVALID_SENDER */
      ]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
      [
        "invalid-verification-id"
        /* AuthErrorCode.INVALID_SESSION_INFO */
      ]: "The verification ID used to create the phone auth credential is invalid.",
      [
        "invalid-tenant-id"
        /* AuthErrorCode.INVALID_TENANT_ID */
      ]: "The Auth instance's tenant ID is invalid.",
      [
        "login-blocked"
        /* AuthErrorCode.LOGIN_BLOCKED */
      ]: "Login blocked by user-provided method: {$originalMessage}",
      [
        "missing-android-pkg-name"
        /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
      ]: "An Android Package Name must be provided if the Android App is required to be installed.",
      [
        "auth-domain-config-required"
        /* AuthErrorCode.MISSING_AUTH_DOMAIN */
      ]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
      [
        "missing-app-credential"
        /* AuthErrorCode.MISSING_APP_CREDENTIAL */
      ]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
      [
        "missing-verification-code"
        /* AuthErrorCode.MISSING_CODE */
      ]: "The phone auth credential was created with an empty SMS verification code.",
      [
        "missing-continue-uri"
        /* AuthErrorCode.MISSING_CONTINUE_URI */
      ]: "A continue URL must be provided in the request.",
      [
        "missing-iframe-start"
        /* AuthErrorCode.MISSING_IFRAME_START */
      ]: "An internal AuthError has occurred.",
      [
        "missing-ios-bundle-id"
        /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
      ]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
      [
        "missing-or-invalid-nonce"
        /* AuthErrorCode.MISSING_OR_INVALID_NONCE */
      ]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
      [
        "missing-password"
        /* AuthErrorCode.MISSING_PASSWORD */
      ]: "A non-empty password must be provided",
      [
        "missing-multi-factor-info"
        /* AuthErrorCode.MISSING_MFA_INFO */
      ]: "No second factor identifier is provided.",
      [
        "missing-multi-factor-session"
        /* AuthErrorCode.MISSING_MFA_SESSION */
      ]: "The request is missing proof of first factor successful sign-in.",
      [
        "missing-phone-number"
        /* AuthErrorCode.MISSING_PHONE_NUMBER */
      ]: "To send verification codes, provide a phone number for the recipient.",
      [
        "missing-verification-id"
        /* AuthErrorCode.MISSING_SESSION_INFO */
      ]: "The phone auth credential was created with an empty verification ID.",
      [
        "app-deleted"
        /* AuthErrorCode.MODULE_DESTROYED */
      ]: "This instance of FirebaseApp has been deleted.",
      [
        "multi-factor-info-not-found"
        /* AuthErrorCode.MFA_INFO_NOT_FOUND */
      ]: "The user does not have a second factor matching the identifier provided.",
      [
        "multi-factor-auth-required"
        /* AuthErrorCode.MFA_REQUIRED */
      ]: "Proof of ownership of a second factor is required to complete sign-in.",
      [
        "account-exists-with-different-credential"
        /* AuthErrorCode.NEED_CONFIRMATION */
      ]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
      [
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      ]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
      [
        "no-auth-event"
        /* AuthErrorCode.NO_AUTH_EVENT */
      ]: "An internal AuthError has occurred.",
      [
        "no-such-provider"
        /* AuthErrorCode.NO_SUCH_PROVIDER */
      ]: "User was not linked to an account with the given provider.",
      [
        "null-user"
        /* AuthErrorCode.NULL_USER */
      ]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
      [
        "operation-not-allowed"
        /* AuthErrorCode.OPERATION_NOT_ALLOWED */
      ]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
      [
        "operation-not-supported-in-this-environment"
        /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      ]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      [
        "popup-blocked"
        /* AuthErrorCode.POPUP_BLOCKED */
      ]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
      [
        "popup-closed-by-user"
        /* AuthErrorCode.POPUP_CLOSED_BY_USER */
      ]: "The popup has been closed by the user before finalizing the operation.",
      [
        "provider-already-linked"
        /* AuthErrorCode.PROVIDER_ALREADY_LINKED */
      ]: "User can only be linked to one identity for the given provider.",
      [
        "quota-exceeded"
        /* AuthErrorCode.QUOTA_EXCEEDED */
      ]: "The project's quota for this operation has been exceeded.",
      [
        "redirect-cancelled-by-user"
        /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
      ]: "The redirect operation has been cancelled by the user before finalizing.",
      [
        "redirect-operation-pending"
        /* AuthErrorCode.REDIRECT_OPERATION_PENDING */
      ]: "A redirect sign-in operation is already pending.",
      [
        "rejected-credential"
        /* AuthErrorCode.REJECTED_CREDENTIAL */
      ]: "The request contains malformed or mismatching credentials.",
      [
        "second-factor-already-in-use"
        /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */
      ]: "The second factor is already enrolled on this account.",
      [
        "maximum-second-factor-count-exceeded"
        /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */
      ]: "The maximum allowed number of second factors on a user has been exceeded.",
      [
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ]: "The provided tenant ID does not match the Auth instance's tenant ID",
      [
        "timeout"
        /* AuthErrorCode.TIMEOUT */
      ]: "The operation has timed out.",
      [
        "user-token-expired"
        /* AuthErrorCode.TOKEN_EXPIRED */
      ]: "The user's credential is no longer valid. The user must sign in again.",
      [
        "too-many-requests"
        /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */
      ]: "We have blocked all requests from this device due to unusual activity. Try again later.",
      [
        "unauthorized-continue-uri"
        /* AuthErrorCode.UNAUTHORIZED_DOMAIN */
      ]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
      [
        "unsupported-first-factor"
        /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */
      ]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
      [
        "unsupported-persistence-type"
        /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */
      ]: "The current environment does not support the specified persistence type.",
      [
        "unsupported-tenant-operation"
        /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */
      ]: "This operation is not supported in a multi-tenant context.",
      [
        "unverified-email"
        /* AuthErrorCode.UNVERIFIED_EMAIL */
      ]: "The operation requires a verified email.",
      [
        "user-cancelled"
        /* AuthErrorCode.USER_CANCELLED */
      ]: "The user did not grant your application the permissions it requested.",
      [
        "user-not-found"
        /* AuthErrorCode.USER_DELETED */
      ]: "There is no user record corresponding to this identifier. The user may have been deleted.",
      [
        "user-disabled"
        /* AuthErrorCode.USER_DISABLED */
      ]: "The user account has been disabled by an administrator.",
      [
        "user-mismatch"
        /* AuthErrorCode.USER_MISMATCH */
      ]: "The supplied credentials do not correspond to the previously signed in user.",
      [
        "user-signed-out"
        /* AuthErrorCode.USER_SIGNED_OUT */
      ]: "",
      [
        "weak-password"
        /* AuthErrorCode.WEAK_PASSWORD */
      ]: "The password must be 6 characters long or more.",
      [
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ]: "This browser is not supported or 3rd party cookies and data may be disabled.",
      [
        "already-initialized"
        /* AuthErrorCode.ALREADY_INITIALIZED */
      ]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
      [
        "missing-recaptcha-token"
        /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
      ]: "The reCAPTCHA token is missing when sending request to the backend.",
      [
        "invalid-recaptcha-token"
        /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */
      ]: "The reCAPTCHA token is invalid when sending request to the backend.",
      [
        "invalid-recaptcha-action"
        /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */
      ]: "The reCAPTCHA action is invalid when sending request to the backend.",
      [
        "recaptcha-not-enabled"
        /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */
      ]: "reCAPTCHA Enterprise integration is not enabled for this project.",
      [
        "missing-client-type"
        /* AuthErrorCode.MISSING_CLIENT_TYPE */
      ]: "The reCAPTCHA client type is missing when sending request to the backend.",
      [
        "missing-recaptcha-version"
        /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */
      ]: "The reCAPTCHA version is missing when sending request to the backend.",
      [
        "invalid-req-type"
        /* AuthErrorCode.INVALID_REQ_TYPE */
      ]: "Invalid request parameters.",
      [
        "invalid-recaptcha-version"
        /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */
      ]: "The reCAPTCHA version is invalid when sending request to the backend.",
      [
        "unsupported-password-policy-schema-version"
        /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */
      ]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
      [
        "password-does-not-meet-requirements"
        /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
      ]: "The password does not meet the requirements."
    };
  }
  function _prodErrorMap() {
    return {
      [
        "dependent-sdk-initialized-before-auth"
        /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
      ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    };
  }
  function _logWarn(msg, ...args) {
    if (logClient.logLevel <= LogLevel.WARN) {
      logClient.warn(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
  }
  function _logError(msg, ...args) {
    if (logClient.logLevel <= LogLevel.ERROR) {
      logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
  }
  function _fail(authOrCode, ...rest) {
    throw createErrorInternal(authOrCode, ...rest);
  }
  function _createError(authOrCode, ...rest) {
    return createErrorInternal(authOrCode, ...rest);
  }
  function _errorWithCustomMessage(auth, code, message) {
    const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
    const factory = new ErrorFactory("auth", "Firebase", errorMap);
    return factory.create(code, {
      appName: auth.name
    });
  }
  function _serverAppCurrentUserOperationNotSupportedError(auth) {
    return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
  }
  function _assertInstanceOf(auth, object, instance) {
    const constructorInstance = instance;
    if (!(object instanceof constructorInstance)) {
      if (constructorInstance.name !== object.constructor.name) {
        _fail(
          auth,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
      }
      throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
    }
  }
  function createErrorInternal(authOrCode, ...rest) {
    if (typeof authOrCode !== "string") {
      const code = rest[0];
      const fullParams = [...rest.slice(1)];
      if (fullParams[0]) {
        fullParams[0].appName = authOrCode.name;
      }
      return authOrCode._errorFactory.create(code, ...fullParams);
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
  }
  function _assert(assertion, authOrCode, ...rest) {
    if (!assertion) {
      throw createErrorInternal(authOrCode, ...rest);
    }
  }
  function debugFail(failure) {
    const message = `INTERNAL ASSERTION FAILED: ` + failure;
    _logError(message);
    throw new Error(message);
  }
  function debugAssert(assertion, message) {
    if (!assertion) {
      debugFail(message);
    }
  }
  function _getCurrentUrl() {
    var _a;
    return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
  }
  function _isHttpOrHttps() {
    return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
  }
  function _getCurrentScheme() {
    var _a;
    return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
  }
  function _isOnline() {
    if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && // Apply only for traditional web apps and Chrome extensions.
    // This is especially true for Cordova apps which have unreliable
    // navigator.onLine behavior unless cordova-plugin-network-information is
    // installed which overwrites the native navigator.onLine value and
    // defines navigator.connection.
    (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
      return navigator.onLine;
    }
    return true;
  }
  function _getUserLanguage() {
    if (typeof navigator === "undefined") {
      return null;
    }
    const navigatorLanguage = navigator;
    return (
      // Most reliable, but only supported in Chrome/Firefox.
      navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
      // UI, not the language set in browser settings.
      navigatorLanguage.language || // Couldn't determine language.
      null
    );
  }
  function _emulatorUrl(config, path) {
    debugAssert(config.emulator, "Emulator should always be set here");
    const { url } = config.emulator;
    if (!path) {
      return url;
    }
    return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
  }
  function _addTidIfNecessary(auth, request) {
    if (auth.tenantId && !request.tenantId) {
      return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
    }
    return request;
  }
  async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
    return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
      let body = {};
      let params = {};
      if (request) {
        if (method === "GET") {
          params = request;
        } else {
          body = {
            body: JSON.stringify(request)
          };
        }
      }
      const query2 = querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
      const headers = await auth._getAdditionalHeaders();
      headers[
        "Content-Type"
        /* HttpHeader.CONTENT_TYPE */
      ] = "application/json";
      if (auth.languageCode) {
        headers[
          "X-Firebase-Locale"
          /* HttpHeader.X_FIREBASE_LOCALE */
        ] = auth.languageCode;
      }
      return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query2), Object.assign({
        method,
        headers,
        referrerPolicy: "no-referrer"
      }, body));
    });
  }
  async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
    auth._canInitEmulator = false;
    const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
    try {
      const networkTimeout = new NetworkTimeout(auth);
      const response = await Promise.race([
        fetchFn(),
        networkTimeout.promise
      ]);
      networkTimeout.clearNetworkTimeout();
      const json = await response.json();
      if ("needConfirmation" in json) {
        throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
      }
      if (response.ok && !("errorMessage" in json)) {
        return json;
      } else {
        const errorMessage = response.ok ? json.errorMessage : json.error.message;
        const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
        if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
          throw _makeTaggedError(auth, "credential-already-in-use", json);
        } else if (serverErrorCode === "EMAIL_EXISTS") {
          throw _makeTaggedError(auth, "email-already-in-use", json);
        } else if (serverErrorCode === "USER_DISABLED") {
          throw _makeTaggedError(auth, "user-disabled", json);
        }
        const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
        if (serverErrorMessage) {
          throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
        } else {
          _fail(auth, authError);
        }
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        throw e;
      }
      _fail(auth, "network-request-failed", { "message": String(e) });
    }
  }
  async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
    const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
    if ("mfaPendingCredential" in serverResponse) {
      _fail(auth, "multi-factor-auth-required", {
        _serverResponse: serverResponse
      });
    }
    return serverResponse;
  }
  function _getFinalTarget(auth, host, path, query2) {
    const base = `${host}${path}?${query2}`;
    if (!auth.config.emulator) {
      return `${auth.config.apiScheme}://${base}`;
    }
    return _emulatorUrl(auth.config, base);
  }
  function _parseEnforcementState(enforcementStateStr) {
    switch (enforcementStateStr) {
      case "ENFORCE":
        return "ENFORCE";
      case "AUDIT":
        return "AUDIT";
      case "OFF":
        return "OFF";
      default:
        return "ENFORCEMENT_STATE_UNSPECIFIED";
    }
  }
  function _makeTaggedError(auth, code, response) {
    const errorParams = {
      appName: auth.name
    };
    if (response.email) {
      errorParams.email = response.email;
    }
    if (response.phoneNumber) {
      errorParams.phoneNumber = response.phoneNumber;
    }
    const error = _createError(auth, code, errorParams);
    error.customData._tokenResponse = response;
    return error;
  }
  function isV2(grecaptcha) {
    return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
  }
  function isEnterprise(grecaptcha) {
    return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
  }
  async function getRecaptchaParams(auth) {
    return (await _performApiRequest(
      auth,
      "GET",
      "/v1/recaptchaParams"
      /* Endpoint.GET_RECAPTCHA_PARAM */
    )).recaptchaSiteKey || "";
  }
  async function getRecaptchaConfig(auth, request) {
    return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
  }
  async function deleteAccount(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
  }
  async function deleteLinkedAccounts(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
  }
  async function getAccountInfo(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
  }
  function utcTimestampToDateString(utcTimestamp) {
    if (!utcTimestamp) {
      return void 0;
    }
    try {
      const date = new Date(Number(utcTimestamp));
      if (!isNaN(date.getTime())) {
        return date.toUTCString();
      }
    } catch (e) {
    }
    return void 0;
  }
  function getIdToken(user, forceRefresh = false) {
    return getModularInstance(user).getIdToken(forceRefresh);
  }
  async function getIdTokenResult(user, forceRefresh = false) {
    const userInternal = getModularInstance(user);
    const token = await userInternal.getIdToken(forceRefresh);
    const claims = _parseToken(token);
    _assert(
      claims && claims.exp && claims.auth_time && claims.iat,
      userInternal.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
    const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
    return {
      claims,
      token,
      authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
      issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
      expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
      signInProvider: signInProvider || null,
      signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
    };
  }
  function secondsStringToMilliseconds(seconds) {
    return Number(seconds) * 1e3;
  }
  function _parseToken(token) {
    const [algorithm, payload, signature] = token.split(".");
    if (algorithm === void 0 || payload === void 0 || signature === void 0) {
      _logError("JWT malformed, contained fewer than 3 sections");
      return null;
    }
    try {
      const decoded = base64Decode(payload);
      if (!decoded) {
        _logError("Failed to decode base64 JWT payload");
        return null;
      }
      return JSON.parse(decoded);
    } catch (e) {
      _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
      return null;
    }
  }
  function _tokenExpiresIn(token) {
    const parsedToken = _parseToken(token);
    _assert(
      parsedToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof parsedToken.exp !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof parsedToken.iat !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return Number(parsedToken.exp) - Number(parsedToken.iat);
  }
  async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
    if (bypassAuthState) {
      return promise;
    }
    try {
      return await promise;
    } catch (e) {
      if (e instanceof FirebaseError && isUserInvalidated(e)) {
        if (user.auth.currentUser === user) {
          await user.auth.signOut();
        }
      }
      throw e;
    }
  }
  function isUserInvalidated({ code }) {
    return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
  }
  async function _reloadWithoutSaving(user) {
    var _a;
    const auth = user.auth;
    const idToken = await user.getIdToken();
    const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
    _assert(
      response === null || response === void 0 ? void 0 : response.users.length,
      auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const coreAccount = response.users[0];
    user._notifyReloadListener(coreAccount);
    const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
    const providerData = mergeProviderData(user.providerData, newProviderData);
    const oldIsAnonymous = user.isAnonymous;
    const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous
    };
    Object.assign(user, updates);
  }
  async function reload(user) {
    const userInternal = getModularInstance(user);
    await _reloadWithoutSaving(userInternal);
    await userInternal.auth._persistUserIfCurrent(userInternal);
    userInternal.auth._notifyListenersIfCurrent(userInternal);
  }
  function mergeProviderData(original, newData) {
    const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
    return [...deduped, ...newData];
  }
  function extractProviderData(providers) {
    return providers.map((_a) => {
      var { providerId } = _a, provider = __rest(_a, ["providerId"]);
      return {
        providerId,
        uid: provider.rawId || "",
        displayName: provider.displayName || null,
        email: provider.email || null,
        phoneNumber: provider.phoneNumber || null,
        photoURL: provider.photoUrl || null
      };
    });
  }
  async function requestStsToken(auth, refreshToken) {
    const response = await _performFetchWithErrorHandling(auth, {}, async () => {
      const body = querystring({
        "grant_type": "refresh_token",
        "refresh_token": refreshToken
      }).slice(1);
      const { tokenApiHost, apiKey } = auth.config;
      const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
      const headers = await auth._getAdditionalHeaders();
      headers[
        "Content-Type"
        /* HttpHeader.CONTENT_TYPE */
      ] = "application/x-www-form-urlencoded";
      return FetchProvider.fetch()(url, {
        method: "POST",
        headers,
        body
      });
    });
    return {
      accessToken: response.access_token,
      expiresIn: response.expires_in,
      refreshToken: response.refresh_token
    };
  }
  async function revokeToken(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth, request));
  }
  function assertStringOrUndefined(assertion, appName) {
    _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
  }
  function _getInstance(cls) {
    debugAssert(cls instanceof Function, "Expected a class definition");
    let instance = instanceCache.get(cls);
    if (instance) {
      debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
      return instance;
    }
    instance = new cls();
    instanceCache.set(cls, instance);
    return instance;
  }
  function _persistenceKeyName(key, apiKey, appName) {
    return `${"firebase"}:${key}:${apiKey}:${appName}`;
  }
  function _getBrowserName(userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
      return "Opera";
    } else if (_isIEMobile(ua)) {
      return "IEMobile";
    } else if (ua.includes("msie") || ua.includes("trident/")) {
      return "IE";
    } else if (ua.includes("edge/")) {
      return "Edge";
    } else if (_isFirefox(ua)) {
      return "Firefox";
    } else if (ua.includes("silk/")) {
      return "Silk";
    } else if (_isBlackBerry(ua)) {
      return "Blackberry";
    } else if (_isWebOS(ua)) {
      return "Webos";
    } else if (_isSafari(ua)) {
      return "Safari";
    } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
      return "Chrome";
    } else if (_isAndroid(ua)) {
      return "Android";
    } else {
      const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
      const matches = userAgent.match(re);
      if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
        return matches[1];
      }
    }
    return "Other";
  }
  function _isFirefox(ua = getUA()) {
    return /firefox\//i.test(ua);
  }
  function _isSafari(userAgent = getUA()) {
    const ua = userAgent.toLowerCase();
    return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
  }
  function _isChromeIOS(ua = getUA()) {
    return /crios\//i.test(ua);
  }
  function _isIEMobile(ua = getUA()) {
    return /iemobile/i.test(ua);
  }
  function _isAndroid(ua = getUA()) {
    return /android/i.test(ua);
  }
  function _isBlackBerry(ua = getUA()) {
    return /blackberry/i.test(ua);
  }
  function _isWebOS(ua = getUA()) {
    return /webos/i.test(ua);
  }
  function _isIOS(ua = getUA()) {
    return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
  }
  function _isIOSStandalone(ua = getUA()) {
    var _a;
    return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
  }
  function _isIE10() {
    return isIE() && document.documentMode === 10;
  }
  function _isMobileBrowser(ua = getUA()) {
    return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
  }
  function _isIframe() {
    try {
      return !!(window && window !== window.top);
    } catch (e) {
      return false;
    }
  }
  function _getClientVersion(clientPlatform, frameworks = []) {
    let reportedPlatform;
    switch (clientPlatform) {
      case "Browser":
        reportedPlatform = _getBrowserName(getUA());
        break;
      case "Worker":
        reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
        break;
      default:
        reportedPlatform = clientPlatform;
    }
    const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
    return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
  }
  async function _getPasswordPolicy(auth, request = {}) {
    return _performApiRequest(auth, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth, request));
  }
  function _castAuth(auth) {
    return getModularInstance(auth);
  }
  function _setExternalJSProvider(p2) {
    externalJSProvider = p2;
  }
  function _loadJS(url) {
    return externalJSProvider.loadJS(url);
  }
  function _recaptchaV2ScriptUrl() {
    return externalJSProvider.recaptchaV2Script;
  }
  function _recaptchaEnterpriseScriptUrl() {
    return externalJSProvider.recaptchaEnterpriseScript;
  }
  function _gapiScriptUrl() {
    return externalJSProvider.gapiScript;
  }
  function _generateCallbackName(prefix) {
    return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
  }
  async function injectRecaptchaFields(auth, request, action, captchaResp = false) {
    const verifier = new RecaptchaEnterpriseVerifier(auth);
    let captchaResponse;
    try {
      captchaResponse = await verifier.verify(action);
    } catch (error) {
      captchaResponse = await verifier.verify(action, true);
    }
    const newRequest = Object.assign({}, request);
    if (!captchaResp) {
      Object.assign(newRequest, { captchaResponse });
    } else {
      Object.assign(newRequest, { "captchaResp": captchaResponse });
    }
    Object.assign(newRequest, {
      "clientType": "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    });
    Object.assign(newRequest, {
      "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    });
    return newRequest;
  }
  async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod) {
    var _a;
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const requestWithRecaptcha = await injectRecaptchaFields(
        authInstance,
        request,
        actionName,
        actionName === "getOobCode"
        /* RecaptchaActionName.GET_OOB_CODE */
      );
      return actionMethod(authInstance, requestWithRecaptcha);
    } else {
      return actionMethod(authInstance, request).catch(async (error) => {
        if (error.code === `auth/${"missing-recaptcha-token"}`) {
          console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const requestWithRecaptcha = await injectRecaptchaFields(
            authInstance,
            request,
            actionName,
            actionName === "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
          );
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return Promise.reject(error);
        }
      });
    }
  }
  async function _initializeRecaptchaConfig(auth) {
    const authInternal = _castAuth(auth);
    const response = await getRecaptchaConfig(authInternal, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    });
    const config = new RecaptchaConfig(response);
    if (authInternal.tenantId == null) {
      authInternal._agentRecaptchaConfig = config;
    } else {
      authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
    }
    if (config.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const verifier = new RecaptchaEnterpriseVerifier(authInternal);
      void verifier.verify();
    }
  }
  function initializeAuth(app, deps) {
    const provider = _getProvider(app, "auth");
    if (provider.isInitialized()) {
      const auth2 = provider.getImmediate();
      const initialOptions = provider.getOptions();
      if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
        return auth2;
      } else {
        _fail(
          auth2,
          "already-initialized"
          /* AuthErrorCode.ALREADY_INITIALIZED */
        );
      }
    }
    const auth = provider.initialize({ options: deps });
    return auth;
  }
  function _initializeAuthInstance(auth, deps) {
    const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
    const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
    if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
      auth._updateErrorMap(deps.errorMap);
    }
    auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
  }
  function connectAuthEmulator(auth, url, options) {
    const authInternal = _castAuth(auth);
    _assert(
      authInternal._canInitEmulator,
      authInternal,
      "emulator-config-failed"
      /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    );
    _assert(
      /^https?:\/\//.test(url),
      authInternal,
      "invalid-emulator-scheme"
      /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
    );
    const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
    const protocol = extractProtocol(url);
    const { host, port } = extractHostAndPort(url);
    const portStr = port === null ? "" : `:${port}`;
    authInternal.config.emulator = { url: `${protocol}//${host}${portStr}/` };
    authInternal.settings.appVerificationDisabledForTesting = true;
    authInternal.emulatorConfig = Object.freeze({
      host,
      port,
      protocol: protocol.replace(":", ""),
      options: Object.freeze({ disableWarnings })
    });
    if (!disableWarnings) {
      emitEmulatorWarning();
    }
  }
  function extractProtocol(url) {
    const protocolEnd = url.indexOf(":");
    return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
  }
  function extractHostAndPort(url) {
    const protocol = extractProtocol(url);
    const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
    if (!authority) {
      return { host: "", port: null };
    }
    const hostAndPort = authority[2].split("@").pop() || "";
    const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
    if (bracketedIPv6) {
      const host = bracketedIPv6[1];
      return { host, port: parsePort(hostAndPort.substr(host.length + 1)) };
    } else {
      const [host, port] = hostAndPort.split(":");
      return { host, port: parsePort(port) };
    }
  }
  function parsePort(portStr) {
    if (!portStr) {
      return null;
    }
    const port = Number(portStr);
    if (isNaN(port)) {
      return null;
    }
    return port;
  }
  function emitEmulatorWarning() {
    function attachBanner() {
      const el = document.createElement("p");
      const sty = el.style;
      el.innerText = "Running in emulator mode. Do not use with production credentials.";
      sty.position = "fixed";
      sty.width = "100%";
      sty.backgroundColor = "#ffffff";
      sty.border = ".1em solid #000000";
      sty.color = "#b50000";
      sty.bottom = "0px";
      sty.left = "0px";
      sty.margin = "0px";
      sty.zIndex = "10000";
      sty.textAlign = "center";
      el.classList.add("firebase-emulator-warning");
      document.body.appendChild(el);
    }
    if (typeof console !== "undefined" && typeof console.info === "function") {
      console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
    }
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", attachBanner);
      } else {
        attachBanner();
      }
    }
  }
  async function resetPassword(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
  }
  async function updateEmailPassword(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
  }
  async function linkEmailPassword(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
  }
  async function applyActionCode$1(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
  }
  async function signInWithPassword(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
  }
  async function sendOobCode(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
  }
  async function sendEmailVerification$1(auth, request) {
    return sendOobCode(auth, request);
  }
  async function sendPasswordResetEmail$1(auth, request) {
    return sendOobCode(auth, request);
  }
  async function sendSignInLinkToEmail$1(auth, request) {
    return sendOobCode(auth, request);
  }
  async function verifyAndChangeEmail(auth, request) {
    return sendOobCode(auth, request);
  }
  async function signInWithEmailLink$1(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
  }
  async function signInWithEmailLinkForLinking(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
  }
  async function signInWithIdp(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
  }
  async function sendPhoneVerificationCode(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
  }
  async function signInWithPhoneNumber$1(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  }
  async function linkWithPhoneNumber$1(auth, request) {
    const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
    if (response.temporaryProof) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
    }
    return response;
  }
  async function verifyPhoneNumberForExisting(auth, request) {
    const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
  }
  function parseMode(mode) {
    switch (mode) {
      case "recoverEmail":
        return "RECOVER_EMAIL";
      case "resetPassword":
        return "PASSWORD_RESET";
      case "signIn":
        return "EMAIL_SIGNIN";
      case "verifyEmail":
        return "VERIFY_EMAIL";
      case "verifyAndChangeEmail":
        return "VERIFY_AND_CHANGE_EMAIL";
      case "revertSecondFactorAddition":
        return "REVERT_SECOND_FACTOR_ADDITION";
      default:
        return null;
    }
  }
  function parseDeepLink(url) {
    const link = querystringDecode(extractQuerystring(url))["link"];
    const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
    const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
    const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
    return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
  }
  function parseActionCodeURL(link) {
    return ActionCodeURL.parseLink(link);
  }
  async function signUp(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
  }
  function providerIdForResponse(response) {
    if (response.providerId) {
      return response.providerId;
    }
    if ("phoneNumber" in response) {
      return "phone";
    }
    return null;
  }
  async function signInAnonymously(auth) {
    var _a;
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authInternal = _castAuth(auth);
    await authInternal._initializationPromise;
    if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
      return new UserCredentialImpl({
        user: authInternal.currentUser,
        providerId: null,
        operationType: "signIn"
        /* OperationType.SIGN_IN */
      });
    }
    const response = await signUp(authInternal, {
      returnSecureToken: true
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
  }
  function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
    const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
    return idTokenProvider.catch((error) => {
      if (error.code === `auth/${"multi-factor-auth-required"}`) {
        throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
      }
      throw error;
    });
  }
  function providerDataAsNames(providerData) {
    return new Set(providerData.map(({ providerId }) => providerId).filter((pid) => !!pid));
  }
  async function unlink(user, providerId) {
    const userInternal = getModularInstance(user);
    await _assertLinkedStatus(true, userInternal, providerId);
    const { providerUserInfo } = await deleteLinkedAccounts(userInternal.auth, {
      idToken: await userInternal.getIdToken(),
      deleteProvider: [providerId]
    });
    const providersLeft = providerDataAsNames(providerUserInfo || []);
    userInternal.providerData = userInternal.providerData.filter((pd) => providersLeft.has(pd.providerId));
    if (!providersLeft.has(
      "phone"
      /* ProviderId.PHONE */
    )) {
      userInternal.phoneNumber = null;
    }
    await userInternal.auth._persistUserIfCurrent(userInternal);
    return userInternal;
  }
  async function _link$1(user, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link", response);
  }
  async function _assertLinkedStatus(expected, user, provider) {
    await _reloadWithoutSaving(user);
    const providerIds = providerDataAsNames(user.providerData);
    const code = expected === false ? "provider-already-linked" : "no-such-provider";
    _assert(providerIds.has(provider) === expected, user.auth, code);
  }
  async function _reauthenticate(user, credential, bypassAuthState = false) {
    const { auth } = user;
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const operationType = "reauthenticate";
    try {
      const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
      _assert(
        response.idToken,
        auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const parsed = _parseToken(response.idToken);
      _assert(
        parsed,
        auth,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      const { sub: localId } = parsed;
      _assert(
        user.uid === localId,
        auth,
        "user-mismatch"
        /* AuthErrorCode.USER_MISMATCH */
      );
      return UserCredentialImpl._forOperation(user, operationType, response);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
        _fail(
          auth,
          "user-mismatch"
          /* AuthErrorCode.USER_MISMATCH */
        );
      }
      throw e;
    }
  }
  async function _signInWithCredential(auth, credential, bypassAuthState = false) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const operationType = "signIn";
    const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
    if (!bypassAuthState) {
      await auth._updateCurrentUser(userCredential.user);
    }
    return userCredential;
  }
  async function signInWithCredential(auth, credential) {
    return _signInWithCredential(_castAuth(auth), credential);
  }
  async function linkWithCredential(user, credential) {
    const userInternal = getModularInstance(user);
    await _assertLinkedStatus(false, userInternal, credential.providerId);
    return _link$1(userInternal, credential);
  }
  async function reauthenticateWithCredential(user, credential) {
    return _reauthenticate(getModularInstance(user), credential);
  }
  async function signInWithCustomToken$1(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
  }
  async function signInWithCustomToken(auth, customToken) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authInternal = _castAuth(auth);
    const response = await signInWithCustomToken$1(authInternal, {
      token: customToken,
      returnSecureToken: true
    });
    const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
    await authInternal._updateCurrentUser(cred.user);
    return cred;
  }
  function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
    var _a;
    _assert(
      ((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0,
      auth,
      "invalid-continue-uri"
      /* AuthErrorCode.INVALID_CONTINUE_URI */
    );
    _assert(
      typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0,
      auth,
      "invalid-dynamic-link-domain"
      /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
    );
    request.continueUrl = actionCodeSettings.url;
    request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
    request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
    if (actionCodeSettings.iOS) {
      _assert(
        actionCodeSettings.iOS.bundleId.length > 0,
        auth,
        "missing-ios-bundle-id"
        /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
      );
      request.iOSBundleId = actionCodeSettings.iOS.bundleId;
    }
    if (actionCodeSettings.android) {
      _assert(
        actionCodeSettings.android.packageName.length > 0,
        auth,
        "missing-android-pkg-name"
        /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
      );
      request.androidInstallApp = actionCodeSettings.android.installApp;
      request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
      request.androidPackageName = actionCodeSettings.android.packageName;
    }
  }
  async function recachePasswordPolicy(auth) {
    const authInternal = _castAuth(auth);
    if (authInternal._getPasswordPolicyInternal()) {
      await authInternal._updatePasswordPolicy();
    }
  }
  async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
    const authInternal = _castAuth(auth);
    const request = {
      requestType: "PASSWORD_RESET",
      email,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    };
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
    }
    await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1);
  }
  async function confirmPasswordReset(auth, oobCode, newPassword) {
    await resetPassword(getModularInstance(auth), {
      oobCode,
      newPassword
    }).catch(async (error) => {
      if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
        void recachePasswordPolicy(auth);
      }
      throw error;
    });
  }
  async function applyActionCode(auth, oobCode) {
    await applyActionCode$1(getModularInstance(auth), { oobCode });
  }
  async function checkActionCode(auth, oobCode) {
    const authModular = getModularInstance(auth);
    const response = await resetPassword(authModular, { oobCode });
    const operation = response.requestType;
    _assert(
      operation,
      authModular,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    switch (operation) {
      case "EMAIL_SIGNIN":
        break;
      case "VERIFY_AND_CHANGE_EMAIL":
        _assert(
          response.newEmail,
          authModular,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        break;
      case "REVERT_SECOND_FACTOR_ADDITION":
        _assert(
          response.mfaInfo,
          authModular,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
      // fall through
      default:
        _assert(
          response.email,
          authModular,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
    let multiFactorInfo = null;
    if (response.mfaInfo) {
      multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
    }
    return {
      data: {
        email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
        previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
        multiFactorInfo
      },
      operation
    };
  }
  async function verifyPasswordResetCode(auth, code) {
    const { data } = await checkActionCode(getModularInstance(auth), code);
    return data.email;
  }
  async function createUserWithEmailAndPassword(auth, email, password) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authInternal = _castAuth(auth);
    const request = {
      returnSecureToken: true,
      email,
      password,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    };
    const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp);
    const response = await signUpResponse.catch((error) => {
      if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
        void recachePasswordPolicy(auth);
      }
      throw error;
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
  }
  function signInWithEmailAndPassword(auth, email, password) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    return signInWithCredential(getModularInstance(auth), EmailAuthProvider.credential(email, password)).catch(async (error) => {
      if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
        void recachePasswordPolicy(auth);
      }
      throw error;
    });
  }
  async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
    const authInternal = _castAuth(auth);
    const request = {
      requestType: "EMAIL_SIGNIN",
      email,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */
    };
    function setActionCodeSettings(request2, actionCodeSettings2) {
      _assert(
        actionCodeSettings2.handleCodeInApp,
        authInternal,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      if (actionCodeSettings2) {
        _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
      }
    }
    setActionCodeSettings(request, actionCodeSettings);
    await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1);
  }
  function isSignInWithEmailLink(auth, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
  }
  async function signInWithEmailLink(auth, email, emailLink) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authModular = getModularInstance(auth);
    const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
    _assert(
      credential._tenantId === (authModular.tenantId || null),
      authModular,
      "tenant-id-mismatch"
      /* AuthErrorCode.TENANT_ID_MISMATCH */
    );
    return signInWithCredential(authModular, credential);
  }
  async function createAuthUri(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
  }
  async function fetchSignInMethodsForEmail(auth, email) {
    const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
    const request = {
      identifier: email,
      continueUri
    };
    const { signinMethods } = await createAuthUri(getModularInstance(auth), request);
    return signinMethods || [];
  }
  async function sendEmailVerification(user, actionCodeSettings) {
    const userInternal = getModularInstance(user);
    const idToken = await user.getIdToken();
    const request = {
      requestType: "VERIFY_EMAIL",
      idToken
    };
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    }
    const { email } = await sendEmailVerification$1(userInternal.auth, request);
    if (email !== user.email) {
      await user.reload();
    }
  }
  async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
    const userInternal = getModularInstance(user);
    const idToken = await user.getIdToken();
    const request = {
      requestType: "VERIFY_AND_CHANGE_EMAIL",
      idToken,
      newEmail
    };
    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    }
    const { email } = await verifyAndChangeEmail(userInternal.auth, request);
    if (email !== user.email) {
      await user.reload();
    }
  }
  async function updateProfile$1(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
  }
  async function updateProfile(user, { displayName, photoURL: photoUrl }) {
    if (displayName === void 0 && photoUrl === void 0) {
      return;
    }
    const userInternal = getModularInstance(user);
    const idToken = await userInternal.getIdToken();
    const profileRequest = {
      idToken,
      displayName,
      photoUrl,
      returnSecureToken: true
    };
    const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
    userInternal.displayName = response.displayName || null;
    userInternal.photoURL = response.photoUrl || null;
    const passwordProvider = userInternal.providerData.find(
      ({ providerId }) => providerId === "password"
      /* ProviderId.PASSWORD */
    );
    if (passwordProvider) {
      passwordProvider.displayName = userInternal.displayName;
      passwordProvider.photoURL = userInternal.photoURL;
    }
    await userInternal._updateTokensIfNecessary(response);
  }
  function updateEmail(user, newEmail) {
    const userInternal = getModularInstance(user);
    if (_isFirebaseServerApp(userInternal.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    }
    return updateEmailOrPassword(userInternal, newEmail, null);
  }
  function updatePassword(user, newPassword) {
    return updateEmailOrPassword(getModularInstance(user), null, newPassword);
  }
  async function updateEmailOrPassword(user, email, password) {
    const { auth } = user;
    const idToken = await user.getIdToken();
    const request = {
      idToken,
      returnSecureToken: true
    };
    if (email) {
      request.email = email;
    }
    if (password) {
      request.password = password;
    }
    const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
    await user._updateTokensIfNecessary(
      response,
      /* reload */
      true
    );
  }
  function _fromIdTokenResponse(idTokenResponse) {
    var _a, _b;
    if (!idTokenResponse) {
      return null;
    }
    const { providerId } = idTokenResponse;
    const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
    const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
    if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
      const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
      if (signInProvider) {
        const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
        return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
      }
    }
    if (!providerId) {
      return null;
    }
    switch (providerId) {
      case "facebook.com":
        return new FacebookAdditionalUserInfo(isNewUser, profile);
      case "github.com":
        return new GithubAdditionalUserInfo(isNewUser, profile);
      case "google.com":
        return new GoogleAdditionalUserInfo(isNewUser, profile);
      case "twitter.com":
        return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
      case "custom":
      case "anonymous":
        return new GenericAdditionalUserInfo(isNewUser, null);
      default:
        return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
    }
  }
  function getAdditionalUserInfo(userCredential) {
    const { user, _tokenResponse } = userCredential;
    if (user.isAnonymous && !_tokenResponse) {
      return {
        providerId: null,
        isNewUser: false,
        profile: null
      };
    }
    return _fromIdTokenResponse(_tokenResponse);
  }
  function setPersistence(auth, persistence) {
    return getModularInstance(auth).setPersistence(persistence);
  }
  function initializeRecaptchaConfig(auth) {
    return _initializeRecaptchaConfig(auth);
  }
  async function validatePassword(auth, password) {
    const authInternal = _castAuth(auth);
    return authInternal.validatePassword(password);
  }
  function onIdTokenChanged(auth, nextOrObserver, error, completed) {
    return getModularInstance(auth).onIdTokenChanged(nextOrObserver, error, completed);
  }
  function beforeAuthStateChanged(auth, callback, onAbort) {
    return getModularInstance(auth).beforeAuthStateChanged(callback, onAbort);
  }
  function onAuthStateChanged(auth, nextOrObserver, error, completed) {
    return getModularInstance(auth).onAuthStateChanged(nextOrObserver, error, completed);
  }
  function useDeviceLanguage(auth) {
    getModularInstance(auth).useDeviceLanguage();
  }
  function updateCurrentUser(auth, user) {
    return getModularInstance(auth).updateCurrentUser(user);
  }
  function signOut(auth) {
    return getModularInstance(auth).signOut();
  }
  function revokeAccessToken(auth, token) {
    const authInternal = _castAuth(auth);
    return authInternal.revokeAccessToken(token);
  }
  async function deleteUser(user) {
    return getModularInstance(user).delete();
  }
  function getMultiFactorResolver(auth, error) {
    var _a;
    const authModular = getModularInstance(auth);
    const errorInternal = error;
    _assert(
      error.customData.operationType,
      authModular,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    _assert(
      (_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential,
      authModular,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    return MultiFactorResolverImpl._fromError(authModular, errorInternal);
  }
  function startEnrollPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
  }
  function finalizeEnrollPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
  }
  function startEnrollTotpMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
  }
  function finalizeEnrollTotpMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
  }
  function withdrawMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
  }
  function multiFactor(user) {
    const userModular = getModularInstance(user);
    if (!multiFactorUserCache.has(userModular)) {
      multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
    }
    return multiFactorUserCache.get(userModular);
  }
  function _iframeCannotSyncWebStorage() {
    const ua = getUA();
    return _isSafari(ua) || _isIOS(ua);
  }
  function _allSettled(promises) {
    return Promise.all(promises.map(async (promise) => {
      try {
        const value = await promise;
        return {
          fulfilled: true,
          value
        };
      } catch (reason) {
        return {
          fulfilled: false,
          reason
        };
      }
    }));
  }
  function _generateEventId(prefix = "", digits = 10) {
    let random = "";
    for (let i = 0; i < digits; i++) {
      random += Math.floor(Math.random() * 10);
    }
    return prefix + random;
  }
  function _window() {
    return window;
  }
  function _setWindowLocation(url) {
    _window().location.href = url;
  }
  function _isWorker() {
    return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
  }
  async function _getActiveServiceWorker() {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
      return null;
    }
    try {
      const registration = await navigator.serviceWorker.ready;
      return registration.active;
    } catch (_a) {
      return null;
    }
  }
  function _getServiceWorkerController() {
    var _a;
    return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
  }
  function _getWorkerGlobalScope() {
    return _isWorker() ? self : null;
  }
  function getObjectStore(db, isReadWrite) {
    return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
  }
  function _deleteDatabase() {
    const request = indexedDB.deleteDatabase(DB_NAME2);
    return new DBPromise(request).toPromise();
  }
  function _openDatabase() {
    const request = indexedDB.open(DB_NAME2, DB_VERSION2);
    return new Promise((resolve, reject) => {
      request.addEventListener("error", () => {
        reject(request.error);
      });
      request.addEventListener("upgradeneeded", () => {
        const db = request.result;
        try {
          db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
        } catch (e) {
          reject(e);
        }
      });
      request.addEventListener("success", async () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
          db.close();
          await _deleteDatabase();
          resolve(await _openDatabase());
        } else {
          resolve(db);
        }
      });
    });
  }
  async function _putObject(db, key, value) {
    const request = getObjectStore(db, true).put({
      [DB_DATA_KEYPATH]: key,
      value
    });
    return new DBPromise(request).toPromise();
  }
  async function getObject(db, key) {
    const request = getObjectStore(db, false).get(key);
    const data = await new DBPromise(request).toPromise();
    return data === void 0 ? null : data.value;
  }
  function _deleteObject(db, key) {
    const request = getObjectStore(db, true).delete(key);
    return new DBPromise(request).toPromise();
  }
  function startSignInPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
  }
  function finalizeSignInPhoneMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
  }
  function finalizeSignInTotpMfa(auth, request) {
    return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
  }
  function generateRandomAlphaNumericString(len) {
    const chars = [];
    const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < len; i++) {
      chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
    }
    return chars.join("");
  }
  function isHostLanguageValid(hl) {
    return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
  }
  function domReady() {
    let resolver = null;
    return new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }
      resolver = () => resolve();
      window.addEventListener("load", resolver);
    }).catch((e) => {
      if (resolver) {
        window.removeEventListener("load", resolver);
      }
      throw e;
    });
  }
  async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authInternal = _castAuth(auth);
    const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, getModularInstance(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred) => signInWithCredential(authInternal, cred));
  }
  async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
    const userInternal = getModularInstance(user);
    await _assertLinkedStatus(
      false,
      userInternal,
      "phone"
      /* ProviderId.PHONE */
    );
    const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, getModularInstance(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred) => linkWithCredential(userInternal, cred));
  }
  async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
    const userInternal = getModularInstance(user);
    if (_isFirebaseServerApp(userInternal.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    }
    const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, getModularInstance(appVerifier));
    return new ConfirmationResultImpl(verificationId, (cred) => reauthenticateWithCredential(userInternal, cred));
  }
  async function _verifyPhoneNumber(auth, options, verifier) {
    var _a;
    const recaptchaToken = await verifier.verify();
    try {
      _assert(
        typeof recaptchaToken === "string",
        auth,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      _assert(
        verifier.type === RECAPTCHA_VERIFIER_TYPE,
        auth,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      let phoneInfoOptions;
      if (typeof options === "string") {
        phoneInfoOptions = {
          phoneNumber: options
        };
      } else {
        phoneInfoOptions = options;
      }
      if ("session" in phoneInfoOptions) {
        const session = phoneInfoOptions.session;
        if ("phoneNumber" in phoneInfoOptions) {
          _assert(
            session.type === "enroll",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const response = await startEnrollPhoneMfa(auth, {
            idToken: session.credential,
            phoneEnrollmentInfo: {
              phoneNumber: phoneInfoOptions.phoneNumber,
              recaptchaToken
            }
          });
          return response.phoneSessionInfo.sessionInfo;
        } else {
          _assert(
            session.type === "signin",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
          _assert(
            mfaEnrollmentId,
            auth,
            "missing-multi-factor-info"
            /* AuthErrorCode.MISSING_MFA_INFO */
          );
          const response = await startSignInPhoneMfa(auth, {
            mfaPendingCredential: session.credential,
            mfaEnrollmentId,
            phoneSignInInfo: {
              recaptchaToken
            }
          });
          return response.phoneResponseInfo.sessionInfo;
        }
      } else {
        const { sessionInfo } = await sendPhoneVerificationCode(auth, {
          phoneNumber: phoneInfoOptions.phoneNumber,
          recaptchaToken
        });
        return sessionInfo;
      }
    } finally {
      verifier._reset();
    }
  }
  async function updatePhoneNumber(user, credential) {
    const userInternal = getModularInstance(user);
    if (_isFirebaseServerApp(userInternal.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    }
    await _link$1(userInternal, credential);
  }
  function _withDefaultResolver(auth, resolverOverride) {
    if (resolverOverride) {
      return _getInstance(resolverOverride);
    }
    _assert(
      auth._popupRedirectResolver,
      auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    return auth._popupRedirectResolver;
  }
  function _signIn(params) {
    return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
  }
  function _reauth(params) {
    const { auth, user } = params;
    _assert(
      user,
      auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
  }
  async function _link(params) {
    const { auth, user } = params;
    _assert(
      user,
      auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return _link$1(user, new IdpCredential(params), params.bypassAuthState);
  }
  async function signInWithPopup(auth, provider, resolver) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_createError(
        auth,
        "operation-not-supported-in-this-environment"
        /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      ));
    }
    const authInternal = _castAuth(auth);
    _assertInstanceOf(auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
    return action.executeNotNull();
  }
  async function reauthenticateWithPopup(user, provider, resolver) {
    const userInternal = getModularInstance(user);
    if (_isFirebaseServerApp(userInternal.auth.app)) {
      return Promise.reject(_createError(
        userInternal.auth,
        "operation-not-supported-in-this-environment"
        /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      ));
    }
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
    return action.executeNotNull();
  }
  async function linkWithPopup(user, provider, resolver) {
    const userInternal = getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
    return action.executeNotNull();
  }
  async function _getAndClearPendingRedirectStatus(resolver, auth) {
    const key = pendingRedirectKey(auth);
    const persistence = resolverPersistence(resolver);
    if (!await persistence._isAvailable()) {
      return false;
    }
    const hasPendingRedirect = await persistence._get(key) === "true";
    await persistence._remove(key);
    return hasPendingRedirect;
  }
  async function _setPendingRedirectStatus(resolver, auth) {
    return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
  }
  function _overrideRedirectResult(auth, result) {
    redirectOutcomeMap.set(auth._key(), result);
  }
  function resolverPersistence(resolver) {
    return _getInstance(resolver._redirectPersistence);
  }
  function pendingRedirectKey(auth) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
  }
  function signInWithRedirect(auth, provider, resolver) {
    return _signInWithRedirect(auth, provider, resolver);
  }
  async function _signInWithRedirect(auth, provider, resolver) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authInternal = _castAuth(auth);
    _assertInstanceOf(auth, provider, FederatedAuthProvider);
    await authInternal._initializationPromise;
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    await _setPendingRedirectStatus(resolverInternal, authInternal);
    return resolverInternal._openRedirect(
      authInternal,
      provider,
      "signInViaRedirect"
      /* AuthEventType.SIGN_IN_VIA_REDIRECT */
    );
  }
  function reauthenticateWithRedirect(user, provider, resolver) {
    return _reauthenticateWithRedirect(user, provider, resolver);
  }
  async function _reauthenticateWithRedirect(user, provider, resolver) {
    const userInternal = getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    if (_isFirebaseServerApp(userInternal.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
    }
    await userInternal.auth._initializationPromise;
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = await prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
  }
  function linkWithRedirect(user, provider, resolver) {
    return _linkWithRedirect(user, provider, resolver);
  }
  async function _linkWithRedirect(user, provider, resolver) {
    const userInternal = getModularInstance(user);
    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
    await userInternal.auth._initializationPromise;
    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
    await _assertLinkedStatus(false, userInternal, provider.providerId);
    await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = await prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
  }
  async function getRedirectResult(auth, resolver) {
    await _castAuth(auth)._initializationPromise;
    return _getRedirectResult(auth, resolver, false);
  }
  async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
    if (_isFirebaseServerApp(auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
    }
    const authInternal = _castAuth(auth);
    const resolver = _withDefaultResolver(authInternal, resolverExtern);
    const action = new RedirectAction(authInternal, resolver, bypassAuthState);
    const result = await action.execute();
    if (result && !bypassAuthState) {
      delete result.user._redirectEventId;
      await authInternal._persistUserIfCurrent(result.user);
      await authInternal._setRedirectUser(null, resolverExtern);
    }
    return result;
  }
  async function prepareUserForRedirect(user) {
    const eventId = _generateEventId(`${user.uid}:::`);
    user._redirectEventId = eventId;
    await user.auth._setRedirectUser(user);
    await user.auth._persistUserIfCurrent(user);
    return eventId;
  }
  function eventUid(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v2) => v2).join("-");
  }
  function isNullRedirectEvent({ type, error }) {
    return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
  }
  function isRedirectEvent(event) {
    switch (event.type) {
      case "signInViaRedirect":
      case "linkViaRedirect":
      case "reauthViaRedirect":
        return true;
      case "unknown":
        return isNullRedirectEvent(event);
      default:
        return false;
    }
  }
  async function _getProjectConfig(auth, request = {}) {
    return _performApiRequest(auth, "GET", "/v1/projects", request);
  }
  async function _validateOrigin(auth) {
    if (auth.config.emulator) {
      return;
    }
    const { authorizedDomains } = await _getProjectConfig(auth);
    for (const domain of authorizedDomains) {
      try {
        if (matchDomain(domain)) {
          return;
        }
      } catch (_a) {
      }
    }
    _fail(
      auth,
      "unauthorized-domain"
      /* AuthErrorCode.INVALID_ORIGIN */
    );
  }
  function matchDomain(expected) {
    const currentUrl = _getCurrentUrl();
    const { protocol, hostname } = new URL(currentUrl);
    if (expected.startsWith("chrome-extension://")) {
      const ceUrl = new URL(expected);
      if (ceUrl.hostname === "" && hostname === "") {
        return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
      }
      return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
    }
    if (!HTTP_REGEX.test(protocol)) {
      return false;
    }
    if (IP_ADDRESS_REGEX.test(expected)) {
      return hostname === expected;
    }
    const escapedDomainPattern = expected.replace(/\./g, "\\.");
    const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
    return re.test(hostname);
  }
  function resetUnloadedGapiModules() {
    const beacon = _window().___jsl;
    if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
      for (const hint of Object.keys(beacon.H)) {
        beacon.H[hint].r = beacon.H[hint].r || [];
        beacon.H[hint].L = beacon.H[hint].L || [];
        beacon.H[hint].r = [...beacon.H[hint].L];
        if (beacon.CP) {
          for (let i = 0; i < beacon.CP.length; i++) {
            beacon.CP[i] = null;
          }
        }
      }
    }
  }
  function loadGapi(auth) {
    return new Promise((resolve, reject) => {
      var _a, _b, _c;
      function loadGapiIframe() {
        resetUnloadedGapiModules();
        gapi.load("gapi.iframes", {
          callback: () => {
            resolve(gapi.iframes.getContext());
          },
          ontimeout: () => {
            resetUnloadedGapiModules();
            reject(_createError(
              auth,
              "network-request-failed"
              /* AuthErrorCode.NETWORK_REQUEST_FAILED */
            ));
          },
          timeout: NETWORK_TIMEOUT.get()
        });
      }
      if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
        resolve(gapi.iframes.getContext());
      } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
        loadGapiIframe();
      } else {
        const cbName = _generateCallbackName("iframefcb");
        _window()[cbName] = () => {
          if (!!gapi.load) {
            loadGapiIframe();
          } else {
            reject(_createError(
              auth,
              "network-request-failed"
              /* AuthErrorCode.NETWORK_REQUEST_FAILED */
            ));
          }
        };
        return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch((e) => reject(e));
      }
    }).catch((error) => {
      cachedGApiLoader = null;
      throw error;
    });
  }
  function _loadGapi(auth) {
    cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
    return cachedGApiLoader;
  }
  function getIframeUrl(auth) {
    const config = auth.config;
    _assert(
      config.authDomain,
      auth,
      "auth-domain-config-required"
      /* AuthErrorCode.MISSING_AUTH_DOMAIN */
    );
    const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
    const params = {
      apiKey: config.apiKey,
      appName: auth.name,
      v: SDK_VERSION
    };
    const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
    if (eid) {
      params.eid = eid;
    }
    const frameworks = auth._getFrameworks();
    if (frameworks.length) {
      params.fw = frameworks.join(",");
    }
    return `${url}?${querystring(params).slice(1)}`;
  }
  async function _openIframe(auth) {
    const context = await _loadGapi(auth);
    const gapi2 = _window().gapi;
    _assert(
      gapi2,
      auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return context.open({
      where: document.body,
      url: getIframeUrl(auth),
      messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      attributes: IFRAME_ATTRIBUTES,
      dontclear: true
    }, (iframe) => new Promise(async (resolve, reject) => {
      await iframe.restyle({
        // Prevent iframe from closing on mouse out.
        setHideOnLeave: false
      });
      const networkError = _createError(
        auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      );
      const networkErrorTimer = _window().setTimeout(() => {
        reject(networkError);
      }, PING_TIMEOUT.get());
      function clearTimerAndResolve() {
        _window().clearTimeout(networkErrorTimer);
        resolve(iframe);
      }
      iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
        reject(networkError);
      });
    }));
  }
  function _open(auth, url, name4, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
    const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
    let target = "";
    const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
      width: width.toString(),
      height: height.toString(),
      top,
      left
    });
    const ua = getUA().toLowerCase();
    if (name4) {
      target = _isChromeIOS(ua) ? TARGET_BLANK : name4;
    }
    if (_isFirefox(ua)) {
      url = url || FIREFOX_EMPTY_URL;
      options.scrollbars = "yes";
    }
    const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
    if (_isIOSStandalone(ua) && target !== "_self") {
      openAsNewWindowIOS(url || "", target);
      return new AuthPopup(null);
    }
    const newWin = window.open(url || "", target, optionsString);
    _assert(
      newWin,
      auth,
      "popup-blocked"
      /* AuthErrorCode.POPUP_BLOCKED */
    );
    try {
      newWin.focus();
    } catch (e) {
    }
    return new AuthPopup(newWin);
  }
  function openAsNewWindowIOS(url, target) {
    const el = document.createElement("a");
    el.href = url;
    el.target = target;
    const click = document.createEvent("MouseEvent");
    click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
    el.dispatchEvent(click);
  }
  async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
    _assert(
      auth.config.authDomain,
      auth,
      "auth-domain-config-required"
      /* AuthErrorCode.MISSING_AUTH_DOMAIN */
    );
    _assert(
      auth.config.apiKey,
      auth,
      "invalid-api-key"
      /* AuthErrorCode.INVALID_API_KEY */
    );
    const params = {
      apiKey: auth.config.apiKey,
      appName: auth.name,
      authType,
      redirectUrl,
      v: SDK_VERSION,
      eventId
    };
    if (provider instanceof FederatedAuthProvider) {
      provider.setDefaultLanguage(auth.languageCode);
      params.providerId = provider.providerId || "";
      if (!isEmpty(provider.getCustomParameters())) {
        params.customParameters = JSON.stringify(provider.getCustomParameters());
      }
      for (const [key, value] of Object.entries(additionalParams || {})) {
        params[key] = value;
      }
    }
    if (provider instanceof BaseOAuthProvider) {
      const scopes = provider.getScopes().filter((scope) => scope !== "");
      if (scopes.length > 0) {
        params.scopes = scopes.join(",");
      }
    }
    if (auth.tenantId) {
      params.tid = auth.tenantId;
    }
    const paramsDict = params;
    for (const key of Object.keys(paramsDict)) {
      if (paramsDict[key] === void 0) {
        delete paramsDict[key];
      }
    }
    const appCheckToken = await auth._getAppCheckToken();
    const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
    return `${getHandlerBase(auth)}?${querystring(paramsDict).slice(1)}${appCheckTokenFragment}`;
  }
  function getHandlerBase({ config }) {
    if (!config.emulator) {
      return `https://${config.authDomain}/${WIDGET_PATH}`;
    }
    return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
  }
  function _isEmptyString(input) {
    return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
  }
  function getVersionForPlatform(clientPlatform) {
    switch (clientPlatform) {
      case "Node":
        return "node";
      case "ReactNative":
        return "rn";
      case "Worker":
        return "webworker";
      case "Cordova":
        return "cordova";
      case "WebExtension":
        return "web-extension";
      default:
        return void 0;
    }
  }
  function registerAuth(clientPlatform) {
    _registerComponent(new Component(
      "auth",
      (container, { options: deps }) => {
        const app = container.getProvider("app").getImmediate();
        const heartbeatServiceProvider = container.getProvider("heartbeat");
        const appCheckServiceProvider = container.getProvider("app-check-internal");
        const { apiKey, authDomain } = app.options;
        _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app.name });
        const config = {
          apiKey,
          authDomain,
          clientPlatform,
          apiHost: "identitytoolkit.googleapis.com",
          tokenApiHost: "securetoken.googleapis.com",
          apiScheme: "https",
          sdkClientVersion: _getClientVersion(clientPlatform)
        };
        const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
        _initializeAuthInstance(authInstance, deps);
        return authInstance;
      },
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ).setInstantiationMode(
      "EXPLICIT"
      /* InstantiationMode.EXPLICIT */
    ).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
      const authInternalProvider = container.getProvider(
        "auth-internal"
        /* _ComponentName.AUTH_INTERNAL */
      );
      authInternalProvider.initialize();
    }));
    _registerComponent(new Component(
      "auth-internal",
      (container) => {
        const auth = _castAuth(container.getProvider(
          "auth"
          /* _ComponentName.AUTH */
        ).getImmediate());
        return ((auth2) => new AuthInterop(auth2))(auth);
      },
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ).setInstantiationMode(
      "EXPLICIT"
      /* InstantiationMode.EXPLICIT */
    ));
    registerVersion(name3, version3, getVersionForPlatform(clientPlatform));
    registerVersion(name3, version3, "esm2017");
  }
  function getAuth(app = getApp()) {
    const provider = _getProvider(app, "auth");
    if (provider.isInitialized()) {
      return provider.getImmediate();
    }
    const auth = initializeAuth(app, {
      popupRedirectResolver: browserPopupRedirectResolver,
      persistence: [
        indexedDBLocalPersistence,
        browserLocalPersistence,
        browserSessionPersistence
      ]
    });
    const authTokenSyncPath = getExperimentalSetting("authTokenSyncURL");
    if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
      const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
      if (location.origin === authTokenSyncUrl.origin) {
        const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
        beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
        onIdTokenChanged(auth, (user) => mintCookie(user));
      }
    }
    const authEmulatorHost = getDefaultEmulatorHost("auth");
    if (authEmulatorHost) {
      connectAuthEmulator(auth, `http://${authEmulatorHost}`);
    }
    return auth;
  }
  function getScriptParentElement() {
    var _a, _b;
    return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
  }
  var FactorId, ProviderId, SignInMethod, OperationType, ActionCodeOperation, debugErrorMap, prodErrorMap, _DEFAULT_AUTH_ERROR_FACTORY, AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY, logClient, Delay, FetchProvider, SERVER_ERROR_MAP, DEFAULT_API_TIMEOUT_MS, NetworkTimeout, RecaptchaConfig, ProactiveRefresh, UserMetadata, StsTokenManager, UserImpl, instanceCache, InMemoryPersistence, inMemoryPersistence, PersistenceUserManager, AuthMiddlewareQueue, MINIMUM_MIN_PASSWORD_LENGTH, PasswordPolicyImpl, AuthImpl, Subscription, externalJSProvider, RECAPTCHA_ENTERPRISE_VERIFIER_TYPE, FAKE_TOKEN, RecaptchaEnterpriseVerifier, AuthCredential, EmailAuthCredential, IDP_REQUEST_URI$1, OAuthCredential, VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_, PhoneAuthCredential, ActionCodeURL, EmailAuthProvider, FederatedAuthProvider, BaseOAuthProvider, OAuthProvider, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, IDP_REQUEST_URI, SAMLAuthCredential, SAML_PROVIDER_PREFIX, SAMLAuthProvider, TwitterAuthProvider, UserCredentialImpl, MultiFactorError, MultiFactorInfoImpl, PhoneMultiFactorInfoImpl, TotpMultiFactorInfoImpl, GenericAdditionalUserInfo, FederatedAdditionalUserInfoWithUsername, FacebookAdditionalUserInfo, GithubAdditionalUserInfo, GoogleAdditionalUserInfo, TwitterAdditionalUserInfo, MultiFactorSessionImpl, MultiFactorResolverImpl, MultiFactorUserImpl, multiFactorUserCache, STORAGE_AVAILABLE_KEY, BrowserPersistenceClass, _POLLING_INTERVAL_MS$1, IE10_LOCAL_STORAGE_SYNC_DELAY, BrowserLocalPersistence, browserLocalPersistence, BrowserSessionPersistence, browserSessionPersistence, Receiver, Sender, DB_NAME2, DB_VERSION2, DB_OBJECTSTORE_NAME, DB_DATA_KEYPATH, DBPromise, _POLLING_INTERVAL_MS, _TRANSACTION_RETRY_COUNT, IndexedDBLocalPersistence, indexedDBLocalPersistence, _SOLVE_TIME_MS, _EXPIRATION_TIME_MS, _WIDGET_ID_START, MockReCaptcha, MockWidget, _JSLOAD_CALLBACK, NETWORK_TIMEOUT_DELAY, ReCaptchaLoaderImpl, MockReCaptchaLoaderImpl, RECAPTCHA_VERIFIER_TYPE, DEFAULT_PARAMS, RecaptchaVerifier, ConfirmationResultImpl, PhoneAuthProvider, IdpCredential, AbstractPopupRedirectOperation, _POLL_WINDOW_CLOSE_TIMEOUT, PopupOperation, PENDING_REDIRECT_KEY, redirectOutcomeMap, RedirectAction, EVENT_DUPLICATION_CACHE_DURATION_MS, AuthEventManager, IP_ADDRESS_REGEX, HTTP_REGEX, NETWORK_TIMEOUT, cachedGApiLoader, PING_TIMEOUT, IFRAME_PATH, EMULATED_IFRAME_PATH, IFRAME_ATTRIBUTES, EID_FROM_APIHOST, BASE_POPUP_OPTIONS, DEFAULT_WIDTH, DEFAULT_HEIGHT, TARGET_BLANK, FIREFOX_EMPTY_URL, AuthPopup, WIDGET_PATH, EMULATOR_WIDGET_PATH, FIREBASE_APP_CHECK_FRAGMENT_ID, WEB_STORAGE_SUPPORT_KEY, BrowserPopupRedirectResolver, browserPopupRedirectResolver, MultiFactorAssertionImpl, PhoneMultiFactorAssertionImpl, PhoneMultiFactorGenerator, TotpMultiFactorGenerator, TotpMultiFactorAssertionImpl, TotpSecret, name3, version3, AuthInterop, DEFAULT_ID_TOKEN_MAX_AGE, authIdTokenMaxAge, lastPostedIdToken, mintCookieFactory;
  var init_index_21205181 = __esm({
    "node_modules/@firebase/auth/dist/esm2017/index-21205181.js"() {
      init_index_esm20174();
      init_index_esm2017();
      init_index_esm20173();
      init_tslib_es6();
      init_index_esm20172();
      FactorId = {
        /** Phone as second factor */
        PHONE: "phone",
        TOTP: "totp"
      };
      ProviderId = {
        /** Facebook provider ID */
        FACEBOOK: "facebook.com",
        /** GitHub provider ID */
        GITHUB: "github.com",
        /** Google provider ID */
        GOOGLE: "google.com",
        /** Password provider */
        PASSWORD: "password",
        /** Phone provider */
        PHONE: "phone",
        /** Twitter provider ID */
        TWITTER: "twitter.com"
      };
      SignInMethod = {
        /** Email link sign in method */
        EMAIL_LINK: "emailLink",
        /** Email/password sign in method */
        EMAIL_PASSWORD: "password",
        /** Facebook sign in method */
        FACEBOOK: "facebook.com",
        /** GitHub sign in method */
        GITHUB: "github.com",
        /** Google sign in method */
        GOOGLE: "google.com",
        /** Phone sign in method */
        PHONE: "phone",
        /** Twitter sign in method */
        TWITTER: "twitter.com"
      };
      OperationType = {
        /** Operation involving linking an additional provider to an already signed-in user. */
        LINK: "link",
        /** Operation involving using a provider to reauthenticate an already signed-in user. */
        REAUTHENTICATE: "reauthenticate",
        /** Operation involving signing in a user. */
        SIGN_IN: "signIn"
      };
      ActionCodeOperation = {
        /** The email link sign-in action. */
        EMAIL_SIGNIN: "EMAIL_SIGNIN",
        /** The password reset action. */
        PASSWORD_RESET: "PASSWORD_RESET",
        /** The email revocation action. */
        RECOVER_EMAIL: "RECOVER_EMAIL",
        /** The revert second factor addition email action. */
        REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
        /** The revert second factor addition email action. */
        VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
        /** The email verification action. */
        VERIFY_EMAIL: "VERIFY_EMAIL"
      };
      debugErrorMap = _debugErrorMap;
      prodErrorMap = _prodErrorMap;
      _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
      AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
        ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
        ARGUMENT_ERROR: "auth/argument-error",
        APP_NOT_AUTHORIZED: "auth/app-not-authorized",
        APP_NOT_INSTALLED: "auth/app-not-installed",
        CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
        CODE_EXPIRED: "auth/code-expired",
        CORDOVA_NOT_READY: "auth/cordova-not-ready",
        CORS_UNSUPPORTED: "auth/cors-unsupported",
        CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
        CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
        DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
        DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
        EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
        EMAIL_EXISTS: "auth/email-already-in-use",
        EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
        EXPIRED_OOB_CODE: "auth/expired-action-code",
        EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
        INTERNAL_ERROR: "auth/internal-error",
        INVALID_API_KEY: "auth/invalid-api-key",
        INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
        INVALID_APP_ID: "auth/invalid-app-id",
        INVALID_AUTH: "auth/invalid-user-token",
        INVALID_AUTH_EVENT: "auth/invalid-auth-event",
        INVALID_CERT_HASH: "auth/invalid-cert-hash",
        INVALID_CODE: "auth/invalid-verification-code",
        INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
        INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
        INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
        INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
        INVALID_EMAIL: "auth/invalid-email",
        INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
        INVALID_IDP_RESPONSE: "auth/invalid-credential",
        INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
        INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
        INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
        INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
        INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
        INVALID_OOB_CODE: "auth/invalid-action-code",
        INVALID_ORIGIN: "auth/unauthorized-domain",
        INVALID_PASSWORD: "auth/wrong-password",
        INVALID_PERSISTENCE: "auth/invalid-persistence-type",
        INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
        INVALID_PROVIDER_ID: "auth/invalid-provider-id",
        INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
        INVALID_SENDER: "auth/invalid-sender",
        INVALID_SESSION_INFO: "auth/invalid-verification-id",
        INVALID_TENANT_ID: "auth/invalid-tenant-id",
        MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
        MFA_REQUIRED: "auth/multi-factor-auth-required",
        MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
        MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
        MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
        MISSING_CODE: "auth/missing-verification-code",
        MISSING_CONTINUE_URI: "auth/missing-continue-uri",
        MISSING_IFRAME_START: "auth/missing-iframe-start",
        MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
        MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
        MISSING_MFA_INFO: "auth/missing-multi-factor-info",
        MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
        MISSING_PHONE_NUMBER: "auth/missing-phone-number",
        MISSING_SESSION_INFO: "auth/missing-verification-id",
        MODULE_DESTROYED: "auth/app-deleted",
        NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
        NETWORK_REQUEST_FAILED: "auth/network-request-failed",
        NULL_USER: "auth/null-user",
        NO_AUTH_EVENT: "auth/no-auth-event",
        NO_SUCH_PROVIDER: "auth/no-such-provider",
        OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
        OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
        POPUP_BLOCKED: "auth/popup-blocked",
        POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
        PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
        QUOTA_EXCEEDED: "auth/quota-exceeded",
        REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
        REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
        REJECTED_CREDENTIAL: "auth/rejected-credential",
        SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
        TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
        TIMEOUT: "auth/timeout",
        TOKEN_EXPIRED: "auth/user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
        UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
        UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
        UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
        UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
        UNVERIFIED_EMAIL: "auth/unverified-email",
        USER_CANCELLED: "auth/user-cancelled",
        USER_DELETED: "auth/user-not-found",
        USER_DISABLED: "auth/user-disabled",
        USER_MISMATCH: "auth/user-mismatch",
        USER_SIGNED_OUT: "auth/user-signed-out",
        WEAK_PASSWORD: "auth/weak-password",
        WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
        ALREADY_INITIALIZED: "auth/already-initialized",
        RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "auth/missing-client-type",
        MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
        INVALID_REQ_TYPE: "auth/invalid-req-type"
      };
      logClient = new Logger("@firebase/auth");
      Delay = class {
        constructor(shortDelay, longDelay) {
          this.shortDelay = shortDelay;
          this.longDelay = longDelay;
          debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
          this.isMobile = isMobileCordova() || isReactNative();
        }
        get() {
          if (!_isOnline()) {
            return Math.min(5e3, this.shortDelay);
          }
          return this.isMobile ? this.longDelay : this.shortDelay;
        }
      };
      FetchProvider = class {
        static initialize(fetchImpl, headersImpl, responseImpl) {
          this.fetchImpl = fetchImpl;
          if (headersImpl) {
            this.headersImpl = headersImpl;
          }
          if (responseImpl) {
            this.responseImpl = responseImpl;
          }
        }
        static fetch() {
          if (this.fetchImpl) {
            return this.fetchImpl;
          }
          if (typeof self !== "undefined" && "fetch" in self) {
            return self.fetch;
          }
          if (typeof globalThis !== "undefined" && globalThis.fetch) {
            return globalThis.fetch;
          }
          if (typeof fetch !== "undefined") {
            return fetch;
          }
          debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static headers() {
          if (this.headersImpl) {
            return this.headersImpl;
          }
          if (typeof self !== "undefined" && "Headers" in self) {
            return self.Headers;
          }
          if (typeof globalThis !== "undefined" && globalThis.Headers) {
            return globalThis.Headers;
          }
          if (typeof Headers !== "undefined") {
            return Headers;
          }
          debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static response() {
          if (this.responseImpl) {
            return this.responseImpl;
          }
          if (typeof self !== "undefined" && "Response" in self) {
            return self.Response;
          }
          if (typeof globalThis !== "undefined" && globalThis.Response) {
            return globalThis.Response;
          }
          if (typeof Response !== "undefined") {
            return Response;
          }
          debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
      };
      SERVER_ERROR_MAP = {
        // Custom token errors.
        [
          "CREDENTIAL_MISMATCH"
          /* ServerError.CREDENTIAL_MISMATCH */
        ]: "custom-token-mismatch",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_CUSTOM_TOKEN"
          /* ServerError.MISSING_CUSTOM_TOKEN */
        ]: "internal-error",
        // Create Auth URI errors.
        [
          "INVALID_IDENTIFIER"
          /* ServerError.INVALID_IDENTIFIER */
        ]: "invalid-email",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_CONTINUE_URI"
          /* ServerError.MISSING_CONTINUE_URI */
        ]: "internal-error",
        // Sign in with email and password errors (some apply to sign up too).
        [
          "INVALID_PASSWORD"
          /* ServerError.INVALID_PASSWORD */
        ]: "wrong-password",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_PASSWORD"
          /* ServerError.MISSING_PASSWORD */
        ]: "missing-password",
        // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
        // invalid.
        [
          "INVALID_LOGIN_CREDENTIALS"
          /* ServerError.INVALID_LOGIN_CREDENTIALS */
        ]: "invalid-credential",
        // Sign up with email and password errors.
        [
          "EMAIL_EXISTS"
          /* ServerError.EMAIL_EXISTS */
        ]: "email-already-in-use",
        [
          "PASSWORD_LOGIN_DISABLED"
          /* ServerError.PASSWORD_LOGIN_DISABLED */
        ]: "operation-not-allowed",
        // Verify assertion for sign in with credential errors:
        [
          "INVALID_IDP_RESPONSE"
          /* ServerError.INVALID_IDP_RESPONSE */
        ]: "invalid-credential",
        [
          "INVALID_PENDING_TOKEN"
          /* ServerError.INVALID_PENDING_TOKEN */
        ]: "invalid-credential",
        [
          "FEDERATED_USER_ID_ALREADY_LINKED"
          /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
        ]: "credential-already-in-use",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_REQ_TYPE"
          /* ServerError.MISSING_REQ_TYPE */
        ]: "internal-error",
        // Send Password reset email errors:
        [
          "EMAIL_NOT_FOUND"
          /* ServerError.EMAIL_NOT_FOUND */
        ]: "user-not-found",
        [
          "RESET_PASSWORD_EXCEED_LIMIT"
          /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
        ]: "too-many-requests",
        [
          "EXPIRED_OOB_CODE"
          /* ServerError.EXPIRED_OOB_CODE */
        ]: "expired-action-code",
        [
          "INVALID_OOB_CODE"
          /* ServerError.INVALID_OOB_CODE */
        ]: "invalid-action-code",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_OOB_CODE"
          /* ServerError.MISSING_OOB_CODE */
        ]: "internal-error",
        // Operations that require ID token in request:
        [
          "CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
          /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
        ]: "requires-recent-login",
        [
          "INVALID_ID_TOKEN"
          /* ServerError.INVALID_ID_TOKEN */
        ]: "invalid-user-token",
        [
          "TOKEN_EXPIRED"
          /* ServerError.TOKEN_EXPIRED */
        ]: "user-token-expired",
        [
          "USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
        ]: "user-token-expired",
        // Other errors.
        [
          "TOO_MANY_ATTEMPTS_TRY_LATER"
          /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
        ]: "too-many-requests",
        [
          "PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
          /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
        ]: "password-does-not-meet-requirements",
        // Phone Auth related errors.
        [
          "INVALID_CODE"
          /* ServerError.INVALID_CODE */
        ]: "invalid-verification-code",
        [
          "INVALID_SESSION_INFO"
          /* ServerError.INVALID_SESSION_INFO */
        ]: "invalid-verification-id",
        [
          "INVALID_TEMPORARY_PROOF"
          /* ServerError.INVALID_TEMPORARY_PROOF */
        ]: "invalid-credential",
        [
          "MISSING_SESSION_INFO"
          /* ServerError.MISSING_SESSION_INFO */
        ]: "missing-verification-id",
        [
          "SESSION_EXPIRED"
          /* ServerError.SESSION_EXPIRED */
        ]: "code-expired",
        // Other action code errors when additional settings passed.
        // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
        // This is OK as this error will be caught by client side validation.
        [
          "MISSING_ANDROID_PACKAGE_NAME"
          /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
        ]: "missing-android-pkg-name",
        [
          "UNAUTHORIZED_DOMAIN"
          /* ServerError.UNAUTHORIZED_DOMAIN */
        ]: "unauthorized-continue-uri",
        // getProjectConfig errors when clientId is passed.
        [
          "INVALID_OAUTH_CLIENT_ID"
          /* ServerError.INVALID_OAUTH_CLIENT_ID */
        ]: "invalid-oauth-client-id",
        // User actions (sign-up or deletion) disabled errors.
        [
          "ADMIN_ONLY_OPERATION"
          /* ServerError.ADMIN_ONLY_OPERATION */
        ]: "admin-restricted-operation",
        // Multi factor related errors.
        [
          "INVALID_MFA_PENDING_CREDENTIAL"
          /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
        ]: "invalid-multi-factor-session",
        [
          "MFA_ENROLLMENT_NOT_FOUND"
          /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
        ]: "multi-factor-info-not-found",
        [
          "MISSING_MFA_ENROLLMENT_ID"
          /* ServerError.MISSING_MFA_ENROLLMENT_ID */
        ]: "missing-multi-factor-info",
        [
          "MISSING_MFA_PENDING_CREDENTIAL"
          /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
        ]: "missing-multi-factor-session",
        [
          "SECOND_FACTOR_EXISTS"
          /* ServerError.SECOND_FACTOR_EXISTS */
        ]: "second-factor-already-in-use",
        [
          "SECOND_FACTOR_LIMIT_EXCEEDED"
          /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
        ]: "maximum-second-factor-count-exceeded",
        // Blocking functions related errors.
        [
          "BLOCKING_FUNCTION_ERROR_RESPONSE"
          /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
        ]: "internal-error",
        // Recaptcha related errors.
        [
          "RECAPTCHA_NOT_ENABLED"
          /* ServerError.RECAPTCHA_NOT_ENABLED */
        ]: "recaptcha-not-enabled",
        [
          "MISSING_RECAPTCHA_TOKEN"
          /* ServerError.MISSING_RECAPTCHA_TOKEN */
        ]: "missing-recaptcha-token",
        [
          "INVALID_RECAPTCHA_TOKEN"
          /* ServerError.INVALID_RECAPTCHA_TOKEN */
        ]: "invalid-recaptcha-token",
        [
          "INVALID_RECAPTCHA_ACTION"
          /* ServerError.INVALID_RECAPTCHA_ACTION */
        ]: "invalid-recaptcha-action",
        [
          "MISSING_CLIENT_TYPE"
          /* ServerError.MISSING_CLIENT_TYPE */
        ]: "missing-client-type",
        [
          "MISSING_RECAPTCHA_VERSION"
          /* ServerError.MISSING_RECAPTCHA_VERSION */
        ]: "missing-recaptcha-version",
        [
          "INVALID_RECAPTCHA_VERSION"
          /* ServerError.INVALID_RECAPTCHA_VERSION */
        ]: "invalid-recaptcha-version",
        [
          "INVALID_REQ_TYPE"
          /* ServerError.INVALID_REQ_TYPE */
        ]: "invalid-req-type"
        /* AuthErrorCode.INVALID_REQ_TYPE */
      };
      DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
      NetworkTimeout = class {
        constructor(auth) {
          this.auth = auth;
          this.timer = null;
          this.promise = new Promise((_, reject) => {
            this.timer = setTimeout(() => {
              return reject(_createError(
                this.auth,
                "network-request-failed"
                /* AuthErrorCode.NETWORK_REQUEST_FAILED */
              ));
            }, DEFAULT_API_TIMEOUT_MS.get());
          });
        }
        clearNetworkTimeout() {
          clearTimeout(this.timer);
        }
      };
      RecaptchaConfig = class {
        constructor(response) {
          this.siteKey = "";
          this.recaptchaEnforcementState = [];
          if (response.recaptchaKey === void 0) {
            throw new Error("recaptchaKey undefined");
          }
          this.siteKey = response.recaptchaKey.split("/")[3];
          this.recaptchaEnforcementState = response.recaptchaEnforcementState;
        }
        /**
         * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
         *
         * @param providerStr - The provider whose enforcement state is to be returned.
         * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
         */
        getProviderEnforcementState(providerStr) {
          if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
            return null;
          }
          for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
            if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
              return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
            }
          }
          return null;
        }
        /**
         * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
         *
         * @param providerStr - The provider whose enablement state is to be returned.
         * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
         */
        isProviderEnabled(providerStr) {
          return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
        }
      };
      ProactiveRefresh = class {
        constructor(user) {
          this.user = user;
          this.isRunning = false;
          this.timerId = null;
          this.errorBackoff = 3e4;
        }
        _start() {
          if (this.isRunning) {
            return;
          }
          this.isRunning = true;
          this.schedule();
        }
        _stop() {
          if (!this.isRunning) {
            return;
          }
          this.isRunning = false;
          if (this.timerId !== null) {
            clearTimeout(this.timerId);
          }
        }
        getInterval(wasError) {
          var _a;
          if (wasError) {
            const interval = this.errorBackoff;
            this.errorBackoff = Math.min(
              this.errorBackoff * 2,
              96e4
              /* Duration.RETRY_BACKOFF_MAX */
            );
            return interval;
          } else {
            this.errorBackoff = 3e4;
            const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
            const interval = expTime - Date.now() - 3e5;
            return Math.max(0, interval);
          }
        }
        schedule(wasError = false) {
          if (!this.isRunning) {
            return;
          }
          const interval = this.getInterval(wasError);
          this.timerId = setTimeout(async () => {
            await this.iteration();
          }, interval);
        }
        async iteration() {
          try {
            await this.user.getIdToken(true);
          } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
              this.schedule(
                /* wasError */
                true
              );
            }
            return;
          }
          this.schedule();
        }
      };
      UserMetadata = class {
        constructor(createdAt, lastLoginAt) {
          this.createdAt = createdAt;
          this.lastLoginAt = lastLoginAt;
          this._initializeTime();
        }
        _initializeTime() {
          this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
          this.creationTime = utcTimestampToDateString(this.createdAt);
        }
        _copy(metadata) {
          this.createdAt = metadata.createdAt;
          this.lastLoginAt = metadata.lastLoginAt;
          this._initializeTime();
        }
        toJSON() {
          return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
          };
        }
      };
      StsTokenManager = class _StsTokenManager {
        constructor() {
          this.refreshToken = null;
          this.accessToken = null;
          this.expirationTime = null;
        }
        get isExpired() {
          return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
        }
        updateFromServerResponse(response) {
          _assert(
            response.idToken,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof response.idToken !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof response.refreshToken !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
          this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
        }
        updateFromIdToken(idToken) {
          _assert(
            idToken.length !== 0,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const expiresIn = _tokenExpiresIn(idToken);
          this.updateTokensAndExpiration(idToken, null, expiresIn);
        }
        async getToken(auth, forceRefresh = false) {
          if (!forceRefresh && this.accessToken && !this.isExpired) {
            return this.accessToken;
          }
          _assert(
            this.refreshToken,
            auth,
            "user-token-expired"
            /* AuthErrorCode.TOKEN_EXPIRED */
          );
          if (this.refreshToken) {
            await this.refresh(auth, this.refreshToken);
            return this.accessToken;
          }
          return null;
        }
        clearRefreshToken() {
          this.refreshToken = null;
        }
        async refresh(auth, oldToken) {
          const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
          this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
        }
        updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
          this.refreshToken = refreshToken || null;
          this.accessToken = accessToken || null;
          this.expirationTime = Date.now() + expiresInSec * 1e3;
        }
        static fromJSON(appName, object) {
          const { refreshToken, accessToken, expirationTime } = object;
          const manager = new _StsTokenManager();
          if (refreshToken) {
            _assert(typeof refreshToken === "string", "internal-error", {
              appName
            });
            manager.refreshToken = refreshToken;
          }
          if (accessToken) {
            _assert(typeof accessToken === "string", "internal-error", {
              appName
            });
            manager.accessToken = accessToken;
          }
          if (expirationTime) {
            _assert(typeof expirationTime === "number", "internal-error", {
              appName
            });
            manager.expirationTime = expirationTime;
          }
          return manager;
        }
        toJSON() {
          return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
          };
        }
        _assign(stsTokenManager) {
          this.accessToken = stsTokenManager.accessToken;
          this.refreshToken = stsTokenManager.refreshToken;
          this.expirationTime = stsTokenManager.expirationTime;
        }
        _clone() {
          return Object.assign(new _StsTokenManager(), this.toJSON());
        }
        _performRefresh() {
          return debugFail("not implemented");
        }
      };
      UserImpl = class _UserImpl {
        constructor(_a) {
          var { uid, auth, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
          this.providerId = "firebase";
          this.proactiveRefresh = new ProactiveRefresh(this);
          this.reloadUserInfo = null;
          this.reloadListener = null;
          this.uid = uid;
          this.auth = auth;
          this.stsTokenManager = stsTokenManager;
          this.accessToken = stsTokenManager.accessToken;
          this.displayName = opt.displayName || null;
          this.email = opt.email || null;
          this.emailVerified = opt.emailVerified || false;
          this.phoneNumber = opt.phoneNumber || null;
          this.photoURL = opt.photoURL || null;
          this.isAnonymous = opt.isAnonymous || false;
          this.tenantId = opt.tenantId || null;
          this.providerData = opt.providerData ? [...opt.providerData] : [];
          this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
        }
        async getIdToken(forceRefresh) {
          const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
          _assert(
            accessToken,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          if (this.accessToken !== accessToken) {
            this.accessToken = accessToken;
            await this.auth._persistUserIfCurrent(this);
            this.auth._notifyListenersIfCurrent(this);
          }
          return accessToken;
        }
        getIdTokenResult(forceRefresh) {
          return getIdTokenResult(this, forceRefresh);
        }
        reload() {
          return reload(this);
        }
        _assign(user) {
          if (this === user) {
            return;
          }
          _assert(
            this.uid === user.uid,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          this.email = user.email;
          this.emailVerified = user.emailVerified;
          this.phoneNumber = user.phoneNumber;
          this.isAnonymous = user.isAnonymous;
          this.tenantId = user.tenantId;
          this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
          this.metadata._copy(user.metadata);
          this.stsTokenManager._assign(user.stsTokenManager);
        }
        _clone(auth) {
          const newUser = new _UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
          newUser.metadata._copy(this.metadata);
          return newUser;
        }
        _onReload(callback) {
          _assert(
            !this.reloadListener,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.reloadListener = callback;
          if (this.reloadUserInfo) {
            this._notifyReloadListener(this.reloadUserInfo);
            this.reloadUserInfo = null;
          }
        }
        _notifyReloadListener(userInfo) {
          if (this.reloadListener) {
            this.reloadListener(userInfo);
          } else {
            this.reloadUserInfo = userInfo;
          }
        }
        _startProactiveRefresh() {
          this.proactiveRefresh._start();
        }
        _stopProactiveRefresh() {
          this.proactiveRefresh._stop();
        }
        async _updateTokensIfNecessary(response, reload2 = false) {
          let tokensRefreshed = false;
          if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
            this.stsTokenManager.updateFromServerResponse(response);
            tokensRefreshed = true;
          }
          if (reload2) {
            await _reloadWithoutSaving(this);
          }
          await this.auth._persistUserIfCurrent(this);
          if (tokensRefreshed) {
            this.auth._notifyListenersIfCurrent(this);
          }
        }
        async delete() {
          if (_isFirebaseServerApp(this.auth.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
          }
          const idToken = await this.getIdToken();
          await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
          this.stsTokenManager.clearRefreshToken();
          return this.auth.signOut();
        }
        toJSON() {
          return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            // Redirect event ID must be maintained in case there is a pending
            // redirect event.
            _redirectEventId: this._redirectEventId
          }, this.metadata.toJSON()), {
            // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
          });
        }
        get refreshToken() {
          return this.stsTokenManager.refreshToken || "";
        }
        static _fromJSON(auth, object) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
          const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
          const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
          const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
          const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
          const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
          const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
          const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
          const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
          _assert(
            uid && plainObjectTokenManager,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
          _assert(
            typeof uid === "string",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          assertStringOrUndefined(displayName, auth.name);
          assertStringOrUndefined(email, auth.name);
          _assert(
            typeof emailVerified === "boolean",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof isAnonymous === "boolean",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          assertStringOrUndefined(phoneNumber, auth.name);
          assertStringOrUndefined(photoURL, auth.name);
          assertStringOrUndefined(tenantId, auth.name);
          assertStringOrUndefined(_redirectEventId, auth.name);
          assertStringOrUndefined(createdAt, auth.name);
          assertStringOrUndefined(lastLoginAt, auth.name);
          const user = new _UserImpl({
            uid,
            auth,
            email,
            emailVerified,
            displayName,
            isAnonymous,
            photoURL,
            phoneNumber,
            tenantId,
            stsTokenManager,
            createdAt,
            lastLoginAt
          });
          if (providerData && Array.isArray(providerData)) {
            user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
          }
          if (_redirectEventId) {
            user._redirectEventId = _redirectEventId;
          }
          return user;
        }
        /**
         * Initialize a User from an idToken server response
         * @param auth
         * @param idTokenResponse
         */
        static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
          const stsTokenManager = new StsTokenManager();
          stsTokenManager.updateFromServerResponse(idTokenResponse);
          const user = new _UserImpl({
            uid: idTokenResponse.localId,
            auth,
            stsTokenManager,
            isAnonymous
          });
          await _reloadWithoutSaving(user);
          return user;
        }
        /**
         * Initialize a User from an idToken server response
         * @param auth
         * @param idTokenResponse
         */
        static async _fromGetAccountInfoResponse(auth, response, idToken) {
          const coreAccount = response.users[0];
          _assert(
            coreAccount.localId !== void 0,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
          const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
          const stsTokenManager = new StsTokenManager();
          stsTokenManager.updateFromIdToken(idToken);
          const user = new _UserImpl({
            uid: coreAccount.localId,
            auth,
            stsTokenManager,
            isAnonymous
          });
          const updates = {
            uid: coreAccount.localId,
            displayName: coreAccount.displayName || null,
            photoURL: coreAccount.photoUrl || null,
            email: coreAccount.email || null,
            emailVerified: coreAccount.emailVerified || false,
            phoneNumber: coreAccount.phoneNumber || null,
            tenantId: coreAccount.tenantId || null,
            providerData,
            metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
            isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
          };
          Object.assign(user, updates);
          return user;
        }
      };
      instanceCache = /* @__PURE__ */ new Map();
      InMemoryPersistence = class {
        constructor() {
          this.type = "NONE";
          this.storage = {};
        }
        async _isAvailable() {
          return true;
        }
        async _set(key, value) {
          this.storage[key] = value;
        }
        async _get(key) {
          const value = this.storage[key];
          return value === void 0 ? null : value;
        }
        async _remove(key) {
          delete this.storage[key];
        }
        _addListener(_key, _listener) {
          return;
        }
        _removeListener(_key, _listener) {
          return;
        }
      };
      InMemoryPersistence.type = "NONE";
      inMemoryPersistence = InMemoryPersistence;
      PersistenceUserManager = class _PersistenceUserManager {
        constructor(persistence, auth, userKey) {
          this.persistence = persistence;
          this.auth = auth;
          this.userKey = userKey;
          const { config, name: name4 } = this.auth;
          this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name4);
          this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name4);
          this.boundEventHandler = auth._onStorageEvent.bind(auth);
          this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
        }
        setCurrentUser(user) {
          return this.persistence._set(this.fullUserKey, user.toJSON());
        }
        async getCurrentUser() {
          const blob = await this.persistence._get(this.fullUserKey);
          return blob ? UserImpl._fromJSON(this.auth, blob) : null;
        }
        removeCurrentUser() {
          return this.persistence._remove(this.fullUserKey);
        }
        savePersistenceForRedirect() {
          return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
        }
        async setPersistence(newPersistence) {
          if (this.persistence === newPersistence) {
            return;
          }
          const currentUser = await this.getCurrentUser();
          await this.removeCurrentUser();
          this.persistence = newPersistence;
          if (currentUser) {
            return this.setCurrentUser(currentUser);
          }
        }
        delete() {
          this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
        }
        static async create(auth, persistenceHierarchy, userKey = "authUser") {
          if (!persistenceHierarchy.length) {
            return new _PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
          }
          const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (await persistence._isAvailable()) {
              return persistence;
            }
            return void 0;
          }))).filter((persistence) => persistence);
          let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
          const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
          let userToMigrate = null;
          for (const persistence of persistenceHierarchy) {
            try {
              const blob = await persistence._get(key);
              if (blob) {
                const user = UserImpl._fromJSON(auth, blob);
                if (persistence !== selectedPersistence) {
                  userToMigrate = user;
                }
                selectedPersistence = persistence;
                break;
              }
            } catch (_a) {
            }
          }
          const migrationHierarchy = availablePersistences.filter((p2) => p2._shouldAllowMigration);
          if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
            return new _PersistenceUserManager(selectedPersistence, auth, userKey);
          }
          selectedPersistence = migrationHierarchy[0];
          if (userToMigrate) {
            await selectedPersistence._set(key, userToMigrate.toJSON());
          }
          await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (persistence !== selectedPersistence) {
              try {
                await persistence._remove(key);
              } catch (_a) {
              }
            }
          }));
          return new _PersistenceUserManager(selectedPersistence, auth, userKey);
        }
      };
      AuthMiddlewareQueue = class {
        constructor(auth) {
          this.auth = auth;
          this.queue = [];
        }
        pushCallback(callback, onAbort) {
          const wrappedCallback = (user) => new Promise((resolve, reject) => {
            try {
              const result = callback(user);
              resolve(result);
            } catch (e) {
              reject(e);
            }
          });
          wrappedCallback.onAbort = onAbort;
          this.queue.push(wrappedCallback);
          const index = this.queue.length - 1;
          return () => {
            this.queue[index] = () => Promise.resolve();
          };
        }
        async runMiddleware(nextUser) {
          if (this.auth.currentUser === nextUser) {
            return;
          }
          const onAbortStack = [];
          try {
            for (const beforeStateCallback of this.queue) {
              await beforeStateCallback(nextUser);
              if (beforeStateCallback.onAbort) {
                onAbortStack.push(beforeStateCallback.onAbort);
              }
            }
          } catch (e) {
            onAbortStack.reverse();
            for (const onAbort of onAbortStack) {
              try {
                onAbort();
              } catch (_) {
              }
            }
            throw this.auth._errorFactory.create("login-blocked", {
              originalMessage: e === null || e === void 0 ? void 0 : e.message
            });
          }
        }
      };
      MINIMUM_MIN_PASSWORD_LENGTH = 6;
      PasswordPolicyImpl = class {
        constructor(response) {
          var _a, _b, _c, _d;
          const responseOptions = response.customStrengthOptions;
          this.customStrengthOptions = {};
          this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
          if (responseOptions.maxPasswordLength) {
            this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
          }
          if (responseOptions.containsLowercaseCharacter !== void 0) {
            this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
          }
          if (responseOptions.containsUppercaseCharacter !== void 0) {
            this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
          }
          if (responseOptions.containsNumericCharacter !== void 0) {
            this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
          }
          if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
            this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
          }
          this.enforcementState = response.enforcementState;
          if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
            this.enforcementState = "OFF";
          }
          this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
          this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
          this.schemaVersion = response.schemaVersion;
        }
        validatePassword(password) {
          var _a, _b, _c, _d, _e, _f;
          const status = {
            isValid: true,
            passwordPolicy: this
          };
          this.validatePasswordLengthOptions(password, status);
          this.validatePasswordCharacterOptions(password, status);
          status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
          status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
          status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
          status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
          status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
          status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
          return status;
        }
        /**
         * Validates that the password meets the length options for the policy.
         *
         * @param password Password to validate.
         * @param status Validation status.
         */
        validatePasswordLengthOptions(password, status) {
          const minPasswordLength = this.customStrengthOptions.minPasswordLength;
          const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
          if (minPasswordLength) {
            status.meetsMinPasswordLength = password.length >= minPasswordLength;
          }
          if (maxPasswordLength) {
            status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
          }
        }
        /**
         * Validates that the password meets the character options for the policy.
         *
         * @param password Password to validate.
         * @param status Validation status.
         */
        validatePasswordCharacterOptions(password, status) {
          this.updatePasswordCharacterOptionsStatuses(
            status,
            /* containsLowercaseCharacter= */
            false,
            /* containsUppercaseCharacter= */
            false,
            /* containsNumericCharacter= */
            false,
            /* containsNonAlphanumericCharacter= */
            false
          );
          let passwordChar;
          for (let i = 0; i < password.length; i++) {
            passwordChar = password.charAt(i);
            this.updatePasswordCharacterOptionsStatuses(
              status,
              /* containsLowercaseCharacter= */
              passwordChar >= "a" && passwordChar <= "z",
              /* containsUppercaseCharacter= */
              passwordChar >= "A" && passwordChar <= "Z",
              /* containsNumericCharacter= */
              passwordChar >= "0" && passwordChar <= "9",
              /* containsNonAlphanumericCharacter= */
              this.allowedNonAlphanumericCharacters.includes(passwordChar)
            );
          }
        }
        /**
         * Updates the running validation status with the statuses for the character options.
         * Expected to be called each time a character is processed to update each option status
         * based on the current character.
         *
         * @param status Validation status.
         * @param containsLowercaseCharacter Whether the character is a lowercase letter.
         * @param containsUppercaseCharacter Whether the character is an uppercase letter.
         * @param containsNumericCharacter Whether the character is a numeric character.
         * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
         */
        updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
          if (this.customStrengthOptions.containsLowercaseLetter) {
            status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
          }
          if (this.customStrengthOptions.containsUppercaseLetter) {
            status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
          }
          if (this.customStrengthOptions.containsNumericCharacter) {
            status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
          }
          if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
            status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
          }
        }
      };
      AuthImpl = class {
        constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
          this.app = app;
          this.heartbeatServiceProvider = heartbeatServiceProvider;
          this.appCheckServiceProvider = appCheckServiceProvider;
          this.config = config;
          this.currentUser = null;
          this.emulatorConfig = null;
          this.operations = Promise.resolve();
          this.authStateSubscription = new Subscription(this);
          this.idTokenSubscription = new Subscription(this);
          this.beforeStateQueue = new AuthMiddlewareQueue(this);
          this.redirectUser = null;
          this.isProactiveRefreshEnabled = false;
          this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
          this._canInitEmulator = true;
          this._isInitialized = false;
          this._deleted = false;
          this._initializationPromise = null;
          this._popupRedirectResolver = null;
          this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
          this._agentRecaptchaConfig = null;
          this._tenantRecaptchaConfigs = {};
          this._projectPasswordPolicy = null;
          this._tenantPasswordPolicies = {};
          this.lastNotifiedUid = void 0;
          this.languageCode = null;
          this.tenantId = null;
          this.settings = { appVerificationDisabledForTesting: false };
          this.frameworks = [];
          this.name = app.name;
          this.clientVersion = config.sdkClientVersion;
        }
        _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
          if (popupRedirectResolver) {
            this._popupRedirectResolver = _getInstance(popupRedirectResolver);
          }
          this._initializationPromise = this.queue(async () => {
            var _a, _b;
            if (this._deleted) {
              return;
            }
            this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
            if (this._deleted) {
              return;
            }
            if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (e) {
              }
            }
            await this.initializeCurrentUser(popupRedirectResolver);
            this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
            if (this._deleted) {
              return;
            }
            this._isInitialized = true;
          });
          return this._initializationPromise;
        }
        /**
         * If the persistence is changed in another window, the user manager will let us know
         */
        async _onStorageEvent() {
          if (this._deleted) {
            return;
          }
          const user = await this.assertedPersistence.getCurrentUser();
          if (!this.currentUser && !user) {
            return;
          }
          if (this.currentUser && user && this.currentUser.uid === user.uid) {
            this._currentUser._assign(user);
            await this.currentUser.getIdToken();
            return;
          }
          await this._updateCurrentUser(
            user,
            /* skipBeforeStateCallbacks */
            true
          );
        }
        async initializeCurrentUserFromIdToken(idToken) {
          try {
            const response = await getAccountInfo(this, { idToken });
            const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
            await this.directlySetCurrentUser(user);
          } catch (err) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
            await this.directlySetCurrentUser(null);
          }
        }
        async initializeCurrentUser(popupRedirectResolver) {
          var _a;
          if (_isFirebaseServerApp(this.app)) {
            const idToken = this.app.settings.authIdToken;
            if (idToken) {
              return new Promise((resolve) => {
                setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
              });
            } else {
              return this.directlySetCurrentUser(null);
            }
          }
          const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
          let futureCurrentUser = previouslyStoredUser;
          let needsTocheckMiddleware = false;
          if (popupRedirectResolver && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
            const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
            const result = await this.tryRedirectSignIn(popupRedirectResolver);
            if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
              futureCurrentUser = result.user;
              needsTocheckMiddleware = true;
            }
          }
          if (!futureCurrentUser) {
            return this.directlySetCurrentUser(null);
          }
          if (!futureCurrentUser._redirectEventId) {
            if (needsTocheckMiddleware) {
              try {
                await this.beforeStateQueue.runMiddleware(futureCurrentUser);
              } catch (e) {
                futureCurrentUser = previouslyStoredUser;
                this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
              }
            }
            if (futureCurrentUser) {
              return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
            } else {
              return this.directlySetCurrentUser(null);
            }
          }
          _assert(
            this._popupRedirectResolver,
            this,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          await this.getOrInitRedirectPersistenceManager();
          if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
            return this.directlySetCurrentUser(futureCurrentUser);
          }
          return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
        }
        async tryRedirectSignIn(redirectResolver) {
          let result = null;
          try {
            result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
          } catch (e) {
            await this._setRedirectUser(null);
          }
          return result;
        }
        async reloadAndSetCurrentUserOrClear(user) {
          try {
            await _reloadWithoutSaving(user);
          } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
              return this.directlySetCurrentUser(null);
            }
          }
          return this.directlySetCurrentUser(user);
        }
        useDeviceLanguage() {
          this.languageCode = _getUserLanguage();
        }
        async _delete() {
          this._deleted = true;
        }
        async updateCurrentUser(userExtern) {
          if (_isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          const user = userExtern ? getModularInstance(userExtern) : null;
          if (user) {
            _assert(
              user.auth.config.apiKey === this.config.apiKey,
              this,
              "invalid-user-token"
              /* AuthErrorCode.INVALID_AUTH */
            );
          }
          return this._updateCurrentUser(user && user._clone(this));
        }
        async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
          if (this._deleted) {
            return;
          }
          if (user) {
            _assert(
              this.tenantId === user.tenantId,
              this,
              "tenant-id-mismatch"
              /* AuthErrorCode.TENANT_ID_MISMATCH */
            );
          }
          if (!skipBeforeStateCallbacks) {
            await this.beforeStateQueue.runMiddleware(user);
          }
          return this.queue(async () => {
            await this.directlySetCurrentUser(user);
            this.notifyAuthListeners();
          });
        }
        async signOut() {
          if (_isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          await this.beforeStateQueue.runMiddleware(null);
          if (this.redirectPersistenceManager || this._popupRedirectResolver) {
            await this._setRedirectUser(null);
          }
          return this._updateCurrentUser(
            null,
            /* skipBeforeStateCallbacks */
            true
          );
        }
        setPersistence(persistence) {
          if (_isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          return this.queue(async () => {
            await this.assertedPersistence.setPersistence(_getInstance(persistence));
          });
        }
        _getRecaptchaConfig() {
          if (this.tenantId == null) {
            return this._agentRecaptchaConfig;
          } else {
            return this._tenantRecaptchaConfigs[this.tenantId];
          }
        }
        async validatePassword(password) {
          if (!this._getPasswordPolicyInternal()) {
            await this._updatePasswordPolicy();
          }
          const passwordPolicy = this._getPasswordPolicyInternal();
          if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
            return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
          }
          return passwordPolicy.validatePassword(password);
        }
        _getPasswordPolicyInternal() {
          if (this.tenantId === null) {
            return this._projectPasswordPolicy;
          } else {
            return this._tenantPasswordPolicies[this.tenantId];
          }
        }
        async _updatePasswordPolicy() {
          const response = await _getPasswordPolicy(this);
          const passwordPolicy = new PasswordPolicyImpl(response);
          if (this.tenantId === null) {
            this._projectPasswordPolicy = passwordPolicy;
          } else {
            this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
          }
        }
        _getPersistence() {
          return this.assertedPersistence.persistence.type;
        }
        _updateErrorMap(errorMap) {
          this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
        }
        onAuthStateChanged(nextOrObserver, error, completed) {
          return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
        }
        beforeAuthStateChanged(callback, onAbort) {
          return this.beforeStateQueue.pushCallback(callback, onAbort);
        }
        onIdTokenChanged(nextOrObserver, error, completed) {
          return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
        }
        authStateReady() {
          return new Promise((resolve, reject) => {
            if (this.currentUser) {
              resolve();
            } else {
              const unsubscribe = this.onAuthStateChanged(() => {
                unsubscribe();
                resolve();
              }, reject);
            }
          });
        }
        /**
         * Revokes the given access token. Currently only supports Apple OAuth access tokens.
         */
        async revokeAccessToken(token) {
          if (this.currentUser) {
            const idToken = await this.currentUser.getIdToken();
            const request = {
              providerId: "apple.com",
              tokenType: "ACCESS_TOKEN",
              token,
              idToken
            };
            if (this.tenantId != null) {
              request.tenantId = this.tenantId;
            }
            await revokeToken(this, request);
          }
        }
        toJSON() {
          var _a;
          return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
          };
        }
        async _setRedirectUser(user, popupRedirectResolver) {
          const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
          return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
        }
        async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
          if (!this.redirectPersistenceManager) {
            const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
            _assert(
              resolver,
              this,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            this.redirectPersistenceManager = await PersistenceUserManager.create(
              this,
              [_getInstance(resolver._redirectPersistence)],
              "redirectUser"
              /* KeyName.REDIRECT_USER */
            );
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
          }
          return this.redirectPersistenceManager;
        }
        async _redirectUserForId(id) {
          var _a, _b;
          if (this._isInitialized) {
            await this.queue(async () => {
            });
          }
          if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
            return this._currentUser;
          }
          if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
            return this.redirectUser;
          }
          return null;
        }
        async _persistUserIfCurrent(user) {
          if (user === this.currentUser) {
            return this.queue(async () => this.directlySetCurrentUser(user));
          }
        }
        /** Notifies listeners only if the user is current */
        _notifyListenersIfCurrent(user) {
          if (user === this.currentUser) {
            this.notifyAuthListeners();
          }
        }
        _key() {
          return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
        }
        _startProactiveRefresh() {
          this.isProactiveRefreshEnabled = true;
          if (this.currentUser) {
            this._currentUser._startProactiveRefresh();
          }
        }
        _stopProactiveRefresh() {
          this.isProactiveRefreshEnabled = false;
          if (this.currentUser) {
            this._currentUser._stopProactiveRefresh();
          }
        }
        /** Returns the current user cast as the internal type */
        get _currentUser() {
          return this.currentUser;
        }
        notifyAuthListeners() {
          var _a, _b;
          if (!this._isInitialized) {
            return;
          }
          this.idTokenSubscription.next(this.currentUser);
          const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
          if (this.lastNotifiedUid !== currentUid) {
            this.lastNotifiedUid = currentUid;
            this.authStateSubscription.next(this.currentUser);
          }
        }
        registerStateListener(subscription, nextOrObserver, error, completed) {
          if (this._deleted) {
            return () => {
            };
          }
          const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
          let isUnsubscribed = false;
          const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
          _assert(
            promise,
            this,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          promise.then(() => {
            if (isUnsubscribed) {
              return;
            }
            cb(this.currentUser);
          });
          if (typeof nextOrObserver === "function") {
            const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
            return () => {
              isUnsubscribed = true;
              unsubscribe();
            };
          } else {
            const unsubscribe = subscription.addObserver(nextOrObserver);
            return () => {
              isUnsubscribed = true;
              unsubscribe();
            };
          }
        }
        /**
         * Unprotected (from race conditions) method to set the current user. This
         * should only be called from within a queued callback. This is necessary
         * because the queue shouldn't rely on another queued callback.
         */
        async directlySetCurrentUser(user) {
          if (this.currentUser && this.currentUser !== user) {
            this._currentUser._stopProactiveRefresh();
          }
          if (user && this.isProactiveRefreshEnabled) {
            user._startProactiveRefresh();
          }
          this.currentUser = user;
          if (user) {
            await this.assertedPersistence.setCurrentUser(user);
          } else {
            await this.assertedPersistence.removeCurrentUser();
          }
        }
        queue(action) {
          this.operations = this.operations.then(action, action);
          return this.operations;
        }
        get assertedPersistence() {
          _assert(
            this.persistenceManager,
            this,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.persistenceManager;
        }
        _logFramework(framework) {
          if (!framework || this.frameworks.includes(framework)) {
            return;
          }
          this.frameworks.push(framework);
          this.frameworks.sort();
          this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
        }
        _getFrameworks() {
          return this.frameworks;
        }
        async _getAdditionalHeaders() {
          var _a;
          const headers = {
            [
              "X-Client-Version"
              /* HttpHeader.X_CLIENT_VERSION */
            ]: this.clientVersion
          };
          if (this.app.options.appId) {
            headers[
              "X-Firebase-gmpid"
              /* HttpHeader.X_FIREBASE_GMPID */
            ] = this.app.options.appId;
          }
          const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
            optional: true
          })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
          if (heartbeatsHeader) {
            headers[
              "X-Firebase-Client"
              /* HttpHeader.X_FIREBASE_CLIENT */
            ] = heartbeatsHeader;
          }
          const appCheckToken = await this._getAppCheckToken();
          if (appCheckToken) {
            headers[
              "X-Firebase-AppCheck"
              /* HttpHeader.X_FIREBASE_APP_CHECK */
            ] = appCheckToken;
          }
          return headers;
        }
        async _getAppCheckToken() {
          var _a;
          const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({ optional: true })) === null || _a === void 0 ? void 0 : _a.getToken());
          if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
            _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
          }
          return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
        }
      };
      Subscription = class {
        constructor(auth) {
          this.auth = auth;
          this.observer = null;
          this.addObserver = createSubscribe((observer) => this.observer = observer);
        }
        get next() {
          _assert(
            this.observer,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.observer.next.bind(this.observer);
        }
      };
      externalJSProvider = {
        async loadJS() {
          throw new Error("Unable to load external scripts");
        },
        recaptchaV2Script: "",
        recaptchaEnterpriseScript: "",
        gapiScript: ""
      };
      RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
      FAKE_TOKEN = "NO_RECAPTCHA";
      RecaptchaEnterpriseVerifier = class {
        /**
         *
         * @param authExtern - The corresponding Firebase {@link Auth} instance.
         *
         */
        constructor(authExtern) {
          this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
          this.auth = _castAuth(authExtern);
        }
        /**
         * Executes the verification process.
         *
         * @returns A Promise for a token that can be used to assert the validity of a request.
         */
        async verify(action = "verify", forceRefresh = false) {
          async function retrieveSiteKey(auth) {
            if (!forceRefresh) {
              if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
                return auth._agentRecaptchaConfig.siteKey;
              }
              if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
                return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
              }
            }
            return new Promise(async (resolve, reject) => {
              getRecaptchaConfig(auth, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
                /* RecaptchaVersion.ENTERPRISE */
              }).then((response) => {
                if (response.recaptchaKey === void 0) {
                  reject(new Error("recaptcha Enterprise site key undefined"));
                } else {
                  const config = new RecaptchaConfig(response);
                  if (auth.tenantId == null) {
                    auth._agentRecaptchaConfig = config;
                  } else {
                    auth._tenantRecaptchaConfigs[auth.tenantId] = config;
                  }
                  return resolve(config.siteKey);
                }
              }).catch((error) => {
                reject(error);
              });
            });
          }
          function retrieveRecaptchaToken(siteKey, resolve, reject) {
            const grecaptcha = window.grecaptcha;
            if (isEnterprise(grecaptcha)) {
              grecaptcha.enterprise.ready(() => {
                grecaptcha.enterprise.execute(siteKey, { action }).then((token) => {
                  resolve(token);
                }).catch(() => {
                  resolve(FAKE_TOKEN);
                });
              });
            } else {
              reject(Error("No reCAPTCHA enterprise script loaded."));
            }
          }
          return new Promise((resolve, reject) => {
            retrieveSiteKey(this.auth).then((siteKey) => {
              if (!forceRefresh && isEnterprise(window.grecaptcha)) {
                retrieveRecaptchaToken(siteKey, resolve, reject);
              } else {
                if (typeof window === "undefined") {
                  reject(new Error("RecaptchaVerifier is only supported in browser"));
                  return;
                }
                let url = _recaptchaEnterpriseScriptUrl();
                if (url.length !== 0) {
                  url += siteKey;
                }
                _loadJS(url).then(() => {
                  retrieveRecaptchaToken(siteKey, resolve, reject);
                }).catch((error) => {
                  reject(error);
                });
              }
            }).catch((error) => {
              reject(error);
            });
          });
        }
      };
      AuthCredential = class {
        /** @internal */
        constructor(providerId, signInMethod) {
          this.providerId = providerId;
          this.signInMethod = signInMethod;
        }
        /**
         * Returns a JSON-serializable representation of this object.
         *
         * @returns a JSON-serializable representation of this object.
         */
        toJSON() {
          return debugFail("not implemented");
        }
        /** @internal */
        _getIdTokenResponse(_auth) {
          return debugFail("not implemented");
        }
        /** @internal */
        _linkToIdToken(_auth, _idToken) {
          return debugFail("not implemented");
        }
        /** @internal */
        _getReauthenticationResolver(_auth) {
          return debugFail("not implemented");
        }
      };
      EmailAuthCredential = class _EmailAuthCredential extends AuthCredential {
        /** @internal */
        constructor(_email, _password, signInMethod, _tenantId = null) {
          super("password", signInMethod);
          this._email = _email;
          this._password = _password;
          this._tenantId = _tenantId;
        }
        /** @internal */
        static _fromEmailAndPassword(email, password) {
          return new _EmailAuthCredential(
            email,
            password,
            "password"
            /* SignInMethod.EMAIL_PASSWORD */
          );
        }
        /** @internal */
        static _fromEmailAndCode(email, oobCode, tenantId = null) {
          return new _EmailAuthCredential(email, oobCode, "emailLink", tenantId);
        }
        /** {@inheritdoc AuthCredential.toJSON} */
        toJSON() {
          return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
         *
         * @param json - Either `object` or the stringified representation of the object. When string is
         * provided, `JSON.parse` would be called first.
         *
         * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
            if (obj.signInMethod === "password") {
              return this._fromEmailAndPassword(obj.email, obj.password);
            } else if (obj.signInMethod === "emailLink") {
              return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
            }
          }
          return null;
        }
        /** @internal */
        async _getIdTokenResponse(auth) {
          switch (this.signInMethod) {
            case "password":
              const request = {
                returnSecureToken: true,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
              };
              return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword);
            case "emailLink":
              return signInWithEmailLink$1(auth, {
                email: this._email,
                oobCode: this._password
              });
            default:
              _fail(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        /** @internal */
        async _linkToIdToken(auth, idToken) {
          switch (this.signInMethod) {
            case "password":
              const request = {
                idToken,
                returnSecureToken: true,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
              };
              return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword);
            case "emailLink":
              return signInWithEmailLinkForLinking(auth, {
                idToken,
                email: this._email,
                oobCode: this._password
              });
            default:
              _fail(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          return this._getIdTokenResponse(auth);
        }
      };
      IDP_REQUEST_URI$1 = "http://localhost";
      OAuthCredential = class _OAuthCredential extends AuthCredential {
        constructor() {
          super(...arguments);
          this.pendingToken = null;
        }
        /** @internal */
        static _fromParams(params) {
          const cred = new _OAuthCredential(params.providerId, params.signInMethod);
          if (params.idToken || params.accessToken) {
            if (params.idToken) {
              cred.idToken = params.idToken;
            }
            if (params.accessToken) {
              cred.accessToken = params.accessToken;
            }
            if (params.nonce && !params.pendingToken) {
              cred.nonce = params.nonce;
            }
            if (params.pendingToken) {
              cred.pendingToken = params.pendingToken;
            }
          } else if (params.oauthToken && params.oauthTokenSecret) {
            cred.accessToken = params.oauthToken;
            cred.secret = params.oauthTokenSecret;
          } else {
            _fail(
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
          }
          return cred;
        }
        /** {@inheritdoc AuthCredential.toJSON}  */
        toJSON() {
          return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an
         * {@link  AuthCredential}.
         *
         * @param json - Input can be either Object or the stringified representation of the object.
         * When string is provided, JSON.parse would be called first.
         *
         * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
          if (!providerId || !signInMethod) {
            return null;
          }
          const cred = new _OAuthCredential(providerId, signInMethod);
          cred.idToken = rest.idToken || void 0;
          cred.accessToken = rest.accessToken || void 0;
          cred.secret = rest.secret;
          cred.nonce = rest.nonce;
          cred.pendingToken = rest.pendingToken || null;
          return cred;
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          const request = this.buildRequest();
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          const request = this.buildRequest();
          request.idToken = idToken;
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          const request = this.buildRequest();
          request.autoCreate = false;
          return signInWithIdp(auth, request);
        }
        buildRequest() {
          const request = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: true
          };
          if (this.pendingToken) {
            request.pendingToken = this.pendingToken;
          } else {
            const postBody = {};
            if (this.idToken) {
              postBody["id_token"] = this.idToken;
            }
            if (this.accessToken) {
              postBody["access_token"] = this.accessToken;
            }
            if (this.secret) {
              postBody["oauth_token_secret"] = this.secret;
            }
            postBody["providerId"] = this.providerId;
            if (this.nonce && !this.pendingToken) {
              postBody["nonce"] = this.nonce;
            }
            request.postBody = querystring(postBody);
          }
          return request;
        }
      };
      VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
        [
          "USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
        ]: "user-not-found"
        /* AuthErrorCode.USER_DELETED */
      };
      PhoneAuthCredential = class _PhoneAuthCredential extends AuthCredential {
        constructor(params) {
          super(
            "phone",
            "phone"
            /* SignInMethod.PHONE */
          );
          this.params = params;
        }
        /** @internal */
        static _fromVerification(verificationId, verificationCode) {
          return new _PhoneAuthCredential({ verificationId, verificationCode });
        }
        /** @internal */
        static _fromTokenResponse(phoneNumber, temporaryProof) {
          return new _PhoneAuthCredential({ phoneNumber, temporaryProof });
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          return linkWithPhoneNumber$1(auth, Object.assign({ idToken }, this._makeVerificationRequest()));
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
        }
        /** @internal */
        _makeVerificationRequest() {
          const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
          if (temporaryProof && phoneNumber) {
            return { temporaryProof, phoneNumber };
          }
          return {
            sessionInfo: verificationId,
            code: verificationCode
          };
        }
        /** {@inheritdoc AuthCredential.toJSON} */
        toJSON() {
          const obj = {
            providerId: this.providerId
          };
          if (this.params.phoneNumber) {
            obj.phoneNumber = this.params.phoneNumber;
          }
          if (this.params.temporaryProof) {
            obj.temporaryProof = this.params.temporaryProof;
          }
          if (this.params.verificationCode) {
            obj.verificationCode = this.params.verificationCode;
          }
          if (this.params.verificationId) {
            obj.verificationId = this.params.verificationId;
          }
          return obj;
        }
        /** Generates a phone credential based on a plain object or a JSON string. */
        static fromJSON(json) {
          if (typeof json === "string") {
            json = JSON.parse(json);
          }
          const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
          if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
            return null;
          }
          return new _PhoneAuthCredential({
            verificationId,
            verificationCode,
            phoneNumber,
            temporaryProof
          });
        }
      };
      ActionCodeURL = class _ActionCodeURL {
        /**
         * @param actionLink - The link from which to extract the URL.
         * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
         *
         * @internal
         */
        constructor(actionLink) {
          var _a, _b, _c, _d, _e, _f;
          const searchParams = querystringDecode(extractQuerystring(actionLink));
          const apiKey = (_a = searchParams[
            "apiKey"
            /* QueryField.API_KEY */
          ]) !== null && _a !== void 0 ? _a : null;
          const code = (_b = searchParams[
            "oobCode"
            /* QueryField.CODE */
          ]) !== null && _b !== void 0 ? _b : null;
          const operation = parseMode((_c = searchParams[
            "mode"
            /* QueryField.MODE */
          ]) !== null && _c !== void 0 ? _c : null);
          _assert(
            apiKey && code && operation,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          this.apiKey = apiKey;
          this.operation = operation;
          this.code = code;
          this.continueUrl = (_d = searchParams[
            "continueUrl"
            /* QueryField.CONTINUE_URL */
          ]) !== null && _d !== void 0 ? _d : null;
          this.languageCode = (_e = searchParams[
            "languageCode"
            /* QueryField.LANGUAGE_CODE */
          ]) !== null && _e !== void 0 ? _e : null;
          this.tenantId = (_f = searchParams[
            "tenantId"
            /* QueryField.TENANT_ID */
          ]) !== null && _f !== void 0 ? _f : null;
        }
        /**
         * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
         * otherwise returns null.
         *
         * @param link  - The email action link string.
         * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
         *
         * @public
         */
        static parseLink(link) {
          const actionLink = parseDeepLink(link);
          try {
            return new _ActionCodeURL(actionLink);
          } catch (_a) {
            return null;
          }
        }
      };
      EmailAuthProvider = class _EmailAuthProvider {
        constructor() {
          this.providerId = _EmailAuthProvider.PROVIDER_ID;
        }
        /**
         * Initialize an {@link AuthCredential} using an email and password.
         *
         * @example
         * ```javascript
         * const authCredential = EmailAuthProvider.credential(email, password);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * ```javascript
         * const userCredential = await signInWithEmailAndPassword(auth, email, password);
         * ```
         *
         * @param email - Email address.
         * @param password - User account password.
         * @returns The auth provider credential.
         */
        static credential(email, password) {
          return EmailAuthCredential._fromEmailAndPassword(email, password);
        }
        /**
         * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
         * email link operation.
         *
         * @example
         * ```javascript
         * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * ```javascript
         * await sendSignInLinkToEmail(auth, email);
         * // Obtain emailLink from user.
         * const userCredential = await signInWithEmailLink(auth, email, emailLink);
         * ```
         *
         * @param auth - The {@link Auth} instance used to verify the link.
         * @param email - Email address.
         * @param emailLink - Sign-in email link.
         * @returns - The auth provider credential.
         */
        static credentialWithLink(email, emailLink) {
          const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
          _assert(
            actionCodeUrl,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
        }
      };
      EmailAuthProvider.PROVIDER_ID = "password";
      EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
      EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
      FederatedAuthProvider = class {
        /**
         * Constructor for generic OAuth providers.
         *
         * @param providerId - Provider for which credentials should be generated.
         */
        constructor(providerId) {
          this.providerId = providerId;
          this.defaultLanguageCode = null;
          this.customParameters = {};
        }
        /**
         * Set the language gode.
         *
         * @param languageCode - language code
         */
        setDefaultLanguage(languageCode) {
          this.defaultLanguageCode = languageCode;
        }
        /**
         * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
         * operations.
         *
         * @remarks
         * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
         * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
         *
         * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
         */
        setCustomParameters(customOAuthParameters) {
          this.customParameters = customOAuthParameters;
          return this;
        }
        /**
         * Retrieve the current list of {@link CustomParameters}.
         */
        getCustomParameters() {
          return this.customParameters;
        }
      };
      BaseOAuthProvider = class extends FederatedAuthProvider {
        constructor() {
          super(...arguments);
          this.scopes = [];
        }
        /**
         * Add an OAuth scope to the credential.
         *
         * @param scope - Provider OAuth scope to add.
         */
        addScope(scope) {
          if (!this.scopes.includes(scope)) {
            this.scopes.push(scope);
          }
          return this;
        }
        /**
         * Retrieve the current list of OAuth scopes.
         */
        getScopes() {
          return [...this.scopes];
        }
      };
      OAuthProvider = class _OAuthProvider extends BaseOAuthProvider {
        /**
         * Creates an {@link OAuthCredential} from a JSON string or a plain object.
         * @param json - A plain object or a JSON string
         */
        static credentialFromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          _assert(
            "providerId" in obj && "signInMethod" in obj,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return OAuthCredential._fromParams(obj);
        }
        /**
         * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
         *
         * @remarks
         * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
         * the raw nonce must match the nonce field in the ID token.
         *
         * @example
         * ```javascript
         * // `googleUser` from the onsuccess Google Sign In callback.
         * // Initialize a generate OAuth provider with a `google.com` providerId.
         * const provider = new OAuthProvider('google.com');
         * const credential = provider.credential({
         *   idToken: googleUser.getAuthResponse().id_token,
         * });
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param params - Either the options object containing the ID token, access token and raw nonce
         * or the ID token string.
         */
        credential(params) {
          return this._credential(Object.assign(Object.assign({}, params), { nonce: params.rawNonce }));
        }
        /** An internal credential method that accepts more permissive options */
        _credential(params) {
          _assert(
            params.idToken || params.accessToken,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), { providerId: this.providerId, signInMethod: this.providerId }));
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
        }
        static oauthCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthIdToken, oauthAccessToken, oauthTokenSecret, pendingToken, nonce, providerId } = tokenResponse;
          if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
            return null;
          }
          if (!providerId) {
            return null;
          }
          try {
            return new _OAuthProvider(providerId)._credential({
              idToken: oauthIdToken,
              accessToken: oauthAccessToken,
              nonce,
              pendingToken
            });
          } catch (e) {
            return null;
          }
        }
      };
      FacebookAuthProvider = class _FacebookAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "facebook.com"
            /* ProviderId.FACEBOOK */
          );
        }
        /**
         * Creates a credential for Facebook.
         *
         * @example
         * ```javascript
         * // `event` from the Facebook auth.authResponseChange callback.
         * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param accessToken - Facebook access token.
         */
        static credential(accessToken) {
          return OAuthCredential._fromParams({
            providerId: _FacebookAuthProvider.PROVIDER_ID,
            signInMethod: _FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _FacebookAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
            return null;
          }
          if (!tokenResponse.oauthAccessToken) {
            return null;
          }
          try {
            return _FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
      FacebookAuthProvider.PROVIDER_ID = "facebook.com";
      GoogleAuthProvider = class _GoogleAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "google.com"
            /* ProviderId.GOOGLE */
          );
          this.addScope("profile");
        }
        /**
         * Creates a credential for Google. At least one of ID token and access token is required.
         *
         * @example
         * ```javascript
         * // \`googleUser\` from the onsuccess Google Sign In callback.
         * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param idToken - Google ID token.
         * @param accessToken - Google access token.
         */
        static credential(idToken, accessToken) {
          return OAuthCredential._fromParams({
            providerId: _GoogleAuthProvider.PROVIDER_ID,
            signInMethod: _GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _GoogleAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthIdToken, oauthAccessToken } = tokenResponse;
          if (!oauthIdToken && !oauthAccessToken) {
            return null;
          }
          try {
            return _GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
      GoogleAuthProvider.PROVIDER_ID = "google.com";
      GithubAuthProvider = class _GithubAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "github.com"
            /* ProviderId.GITHUB */
          );
        }
        /**
         * Creates a credential for GitHub.
         *
         * @param accessToken - GitHub access token.
         */
        static credential(accessToken) {
          return OAuthCredential._fromParams({
            providerId: _GithubAuthProvider.PROVIDER_ID,
            signInMethod: _GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _GithubAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
            return null;
          }
          if (!tokenResponse.oauthAccessToken) {
            return null;
          }
          try {
            return _GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
      GithubAuthProvider.PROVIDER_ID = "github.com";
      IDP_REQUEST_URI = "http://localhost";
      SAMLAuthCredential = class _SAMLAuthCredential extends AuthCredential {
        /** @internal */
        constructor(providerId, pendingToken) {
          super(providerId, providerId);
          this.pendingToken = pendingToken;
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          const request = this.buildRequest();
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          const request = this.buildRequest();
          request.idToken = idToken;
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          const request = this.buildRequest();
          request.autoCreate = false;
          return signInWithIdp(auth, request);
        }
        /** {@inheritdoc AuthCredential.toJSON}  */
        toJSON() {
          return {
            signInMethod: this.signInMethod,
            providerId: this.providerId,
            pendingToken: this.pendingToken
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an
         * {@link  AuthCredential}.
         *
         * @param json - Input can be either Object or the stringified representation of the object.
         * When string is provided, JSON.parse would be called first.
         *
         * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          const { providerId, signInMethod, pendingToken } = obj;
          if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
            return null;
          }
          return new _SAMLAuthCredential(providerId, pendingToken);
        }
        /**
         * Helper static method to avoid exposing the constructor to end users.
         *
         * @internal
         */
        static _create(providerId, pendingToken) {
          return new _SAMLAuthCredential(providerId, pendingToken);
        }
        buildRequest() {
          return {
            requestUri: IDP_REQUEST_URI,
            returnSecureToken: true,
            pendingToken: this.pendingToken
          };
        }
      };
      SAML_PROVIDER_PREFIX = "saml.";
      SAMLAuthProvider = class _SAMLAuthProvider extends FederatedAuthProvider {
        /**
         * Constructor. The providerId must start with "saml."
         * @param providerId - SAML provider ID.
         */
        constructor(providerId) {
          _assert(
            providerId.startsWith(SAML_PROVIDER_PREFIX),
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          super(providerId);
        }
        /**
         * Generates an {@link AuthCredential} from a {@link UserCredential} after a
         * successful SAML flow completes.
         *
         * @remarks
         *
         * For example, to get an {@link AuthCredential}, you could write the
         * following code:
         *
         * ```js
         * const userCredential = await signInWithPopup(auth, samlProvider);
         * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
         * ```
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
        }
        /**
         * Creates an {@link AuthCredential} from a JSON string or a plain object.
         * @param json - A plain object or a JSON string
         */
        static credentialFromJSON(json) {
          const credential = SAMLAuthCredential.fromJSON(json);
          _assert(
            credential,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return credential;
        }
        static samlCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { pendingToken, providerId } = tokenResponse;
          if (!pendingToken || !providerId) {
            return null;
          }
          try {
            return SAMLAuthCredential._create(providerId, pendingToken);
          } catch (e) {
            return null;
          }
        }
      };
      TwitterAuthProvider = class _TwitterAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "twitter.com"
            /* ProviderId.TWITTER */
          );
        }
        /**
         * Creates a credential for Twitter.
         *
         * @param token - Twitter access token.
         * @param secret - Twitter secret.
         */
        static credential(token, secret) {
          return OAuthCredential._fromParams({
            providerId: _TwitterAuthProvider.PROVIDER_ID,
            signInMethod: _TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: token,
            oauthTokenSecret: secret
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _TwitterAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
          if (!oauthAccessToken || !oauthTokenSecret) {
            return null;
          }
          try {
            return _TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
          } catch (_a) {
            return null;
          }
        }
      };
      TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
      TwitterAuthProvider.PROVIDER_ID = "twitter.com";
      UserCredentialImpl = class _UserCredentialImpl {
        constructor(params) {
          this.user = params.user;
          this.providerId = params.providerId;
          this._tokenResponse = params._tokenResponse;
          this.operationType = params.operationType;
        }
        static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
          const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
          const providerId = providerIdForResponse(idTokenResponse);
          const userCred = new _UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: idTokenResponse,
            operationType
          });
          return userCred;
        }
        static async _forOperation(user, operationType, response) {
          await user._updateTokensIfNecessary(
            response,
            /* reload */
            true
          );
          const providerId = providerIdForResponse(response);
          return new _UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: response,
            operationType
          });
        }
      };
      MultiFactorError = class _MultiFactorError extends FirebaseError {
        constructor(auth, error, operationType, user) {
          var _a;
          super(error.code, error.message);
          this.operationType = operationType;
          this.user = user;
          Object.setPrototypeOf(this, _MultiFactorError.prototype);
          this.customData = {
            appName: auth.name,
            tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
            _serverResponse: error.customData._serverResponse,
            operationType
          };
        }
        static _fromErrorAndOperation(auth, error, operationType, user) {
          return new _MultiFactorError(auth, error, operationType, user);
        }
      };
      MultiFactorInfoImpl = class {
        constructor(factorId, response) {
          this.factorId = factorId;
          this.uid = response.mfaEnrollmentId;
          this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
          this.displayName = response.displayName;
        }
        static _fromServerResponse(auth, enrollment) {
          if ("phoneInfo" in enrollment) {
            return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
          } else if ("totpInfo" in enrollment) {
            return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
          }
          return _fail(
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
        }
      };
      PhoneMultiFactorInfoImpl = class _PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
        constructor(response) {
          super("phone", response);
          this.phoneNumber = response.phoneInfo;
        }
        static _fromServerResponse(_auth, enrollment) {
          return new _PhoneMultiFactorInfoImpl(enrollment);
        }
      };
      TotpMultiFactorInfoImpl = class _TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
        constructor(response) {
          super("totp", response);
        }
        static _fromServerResponse(_auth, enrollment) {
          return new _TotpMultiFactorInfoImpl(enrollment);
        }
      };
      GenericAdditionalUserInfo = class {
        constructor(isNewUser, providerId, profile = {}) {
          this.isNewUser = isNewUser;
          this.providerId = providerId;
          this.profile = profile;
        }
      };
      FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, providerId, profile, username) {
          super(isNewUser, providerId, profile);
          this.username = username;
        }
      };
      FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, profile) {
          super(isNewUser, "facebook.com", profile);
        }
      };
      GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
        constructor(isNewUser, profile) {
          super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
        }
      };
      GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, profile) {
          super(isNewUser, "google.com", profile);
        }
      };
      TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
        constructor(isNewUser, profile, screenName) {
          super(isNewUser, "twitter.com", profile, screenName);
        }
      };
      MultiFactorSessionImpl = class _MultiFactorSessionImpl {
        constructor(type, credential, user) {
          this.type = type;
          this.credential = credential;
          this.user = user;
        }
        static _fromIdtoken(idToken, user) {
          return new _MultiFactorSessionImpl("enroll", idToken, user);
        }
        static _fromMfaPendingCredential(mfaPendingCredential) {
          return new _MultiFactorSessionImpl("signin", mfaPendingCredential);
        }
        toJSON() {
          const key = this.type === "enroll" ? "idToken" : "pendingCredential";
          return {
            multiFactorSession: {
              [key]: this.credential
            }
          };
        }
        static fromJSON(obj) {
          var _a, _b;
          if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
            if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
              return _MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
            } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
              return _MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
            }
          }
          return null;
        }
      };
      MultiFactorResolverImpl = class _MultiFactorResolverImpl {
        constructor(session, hints, signInResolver) {
          this.session = session;
          this.hints = hints;
          this.signInResolver = signInResolver;
        }
        /** @internal */
        static _fromError(authExtern, error) {
          const auth = _castAuth(authExtern);
          const serverResponse = error.customData._serverResponse;
          const hints = (serverResponse.mfaInfo || []).map((enrollment) => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
          _assert(
            serverResponse.mfaPendingCredential,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
          return new _MultiFactorResolverImpl(session, hints, async (assertion) => {
            const mfaResponse = await assertion._process(auth, session);
            delete serverResponse.mfaInfo;
            delete serverResponse.mfaPendingCredential;
            const idTokenResponse = Object.assign(Object.assign({}, serverResponse), { idToken: mfaResponse.idToken, refreshToken: mfaResponse.refreshToken });
            switch (error.operationType) {
              case "signIn":
                const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
                await auth._updateCurrentUser(userCredential.user);
                return userCredential;
              case "reauthenticate":
                _assert(
                  error.user,
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                );
                return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
              default:
                _fail(
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                );
            }
          });
        }
        async resolveSignIn(assertionExtern) {
          const assertion = assertionExtern;
          return this.signInResolver(assertion);
        }
      };
      MultiFactorUserImpl = class _MultiFactorUserImpl {
        constructor(user) {
          this.user = user;
          this.enrolledFactors = [];
          user._onReload((userInfo) => {
            if (userInfo.mfaInfo) {
              this.enrolledFactors = userInfo.mfaInfo.map((enrollment) => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
            }
          });
        }
        static _fromUser(user) {
          return new _MultiFactorUserImpl(user);
        }
        async getSession() {
          return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
        }
        async enroll(assertionExtern, displayName) {
          const assertion = assertionExtern;
          const session = await this.getSession();
          const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
          await this.user._updateTokensIfNecessary(finalizeMfaResponse);
          return this.user.reload();
        }
        async unenroll(infoOrUid) {
          const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
          const idToken = await this.user.getIdToken();
          try {
            const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
              idToken,
              mfaEnrollmentId
            }));
            this.enrolledFactors = this.enrolledFactors.filter(({ uid }) => uid !== mfaEnrollmentId);
            await this.user._updateTokensIfNecessary(idTokenResponse);
            await this.user.reload();
          } catch (e) {
            throw e;
          }
        }
      };
      multiFactorUserCache = /* @__PURE__ */ new WeakMap();
      STORAGE_AVAILABLE_KEY = "__sak";
      BrowserPersistenceClass = class {
        constructor(storageRetriever, type) {
          this.storageRetriever = storageRetriever;
          this.type = type;
        }
        _isAvailable() {
          try {
            if (!this.storage) {
              return Promise.resolve(false);
            }
            this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
            this.storage.removeItem(STORAGE_AVAILABLE_KEY);
            return Promise.resolve(true);
          } catch (_a) {
            return Promise.resolve(false);
          }
        }
        _set(key, value) {
          this.storage.setItem(key, JSON.stringify(value));
          return Promise.resolve();
        }
        _get(key) {
          const json = this.storage.getItem(key);
          return Promise.resolve(json ? JSON.parse(json) : null);
        }
        _remove(key) {
          this.storage.removeItem(key);
          return Promise.resolve();
        }
        get storage() {
          return this.storageRetriever();
        }
      };
      _POLLING_INTERVAL_MS$1 = 1e3;
      IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
      BrowserLocalPersistence = class extends BrowserPersistenceClass {
        constructor() {
          super(
            () => window.localStorage,
            "LOCAL"
            /* PersistenceType.LOCAL */
          );
          this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
          this.listeners = {};
          this.localCache = {};
          this.pollTimer = null;
          this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
          this.fallbackToPolling = _isMobileBrowser();
          this._shouldAllowMigration = true;
        }
        forAllChangedKeys(cb) {
          for (const key of Object.keys(this.listeners)) {
            const newValue = this.storage.getItem(key);
            const oldValue = this.localCache[key];
            if (newValue !== oldValue) {
              cb(key, oldValue, newValue);
            }
          }
        }
        onStorageEvent(event, poll = false) {
          if (!event.key) {
            this.forAllChangedKeys((key2, _oldValue, newValue) => {
              this.notifyListeners(key2, newValue);
            });
            return;
          }
          const key = event.key;
          if (poll) {
            this.detachListener();
          } else {
            this.stopPolling();
          }
          if (this.safariLocalStorageNotSynced) {
            const storedValue2 = this.storage.getItem(key);
            if (event.newValue !== storedValue2) {
              if (event.newValue !== null) {
                this.storage.setItem(key, event.newValue);
              } else {
                this.storage.removeItem(key);
              }
            } else if (this.localCache[key] === event.newValue && !poll) {
              return;
            }
          }
          const triggerListeners = () => {
            const storedValue2 = this.storage.getItem(key);
            if (!poll && this.localCache[key] === storedValue2) {
              return;
            }
            this.notifyListeners(key, storedValue2);
          };
          const storedValue = this.storage.getItem(key);
          if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
            setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
          } else {
            triggerListeners();
          }
        }
        notifyListeners(key, value) {
          this.localCache[key] = value;
          const listeners = this.listeners[key];
          if (listeners) {
            for (const listener of Array.from(listeners)) {
              listener(value ? JSON.parse(value) : value);
            }
          }
        }
        startPolling() {
          this.stopPolling();
          this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((key, oldValue, newValue) => {
              this.onStorageEvent(
                new StorageEvent("storage", {
                  key,
                  oldValue,
                  newValue
                }),
                /* poll */
                true
              );
            });
          }, _POLLING_INTERVAL_MS$1);
        }
        stopPolling() {
          if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
          }
        }
        attachListener() {
          window.addEventListener("storage", this.boundEventHandler);
        }
        detachListener() {
          window.removeEventListener("storage", this.boundEventHandler);
        }
        _addListener(key, listener) {
          if (Object.keys(this.listeners).length === 0) {
            if (this.fallbackToPolling) {
              this.startPolling();
            } else {
              this.attachListener();
            }
          }
          if (!this.listeners[key]) {
            this.listeners[key] = /* @__PURE__ */ new Set();
            this.localCache[key] = this.storage.getItem(key);
          }
          this.listeners[key].add(listener);
        }
        _removeListener(key, listener) {
          if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
              delete this.listeners[key];
            }
          }
          if (Object.keys(this.listeners).length === 0) {
            this.detachListener();
            this.stopPolling();
          }
        }
        // Update local cache on base operations:
        async _set(key, value) {
          await super._set(key, value);
          this.localCache[key] = JSON.stringify(value);
        }
        async _get(key) {
          const value = await super._get(key);
          this.localCache[key] = JSON.stringify(value);
          return value;
        }
        async _remove(key) {
          await super._remove(key);
          delete this.localCache[key];
        }
      };
      BrowserLocalPersistence.type = "LOCAL";
      browserLocalPersistence = BrowserLocalPersistence;
      BrowserSessionPersistence = class extends BrowserPersistenceClass {
        constructor() {
          super(
            () => window.sessionStorage,
            "SESSION"
            /* PersistenceType.SESSION */
          );
        }
        _addListener(_key, _listener) {
          return;
        }
        _removeListener(_key, _listener) {
          return;
        }
      };
      BrowserSessionPersistence.type = "SESSION";
      browserSessionPersistence = BrowserSessionPersistence;
      Receiver = class _Receiver {
        constructor(eventTarget) {
          this.eventTarget = eventTarget;
          this.handlersMap = {};
          this.boundEventHandler = this.handleEvent.bind(this);
        }
        /**
         * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
         *
         * @param eventTarget - An event target (such as window or self) through which the underlying
         * messages will be received.
         */
        static _getInstance(eventTarget) {
          const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
          if (existingInstance) {
            return existingInstance;
          }
          const newInstance = new _Receiver(eventTarget);
          this.receivers.push(newInstance);
          return newInstance;
        }
        isListeningto(eventTarget) {
          return this.eventTarget === eventTarget;
        }
        /**
         * Fans out a MessageEvent to the appropriate listeners.
         *
         * @remarks
         * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
         * finished processing.
         *
         * @param event - The MessageEvent.
         *
         */
        async handleEvent(event) {
          const messageEvent = event;
          const { eventId, eventType, data } = messageEvent.data;
          const handlers = this.handlersMap[eventType];
          if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
            return;
          }
          messageEvent.ports[0].postMessage({
            status: "ack",
            eventId,
            eventType
          });
          const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
          const response = await _allSettled(promises);
          messageEvent.ports[0].postMessage({
            status: "done",
            eventId,
            eventType,
            response
          });
        }
        /**
         * Subscribe an event handler for a particular event.
         *
         * @param eventType - Event name to subscribe to.
         * @param eventHandler - The event handler which should receive the events.
         *
         */
        _subscribe(eventType, eventHandler) {
          if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.addEventListener("message", this.boundEventHandler);
          }
          if (!this.handlersMap[eventType]) {
            this.handlersMap[eventType] = /* @__PURE__ */ new Set();
          }
          this.handlersMap[eventType].add(eventHandler);
        }
        /**
         * Unsubscribe an event handler from a particular event.
         *
         * @param eventType - Event name to unsubscribe from.
         * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
         *
         */
        _unsubscribe(eventType, eventHandler) {
          if (this.handlersMap[eventType] && eventHandler) {
            this.handlersMap[eventType].delete(eventHandler);
          }
          if (!eventHandler || this.handlersMap[eventType].size === 0) {
            delete this.handlersMap[eventType];
          }
          if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.removeEventListener("message", this.boundEventHandler);
          }
        }
      };
      Receiver.receivers = [];
      Sender = class {
        constructor(target) {
          this.target = target;
          this.handlers = /* @__PURE__ */ new Set();
        }
        /**
         * Unsubscribe the handler and remove it from our tracking Set.
         *
         * @param handler - The handler to unsubscribe.
         */
        removeMessageHandler(handler) {
          if (handler.messageChannel) {
            handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
            handler.messageChannel.port1.close();
          }
          this.handlers.delete(handler);
        }
        /**
         * Send a message to the Receiver located at {@link target}.
         *
         * @remarks
         * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
         * receiver has had a chance to fully process the event.
         *
         * @param eventType - Type of event to send.
         * @param data - The payload of the event.
         * @param timeout - Timeout for waiting on an ACK from the receiver.
         *
         * @returns An array of settled promises from all the handlers that were listening on the receiver.
         */
        async _send(eventType, data, timeout = 50) {
          const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
          if (!messageChannel) {
            throw new Error(
              "connection_unavailable"
              /* _MessageError.CONNECTION_UNAVAILABLE */
            );
          }
          let completionTimer;
          let handler;
          return new Promise((resolve, reject) => {
            const eventId = _generateEventId("", 20);
            messageChannel.port1.start();
            const ackTimer = setTimeout(() => {
              reject(new Error(
                "unsupported_event"
                /* _MessageError.UNSUPPORTED_EVENT */
              ));
            }, timeout);
            handler = {
              messageChannel,
              onMessage(event) {
                const messageEvent = event;
                if (messageEvent.data.eventId !== eventId) {
                  return;
                }
                switch (messageEvent.data.status) {
                  case "ack":
                    clearTimeout(ackTimer);
                    completionTimer = setTimeout(
                      () => {
                        reject(new Error(
                          "timeout"
                          /* _MessageError.TIMEOUT */
                        ));
                      },
                      3e3
                      /* _TimeoutDuration.COMPLETION */
                    );
                    break;
                  case "done":
                    clearTimeout(completionTimer);
                    resolve(messageEvent.data.response);
                    break;
                  default:
                    clearTimeout(ackTimer);
                    clearTimeout(completionTimer);
                    reject(new Error(
                      "invalid_response"
                      /* _MessageError.INVALID_RESPONSE */
                    ));
                    break;
                }
              }
            };
            this.handlers.add(handler);
            messageChannel.port1.addEventListener("message", handler.onMessage);
            this.target.postMessage({
              eventType,
              eventId,
              data
            }, [messageChannel.port2]);
          }).finally(() => {
            if (handler) {
              this.removeMessageHandler(handler);
            }
          });
        }
      };
      DB_NAME2 = "firebaseLocalStorageDb";
      DB_VERSION2 = 1;
      DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
      DB_DATA_KEYPATH = "fbase_key";
      DBPromise = class {
        constructor(request) {
          this.request = request;
        }
        toPromise() {
          return new Promise((resolve, reject) => {
            this.request.addEventListener("success", () => {
              resolve(this.request.result);
            });
            this.request.addEventListener("error", () => {
              reject(this.request.error);
            });
          });
        }
      };
      _POLLING_INTERVAL_MS = 800;
      _TRANSACTION_RETRY_COUNT = 3;
      IndexedDBLocalPersistence = class {
        constructor() {
          this.type = "LOCAL";
          this._shouldAllowMigration = true;
          this.listeners = {};
          this.localCache = {};
          this.pollTimer = null;
          this.pendingWrites = 0;
          this.receiver = null;
          this.sender = null;
          this.serviceWorkerReceiverAvailable = false;
          this.activeServiceWorker = null;
          this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
          }, () => {
          });
        }
        async _openDb() {
          if (this.db) {
            return this.db;
          }
          this.db = await _openDatabase();
          return this.db;
        }
        async _withRetries(op) {
          let numAttempts = 0;
          while (true) {
            try {
              const db = await this._openDb();
              return await op(db);
            } catch (e) {
              if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
                throw e;
              }
              if (this.db) {
                this.db.close();
                this.db = void 0;
              }
            }
          }
        }
        /**
         * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
         * postMessage interface to send these events to the worker ourselves.
         */
        async initializeServiceWorkerMessaging() {
          return _isWorker() ? this.initializeReceiver() : this.initializeSender();
        }
        /**
         * As the worker we should listen to events from the main window.
         */
        async initializeReceiver() {
          this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
          this.receiver._subscribe("keyChanged", async (_origin, data) => {
            const keys = await this._poll();
            return {
              keyProcessed: keys.includes(data.key)
            };
          });
          this.receiver._subscribe("ping", async (_origin, _data) => {
            return [
              "keyChanged"
              /* _EventType.KEY_CHANGED */
            ];
          });
        }
        /**
         * As the main window, we should let the worker know when keys change (set and remove).
         *
         * @remarks
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
         * may not resolve.
         */
        async initializeSender() {
          var _a, _b;
          this.activeServiceWorker = await _getActiveServiceWorker();
          if (!this.activeServiceWorker) {
            return;
          }
          this.sender = new Sender(this.activeServiceWorker);
          const results = await this.sender._send(
            "ping",
            {},
            800
            /* _TimeoutDuration.LONG_ACK */
          );
          if (!results) {
            return;
          }
          if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes(
            "keyChanged"
            /* _EventType.KEY_CHANGED */
          ))) {
            this.serviceWorkerReceiverAvailable = true;
          }
        }
        /**
         * Let the worker know about a changed key, the exact key doesn't technically matter since the
         * worker will just trigger a full sync anyway.
         *
         * @remarks
         * For now, we only support one service worker per page.
         *
         * @param key - Storage key which changed.
         */
        async notifyServiceWorker(key) {
          if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
            return;
          }
          try {
            await this.sender._send(
              "keyChanged",
              { key },
              // Use long timeout if receiver has previously responded to a ping from us.
              this.serviceWorkerReceiverAvailable ? 800 : 50
              /* _TimeoutDuration.ACK */
            );
          } catch (_a) {
          }
        }
        async _isAvailable() {
          try {
            if (!indexedDB) {
              return false;
            }
            const db = await _openDatabase();
            await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
            await _deleteObject(db, STORAGE_AVAILABLE_KEY);
            return true;
          } catch (_a) {
          }
          return false;
        }
        async _withPendingWrite(write) {
          this.pendingWrites++;
          try {
            await write();
          } finally {
            this.pendingWrites--;
          }
        }
        async _set(key, value) {
          return this._withPendingWrite(async () => {
            await this._withRetries((db) => _putObject(db, key, value));
            this.localCache[key] = value;
            return this.notifyServiceWorker(key);
          });
        }
        async _get(key) {
          const obj = await this._withRetries((db) => getObject(db, key));
          this.localCache[key] = obj;
          return obj;
        }
        async _remove(key) {
          return this._withPendingWrite(async () => {
            await this._withRetries((db) => _deleteObject(db, key));
            delete this.localCache[key];
            return this.notifyServiceWorker(key);
          });
        }
        async _poll() {
          const result = await this._withRetries((db) => {
            const getAllRequest = getObjectStore(db, false).getAll();
            return new DBPromise(getAllRequest).toPromise();
          });
          if (!result) {
            return [];
          }
          if (this.pendingWrites !== 0) {
            return [];
          }
          const keys = [];
          const keysInResult = /* @__PURE__ */ new Set();
          if (result.length !== 0) {
            for (const { fbase_key: key, value } of result) {
              keysInResult.add(key);
              if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                this.notifyListeners(key, value);
                keys.push(key);
              }
            }
          }
          for (const localKey of Object.keys(this.localCache)) {
            if (this.localCache[localKey] && !keysInResult.has(localKey)) {
              this.notifyListeners(localKey, null);
              keys.push(localKey);
            }
          }
          return keys;
        }
        notifyListeners(key, newValue) {
          this.localCache[key] = newValue;
          const listeners = this.listeners[key];
          if (listeners) {
            for (const listener of Array.from(listeners)) {
              listener(newValue);
            }
          }
        }
        startPolling() {
          this.stopPolling();
          this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
        }
        stopPolling() {
          if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
          }
        }
        _addListener(key, listener) {
          if (Object.keys(this.listeners).length === 0) {
            this.startPolling();
          }
          if (!this.listeners[key]) {
            this.listeners[key] = /* @__PURE__ */ new Set();
            void this._get(key);
          }
          this.listeners[key].add(listener);
        }
        _removeListener(key, listener) {
          if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
              delete this.listeners[key];
            }
          }
          if (Object.keys(this.listeners).length === 0) {
            this.stopPolling();
          }
        }
      };
      IndexedDBLocalPersistence.type = "LOCAL";
      indexedDBLocalPersistence = IndexedDBLocalPersistence;
      _SOLVE_TIME_MS = 500;
      _EXPIRATION_TIME_MS = 6e4;
      _WIDGET_ID_START = 1e12;
      MockReCaptcha = class {
        constructor(auth) {
          this.auth = auth;
          this.counter = _WIDGET_ID_START;
          this._widgets = /* @__PURE__ */ new Map();
        }
        render(container, parameters) {
          const id = this.counter;
          this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
          this.counter++;
          return id;
        }
        reset(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
          this._widgets.delete(id);
        }
        getResponse(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
        }
        async execute(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
          return "";
        }
      };
      MockWidget = class {
        constructor(containerOrId, appName, params) {
          this.params = params;
          this.timerId = null;
          this.deleted = false;
          this.responseToken = null;
          this.clickHandler = () => {
            this.execute();
          };
          const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
          _assert(container, "argument-error", { appName });
          this.container = container;
          this.isVisible = this.params.size !== "invisible";
          if (this.isVisible) {
            this.execute();
          } else {
            this.container.addEventListener("click", this.clickHandler);
          }
        }
        getResponse() {
          this.checkIfDeleted();
          return this.responseToken;
        }
        delete() {
          this.checkIfDeleted();
          this.deleted = true;
          if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
          }
          this.container.removeEventListener("click", this.clickHandler);
        }
        execute() {
          this.checkIfDeleted();
          if (this.timerId) {
            return;
          }
          this.timerId = window.setTimeout(() => {
            this.responseToken = generateRandomAlphaNumericString(50);
            const { callback, "expired-callback": expiredCallback } = this.params;
            if (callback) {
              try {
                callback(this.responseToken);
              } catch (e) {
              }
            }
            this.timerId = window.setTimeout(() => {
              this.timerId = null;
              this.responseToken = null;
              if (expiredCallback) {
                try {
                  expiredCallback();
                } catch (e) {
                }
              }
              if (this.isVisible) {
                this.execute();
              }
            }, _EXPIRATION_TIME_MS);
          }, _SOLVE_TIME_MS);
        }
        checkIfDeleted() {
          if (this.deleted) {
            throw new Error("reCAPTCHA mock was already deleted!");
          }
        }
      };
      _JSLOAD_CALLBACK = _generateCallbackName("rcb");
      NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
      ReCaptchaLoaderImpl = class {
        constructor() {
          var _a;
          this.hostLanguage = "";
          this.counter = 0;
          this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
        }
        load(auth, hl = "") {
          _assert(
            isHostLanguageValid(hl),
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
            return Promise.resolve(_window().grecaptcha);
          }
          return new Promise((resolve, reject) => {
            const networkTimeout = _window().setTimeout(() => {
              reject(_createError(
                auth,
                "network-request-failed"
                /* AuthErrorCode.NETWORK_REQUEST_FAILED */
              ));
            }, NETWORK_TIMEOUT_DELAY.get());
            _window()[_JSLOAD_CALLBACK] = () => {
              _window().clearTimeout(networkTimeout);
              delete _window()[_JSLOAD_CALLBACK];
              const recaptcha = _window().grecaptcha;
              if (!recaptcha || !isV2(recaptcha)) {
                reject(_createError(
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                ));
                return;
              }
              const render = recaptcha.render;
              recaptcha.render = (container, params) => {
                const widgetId = render(container, params);
                this.counter++;
                return widgetId;
              };
              this.hostLanguage = hl;
              resolve(recaptcha);
            };
            const url = `${_recaptchaV2ScriptUrl()}?${querystring({
              onload: _JSLOAD_CALLBACK,
              render: "explicit",
              hl
            })}`;
            _loadJS(url).catch(() => {
              clearTimeout(networkTimeout);
              reject(_createError(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              ));
            });
          });
        }
        clearedOneInstance() {
          this.counter--;
        }
        shouldResolveImmediately(hl) {
          var _a;
          return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
        }
      };
      MockReCaptchaLoaderImpl = class {
        async load(auth) {
          return new MockReCaptcha(auth);
        }
        clearedOneInstance() {
        }
      };
      RECAPTCHA_VERIFIER_TYPE = "recaptcha";
      DEFAULT_PARAMS = {
        theme: "light",
        type: "image"
      };
      RecaptchaVerifier = class {
        /**
         * @param authExtern - The corresponding Firebase {@link Auth} instance.
         *
         * @param containerOrId - The reCAPTCHA container parameter.
         *
         * @remarks
         * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
         * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
         * an element ID. The corresponding element must also must be in the DOM at the time of
         * initialization.
         *
         * @param parameters - The optional reCAPTCHA parameters.
         *
         * @remarks
         * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
         * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
         * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
         * 'invisible'.
         */
        constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)) {
          this.parameters = parameters;
          this.type = RECAPTCHA_VERIFIER_TYPE;
          this.destroyed = false;
          this.widgetId = null;
          this.tokenChangeListeners = /* @__PURE__ */ new Set();
          this.renderPromise = null;
          this.recaptcha = null;
          this.auth = _castAuth(authExtern);
          this.isInvisible = this.parameters.size === "invisible";
          _assert(
            typeof document !== "undefined",
            this.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          );
          const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
          _assert(
            container,
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          this.container = container;
          this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
          this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
          this.validateStartingState();
        }
        /**
         * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
         *
         * @returns A Promise for the reCAPTCHA token.
         */
        async verify() {
          this.assertNotDestroyed();
          const id = await this.render();
          const recaptcha = this.getAssertedRecaptcha();
          const response = recaptcha.getResponse(id);
          if (response) {
            return response;
          }
          return new Promise((resolve) => {
            const tokenChange = (token) => {
              if (!token) {
                return;
              }
              this.tokenChangeListeners.delete(tokenChange);
              resolve(token);
            };
            this.tokenChangeListeners.add(tokenChange);
            if (this.isInvisible) {
              recaptcha.execute(id);
            }
          });
        }
        /**
         * Renders the reCAPTCHA widget on the page.
         *
         * @returns A Promise that resolves with the reCAPTCHA widget ID.
         */
        render() {
          try {
            this.assertNotDestroyed();
          } catch (e) {
            return Promise.reject(e);
          }
          if (this.renderPromise) {
            return this.renderPromise;
          }
          this.renderPromise = this.makeRenderPromise().catch((e) => {
            this.renderPromise = null;
            throw e;
          });
          return this.renderPromise;
        }
        /** @internal */
        _reset() {
          this.assertNotDestroyed();
          if (this.widgetId !== null) {
            this.getAssertedRecaptcha().reset(this.widgetId);
          }
        }
        /**
         * Clears the reCAPTCHA widget from the page and destroys the instance.
         */
        clear() {
          this.assertNotDestroyed();
          this.destroyed = true;
          this._recaptchaLoader.clearedOneInstance();
          if (!this.isInvisible) {
            this.container.childNodes.forEach((node) => {
              this.container.removeChild(node);
            });
          }
        }
        validateStartingState() {
          _assert(
            !this.parameters.sitekey,
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            this.isInvisible || !this.container.hasChildNodes(),
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            typeof document !== "undefined",
            this.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          );
        }
        makeTokenCallback(existing) {
          return (token) => {
            this.tokenChangeListeners.forEach((listener) => listener(token));
            if (typeof existing === "function") {
              existing(token);
            } else if (typeof existing === "string") {
              const globalFunc = _window()[existing];
              if (typeof globalFunc === "function") {
                globalFunc(token);
              }
            }
          };
        }
        assertNotDestroyed() {
          _assert(
            !this.destroyed,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
        }
        async makeRenderPromise() {
          await this.init();
          if (!this.widgetId) {
            let container = this.container;
            if (!this.isInvisible) {
              const guaranteedEmpty = document.createElement("div");
              container.appendChild(guaranteedEmpty);
              container = guaranteedEmpty;
            }
            this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
          }
          return this.widgetId;
        }
        async init() {
          _assert(
            _isHttpOrHttps() && !_isWorker(),
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          await domReady();
          this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
          const siteKey = await getRecaptchaParams(this.auth);
          _assert(
            siteKey,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.parameters.sitekey = siteKey;
        }
        getAssertedRecaptcha() {
          _assert(
            this.recaptcha,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.recaptcha;
        }
      };
      ConfirmationResultImpl = class {
        constructor(verificationId, onConfirmation) {
          this.verificationId = verificationId;
          this.onConfirmation = onConfirmation;
        }
        confirm(verificationCode) {
          const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
          return this.onConfirmation(authCredential);
        }
      };
      PhoneAuthProvider = class _PhoneAuthProvider {
        /**
         * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
         *
         */
        constructor(auth) {
          this.providerId = _PhoneAuthProvider.PROVIDER_ID;
          this.auth = _castAuth(auth);
        }
        /**
         *
         * Starts a phone number authentication flow by sending a verification code to the given phone
         * number.
         *
         * @example
         * ```javascript
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * An alternative flow is provided using the `signInWithPhoneNumber` method.
         * ```javascript
         * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const userCredential = confirmationResult.confirm(verificationCode);
         * ```
         *
         * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
         * E.164 format (e.g. +16505550101).
         * @param applicationVerifier - For abuse prevention, this method also requires a
         * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
         * {@link RecaptchaVerifier}.
         *
         * @returns A Promise for a verification ID that can be passed to
         * {@link PhoneAuthProvider.credential} to identify this flow..
         */
        verifyPhoneNumber(phoneOptions, applicationVerifier) {
          return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
        }
        /**
         * Creates a phone auth credential, given the verification ID from
         * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
         * mobile device.
         *
         * @example
         * ```javascript
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
         * const userCredential = signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * An alternative flow is provided using the `signInWithPhoneNumber` method.
         * ```javascript
         * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const userCredential = await confirmationResult.confirm(verificationCode);
         * ```
         *
         * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
         * @param verificationCode - The verification code sent to the user's mobile device.
         *
         * @returns The auth provider credential.
         */
        static credential(verificationId, verificationCode) {
          return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
        }
        /**
         * Generates an {@link AuthCredential} from a {@link UserCredential}.
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          const credential = userCredential;
          return _PhoneAuthProvider.credentialFromTaggedObject(credential);
        }
        /**
         * Returns an {@link AuthCredential} when passed an error.
         *
         * @remarks
         *
         * This method works for errors like
         * `auth/account-exists-with-different-credentials`. This is useful for
         * recovering when attempting to set a user's phone number but the number
         * in question is already tied to another account. For example, the following
         * code tries to update the current user's phone number, and if that
         * fails, links the user with the account associated with that number:
         *
         * ```js
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = await provider.verifyPhoneNumber(number, verifier);
         * try {
         *   const code = ''; // Prompt the user for the verification code
         *   await updatePhoneNumber(
         *       auth.currentUser,
         *       PhoneAuthProvider.credential(verificationId, code));
         * } catch (e) {
         *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
         *     const cred = PhoneAuthProvider.credentialFromError(e);
         *     await linkWithCredential(auth.currentUser, cred);
         *   }
         * }
         *
         * // At this point, auth.currentUser.phoneNumber === number.
         * ```
         *
         * @param error - The error to generate a credential from.
         */
        static credentialFromError(error) {
          return _PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { phoneNumber, temporaryProof } = tokenResponse;
          if (phoneNumber && temporaryProof) {
            return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
          }
          return null;
        }
      };
      PhoneAuthProvider.PROVIDER_ID = "phone";
      PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
      IdpCredential = class extends AuthCredential {
        constructor(params) {
          super(
            "custom",
            "custom"
            /* ProviderId.CUSTOM */
          );
          this.params = params;
        }
        _getIdTokenResponse(auth) {
          return signInWithIdp(auth, this._buildIdpRequest());
        }
        _linkToIdToken(auth, idToken) {
          return signInWithIdp(auth, this._buildIdpRequest(idToken));
        }
        _getReauthenticationResolver(auth) {
          return signInWithIdp(auth, this._buildIdpRequest());
        }
        _buildIdpRequest(idToken) {
          const request = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: true,
            returnIdpCredential: true
          };
          if (idToken) {
            request.idToken = idToken;
          }
          return request;
        }
      };
      AbstractPopupRedirectOperation = class {
        constructor(auth, filter, resolver, user, bypassAuthState = false) {
          this.auth = auth;
          this.resolver = resolver;
          this.user = user;
          this.bypassAuthState = bypassAuthState;
          this.pendingPromise = null;
          this.eventManager = null;
          this.filter = Array.isArray(filter) ? filter : [filter];
        }
        execute() {
          return new Promise(async (resolve, reject) => {
            this.pendingPromise = { resolve, reject };
            try {
              this.eventManager = await this.resolver._initialize(this.auth);
              await this.onExecution();
              this.eventManager.registerConsumer(this);
            } catch (e) {
              this.reject(e);
            }
          });
        }
        async onAuthEvent(event) {
          const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
          if (error) {
            this.reject(error);
            return;
          }
          const params = {
            auth: this.auth,
            requestUri: urlResponse,
            sessionId,
            tenantId: tenantId || void 0,
            postBody: postBody || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
          };
          try {
            this.resolve(await this.getIdpTask(type)(params));
          } catch (e) {
            this.reject(e);
          }
        }
        onError(error) {
          this.reject(error);
        }
        getIdpTask(type) {
          switch (type) {
            case "signInViaPopup":
            case "signInViaRedirect":
              return _signIn;
            case "linkViaPopup":
            case "linkViaRedirect":
              return _link;
            case "reauthViaPopup":
            case "reauthViaRedirect":
              return _reauth;
            default:
              _fail(
                this.auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        resolve(cred) {
          debugAssert(this.pendingPromise, "Pending promise was never set");
          this.pendingPromise.resolve(cred);
          this.unregisterAndCleanUp();
        }
        reject(error) {
          debugAssert(this.pendingPromise, "Pending promise was never set");
          this.pendingPromise.reject(error);
          this.unregisterAndCleanUp();
        }
        unregisterAndCleanUp() {
          if (this.eventManager) {
            this.eventManager.unregisterConsumer(this);
          }
          this.pendingPromise = null;
          this.cleanUp();
        }
      };
      _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
      PopupOperation = class _PopupOperation extends AbstractPopupRedirectOperation {
        constructor(auth, filter, provider, resolver, user) {
          super(auth, filter, resolver, user);
          this.provider = provider;
          this.authWindow = null;
          this.pollId = null;
          if (_PopupOperation.currentPopupAction) {
            _PopupOperation.currentPopupAction.cancel();
          }
          _PopupOperation.currentPopupAction = this;
        }
        async executeNotNull() {
          const result = await this.execute();
          _assert(
            result,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return result;
        }
        async onExecution() {
          debugAssert(this.filter.length === 1, "Popup operations only handle one event");
          const eventId = _generateEventId();
          this.authWindow = await this.resolver._openPopup(
            this.auth,
            this.provider,
            this.filter[0],
            // There's always one, see constructor
            eventId
          );
          this.authWindow.associatedEvent = eventId;
          this.resolver._originValidation(this.auth).catch((e) => {
            this.reject(e);
          });
          this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
            if (!isSupported) {
              this.reject(_createError(
                this.auth,
                "web-storage-unsupported"
                /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
              ));
            }
          });
          this.pollUserCancellation();
        }
        get eventId() {
          var _a;
          return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
        }
        cancel() {
          this.reject(_createError(
            this.auth,
            "cancelled-popup-request"
            /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
          ));
        }
        cleanUp() {
          if (this.authWindow) {
            this.authWindow.close();
          }
          if (this.pollId) {
            window.clearTimeout(this.pollId);
          }
          this.authWindow = null;
          this.pollId = null;
          _PopupOperation.currentPopupAction = null;
        }
        pollUserCancellation() {
          const poll = () => {
            var _a, _b;
            if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
              this.pollId = window.setTimeout(
                () => {
                  this.pollId = null;
                  this.reject(_createError(
                    this.auth,
                    "popup-closed-by-user"
                    /* AuthErrorCode.POPUP_CLOSED_BY_USER */
                  ));
                },
                8e3
                /* _Timeout.AUTH_EVENT */
              );
              return;
            }
            this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
          };
          poll();
        }
      };
      PopupOperation.currentPopupAction = null;
      PENDING_REDIRECT_KEY = "pendingRedirect";
      redirectOutcomeMap = /* @__PURE__ */ new Map();
      RedirectAction = class extends AbstractPopupRedirectOperation {
        constructor(auth, resolver, bypassAuthState = false) {
          super(auth, [
            "signInViaRedirect",
            "linkViaRedirect",
            "reauthViaRedirect",
            "unknown"
            /* AuthEventType.UNKNOWN */
          ], resolver, void 0, bypassAuthState);
          this.eventId = null;
        }
        /**
         * Override the execute function; if we already have a redirect result, then
         * just return it.
         */
        async execute() {
          let readyOutcome = redirectOutcomeMap.get(this.auth._key());
          if (!readyOutcome) {
            try {
              const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
              const result = hasPendingRedirect ? await super.execute() : null;
              readyOutcome = () => Promise.resolve(result);
            } catch (e) {
              readyOutcome = () => Promise.reject(e);
            }
            redirectOutcomeMap.set(this.auth._key(), readyOutcome);
          }
          if (!this.bypassAuthState) {
            redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
          }
          return readyOutcome();
        }
        async onAuthEvent(event) {
          if (event.type === "signInViaRedirect") {
            return super.onAuthEvent(event);
          } else if (event.type === "unknown") {
            this.resolve(null);
            return;
          }
          if (event.eventId) {
            const user = await this.auth._redirectUserForId(event.eventId);
            if (user) {
              this.user = user;
              return super.onAuthEvent(event);
            } else {
              this.resolve(null);
            }
          }
        }
        async onExecution() {
        }
        cleanUp() {
        }
      };
      EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
      AuthEventManager = class {
        constructor(auth) {
          this.auth = auth;
          this.cachedEventUids = /* @__PURE__ */ new Set();
          this.consumers = /* @__PURE__ */ new Set();
          this.queuedRedirectEvent = null;
          this.hasHandledPotentialRedirect = false;
          this.lastProcessedEventTime = Date.now();
        }
        registerConsumer(authEventConsumer) {
          this.consumers.add(authEventConsumer);
          if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
            this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
            this.saveEventToCache(this.queuedRedirectEvent);
            this.queuedRedirectEvent = null;
          }
        }
        unregisterConsumer(authEventConsumer) {
          this.consumers.delete(authEventConsumer);
        }
        onEvent(event) {
          if (this.hasEventBeenHandled(event)) {
            return false;
          }
          let handled = false;
          this.consumers.forEach((consumer) => {
            if (this.isEventForConsumer(event, consumer)) {
              handled = true;
              this.sendToConsumer(event, consumer);
              this.saveEventToCache(event);
            }
          });
          if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
            return handled;
          }
          this.hasHandledPotentialRedirect = true;
          if (!handled) {
            this.queuedRedirectEvent = event;
            handled = true;
          }
          return handled;
        }
        sendToConsumer(event, consumer) {
          var _a;
          if (event.error && !isNullRedirectEvent(event)) {
            const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
            consumer.onError(_createError(this.auth, code));
          } else {
            consumer.onAuthEvent(event);
          }
        }
        isEventForConsumer(event, consumer) {
          const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
          return consumer.filter.includes(event.type) && eventIdMatches;
        }
        hasEventBeenHandled(event) {
          if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
            this.cachedEventUids.clear();
          }
          return this.cachedEventUids.has(eventUid(event));
        }
        saveEventToCache(event) {
          this.cachedEventUids.add(eventUid(event));
          this.lastProcessedEventTime = Date.now();
        }
      };
      IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
      HTTP_REGEX = /^https?/;
      NETWORK_TIMEOUT = new Delay(3e4, 6e4);
      cachedGApiLoader = null;
      PING_TIMEOUT = new Delay(5e3, 15e3);
      IFRAME_PATH = "__/auth/iframe";
      EMULATED_IFRAME_PATH = "emulator/auth/iframe";
      IFRAME_ATTRIBUTES = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
      };
      EID_FROM_APIHOST = /* @__PURE__ */ new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
        // test
      ]);
      BASE_POPUP_OPTIONS = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
      };
      DEFAULT_WIDTH = 500;
      DEFAULT_HEIGHT = 600;
      TARGET_BLANK = "_blank";
      FIREFOX_EMPTY_URL = "http://localhost";
      AuthPopup = class {
        constructor(window2) {
          this.window = window2;
          this.associatedEvent = null;
        }
        close() {
          if (this.window) {
            try {
              this.window.close();
            } catch (e) {
            }
          }
        }
      };
      WIDGET_PATH = "__/auth/handler";
      EMULATOR_WIDGET_PATH = "emulator/auth/handler";
      FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
      WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
      BrowserPopupRedirectResolver = class {
        constructor() {
          this.eventManagers = {};
          this.iframes = {};
          this.originValidationPromises = {};
          this._redirectPersistence = browserSessionPersistence;
          this._completeRedirectFn = _getRedirectResult;
          this._overrideRedirectResult = _overrideRedirectResult;
        }
        // Wrapping in async even though we don't await anywhere in order
        // to make sure errors are raised as promise rejections
        async _openPopup(auth, provider, authType, eventId) {
          var _a;
          debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
          const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
          return _open(auth, url, _generateEventId());
        }
        async _openRedirect(auth, provider, authType, eventId) {
          await this._originValidation(auth);
          const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
          _setWindowLocation(url);
          return new Promise(() => {
          });
        }
        _initialize(auth) {
          const key = auth._key();
          if (this.eventManagers[key]) {
            const { manager, promise: promise2 } = this.eventManagers[key];
            if (manager) {
              return Promise.resolve(manager);
            } else {
              debugAssert(promise2, "If manager is not set, promise should be");
              return promise2;
            }
          }
          const promise = this.initAndGetManager(auth);
          this.eventManagers[key] = { promise };
          promise.catch(() => {
            delete this.eventManagers[key];
          });
          return promise;
        }
        async initAndGetManager(auth) {
          const iframe = await _openIframe(auth);
          const manager = new AuthEventManager(auth);
          iframe.register("authEvent", (iframeEvent) => {
            _assert(
              iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent,
              auth,
              "invalid-auth-event"
              /* AuthErrorCode.INVALID_AUTH_EVENT */
            );
            const handled = manager.onEvent(iframeEvent.authEvent);
            return {
              status: handled ? "ACK" : "ERROR"
              /* GapiOutcome.ERROR */
            };
          }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
          this.eventManagers[auth._key()] = { manager };
          this.iframes[auth._key()] = iframe;
          return manager;
        }
        _isIframeWebStorageSupported(auth, cb) {
          const iframe = this.iframes[auth._key()];
          iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
            var _a;
            const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
            if (isSupported !== void 0) {
              cb(!!isSupported);
            }
            _fail(
              auth,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
          }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        }
        _originValidation(auth) {
          const key = auth._key();
          if (!this.originValidationPromises[key]) {
            this.originValidationPromises[key] = _validateOrigin(auth);
          }
          return this.originValidationPromises[key];
        }
        get _shouldInitProactively() {
          return _isMobileBrowser() || _isSafari() || _isIOS();
        }
      };
      browserPopupRedirectResolver = BrowserPopupRedirectResolver;
      MultiFactorAssertionImpl = class {
        constructor(factorId) {
          this.factorId = factorId;
        }
        _process(auth, session, displayName) {
          switch (session.type) {
            case "enroll":
              return this._finalizeEnroll(auth, session.credential, displayName);
            case "signin":
              return this._finalizeSignIn(auth, session.credential);
            default:
              return debugFail("unexpected MultiFactorSessionType");
          }
        }
      };
      PhoneMultiFactorAssertionImpl = class _PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
        constructor(credential) {
          super(
            "phone"
            /* FactorId.PHONE */
          );
          this.credential = credential;
        }
        /** @internal */
        static _fromCredential(credential) {
          return new _PhoneMultiFactorAssertionImpl(credential);
        }
        /** @internal */
        _finalizeEnroll(auth, idToken, displayName) {
          return finalizeEnrollPhoneMfa(auth, {
            idToken,
            displayName,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
          });
        }
        /** @internal */
        _finalizeSignIn(auth, mfaPendingCredential) {
          return finalizeSignInPhoneMfa(auth, {
            mfaPendingCredential,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
          });
        }
      };
      PhoneMultiFactorGenerator = class {
        constructor() {
        }
        /**
         * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
         *
         * @remarks
         * This method does not work in a Node.js environment.
         *
         * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
         * @returns A {@link PhoneMultiFactorAssertion} which can be used with
         * {@link MultiFactorResolver.resolveSignIn}
         */
        static assertion(credential) {
          return PhoneMultiFactorAssertionImpl._fromCredential(credential);
        }
      };
      PhoneMultiFactorGenerator.FACTOR_ID = "phone";
      TotpMultiFactorGenerator = class {
        /**
         * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
         * the TOTP (time-based one-time password) second factor.
         * This assertion is used to complete enrollment in TOTP second factor.
         *
         * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
         * @param oneTimePassword One-time password from TOTP App.
         * @returns A {@link TotpMultiFactorAssertion} which can be used with
         * {@link MultiFactorUser.enroll}.
         */
        static assertionForEnrollment(secret, oneTimePassword) {
          return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
        }
        /**
         * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
         * This assertion is used to complete signIn with TOTP as the second factor.
         *
         * @param enrollmentId identifies the enrolled TOTP second factor.
         * @param oneTimePassword One-time password from TOTP App.
         * @returns A {@link TotpMultiFactorAssertion} which can be used with
         * {@link MultiFactorResolver.resolveSignIn}.
         */
        static assertionForSignIn(enrollmentId, oneTimePassword) {
          return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
        }
        /**
         * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
         * Creates a TOTP secret as part of enrolling a TOTP second factor.
         * Used for generating a QR code URL or inputting into a TOTP app.
         * This method uses the auth instance corresponding to the user in the multiFactorSession.
         *
         * @param session The {@link MultiFactorSession} that the user is part of.
         * @returns A promise to {@link TotpSecret}.
         */
        static async generateSecret(session) {
          var _a;
          const mfaSession = session;
          _assert(
            typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const response = await startEnrollTotpMfa(mfaSession.user.auth, {
            idToken: mfaSession.credential,
            totpEnrollmentInfo: {}
          });
          return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
        }
      };
      TotpMultiFactorGenerator.FACTOR_ID = "totp";
      TotpMultiFactorAssertionImpl = class _TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
        constructor(otp, enrollmentId, secret) {
          super(
            "totp"
            /* FactorId.TOTP */
          );
          this.otp = otp;
          this.enrollmentId = enrollmentId;
          this.secret = secret;
        }
        /** @internal */
        static _fromSecret(secret, otp) {
          return new _TotpMultiFactorAssertionImpl(otp, void 0, secret);
        }
        /** @internal */
        static _fromEnrollmentId(enrollmentId, otp) {
          return new _TotpMultiFactorAssertionImpl(otp, enrollmentId);
        }
        /** @internal */
        async _finalizeEnroll(auth, idToken, displayName) {
          _assert(
            typeof this.secret !== "undefined",
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return finalizeEnrollTotpMfa(auth, {
            idToken,
            displayName,
            totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
          });
        }
        /** @internal */
        async _finalizeSignIn(auth, mfaPendingCredential) {
          _assert(
            this.enrollmentId !== void 0 && this.otp !== void 0,
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          const totpVerificationInfo = { verificationCode: this.otp };
          return finalizeSignInTotpMfa(auth, {
            mfaPendingCredential,
            mfaEnrollmentId: this.enrollmentId,
            totpVerificationInfo
          });
        }
      };
      TotpSecret = class _TotpSecret {
        // The public members are declared outside the constructor so the docs can be generated.
        constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
          this.sessionInfo = sessionInfo;
          this.auth = auth;
          this.secretKey = secretKey;
          this.hashingAlgorithm = hashingAlgorithm;
          this.codeLength = codeLength;
          this.codeIntervalSeconds = codeIntervalSeconds;
          this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
        }
        /** @internal */
        static _fromStartTotpMfaEnrollmentResponse(response, auth) {
          return new _TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
        }
        /** @internal */
        _makeTotpVerificationInfo(otp) {
          return { sessionInfo: this.sessionInfo, verificationCode: otp };
        }
        /**
         * Returns a QR code URL as described in
         * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
         * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
         * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
         *
         * @param accountName the name of the account/app along with a user identifier.
         * @param issuer issuer of the TOTP (likely the app name).
         * @returns A QR code URL string.
         */
        generateQrCodeUrl(accountName, issuer) {
          var _a;
          let useDefaults = false;
          if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
            useDefaults = true;
          }
          if (useDefaults) {
            if (_isEmptyString(accountName)) {
              accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
            }
            if (_isEmptyString(issuer)) {
              issuer = this.auth.name;
            }
          }
          return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
        }
      };
      name3 = "@firebase/auth";
      version3 = "1.7.6";
      AuthInterop = class {
        constructor(auth) {
          this.auth = auth;
          this.internalListeners = /* @__PURE__ */ new Map();
        }
        getUid() {
          var _a;
          this.assertAuthConfigured();
          return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
        }
        async getToken(forceRefresh) {
          this.assertAuthConfigured();
          await this.auth._initializationPromise;
          if (!this.auth.currentUser) {
            return null;
          }
          const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
          return { accessToken };
        }
        addAuthTokenListener(listener) {
          this.assertAuthConfigured();
          if (this.internalListeners.has(listener)) {
            return;
          }
          const unsubscribe = this.auth.onIdTokenChanged((user) => {
            listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
          });
          this.internalListeners.set(listener, unsubscribe);
          this.updateProactiveRefresh();
        }
        removeAuthTokenListener(listener) {
          this.assertAuthConfigured();
          const unsubscribe = this.internalListeners.get(listener);
          if (!unsubscribe) {
            return;
          }
          this.internalListeners.delete(listener);
          unsubscribe();
          this.updateProactiveRefresh();
        }
        assertAuthConfigured() {
          _assert(
            this.auth._initializationPromise,
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          );
        }
        updateProactiveRefresh() {
          if (this.internalListeners.size > 0) {
            this.auth._startProactiveRefresh();
          } else {
            this.auth._stopProactiveRefresh();
          }
        }
      };
      DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
      authIdTokenMaxAge = getExperimentalSetting("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
      lastPostedIdToken = null;
      mintCookieFactory = (url) => async (user) => {
        const idTokenResult = user && await user.getIdTokenResult();
        const idTokenAge = idTokenResult && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
        if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
          return;
        }
        const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
        if (lastPostedIdToken === idToken) {
          return;
        }
        lastPostedIdToken = idToken;
        await fetch(url, {
          method: idToken ? "POST" : "DELETE",
          headers: idToken ? {
            "Authorization": `Bearer ${idToken}`
          } : {}
        });
      };
      _setExternalJSProvider({
        loadJS(url) {
          return new Promise((resolve, reject) => {
            const el = document.createElement("script");
            el.setAttribute("src", url);
            el.onload = resolve;
            el.onerror = (e) => {
              const error = _createError(
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              error.customData = e;
              reject(error);
            };
            el.type = "text/javascript";
            el.charset = "UTF-8";
            getScriptParentElement().appendChild(el);
          });
        },
        gapiScript: "https://apis.google.com/js/api.js",
        recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
        recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
      });
      registerAuth(
        "Browser"
        /* ClientPlatform.BROWSER */
      );
    }
  });

  // node_modules/@firebase/auth/dist/esm2017/index.js
  var init_esm2017 = __esm({
    "node_modules/@firebase/auth/dist/esm2017/index.js"() {
      init_index_21205181();
      init_index_esm20174();
      init_index_esm2017();
      init_index_esm20173();
      init_index_esm20172();
    }
  });

  // node_modules/firebase/auth/dist/esm/index.esm.js
  var index_esm_exports2 = {};
  __export(index_esm_exports2, {
    ActionCodeOperation: () => ActionCodeOperation,
    ActionCodeURL: () => ActionCodeURL,
    AuthCredential: () => AuthCredential,
    AuthErrorCodes: () => AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
    EmailAuthCredential: () => EmailAuthCredential,
    EmailAuthProvider: () => EmailAuthProvider,
    FacebookAuthProvider: () => FacebookAuthProvider,
    FactorId: () => FactorId,
    GithubAuthProvider: () => GithubAuthProvider,
    GoogleAuthProvider: () => GoogleAuthProvider,
    OAuthCredential: () => OAuthCredential,
    OAuthProvider: () => OAuthProvider,
    OperationType: () => OperationType,
    PhoneAuthCredential: () => PhoneAuthCredential,
    PhoneAuthProvider: () => PhoneAuthProvider,
    PhoneMultiFactorGenerator: () => PhoneMultiFactorGenerator,
    ProviderId: () => ProviderId,
    RecaptchaVerifier: () => RecaptchaVerifier,
    SAMLAuthProvider: () => SAMLAuthProvider,
    SignInMethod: () => SignInMethod,
    TotpMultiFactorGenerator: () => TotpMultiFactorGenerator,
    TotpSecret: () => TotpSecret,
    TwitterAuthProvider: () => TwitterAuthProvider,
    applyActionCode: () => applyActionCode,
    beforeAuthStateChanged: () => beforeAuthStateChanged,
    browserLocalPersistence: () => browserLocalPersistence,
    browserPopupRedirectResolver: () => browserPopupRedirectResolver,
    browserSessionPersistence: () => browserSessionPersistence,
    checkActionCode: () => checkActionCode,
    confirmPasswordReset: () => confirmPasswordReset,
    connectAuthEmulator: () => connectAuthEmulator,
    createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
    debugErrorMap: () => debugErrorMap,
    deleteUser: () => deleteUser,
    fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail,
    getAdditionalUserInfo: () => getAdditionalUserInfo,
    getAuth: () => getAuth,
    getIdToken: () => getIdToken,
    getIdTokenResult: () => getIdTokenResult,
    getMultiFactorResolver: () => getMultiFactorResolver,
    getRedirectResult: () => getRedirectResult,
    inMemoryPersistence: () => inMemoryPersistence,
    indexedDBLocalPersistence: () => indexedDBLocalPersistence,
    initializeAuth: () => initializeAuth,
    initializeRecaptchaConfig: () => initializeRecaptchaConfig,
    isSignInWithEmailLink: () => isSignInWithEmailLink,
    linkWithCredential: () => linkWithCredential,
    linkWithPhoneNumber: () => linkWithPhoneNumber,
    linkWithPopup: () => linkWithPopup,
    linkWithRedirect: () => linkWithRedirect,
    multiFactor: () => multiFactor,
    onAuthStateChanged: () => onAuthStateChanged,
    onIdTokenChanged: () => onIdTokenChanged,
    parseActionCodeURL: () => parseActionCodeURL,
    prodErrorMap: () => prodErrorMap,
    reauthenticateWithCredential: () => reauthenticateWithCredential,
    reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber,
    reauthenticateWithPopup: () => reauthenticateWithPopup,
    reauthenticateWithRedirect: () => reauthenticateWithRedirect,
    reload: () => reload,
    revokeAccessToken: () => revokeAccessToken,
    sendEmailVerification: () => sendEmailVerification,
    sendPasswordResetEmail: () => sendPasswordResetEmail,
    sendSignInLinkToEmail: () => sendSignInLinkToEmail,
    setPersistence: () => setPersistence,
    signInAnonymously: () => signInAnonymously,
    signInWithCredential: () => signInWithCredential,
    signInWithCustomToken: () => signInWithCustomToken,
    signInWithEmailAndPassword: () => signInWithEmailAndPassword,
    signInWithEmailLink: () => signInWithEmailLink,
    signInWithPhoneNumber: () => signInWithPhoneNumber,
    signInWithPopup: () => signInWithPopup,
    signInWithRedirect: () => signInWithRedirect,
    signOut: () => signOut,
    unlink: () => unlink,
    updateCurrentUser: () => updateCurrentUser,
    updateEmail: () => updateEmail,
    updatePassword: () => updatePassword,
    updatePhoneNumber: () => updatePhoneNumber,
    updateProfile: () => updateProfile,
    useDeviceLanguage: () => useDeviceLanguage,
    validatePassword: () => validatePassword,
    verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
    verifyPasswordResetCode: () => verifyPasswordResetCode
  });
  var init_index_esm2 = __esm({
    "node_modules/firebase/auth/dist/esm/index.esm.js"() {
      init_esm2017();
    }
  });

  // node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js
  function setLogLevel3(t) {
    f.setLogLevel(t);
  }
  function __PRIVATE_logDebug(t, ...e) {
    if (f.logLevel <= LogLevel.DEBUG) {
      const r = e.map(__PRIVATE_argToString);
      f.debug(`Firestore (${d}): ${t}`, ...r);
    }
  }
  function __PRIVATE_logError(t, ...e) {
    if (f.logLevel <= LogLevel.ERROR) {
      const r = e.map(__PRIVATE_argToString);
      f.error(`Firestore (${d}): ${t}`, ...r);
    }
  }
  function __PRIVATE_logWarn(t, ...e) {
    if (f.logLevel <= LogLevel.WARN) {
      const r = e.map(__PRIVATE_argToString);
      f.warn(`Firestore (${d}): ${t}`, ...r);
    }
  }
  function __PRIVATE_argToString(t) {
    if ("string" == typeof t) return t;
    try {
      return (function __PRIVATE_formatJSON(t2) {
        return JSON.stringify(t2);
      })(t);
    } catch (e) {
      return t;
    }
  }
  function fail(t = "Unexpected state") {
    const e = `FIRESTORE (${d}) INTERNAL ASSERTION FAILED: ` + t;
    throw __PRIVATE_logError(e), new Error(e);
  }
  function __PRIVATE_hardAssert(t, e) {
    t || fail();
  }
  function __PRIVATE_debugCast(t, e) {
    return t;
  }
  function __PRIVATE_validateNonEmptyArgument(t, e, r) {
    if (!r) throw new FirestoreError(T, `Function ${t}() cannot be called with an empty ${e}.`);
  }
  function __PRIVATE_validateDocumentPath(t) {
    if (!DocumentKey.isDocumentKey(t)) throw new FirestoreError(T, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
  }
  function __PRIVATE_validateCollectionPath(t) {
    if (DocumentKey.isDocumentKey(t)) throw new FirestoreError(T, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
  }
  function __PRIVATE_valueDescription(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
      if (t instanceof Array) return "an array";
      {
        const e = (
          /** try to get the constructor name for an object. */
          (function __PRIVATE_tryGetCustomObjectType(t2) {
            if (t2.constructor) return t2.constructor.name;
            return null;
          })(t)
        );
        return e ? `a custom ${e} object` : "an object";
      }
    }
    return "function" == typeof t ? "a function" : fail();
  }
  function __PRIVATE_cast(t, e) {
    if ("_delegate" in t && // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (t = t._delegate), !(t instanceof e)) {
      if (e.name === t.constructor.name) throw new FirestoreError(T, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
      {
        const r = __PRIVATE_valueDescription(t);
        throw new FirestoreError(T, `Expected type '${e.name}', but it was: ${r}`);
      }
    }
    return t;
  }
  function __PRIVATE_validatePositiveNumber(t, e) {
    if (e <= 0) throw new FirestoreError(T, `Function ${t}() requires a positive number, but it was: ${e}.`);
  }
  function __PRIVATE_cloneLongPollingOptions(t) {
    const e = {};
    return void 0 !== t.timeoutSeconds && (e.timeoutSeconds = t.timeoutSeconds), e;
  }
  function __PRIVATE_generateUniqueDebugId() {
    return null === N ? N = (function __PRIVATE_generateInitialUniqueDebugId() {
      return 268435456 + Math.round(2147483648 * Math.random());
    })() : N++, "0x" + N.toString(16);
  }
  function __PRIVATE_isNullOrUndefined(t) {
    return null == t;
  }
  function __PRIVATE_isNegativeZero(t) {
    return 0 === t && 1 / t == -1 / 0;
  }
  function __PRIVATE_mapCodeFromHttpStatus(t) {
    if (void 0 === t) return __PRIVATE_logError("RPC_ERROR", "HTTP error has no status"), A;
    switch (t) {
      case 200:
        return E;
      case 400:
        return w;
      // Other possibilities based on the forward mapping
      // return Code.INVALID_ARGUMENT;
      // return Code.OUT_OF_RANGE;
      case 401:
        return p;
      case 403:
        return V;
      case 404:
        return P;
      case 409:
        return g;
      // Other possibilities:
      // return Code.ALREADY_EXISTS;
      case 416:
        return F;
      case 429:
        return y;
      case 499:
        return m;
      case 500:
        return A;
      // Other possibilities:
      // return Code.INTERNAL;
      // return Code.DATA_LOSS;
      case 501:
        return v;
      case 503:
        return b;
      case 504:
        return R;
      default:
        return t >= 200 && t < 300 ? E : t >= 400 && t < 500 ? w : t >= 500 && t < 600 ? D : A;
    }
  }
  function __PRIVATE_randomBytes(t) {
    const e = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "undefined" != typeof self && (self.crypto || self.msCrypto)
    ), r = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(r);
    else
      for (let e2 = 0; e2 < t; e2++) r[e2] = Math.floor(256 * Math.random());
    return r;
  }
  function __PRIVATE_primitiveComparator(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }
  function __PRIVATE_arrayEquals(t, e, r) {
    return t.length === e.length && t.every(((t2, n) => r(t2, e[n])));
  }
  function __PRIVATE_objectSize(t) {
    let e = 0;
    for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && e++;
    return e;
  }
  function forEach(t, e) {
    for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && e(r, t[r]);
  }
  function __PRIVATE_normalizeTimestamp(t) {
    if (__PRIVATE_hardAssert(!!t), "string" == typeof t) {
      let e = 0;
      const r = $.exec(t);
      if (__PRIVATE_hardAssert(!!r), r[1]) {
        let t2 = r[1];
        t2 = (t2 + "000000000").substr(0, 9), e = Number(t2);
      }
      const n = new Date(t);
      return {
        seconds: Math.floor(n.getTime() / 1e3),
        nanos: e
      };
    }
    return {
      seconds: __PRIVATE_normalizeNumber(t.seconds),
      nanos: __PRIVATE_normalizeNumber(t.nanos)
    };
  }
  function __PRIVATE_normalizeNumber(t) {
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
  }
  function __PRIVATE_normalizeByteString(t) {
    return "string" == typeof t ? ByteString.fromBase64String(t) : ByteString.fromUint8Array(t);
  }
  function __PRIVATE_isServerTimestamp(t) {
    var e, r;
    return "server_timestamp" === (null === (r = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === r ? void 0 : r.stringValue);
  }
  function __PRIVATE_getPreviousValue(t) {
    const e = t.mapValue.fields.__previous_value__;
    return __PRIVATE_isServerTimestamp(e) ? __PRIVATE_getPreviousValue(e) : e;
  }
  function __PRIVATE_getLocalWriteTime(t) {
    const e = __PRIVATE_normalizeTimestamp(t.mapValue.fields.__local_write_time__.timestampValue);
    return new Timestamp(e.seconds, e.nanos);
  }
  function __PRIVATE_typeOrder(t) {
    return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? __PRIVATE_isServerTimestamp(t) ? 4 : (
      /** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */
      (function __PRIVATE_isMaxValue(t2) {
        return "__max__" === (((t2.mapValue || {}).fields || {}).__type__ || {}).stringValue;
      })(t) ? 9007199254740991 : 10
    ) : fail();
  }
  function __PRIVATE_valueEquals(t, e) {
    if (t === e) return true;
    const r = __PRIVATE_typeOrder(t);
    if (r !== __PRIVATE_typeOrder(e)) return false;
    switch (r) {
      case 0:
      case 9007199254740991:
        return true;
      case 1:
        return t.booleanValue === e.booleanValue;
      case 4:
        return __PRIVATE_getLocalWriteTime(t).isEqual(__PRIVATE_getLocalWriteTime(e));
      case 3:
        return (function __PRIVATE_timestampEquals(t2, e2) {
          if ("string" == typeof t2.timestampValue && "string" == typeof e2.timestampValue && t2.timestampValue.length === e2.timestampValue.length)
            return t2.timestampValue === e2.timestampValue;
          const r2 = __PRIVATE_normalizeTimestamp(t2.timestampValue), n = __PRIVATE_normalizeTimestamp(e2.timestampValue);
          return r2.seconds === n.seconds && r2.nanos === n.nanos;
        })(t, e);
      case 5:
        return t.stringValue === e.stringValue;
      case 6:
        return (function __PRIVATE_blobEquals(t2, e2) {
          return __PRIVATE_normalizeByteString(t2.bytesValue).isEqual(__PRIVATE_normalizeByteString(e2.bytesValue));
        })(t, e);
      case 7:
        return t.referenceValue === e.referenceValue;
      case 8:
        return (function __PRIVATE_geoPointEquals(t2, e2) {
          return __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(t2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(e2.geoPointValue.longitude);
        })(t, e);
      case 2:
        return (function __PRIVATE_numberEquals(t2, e2) {
          if ("integerValue" in t2 && "integerValue" in e2) return __PRIVATE_normalizeNumber(t2.integerValue) === __PRIVATE_normalizeNumber(e2.integerValue);
          if ("doubleValue" in t2 && "doubleValue" in e2) {
            const r2 = __PRIVATE_normalizeNumber(t2.doubleValue), n = __PRIVATE_normalizeNumber(e2.doubleValue);
            return r2 === n ? __PRIVATE_isNegativeZero(r2) === __PRIVATE_isNegativeZero(n) : isNaN(r2) && isNaN(n);
          }
          return false;
        })(t, e);
      case 9:
        return __PRIVATE_arrayEquals(t.arrayValue.values || [], e.arrayValue.values || [], __PRIVATE_valueEquals);
      case 10:
        return (function __PRIVATE_objectEquals(t2, e2) {
          const r2 = t2.mapValue.fields || {}, n = e2.mapValue.fields || {};
          if (__PRIVATE_objectSize(r2) !== __PRIVATE_objectSize(n)) return false;
          for (const t3 in r2) if (r2.hasOwnProperty(t3) && (void 0 === n[t3] || !__PRIVATE_valueEquals(r2[t3], n[t3]))) return false;
          return true;
        })(t, e);
      default:
        return fail();
    }
  }
  function __PRIVATE_arrayValueContains(t, e) {
    return void 0 !== (t.values || []).find(((t2) => __PRIVATE_valueEquals(t2, e)));
  }
  function __PRIVATE_valueCompare(t, e) {
    if (t === e) return 0;
    const r = __PRIVATE_typeOrder(t), n = __PRIVATE_typeOrder(e);
    if (r !== n) return __PRIVATE_primitiveComparator(r, n);
    switch (r) {
      case 0:
      case 9007199254740991:
        return 0;
      case 1:
        return __PRIVATE_primitiveComparator(t.booleanValue, e.booleanValue);
      case 2:
        return (function __PRIVATE_compareNumbers(t2, e2) {
          const r2 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue), n2 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue);
          return r2 < n2 ? -1 : r2 > n2 ? 1 : r2 === n2 ? 0 : (
            // one or both are NaN.
            isNaN(r2) ? isNaN(n2) ? 0 : -1 : 1
          );
        })(t, e);
      case 3:
        return __PRIVATE_compareTimestamps(t.timestampValue, e.timestampValue);
      case 4:
        return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(t), __PRIVATE_getLocalWriteTime(e));
      case 5:
        return __PRIVATE_primitiveComparator(t.stringValue, e.stringValue);
      case 6:
        return (function __PRIVATE_compareBlobs(t2, e2) {
          const r2 = __PRIVATE_normalizeByteString(t2), n2 = __PRIVATE_normalizeByteString(e2);
          return r2.compareTo(n2);
        })(t.bytesValue, e.bytesValue);
      case 7:
        return (function __PRIVATE_compareReferences(t2, e2) {
          const r2 = t2.split("/"), n2 = e2.split("/");
          for (let t3 = 0; t3 < r2.length && t3 < n2.length; t3++) {
            const e3 = __PRIVATE_primitiveComparator(r2[t3], n2[t3]);
            if (0 !== e3) return e3;
          }
          return __PRIVATE_primitiveComparator(r2.length, n2.length);
        })(t.referenceValue, e.referenceValue);
      case 8:
        return (function __PRIVATE_compareGeoPoints(t2, e2) {
          const r2 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(t2.latitude), __PRIVATE_normalizeNumber(e2.latitude));
          if (0 !== r2) return r2;
          return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(t2.longitude), __PRIVATE_normalizeNumber(e2.longitude));
        })(t.geoPointValue, e.geoPointValue);
      case 9:
        return (function __PRIVATE_compareArrays(t2, e2) {
          const r2 = t2.values || [], n2 = e2.values || [];
          for (let t3 = 0; t3 < r2.length && t3 < n2.length; ++t3) {
            const e3 = __PRIVATE_valueCompare(r2[t3], n2[t3]);
            if (e3) return e3;
          }
          return __PRIVATE_primitiveComparator(r2.length, n2.length);
        })(t.arrayValue, e.arrayValue);
      case 10:
        return (function __PRIVATE_compareMaps(t2, e2) {
          if (t2 === Q && e2 === Q) return 0;
          if (t2 === Q) return 1;
          if (e2 === Q) return -1;
          const r2 = t2.fields || {}, n2 = Object.keys(r2), i = e2.fields || {}, s = Object.keys(i);
          n2.sort(), s.sort();
          for (let t3 = 0; t3 < n2.length && t3 < s.length; ++t3) {
            const e3 = __PRIVATE_primitiveComparator(n2[t3], s[t3]);
            if (0 !== e3) return e3;
            const o = __PRIVATE_valueCompare(r2[n2[t3]], i[s[t3]]);
            if (0 !== o) return o;
          }
          return __PRIVATE_primitiveComparator(n2.length, s.length);
        })(t.mapValue, e.mapValue);
      default:
        throw fail();
    }
  }
  function __PRIVATE_compareTimestamps(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return __PRIVATE_primitiveComparator(t, e);
    const r = __PRIVATE_normalizeTimestamp(t), n = __PRIVATE_normalizeTimestamp(e), i = __PRIVATE_primitiveComparator(r.seconds, n.seconds);
    return 0 !== i ? i : __PRIVATE_primitiveComparator(r.nanos, n.nanos);
  }
  function __PRIVATE_refValue(t, e) {
    return {
      referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
    };
  }
  function isArray(t) {
    return !!t && "arrayValue" in t;
  }
  function __PRIVATE_isNullValue(t) {
    return !!t && "nullValue" in t;
  }
  function __PRIVATE_isNanValue(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
  }
  function __PRIVATE_isMapValue(t) {
    return !!t && "mapValue" in t;
  }
  function __PRIVATE_deepClone(t) {
    if (t.geoPointValue) return {
      geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && "object" == typeof t.timestampValue) return {
      timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
      const e = {
        mapValue: {
          fields: {}
        }
      };
      return forEach(t.mapValue.fields, ((t2, r) => e.mapValue.fields[t2] = __PRIVATE_deepClone(r))), e;
    }
    if (t.arrayValue) {
      const e = {
        arrayValue: {
          values: []
        }
      };
      for (let r = 0; r < (t.arrayValue.values || []).length; ++r) e.arrayValue.values[r] = __PRIVATE_deepClone(t.arrayValue.values[r]);
      return e;
    }
    return Object.assign({}, t);
  }
  function __PRIVATE_boundEquals(t, e) {
    if (null === t) return null === e;
    if (null === e) return false;
    if (t.inclusive !== e.inclusive || t.position.length !== e.position.length) return false;
    for (let r = 0; r < t.position.length; r++) {
      if (!__PRIVATE_valueEquals(t.position[r], e.position[r])) return false;
    }
    return true;
  }
  function __PRIVATE_filterEquals(t, e) {
    return t instanceof FieldFilter ? (function __PRIVATE_fieldFilterEquals(t2, e2) {
      return e2 instanceof FieldFilter && t2.op === e2.op && t2.field.isEqual(e2.field) && __PRIVATE_valueEquals(t2.value, e2.value);
    })(t, e) : t instanceof CompositeFilter ? (function __PRIVATE_compositeFilterEquals(t2, e2) {
      if (e2 instanceof CompositeFilter && t2.op === e2.op && t2.filters.length === e2.filters.length) {
        return t2.filters.reduce(((t3, r, n) => t3 && __PRIVATE_filterEquals(r, e2.filters[n])), true);
      }
      return false;
    })(t, e) : void fail();
  }
  function __PRIVATE_extractDocumentKeysFromArrayValue(t, e) {
    var r;
    return ((null === (r = e.arrayValue) || void 0 === r ? void 0 : r.values) || []).map(((t2) => DocumentKey.fromName(t2.referenceValue)));
  }
  function __PRIVATE_orderByEquals(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
  }
  function __PRIVATE_newTarget(t, e = null, r = [], n = [], i = null, s = null, o = null) {
    return new __PRIVATE_TargetImpl(t, e, r, n, i, s, o);
  }
  function __PRIVATE_isCollectionGroupQuery(t) {
    return null !== t.collectionGroup;
  }
  function __PRIVATE_queryNormalizedOrderBy(t) {
    const e = __PRIVATE_debugCast(t);
    if (null === e.S) {
      e.S = [];
      const t2 = /* @__PURE__ */ new Set();
      for (const r2 of e.explicitOrderBy) e.S.push(r2), t2.add(r2.field.canonicalString());
      const r = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc", n = (
        // Returns the sorted set of inequality filter fields used in this query.
        (function __PRIVATE_getInequalityFilterFields(t3) {
          let e2 = new SortedSet(FieldPath$1.comparator);
          return t3.filters.forEach(((t4) => {
            t4.getFlattenedFilters().forEach(((t5) => {
              t5.isInequality() && (e2 = e2.add(t5.field));
            }));
          })), e2;
        })(e)
      );
      n.forEach(((n2) => {
        t2.has(n2.canonicalString()) || n2.isKeyField() || e.S.push(new OrderBy(n2, r));
      })), // Add the document key field to the last if it is not explicitly ordered.
      t2.has(FieldPath$1.keyField().canonicalString()) || e.S.push(new OrderBy(FieldPath$1.keyField(), r));
    }
    return e.S;
  }
  function __PRIVATE_queryToTarget(t) {
    const e = __PRIVATE_debugCast(t);
    return e.N || (e.N = __PRIVATE__queryToTarget(e, __PRIVATE_queryNormalizedOrderBy(t))), e.N;
  }
  function __PRIVATE__queryToTarget(t, e) {
    if ("F" === t.limitType) return __PRIVATE_newTarget(t.path, t.collectionGroup, e, t.filters, t.limit, t.startAt, t.endAt);
    {
      e = e.map(((t2) => {
        const e2 = "desc" === t2.dir ? "asc" : "desc";
        return new OrderBy(t2.field, e2);
      }));
      const r = t.endAt ? new Bound(t.endAt.position, t.endAt.inclusive) : null, n = t.startAt ? new Bound(t.startAt.position, t.startAt.inclusive) : null;
      return __PRIVATE_newTarget(t.path, t.collectionGroup, e, t.filters, t.limit, r, n);
    }
  }
  function __PRIVATE_queryWithAddedFilter(t, e) {
    const r = t.filters.concat([e]);
    return new __PRIVATE_QueryImpl(t.path, t.collectionGroup, t.explicitOrderBy.slice(), r, t.limit, t.limitType, t.startAt, t.endAt);
  }
  function __PRIVATE_queryEquals(t, e) {
    return (function __PRIVATE_targetEquals(t2, e2) {
      if (t2.limit !== e2.limit) return false;
      if (t2.orderBy.length !== e2.orderBy.length) return false;
      for (let r = 0; r < t2.orderBy.length; r++) if (!__PRIVATE_orderByEquals(t2.orderBy[r], e2.orderBy[r])) return false;
      if (t2.filters.length !== e2.filters.length) return false;
      for (let r = 0; r < t2.filters.length; r++) if (!__PRIVATE_filterEquals(t2.filters[r], e2.filters[r])) return false;
      return t2.collectionGroup === e2.collectionGroup && !!t2.path.isEqual(e2.path) && !!__PRIVATE_boundEquals(t2.startAt, e2.startAt) && __PRIVATE_boundEquals(t2.endAt, e2.endAt);
    })(__PRIVATE_queryToTarget(t), __PRIVATE_queryToTarget(e)) && t.limitType === e.limitType;
  }
  function toNumber(t, e) {
    return (function isSafeInteger(t2) {
      return "number" == typeof t2 && Number.isInteger(t2) && !__PRIVATE_isNegativeZero(t2) && t2 <= Number.MAX_SAFE_INTEGER && t2 >= Number.MIN_SAFE_INTEGER;
    })(e) ? (
      /**
      * Returns an IntegerValue for `value`.
      */
      (function __PRIVATE_toInteger(t2) {
        return {
          integerValue: "" + t2
        };
      })(e)
    ) : (function __PRIVATE_toDouble(t2, e2) {
      if (t2.useProto3Json) {
        if (isNaN(e2)) return {
          doubleValue: "NaN"
        };
        if (e2 === 1 / 0) return {
          doubleValue: "Infinity"
        };
        if (e2 === -1 / 0) return {
          doubleValue: "-Infinity"
        };
      }
      return {
        doubleValue: __PRIVATE_isNegativeZero(e2) ? "-0" : e2
      };
    })(t, e);
  }
  function toTimestamp(t, e) {
    if (t.useProto3Json) {
      return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
      seconds: "" + e.seconds,
      nanos: e.nanoseconds
    };
  }
  function __PRIVATE_toBytes(t, e) {
    return t.useProto3Json ? e.toBase64() : e.toUint8Array();
  }
  function __PRIVATE_toVersion(t, e) {
    return toTimestamp(t, e.toTimestamp());
  }
  function __PRIVATE_fromVersion(t) {
    return __PRIVATE_hardAssert(!!t), SnapshotVersion.fromTimestamp((function fromTimestamp(t2) {
      const e = __PRIVATE_normalizeTimestamp(t2);
      return new Timestamp(e.seconds, e.nanos);
    })(t));
  }
  function __PRIVATE_toResourceName(t, e) {
    return __PRIVATE_toResourcePath(t, e).canonicalString();
  }
  function __PRIVATE_toResourcePath(t, e) {
    const r = (function __PRIVATE_fullyQualifiedPrefixPath(t2) {
      return new ResourcePath(["projects", t2.projectId, "databases", t2.database]);
    })(t).child("documents");
    return void 0 === e ? r : r.child(e);
  }
  function __PRIVATE_toName(t, e) {
    return __PRIVATE_toResourceName(t.databaseId, e.path);
  }
  function fromName(t, e) {
    const r = (function __PRIVATE_fromResourceName(t2) {
      const e2 = ResourcePath.fromString(t2);
      return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(e2)), e2;
    })(e);
    if (r.get(1) !== t.databaseId.projectId) throw new FirestoreError(T, "Tried to deserialize key from different project: " + r.get(1) + " vs " + t.databaseId.projectId);
    if (r.get(3) !== t.databaseId.database) throw new FirestoreError(T, "Tried to deserialize key from different database: " + r.get(3) + " vs " + t.databaseId.database);
    return new DocumentKey((function __PRIVATE_extractLocalPathFromResourceName(t2) {
      return __PRIVATE_hardAssert(t2.length > 4 && "documents" === t2.get(4)), t2.popFirst(5);
    })(r));
  }
  function __PRIVATE_toMutationDocument(t, e, r) {
    return {
      name: __PRIVATE_toName(t, e),
      fields: r.value.mapValue.fields
    };
  }
  function __PRIVATE_fromBatchGetDocumentsResponse(t, e) {
    return "found" in e ? (function __PRIVATE_fromFound(t2, e2) {
      __PRIVATE_hardAssert(!!e2.found), e2.found.name, e2.found.updateTime;
      const r = fromName(t2, e2.found.name), n = __PRIVATE_fromVersion(e2.found.updateTime), i = e2.found.createTime ? __PRIVATE_fromVersion(e2.found.createTime) : SnapshotVersion.min(), s = new ObjectValue({
        mapValue: {
          fields: e2.found.fields
        }
      });
      return MutableDocument.newFoundDocument(r, n, i, s);
    })(t, e) : "missing" in e ? (function __PRIVATE_fromMissing(t2, e2) {
      __PRIVATE_hardAssert(!!e2.missing), __PRIVATE_hardAssert(!!e2.readTime);
      const r = fromName(t2, e2.missing), n = __PRIVATE_fromVersion(e2.readTime);
      return MutableDocument.newNoDocument(r, n);
    })(t, e) : fail();
  }
  function toMutation(t, e) {
    let r;
    if (e instanceof __PRIVATE_SetMutation) r = {
      update: __PRIVATE_toMutationDocument(t, e.key, e.value)
    };
    else if (e instanceof __PRIVATE_DeleteMutation) r = {
      delete: __PRIVATE_toName(t, e.key)
    };
    else if (e instanceof __PRIVATE_PatchMutation) r = {
      update: __PRIVATE_toMutationDocument(t, e.key, e.data),
      updateMask: __PRIVATE_toDocumentMask(e.fieldMask)
    };
    else {
      if (!(e instanceof __PRIVATE_VerifyMutation)) return fail();
      r = {
        verify: __PRIVATE_toName(t, e.key)
      };
    }
    return e.fieldTransforms.length > 0 && (r.updateTransforms = e.fieldTransforms.map(((t2) => (function __PRIVATE_toFieldTransform(t3, e2) {
      const r2 = e2.transform;
      if (r2 instanceof __PRIVATE_ServerTimestampTransform) return {
        fieldPath: e2.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
      if (r2 instanceof __PRIVATE_ArrayUnionTransformOperation) return {
        fieldPath: e2.field.canonicalString(),
        appendMissingElements: {
          values: r2.elements
        }
      };
      if (r2 instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
        fieldPath: e2.field.canonicalString(),
        removeAllFromArray: {
          values: r2.elements
        }
      };
      if (r2 instanceof __PRIVATE_NumericIncrementTransformOperation) return {
        fieldPath: e2.field.canonicalString(),
        increment: r2.q
      };
      throw fail();
    })(0, t2)))), e.precondition.isNone || (r.currentDocument = (function __PRIVATE_toPrecondition(t2, e2) {
      return void 0 !== e2.updateTime ? {
        updateTime: __PRIVATE_toVersion(t2, e2.updateTime)
      } : void 0 !== e2.exists ? {
        exists: e2.exists
      } : fail();
    })(t, e.precondition)), r;
  }
  function __PRIVATE_toQueryTarget(t, e) {
    const r = {
      structuredQuery: {}
    }, n = e.path;
    let i;
    null !== e.collectionGroup ? (i = n, r.structuredQuery.from = [{
      collectionId: e.collectionGroup,
      allDescendants: true
    }]) : (i = n.popLast(), r.structuredQuery.from = [{
      collectionId: n.lastSegment()
    }]), r.parent = (function __PRIVATE_toQueryPath(t2, e2) {
      return __PRIVATE_toResourceName(t2.databaseId, e2);
    })(t, i);
    const s = (function __PRIVATE_toFilters(t2) {
      if (0 === t2.length) return;
      return __PRIVATE_toFilter(CompositeFilter.create(
        t2,
        "and"
        /* CompositeOperator.AND */
      ));
    })(e.filters);
    s && (r.structuredQuery.where = s);
    const o = (function __PRIVATE_toOrder(t2) {
      if (0 === t2.length) return;
      return t2.map(((t3) => (
        // visible for testing
        (function __PRIVATE_toPropertyOrder(t4) {
          return {
            field: __PRIVATE_toFieldPathReference(t4.field),
            direction: __PRIVATE_toDirection(t4.dir)
          };
        })(t3)
      )));
    })(e.orderBy);
    o && (r.structuredQuery.orderBy = o);
    const a = (function __PRIVATE_toInt32Proto(t2, e2) {
      return t2.useProto3Json || __PRIVATE_isNullOrUndefined(e2) ? e2 : {
        value: e2
      };
    })(t, e.limit);
    return null !== a && (r.structuredQuery.limit = a), e.startAt && (r.structuredQuery.startAt = (function __PRIVATE_toStartAtCursor(t2) {
      return {
        before: t2.inclusive,
        values: t2.position
      };
    })(e.startAt)), e.endAt && (r.structuredQuery.endAt = (function __PRIVATE_toEndAtCursor(t2) {
      return {
        before: !t2.inclusive,
        values: t2.position
      };
    })(e.endAt)), {
      B: r,
      parent: i
    };
  }
  function __PRIVATE_toDirection(t) {
    return L[t];
  }
  function __PRIVATE_toOperatorName(t) {
    return M[t];
  }
  function __PRIVATE_toCompositeOperatorName(t) {
    return x[t];
  }
  function __PRIVATE_toFieldPathReference(t) {
    return {
      fieldPath: t.canonicalString()
    };
  }
  function __PRIVATE_toFilter(t) {
    return t instanceof FieldFilter ? (function __PRIVATE_toUnaryOrFieldFilter(t2) {
      if ("==" === t2.op) {
        if (__PRIVATE_isNanValue(t2.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(t2.field),
            op: "IS_NAN"
          }
        };
        if (__PRIVATE_isNullValue(t2.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(t2.field),
            op: "IS_NULL"
          }
        };
      } else if ("!=" === t2.op) {
        if (__PRIVATE_isNanValue(t2.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(t2.field),
            op: "IS_NOT_NAN"
          }
        };
        if (__PRIVATE_isNullValue(t2.value)) return {
          unaryFilter: {
            field: __PRIVATE_toFieldPathReference(t2.field),
            op: "IS_NOT_NULL"
          }
        };
      }
      return {
        fieldFilter: {
          field: __PRIVATE_toFieldPathReference(t2.field),
          op: __PRIVATE_toOperatorName(t2.op),
          value: t2.value
        }
      };
    })(t) : t instanceof CompositeFilter ? (function __PRIVATE_toCompositeFilter(t2) {
      const e = t2.getFilters().map(((t3) => __PRIVATE_toFilter(t3)));
      if (1 === e.length) return e[0];
      return {
        compositeFilter: {
          op: __PRIVATE_toCompositeOperatorName(t2.op),
          filters: e
        }
      };
    })(t) : fail();
  }
  function __PRIVATE_toDocumentMask(t) {
    const e = [];
    return t.fields.forEach(((t2) => e.push(t2.canonicalString()))), {
      fieldPaths: e
    };
  }
  function __PRIVATE_isValidResourceName(t) {
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
  }
  function __PRIVATE_newSerializer(t) {
    return new JsonProtoSerializer(
      t,
      /* useProto3Json= */
      true
    );
  }
  async function __PRIVATE_invokeCommitRpc(t, e) {
    const r = __PRIVATE_debugCast(t), n = {
      writes: e.map(((t2) => toMutation(r.serializer, t2)))
    };
    await r.P("Commit", r.serializer.databaseId, ResourcePath.emptyPath(), n);
  }
  async function __PRIVATE_invokeBatchGetDocumentsRpc(t, e) {
    const r = __PRIVATE_debugCast(t), n = {
      documents: e.map(((t2) => __PRIVATE_toName(r.serializer, t2)))
    }, i = await r.g("BatchGetDocuments", r.serializer.databaseId, ResourcePath.emptyPath(), n, e.length), s = /* @__PURE__ */ new Map();
    i.forEach(((t2) => {
      const e2 = __PRIVATE_fromBatchGetDocumentsResponse(r.serializer, t2);
      s.set(e2.key.toString(), e2);
    }));
    const o = [];
    return e.forEach(((t2) => {
      const e2 = s.get(t2.toString());
      __PRIVATE_hardAssert(!!e2), o.push(e2);
    })), o;
  }
  async function __PRIVATE_invokeRunQueryRpc(t, e) {
    const r = __PRIVATE_debugCast(t), { B: n, parent: i } = __PRIVATE_toQueryTarget(r.serializer, __PRIVATE_queryToTarget(e));
    return (await r.g("RunQuery", r.serializer.databaseId, i, {
      structuredQuery: n.structuredQuery
    })).filter(((t2) => !!t2.document)).map(((t2) => (function __PRIVATE_fromDocument(t3, e2, r2) {
      const n2 = fromName(t3, e2.name), i2 = __PRIVATE_fromVersion(e2.updateTime), s = e2.createTime ? __PRIVATE_fromVersion(e2.createTime) : SnapshotVersion.min(), o = new ObjectValue({
        mapValue: {
          fields: e2.fields
        }
      }), a = MutableDocument.newFoundDocument(n2, i2, s, o);
      return r2 && a.setHasCommittedMutations(), r2 ? a.setHasCommittedMutations() : a;
    })(r.serializer, t2.document, void 0)));
  }
  async function __PRIVATE_invokeRunAggregationQueryRpc(t, e, r) {
    var n;
    const i = __PRIVATE_debugCast(t), { request: s, X: o, parent: a } = (function __PRIVATE_toRunAggregationQueryRequest(t2, e2, r2, n2) {
      const { B: i2, parent: s2 } = __PRIVATE_toQueryTarget(t2, e2), o2 = {}, a2 = [];
      let u2 = 0;
      return r2.forEach(((t3) => {
        const e3 = n2 ? t3.alias : "aggregate_" + u2++;
        o2[e3] = t3.alias, "count" === t3.aggregateType ? a2.push({
          alias: e3,
          count: {}
        }) : "avg" === t3.aggregateType ? a2.push({
          alias: e3,
          avg: {
            field: __PRIVATE_toFieldPathReference(t3.fieldPath)
          }
        }) : "sum" === t3.aggregateType && a2.push({
          alias: e3,
          sum: {
            field: __PRIVATE_toFieldPathReference(t3.fieldPath)
          }
        });
      })), {
        request: {
          structuredAggregationQuery: {
            aggregations: a2,
            structuredQuery: i2.structuredQuery
          },
          parent: i2.parent
        },
        X: o2,
        parent: s2
      };
    })(i.serializer, (function __PRIVATE_queryToAggregateTarget(t2) {
      const e2 = __PRIVATE_debugCast(t2);
      return e2.O || // Do not include implicit order-bys for aggregate queries.
      (e2.O = __PRIVATE__queryToTarget(e2, t2.explicitOrderBy)), e2.O;
    })(e), r);
    i.connection.R || delete s.parent;
    const u = (await i.g(
      "RunAggregationQuery",
      i.serializer.databaseId,
      a,
      s,
      /*expectedResponseCount=*/
      1
    )).filter(((t2) => !!t2.result));
    __PRIVATE_hardAssert(1 === u.length);
    const _ = null === (n = u[0].result) || void 0 === n ? void 0 : n.aggregateFields;
    return Object.keys(_).reduce(((t2, e2) => (t2[o[e2]] = _[e2], t2)), {});
  }
  function __PRIVATE_getDatastore(t) {
    if (t._terminated) throw new FirestoreError(w, "The client has already been terminated.");
    if (!k.has(t)) {
      __PRIVATE_logDebug("ComponentProvider", "Initializing Datastore");
      const e = (function __PRIVATE_newConnection(t2) {
        return new __PRIVATE_FetchConnection(t2, fetch.bind(null));
      })((function __PRIVATE_makeDatabaseInfo(t2, e2, r2, n2) {
        return new DatabaseInfo(t2, e2, r2, n2.host, n2.ssl, n2.experimentalForceLongPolling, n2.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(n2.experimentalLongPollingOptions), n2.useFetchStreams);
      })(t._databaseId, t.app.options.appId || "", t._persistenceKey, t._freezeSettings())), r = __PRIVATE_newSerializer(t._databaseId), n = (function __PRIVATE_newDatastore(t2, e2, r2, n2) {
        return new __PRIVATE_DatastoreImpl(t2, e2, r2, n2);
      })(t._authCredentials, t._appCheckCredentials, e, r);
      k.set(t, n);
    }
    return k.get(t);
  }
  function initializeFirestore(t, e, r) {
    r || (r = "(default)");
    const n = _getProvider(t, "firestore/lite");
    if (n.isInitialized(r)) throw new FirestoreError(w, "Firestore can only be initialized once per app.");
    return n.initialize({
      options: e,
      instanceIdentifier: r
    });
  }
  function getFirestore(e, r) {
    const n = "object" == typeof e ? e : getApp(), i = "string" == typeof e ? e : r || "(default)", s = _getProvider(n, "firestore/lite").getImmediate({
      identifier: i
    });
    if (!s._initialized) {
      const t = getDefaultEmulatorHostnameAndPort("firestore");
      t && connectFirestoreEmulator(s, ...t);
    }
    return s;
  }
  function connectFirestoreEmulator(t, e, r, n = {}) {
    var i;
    const s = (t = __PRIVATE_cast(t, Firestore))._getSettings(), o = `${e}:${r}`;
    if ("firestore.googleapis.com" !== s.host && s.host !== o && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), t._setSettings(Object.assign(Object.assign({}, s), {
      host: o,
      ssl: false
    })), n.mockUserToken) {
      let e2, r2;
      if ("string" == typeof n.mockUserToken) e2 = n.mockUserToken, r2 = User.MOCK_USER;
      else {
        e2 = createMockUserToken(n.mockUserToken, null === (i = t._app) || void 0 === i ? void 0 : i.options.projectId);
        const s2 = n.mockUserToken.sub || n.mockUserToken.user_id;
        if (!s2) throw new FirestoreError(T, "mockUserToken must contain 'sub' or 'user_id' field!");
        r2 = new User(s2);
      }
      t._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(e2, r2));
    }
  }
  function terminate(t) {
    return t = __PRIVATE_cast(t, Firestore), _removeServiceInstance(t.app, "firestore/lite"), t._delete();
  }
  function collection(t, e, ...r) {
    if (t = getModularInstance(t), __PRIVATE_validateNonEmptyArgument("collection", "path", e), t instanceof Firestore) {
      const n = ResourcePath.fromString(e, ...r);
      return __PRIVATE_validateCollectionPath(n), new CollectionReference(
        t,
        /* converter= */
        null,
        n
      );
    }
    {
      if (!(t instanceof DocumentReference || t instanceof CollectionReference)) throw new FirestoreError(T, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const n = t._path.child(ResourcePath.fromString(e, ...r));
      return __PRIVATE_validateCollectionPath(n), new CollectionReference(
        t.firestore,
        /* converter= */
        null,
        n
      );
    }
  }
  function collectionGroup(t, e) {
    if (t = __PRIVATE_cast(t, Firestore), __PRIVATE_validateNonEmptyArgument("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new FirestoreError(T, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new Query(
      t,
      /* converter= */
      null,
      (function __PRIVATE_newQueryForCollectionGroup(t2) {
        return new __PRIVATE_QueryImpl(ResourcePath.emptyPath(), t2);
      })(e)
    );
  }
  function doc(t, e, ...r) {
    if (t = getModularInstance(t), // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", e), t instanceof Firestore) {
      const n = ResourcePath.fromString(e, ...r);
      return __PRIVATE_validateDocumentPath(n), new DocumentReference(
        t,
        /* converter= */
        null,
        new DocumentKey(n)
      );
    }
    {
      if (!(t instanceof DocumentReference || t instanceof CollectionReference)) throw new FirestoreError(T, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const n = t._path.child(ResourcePath.fromString(e, ...r));
      return __PRIVATE_validateDocumentPath(n), new DocumentReference(t.firestore, t instanceof CollectionReference ? t.converter : null, new DocumentKey(n));
    }
  }
  function refEqual(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), (t instanceof DocumentReference || t instanceof CollectionReference) && (e instanceof DocumentReference || e instanceof CollectionReference) && (t.firestore === e.firestore && t.path === e.path && t.converter === e.converter);
  }
  function queryEqual(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), t instanceof Query && e instanceof Query && (t.firestore === e.firestore && __PRIVATE_queryEquals(t._query, e._query) && t.converter === e.converter);
  }
  function documentId() {
    return new FieldPath("__name__");
  }
  function __PRIVATE_isWrite(t) {
    switch (t) {
      case 0:
      // fall through
      case 2:
      // fall through
      case 1:
        return true;
      case 3:
      case 4:
        return false;
      default:
        throw fail();
    }
  }
  function __PRIVATE_newUserDataReader(t) {
    const e = t._freezeSettings(), r = __PRIVATE_newSerializer(t._databaseId);
    return new __PRIVATE_UserDataReader(t._databaseId, !!e.ignoreUndefinedProperties, r);
  }
  function __PRIVATE_parseSetData(t, e, r, n, i, s = {}) {
    const o = t.ht(s.merge || s.mergeFields ? 2 : 0, e, r, i);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", o, n);
    const a = __PRIVATE_parseObject(n, o);
    let u, _;
    if (s.merge) u = new FieldMask(o.fieldMask), _ = o.fieldTransforms;
    else if (s.mergeFields) {
      const t2 = [];
      for (const n2 of s.mergeFields) {
        const i2 = __PRIVATE_fieldPathFromArgument$1(e, n2, r);
        if (!o.contains(i2)) throw new FirestoreError(T, `Field '${i2}' is specified in your field mask but missing from your input data.`);
        __PRIVATE_fieldMaskContains(t2, i2) || t2.push(i2);
      }
      u = new FieldMask(t2), _ = o.fieldTransforms.filter(((t3) => u.covers(t3.field)));
    } else u = null, _ = o.fieldTransforms;
    return new ParsedSetData(new ObjectValue(a), u, _);
  }
  function __PRIVATE_createSentinelChildContext(t, e, r) {
    return new __PRIVATE_ParseContextImpl({
      et: 3,
      lt: e.settings.lt,
      methodName: t._methodName,
      it: r
    }, e.databaseId, e.serializer, e.ignoreUndefinedProperties);
  }
  function __PRIVATE_parseUpdateData(t, e, r, n) {
    const i = t.ht(1, e, r);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", i, n);
    const s = [], o = ObjectValue.empty();
    forEach(n, ((t2, n2) => {
      const a2 = __PRIVATE_fieldPathFromDotSeparatedString(e, t2, r);
      n2 = getModularInstance(n2);
      const u = i.ot(a2);
      if (n2 instanceof __PRIVATE_DeleteFieldValueImpl)
        s.push(a2);
      else {
        const t3 = __PRIVATE_parseData(n2, u);
        null != t3 && (s.push(a2), o.set(a2, t3));
      }
    }));
    const a = new FieldMask(s);
    return new ParsedUpdateData(o, a, i.fieldTransforms);
  }
  function __PRIVATE_parseUpdateVarargs(t, e, r, n, i, s) {
    const o = t.ht(1, e, r), a = [__PRIVATE_fieldPathFromArgument$1(e, n, r)], u = [i];
    if (s.length % 2 != 0) throw new FirestoreError(T, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t2 = 0; t2 < s.length; t2 += 2) a.push(__PRIVATE_fieldPathFromArgument$1(e, s[t2])), u.push(s[t2 + 1]);
    const _ = [], c = ObjectValue.empty();
    for (let t2 = a.length - 1; t2 >= 0; --t2) if (!__PRIVATE_fieldMaskContains(_, a[t2])) {
      const e2 = a[t2];
      let r2 = u[t2];
      r2 = getModularInstance(r2);
      const n2 = o.ot(e2);
      if (r2 instanceof __PRIVATE_DeleteFieldValueImpl)
        _.push(e2);
      else {
        const t3 = __PRIVATE_parseData(r2, n2);
        null != t3 && (_.push(e2), c.set(e2, t3));
      }
    }
    const h = new FieldMask(_);
    return new ParsedUpdateData(c, h, o.fieldTransforms);
  }
  function __PRIVATE_parseQueryValue(t, e, r, n = false) {
    return __PRIVATE_parseData(r, t.ht(n ? 4 : 3, e));
  }
  function __PRIVATE_parseData(t, e) {
    if (__PRIVATE_looksLikeJsonObject(
      // Unwrap the API type from the Compat SDK. This will return the API type
      // from firestore-exp.
      t = getModularInstance(t)
    )) return __PRIVATE_validatePlainObject("Unsupported field value:", e, t), __PRIVATE_parseObject(t, e);
    if (t instanceof FieldValue)
      return (function __PRIVATE_parseSentinelFieldValue(t2, e2) {
        if (!__PRIVATE_isWrite(e2.et)) throw e2._t(`${t2._methodName}() can only be used with update() and set()`);
        if (!e2.path) throw e2._t(`${t2._methodName}() is not currently supported inside arrays`);
        const r = t2._toFieldTransform(e2);
        r && e2.fieldTransforms.push(r);
      })(t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties)
      return null;
    if (
      // If context.path is null we are inside an array and we don't support
      // field mask paths more granular than the top-level array.
      e.path && e.fieldMask.push(e.path), t instanceof Array
    ) {
      if (e.settings.it && 4 !== e.et) throw e._t("Nested arrays are not supported");
      return (function __PRIVATE_parseArray(t2, e2) {
        const r = [];
        let n = 0;
        for (const i of t2) {
          let t3 = __PRIVATE_parseData(i, e2.ut(n));
          null == t3 && // Just include nulls in the array for fields being replaced with a
          // sentinel.
          (t3 = {
            nullValue: "NULL_VALUE"
          }), r.push(t3), n++;
        }
        return {
          arrayValue: {
            values: r
          }
        };
      })(t, e);
    }
    return (function __PRIVATE_parseScalarValue(t2, e2) {
      if (null === (t2 = getModularInstance(t2))) return {
        nullValue: "NULL_VALUE"
      };
      if ("number" == typeof t2) return toNumber(e2.serializer, t2);
      if ("boolean" == typeof t2) return {
        booleanValue: t2
      };
      if ("string" == typeof t2) return {
        stringValue: t2
      };
      if (t2 instanceof Date) {
        const r = Timestamp.fromDate(t2);
        return {
          timestampValue: toTimestamp(e2.serializer, r)
        };
      }
      if (t2 instanceof Timestamp) {
        const r = new Timestamp(t2.seconds, 1e3 * Math.floor(t2.nanoseconds / 1e3));
        return {
          timestampValue: toTimestamp(e2.serializer, r)
        };
      }
      if (t2 instanceof GeoPoint) return {
        geoPointValue: {
          latitude: t2.latitude,
          longitude: t2.longitude
        }
      };
      if (t2 instanceof Bytes) return {
        bytesValue: __PRIVATE_toBytes(e2.serializer, t2._byteString)
      };
      if (t2 instanceof DocumentReference) {
        const r = e2.databaseId, n = t2.firestore._databaseId;
        if (!n.isEqual(r)) throw e2._t(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);
        return {
          referenceValue: __PRIVATE_toResourceName(t2.firestore._databaseId || e2.databaseId, t2._key.path)
        };
      }
      throw e2._t(`Unsupported field value: ${__PRIVATE_valueDescription(t2)}`);
    })(t, e);
  }
  function __PRIVATE_parseObject(t, e) {
    const r = {};
    return !(function isEmpty2(t2) {
      for (const e2 in t2) if (Object.prototype.hasOwnProperty.call(t2, e2)) return false;
      return true;
    })(t) ? forEach(t, ((t2, n) => {
      const i = __PRIVATE_parseData(n, e.nt(t2));
      null != i && (r[t2] = i);
    })) : (
      // If we encounter an empty object, we explicitly add it to the update
      // mask to ensure that the server creates a map entry.
      e.path && e.path.length > 0 && e.fieldMask.push(e.path)
    ), {
      mapValue: {
        fields: r
      }
    };
  }
  function __PRIVATE_looksLikeJsonObject(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Timestamp || t instanceof GeoPoint || t instanceof Bytes || t instanceof DocumentReference || t instanceof FieldValue);
  }
  function __PRIVATE_validatePlainObject(t, e, r) {
    if (!__PRIVATE_looksLikeJsonObject(r) || !(function __PRIVATE_isPlainObject(t2) {
      return "object" == typeof t2 && null !== t2 && (Object.getPrototypeOf(t2) === Object.prototype || null === Object.getPrototypeOf(t2));
    })(r)) {
      const n = __PRIVATE_valueDescription(r);
      throw "an object" === n ? e._t(t + " a custom object") : e._t(t + " " + n);
    }
  }
  function __PRIVATE_fieldPathFromArgument$1(t, e, r) {
    if (
      // If required, replace the FieldPath Compat class with the firestore-exp
      // FieldPath.
      (e = getModularInstance(e)) instanceof FieldPath
    ) return e._internalPath;
    if ("string" == typeof e) return __PRIVATE_fieldPathFromDotSeparatedString(t, e);
    throw __PRIVATE_createError(
      "Field path arguments must be of type string or ",
      t,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      r
    );
  }
  function __PRIVATE_fieldPathFromDotSeparatedString(t, e, r) {
    if (e.search(j) >= 0) throw __PRIVATE_createError(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      r
    );
    try {
      return new FieldPath(...e.split("."))._internalPath;
    } catch (n) {
      throw __PRIVATE_createError(
        `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        t,
        /* hasConverter= */
        false,
        /* path= */
        void 0,
        r
      );
    }
  }
  function __PRIVATE_createError(t, e, r, n, i) {
    const s = n && !n.isEmpty(), o = void 0 !== i;
    let a = `Function ${e}() called with invalid data`;
    r && (a += " (via `toFirestore()`)"), a += ". ";
    let u = "";
    return (s || o) && (u += " (found", s && (u += ` in field ${n}`), o && (u += ` in document ${i}`), u += ")"), new FirestoreError(T, a + t + u);
  }
  function __PRIVATE_fieldMaskContains(t, e) {
    return t.some(((t2) => t2.isEqual(e)));
  }
  function snapshotEqual(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), t instanceof DocumentSnapshot && e instanceof DocumentSnapshot ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof QuerySnapshot && e instanceof QuerySnapshot && (queryEqual(t.query, e.query) && __PRIVATE_arrayEquals(t.docs, e.docs, snapshotEqual));
  }
  function __PRIVATE_fieldPathFromArgument(t, e) {
    return "string" == typeof e ? __PRIVATE_fieldPathFromDotSeparatedString(t, e) : e instanceof FieldPath ? e._internalPath : e._delegate._internalPath;
  }
  function query(t, e, ...r) {
    let n = [];
    e instanceof AppliableConstraint && n.push(e), n = n.concat(r), (function __PRIVATE_validateQueryConstraintArray(t2) {
      const e2 = t2.filter(((t3) => t3 instanceof QueryCompositeFilterConstraint)).length, r2 = t2.filter(((t3) => t3 instanceof QueryFieldFilterConstraint)).length;
      if (e2 > 1 || e2 > 0 && r2 > 0) throw new FirestoreError(T, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
    })(n);
    for (const e2 of n) t = e2._apply(t);
    return t;
  }
  function where(t, e, r) {
    const n = e, i = __PRIVATE_fieldPathFromArgument("where", t);
    return QueryFieldFilterConstraint._create(i, n, r);
  }
  function or(...t) {
    return t.forEach(((t2) => __PRIVATE_validateQueryFilterConstraint("or", t2))), QueryCompositeFilterConstraint._create("or", t);
  }
  function and(...t) {
    return t.forEach(((t2) => __PRIVATE_validateQueryFilterConstraint("and", t2))), QueryCompositeFilterConstraint._create("and", t);
  }
  function orderBy(t, e = "asc") {
    const r = e, n = __PRIVATE_fieldPathFromArgument("orderBy", t);
    return QueryOrderByConstraint._create(n, r);
  }
  function limit(t) {
    return __PRIVATE_validatePositiveNumber("limit", t), QueryLimitConstraint._create(
      "limit",
      t,
      "F"
      /* LimitType.First */
    );
  }
  function limitToLast(t) {
    return __PRIVATE_validatePositiveNumber("limitToLast", t), QueryLimitConstraint._create(
      "limitToLast",
      t,
      "L"
      /* LimitType.Last */
    );
  }
  function startAt(...t) {
    return QueryStartAtConstraint._create(
      "startAt",
      t,
      /*inclusive=*/
      true
    );
  }
  function startAfter(...t) {
    return QueryStartAtConstraint._create(
      "startAfter",
      t,
      /*inclusive=*/
      false
    );
  }
  function endBefore(...t) {
    return QueryEndAtConstraint._create(
      "endBefore",
      t,
      /*inclusive=*/
      false
    );
  }
  function endAt(...t) {
    return QueryEndAtConstraint._create(
      "endAt",
      t,
      /*inclusive=*/
      true
    );
  }
  function __PRIVATE_newQueryBoundFromDocOrFields(t, e, r, n) {
    if (r[0] = getModularInstance(r[0]), r[0] instanceof DocumentSnapshot) return (function __PRIVATE_newQueryBoundFromDocument(t2, e2, r2, n2, i) {
      if (!n2) throw new FirestoreError(P, `Can't use a DocumentSnapshot that doesn't exist for ${r2}().`);
      const s = [];
      for (const r3 of __PRIVATE_queryNormalizedOrderBy(t2)) if (r3.field.isKeyField()) s.push(__PRIVATE_refValue(e2, n2.key));
      else {
        const t3 = n2.data.field(r3.field);
        if (__PRIVATE_isServerTimestamp(t3)) throw new FirestoreError(T, 'Invalid query. You are trying to start or end a query using a document for which the field "' + r3.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
        if (null === t3) {
          const t4 = r3.field.canonicalString();
          throw new FirestoreError(T, `Invalid query. You are trying to start or end a query using a document for which the field '${t4}' (used as the orderBy) does not exist.`);
        }
        s.push(t3);
      }
      return new Bound(s, i);
    })(t._query, t.firestore._databaseId, e, r[0]._document, n);
    {
      const i = __PRIVATE_newUserDataReader(t.firestore);
      return (function __PRIVATE_newQueryBoundFromFields(t2, e2, r2, n2, i2, s) {
        const o = t2.explicitOrderBy;
        if (i2.length > o.length) throw new FirestoreError(T, `Too many arguments provided to ${n2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
        const a = [];
        for (let s2 = 0; s2 < i2.length; s2++) {
          const u = i2[s2];
          if (o[s2].field.isKeyField()) {
            if ("string" != typeof u) throw new FirestoreError(T, `Invalid query. Expected a string for document ID in ${n2}(), but got a ${typeof u}`);
            if (!__PRIVATE_isCollectionGroupQuery(t2) && -1 !== u.indexOf("/")) throw new FirestoreError(T, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n2}() must be a plain document ID, but '${u}' contains a slash.`);
            const r3 = t2.path.child(ResourcePath.fromString(u));
            if (!DocumentKey.isDocumentKey(r3)) throw new FirestoreError(T, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n2}() must result in a valid document path, but '${r3}' is not because it contains an odd number of segments.`);
            const i3 = new DocumentKey(r3);
            a.push(__PRIVATE_refValue(e2, i3));
          } else {
            const t3 = __PRIVATE_parseQueryValue(r2, n2, u);
            a.push(t3);
          }
        }
        return new Bound(a, s);
      })(t._query, t.firestore._databaseId, i, e, r, n);
    }
  }
  function __PRIVATE_parseDocumentIdValue(t, e, r) {
    if ("string" == typeof (r = getModularInstance(r))) {
      if ("" === r) throw new FirestoreError(T, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
      if (!__PRIVATE_isCollectionGroupQuery(e) && -1 !== r.indexOf("/")) throw new FirestoreError(T, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);
      const n = e.path.child(ResourcePath.fromString(r));
      if (!DocumentKey.isDocumentKey(n)) throw new FirestoreError(T, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);
      return __PRIVATE_refValue(t, new DocumentKey(n));
    }
    if (r instanceof DocumentReference) return __PRIVATE_refValue(t, r._key);
    throw new FirestoreError(T, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(r)}.`);
  }
  function __PRIVATE_validateDisjunctiveFilterElements(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new FirestoreError(T, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
  }
  function __PRIVATE_validateNewFieldFilter(t, e) {
    const r = (function __PRIVATE_findOpInsideFilters(t2, e2) {
      for (const r2 of t2) for (const t3 of r2.getFlattenedFilters()) if (e2.indexOf(t3.op) >= 0) return t3.op;
      return null;
    })(t.filters, (function __PRIVATE_conflictingOps(t2) {
      switch (t2) {
        case "!=":
          return [
            "!=",
            "not-in"
            /* Operator.NOT_IN */
          ];
        case "array-contains-any":
        case "in":
          return [
            "not-in"
            /* Operator.NOT_IN */
          ];
        case "not-in":
          return [
            "array-contains-any",
            "in",
            "not-in",
            "!="
            /* Operator.NOT_EQUAL */
          ];
        default:
          return [];
      }
    })(e.op));
    if (null !== r)
      throw r === e.op ? new FirestoreError(T, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new FirestoreError(T, `Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`);
  }
  function __PRIVATE_validateQueryFilterConstraint(t, e) {
    if (!(e instanceof QueryFieldFilterConstraint || e instanceof QueryCompositeFilterConstraint)) throw new FirestoreError(T, `Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
  }
  function __PRIVATE_applyFirestoreDataConverter(t, e, r) {
    let n;
    return n = t ? r && (r.merge || r.mergeFields) ? t.toFirestore(e, r) : t.toFirestore(e) : e, n;
  }
  function getDoc(t) {
    const e = __PRIVATE_getDatastore((t = __PRIVATE_cast(t, DocumentReference)).firestore), r = new __PRIVATE_LiteUserDataWriter(t.firestore);
    return __PRIVATE_invokeBatchGetDocumentsRpc(e, [t._key]).then(((e2) => {
      __PRIVATE_hardAssert(1 === e2.length);
      const n = e2[0];
      return new DocumentSnapshot(t.firestore, r, t._key, n.isFoundDocument() ? n : null, t.converter);
    }));
  }
  function getDocs(t) {
    (function __PRIVATE_validateHasExplicitOrderByForLimitToLast(t2) {
      if ("L" === t2.limitType && 0 === t2.explicitOrderBy.length) throw new FirestoreError(v, "limitToLast() queries require specifying at least one orderBy() clause");
    })((t = __PRIVATE_cast(t, Query))._query);
    const e = __PRIVATE_getDatastore(t.firestore), r = new __PRIVATE_LiteUserDataWriter(t.firestore);
    return __PRIVATE_invokeRunQueryRpc(e, t._query).then(((e2) => {
      const n = e2.map(((e3) => new QueryDocumentSnapshot(t.firestore, r, e3.key, e3, t.converter)));
      return "L" === t._query.limitType && // Limit to last queries reverse the orderBy constraint that was
      // specified by the user. As such, we need to reverse the order of the
      // results to return the documents in the expected order.
      n.reverse(), new QuerySnapshot(t, n);
    }));
  }
  function setDoc(t, e, r) {
    const n = __PRIVATE_applyFirestoreDataConverter((t = __PRIVATE_cast(t, DocumentReference)).converter, e, r), i = __PRIVATE_parseSetData(__PRIVATE_newUserDataReader(t.firestore), "setDoc", t._key, n, null !== t.converter, r);
    return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [i.toMutation(t._key, Precondition.none())]);
  }
  function updateDoc(t, e, r, ...n) {
    const i = __PRIVATE_newUserDataReader((t = __PRIVATE_cast(t, DocumentReference)).firestore);
    let s;
    s = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(i, "updateDoc", t._key, e, r, n) : __PRIVATE_parseUpdateData(i, "updateDoc", t._key, e);
    return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [s.toMutation(t._key, Precondition.exists(true))]);
  }
  function deleteDoc(t) {
    return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore((t = __PRIVATE_cast(t, DocumentReference)).firestore), [new __PRIVATE_DeleteMutation(t._key, Precondition.none())]);
  }
  function addDoc(t, e) {
    const r = doc(t = __PRIVATE_cast(t, CollectionReference)), n = __PRIVATE_applyFirestoreDataConverter(t.converter, e), i = __PRIVATE_parseSetData(__PRIVATE_newUserDataReader(t.firestore), "addDoc", r._key, n, null !== r.converter, {});
    return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [i.toMutation(r._key, Precondition.exists(false))]).then((() => r));
  }
  function getCount(t) {
    return getAggregate(t, {
      count: count()
    });
  }
  function getAggregate(t, e) {
    const r = __PRIVATE_cast(t.firestore, Firestore), n = __PRIVATE_getDatastore(r), i = (function __PRIVATE_mapToArray(t2, e2) {
      const r2 = [];
      for (const n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && r2.push(e2(t2[n2], n2, t2));
      return r2;
    })(e, ((t2, e2) => new __PRIVATE_AggregateImpl(e2, t2.aggregateType, t2._internalFieldPath)));
    return __PRIVATE_invokeRunAggregationQueryRpc(n, t._query, i).then(((e2) => (function __PRIVATE_convertToAggregateQuerySnapshot(t2, e3, r2) {
      const n2 = new __PRIVATE_LiteUserDataWriter(t2);
      return new AggregateQuerySnapshot(e3, n2, r2);
    })(r, t, e2)));
  }
  function sum(t) {
    return new AggregateField("sum", __PRIVATE_fieldPathFromArgument$1("sum", t));
  }
  function average(t) {
    return new AggregateField("avg", __PRIVATE_fieldPathFromArgument$1("average", t));
  }
  function count() {
    return new AggregateField("count");
  }
  function aggregateFieldEqual(t, e) {
    var r, n;
    return t instanceof AggregateField && e instanceof AggregateField && t.aggregateType === e.aggregateType && (null === (r = t._internalFieldPath) || void 0 === r ? void 0 : r.canonicalString()) === (null === (n = e._internalFieldPath) || void 0 === n ? void 0 : n.canonicalString());
  }
  function aggregateQuerySnapshotEqual(t, e) {
    return queryEqual(t.query, e.query) && deepEqual(t.data(), e.data());
  }
  function deleteField() {
    return new __PRIVATE_DeleteFieldValueImpl("deleteField");
  }
  function serverTimestamp() {
    return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp");
  }
  function arrayUnion(...t) {
    return new __PRIVATE_ArrayUnionFieldValueImpl("arrayUnion", t);
  }
  function arrayRemove(...t) {
    return new __PRIVATE_ArrayRemoveFieldValueImpl("arrayRemove", t);
  }
  function increment(t) {
    return new __PRIVATE_NumericIncrementFieldValueImpl("increment", t);
  }
  function __PRIVATE_validateReference(t, e) {
    if ((t = getModularInstance(t)).firestore !== e) throw new FirestoreError(T, "Provided document reference is from a different Firestore instance.");
    return t;
  }
  function writeBatch(t) {
    const e = __PRIVATE_getDatastore(t = __PRIVATE_cast(t, Firestore));
    return new WriteBatch(t, ((t2) => __PRIVATE_invokeCommitRpc(e, t2)));
  }
  function getDocument() {
    return "undefined" != typeof document ? document : null;
  }
  function runTransaction(t, e, r) {
    const n = __PRIVATE_getDatastore(t = __PRIVATE_cast(t, Firestore)), i = Object.assign(Object.assign({}, z), r);
    !(function __PRIVATE_validateTransactionOptions(t2) {
      if (t2.maxAttempts < 1) throw new FirestoreError(T, "Max attempts must be at least 1");
    })(i);
    const s = new __PRIVATE_Deferred();
    return new __PRIVATE_TransactionRunner((function __PRIVATE_newAsyncQueue() {
      return new __PRIVATE_AsyncQueueImpl();
    })(), n, i, ((r2) => e(new Transaction(t, r2))), s).Tt(), s.promise;
  }
  var User, d, f, E, m, A, T, R, P, I, V, p, y, w, g, F, v, D, b, C, FirestoreError, __PRIVATE_Deferred, __PRIVATE_OAuthToken, __PRIVATE_EmptyAuthCredentialsProvider, __PRIVATE_EmulatorAuthCredentialsProvider, __PRIVATE_LiteAuthCredentialsProvider, __PRIVATE_FirstPartyToken, __PRIVATE_FirstPartyAuthCredentialsProvider, AppCheckToken, __PRIVATE_LiteAppCheckTokenProvider, DatabaseInfo, DatabaseId, BasePath, ResourcePath, S, FieldPath$1, DocumentKey, N, O, q, B, __PRIVATE_FetchConnection, __PRIVATE_AggregateImpl, __PRIVATE_AutoId, __PRIVATE_Base64DecodeError, ByteString, $, Timestamp, Q, Bound, Filter, FieldFilter, CompositeFilter, __PRIVATE_KeyFieldFilter, __PRIVATE_KeyFieldInFilter, __PRIVATE_KeyFieldNotInFilter, __PRIVATE_ArrayContainsFilter, __PRIVATE_InFilter, __PRIVATE_NotInFilter, __PRIVATE_ArrayContainsAnyFilter, OrderBy, SnapshotVersion, SortedMap, SortedMapIterator, LLRBNode, SortedSet, SortedSetIterator, FieldMask, ObjectValue, MutableDocument, __PRIVATE_TargetImpl, __PRIVATE_QueryImpl, TransformOperation, __PRIVATE_ServerTimestampTransform, __PRIVATE_ArrayUnionTransformOperation, __PRIVATE_ArrayRemoveTransformOperation, __PRIVATE_NumericIncrementTransformOperation, FieldTransform, Precondition, Mutation, __PRIVATE_SetMutation, __PRIVATE_PatchMutation, __PRIVATE_DeleteMutation, __PRIVATE_VerifyMutation, L, M, x, JsonProtoSerializer, __PRIVATE_ExponentialBackoff, __PRIVATE_DatastoreImpl, k, FirestoreSettingsImpl, Firestore, AggregateField, AggregateQuerySnapshot, Query, DocumentReference, CollectionReference, Bytes, FieldPath, FieldValue, GeoPoint, U, ParsedSetData, ParsedUpdateData, __PRIVATE_ParseContextImpl, __PRIVATE_UserDataReader, __PRIVATE_DeleteFieldValueImpl, __PRIVATE_ServerTimestampFieldValueImpl, __PRIVATE_ArrayUnionFieldValueImpl, __PRIVATE_ArrayRemoveFieldValueImpl, __PRIVATE_NumericIncrementFieldValueImpl, j, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot, AppliableConstraint, QueryConstraint, QueryFieldFilterConstraint, QueryCompositeFilterConstraint, QueryOrderByConstraint, QueryLimitConstraint, QueryStartAtConstraint, QueryEndAtConstraint, __PRIVATE_LiteUserDataWriter, WriteBatch, Transaction$1, z, __PRIVATE_TransactionRunner, DelayedOperation, __PRIVATE_AsyncQueueImpl, Transaction;
  var init_index_browser_esm2017 = __esm({
    "node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js"() {
      init_index_esm20174();
      init_index_esm20172();
      init_index_esm20173();
      init_index_esm2017();
      User = class {
        constructor(t) {
          this.uid = t;
        }
        isAuthenticated() {
          return null != this.uid;
        }
        /**
         * Returns a key representing this user, suitable for inclusion in a
         * dictionary.
         */
        toKey() {
          return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }
        isEqual(t) {
          return t.uid === this.uid;
        }
      };
      User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
      // non-FirebaseAuth providers.
      User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
      d = "10.12.5";
      f = new Logger("@firebase/firestore");
      E = "ok";
      m = "cancelled";
      A = "unknown";
      T = "invalid-argument";
      R = "deadline-exceeded";
      P = "not-found";
      I = "already-exists";
      V = "permission-denied";
      p = "unauthenticated";
      y = "resource-exhausted";
      w = "failed-precondition";
      g = "aborted";
      F = "out-of-range";
      v = "unimplemented";
      D = "internal";
      b = "unavailable";
      C = "data-loss";
      FirestoreError = class extends FirebaseError {
        /** @hideconstructor */
        constructor(t, e) {
          super(t, e), this.code = t, this.message = e, // HACK: We write a toString property directly because Error is not a real
          // class and so inheritance does not work correctly. We could alternatively
          // do the same "back-door inheritance" trick that FirebaseError does.
          this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
        }
      };
      __PRIVATE_Deferred = class {
        constructor() {
          this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e;
          }));
        }
      };
      __PRIVATE_OAuthToken = class {
        constructor(t, e) {
          this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t}`);
        }
      };
      __PRIVATE_EmptyAuthCredentialsProvider = class {
        getToken() {
          return Promise.resolve(null);
        }
        invalidateToken() {
        }
        start(t, e) {
          t.enqueueRetryable((() => e(User.UNAUTHENTICATED)));
        }
        shutdown() {
        }
      };
      __PRIVATE_EmulatorAuthCredentialsProvider = class {
        constructor(t) {
          this.token = t, /**
           * Stores the listener registered with setChangeListener()
           * This isn't actually necessary since the UID never changes, but we use this
           * to verify the listen contract is adhered to in tests.
           */
          this.changeListener = null;
        }
        getToken() {
          return Promise.resolve(this.token);
        }
        invalidateToken() {
        }
        start(t, e) {
          this.changeListener = e, // Fire with initial user.
          t.enqueueRetryable((() => e(this.token.user)));
        }
        shutdown() {
          this.changeListener = null;
        }
      };
      __PRIVATE_LiteAuthCredentialsProvider = class {
        constructor(t) {
          this.auth = null, t.onInit(((t2) => {
            this.auth = t2;
          }));
        }
        getToken() {
          return this.auth ? this.auth.getToken().then(((t) => t ? (__PRIVATE_hardAssert("string" == typeof t.accessToken), new __PRIVATE_OAuthToken(t.accessToken, new User(this.auth.getUid()))) : null)) : Promise.resolve(null);
        }
        invalidateToken() {
        }
        start(t, e) {
        }
        shutdown() {
        }
      };
      __PRIVATE_FirstPartyToken = class {
        constructor(t, e, r) {
          this.t = t, this.i = e, this.o = r, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.u = /* @__PURE__ */ new Map();
        }
        /**
         * Gets an authorization token, using a provided factory function, or return
         * null.
         */
        l() {
          return this.o ? this.o() : null;
        }
        get headers() {
          this.u.set("X-Goog-AuthUser", this.t);
          const t = this.l();
          return t && this.u.set("Authorization", t), this.i && this.u.set("X-Goog-Iam-Authorization-Token", this.i), this.u;
        }
      };
      __PRIVATE_FirstPartyAuthCredentialsProvider = class {
        constructor(t, e, r) {
          this.t = t, this.i = e, this.o = r;
        }
        getToken() {
          return Promise.resolve(new __PRIVATE_FirstPartyToken(this.t, this.i, this.o));
        }
        start(t, e) {
          t.enqueueRetryable((() => e(User.FIRST_PARTY)));
        }
        shutdown() {
        }
        invalidateToken() {
        }
      };
      AppCheckToken = class {
        constructor(t) {
          this.value = t, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
        }
      };
      __PRIVATE_LiteAppCheckTokenProvider = class {
        constructor(t) {
          this.h = t, this.appCheck = null, t.onInit(((t2) => {
            this.appCheck = t2;
          }));
        }
        getToken() {
          return this.appCheck ? this.appCheck.getToken().then(((t) => t ? (__PRIVATE_hardAssert("string" == typeof t.token), new AppCheckToken(t.token)) : null)) : Promise.resolve(null);
        }
        invalidateToken() {
        }
        start(t, e) {
        }
        shutdown() {
        }
      };
      DatabaseInfo = class {
        /**
         * Constructs a DatabaseInfo using the provided host, databaseId and
         * persistenceKey.
         *
         * @param databaseId - The database to use.
         * @param appId - The Firebase App Id.
         * @param persistenceKey - A unique identifier for this Firestore's local
         * storage (used in conjunction with the databaseId).
         * @param host - The Firestore backend host to connect to.
         * @param ssl - Whether to use SSL when connecting.
         * @param forceLongPolling - Whether to use the forceLongPolling option
         * when using WebChannel as the network transport.
         * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
         * option when using WebChannel as the network transport.
         * @param longPollingOptions Options that configure long-polling.
         * @param useFetchStreams Whether to use the Fetch API instead of
         * XMLHTTPRequest
         */
        constructor(t, e, r, n, i, s, o, a, u) {
          this.databaseId = t, this.appId = e, this.persistenceKey = r, this.host = n, this.ssl = i, this.forceLongPolling = s, this.autoDetectLongPolling = o, this.longPollingOptions = a, this.useFetchStreams = u;
        }
      };
      DatabaseId = class _DatabaseId {
        constructor(t, e) {
          this.projectId = t, this.database = e || "(default)";
        }
        static empty() {
          return new _DatabaseId("", "");
        }
        get isDefaultDatabase() {
          return "(default)" === this.database;
        }
        isEqual(t) {
          return t instanceof _DatabaseId && t.projectId === this.projectId && t.database === this.database;
        }
      };
      BasePath = class _BasePath {
        constructor(t, e, r) {
          void 0 === e ? e = 0 : e > t.length && fail(), void 0 === r ? r = t.length - e : r > t.length - e && fail(), this.segments = t, this.offset = e, this.len = r;
        }
        get length() {
          return this.len;
        }
        isEqual(t) {
          return 0 === _BasePath.comparator(this, t);
        }
        child(t) {
          const e = this.segments.slice(this.offset, this.limit());
          return t instanceof _BasePath ? t.forEach(((t2) => {
            e.push(t2);
          })) : e.push(t), this.construct(e);
        }
        /** The index of one past the last segment of the path. */
        limit() {
          return this.offset + this.length;
        }
        popFirst(t) {
          return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
        }
        popLast() {
          return this.construct(this.segments, this.offset, this.length - 1);
        }
        firstSegment() {
          return this.segments[this.offset];
        }
        lastSegment() {
          return this.get(this.length - 1);
        }
        get(t) {
          return this.segments[this.offset + t];
        }
        isEmpty() {
          return 0 === this.length;
        }
        isPrefixOf(t) {
          if (t.length < this.length) return false;
          for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return false;
          return true;
        }
        isImmediateParentOf(t) {
          if (this.length + 1 !== t.length) return false;
          for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return false;
          return true;
        }
        forEach(t) {
          for (let e = this.offset, r = this.limit(); e < r; e++) t(this.segments[e]);
        }
        toArray() {
          return this.segments.slice(this.offset, this.limit());
        }
        static comparator(t, e) {
          const r = Math.min(t.length, e.length);
          for (let n = 0; n < r; n++) {
            const r2 = t.get(n), i = e.get(n);
            if (r2 < i) return -1;
            if (r2 > i) return 1;
          }
          return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
        }
      };
      ResourcePath = class _ResourcePath extends BasePath {
        construct(t, e, r) {
          return new _ResourcePath(t, e, r);
        }
        canonicalString() {
          return this.toArray().join("/");
        }
        toString() {
          return this.canonicalString();
        }
        /**
         * Returns a string representation of this path
         * where each path segment has been encoded with
         * `encodeURIComponent`.
         */
        toUriEncodedString() {
          return this.toArray().map(encodeURIComponent).join("/");
        }
        /**
         * Creates a resource path from the given slash-delimited string. If multiple
         * arguments are provided, all components are combined. Leading and trailing
         * slashes from all components are ignored.
         */
        static fromString(...t) {
          const e = [];
          for (const r of t) {
            if (r.indexOf("//") >= 0) throw new FirestoreError(T, `Invalid segment (${r}). Paths must not contain // in them.`);
            e.push(...r.split("/").filter(((t2) => t2.length > 0)));
          }
          return new _ResourcePath(e);
        }
        static emptyPath() {
          return new _ResourcePath([]);
        }
      };
      S = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
      FieldPath$1 = class _FieldPath$1 extends BasePath {
        construct(t, e, r) {
          return new _FieldPath$1(t, e, r);
        }
        /**
         * Returns true if the string could be used as a segment in a field path
         * without escaping.
         */
        static isValidIdentifier(t) {
          return S.test(t);
        }
        canonicalString() {
          return this.toArray().map(((t) => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
        }
        toString() {
          return this.canonicalString();
        }
        /**
         * Returns true if this field references the key of a document.
         */
        isKeyField() {
          return 1 === this.length && "__name__" === this.get(0);
        }
        /**
         * The field designating the key of a document.
         */
        static keyField() {
          return new _FieldPath$1(["__name__"]);
        }
        /**
         * Parses a field string from the given server-formatted string.
         *
         * - Splitting the empty string is not allowed (for now at least).
         * - Empty segments within the string (e.g. if there are two consecutive
         *   separators) are not allowed.
         *
         * TODO(b/37244157): we should make this more strict. Right now, it allows
         * non-identifier path components, even if they aren't escaped.
         */
        static fromServerFormat(t) {
          const e = [];
          let r = "", n = 0;
          const __PRIVATE_addCurrentSegment = () => {
            if (0 === r.length) throw new FirestoreError(T, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(r), r = "";
          };
          let i = false;
          for (; n < t.length; ) {
            const e2 = t[n];
            if ("\\" === e2) {
              if (n + 1 === t.length) throw new FirestoreError(T, "Path has trailing escape character: " + t);
              const e3 = t[n + 1];
              if ("\\" !== e3 && "." !== e3 && "`" !== e3) throw new FirestoreError(T, "Path has invalid escape sequence: " + t);
              r += e3, n += 2;
            } else "`" === e2 ? (i = !i, n++) : "." !== e2 || i ? (r += e2, n++) : (__PRIVATE_addCurrentSegment(), n++);
          }
          if (__PRIVATE_addCurrentSegment(), i) throw new FirestoreError(T, "Unterminated ` in path: " + t);
          return new _FieldPath$1(e);
        }
        static emptyPath() {
          return new _FieldPath$1([]);
        }
      };
      DocumentKey = class _DocumentKey {
        constructor(t) {
          this.path = t;
        }
        static fromPath(t) {
          return new _DocumentKey(ResourcePath.fromString(t));
        }
        static fromName(t) {
          return new _DocumentKey(ResourcePath.fromString(t).popFirst(5));
        }
        static empty() {
          return new _DocumentKey(ResourcePath.emptyPath());
        }
        get collectionGroup() {
          return this.path.popLast().lastSegment();
        }
        /** Returns true if the document is in the specified collectionId. */
        hasCollectionId(t) {
          return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
        }
        /** Returns the collection group (i.e. the name of the parent collection) for this key. */
        getCollectionGroup() {
          return this.path.get(this.path.length - 2);
        }
        /** Returns the fully qualified path to the parent collection. */
        getCollectionPath() {
          return this.path.popLast();
        }
        isEqual(t) {
          return null !== t && 0 === ResourcePath.comparator(this.path, t.path);
        }
        toString() {
          return this.path.toString();
        }
        static comparator(t, e) {
          return ResourcePath.comparator(t.path, e.path);
        }
        static isDocumentKey(t) {
          return t.length % 2 == 0;
        }
        /**
         * Creates and returns a new document key with the given segments.
         *
         * @param segments - The segments of the path to the document
         * @returns A new instance of DocumentKey
         */
        static fromSegments(t) {
          return new _DocumentKey(new ResourcePath(t.slice()));
        }
      };
      N = null;
      O = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery",
        RunAggregationQuery: "runAggregationQuery"
      };
      (B = q || (q = {}))[B.OK = 0] = "OK", B[B.CANCELLED = 1] = "CANCELLED", B[B.UNKNOWN = 2] = "UNKNOWN", B[B.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", B[B.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", B[B.NOT_FOUND = 5] = "NOT_FOUND", B[B.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", B[B.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", B[B.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", B[B.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", B[B.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", B[B.ABORTED = 10] = "ABORTED", B[B.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", B[B.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", B[B.INTERNAL = 13] = "INTERNAL", B[B.UNAVAILABLE = 14] = "UNAVAILABLE", B[B.DATA_LOSS = 15] = "DATA_LOSS";
      __PRIVATE_FetchConnection = class extends /**
       * Base class for all Rest-based connections to the backend (WebChannel and
       * HTTP).
       */
      class __PRIVATE_RestConnection {
        constructor(t) {
          this.databaseInfo = t, this.databaseId = t.databaseId;
          const e = t.ssl ? "https" : "http", r = encodeURIComponent(this.databaseId.projectId), n = encodeURIComponent(this.databaseId.database);
          this.m = e + "://" + t.host, this.A = `projects/${r}/databases/${n}`, this.T = "(default)" === this.databaseId.database ? `project_id=${r}` : `project_id=${r}&database_id=${n}`;
        }
        get R() {
          return false;
        }
        P(t, e, r, n, i) {
          const s = __PRIVATE_generateUniqueDebugId(), o = this.I(t, e.toUriEncodedString());
          __PRIVATE_logDebug("RestConnection", `Sending RPC '${t}' ${s}:`, o, r);
          const a = {
            "google-cloud-resource-prefix": this.A,
            "x-goog-request-params": this.T
          };
          return this.V(a, n, i), this.p(t, o, a, r).then(((e2) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${t}' ${s}: `, e2), e2)), ((e2) => {
            throw __PRIVATE_logWarn("RestConnection", `RPC '${t}' ${s} failed with error: `, e2, "url: ", o, "request:", r), e2;
          }));
        }
        g(t, e, r, n, i, s) {
          return this.P(t, e, r, n, i);
        }
        /**
         * Modifies the headers for a request, adding any authorization token if
         * present and any additional headers for the request.
         */
        V(t, e, r) {
          t["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
          // so we need to get its value when we need it in a function.
          (function __PRIVATE_getGoogApiClientValue() {
            return "gl-js/ fire/" + d;
          })(), // Content-Type: text/plain will avoid preflight requests which might
          // mess with CORS and redirects by proxies. If we add custom headers
          // we will need to change this code to potentially use the $httpOverwrite
          // parameter supported by ESF to avoid triggering preflight requests.
          t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), e && e.headers.forEach(((e2, r2) => t[r2] = e2)), r && r.headers.forEach(((e2, r2) => t[r2] = e2));
        }
        I(t, e) {
          const r = O[t];
          return `${this.m}/v1/${e}:${r}`;
        }
        /**
         * Closes and cleans up any resources associated with the connection. This
         * implementation is a no-op because there are no resources associated
         * with the RestConnection that need to be cleaned up.
         */
        terminate() {
        }
      } {
        /**
         * @param databaseInfo - The connection info.
         * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
         */
        constructor(t, e) {
          super(t), this.F = e;
        }
        v(t, e) {
          throw new Error("Not supported by FetchConnection");
        }
        async p(t, e, r, n) {
          var i;
          const s = JSON.stringify(n);
          let o;
          try {
            o = await this.F(e, {
              method: "POST",
              headers: r,
              body: s
            });
          } catch (t2) {
            const e2 = t2;
            throw new FirestoreError(__PRIVATE_mapCodeFromHttpStatus(e2.status), "Request failed with error: " + e2.statusText);
          }
          if (!o.ok) {
            let t2 = await o.json();
            Array.isArray(t2) && (t2 = t2[0]);
            const e2 = null === (i = null == t2 ? void 0 : t2.error) || void 0 === i ? void 0 : i.message;
            throw new FirestoreError(__PRIVATE_mapCodeFromHttpStatus(o.status), `Request failed with error: ${null != e2 ? e2 : o.statusText}`);
          }
          return o.json();
        }
      };
      __PRIVATE_AggregateImpl = class {
        constructor(t, e, r) {
          this.alias = t, this.aggregateType = e, this.fieldPath = r;
        }
      };
      __PRIVATE_AutoId = class {
        static newId() {
          const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
          let r = "";
          for (; r.length < 20; ) {
            const n = __PRIVATE_randomBytes(40);
            for (let i = 0; i < n.length; ++i)
              r.length < 20 && n[i] < e && (r += t.charAt(n[i] % t.length));
          }
          return r;
        }
      };
      __PRIVATE_Base64DecodeError = class extends Error {
        constructor() {
          super(...arguments), this.name = "Base64DecodeError";
        }
      };
      ByteString = class _ByteString {
        constructor(t) {
          this.binaryString = t;
        }
        static fromBase64String(t) {
          const e = (function __PRIVATE_decodeBase64(t2) {
            try {
              return atob(t2);
            } catch (t3) {
              throw "undefined" != typeof DOMException && t3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + t3) : t3;
            }
          })(t);
          return new _ByteString(e);
        }
        static fromUint8Array(t) {
          const e = (
            /**
            * Helper function to convert an Uint8array to a binary string.
            */
            (function __PRIVATE_binaryStringFromUint8Array(t2) {
              let e2 = "";
              for (let r = 0; r < t2.length; ++r) e2 += String.fromCharCode(t2[r]);
              return e2;
            })(t)
          );
          return new _ByteString(e);
        }
        [Symbol.iterator]() {
          let t = 0;
          return {
            next: () => t < this.binaryString.length ? {
              value: this.binaryString.charCodeAt(t++),
              done: false
            } : {
              value: void 0,
              done: true
            }
          };
        }
        toBase64() {
          return (function __PRIVATE_encodeBase64(t) {
            return btoa(t);
          })(this.binaryString);
        }
        toUint8Array() {
          return (function __PRIVATE_uint8ArrayFromBinaryString(t) {
            const e = new Uint8Array(t.length);
            for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
            return e;
          })(this.binaryString);
        }
        approximateByteSize() {
          return 2 * this.binaryString.length;
        }
        compareTo(t) {
          return __PRIVATE_primitiveComparator(this.binaryString, t.binaryString);
        }
        isEqual(t) {
          return this.binaryString === t.binaryString;
        }
      };
      ByteString.EMPTY_BYTE_STRING = new ByteString("");
      $ = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      Timestamp = class _Timestamp {
        /**
         * Creates a new timestamp.
         *
         * @param seconds - The number of seconds of UTC time since Unix epoch
         *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         *     9999-12-31T23:59:59Z inclusive.
         * @param nanoseconds - The non-negative fractions of a second at nanosecond
         *     resolution. Negative second values with fractions must still have
         *     non-negative nanoseconds values that count forward in time. Must be
         *     from 0 to 999,999,999 inclusive.
         */
        constructor(t, e) {
          if (this.seconds = t, this.nanoseconds = e, e < 0) throw new FirestoreError(T, "Timestamp nanoseconds out of range: " + e);
          if (e >= 1e9) throw new FirestoreError(T, "Timestamp nanoseconds out of range: " + e);
          if (t < -62135596800) throw new FirestoreError(T, "Timestamp seconds out of range: " + t);
          if (t >= 253402300800) throw new FirestoreError(T, "Timestamp seconds out of range: " + t);
        }
        /**
         * Creates a new timestamp with the current date, with millisecond precision.
         *
         * @returns a new timestamp representing the current date.
         */
        static now() {
          return _Timestamp.fromMillis(Date.now());
        }
        /**
         * Creates a new timestamp from the given date.
         *
         * @param date - The date to initialize the `Timestamp` from.
         * @returns A new `Timestamp` representing the same point in time as the given
         *     date.
         */
        static fromDate(t) {
          return _Timestamp.fromMillis(t.getTime());
        }
        /**
         * Creates a new timestamp from the given number of milliseconds.
         *
         * @param milliseconds - Number of milliseconds since Unix epoch
         *     1970-01-01T00:00:00Z.
         * @returns A new `Timestamp` representing the same point in time as the given
         *     number of milliseconds.
         */
        static fromMillis(t) {
          const e = Math.floor(t / 1e3), r = Math.floor(1e6 * (t - 1e3 * e));
          return new _Timestamp(e, r);
        }
        /**
         * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
         * causes a loss of precision since `Date` objects only support millisecond
         * precision.
         *
         * @returns JavaScript `Date` object representing the same point in time as
         *     this `Timestamp`, with millisecond precision.
         */
        toDate() {
          return new Date(this.toMillis());
        }
        /**
         * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
         * epoch). This operation causes a loss of precision.
         *
         * @returns The point in time corresponding to this timestamp, represented as
         *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
         */
        toMillis() {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }
        _compareTo(t) {
          return this.seconds === t.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, t.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, t.seconds);
        }
        /**
         * Returns true if this `Timestamp` is equal to the provided one.
         *
         * @param other - The `Timestamp` to compare against.
         * @returns true if this `Timestamp` is equal to the provided one.
         */
        isEqual(t) {
          return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
        }
        /** Returns a textual representation of this `Timestamp`. */
        toString() {
          return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
        }
        /** Returns a JSON-serializable representation of this `Timestamp`. */
        toJSON() {
          return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
          };
        }
        /**
         * Converts this object to a primitive string, which allows `Timestamp` objects
         * to be compared using the `>`, `<=`, `>=` and `>` operators.
         */
        valueOf() {
          const t = this.seconds - -62135596800;
          return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
        }
      };
      Q = {
        fields: {
          __type__: {
            stringValue: "__max__"
          }
        }
      };
      Bound = class {
        constructor(t, e) {
          this.position = t, this.inclusive = e;
        }
      };
      Filter = class {
      };
      FieldFilter = class _FieldFilter extends Filter {
        constructor(t, e, r) {
          super(), this.field = t, this.op = e, this.value = r;
        }
        /**
         * Creates a filter based on the provided arguments.
         */
        static create(t, e, r) {
          return t.isKeyField() ? "in" === e || "not-in" === e ? this.createKeyFieldInFilter(t, e, r) : new __PRIVATE_KeyFieldFilter(t, e, r) : "array-contains" === e ? new __PRIVATE_ArrayContainsFilter(t, r) : "in" === e ? new __PRIVATE_InFilter(t, r) : "not-in" === e ? new __PRIVATE_NotInFilter(t, r) : "array-contains-any" === e ? new __PRIVATE_ArrayContainsAnyFilter(t, r) : new _FieldFilter(t, e, r);
        }
        static createKeyFieldInFilter(t, e, r) {
          return "in" === e ? new __PRIVATE_KeyFieldInFilter(t, r) : new __PRIVATE_KeyFieldNotInFilter(t, r);
        }
        matches(t) {
          const e = t.data.field(this.field);
          return "!=" === this.op ? null !== e && this.matchesComparison(__PRIVATE_valueCompare(e, this.value)) : null !== e && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(e) && this.matchesComparison(__PRIVATE_valueCompare(e, this.value));
        }
        matchesComparison(t) {
          switch (this.op) {
            case "<":
              return t < 0;
            case "<=":
              return t <= 0;
            case "==":
              return 0 === t;
            case "!=":
              return 0 !== t;
            case ">":
              return t > 0;
            case ">=":
              return t >= 0;
            default:
              return fail();
          }
        }
        isInequality() {
          return [
            "<",
            "<=",
            ">",
            ">=",
            "!=",
            "not-in"
            /* Operator.NOT_IN */
          ].indexOf(this.op) >= 0;
        }
        getFlattenedFilters() {
          return [this];
        }
        getFilters() {
          return [this];
        }
      };
      CompositeFilter = class _CompositeFilter extends Filter {
        constructor(t, e) {
          super(), this.filters = t, this.op = e, this.D = null;
        }
        /**
         * Creates a filter based on the provided arguments.
         */
        static create(t, e) {
          return new _CompositeFilter(t, e);
        }
        matches(t) {
          return (function __PRIVATE_compositeFilterIsConjunction(t2) {
            return "and" === t2.op;
          })(this) ? void 0 === this.filters.find(((e) => !e.matches(t))) : void 0 !== this.filters.find(((e) => e.matches(t)));
        }
        getFlattenedFilters() {
          return null !== this.D || (this.D = this.filters.reduce(((t, e) => t.concat(e.getFlattenedFilters())), [])), this.D;
        }
        // Returns a mutable copy of `this.filters`
        getFilters() {
          return Object.assign([], this.filters);
        }
      };
      __PRIVATE_KeyFieldFilter = class extends FieldFilter {
        constructor(t, e, r) {
          super(t, e, r), this.key = DocumentKey.fromName(r.referenceValue);
        }
        matches(t) {
          const e = DocumentKey.comparator(t.key, this.key);
          return this.matchesComparison(e);
        }
      };
      __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
        constructor(t, e) {
          super(t, "in", e), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", e);
        }
        matches(t) {
          return this.keys.some(((e) => e.isEqual(t.key)));
        }
      };
      __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
        constructor(t, e) {
          super(t, "not-in", e), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", e);
        }
        matches(t) {
          return !this.keys.some(((e) => e.isEqual(t.key)));
        }
      };
      __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
        constructor(t, e) {
          super(t, "array-contains", e);
        }
        matches(t) {
          const e = t.data.field(this.field);
          return isArray(e) && __PRIVATE_arrayValueContains(e.arrayValue, this.value);
        }
      };
      __PRIVATE_InFilter = class extends FieldFilter {
        constructor(t, e) {
          super(t, "in", e);
        }
        matches(t) {
          const e = t.data.field(this.field);
          return null !== e && __PRIVATE_arrayValueContains(this.value.arrayValue, e);
        }
      };
      __PRIVATE_NotInFilter = class extends FieldFilter {
        constructor(t, e) {
          super(t, "not-in", e);
        }
        matches(t) {
          if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
          })) return false;
          const e = t.data.field(this.field);
          return null !== e && !__PRIVATE_arrayValueContains(this.value.arrayValue, e);
        }
      };
      __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
        constructor(t, e) {
          super(t, "array-contains-any", e);
        }
        matches(t) {
          const e = t.data.field(this.field);
          return !(!isArray(e) || !e.arrayValue.values) && e.arrayValue.values.some(((t2) => __PRIVATE_arrayValueContains(this.value.arrayValue, t2)));
        }
      };
      OrderBy = class {
        constructor(t, e = "asc") {
          this.field = t, this.dir = e;
        }
      };
      SnapshotVersion = class _SnapshotVersion {
        constructor(t) {
          this.timestamp = t;
        }
        static fromTimestamp(t) {
          return new _SnapshotVersion(t);
        }
        static min() {
          return new _SnapshotVersion(new Timestamp(0, 0));
        }
        static max() {
          return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
        }
        compareTo(t) {
          return this.timestamp._compareTo(t.timestamp);
        }
        isEqual(t) {
          return this.timestamp.isEqual(t.timestamp);
        }
        /** Returns a number representation of the version for use in spec tests. */
        toMicroseconds() {
          return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
        }
        toString() {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }
        toTimestamp() {
          return this.timestamp;
        }
      };
      SortedMap = class _SortedMap {
        constructor(t, e) {
          this.comparator = t, this.root = e || LLRBNode.EMPTY;
        }
        // Returns a copy of the map, with the specified key/value added or replaced.
        insert(t, e) {
          return new _SortedMap(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
        }
        // Returns a copy of the map, with the specified key removed.
        remove(t) {
          return new _SortedMap(this.comparator, this.root.remove(t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
        }
        // Returns the value of the node with the given key, or null.
        get(t) {
          let e = this.root;
          for (; !e.isEmpty(); ) {
            const r = this.comparator(t, e.key);
            if (0 === r) return e.value;
            r < 0 ? e = e.left : r > 0 && (e = e.right);
          }
          return null;
        }
        // Returns the index of the element in this sorted map, or -1 if it doesn't
        // exist.
        indexOf(t) {
          let e = 0, r = this.root;
          for (; !r.isEmpty(); ) {
            const n = this.comparator(t, r.key);
            if (0 === n) return e + r.left.size;
            n < 0 ? r = r.left : (
              // Count all nodes left of the node plus the node itself
              (e += r.left.size + 1, r = r.right)
            );
          }
          return -1;
        }
        isEmpty() {
          return this.root.isEmpty();
        }
        // Returns the total number of nodes in the map.
        get size() {
          return this.root.size;
        }
        // Returns the minimum key in the map.
        minKey() {
          return this.root.minKey();
        }
        // Returns the maximum key in the map.
        maxKey() {
          return this.root.maxKey();
        }
        // Traverses the map in key order and calls the specified action function
        // for each key/value pair. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        inorderTraversal(t) {
          return this.root.inorderTraversal(t);
        }
        forEach(t) {
          this.inorderTraversal(((e, r) => (t(e, r), false)));
        }
        toString() {
          const t = [];
          return this.inorderTraversal(((e, r) => (t.push(`${e}:${r}`), false))), `{${t.join(", ")}}`;
        }
        // Traverses the map in reverse key order and calls the specified action
        // function for each key/value pair. If action returns true, traversal is
        // aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        reverseTraversal(t) {
          return this.root.reverseTraversal(t);
        }
        // Returns an iterator over the SortedMap.
        getIterator() {
          return new SortedMapIterator(this.root, null, this.comparator, false);
        }
        getIteratorFrom(t) {
          return new SortedMapIterator(this.root, t, this.comparator, false);
        }
        getReverseIterator() {
          return new SortedMapIterator(this.root, null, this.comparator, true);
        }
        getReverseIteratorFrom(t) {
          return new SortedMapIterator(this.root, t, this.comparator, true);
        }
      };
      SortedMapIterator = class {
        constructor(t, e, r, n) {
          this.isReverse = n, this.nodeStack = [];
          let i = 1;
          for (; !t.isEmpty(); ) if (i = e ? r(t.key, e) : 1, // flip the comparison if we're going in reverse
          e && n && (i *= -1), i < 0)
            t = this.isReverse ? t.left : t.right;
          else {
            if (0 === i) {
              this.nodeStack.push(t);
              break;
            }
            this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
          }
        }
        getNext() {
          let t = this.nodeStack.pop();
          const e = {
            key: t.key,
            value: t.value
          };
          if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right;
          else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), t = t.left;
          return e;
        }
        hasNext() {
          return this.nodeStack.length > 0;
        }
        peek() {
          if (0 === this.nodeStack.length) return null;
          const t = this.nodeStack[this.nodeStack.length - 1];
          return {
            key: t.key,
            value: t.value
          };
        }
      };
      LLRBNode = class _LLRBNode {
        constructor(t, e, r, n, i) {
          this.key = t, this.value = e, this.color = null != r ? r : _LLRBNode.RED, this.left = null != n ? n : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
        }
        // Returns a copy of the current node, optionally replacing pieces of it.
        copy(t, e, r, n, i) {
          return new _LLRBNode(null != t ? t : this.key, null != e ? e : this.value, null != r ? r : this.color, null != n ? n : this.left, null != i ? i : this.right);
        }
        isEmpty() {
          return false;
        }
        // Traverses the tree in key order and calls the specified action function
        // for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        inorderTraversal(t) {
          return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
        }
        // Traverses the tree in reverse key order and calls the specified action
        // function for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        reverseTraversal(t) {
          return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
        }
        // Returns the minimum node in the tree.
        min() {
          return this.left.isEmpty() ? this : this.left.min();
        }
        // Returns the maximum key in the tree.
        minKey() {
          return this.min().key;
        }
        // Returns the maximum key in the tree.
        maxKey() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        // Returns new tree, with the key/value added.
        insert(t, e, r) {
          let n = this;
          const i = r(t, n.key);
          return n = i < 0 ? n.copy(null, null, null, n.left.insert(t, e, r), null) : 0 === i ? n.copy(null, e, null, null, null) : n.copy(null, null, null, null, n.right.insert(t, e, r)), n.fixUp();
        }
        removeMin() {
          if (this.left.isEmpty()) return _LLRBNode.EMPTY;
          let t = this;
          return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp();
        }
        // Returns new tree, with the specified item removed.
        remove(t, e) {
          let r, n = this;
          if (e(t, n.key) < 0) n.left.isEmpty() || n.left.isRed() || n.left.left.isRed() || (n = n.moveRedLeft()), n = n.copy(null, null, null, n.left.remove(t, e), null);
          else {
            if (n.left.isRed() && (n = n.rotateRight()), n.right.isEmpty() || n.right.isRed() || n.right.left.isRed() || (n = n.moveRedRight()), 0 === e(t, n.key)) {
              if (n.right.isEmpty()) return _LLRBNode.EMPTY;
              r = n.right.min(), n = n.copy(r.key, r.value, null, null, n.right.removeMin());
            }
            n = n.copy(null, null, null, null, n.right.remove(t, e));
          }
          return n.fixUp();
        }
        isRed() {
          return this.color;
        }
        // Returns new tree after performing any needed rotations.
        fixUp() {
          let t = this;
          return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
        }
        moveRedLeft() {
          let t = this.colorFlip();
          return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t;
        }
        moveRedRight() {
          let t = this.colorFlip();
          return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
        }
        rotateLeft() {
          const t = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, t, null);
        }
        rotateRight() {
          const t = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, t);
        }
        colorFlip() {
          const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e);
        }
        // For testing.
        checkMaxDepth() {
          const t = this.check();
          return Math.pow(2, t) <= this.size + 1;
        }
        // In a balanced RB tree, the black-depth (number of black nodes) from root to
        // leaves is equal on both sides.  This function verifies that or asserts.
        check() {
          if (this.isRed() && this.left.isRed()) throw fail();
          if (this.right.isRed()) throw fail();
          const t = this.left.check();
          if (t !== this.right.check()) throw fail();
          return t + (this.isRed() ? 0 : 1);
        }
      };
      LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
      LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
      class LLRBEmptyNode {
        constructor() {
          this.size = 0;
        }
        get key() {
          throw fail();
        }
        get value() {
          throw fail();
        }
        get color() {
          throw fail();
        }
        get left() {
          throw fail();
        }
        get right() {
          throw fail();
        }
        // Returns a copy of the current node.
        copy(t, e, r, n, i) {
          return this;
        }
        // Returns a copy of the tree, with the specified key/value added.
        insert(t, e, r) {
          return new LLRBNode(t, e);
        }
        // Returns a copy of the tree, with the specified key removed.
        remove(t, e) {
          return this;
        }
        isEmpty() {
          return true;
        }
        inorderTraversal(t) {
          return false;
        }
        reverseTraversal(t) {
          return false;
        }
        minKey() {
          return null;
        }
        maxKey() {
          return null;
        }
        isRed() {
          return false;
        }
        // For testing.
        checkMaxDepth() {
          return true;
        }
        check() {
          return 0;
        }
      }();
      SortedSet = class _SortedSet {
        constructor(t) {
          this.comparator = t, this.data = new SortedMap(this.comparator);
        }
        has(t) {
          return null !== this.data.get(t);
        }
        first() {
          return this.data.minKey();
        }
        last() {
          return this.data.maxKey();
        }
        get size() {
          return this.data.size;
        }
        indexOf(t) {
          return this.data.indexOf(t);
        }
        /** Iterates elements in order defined by "comparator" */
        forEach(t) {
          this.data.inorderTraversal(((e, r) => (t(e), false)));
        }
        /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
        forEachInRange(t, e) {
          const r = this.data.getIteratorFrom(t[0]);
          for (; r.hasNext(); ) {
            const n = r.getNext();
            if (this.comparator(n.key, t[1]) >= 0) return;
            e(n.key);
          }
        }
        /**
         * Iterates over `elem`s such that: start &lt;= elem until false is returned.
         */
        forEachWhile(t, e) {
          let r;
          for (r = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); r.hasNext(); ) {
            if (!t(r.getNext().key)) return;
          }
        }
        /** Finds the least element greater than or equal to `elem`. */
        firstAfterOrEqual(t) {
          const e = this.data.getIteratorFrom(t);
          return e.hasNext() ? e.getNext().key : null;
        }
        getIterator() {
          return new SortedSetIterator(this.data.getIterator());
        }
        getIteratorFrom(t) {
          return new SortedSetIterator(this.data.getIteratorFrom(t));
        }
        /** Inserts or updates an element */
        add(t) {
          return this.copy(this.data.remove(t).insert(t, true));
        }
        /** Deletes an element */
        delete(t) {
          return this.has(t) ? this.copy(this.data.remove(t)) : this;
        }
        isEmpty() {
          return this.data.isEmpty();
        }
        unionWith(t) {
          let e = this;
          return e.size < t.size && (e = t, t = this), t.forEach(((t2) => {
            e = e.add(t2);
          })), e;
        }
        isEqual(t) {
          if (!(t instanceof _SortedSet)) return false;
          if (this.size !== t.size) return false;
          const e = this.data.getIterator(), r = t.data.getIterator();
          for (; e.hasNext(); ) {
            const t2 = e.getNext().key, n = r.getNext().key;
            if (0 !== this.comparator(t2, n)) return false;
          }
          return true;
        }
        toArray() {
          const t = [];
          return this.forEach(((e) => {
            t.push(e);
          })), t;
        }
        toString() {
          const t = [];
          return this.forEach(((e) => t.push(e))), "SortedSet(" + t.toString() + ")";
        }
        copy(t) {
          const e = new _SortedSet(this.comparator);
          return e.data = t, e;
        }
      };
      SortedSetIterator = class {
        constructor(t) {
          this.iter = t;
        }
        getNext() {
          return this.iter.getNext().key;
        }
        hasNext() {
          return this.iter.hasNext();
        }
      };
      FieldMask = class _FieldMask {
        constructor(t) {
          this.fields = t, // TODO(dimond): validation of FieldMask
          // Sort the field mask to support `FieldMask.isEqual()` and assert below.
          t.sort(FieldPath$1.comparator);
        }
        static empty() {
          return new _FieldMask([]);
        }
        /**
         * Returns a new FieldMask object that is the result of adding all the given
         * fields paths to this field mask.
         */
        unionWith(t) {
          let e = new SortedSet(FieldPath$1.comparator);
          for (const t2 of this.fields) e = e.add(t2);
          for (const r of t) e = e.add(r);
          return new _FieldMask(e.toArray());
        }
        /**
         * Verifies that `fieldPath` is included by at least one field in this field
         * mask.
         *
         * This is an O(n) operation, where `n` is the size of the field mask.
         */
        covers(t) {
          for (const e of this.fields) if (e.isPrefixOf(t)) return true;
          return false;
        }
        isEqual(t) {
          return __PRIVATE_arrayEquals(this.fields, t.fields, ((t2, e) => t2.isEqual(e)));
        }
      };
      ObjectValue = class _ObjectValue {
        constructor(t) {
          this.value = t;
        }
        static empty() {
          return new _ObjectValue({
            mapValue: {}
          });
        }
        /**
         * Returns the value at the given path or null.
         *
         * @param path - the path to search
         * @returns The value at the path or null if the path is not set.
         */
        field(t) {
          if (t.isEmpty()) return this.value;
          {
            let e = this.value;
            for (let r = 0; r < t.length - 1; ++r) if (e = (e.mapValue.fields || {})[t.get(r)], !__PRIVATE_isMapValue(e)) return null;
            return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
          }
        }
        /**
         * Sets the field to the provided value.
         *
         * @param path - The field path to set.
         * @param value - The value to set.
         */
        set(t, e) {
          this.getFieldsMap(t.popLast())[t.lastSegment()] = __PRIVATE_deepClone(e);
        }
        /**
         * Sets the provided fields to the provided values.
         *
         * @param data - A map of fields to values (or null for deletes).
         */
        setAll(t) {
          let e = FieldPath$1.emptyPath(), r = {}, n = [];
          t.forEach(((t2, i2) => {
            if (!e.isImmediateParentOf(i2)) {
              const t3 = this.getFieldsMap(e);
              this.applyChanges(t3, r, n), r = {}, n = [], e = i2.popLast();
            }
            t2 ? r[i2.lastSegment()] = __PRIVATE_deepClone(t2) : n.push(i2.lastSegment());
          }));
          const i = this.getFieldsMap(e);
          this.applyChanges(i, r, n);
        }
        /**
         * Removes the field at the specified path. If there is no field at the
         * specified path, nothing is changed.
         *
         * @param path - The field path to remove.
         */
        delete(t) {
          const e = this.field(t.popLast());
          __PRIVATE_isMapValue(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
        }
        isEqual(t) {
          return __PRIVATE_valueEquals(this.value, t.value);
        }
        /**
         * Returns the map that contains the leaf element of `path`. If the parent
         * entry does not yet exist, or if it is not a map, a new map will be created.
         */
        getFieldsMap(t) {
          let e = this.value;
          e.mapValue.fields || (e.mapValue = {
            fields: {}
          });
          for (let r = 0; r < t.length; ++r) {
            let n = e.mapValue.fields[t.get(r)];
            __PRIVATE_isMapValue(n) && n.mapValue.fields || (n = {
              mapValue: {
                fields: {}
              }
            }, e.mapValue.fields[t.get(r)] = n), e = n;
          }
          return e.mapValue.fields;
        }
        /**
         * Modifies `fieldsMap` by adding, replacing or deleting the specified
         * entries.
         */
        applyChanges(t, e, r) {
          forEach(e, ((e2, r2) => t[e2] = r2));
          for (const e2 of r) delete t[e2];
        }
        clone() {
          return new _ObjectValue(__PRIVATE_deepClone(this.value));
        }
      };
      MutableDocument = class _MutableDocument {
        constructor(t, e, r, n, i, s, o) {
          this.key = t, this.documentType = e, this.version = r, this.readTime = n, this.createTime = i, this.data = s, this.documentState = o;
        }
        /**
         * Creates a document with no known version or data, but which can serve as
         * base document for mutations.
         */
        static newInvalidDocument(t) {
          return new _MutableDocument(
            t,
            0,
            /* version */
            SnapshotVersion.min(),
            /* readTime */
            SnapshotVersion.min(),
            /* createTime */
            SnapshotVersion.min(),
            ObjectValue.empty(),
            0
            /* DocumentState.SYNCED */
          );
        }
        /**
         * Creates a new document that is known to exist with the given data at the
         * given version.
         */
        static newFoundDocument(t, e, r, n) {
          return new _MutableDocument(
            t,
            1,
            /* version */
            e,
            /* readTime */
            SnapshotVersion.min(),
            /* createTime */
            r,
            n,
            0
            /* DocumentState.SYNCED */
          );
        }
        /** Creates a new document that is known to not exist at the given version. */
        static newNoDocument(t, e) {
          return new _MutableDocument(
            t,
            2,
            /* version */
            e,
            /* readTime */
            SnapshotVersion.min(),
            /* createTime */
            SnapshotVersion.min(),
            ObjectValue.empty(),
            0
            /* DocumentState.SYNCED */
          );
        }
        /**
         * Creates a new document that is known to exist at the given version but
         * whose data is not known (e.g. a document that was updated without a known
         * base document).
         */
        static newUnknownDocument(t, e) {
          return new _MutableDocument(
            t,
            3,
            /* version */
            e,
            /* readTime */
            SnapshotVersion.min(),
            /* createTime */
            SnapshotVersion.min(),
            ObjectValue.empty(),
            2
            /* DocumentState.HAS_COMMITTED_MUTATIONS */
          );
        }
        /**
         * Changes the document type to indicate that it exists and that its version
         * and data are known.
         */
        convertToFoundDocument(t, e) {
          return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = t), this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this;
        }
        /**
         * Changes the document type to indicate that it doesn't exist at the given
         * version.
         */
        convertToNoDocument(t) {
          return this.version = t, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
        }
        /**
         * Changes the document type to indicate that it exists at a given version but
         * that its data is not known (e.g. a document that was updated without a known
         * base document).
         */
        convertToUnknownDocument(t) {
          return this.version = t, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
        }
        setHasCommittedMutations() {
          return this.documentState = 2, this;
        }
        setHasLocalMutations() {
          return this.documentState = 1, this.version = SnapshotVersion.min(), this;
        }
        setReadTime(t) {
          return this.readTime = t, this;
        }
        get hasLocalMutations() {
          return 1 === this.documentState;
        }
        get hasCommittedMutations() {
          return 2 === this.documentState;
        }
        get hasPendingWrites() {
          return this.hasLocalMutations || this.hasCommittedMutations;
        }
        isValidDocument() {
          return 0 !== this.documentType;
        }
        isFoundDocument() {
          return 1 === this.documentType;
        }
        isNoDocument() {
          return 2 === this.documentType;
        }
        isUnknownDocument() {
          return 3 === this.documentType;
        }
        isEqual(t) {
          return t instanceof _MutableDocument && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
        }
        mutableCopy() {
          return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
        }
        toString() {
          return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
        }
      };
      __PRIVATE_TargetImpl = class {
        constructor(t, e = null, r = [], n = [], i = null, s = null, o = null) {
          this.path = t, this.collectionGroup = e, this.orderBy = r, this.filters = n, this.limit = i, this.startAt = s, this.endAt = o, this.C = null;
        }
      };
      __PRIVATE_QueryImpl = class {
        /**
         * Initializes a Query with a path and optional additional query constraints.
         * Path must currently be empty if this is a collection group query.
         */
        constructor(t, e = null, r = [], n = [], i = null, s = "F", o = null, a = null) {
          this.path = t, this.collectionGroup = e, this.explicitOrderBy = r, this.filters = n, this.limit = i, this.limitType = s, this.startAt = o, this.endAt = a, this.S = null, // The corresponding `Target` of this `Query` instance, for use with
          // non-aggregate queries.
          this.N = null, // The corresponding `Target` of this `Query` instance, for use with
          // aggregate queries. Unlike targets for non-aggregate queries,
          // aggregate query targets do not contain normalized order-bys, they only
          // contain explicit order-bys.
          this.O = null, this.startAt, this.endAt;
        }
      };
      TransformOperation = class {
        constructor() {
          this._ = void 0;
        }
      };
      __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
      };
      __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
        constructor(t) {
          super(), this.elements = t;
        }
      };
      __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
        constructor(t) {
          super(), this.elements = t;
        }
      };
      __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
        constructor(t, e) {
          super(), this.serializer = t, this.q = e;
        }
      };
      FieldTransform = class {
        constructor(t, e) {
          this.field = t, this.transform = e;
        }
      };
      Precondition = class _Precondition {
        constructor(t, e) {
          this.updateTime = t, this.exists = e;
        }
        /** Creates a new empty Precondition. */
        static none() {
          return new _Precondition();
        }
        /** Creates a new Precondition with an exists flag. */
        static exists(t) {
          return new _Precondition(void 0, t);
        }
        /** Creates a new Precondition based on a version a document exists at. */
        static updateTime(t) {
          return new _Precondition(t);
        }
        /** Returns whether this Precondition is empty. */
        get isNone() {
          return void 0 === this.updateTime && void 0 === this.exists;
        }
        isEqual(t) {
          return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
        }
      };
      Mutation = class {
      };
      __PRIVATE_SetMutation = class extends Mutation {
        constructor(t, e, r, n = []) {
          super(), this.key = t, this.value = e, this.precondition = r, this.fieldTransforms = n, this.type = 0;
        }
        getFieldMask() {
          return null;
        }
      };
      __PRIVATE_PatchMutation = class extends Mutation {
        constructor(t, e, r, n, i = []) {
          super(), this.key = t, this.data = e, this.fieldMask = r, this.precondition = n, this.fieldTransforms = i, this.type = 1;
        }
        getFieldMask() {
          return this.fieldMask;
        }
      };
      __PRIVATE_DeleteMutation = class extends Mutation {
        constructor(t, e) {
          super(), this.key = t, this.precondition = e, this.type = 2, this.fieldTransforms = [];
        }
        getFieldMask() {
          return null;
        }
      };
      __PRIVATE_VerifyMutation = class extends Mutation {
        constructor(t, e) {
          super(), this.key = t, this.precondition = e, this.type = 3, this.fieldTransforms = [];
        }
        getFieldMask() {
          return null;
        }
      };
      L = /* @__PURE__ */ (() => {
        const t = {
          asc: "ASCENDING",
          desc: "DESCENDING"
        };
        return t;
      })();
      M = /* @__PURE__ */ (() => {
        const t = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          "!=": "NOT_EQUAL",
          "array-contains": "ARRAY_CONTAINS",
          in: "IN",
          "not-in": "NOT_IN",
          "array-contains-any": "ARRAY_CONTAINS_ANY"
        };
        return t;
      })();
      x = /* @__PURE__ */ (() => {
        const t = {
          and: "AND",
          or: "OR"
        };
        return t;
      })();
      JsonProtoSerializer = class {
        constructor(t, e) {
          this.databaseId = t, this.useProto3Json = e;
        }
      };
      __PRIVATE_ExponentialBackoff = class {
        constructor(t, e, r = 1e3, n = 1.5, i = 6e4) {
          this.$ = t, this.timerId = e, this.L = r, this.M = n, this.k = i, this.U = 0, this.j = null, /** The last backoff attempt, as epoch milliseconds. */
          this.W = Date.now(), this.reset();
        }
        /**
         * Resets the backoff delay.
         *
         * The very next backoffAndWait() will have no delay. If it is called again
         * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
         * subsequent ones will increase according to the backoffFactor.
         */
        reset() {
          this.U = 0;
        }
        /**
         * Resets the backoff delay to the maximum delay (e.g. for use after a
         * RESOURCE_EXHAUSTED error).
         */
        K() {
          this.U = this.k;
        }
        /**
         * Returns a promise that resolves after currentDelayMs, and increases the
         * delay for any subsequent attempts. If there was a pending backoff operation
         * already, it will be canceled.
         */
        G(t) {
          this.cancel();
          const e = Math.floor(this.U + this.H()), r = Math.max(0, Date.now() - this.W), n = Math.max(0, e - r);
          n > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${n} ms (base delay: ${this.U} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`), this.j = this.$.enqueueAfterDelay(this.timerId, n, (() => (this.W = Date.now(), t()))), // Apply backoff factor to determine next delay and ensure it is within
          // bounds.
          this.U *= this.M, this.U < this.L && (this.U = this.L), this.U > this.k && (this.U = this.k);
        }
        J() {
          null !== this.j && (this.j.skipDelay(), this.j = null);
        }
        cancel() {
          null !== this.j && (this.j.cancel(), this.j = null);
        }
        /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
        H() {
          return (Math.random() - 0.5) * this.U;
        }
      };
      __PRIVATE_DatastoreImpl = class extends class Datastore {
      } {
        constructor(t, e, r, n) {
          super(), this.authCredentials = t, this.appCheckCredentials = e, this.connection = r, this.serializer = n, this.Y = false;
        }
        Z() {
          if (this.Y) throw new FirestoreError(w, "The client has already been terminated.");
        }
        /** Invokes the provided RPC with auth and AppCheck tokens. */
        P(t, e, r, n) {
          return this.Z(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([i, s]) => this.connection.P(t, __PRIVATE_toResourcePath(e, r), n, i, s))).catch(((t2) => {
            throw "FirebaseError" === t2.name ? (t2.code === p && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t2) : new FirestoreError(A, t2.toString());
          }));
        }
        /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
        g(t, e, r, n, i) {
          return this.Z(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([s, o]) => this.connection.g(t, __PRIVATE_toResourcePath(e, r), n, s, o, i))).catch(((t2) => {
            throw "FirebaseError" === t2.name ? (t2.code === p && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t2) : new FirestoreError(A, t2.toString());
          }));
        }
        terminate() {
          this.Y = true, this.connection.terminate();
        }
      };
      k = /* @__PURE__ */ new Map();
      FirestoreSettingsImpl = class {
        constructor(t) {
          var e, r;
          if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new FirestoreError(T, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
          } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
          if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.localCache = t.localCache, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
          else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new FirestoreError(T, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
          }
          !(function __PRIVATE_validateIsNotUsedTogether(t2, e2, r2, n) {
            if (true === e2 && true === n) throw new FirestoreError(T, `${t2} and ${r2} cannot be used together.`);
          })("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === t.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
            // For backwards compatibility, coerce the value to boolean even though
            // the TypeScript compiler has narrowed the type to boolean already.
            // noinspection PointlessBooleanExpressionJS
            this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling
          ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (r = t.experimentalLongPollingOptions) && void 0 !== r ? r : {}), (function __PRIVATE_validateLongPollingOptions(t2) {
            if (void 0 !== t2.timeoutSeconds) {
              if (isNaN(t2.timeoutSeconds)) throw new FirestoreError(T, `invalid long polling timeout: ${t2.timeoutSeconds} (must not be NaN)`);
              if (t2.timeoutSeconds < 5) throw new FirestoreError(T, `invalid long polling timeout: ${t2.timeoutSeconds} (minimum allowed value is 5)`);
              if (t2.timeoutSeconds > 30) throw new FirestoreError(T, `invalid long polling timeout: ${t2.timeoutSeconds} (maximum allowed value is 30)`);
            }
          })(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams;
        }
        isEqual(t) {
          return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && (function __PRIVATE_longPollingOptionsEqual(t2, e) {
            return t2.timeoutSeconds === e.timeoutSeconds;
          })(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
        }
      };
      Firestore = class {
        /** @hideconstructor */
        constructor(t, e, r, n) {
          this._authCredentials = t, this._appCheckCredentials = e, this._databaseId = r, this._app = n, /**
           * Whether it's a Firestore or Firestore Lite instance.
           */
          this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false;
        }
        /**
         * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
         * instance.
         */
        get app() {
          if (!this._app) throw new FirestoreError(w, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
          return this._app;
        }
        get _initialized() {
          return this._settingsFrozen;
        }
        get _terminated() {
          return void 0 !== this._terminateTask;
        }
        _setSettings(t) {
          if (this._settingsFrozen) throw new FirestoreError(w, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
          this._settings = new FirestoreSettingsImpl(t), void 0 !== t.credentials && (this._authCredentials = (function __PRIVATE_makeAuthCredentialsProvider(t2) {
            if (!t2) return new __PRIVATE_EmptyAuthCredentialsProvider();
            switch (t2.type) {
              case "firstParty":
                return new __PRIVATE_FirstPartyAuthCredentialsProvider(t2.sessionIndex || "0", t2.iamToken || null, t2.authTokenFactory || null);
              case "provider":
                return t2.client;
              default:
                throw new FirestoreError(T, "makeAuthCredentialsProvider failed due to invalid credential type");
            }
          })(t.credentials));
        }
        _getSettings() {
          return this._settings;
        }
        _freezeSettings() {
          return this._settingsFrozen = true, this._settings;
        }
        _delete() {
          return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
        }
        /** Returns a JSON-serializable representation of this `Firestore` instance. */
        toJSON() {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
          };
        }
        /**
         * Terminates all components used by this client. Subclasses can override
         * this method to clean up their own dependencies, but must also call this
         * method.
         *
         * Only ever called once.
         */
        _terminate() {
          return (function __PRIVATE_removeComponents(t) {
            const e = k.get(t);
            e && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), k.delete(t), e.terminate());
          })(this), Promise.resolve();
        }
      };
      AggregateField = class {
        /**
         * Create a new AggregateField<T>
         * @param aggregateType Specifies the type of aggregation operation to perform.
         * @param _internalFieldPath Optionally specifies the field that is aggregated.
         * @internal
         */
        constructor(t = "count", e) {
          this._internalFieldPath = e, /** A type string to uniquely identify instances of this class. */
          this.type = "AggregateField", this.aggregateType = t;
        }
      };
      AggregateQuerySnapshot = class {
        /** @hideconstructor */
        constructor(t, e, r) {
          this._userDataWriter = e, this._data = r, /** A type string to uniquely identify instances of this class. */
          this.type = "AggregateQuerySnapshot", this.query = t;
        }
        /**
         * Returns the results of the aggregations performed over the underlying
         * query.
         *
         * The keys of the returned object will be the same as those of the
         * `AggregateSpec` object specified to the aggregation method, and the values
         * will be the corresponding aggregation result.
         *
         * @returns The results of the aggregations performed over the underlying
         * query.
         */
        data() {
          return this._userDataWriter.convertObjectMap(this._data);
        }
      };
      Query = class _Query {
        // This is the lite version of the Query class in the main SDK.
        /** @hideconstructor protected */
        constructor(t, e, r) {
          this.converter = e, this._query = r, /** The type of this Firestore reference. */
          this.type = "query", this.firestore = t;
        }
        withConverter(t) {
          return new _Query(this.firestore, t, this._query);
        }
      };
      DocumentReference = class _DocumentReference {
        /** @hideconstructor */
        constructor(t, e, r) {
          this.converter = e, this._key = r, /** The type of this Firestore reference. */
          this.type = "document", this.firestore = t;
        }
        get _path() {
          return this._key.path;
        }
        /**
         * The document's identifier within its collection.
         */
        get id() {
          return this._key.path.lastSegment();
        }
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */
        get path() {
          return this._key.path.canonicalString();
        }
        /**
         * The collection this `DocumentReference` belongs to.
         */
        get parent() {
          return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
        }
        withConverter(t) {
          return new _DocumentReference(this.firestore, t, this._key);
        }
      };
      CollectionReference = class _CollectionReference extends Query {
        /** @hideconstructor */
        constructor(t, e, r) {
          super(t, e, (function __PRIVATE_newQueryForPath(t2) {
            return new __PRIVATE_QueryImpl(t2);
          })(r)), this._path = r, /** The type of this Firestore reference. */
          this.type = "collection";
        }
        /** The collection's identifier. */
        get id() {
          return this._query.path.lastSegment();
        }
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */
        get path() {
          return this._query.path.canonicalString();
        }
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */
        get parent() {
          const t = this._path.popLast();
          return t.isEmpty() ? null : new DocumentReference(
            this.firestore,
            /* converter= */
            null,
            new DocumentKey(t)
          );
        }
        withConverter(t) {
          return new _CollectionReference(this.firestore, t, this._path);
        }
      };
      Bytes = class _Bytes {
        /** @hideconstructor */
        constructor(t) {
          this._byteString = t;
        }
        /**
         * Creates a new `Bytes` object from the given Base64 string, converting it to
         * bytes.
         *
         * @param base64 - The Base64 string used to create the `Bytes` object.
         */
        static fromBase64String(t) {
          try {
            return new _Bytes(ByteString.fromBase64String(t));
          } catch (t2) {
            throw new FirestoreError(T, "Failed to construct data from Base64 string: " + t2);
          }
        }
        /**
         * Creates a new `Bytes` object from the given Uint8Array.
         *
         * @param array - The Uint8Array used to create the `Bytes` object.
         */
        static fromUint8Array(t) {
          return new _Bytes(ByteString.fromUint8Array(t));
        }
        /**
         * Returns the underlying bytes as a Base64-encoded string.
         *
         * @returns The Base64-encoded string created from the `Bytes` object.
         */
        toBase64() {
          return this._byteString.toBase64();
        }
        /**
         * Returns the underlying bytes in a new `Uint8Array`.
         *
         * @returns The Uint8Array created from the `Bytes` object.
         */
        toUint8Array() {
          return this._byteString.toUint8Array();
        }
        /**
         * Returns a string representation of the `Bytes` object.
         *
         * @returns A string representation of the `Bytes` object.
         */
        toString() {
          return "Bytes(base64: " + this.toBase64() + ")";
        }
        /**
         * Returns true if this `Bytes` object is equal to the provided one.
         *
         * @param other - The `Bytes` object to compare against.
         * @returns true if this `Bytes` object is equal to the provided one.
         */
        isEqual(t) {
          return this._byteString.isEqual(t._byteString);
        }
      };
      FieldPath = class {
        /**
         * Creates a `FieldPath` from the provided field names. If more than one field
         * name is provided, the path will point to a nested field in a document.
         *
         * @param fieldNames - A list of field names.
         */
        constructor(...t) {
          for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new FirestoreError(T, "Invalid field name at argument $(i + 1). Field names must not be empty.");
          this._internalPath = new FieldPath$1(t);
        }
        /**
         * Returns true if this `FieldPath` is equal to the provided one.
         *
         * @param other - The `FieldPath` to compare against.
         * @returns true if this `FieldPath` is equal to the provided one.
         */
        isEqual(t) {
          return this._internalPath.isEqual(t._internalPath);
        }
      };
      FieldValue = class {
        /**
         * @param _methodName - The public API endpoint that returns this class.
         * @hideconstructor
         */
        constructor(t) {
          this._methodName = t;
        }
      };
      GeoPoint = class {
        /**
         * Creates a new immutable `GeoPoint` object with the provided latitude and
         * longitude values.
         * @param latitude - The latitude as number between -90 and 90.
         * @param longitude - The longitude as number between -180 and 180.
         */
        constructor(t, e) {
          if (!isFinite(t) || t < -90 || t > 90) throw new FirestoreError(T, "Latitude must be a number between -90 and 90, but was: " + t);
          if (!isFinite(e) || e < -180 || e > 180) throw new FirestoreError(T, "Longitude must be a number between -180 and 180, but was: " + e);
          this._lat = t, this._long = e;
        }
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get latitude() {
          return this._lat;
        }
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get longitude() {
          return this._long;
        }
        /**
         * Returns true if this `GeoPoint` is equal to the provided one.
         *
         * @param other - The `GeoPoint` to compare against.
         * @returns true if this `GeoPoint` is equal to the provided one.
         */
        isEqual(t) {
          return this._lat === t._lat && this._long === t._long;
        }
        /** Returns a JSON-serializable representation of this GeoPoint. */
        toJSON() {
          return {
            latitude: this._lat,
            longitude: this._long
          };
        }
        /**
         * Actually private to JS consumers of our API, so this function is prefixed
         * with an underscore.
         */
        _compareTo(t) {
          return __PRIVATE_primitiveComparator(this._lat, t._lat) || __PRIVATE_primitiveComparator(this._long, t._long);
        }
      };
      U = /^__.*__$/;
      ParsedSetData = class {
        constructor(t, e, r) {
          this.data = t, this.fieldMask = e, this.fieldTransforms = r;
        }
        toMutation(t, e) {
          return null !== this.fieldMask ? new __PRIVATE_PatchMutation(t, this.data, this.fieldMask, e, this.fieldTransforms) : new __PRIVATE_SetMutation(t, this.data, e, this.fieldTransforms);
        }
      };
      ParsedUpdateData = class {
        constructor(t, e, r) {
          this.data = t, this.fieldMask = e, this.fieldTransforms = r;
        }
        toMutation(t, e) {
          return new __PRIVATE_PatchMutation(t, this.data, this.fieldMask, e, this.fieldTransforms);
        }
      };
      __PRIVATE_ParseContextImpl = class ___PRIVATE_ParseContextImpl {
        /**
         * Initializes a ParseContext with the given source and path.
         *
         * @param settings - The settings for the parser.
         * @param databaseId - The database ID of the Firestore instance.
         * @param serializer - The serializer to use to generate the Value proto.
         * @param ignoreUndefinedProperties - Whether to ignore undefined properties
         * rather than throw.
         * @param fieldTransforms - A mutable list of field transforms encountered
         * while parsing the data.
         * @param fieldMask - A mutable list of field paths encountered while parsing
         * the data.
         *
         * TODO(b/34871131): We don't support array paths right now, so path can be
         * null to indicate the context represents any location within an array (in
         * which case certain features will not work and errors will be somewhat
         * compromised).
         */
        constructor(t, e, r, n, i, s) {
          this.settings = t, this.databaseId = e, this.serializer = r, this.ignoreUndefinedProperties = n, // Minor hack: If fieldTransforms is undefined, we assume this is an
          // external call and we need to validate the entire path.
          void 0 === i && this.tt(), this.fieldTransforms = i || [], this.fieldMask = s || [];
        }
        get path() {
          return this.settings.path;
        }
        get et() {
          return this.settings.et;
        }
        /** Returns a new context with the specified settings overwritten. */
        rt(t) {
          return new ___PRIVATE_ParseContextImpl(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
        }
        nt(t) {
          var e;
          const r = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), n = this.rt({
            path: r,
            it: false
          });
          return n.st(t), n;
        }
        ot(t) {
          var e;
          const r = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), n = this.rt({
            path: r,
            it: false
          });
          return n.tt(), n;
        }
        ut(t) {
          return this.rt({
            path: void 0,
            it: true
          });
        }
        _t(t) {
          return __PRIVATE_createError(t, this.settings.methodName, this.settings.ct || false, this.path, this.settings.lt);
        }
        /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
        contains(t) {
          return void 0 !== this.fieldMask.find(((e) => t.isPrefixOf(e))) || void 0 !== this.fieldTransforms.find(((e) => t.isPrefixOf(e.field)));
        }
        tt() {
          if (this.path) for (let t = 0; t < this.path.length; t++) this.st(this.path.get(t));
        }
        st(t) {
          if (0 === t.length) throw this._t("Document fields must not be empty");
          if (__PRIVATE_isWrite(this.et) && U.test(t)) throw this._t('Document fields cannot begin and end with "__"');
        }
      };
      __PRIVATE_UserDataReader = class {
        constructor(t, e, r) {
          this.databaseId = t, this.ignoreUndefinedProperties = e, this.serializer = r || __PRIVATE_newSerializer(t);
        }
        /** Creates a new top-level parse context. */
        ht(t, e, r, n = false) {
          return new __PRIVATE_ParseContextImpl({
            et: t,
            methodName: e,
            lt: r,
            path: FieldPath$1.emptyPath(),
            it: false,
            ct: n
          }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
        }
      };
      __PRIVATE_DeleteFieldValueImpl = class ___PRIVATE_DeleteFieldValueImpl extends FieldValue {
        _toFieldTransform(t) {
          if (2 !== t.et) throw 1 === t.et ? t._t(`${this._methodName}() can only appear at the top level of your update data`) : t._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
          return t.fieldMask.push(t.path), null;
        }
        isEqual(t) {
          return t instanceof ___PRIVATE_DeleteFieldValueImpl;
        }
      };
      __PRIVATE_ServerTimestampFieldValueImpl = class ___PRIVATE_ServerTimestampFieldValueImpl extends FieldValue {
        _toFieldTransform(t) {
          return new FieldTransform(t.path, new __PRIVATE_ServerTimestampTransform());
        }
        isEqual(t) {
          return t instanceof ___PRIVATE_ServerTimestampFieldValueImpl;
        }
      };
      __PRIVATE_ArrayUnionFieldValueImpl = class ___PRIVATE_ArrayUnionFieldValueImpl extends FieldValue {
        constructor(t, e) {
          super(t), this.dt = e;
        }
        _toFieldTransform(t) {
          const e = __PRIVATE_createSentinelChildContext(
            this,
            t,
            /*array=*/
            true
          ), r = this.dt.map(((t2) => __PRIVATE_parseData(t2, e))), n = new __PRIVATE_ArrayUnionTransformOperation(r);
          return new FieldTransform(t.path, n);
        }
        isEqual(t) {
          return t instanceof ___PRIVATE_ArrayUnionFieldValueImpl && deepEqual(this.dt, t.dt);
        }
      };
      __PRIVATE_ArrayRemoveFieldValueImpl = class ___PRIVATE_ArrayRemoveFieldValueImpl extends FieldValue {
        constructor(t, e) {
          super(t), this.dt = e;
        }
        _toFieldTransform(t) {
          const e = __PRIVATE_createSentinelChildContext(
            this,
            t,
            /*array=*/
            true
          ), r = this.dt.map(((t2) => __PRIVATE_parseData(t2, e))), n = new __PRIVATE_ArrayRemoveTransformOperation(r);
          return new FieldTransform(t.path, n);
        }
        isEqual(t) {
          return t instanceof ___PRIVATE_ArrayRemoveFieldValueImpl && deepEqual(this.dt, t.dt);
        }
      };
      __PRIVATE_NumericIncrementFieldValueImpl = class ___PRIVATE_NumericIncrementFieldValueImpl extends FieldValue {
        constructor(t, e) {
          super(t), this.ft = e;
        }
        _toFieldTransform(t) {
          const e = new __PRIVATE_NumericIncrementTransformOperation(t.serializer, toNumber(t.serializer, this.ft));
          return new FieldTransform(t.path, e);
        }
        isEqual(t) {
          return t instanceof ___PRIVATE_NumericIncrementFieldValueImpl && this.ft === t.ft;
        }
      };
      j = new RegExp("[~\\*/\\[\\]]");
      DocumentSnapshot = class {
        // Note: This class is stripped down version of the DocumentSnapshot in
        // the legacy SDK. The changes are:
        // - No support for SnapshotMetadata.
        // - No support for SnapshotOptions.
        /** @hideconstructor protected */
        constructor(t, e, r, n, i) {
          this._firestore = t, this._userDataWriter = e, this._key = r, this._document = n, this._converter = i;
        }
        /** Property of the `DocumentSnapshot` that provides the document's ID. */
        get id() {
          return this._key.path.lastSegment();
        }
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */
        get ref() {
          return new DocumentReference(this._firestore, this._converter, this._key);
        }
        /**
         * Signals whether or not the document at the snapshot's location exists.
         *
         * @returns true if the document exists.
         */
        exists() {
          return null !== this._document;
        }
        /**
         * Retrieves all fields in the document as an `Object`. Returns `undefined` if
         * the document doesn't exist.
         *
         * @returns An `Object` containing all fields in the document or `undefined`
         * if the document doesn't exist.
         */
        data() {
          if (this._document) {
            if (this._converter) {
              const t = new QueryDocumentSnapshot(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                /* converter= */
                null
              );
              return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
          }
        }
        /**
         * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
         * document or field doesn't exist.
         *
         * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
         * field.
         * @returns The data at the specified field location or undefined if no such
         * field exists in the document.
         */
        // We are using `any` here to avoid an explicit cast by our users.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get(t) {
          if (this._document) {
            const e = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
          }
        }
      };
      QueryDocumentSnapshot = class extends DocumentSnapshot {
        /**
         * Retrieves all fields in the document as an `Object`.
         *
         * @override
         * @returns An `Object` containing all fields in the document.
         */
        data() {
          return super.data();
        }
      };
      QuerySnapshot = class {
        /** @hideconstructor */
        constructor(t, e) {
          this._docs = e, this.query = t;
        }
        /** An array of all the documents in the `QuerySnapshot`. */
        get docs() {
          return [...this._docs];
        }
        /** The number of documents in the `QuerySnapshot`. */
        get size() {
          return this.docs.length;
        }
        /** True if there are no documents in the `QuerySnapshot`. */
        get empty() {
          return 0 === this.docs.length;
        }
        /**
         * Enumerates all of the documents in the `QuerySnapshot`.
         *
         * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
         * each document in the snapshot.
         * @param thisArg - The `this` binding for the callback.
         */
        forEach(t, e) {
          this._docs.forEach(t, e);
        }
      };
      AppliableConstraint = class {
      };
      QueryConstraint = class extends AppliableConstraint {
      };
      QueryFieldFilterConstraint = class _QueryFieldFilterConstraint extends QueryConstraint {
        /**
         * @internal
         */
        constructor(t, e, r) {
          super(), this._field = t, this._op = e, this._value = r, /** The type of this query constraint */
          this.type = "where";
        }
        static _create(t, e, r) {
          return new _QueryFieldFilterConstraint(t, e, r);
        }
        _apply(t) {
          const e = this._parse(t);
          return __PRIVATE_validateNewFieldFilter(t._query, e), new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedFilter(t._query, e));
        }
        _parse(t) {
          const e = __PRIVATE_newUserDataReader(t.firestore), r = (function __PRIVATE_newQueryFilter(t2, e2, r2, n, i, s, o) {
            let a;
            if (i.isKeyField()) {
              if ("array-contains" === s || "array-contains-any" === s) throw new FirestoreError(T, `Invalid Query. You can't perform '${s}' queries on documentId().`);
              if ("in" === s || "not-in" === s) {
                __PRIVATE_validateDisjunctiveFilterElements(o, s);
                const e3 = [];
                for (const r3 of o) e3.push(__PRIVATE_parseDocumentIdValue(n, t2, r3));
                a = {
                  arrayValue: {
                    values: e3
                  }
                };
              } else a = __PRIVATE_parseDocumentIdValue(n, t2, o);
            } else "in" !== s && "not-in" !== s && "array-contains-any" !== s || __PRIVATE_validateDisjunctiveFilterElements(o, s), a = __PRIVATE_parseQueryValue(
              r2,
              e2,
              o,
              /* allowArrays= */
              "in" === s || "not-in" === s
            );
            return FieldFilter.create(i, s, a);
          })(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value);
          return r;
        }
      };
      QueryCompositeFilterConstraint = class _QueryCompositeFilterConstraint extends AppliableConstraint {
        /**
         * @internal
         */
        constructor(t, e) {
          super(), this.type = t, this._queryConstraints = e;
        }
        static _create(t, e) {
          return new _QueryCompositeFilterConstraint(t, e);
        }
        _parse(t) {
          const e = this._queryConstraints.map(((e2) => e2._parse(t))).filter(((t2) => t2.getFilters().length > 0));
          return 1 === e.length ? e[0] : CompositeFilter.create(e, this._getOperator());
        }
        _apply(t) {
          const e = this._parse(t);
          return 0 === e.getFilters().length ? t : ((function __PRIVATE_validateNewFilter(t2, e2) {
            let r = t2;
            const n = e2.getFlattenedFilters();
            for (const t3 of n) __PRIVATE_validateNewFieldFilter(r, t3), r = __PRIVATE_queryWithAddedFilter(r, t3);
          })(t._query, e), new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedFilter(t._query, e)));
        }
        _getQueryConstraints() {
          return this._queryConstraints;
        }
        _getOperator() {
          return "and" === this.type ? "and" : "or";
        }
      };
      QueryOrderByConstraint = class _QueryOrderByConstraint extends QueryConstraint {
        /**
         * @internal
         */
        constructor(t, e) {
          super(), this._field = t, this._direction = e, /** The type of this query constraint */
          this.type = "orderBy";
        }
        static _create(t, e) {
          return new _QueryOrderByConstraint(t, e);
        }
        _apply(t) {
          const e = (function __PRIVATE_newQueryOrderBy(t2, e2, r) {
            if (null !== t2.startAt) throw new FirestoreError(T, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t2.endAt) throw new FirestoreError(T, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            return new OrderBy(e2, r);
          })(t._query, this._field, this._direction);
          return new Query(t.firestore, t.converter, (function __PRIVATE_queryWithAddedOrderBy(t2, e2) {
            const r = t2.explicitOrderBy.concat([e2]);
            return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, r, t2.filters.slice(), t2.limit, t2.limitType, t2.startAt, t2.endAt);
          })(t._query, e));
        }
      };
      QueryLimitConstraint = class _QueryLimitConstraint extends QueryConstraint {
        /**
         * @internal
         */
        constructor(t, e, r) {
          super(), this.type = t, this._limit = e, this._limitType = r;
        }
        static _create(t, e, r) {
          return new _QueryLimitConstraint(t, e, r);
        }
        _apply(t) {
          return new Query(t.firestore, t.converter, (function __PRIVATE_queryWithLimit(t2, e, r) {
            return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), e, r, t2.startAt, t2.endAt);
          })(t._query, this._limit, this._limitType));
        }
      };
      QueryStartAtConstraint = class _QueryStartAtConstraint extends QueryConstraint {
        /**
         * @internal
         */
        constructor(t, e, r) {
          super(), this.type = t, this._docOrFields = e, this._inclusive = r;
        }
        static _create(t, e, r) {
          return new _QueryStartAtConstraint(t, e, r);
        }
        _apply(t) {
          const e = __PRIVATE_newQueryBoundFromDocOrFields(t, this.type, this._docOrFields, this._inclusive);
          return new Query(t.firestore, t.converter, (function __PRIVATE_queryWithStartAt(t2, e2) {
            return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), t2.limit, t2.limitType, e2, t2.endAt);
          })(t._query, e));
        }
      };
      QueryEndAtConstraint = class _QueryEndAtConstraint extends QueryConstraint {
        /**
         * @internal
         */
        constructor(t, e, r) {
          super(), this.type = t, this._docOrFields = e, this._inclusive = r;
        }
        static _create(t, e, r) {
          return new _QueryEndAtConstraint(t, e, r);
        }
        _apply(t) {
          const e = __PRIVATE_newQueryBoundFromDocOrFields(t, this.type, this._docOrFields, this._inclusive);
          return new Query(t.firestore, t.converter, (function __PRIVATE_queryWithEndAt(t2, e2) {
            return new __PRIVATE_QueryImpl(t2.path, t2.collectionGroup, t2.explicitOrderBy.slice(), t2.filters.slice(), t2.limit, t2.limitType, t2.startAt, e2);
          })(t._query, e));
        }
      };
      __PRIVATE_LiteUserDataWriter = class extends class AbstractUserDataWriter {
        convertValue(t, e = "none") {
          switch (__PRIVATE_typeOrder(t)) {
            case 0:
              return null;
            case 1:
              return t.booleanValue;
            case 2:
              return __PRIVATE_normalizeNumber(t.integerValue || t.doubleValue);
            case 3:
              return this.convertTimestamp(t.timestampValue);
            case 4:
              return this.convertServerTimestamp(t, e);
            case 5:
              return t.stringValue;
            case 6:
              return this.convertBytes(__PRIVATE_normalizeByteString(t.bytesValue));
            case 7:
              return this.convertReference(t.referenceValue);
            case 8:
              return this.convertGeoPoint(t.geoPointValue);
            case 9:
              return this.convertArray(t.arrayValue, e);
            case 10:
              return this.convertObject(t.mapValue, e);
            default:
              throw fail();
          }
        }
        convertObject(t, e) {
          return this.convertObjectMap(t.fields, e);
        }
        /**
         * @internal
         */
        convertObjectMap(t, e = "none") {
          const r = {};
          return forEach(t, ((t2, n) => {
            r[t2] = this.convertValue(n, e);
          })), r;
        }
        convertGeoPoint(t) {
          return new GeoPoint(__PRIVATE_normalizeNumber(t.latitude), __PRIVATE_normalizeNumber(t.longitude));
        }
        convertArray(t, e) {
          return (t.values || []).map(((t2) => this.convertValue(t2, e)));
        }
        convertServerTimestamp(t, e) {
          switch (e) {
            case "previous":
              const r = __PRIVATE_getPreviousValue(t);
              return null == r ? null : this.convertValue(r, e);
            case "estimate":
              return this.convertTimestamp(__PRIVATE_getLocalWriteTime(t));
            default:
              return null;
          }
        }
        convertTimestamp(t) {
          const e = __PRIVATE_normalizeTimestamp(t);
          return new Timestamp(e.seconds, e.nanos);
        }
        convertDocumentKey(t, e) {
          const r = ResourcePath.fromString(t);
          __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(r));
          const n = new DatabaseId(r.get(1), r.get(3)), i = new DocumentKey(r.popFirst(5));
          return n.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
          __PRIVATE_logError(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), i;
        }
      } {
        constructor(t) {
          super(), this.firestore = t;
        }
        convertBytes(t) {
          return new Bytes(t);
        }
        convertReference(t) {
          const e = this.convertDocumentKey(t, this.firestore._databaseId);
          return new DocumentReference(
            this.firestore,
            /* converter= */
            null,
            e
          );
        }
      };
      WriteBatch = class {
        /** @hideconstructor */
        constructor(t, e) {
          this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = __PRIVATE_newUserDataReader(t);
        }
        set(t, e, r) {
          this._verifyNotCommitted();
          const n = __PRIVATE_validateReference(t, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(n.converter, e, r), s = __PRIVATE_parseSetData(this._dataReader, "WriteBatch.set", n._key, i, null !== n.converter, r);
          return this._mutations.push(s.toMutation(n._key, Precondition.none())), this;
        }
        update(t, e, r, ...n) {
          this._verifyNotCommitted();
          const i = __PRIVATE_validateReference(t, this._firestore);
          let s;
          return s = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "WriteBatch.update", i._key, e, r, n) : __PRIVATE_parseUpdateData(this._dataReader, "WriteBatch.update", i._key, e), this._mutations.push(s.toMutation(i._key, Precondition.exists(true))), this;
        }
        /**
         * Deletes the document referred to by the provided {@link DocumentReference}.
         *
         * @param documentRef - A reference to the document to be deleted.
         * @returns This `WriteBatch` instance. Used for chaining method calls.
         */
        delete(t) {
          this._verifyNotCommitted();
          const e = __PRIVATE_validateReference(t, this._firestore);
          return this._mutations = this._mutations.concat(new __PRIVATE_DeleteMutation(e._key, Precondition.none())), this;
        }
        /**
         * Commits all of the writes in this write batch as a single atomic unit.
         *
         * The result of these writes will only be reflected in document reads that
         * occur after the returned promise resolves. If the client is offline, the
         * write fails. If you would like to see local modifications or buffer writes
         * until the client is online, use the full Firestore SDK.
         *
         * @returns A `Promise` resolved once all of the writes in the batch have been
         * successfully written to the backend as an atomic unit (note that it won't
         * resolve while you're offline).
         */
        commit() {
          return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
        }
        _verifyNotCommitted() {
          if (this._committed) throw new FirestoreError(w, "A write batch can no longer be used after commit() has been called.");
        }
      };
      Transaction$1 = class {
        constructor(t) {
          this.datastore = t, // The version of each document that was read during this transaction.
          this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, /**
           * A deferred usage error that occurred previously in this transaction that
           * will cause the transaction to fail once it actually commits.
           */
          this.lastTransactionError = null, /**
           * Set of documents that have been written in the transaction.
           *
           * When there's more than one write to the same key in a transaction, any
           * writes after the first are handled differently.
           */
          this.writtenDocs = /* @__PURE__ */ new Set();
        }
        async lookup(t) {
          if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw this.lastTransactionError = new FirestoreError(T, "Firestore transactions require all reads to be executed before all writes."), this.lastTransactionError;
          const e = await __PRIVATE_invokeBatchGetDocumentsRpc(this.datastore, t);
          return e.forEach(((t2) => this.recordVersion(t2))), e;
        }
        set(t, e) {
          this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
        }
        update(t, e) {
          try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
          } catch (t2) {
            this.lastTransactionError = t2;
          }
          this.writtenDocs.add(t.toString());
        }
        delete(t) {
          this.write(new __PRIVATE_DeleteMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
        }
        async commit() {
          if (this.ensureCommitNotCalled(), this.lastTransactionError) throw this.lastTransactionError;
          const t = this.readVersions;
          this.mutations.forEach(((e) => {
            t.delete(e.key.toString());
          })), // For each document that was read but not written to, we want to perform
          // a `verify` operation.
          t.forEach(((t2, e) => {
            const r = DocumentKey.fromPath(e);
            this.mutations.push(new __PRIVATE_VerifyMutation(r, this.precondition(r)));
          })), await __PRIVATE_invokeCommitRpc(this.datastore, this.mutations), this.committed = true;
        }
        recordVersion(t) {
          let e;
          if (t.isFoundDocument()) e = t.version;
          else {
            if (!t.isNoDocument()) throw fail();
            e = SnapshotVersion.min();
          }
          const r = this.readVersions.get(t.key.toString());
          if (r) {
            if (!e.isEqual(r))
              throw new FirestoreError(g, "Document version changed between two reads.");
          } else this.readVersions.set(t.key.toString(), e);
        }
        /**
         * Returns the version of this document when it was read in this transaction,
         * as a precondition, or no precondition if it was not read.
         */
        precondition(t) {
          const e = this.readVersions.get(t.toString());
          return !this.writtenDocs.has(t.toString()) && e ? e.isEqual(SnapshotVersion.min()) ? Precondition.exists(false) : Precondition.updateTime(e) : Precondition.none();
        }
        /**
         * Returns the precondition for a document if the operation is an update.
         */
        preconditionForUpdate(t) {
          const e = this.readVersions.get(t.toString());
          if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(SnapshotVersion.min()))
              throw new FirestoreError(T, "Can't update a document that doesn't exist.");
            return Precondition.updateTime(e);
          }
          return Precondition.exists(true);
        }
        write(t) {
          this.ensureCommitNotCalled(), this.mutations.push(t);
        }
        ensureCommitNotCalled() {
        }
      };
      z = {
        maxAttempts: 5
      };
      __PRIVATE_TransactionRunner = class {
        constructor(t, e, r, n, i) {
          this.asyncQueue = t, this.datastore = e, this.options = r, this.updateFunction = n, this.deferred = i, this.Et = r.maxAttempts, this.At = new __PRIVATE_ExponentialBackoff(
            this.asyncQueue,
            "transaction_retry"
            /* TimerId.TransactionRetry */
          );
        }
        /** Runs the transaction and sets the result on deferred. */
        Tt() {
          this.Et -= 1, this.Rt();
        }
        Rt() {
          this.At.G((async () => {
            const t = new Transaction$1(this.datastore), e = this.Pt(t);
            e && e.then(((e2) => {
              this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
                this.deferred.resolve(e2);
              })).catch(((t2) => {
                this.It(t2);
              }))));
            })).catch(((t2) => {
              this.It(t2);
            }));
          }));
        }
        Pt(t) {
          try {
            const e = this.updateFunction(t);
            return !__PRIVATE_isNullOrUndefined(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
          } catch (t2) {
            return this.deferred.reject(t2), null;
          }
        }
        It(t) {
          this.Et > 0 && this.Vt(t) ? (this.Et -= 1, this.asyncQueue.enqueueAndForget((() => (this.Rt(), Promise.resolve())))) : this.deferred.reject(t);
        }
        Vt(t) {
          if ("FirebaseError" === t.name) {
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || "already-exists" === e || !/**
            * Determines whether an error code represents a permanent error when received
            * in response to a non-write operation.
            *
            * See isPermanentWriteError for classifying write errors.
            */
            (function __PRIVATE_isPermanentError(t2) {
              switch (t2) {
                default:
                  return fail();
                case m:
                case A:
                case R:
                case y:
                case D:
                case b:
                // Unauthenticated means something went wrong with our token and we need
                // to retry with new credentials which will happen automatically.
                case p:
                  return false;
                case T:
                case P:
                case I:
                case V:
                case w:
                // Aborted might be retried in some scenarios, but that is dependent on
                // the context and should handled individually by the calling code.
                // See https://cloud.google.com/apis/design/errors.
                case g:
                case F:
                case v:
                case C:
                  return true;
              }
            })(e);
          }
          return false;
        }
      };
      DelayedOperation = class _DelayedOperation {
        constructor(t, e, r, n, i) {
          this.asyncQueue = t, this.timerId = e, this.targetTimeMs = r, this.op = n, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
          // and so we attach a dummy catch callback to avoid
          // 'UnhandledPromiseRejectionWarning' log spam.
          this.deferred.promise.catch(((t2) => {
          }));
        }
        get promise() {
          return this.deferred.promise;
        }
        /**
         * Creates and returns a DelayedOperation that has been scheduled to be
         * executed on the provided asyncQueue after the provided delayMs.
         *
         * @param asyncQueue - The queue to schedule the operation on.
         * @param id - A Timer ID identifying the type of operation this is.
         * @param delayMs - The delay (ms) before the operation should be scheduled.
         * @param op - The operation to run.
         * @param removalCallback - A callback to be called synchronously once the
         *   operation is executed or canceled, notifying the AsyncQueue to remove it
         *   from its delayedOperations list.
         *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
         *   the DelayedOperation class public.
         */
        static createAndSchedule(t, e, r, n, i) {
          const s = Date.now() + r, o = new _DelayedOperation(t, e, s, n, i);
          return o.start(r), o;
        }
        /**
         * Starts the timer. This is called immediately after construction by
         * createAndSchedule().
         */
        start(t) {
          this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
        }
        /**
         * Queues the operation to run immediately (if it hasn't already been run or
         * canceled).
         */
        skipDelay() {
          return this.handleDelayElapsed();
        }
        /**
         * Cancels the operation if it hasn't already been executed or canceled. The
         * promise will be rejected.
         *
         * As long as the operation has not yet been run, calling cancel() provides a
         * guarantee that the operation will not be run.
         */
        cancel(t) {
          null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(m, "Operation cancelled" + (t ? ": " + t : ""))));
        }
        handleDelayElapsed() {
          this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then(((t) => this.deferred.resolve(t)))) : Promise.resolve()));
        }
        clearTimeout() {
          null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
        }
      };
      __PRIVATE_AsyncQueueImpl = class {
        constructor() {
          this.yt = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
          // retried with backoff.
          this.wt = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
          // be changed again.
          this.gt = false, // Operations scheduled to be queued in the future. Operations are
          // automatically removed after they are run or canceled.
          this.Ft = [], // visible for testing
          this.vt = null, // Flag set while there's an outstanding AsyncQueue operation, used for
          // assertion sanity-checks.
          this.Dt = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
          this.bt = false, // List of TimerIds to fast-forward delays for.
          this.Ct = [], // Backoff timer used to schedule retries for retryable operations
          this.At = new __PRIVATE_ExponentialBackoff(
            this,
            "async_queue_retry"
            /* TimerId.AsyncQueueRetry */
          ), // Visibility handler that triggers an immediate retry of all retryable
          // operations. Meant to speed up recovery when we regain file system access
          // after page comes into foreground.
          this.St = () => {
            const t2 = getDocument();
            t2 && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + t2.visibilityState), this.At.J();
          };
          const t = getDocument();
          t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.St);
        }
        get isShuttingDown() {
          return this.gt;
        }
        /**
         * Adds a new operation to the queue without waiting for it to complete (i.e.
         * we ignore the Promise result).
         */
        enqueueAndForget(t) {
          this.enqueue(t);
        }
        enqueueAndForgetEvenWhileRestricted(t) {
          this.Nt(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.Ot(t);
        }
        enterRestrictedMode(t) {
          if (!this.gt) {
            this.gt = true, this.bt = t || false;
            const e = getDocument();
            e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.St);
          }
        }
        enqueue(t) {
          if (this.Nt(), this.gt)
            return new Promise((() => {
            }));
          const e = new __PRIVATE_Deferred();
          return this.Ot((() => this.gt && this.bt ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise))).then((() => e.promise));
        }
        enqueueRetryable(t) {
          this.enqueueAndForget((() => (this.wt.push(t), this.qt())));
        }
        /**
         * Runs the next operation from the retryable queue. If the operation fails,
         * reschedules with backoff.
         */
        async qt() {
          if (0 !== this.wt.length) {
            try {
              await this.wt[0](), this.wt.shift(), this.At.reset();
            } catch (t) {
              if (!/**
              * @license
              * Copyright 2017 Google LLC
              *
              * Licensed under the Apache License, Version 2.0 (the "License");
              * you may not use this file except in compliance with the License.
              * You may obtain a copy of the License at
              *
              *   http://www.apache.org/licenses/LICENSE-2.0
              *
              * Unless required by applicable law or agreed to in writing, software
              * distributed under the License is distributed on an "AS IS" BASIS,
              * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              * See the License for the specific language governing permissions and
              * limitations under the License.
              */
              /** Verifies whether `e` is an IndexedDbTransactionError. */
              (function __PRIVATE_isIndexedDbTransactionError(t2) {
                return "IndexedDbTransactionError" === t2.name;
              })(t)) throw t;
              __PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.wt.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.At.G((() => this.qt()));
          }
        }
        Ot(t) {
          const e = this.yt.then((() => (this.Dt = true, t().catch(((t2) => {
            this.vt = t2, this.Dt = false;
            const e2 = (
              /**
              * Chrome includes Error.message in Error.stack. Other browsers do not.
              * This returns expected output of message + stack when available.
              * @param error - Error or FirestoreError
              */
              (function __PRIVATE_getMessageOrStack(t3) {
                let e3 = t3.message || "";
                t3.stack && (e3 = t3.stack.includes(t3.message) ? t3.stack : t3.message + "\n" + t3.stack);
                return e3;
              })(t2)
            );
            throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", e2), t2;
          })).then(((t2) => (this.Dt = false, t2))))));
          return this.yt = e, e;
        }
        enqueueAfterDelay(t, e, r) {
          this.Nt(), // Fast-forward delays for timerIds that have been overridden.
          this.Ct.indexOf(t) > -1 && (e = 0);
          const n = DelayedOperation.createAndSchedule(this, t, e, r, ((t2) => this.Bt(t2)));
          return this.Ft.push(n), n;
        }
        Nt() {
          this.vt && fail();
        }
        verifyOperationInProgress() {
        }
        /**
         * Waits until all currently queued tasks are finished executing. Delayed
         * operations are not run.
         */
        async $t() {
          let t;
          do {
            t = this.yt, await t;
          } while (t !== this.yt);
        }
        /**
         * For Tests: Determine if a delayed operation with a particular TimerId
         * exists.
         */
        Qt(t) {
          for (const e of this.Ft) if (e.timerId === t) return true;
          return false;
        }
        /**
         * For Tests: Runs some or all delayed operations early.
         *
         * @param lastTimerId - Delayed operations up to and including this TimerId
         * will be drained. Pass TimerId.All to run all delayed operations.
         * @returns a Promise that resolves once all operations have been run.
         */
        Lt(t) {
          return this.$t().then((() => {
            this.Ft.sort(((t2, e) => t2.targetTimeMs - e.targetTimeMs));
            for (const e of this.Ft) if (e.skipDelay(), "all" !== t && e.timerId === t) break;
            return this.$t();
          }));
        }
        /**
         * For Tests: Skip all subsequent delays for a timer id.
         */
        Mt(t) {
          this.Ct.push(t);
        }
        /** Called once a DelayedOperation is run or canceled. */
        Bt(t) {
          const e = this.Ft.indexOf(t);
          this.Ft.splice(e, 1);
        }
      };
      Transaction = class {
        /** @hideconstructor */
        constructor(t, e) {
          this._firestore = t, this._transaction = e, this._dataReader = __PRIVATE_newUserDataReader(t);
        }
        /**
         * Reads the document referenced by the provided {@link DocumentReference}.
         *
         * @param documentRef - A reference to the document to be read.
         * @returns A `DocumentSnapshot` with the read data.
         */
        get(t) {
          const e = __PRIVATE_validateReference(t, this._firestore), r = new __PRIVATE_LiteUserDataWriter(this._firestore);
          return this._transaction.lookup([e._key]).then(((t2) => {
            if (!t2 || 1 !== t2.length) return fail();
            const n = t2[0];
            if (n.isFoundDocument()) return new DocumentSnapshot(this._firestore, r, n.key, n, e.converter);
            if (n.isNoDocument()) return new DocumentSnapshot(this._firestore, r, e._key, null, e.converter);
            throw fail();
          }));
        }
        set(t, e, r) {
          const n = __PRIVATE_validateReference(t, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(n.converter, e, r), s = __PRIVATE_parseSetData(this._dataReader, "Transaction.set", n._key, i, null !== n.converter, r);
          return this._transaction.set(n._key, s), this;
        }
        update(t, e, r, ...n) {
          const i = __PRIVATE_validateReference(t, this._firestore);
          let s;
          return s = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "Transaction.update", i._key, e, r, n) : __PRIVATE_parseUpdateData(this._dataReader, "Transaction.update", i._key, e), this._transaction.update(i._key, s), this;
        }
        /**
         * Deletes the document referred to by the provided {@link DocumentReference}.
         *
         * @param documentRef - A reference to the document to be deleted.
         * @returns This `Transaction` instance. Used for chaining method calls.
         */
        delete(t) {
          const e = __PRIVATE_validateReference(t, this._firestore);
          return this._transaction.delete(e._key), this;
        }
      };
      !(function __PRIVATE_registerFirestore() {
        !(function __PRIVATE_setSDKVersion(t) {
          d = t;
        })(`${SDK_VERSION}_lite`), _registerComponent(new Component("firestore/lite", ((t, { instanceIdentifier: e, options: r }) => {
          const n = t.getProvider("app").getImmediate(), i = new Firestore(new __PRIVATE_LiteAuthCredentialsProvider(t.getProvider("auth-internal")), new __PRIVATE_LiteAppCheckTokenProvider(t.getProvider("app-check-internal")), (function __PRIVATE_databaseIdFromApp(t2, e2) {
            if (!Object.prototype.hasOwnProperty.apply(t2.options, ["projectId"])) throw new FirestoreError(T, '"projectId" not provided in firebase.initializeApp.');
            return new DatabaseId(t2.options.projectId, e2);
          })(n, e), n);
          return r && i._setSettings(r), i;
        }), "PUBLIC").setMultipleInstances(true)), // RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
        registerVersion("firestore-lite", "4.6.5", ""), registerVersion("firestore-lite", "4.6.5", "esm2017");
      })();
    }
  });

  // node_modules/firebase/firestore/lite/dist/esm/index.esm.js
  var index_esm_exports3 = {};
  __export(index_esm_exports3, {
    AggregateField: () => AggregateField,
    AggregateQuerySnapshot: () => AggregateQuerySnapshot,
    Bytes: () => Bytes,
    CollectionReference: () => CollectionReference,
    DocumentReference: () => DocumentReference,
    DocumentSnapshot: () => DocumentSnapshot,
    FieldPath: () => FieldPath,
    FieldValue: () => FieldValue,
    Firestore: () => Firestore,
    FirestoreError: () => FirestoreError,
    GeoPoint: () => GeoPoint,
    Query: () => Query,
    QueryCompositeFilterConstraint: () => QueryCompositeFilterConstraint,
    QueryConstraint: () => QueryConstraint,
    QueryDocumentSnapshot: () => QueryDocumentSnapshot,
    QueryEndAtConstraint: () => QueryEndAtConstraint,
    QueryFieldFilterConstraint: () => QueryFieldFilterConstraint,
    QueryLimitConstraint: () => QueryLimitConstraint,
    QueryOrderByConstraint: () => QueryOrderByConstraint,
    QuerySnapshot: () => QuerySnapshot,
    QueryStartAtConstraint: () => QueryStartAtConstraint,
    Timestamp: () => Timestamp,
    Transaction: () => Transaction,
    WriteBatch: () => WriteBatch,
    addDoc: () => addDoc,
    aggregateFieldEqual: () => aggregateFieldEqual,
    aggregateQuerySnapshotEqual: () => aggregateQuerySnapshotEqual,
    and: () => and,
    arrayRemove: () => arrayRemove,
    arrayUnion: () => arrayUnion,
    average: () => average,
    collection: () => collection,
    collectionGroup: () => collectionGroup,
    connectFirestoreEmulator: () => connectFirestoreEmulator,
    count: () => count,
    deleteDoc: () => deleteDoc,
    deleteField: () => deleteField,
    doc: () => doc,
    documentId: () => documentId,
    endAt: () => endAt,
    endBefore: () => endBefore,
    getAggregate: () => getAggregate,
    getCount: () => getCount,
    getDoc: () => getDoc,
    getDocs: () => getDocs,
    getFirestore: () => getFirestore,
    increment: () => increment,
    initializeFirestore: () => initializeFirestore,
    limit: () => limit,
    limitToLast: () => limitToLast,
    or: () => or,
    orderBy: () => orderBy,
    query: () => query,
    queryEqual: () => queryEqual,
    refEqual: () => refEqual,
    runTransaction: () => runTransaction,
    serverTimestamp: () => serverTimestamp,
    setDoc: () => setDoc,
    setLogLevel: () => setLogLevel3,
    snapshotEqual: () => snapshotEqual,
    startAfter: () => startAfter,
    startAt: () => startAt,
    sum: () => sum,
    terminate: () => terminate,
    updateDoc: () => updateDoc,
    where: () => where,
    writeBatch: () => writeBatch
  });
  var init_index_esm3 = __esm({
    "node_modules/firebase/firestore/lite/dist/esm/index.esm.js"() {
      init_index_browser_esm2017();
    }
  });

  // js/features/cloudSync.js
  async function setupCloudSync({
    elements,
    state,
    getLocalPayload,
    applyRemotePayload,
    onLocalStateApplied,
    onLocalStateSaved,
    eventBus: eventBus2
  }) {
    function estimatePayloadSize(payload) {
      try {
        return new Blob([JSON.stringify(payload)]).size;
      } catch (e) {
        return JSON.stringify(payload).length;
      }
    }
    function buildCompactCloudPayload(payload) {
      const compact = {
        ...payload,
        drawingsByKana: {}
      };
      const source = payload && payload.drawingsByKana && typeof payload.drawingsByKana === "object" ? payload.drawingsByKana : {};
      let usedBytes = 0;
      Object.keys(source).forEach((kanaChar) => {
        const drawings = Array.isArray(source[kanaChar]) ? source[kanaChar] : [];
        if (drawings.length === 0) {
          return;
        }
        const firstDrawing = typeof drawings[0] === "string" ? drawings[0] : null;
        if (!firstDrawing) {
          return;
        }
        const drawingSize = firstDrawing.length;
        if (usedBytes + drawingSize > COMPACT_DRAWING_BUDGET_BYTES) {
          return;
        }
        compact.drawingsByKana[kanaChar] = [firstDrawing];
        usedBytes += drawingSize;
      });
      return compact;
    }
    async function writeCloudState(stateRef, payload) {
      const payloadSize = estimatePayloadSize(payload);
      if (payloadSize <= MAX_CLOUD_PAYLOAD_BYTES) {
        await setDoc2(stateRef, payload);
        return { writtenPayload: payload, usedCompactPayload: false };
      }
      const compactPayload = buildCompactCloudPayload(payload);
      await setDoc2(stateRef, compactPayload);
      return { writtenPayload: compactPayload, usedCompactPayload: true };
    }
    function setStatus(text) {
      elements.syncStatus.textContent = text;
      elements.syncStatus.classList.remove("ok", "bad");
      if (/error|disabled|unavailable/i.test(text)) {
        elements.syncStatus.classList.add("bad");
      } else if (/connected|synced|uploaded|downloaded|pulled|ready|created|logged out/i.test(text)) {
        elements.syncStatus.classList.add("ok");
      }
    }
    function disableAuthButtons(disabled) {
      elements.signUpBtn.disabled = disabled;
      elements.loginBtn.disabled = disabled;
      elements.logoutBtn.disabled = disabled;
      elements.syncNowBtn.disabled = disabled;
      elements.forcePullBtn.disabled = disabled;
      elements.forcePushBtn.disabled = disabled;
    }
    function setAccountInfo(userEmail, lastSyncedAt) {
      if (!userEmail) {
        elements.syncAccountInfo.textContent = "Not signed in.";
        return;
      }
      const syncText = lastSyncedAt ? ` Last synced: ${new Date(lastSyncedAt).toLocaleString()}.` : "";
      elements.syncAccountInfo.textContent = `Signed in as ${userEmail}.${syncText}`;
    }
    if (!syncConfig.enabled) {
      setStatus("Cloud sync disabled. Add Firebase config in js/config/syncConfig.js.");
      disableAuthButtons(true);
      return createNoopSync();
    }
    const firebaseApp = await Promise.resolve().then(() => (init_index_esm(), index_esm_exports));
    const firebaseAuth = await Promise.resolve().then(() => (init_index_esm2(), index_esm_exports2));
    const firebaseFirestore = await Promise.resolve().then(() => (init_index_esm3(), index_esm_exports3));
    const { initializeApp: initializeApp2, getApp: getApp2, getApps: getApps2 } = firebaseApp;
    const {
      getAuth: getAuth2,
      onAuthStateChanged: onAuthStateChanged2,
      setPersistence: setPersistence2,
      browserLocalPersistence: browserLocalPersistence2,
      inMemoryPersistence: inMemoryPersistence2,
      createUserWithEmailAndPassword: createUserWithEmailAndPassword2,
      signInWithEmailAndPassword: signInWithEmailAndPassword2,
      signOut: signOut2,
      sendPasswordResetEmail: sendPasswordResetEmail2
    } = firebaseAuth;
    const { getFirestore: getFirestore2, doc: doc2, getDoc: getDoc2, setDoc: setDoc2 } = firebaseFirestore;
    const app = getApps2().length ? getApp2() : initializeApp2(syncConfig.firebase);
    const auth = getAuth2(app);
    const db = getFirestore2(app);
    try {
      await setPersistence2(auth, browserLocalPersistence2);
    } catch (e) {
      await setPersistence2(auth, inMemoryPersistence2);
    }
    let currentUser = null;
    let uploadTimer = null;
    async function pullOrPushOnLogin(user) {
      const stateRef = doc2(db, "quizStates", user.uid);
      const remoteSnap = await getDoc2(stateRef);
      const localPayload = getLocalPayload();
      if (!remoteSnap.exists()) {
        const writeResult = await writeCloudState(stateRef, localPayload);
        setStatus(writeResult.usedCompactPayload ? `Connected: ${user.email || user.uid}. Uploaded local progress (compact cloud payload).` : `Connected: ${user.email || user.uid}. Uploaded local progress.`);
        return;
      }
      const remotePayload = remoteSnap.data();
      const remoteSavedAt = Number(remotePayload.savedAt || 0);
      const localSavedAt = Number(localPayload.savedAt || 0);
      if (remoteSavedAt > localSavedAt) {
        applyRemotePayload(remotePayload);
        onLocalStateApplied();
        if (eventBus2) eventBus2.emit("sync:conflictApplied");
        setStatus(`Connected: ${user.email || user.uid}. Downloaded newer cloud progress.`);
      } else {
        const writeResult = await writeCloudState(stateRef, localPayload);
        setStatus(writeResult.usedCompactPayload ? `Connected: ${user.email || user.uid}. Cloud synced (compact cloud payload).` : `Connected: ${user.email || user.uid}. Cloud synced.`);
      }
    }
    async function pullNow() {
      if (!currentUser) {
        setStatus("Log in first to pull cloud data.");
        return;
      }
      const stateRef = doc2(db, "quizStates", currentUser.uid);
      const remoteSnap = await getDoc2(stateRef);
      if (!remoteSnap.exists()) {
        setStatus("No cloud data found yet.");
        return;
      }
      applyRemotePayload(remoteSnap.data());
      onLocalStateApplied();
      if (eventBus2) eventBus2.emit("sync:conflictApplied");
      setStatus("Pulled cloud progress to this device.");
    }
    async function uploadNow() {
      if (!currentUser) {
        setStatus("Log in first to sync.");
        return;
      }
      const stateRef = doc2(db, "quizStates", currentUser.uid);
      const payload = getLocalPayload();
      const writeResult = await writeCloudState(stateRef, payload);
      const syncMeta = {
        ...writeResult.writtenPayload,
        cloudSyncedAt: Date.now(),
        userEmail: currentUser.email || ""
      };
      onLocalStateSaved(syncMeta);
      setAccountInfo(syncMeta.userEmail, syncMeta.cloudSyncedAt);
      setStatus(writeResult.usedCompactPayload ? `Synced at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()} (compact cloud payload).` : `Synced at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}.`);
    }
    function queueUpload() {
      if (!currentUser) {
        return;
      }
      if (uploadTimer) {
        clearTimeout(uploadTimer);
      }
      uploadTimer = setTimeout(() => {
        uploadTimer = null;
        uploadNow().catch((error) => {
          setStatus(`Sync error: ${error.message}`);
        });
      }, 600);
    }
    disableAuthButtons(false);
    setAccountInfo(state.syncUserEmail || "", state.lastCloudSyncAt || 0);
    setStatus("Cloud sync ready. Log in to link data across devices.");
    elements.signUpBtn.addEventListener("click", async () => {
      try {
        const email = elements.syncEmail.value.trim();
        const password = elements.syncPassword.value;
        if (!email || !password) {
          setStatus("Enter email and password first.");
          return;
        }
        await createUserWithEmailAndPassword2(auth, email, password);
        setStatus("Account created.");
      } catch (error) {
        setStatus(`Sign up error: ${error.message}`);
      }
    });
    elements.loginBtn.addEventListener("click", async () => {
      try {
        const email = elements.syncEmail.value.trim();
        const password = elements.syncPassword.value;
        if (!email || !password) {
          setStatus("Enter email and password first.");
          return;
        }
        await signInWithEmailAndPassword2(auth, email, password);
      } catch (error) {
        setStatus(`Login error: ${error.message}`);
      }
    });
    elements.forgotPasswordBtn.addEventListener("click", async () => {
      try {
        const email = elements.syncEmail.value.trim();
        if (!email) {
          setStatus("Enter your email then tap Forgot Password.");
          return;
        }
        await sendPasswordResetEmail2(auth, email);
        setStatus("Password reset email sent.");
      } catch (error) {
        setStatus(`Reset error: ${error.message}`);
      }
    });
    elements.logoutBtn.addEventListener("click", async () => {
      try {
        await signOut2(auth);
        setStatus("Logged out.");
      } catch (error) {
        setStatus(`Logout error: ${error.message}`);
      }
    });
    elements.syncNowBtn.addEventListener("click", () => {
      uploadNow().catch((error) => {
        setStatus(`Sync error: ${error.message}`);
      });
    });
    elements.forcePullBtn.addEventListener("click", () => {
      pullNow().catch((error) => {
        setStatus(`Pull error: ${error.message}`);
      });
    });
    elements.forcePushBtn.addEventListener("click", () => {
      uploadNow().catch((error) => {
        setStatus(`Push error: ${error.message}`);
      });
    });
    onAuthStateChanged2(auth, async (user) => {
      currentUser = user;
      if (!user) {
        setAccountInfo("", 0);
        setStatus("Cloud sync ready. Log in to link data across devices.");
        return;
      }
      setAccountInfo(user.email || user.uid, state.lastCloudSyncAt || 0);
      try {
        await pullOrPushOnLogin(user);
      } catch (error) {
        setStatus(`Cloud sync error: ${error.message}`);
      }
    });
    return {
      queueUpload,
      async syncNow() {
        await uploadNow();
      },
      async forcePull() {
        await pullNow();
      },
      async forcePush() {
        await uploadNow();
      }
    };
  }
  function createNoopSync() {
    return {
      queueUpload() {
      },
      async syncNow() {
      },
      async forcePull() {
      },
      async forcePush() {
      }
    };
  }
  var MAX_CLOUD_PAYLOAD_BYTES, COMPACT_DRAWING_BUDGET_BYTES;
  var init_cloudSync = __esm({
    "js/features/cloudSync.js"() {
      init_syncConfig();
      MAX_CLOUD_PAYLOAD_BYTES = 85e4;
      COMPACT_DRAWING_BUDGET_BYTES = 22e4;
    }
  });

  // js/features/srs.js
  function createSrsManager(state) {
    function getMistakeKey(answerMode = "typing") {
      return answerMode === "drawing" ? "recentDrawingMistakes" : "recentTypingMistakes";
    }
    function getDueRomajiList() {
      const now = Date.now();
      return Object.entries(state.srsByRomaji).filter(([, entry]) => Number(entry.dueAt || 0) <= now).sort((a, b2) => Number(a[1].dueAt || 0) - Number(b2[1].dueAt || 0)).map(([romaji]) => romaji);
    }
    function upsertRecentMistake(romaji, answerMode = "typing") {
      const key = getMistakeKey(answerMode);
      const source = Array.isArray(state[key]) ? state[key] : [];
      state[key] = [
        romaji,
        ...source.filter((value) => value !== romaji)
      ].slice(0, MAX_RECENT_MISTAKES);
      state.recentMistakes = [.../* @__PURE__ */ new Set([...state.recentTypingMistakes || [], ...state.recentDrawingMistakes || []])].slice(0, MAX_RECENT_MISTAKES);
    }
    function removeRecentMistake(romaji, answerMode = "typing") {
      const key = getMistakeKey(answerMode);
      const source = Array.isArray(state[key]) ? state[key] : [];
      state[key] = source.filter((value) => value !== romaji);
      state.recentMistakes = [.../* @__PURE__ */ new Set([...state.recentTypingMistakes || [], ...state.recentDrawingMistakes || []])].slice(0, MAX_RECENT_MISTAKES);
    }
    function getRecentMistakesByMode(answerMode = "typing") {
      const key = getMistakeKey(answerMode);
      return Array.isArray(state[key]) ? state[key] : [];
    }
    function updateSrsOnAttempt(romaji, wasCorrect, answerMode = "typing", hintUsed = false) {
      const current = state.srsByRomaji[romaji] || {
        dueAt: 0,
        intervalHours: 0,
        lastSeenAt: 0,
        lastCorrect: false
      };
      if (!state.srsAccuracyWindow) state.srsAccuracyWindow = {};
      const window2 = Array.isArray(state.srsAccuracyWindow[romaji]) ? state.srsAccuracyWindow[romaji] : [];
      window2.push(wasCorrect);
      if (window2.length > ACCURACY_WINDOW_SIZE) window2.shift();
      state.srsAccuracyWindow[romaji] = window2;
      const now = Date.now();
      if (wasCorrect) {
        const previous = Number(current.intervalHours || 0);
        const accuracy = window2.length > 0 ? window2.filter(Boolean).length / window2.length : 0.5;
        let baseMultiplier;
        if (accuracy < 0.3) {
          baseMultiplier = 1.2;
        } else if (accuracy >= 0.7) {
          baseMultiplier = 3.5;
        } else {
          baseMultiplier = 2.5;
        }
        const multiplier = hintUsed ? Math.min(baseMultiplier, 1.25) : baseMultiplier;
        const nextInterval = previous <= 0 ? 1.5 : Math.min(previous * multiplier, 24 * 14);
        current.intervalHours = nextInterval;
        current.dueAt = now + nextInterval * 60 * 60 * 1e3;
        removeRecentMistake(romaji, answerMode);
      } else {
        current.intervalHours = 0.5;
        current.dueAt = now + 30 * 60 * 1e3;
        upsertRecentMistake(romaji, answerMode);
      }
      current.lastSeenAt = now;
      current.lastCorrect = wasCorrect;
      state.srsByRomaji[romaji] = current;
    }
    function getTotalAttempts2() {
      return Object.values(state.srsByRomaji).reduce((sum2, entry) => sum2 + (Number(entry.lastSeenAt) > 0 ? 1 : 0), 0);
    }
    return {
      getDueRomajiList,
      getRecentMistakesByMode,
      upsertRecentMistake,
      removeRecentMistake,
      updateSrsOnAttempt,
      getTotalAttempts: getTotalAttempts2
    };
  }
  var MAX_RECENT_MISTAKES, ACCURACY_WINDOW_SIZE;
  var init_srs = __esm({
    "js/features/srs.js"() {
      MAX_RECENT_MISTAKES = 120;
      ACCURACY_WINDOW_SIZE = 10;
    }
  });

  // js/features/queue.js
  function createQueueManager(state, elements, srsManager, getKanaCategoryFn) {
    function getActiveDatasetId() {
      return state.activeDataset || "kana";
    }
    function getQuestionKindForCurrentMode() {
      const mode = elements.modeSelect.value;
      if (mode === "romajiToKana" || mode === "kanjiDrawing") {
        return "drawing";
      }
      if (mode === "mixedPractice" || mode === "kanjiMixed") {
        return "mixed";
      }
      return "typing";
    }
    function getMistakeEntriesForKind(questionKind = "typing") {
      if (questionKind === "drawing") {
        return srsManager.getRecentMistakesByMode("drawing");
      }
      if (questionKind === "mixed") {
        return [
          .../* @__PURE__ */ new Set([
            ...srsManager.getRecentMistakesByMode("typing"),
            ...srsManager.getRecentMistakesByMode("drawing")
          ])
        ];
      }
      return srsManager.getRecentMistakesByMode("typing");
    }
    function getFrequentMistakesRomajiList(questionKind = "typing") {
      const entries = Object.values(state.backlog).map((row) => {
        let wrong = row.typingWrong;
        let right = row.typingRight;
        if (questionKind === "drawing") {
          wrong = row.drawingWrong;
          right = row.drawingRight;
        } else if (questionKind === "mixed") {
          wrong = row.typingWrong + row.drawingWrong;
          right = row.typingRight + row.drawingRight;
        }
        return {
          romaji: row.id || row.romaji,
          wrong,
          right,
          pressure: wrong * 2 - right
        };
      }).filter((item) => item.wrong >= 3 && item.pressure >= 4).sort((a, b2) => b2.pressure - a.pressure || b2.wrong - a.wrong).map((item) => item.romaji);
      return filterRomajiForCurrentKanaSet(entries).slice(0, 40);
    }
    function filterRomajiForCurrentKanaSet(romajiList) {
      if (getActiveDatasetId() !== "kana") {
        return romajiList;
      }
      const setMode = elements.kanaSetSelect.value;
      if (setMode === "all") {
        return romajiList;
      }
      return romajiList.filter((romaji) => getKanaCategoryFn(romaji) === setMode);
    }
    function getPreferredRomajiList(questionKind = getQuestionKindForCurrentMode()) {
      if (state.practiceStrategy === "mistakeReview") {
        return filterRomajiForCurrentKanaSet(getMistakeEntriesForKind(questionKind)).slice(0, 30);
      }
      if (state.practiceStrategy === "frequentMistakes") {
        return getFrequentMistakesRomajiList(questionKind);
      }
      if (state.practiceStrategy === "srs") {
        return filterRomajiForCurrentKanaSet(srsManager.getDueRomajiList()).slice(0, 30);
      }
      const totalAttempts = srsManager.getTotalAttempts();
      let mistakesCount, dueCount;
      if (totalAttempts < 100) {
        mistakesCount = 24;
        dueCount = 6;
      } else if (totalAttempts < 300) {
        mistakesCount = 18;
        dueCount = 12;
      } else {
        mistakesCount = 12;
        dueCount = 18;
      }
      const due = filterRomajiForCurrentKanaSet(srsManager.getDueRomajiList()).slice(0, dueCount);
      const mistakes = filterRomajiForCurrentKanaSet(getMistakeEntriesForKind(questionKind)).slice(0, mistakesCount);
      return [.../* @__PURE__ */ new Set([...mistakes, ...due])];
    }
    function updateQueueMeta() {
      const questionKind = getQuestionKindForCurrentMode();
      const due = srsManager.getDueRomajiList().length;
      const mistakes = getMistakeEntriesForKind(questionKind).length;
      const frequentMistakes = getFrequentMistakesRomajiList(questionKind).length;
      const strategy = state.practiceStrategy === "mistakeReview" ? `Mistakes: ${mistakes}` : state.practiceStrategy === "frequentMistakes" ? `Frequent mistakes: ${frequentMistakes}` : state.practiceStrategy === "srs" ? `Due: ${due}` : `Due ${due} \u2022 Mistakes ${mistakes}`;
      elements.queueMeta.textContent = strategy;
    }
    return {
      getPreferredRomajiList,
      getFrequentMistakesRomajiList,
      updateQueueMeta,
      filterRomajiForCurrentKanaSet
    };
  }
  var init_queue = __esm({
    "js/features/queue.js"() {
    }
  });

  // js/features/audio.js
  function createAudioManager(state, elements) {
    function getAudioTextForQuestion(question) {
      if (!question) {
        return "";
      }
      if (question.kind === "typing") {
        return question.kana;
      }
      if (question.canvasMode === "both") {
        return `${question.hiragana} ${question.katakana}`;
      }
      return question.canvasMode === "hiragana" ? question.hiragana : question.katakana;
    }
    function playCurrentAudio() {
      if (state.audioMuted) {
        return;
      }
      if (!window.speechSynthesis) {
        return;
      }
      const text = getAudioTextForQuestion(state.currentQuestion);
      if (!text) {
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = 0.75;
      utterance.pitch = 1.2;
      utterance.volume = 1;
      const speak = () => {
        const voices = window.speechSynthesis.getVoices();
        const japaneseVoice = voices.find((v2) => v2.lang && v2.lang.startsWith("ja-"));
        if (japaneseVoice) {
          utterance.voice = japaneseVoice;
        }
        window.speechSynthesis.speak(utterance);
      };
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = speak;
        setTimeout(speak, 100);
      } else {
        speak();
      }
    }
    function refreshAudioButton() {
      elements.muteAudioBtn.textContent = state.audioMuted ? "Audio: Off" : "Audio: On";
      elements.muteAudioBtn.setAttribute("aria-pressed", String(state.audioMuted));
    }
    function toggleAudioMute() {
      state.audioMuted = !state.audioMuted;
      refreshAudioButton();
    }
    return {
      getAudioTextForQuestion,
      playCurrentAudio,
      refreshAudioButton,
      toggleAudioMute
    };
  }
  var init_audio = __esm({
    "js/features/audio.js"() {
    }
  });

  // js/features/answering.js
  function createAnsweringManager({
    state,
    elements,
    srsManager,
    queueManager,
    hintsManager,
    showResult: showResult2,
    showTypingMistake: showTypingMistake2,
    updateBacklog: updateBacklog2,
    addDailyAttemptFn,
    eventBus: eventBus2
  }) {
    function getAcceptedRomajiSet(question) {
      const primary = String(question.romaji || "");
      const accepted = /* @__PURE__ */ new Set([primary]);
      const kana = String(question.kana || "");
      if (kana === "\u3062" || kana === "\u30C2") {
        accepted.add("di");
        accepted.add("ji");
      }
      if (kana === "\u3065" || kana === "\u30C5") {
        accepted.add("du");
        accepted.add("zu");
      }
      return accepted;
    }
    function getAnswerNormalizer(question) {
      if (question && question.answerNormalizer === "english") {
        return normalizeEnglishAnswer;
      }
      if (question && question.answerNormalizer === "forgiving-romaji") {
        return normalizeForgivingRomaji;
      }
      if (question && question.answerNormalizer === "exact") {
        return (value) => String(value || "").trim();
      }
      return normalizeLooseText;
    }
    function isTypingAnswerCorrect(question, userAnswer) {
      if (Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length > 0) {
        return matchesAnyNormalizedAnswer(userAnswer, question.acceptedAnswers, getAnswerNormalizer(question));
      }
      return getAcceptedRomajiSet(question).has(userAnswer);
    }
    function recordDailyDetail(romaji, wasCorrect) {
      if (!state.dailyDetailStats) state.dailyDetailStats = {};
      const todayKey = getTodayKey();
      if (!state.dailyDetailStats[todayKey]) state.dailyDetailStats[todayKey] = {};
      const entry = state.dailyDetailStats[todayKey][romaji] || { right: 0, wrong: 0 };
      if (wasCorrect) {
        entry.right += 1;
      } else {
        entry.wrong += 1;
      }
      state.dailyDetailStats[todayKey][romaji] = entry;
    }
    function validateTypingAnswer(answer) {
      if (!answer) {
        const reason = state.currentQuestion && state.currentQuestion.answerLabel ? `${state.currentQuestion.answerLabel}.` : "Type an answer.";
        return { correct: false, answer: "", reason };
      }
      return { correct: true, answer };
    }
    function processTypingAnswer(userRomaji) {
      if (!state.currentQuestion) {
        showResult2("Create a question first.", false);
        return { accepted: false, correct: false };
      }
      const validation = validateTypingAnswer(userRomaji);
      if (!validation.correct) {
        showResult2(validation.reason, false);
        return { accepted: false, correct: false };
      }
      const correctAnswer = state.currentQuestion.displayAnswer || state.currentQuestion.romaji;
      const trackingRomaji = state.currentQuestion.trackingId || state.currentQuestion.trackingRomaji || state.currentQuestion.romaji;
      const correct = isTypingAnswerCorrect(state.currentQuestion, userRomaji);
      const hintUsed = hintsManager && hintsManager.getHintsUsed() > 0;
      if (correct) {
        state.typingRightCount += 1;
        showResult2("Correct!", true);
      } else {
        state.typingWrongCount += 1;
        showTypingMistake2(userRomaji, correctAnswer);
        if (userRomaji) {
          if (!state.confusionPairs[trackingRomaji]) {
            state.confusionPairs[trackingRomaji] = {};
          }
          state.confusionPairs[trackingRomaji][userRomaji] = (state.confusionPairs[trackingRomaji][userRomaji] || 0) + 1;
        }
      }
      updateBacklog2({
        backlog: state.backlog,
        romaji: trackingRomaji,
        wasCorrect: correct,
        scriptContext: state.currentQuestion.scriptContext || (state.currentQuestion.scriptName === "Hiragana" ? "hiragana" : "katakana"),
        answerMode: "typing"
      });
      srsManager.updateSrsOnAttempt(trackingRomaji, correct, "typing", hintUsed);
      addDailyAttemptFn(state, "typing", correct, trackingRomaji);
      recordDailyDetail(trackingRomaji, correct);
      queueManager.updateQueueMeta();
      eventBus2.emit(correct ? "answer:correct" : "answer:wrong", { romaji: trackingRomaji, mode: "typing", userInput: userRomaji });
      return { accepted: true, correct, correctAnswer };
    }
    function processDrawingResult(wasCorrect, saveDrawingFn) {
      if (!state.currentQuestion) {
        showResult2("Create a question first.", false);
        return;
      }
      if (wasCorrect) {
        state.drawingRightCount += 1;
        saveDrawingFn();
      } else {
        state.drawingWrongCount += 1;
      }
      const romaji = state.currentQuestion.trackingId || state.currentQuestion.romaji;
      updateBacklog2({ backlog: state.backlog, romaji, wasCorrect, scriptContext: state.currentQuestion.canvasMode, answerMode: "drawing" });
      srsManager.updateSrsOnAttempt(romaji, wasCorrect, "drawing", false);
      addDailyAttemptFn(state, "drawing", wasCorrect, romaji);
      recordDailyDetail(romaji, wasCorrect);
      queueManager.updateQueueMeta();
      eventBus2.emit(wasCorrect ? "answer:correct" : "answer:wrong", { romaji, mode: "drawing" });
    }
    return {
      validateTypingAnswer,
      processTypingAnswer,
      processDrawingResult
    };
  }
  var init_answering = __esm({
    "js/features/answering.js"() {
      init_utils();
    }
  });

  // js/features/progressLayout.js
  function createProgressLayoutManager({ state, elements, persistState }) {
    function normalizeState() {
      const validSubtabs = ["overview", "trends", "compare", "sync"];
      state.progressSubtab = validSubtabs.includes(state.progressSubtab) ? state.progressSubtab : "overview";
      if (!state.progressCollapsedSections || typeof state.progressCollapsedSections !== "object") {
        state.progressCollapsedSections = {
          overview: false,
          trends: false,
          compare: false,
          sync: false
        };
        return;
      }
      state.progressCollapsedSections = {
        overview: Boolean(state.progressCollapsedSections.overview),
        trends: Boolean(state.progressCollapsedSections.trends),
        compare: Boolean(state.progressCollapsedSections.compare),
        sync: Boolean(state.progressCollapsedSections.sync)
      };
    }
    function render() {
      normalizeState();
      const tabMap = {
        overview: elements.progressOverviewTabBtn,
        trends: elements.progressTrendsTabBtn,
        compare: elements.progressCompareTabBtn,
        sync: elements.progressSyncTabBtn
      };
      const panelMap = {
        overview: elements.progressOverviewSection,
        trends: elements.progressTrendsSection,
        compare: elements.progressCompareSection,
        sync: elements.progressSyncSection
      };
      const bodyMap = {
        overview: elements.progressOverviewBody,
        trends: elements.progressTrendsBody,
        compare: elements.progressCompareBody,
        sync: elements.progressSyncBody
      };
      const toggleMap = {
        overview: elements.toggleOverviewSectionBtn,
        trends: elements.toggleTrendsSectionBtn,
        compare: elements.toggleCompareSectionBtn,
        sync: elements.toggleSyncSectionBtn
      };
      Object.keys(tabMap).forEach((key) => {
        const isActive = state.progressSubtab === key;
        tabMap[key].classList.toggle("active", isActive);
        tabMap[key].setAttribute("aria-selected", String(isActive));
        panelMap[key].classList.toggle("hidden", !isActive);
        const isCollapsed = Boolean(state.progressCollapsedSections[key]);
        bodyMap[key].classList.toggle("hidden", isCollapsed);
        toggleMap[key].textContent = isCollapsed ? "Show" : "Hide";
        toggleMap[key].setAttribute("aria-expanded", String(!isCollapsed));
      });
    }
    function setActiveSubtab(subtabName, persist = false) {
      state.progressSubtab = subtabName;
      render();
      if (persist) {
        persistState();
      }
    }
    function toggleSection(sectionName) {
      normalizeState();
      state.progressCollapsedSections[sectionName] = !state.progressCollapsedSections[sectionName];
      render();
      persistState();
    }
    function openSyncSection() {
      normalizeState();
      state.progressCollapsedSections.sync = false;
      setActiveSubtab("sync", true);
    }
    return {
      normalizeState,
      render,
      setActiveSubtab,
      toggleSection,
      openSyncSection
    };
  }
  var init_progressLayout = __esm({
    "js/features/progressLayout.js"() {
    }
  });

  // js/features/progressPreferences.js
  function clampDailyGoal(value, min = 0, max = 200, fallback = 0) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) {
      return fallback;
    }
    return Math.max(min, Math.min(max, Math.round(parsed)));
  }
  function createProgressPreferencesManager({
    state,
    elements,
    persistState,
    refreshProgressView,
    renderBacklogView,
    showResult: showResult2
  }) {
    const DATASET_IDS2 = ["kana", "words", "kanji"];
    function createDefaultBacklogFilters2() {
      return {
        status: "all",
        script: "all",
        weakness: "all",
        minAttempts: 0,
        compact: false
      };
    }
    function normalizeBacklogFiltersShape(filters) {
      const source = filters && typeof filters === "object" ? filters : {};
      const status = ["all", "weak", "strong", "unseen"].includes(source.status) ? source.status : "all";
      const weakness = ["all", "typing", "drawing"].includes(source.weakness) ? source.weakness : "all";
      const scriptValue = typeof source.script === "string" && source.script.trim() ? source.script.trim().slice(0, 64) : "all";
      return {
        status,
        script: scriptValue,
        weakness,
        minAttempts: clampDailyGoal(source.minAttempts, 0, 999, 0),
        compact: Boolean(source.compact)
      };
    }
    function getActiveDatasetId() {
      return DATASET_IDS2.includes(state.activeDataset) ? state.activeDataset : "kana";
    }
    function ensureBacklogFiltersByDataset() {
      const activeDatasetId = getActiveDatasetId();
      const sourceMap = state.backlogFiltersByDataset && typeof state.backlogFiltersByDataset === "object" ? state.backlogFiltersByDataset : {};
      const legacyActiveFilters = normalizeBacklogFiltersShape(state.backlogFilters);
      const nextMap = {};
      DATASET_IDS2.forEach((datasetId) => {
        if (sourceMap[datasetId] && typeof sourceMap[datasetId] === "object") {
          nextMap[datasetId] = normalizeBacklogFiltersShape(sourceMap[datasetId]);
          return;
        }
        if (datasetId === activeDatasetId) {
          nextMap[datasetId] = legacyActiveFilters;
          return;
        }
        nextMap[datasetId] = createDefaultBacklogFilters2();
      });
      state.backlogFiltersByDataset = nextMap;
      state.backlogFilters = { ...nextMap[activeDatasetId] };
      return state.backlogFilters;
    }
    function normalizeDailyGoalsFromState() {
      const current = state.dailyGoals || {};
      const next = {
        total: clampDailyGoal(current.total, 5, 200, 25),
        typing: clampDailyGoal(current.typing, 0, 200, 12),
        drawing: clampDailyGoal(current.drawing, 0, 200, 8),
        normal: clampDailyGoal(current.normal, 0, 200, 10),
        dakuten: clampDailyGoal(current.dakuten, 0, 200, 6),
        yoon: clampDailyGoal(current.yoon, 0, 200, 6)
      };
      state.dailyGoals = next;
      state.dailyGoal = next.total;
    }
    function renderDailyGoalInputs() {
      normalizeDailyGoalsFromState();
      elements.dailyGoalTotalInput.value = String(state.dailyGoals.total);
      elements.dailyGoalTypingInput.value = String(state.dailyGoals.typing);
      elements.dailyGoalDrawingInput.value = String(state.dailyGoals.drawing);
      elements.dailyGoalNormalInput.value = String(state.dailyGoals.normal);
      elements.dailyGoalDakutenInput.value = String(state.dailyGoals.dakuten);
      elements.dailyGoalYoonInput.value = String(state.dailyGoals.yoon);
    }
    function saveDailyGoalFromUi() {
      state.dailyGoals = {
        total: clampDailyGoal(elements.dailyGoalTotalInput.value, 5, 200, 25),
        typing: clampDailyGoal(elements.dailyGoalTypingInput.value, 0, 200, 12),
        drawing: clampDailyGoal(elements.dailyGoalDrawingInput.value, 0, 200, 8),
        normal: clampDailyGoal(elements.dailyGoalNormalInput.value, 0, 200, 10),
        dakuten: clampDailyGoal(elements.dailyGoalDakutenInput.value, 0, 200, 6),
        yoon: clampDailyGoal(elements.dailyGoalYoonInput.value, 0, 200, 6)
      };
      state.dailyGoal = state.dailyGoals.total;
      renderDailyGoalInputs();
      persistState();
      refreshProgressView();
      showResult2("Daily goals saved.", true);
    }
    function resetBacklogFilters() {
      ensureBacklogFiltersByDataset();
      const activeDatasetId = getActiveDatasetId();
      const defaults = createDefaultBacklogFilters2();
      state.backlogFiltersByDataset[activeDatasetId] = defaults;
      state.backlogFilters = { ...defaults };
    }
    function renderBacklogFilterInputs() {
      ensureBacklogFiltersByDataset();
      function setSelectValue(selectElement, desiredValue, fallback = "all") {
        const options = Array.from(selectElement.options).map((option) => option.value);
        if (options.includes(desiredValue)) {
          selectElement.value = desiredValue;
          return desiredValue;
        }
        selectElement.value = options.includes(fallback) ? fallback : options[0] || "";
        return selectElement.value;
      }
      state.backlogFilters.status = setSelectValue(elements.backlogStatusFilter, state.backlogFilters.status, "all");
      state.backlogFilters.script = setSelectValue(elements.backlogScriptFilter, state.backlogFilters.script, "all");
      state.backlogFilters.weakness = setSelectValue(elements.backlogWeaknessFilter, state.backlogFilters.weakness, "all");
      elements.backlogMinAttemptsFilter.value = String(state.backlogFilters.minAttempts);
      if (elements.backlogCompactToggle) {
        elements.backlogCompactToggle.checked = Boolean(state.backlogFilters.compact);
      }
    }
    function applyBacklogFiltersFromUi() {
      ensureBacklogFiltersByDataset();
      const activeDatasetId = getActiveDatasetId();
      const nextFilters = {
        status: elements.backlogStatusFilter.value,
        script: elements.backlogScriptFilter.value,
        weakness: elements.backlogWeaknessFilter.value,
        minAttempts: clampDailyGoal(elements.backlogMinAttemptsFilter.value, 0, 999, 0),
        compact: Boolean(elements.backlogCompactToggle && elements.backlogCompactToggle.checked)
      };
      state.backlogFilters = nextFilters;
      state.backlogFiltersByDataset[activeDatasetId] = { ...nextFilters };
      renderBacklogFilterInputs();
      renderBacklogView();
      persistState();
    }
    return {
      clampDailyGoal,
      normalizeDailyGoalsFromState,
      renderDailyGoalInputs,
      saveDailyGoalFromUi,
      resetBacklogFilters,
      renderBacklogFilterInputs,
      applyBacklogFiltersFromUi
    };
  }
  var init_progressPreferences = __esm({
    "js/features/progressPreferences.js"() {
    }
  });

  // js/features/backup.js
  function createBackupManager({
    state,
    kanaData: kanaData2,
    MAX_DRAWINGS_PER_KANA: MAX_DRAWINGS_PER_KANA2,
    DAILY_HISTORY_LIMIT: DAILY_HISTORY_LIMIT2,
    showResultFn,
    buildProgressPayload: buildProgressPayload2,
    applyProgressPayload: applyProgressPayload2,
    onImportComplete
  }) {
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
        lastCorrect: importSeenAt >= localSeenAt ? Boolean(importedEntry && importedEntry.lastCorrect) : Boolean(localEntry && localEntry.lastCorrect)
      };
    }
    function mergeBacklogRow(targetRow, incomingRow) {
      if (!incomingRow || typeof incomingRow !== "object") {
        return;
      }
      const numericKeys = [
        "right",
        "wrong",
        "typingRight",
        "typingWrong",
        "drawingRight",
        "drawingWrong",
        "hiraganaTypingRight",
        "hiraganaTypingWrong",
        "hiraganaDrawingRight",
        "hiraganaDrawingWrong",
        "hiraganaRight",
        "hiraganaWrong",
        "katakanaTypingRight",
        "katakanaTypingWrong",
        "katakanaDrawingRight",
        "katakanaDrawingWrong",
        "katakanaRight",
        "katakanaWrong"
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
      const localPayload = buildProgressPayload2({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT2 });
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
        ...Array.isArray(importedPayload.recentTypingMistakes) ? importedPayload.recentTypingMistakes : [],
        ...Array.isArray(localPayload.recentTypingMistakes) ? localPayload.recentTypingMistakes : []
      ].filter((value) => typeof value === "string");
      const combinedDrawingMistakes = [
        ...Array.isArray(importedPayload.recentDrawingMistakes) ? importedPayload.recentDrawingMistakes : [],
        ...Array.isArray(localPayload.recentDrawingMistakes) ? localPayload.recentDrawingMistakes : []
      ].filter((value) => typeof value === "string");
      state.recentTypingMistakes = [...new Set(combinedTypingMistakes)].slice(0, 120);
      state.recentDrawingMistakes = [...new Set(combinedDrawingMistakes)].slice(0, 120);
      state.recentMistakes = [.../* @__PURE__ */ new Set([...state.recentTypingMistakes, ...state.recentDrawingMistakes])].slice(0, 120);
      if (importedPayload.drawingsByKana && typeof importedPayload.drawingsByKana === "object") {
        Object.keys(importedPayload.drawingsByKana).forEach((kanaChar) => {
          const localList = Array.isArray(state.drawingsByKana[kanaChar]) ? state.drawingsByKana[kanaChar] : [];
          const incomingList = Array.isArray(importedPayload.drawingsByKana[kanaChar]) ? importedPayload.drawingsByKana[kanaChar].filter((value) => typeof value === "string") : [];
          state.drawingsByKana[kanaChar] = [.../* @__PURE__ */ new Set([...incomingList, ...localList])].slice(0, MAX_DRAWINGS_PER_KANA2);
        });
      }
      const localGoals = localPayload.dailyGoals && typeof localPayload.dailyGoals === "object" ? localPayload.dailyGoals : { total: localPayload.dailyGoal };
      const incomingGoals = importedPayload.dailyGoals && typeof importedPayload.dailyGoals === "object" ? importedPayload.dailyGoals : { total: importedPayload.dailyGoal };
      const localTotalGoal = clampDailyGoal(localGoals.total, 5, 200, 25);
      const importedTotalGoal = clampDailyGoal(incomingGoals.total, 5, 200, 25);
      const shouldUseImportedGoals = localTotalGoal === 25 && importedTotalGoal !== 25;
      state.dailyGoals = {
        total: shouldUseImportedGoals ? importedTotalGoal : localTotalGoal,
        typing: shouldUseImportedGoals ? clampDailyGoal(incomingGoals.typing, 0, 200, 12) : clampDailyGoal(localGoals.typing, 0, 200, 12),
        drawing: shouldUseImportedGoals ? clampDailyGoal(incomingGoals.drawing, 0, 200, 8) : clampDailyGoal(localGoals.drawing, 0, 200, 8),
        normal: shouldUseImportedGoals ? clampDailyGoal(incomingGoals.normal, 0, 200, 10) : clampDailyGoal(localGoals.normal, 0, 200, 10),
        dakuten: shouldUseImportedGoals ? clampDailyGoal(incomingGoals.dakuten, 0, 200, 6) : clampDailyGoal(localGoals.dakuten, 0, 200, 6),
        yoon: shouldUseImportedGoals ? clampDailyGoal(incomingGoals.yoon, 0, 200, 6) : clampDailyGoal(localGoals.yoon, 0, 200, 6)
      };
      state.dailyGoal = state.dailyGoals.total;
      state.lastSavedAt = Math.max(toSafeCount(localPayload.savedAt), toSafeCount(importedPayload.savedAt));
    }
    function validateStateSchema(payload) {
      if (!payload || typeof payload !== "object") {
        return { ok: false, reason: "Payload is not an object." };
      }
      if (payload.backlog && typeof payload.backlog !== "object") {
        return { ok: false, reason: "backlog must be an object." };
      }
      if (payload.srsByRomaji && typeof payload.srsByRomaji !== "object") {
        return { ok: false, reason: "srsByRomaji must be an object." };
      }
      if (payload.dailyStats && typeof payload.dailyStats !== "object") {
        return { ok: false, reason: "dailyStats must be an object." };
      }
      if (payload.dailyCategoryStats && typeof payload.dailyCategoryStats !== "object") {
        return { ok: false, reason: "dailyCategoryStats must be an object." };
      }
      if (payload.drawingsByKana && typeof payload.drawingsByKana !== "object") {
        return { ok: false, reason: "drawingsByKana must be an object." };
      }
      const arraysToCheck = [
        ["recentTypingMistakes", payload.recentTypingMistakes],
        ["recentDrawingMistakes", payload.recentDrawingMistakes],
        ["recentMistakes", payload.recentMistakes]
      ];
      for (const [name4, value] of arraysToCheck) {
        if (value !== void 0 && !Array.isArray(value)) {
          return { ok: false, reason: `${name4} must be an array.` };
        }
      }
      return { ok: true };
    }
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
      const payload = buildProgressPayload2({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT2 });
      const now = /* @__PURE__ */ new Date();
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
      } catch (e) {
        showResultFn("Import failed: invalid JSON file.", false);
        return;
      }
      if (!payload || typeof payload !== "object") {
        showResultFn("Import failed: backup format is not valid.", false);
        return;
      }
      const schemaCheck = validateStateSchema(payload);
      if (!schemaCheck.ok) {
        showResultFn(`Import failed: ${schemaCheck.reason}`, false);
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
        applyProgressPayload2({
          payload,
          state,
          kanaData: kanaData2,
          maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA2,
          dailyHistoryLimit: DAILY_HISTORY_LIMIT2
        });
      }
      onImportComplete();
      showResultFn(
        shouldMerge ? "Backup merged into local progress." : "Backup imported and local progress restored.",
        true
      );
    }
    function getLocalPayload() {
      return buildProgressPayload2({ state, dailyHistoryLimit: DAILY_HISTORY_LIMIT2 });
    }
    function applyRemotePayload(payload) {
      applyProgressPayload2({
        payload,
        state,
        kanaData: kanaData2,
        maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA2,
        dailyHistoryLimit: DAILY_HISTORY_LIMIT2
      });
    }
    return {
      exportLocalProgress,
      importLocalProgressFromFile,
      getLocalPayload,
      applyRemotePayload
    };
  }
  var init_backup = __esm({
    "js/features/backup.js"() {
      init_progressPreferences();
    }
  });

  // js/features/distractors.js
  function createDistractorRenderer({ elements, state, kanaData: kanaData2 }) {
    function getLastVowel(romaji) {
      const match = String(romaji).match(/[aiueo](?!.*[aiueo])/);
      return match ? match[0] : "";
    }
    function getStem(romaji) {
      return String(romaji).replace(/[aiueo]$/, "");
    }
    function getLevenshteinDistance(a, b2) {
      const s = String(a);
      const t = String(b2);
      const rows = s.length + 1;
      const cols = t.length + 1;
      const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
      for (let i = 0; i < rows; i++) {
        dp[i][0] = i;
      }
      for (let j2 = 0; j2 < cols; j2++) {
        dp[0][j2] = j2;
      }
      for (let i = 1; i < rows; i++) {
        for (let j2 = 1; j2 < cols; j2++) {
          const cost = s[i - 1] === t[j2 - 1] ? 0 : 1;
          dp[i][j2] = Math.min(
            dp[i - 1][j2] + 1,
            dp[i][j2 - 1] + 1,
            dp[i - 1][j2 - 1] + cost
          );
        }
      }
      return dp[s.length][t.length];
    }
    function scoreDistractorSimilarity(correct, candidate) {
      let score = 0;
      const correctStr = String(correct);
      const candidateStr = String(candidate);
      if (candidateStr[0] === correctStr[0]) {
        score += 4;
      }
      if (candidateStr.slice(0, 2) === correctStr.slice(0, 2)) {
        score += 3;
      }
      if (getLastVowel(candidateStr) === getLastVowel(correctStr)) {
        score += 2;
      }
      if (getStem(candidateStr) === getStem(correctStr)) {
        score += 3;
      }
      if (candidateStr.includes("y") && correctStr.includes("y") || candidateStr.includes("sh") && correctStr.includes("sh")) {
        score += 1;
      }
      score -= getLevenshteinDistance(correctStr, candidateStr);
      return score;
    }
    function shuffleArray(values) {
      const arr = [...values];
      for (let i = arr.length - 1; i > 0; i--) {
        const j2 = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j2]] = [arr[j2], arr[i]];
      }
      return arr;
    }
    function pickRandomDistinct(source, count2, excluded = /* @__PURE__ */ new Set()) {
      const filtered = source.filter((item) => !excluded.has(item));
      const shuffled = shuffleArray(filtered);
      return shuffled.slice(0, count2);
    }
    function renderQuickAnswerOptions() {
      if (!elements.quickAnswerOptions) {
        return;
      }
      if (!state.currentQuestion || state.currentQuestion.kind !== "typing") {
        elements.quickAnswerOptions.innerHTML = "";
        elements.quickAnswerOptions.classList.add("hidden");
        return;
      }
      const correct = state.currentQuestion.romaji;
      const allRomaji = kanaData2.map((item) => item.romaji).filter((romaji) => romaji !== correct);
      const ranked = allRomaji.map((romaji) => ({ romaji, score: scoreDistractorSimilarity(correct, romaji) })).sort((a, b2) => b2.score - a.score);
      let similarPool = ranked.filter((item) => item.score >= 3).map((item) => item.romaji);
      if (similarPool.length < 6) {
        similarPool = ranked.slice(0, 12).map((item) => item.romaji);
      }
      const distractorSet = /* @__PURE__ */ new Set();
      const confusionPairs = state.confusionPairs && state.confusionPairs[correct] || {};
      const confusedRomaji = Object.entries(confusionPairs).sort((a, b2) => b2[1] - a[1]).map(([romaji]) => romaji).filter((romaji) => romaji !== correct && kanaData2.some((k2) => k2.romaji === romaji));
      confusedRomaji.slice(0, 2).forEach((romaji) => distractorSet.add(romaji));
      const similarNeeded = Math.max(0, 2 - distractorSet.size);
      pickRandomDistinct(similarPool, similarNeeded, distractorSet).forEach((romaji) => distractorSet.add(romaji));
      pickRandomDistinct(allRomaji, 1, distractorSet).forEach((romaji) => distractorSet.add(romaji));
      if (distractorSet.size < 3) {
        pickRandomDistinct(allRomaji, 3 - distractorSet.size, distractorSet).forEach(
          (romaji) => distractorSet.add(romaji)
        );
      }
      const options = shuffleArray([correct, ...distractorSet].slice(0, 4));
      elements.quickAnswerOptions.innerHTML = options.map(
        (romaji) => `<button type="button" class="quick-answer-btn" data-answer="${romaji}">${romaji}</button>`
      ).join("");
      elements.quickAnswerOptions.classList.remove("hidden");
    }
    return { renderQuickAnswerOptions };
  }
  var init_distractors = __esm({
    "js/features/distractors.js"() {
    }
  });

  // js/features/hints.js
  function createHintsManager() {
    let _fullAnswer = "";
    let _revealed = 0;
    function setQuestion(question) {
      _fullAnswer = String(question && (question.hintAnswer || question.romaji) ? question.hintAnswer || question.romaji : "");
      _revealed = 0;
    }
    function reset() {
      _fullAnswer = "";
      _revealed = 0;
    }
    function getHintsUsed() {
      return _revealed;
    }
    function getTotalHints() {
      return _fullAnswer.length;
    }
    function isExhausted() {
      return _revealed >= _fullAnswer.length && _fullAnswer.length > 0;
    }
    function revealNext() {
      if (!_fullAnswer) return null;
      if (_revealed < _fullAnswer.length) _revealed += 1;
      return _fullAnswer.slice(0, _revealed);
    }
    function getNextHint() {
      if (!_fullAnswer) return null;
      return _fullAnswer.slice(0, _revealed + 1);
    }
    function getFullHint() {
      return _fullAnswer;
    }
    return {
      setQuestion,
      reset,
      getHintsUsed,
      getTotalHints,
      isExhausted,
      revealNext,
      getNextHint,
      getFullHint
    };
  }
  var init_hints = __esm({
    "js/features/hints.js"() {
    }
  });

  // js/core/keyboard.js
  var KeyboardController;
  var init_keyboard = __esm({
    "js/core/keyboard.js"() {
      KeyboardController = class {
        /**
         * @param {HTMLElement} inputElement - The typing answer input element.
         *   Shortcuts are suppressed while this element has focus.
         */
        constructor(inputElement) {
          this._input = inputElement;
          this._handlers = /* @__PURE__ */ new Map();
          this._listener = this._onKeyDown.bind(this);
          document.addEventListener("keydown", this._listener);
        }
        /**
         * Register a keyboard shortcut.
         * @param {string} code - KeyboardEvent.code value, e.g. "Space", "KeyR"
         * @param {function} handler
         */
        register(code, handler) {
          this._handlers.set(code, handler);
        }
        /** Remove a registered shortcut. */
        unregister(code) {
          this._handlers.delete(code);
        }
        /** Detach the global listener (call on teardown). */
        destroy() {
          document.removeEventListener("keydown", this._listener);
        }
        _onKeyDown(event) {
          if (document.querySelector(".confirm-overlay")) {
            return;
          }
          const active = document.activeElement;
          if (active === this._input || active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) {
            return;
          }
          const handler = this._handlers.get(event.code);
          if (!handler) return;
          event.preventDefault();
          try {
            handler(event);
          } catch (err) {
            console.error(`[KeyboardController] Error in handler for "${event.code}":`, err);
          }
        }
      };
    }
  });

  // js/core/confirm.js
  function showConfirm(message, confirmLabel = "Confirm", cancelLabel = "Cancel") {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.className = "confirm-overlay";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "Confirmation");
      const dialog = document.createElement("div");
      dialog.className = "confirm-dialog";
      const msg = document.createElement("p");
      msg.className = "confirm-message";
      msg.textContent = message;
      const actions = document.createElement("div");
      actions.className = "confirm-actions";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "btn-secondary confirm-cancel";
      cancelBtn.textContent = cancelLabel;
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = "btn-danger confirm-ok";
      confirmBtn.textContent = confirmLabel;
      actions.append(cancelBtn, confirmBtn);
      dialog.append(msg, actions);
      overlay.append(dialog);
      document.body.append(overlay);
      cancelBtn.focus();
      function cleanup(result) {
        overlay.remove();
        resolve(result);
      }
      confirmBtn.addEventListener("click", () => cleanup(true));
      cancelBtn.addEventListener("click", () => cleanup(false));
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) cleanup(false);
      });
      function onKeyDown(event) {
        if (event.key === "Escape") {
          document.removeEventListener("keydown", onKeyDown);
          cleanup(false);
        }
      }
      document.addEventListener("keydown", onKeyDown);
    });
  }
  var init_confirm = __esm({
    "js/core/confirm.js"() {
    }
  });

  // js/init/eventBinder.js
  function bindEvents(elements, state) {
    elements.newQuestionBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_REQUEST_NEW));
    elements.datasetSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_DATASET_CHANGED));
    elements.modeSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_MODE_CHANGED));
    elements.scriptSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_REQUEST_NEW));
    elements.kanaSetSelect.addEventListener("change", () => eventBus.emit(EVENT_NAMES.QUIZ_KANA_SET_CHANGED));
    elements.practiceStrategySelect.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.QUIZ_STRATEGY_CHANGED)
    );
    elements.writingScriptSelect.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.QUIZ_WRITING_SCRIPT_CHANGED)
    );
    elements.checkBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_CHECK_ANSWER));
    elements.answerInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        eventBus.emit(EVENT_NAMES.QUIZ_CHECK_ANSWER);
      }
    });
    elements.answerInput.addEventListener("input", () => {
      const el = elements.answerInput;
      const current = "value" in el ? el.value : el.textContent || "";
      const cleaned = current.replace(/[\r\n]+/g, "");
      if (cleaned !== current) {
        if ("value" in el) {
          el.value = cleaned;
        } else {
          el.textContent = cleaned;
        }
      }
    });
    if (elements.quickAnswerOptions) {
      elements.quickAnswerOptions.addEventListener("click", (event) => {
        const button = event.target.closest(".quick-answer-btn");
        if (!button || button.disabled) return;
        eventBus.emit(EVENT_NAMES.QUIZ_QUICK_ANSWER, { answer: button.dataset.answer || "" });
      });
    }
    elements.revealBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_REVEAL_DRAWING));
    elements.clearCanvasBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_CLEAR_CANVAS));
    elements.markRightBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_MARK_RIGHT));
    elements.markWrongBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_MARK_WRONG));
    elements.playAudioBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.AUDIO_PLAY));
    elements.muteAudioBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.AUDIO_TOGGLE_MUTE));
    elements.backlogTabBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.TAB_BACKLOG));
    elements.dailyProgressTabBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.TAB_PROGRESS));
    elements.openSyncBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.TAB_SYNC));
    elements.progressOverviewTabBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "overview" })
    );
    elements.progressTrendsTabBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "trends" })
    );
    elements.progressCompareTabBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "compare" })
    );
    elements.progressSyncTabBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_TAB_CHANGED, { tab: "sync" })
    );
    elements.toggleOverviewSectionBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "overview" })
    );
    elements.toggleTrendsSectionBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "trends" })
    );
    elements.toggleCompareSectionBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "compare" })
    );
    elements.toggleSyncSectionBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, { section: "sync" })
    );
    elements.backlogStatusFilter.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
    );
    elements.backlogScriptFilter.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
    );
    elements.backlogWeaknessFilter.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
    );
    elements.backlogMinAttemptsFilter.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
    );
    elements.backlogCompactToggle.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_CHANGED)
    );
    elements.resetBacklogFiltersBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.BACKLOG_FILTER_RESET)
    );
    elements.saveDailyGoalBtn.addEventListener(
      "click",
      () => eventBus.emit(EVENT_NAMES.SETTINGS_SAVE_GOAL)
    );
    [
      elements.dailyGoalTotalInput,
      elements.dailyGoalTypingInput,
      elements.dailyGoalDrawingInput,
      elements.dailyGoalNormalInput,
      elements.dailyGoalDakutenInput,
      elements.dailyGoalYoonInput
    ].forEach((input) => {
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          eventBus.emit(EVENT_NAMES.SETTINGS_SAVE_GOAL);
        }
      });
    });
    elements.drawGuideToggle.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.SETTINGS_DRAW_GUIDE_CHANGED)
    );
    elements.helperToggle.addEventListener(
      "change",
      () => eventBus.emit(EVENT_NAMES.SETTINGS_HELPER_TOGGLE_CHANGED)
    );
    elements.exportDataBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.DATA_EXPORT));
    elements.importDataBtn.addEventListener("click", () => elements.importDataInput.click());
    elements.importDataInput.addEventListener("change", () => {
      const file = elements.importDataInput.files && elements.importDataInput.files[0] ? elements.importDataInput.files[0] : null;
      eventBus.emit(EVENT_NAMES.DATA_IMPORT, { file });
      elements.importDataInput.value = "";
    });
    elements.resetAllDataBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.QUIZ_RESET_ALL));
    elements.backlogPanel.addEventListener("click", (event) => {
      const button = event.target.closest(".view-drawings-btn");
      if (!button) return;
      const kanaChar = button.dataset.kana;
      if (kanaChar) eventBus.emit(EVENT_NAMES.GALLERY_OPEN, { kanaChar });
    });
    elements.closeGalleryBtn.addEventListener("click", () => eventBus.emit(EVENT_NAMES.GALLERY_CLOSE));
    window.addEventListener("resize", () => {
      redrawProgressGraph(elements, state);
      eventBus.emit(EVENT_NAMES.UI_RESIZE);
    });
    window.addEventListener("visibilitychange", () => {
      if (!document.hidden) eventBus.emit(EVENT_NAMES.UI_VISIBLE);
    });
    bindProgressCompareSelectors(elements, state);
  }
  var init_eventBinder = __esm({
    "js/init/eventBinder.js"() {
      init_eventBus();
      init_progress();
    }
  });

  // js/init/bootstrap.js
  var require_bootstrap = __commonJS({
    "js/init/bootstrap.js"() {
      init_kanaData();
      init_wordsData();
      init_kanjiData();
      init_elements();
      init_state();
      init_utils();
      init_eventBus();
      init_ui();
      init_backlog();
      init_quiz();
      init_storage();
      init_progress();
      init_drawing();
      init_cloudSync();
      init_srs();
      init_queue();
      init_audio();
      init_answering();
      init_progressLayout();
      init_progressPreferences();
      init_backup();
      init_distractors();
      init_hints();
      init_keyboard();
      init_confirm();
      init_eventBinder();
      var elements = getElements();
      var state = createState({ kanaData, wordsData, kanjiData });
      var DATASET_MODE_OPTIONS = {
        [DATASET_IDS.KANA]: [
          { value: "kanaToRomaji", label: "Kana \u2192 Romaji (type)" },
          { value: "romajiToKana", label: "Romaji \u2192 Kana (draw)" },
          { value: "mixedPractice", label: "Mixed (type + draw)" }
        ],
        [DATASET_IDS.WORDS]: [
          { value: "japaneseToEnglish", label: "Japanese \u2192 English" },
          { value: "englishToJapanese", label: "English \u2192 Japanese" },
          { value: "wordsMixed", label: "Mixed (J\u2194E)" }
        ],
        [DATASET_IDS.KANJI]: [
          { value: "kanjiToMeaning", label: "Kanji \u2192 Meaning" },
          { value: "meaningToKanji", label: "Meaning \u2192 Kanji" },
          { value: "promptToKanji", label: "Reading/Meaning \u2192 Kanji" },
          { value: "kanjiDrawing", label: "Kanji \u2192 Drawing" },
          { value: "kanjiMixed", label: "Mixed (Type + Draw)" }
        ]
      };
      var drawingFeature = createDrawingFeature({
        elements,
        state,
        maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
        eventBus,
        EVENT_NAMES
      });
      var getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);
      var srsManager = createSrsManager(state);
      var queueManager = createQueueManager(state, elements, srsManager, getKanaCategoryFn);
      var audioManager = createAudioManager(state, elements);
      var hintsManager = createHintsManager();
      var answeringManager = createAnsweringManager({
        state,
        elements,
        srsManager,
        queueManager,
        hintsManager,
        showResult: (msg, ok) => showResult(elements, msg, ok),
        showTypingMistake: (user, correct) => showTypingMistake(elements, user, correct),
        updateBacklog,
        addDailyAttemptFn: (targetState, mode, wasCorrect, romaji) => {
          const category = state.activeDataset === DATASET_IDS.KANA ? getKanaCategoryFn(romaji) : null;
          addDailyAttempt(targetState, mode, wasCorrect, category);
        },
        eventBus
      });
      var cloudSync = { queueUpload() {
      }, async syncNow() {
      } };
      var progressLayoutManager = null;
      var progressPreferencesManager = null;
      var backupManager = null;
      var distractorRenderer = null;
      var deferredInstallPrompt = null;
      var isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      function getAnswerInputValue() {
        if ("value" in elements.answerInput) return elements.answerInput.value;
        return elements.answerInput.textContent || "";
      }
      function setAnswerInputValue(value) {
        if ("value" in elements.answerInput) {
          elements.answerInput.value = value;
        } else {
          elements.answerInput.textContent = value;
        }
      }
      function focusAnswerInput() {
        elements.answerInput.focus();
      }
      function shouldAutoFocusAnswer() {
        return !isCoarsePointer;
      }
      function ensureAudioButtonsAboveKanaBox() {
        const playAudioBtn = document.getElementById("playAudioBtn");
        const muteAudioBtn = document.getElementById("muteAudioBtn");
        const promptWrap = document.querySelector(".prompt-wrap");
        const quizCard = promptWrap ? promptWrap.closest(".quiz") : null;
        if (!playAudioBtn || !muteAudioBtn || !promptWrap || !quizCard) return;
        let quickActions = quizCard.querySelector(".quiz-quick-actions");
        if (!quickActions) {
          quickActions = document.createElement("div");
          quickActions.className = "quiz-quick-actions";
        }
        quickActions.append(playAudioBtn, muteAudioBtn);
        quizCard.insertBefore(quickActions, promptWrap);
      }
      function setupPwaInstall() {
        if (!("serviceWorker" in navigator)) return;
        navigator.serviceWorker.register("sw.js").catch(() => {
        });
        window.addEventListener("beforeinstallprompt", (event) => {
          event.preventDefault();
          deferredInstallPrompt = event;
          elements.installAppBtn.classList.remove("hidden");
        });
        elements.installAppBtn.addEventListener("click", async () => {
          if (!deferredInstallPrompt) return;
          deferredInstallPrompt.prompt();
          await deferredInstallPrompt.userChoice;
          deferredInstallPrompt = null;
          elements.installAppBtn.classList.add("hidden");
        });
        window.addEventListener("appinstalled", () => {
          deferredInstallPrompt = null;
          elements.installAppBtn.classList.add("hidden");
        });
      }
      function renderBacklogView() {
        const isKanaDataset = state.activeDataset === DATASET_IDS.KANA;
        elements.datasetBacklogFallback.classList.toggle("hidden", isKanaDataset);
        elements.backlogPanel.querySelectorAll(".backlog-category").forEach((element) => {
          element.classList.toggle("hidden", !isKanaDataset);
        });
        const backlogIntro = elements.backlogPanel.querySelector("p");
        if (backlogIntro) {
          backlogIntro.classList.toggle("hidden", !isKanaDataset);
        }
        if (!isKanaDataset) {
          elements.datasetBacklogFallback.dataset.statusFilter = state.backlogFilters.status;
          elements.datasetBacklogFallback.dataset.weaknessFilter = state.backlogFilters.weakness;
          elements.datasetBacklogFallback.dataset.categoryFilter = state.backlogFilters.script;
          elements.datasetBacklogFallback.dataset.minAttempts = String(state.backlogFilters.minAttempts || 0);
          renderDatasetBacklog({
            datasetId: state.activeDataset,
            items: state.activeDataset === DATASET_IDS.WORDS ? wordsData : kanjiData,
            backlog: state.backlog,
            drawingsByItem: state.drawingsByKana,
            container: elements.datasetBacklogFallback
          });
          return;
        }
        elements.datasetBacklogFallback.innerHTML = "";
        renderBacklog({
          kanaData,
          backlog: state.backlog,
          drawingsByKana: state.drawingsByKana,
          getKanaCategoryFn,
          filters: state.backlogFilters
        });
      }
      function persistState() {
        saveProgress({
          storageKey: STORAGE_KEY,
          state,
          dailyHistoryLimit: DAILY_HISTORY_LIMIT
        });
        cloudSync.queueUpload();
      }
      function refreshProgressView() {
        renderDailyProgress({ elements, state, setActiveProgressTab });
        renderGoalProgress(elements, state);
        progressLayoutManager && progressLayoutManager.render();
      }
      function ensureTodayEntry() {
        const todayKey = getTodayKey();
        if (!state.dailyStats[todayKey]) {
          state.dailyStats[todayKey] = {
            typingRight: 0,
            typingWrong: 0,
            drawingRight: 0,
            drawingWrong: 0
          };
        }
        if (!state.dailyCategoryStats[todayKey]) {
          state.dailyCategoryStats[todayKey] = {
            normal: 0,
            dakuten: 0,
            yoon: 0
          };
        }
      }
      function populateModeOptions(datasetId) {
        const options = DATASET_MODE_OPTIONS[datasetId] || DATASET_MODE_OPTIONS[DATASET_IDS.KANA];
        const currentValue = elements.modeSelect.value;
        elements.modeSelect.innerHTML = options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
        if (options.some((option) => option.value === currentValue)) {
          elements.modeSelect.value = currentValue;
        }
      }
      function isHelperToggleEnabled() {
        if (state.activeDataset === DATASET_IDS.WORDS) {
          return state.showWordHelper;
        }
        if (state.activeDataset === DATASET_IDS.KANJI) {
          return state.showKanjiHelper;
        }
        return false;
      }
      function syncDatasetControls() {
        elements.datasetSelect.value = state.activeDataset;
        populateModeOptions(state.activeDataset);
        elements.practiceStrategySelect.value = state.practiceStrategy;
        if (state.activeDataset === DATASET_IDS.KANA) {
          elements.backlogScriptFilterLabel.textContent = "Script";
          elements.backlogScriptFilter.innerHTML = `
      <option value="all">Both</option>
      <option value="hiragana">Hiragana only</option>
      <option value="katakana">Katakana only</option>
    `;
          elements.backlogWeaknessFilterLabel.textContent = "Weakness";
          elements.backlogWeaknessFilter.innerHTML = `
      <option value="all">Any</option>
      <option value="typing">Typing weak</option>
      <option value="drawing">Drawing weak</option>
    `;
        } else if (state.activeDataset === DATASET_IDS.WORDS) {
          const categories = [...new Set(wordsData.map((item) => String(item.category || "core")))].sort();
          elements.backlogScriptFilterLabel.textContent = "Category";
          elements.backlogScriptFilter.innerHTML = `
      <option value="all">All</option>
      ${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}
    `;
          elements.backlogWeaknessFilterLabel.textContent = "Weakness";
          elements.backlogWeaknessFilter.innerHTML = `
      <option value="all">Any</option>
      <option value="typing">Typing weak</option>
    `;
        } else {
          const categories = [...new Set(kanjiData.map((item) => String(item.category || "numbers")))].sort();
          elements.backlogScriptFilterLabel.textContent = "Category";
          elements.backlogScriptFilter.innerHTML = `
      <option value="all">All</option>
      ${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}
    `;
          elements.backlogWeaknessFilterLabel.textContent = "Weakness";
          elements.backlogWeaknessFilter.innerHTML = `
      <option value="all">Any</option>
      <option value="typing">Typing weak</option>
      <option value="drawing">Drawing weak</option>
    `;
        }
        renderBacklogFilterInputs();
        const showHelperToggle = state.activeDataset === DATASET_IDS.WORDS || state.activeDataset === DATASET_IDS.KANJI;
        elements.helperToggleGroup.classList.toggle("hidden", !showHelperToggle);
        elements.helperToggle.checked = isHelperToggleEnabled();
      }
      function renderPromptHelper(text = "") {
        elements.promptHelper.textContent = text;
        elements.promptHelper.classList.toggle("hidden", !text);
      }
      function configureDrawingTitles(question) {
        if (question.canvasMode === "kanji") {
          elements.drawPaneTitlePrimary.textContent = "Kanji";
          elements.drawPaneTitleSecondary.textContent = "Reference";
          return;
        }
        elements.drawPaneTitlePrimary.textContent = "Hiragana";
        elements.drawPaneTitleSecondary.textContent = "Katakana";
      }
      function switchModeUI() {
        syncDatasetControls();
        const isKanaDataset = state.activeDataset === DATASET_IDS.KANA;
        const mode = elements.modeSelect.value;
        const isMixedMode = isKanaDataset && mode === "mixedPractice";
        const isKanjiMixedMode = state.activeDataset === DATASET_IDS.KANJI && mode === "kanjiMixed";
        const activeQuestionKind = state.currentQuestion ? state.currentQuestion.kind : "typing";
        const isTypingQuestion = isKanaDataset ? mode === "kanaToRomaji" || isMixedMode && activeQuestionKind === "typing" : mode !== "kanjiDrawing" && (!isKanjiMixedMode || activeQuestionKind === "typing");
        const isDrawingQuestion = isKanaDataset ? mode === "romajiToKana" || isMixedMode && activeQuestionKind === "drawing" : mode === "kanjiDrawing" || isKanjiMixedMode && activeQuestionKind === "drawing";
        elements.typingArea.classList.toggle("hidden", !isTypingQuestion);
        elements.drawingArea.classList.toggle("hidden", !isDrawingQuestion);
        elements.scriptSelect.closest(".control-group").classList.toggle("hidden", !isKanaDataset || !isTypingQuestion);
        elements.kanaSetSelect.closest(".control-group").classList.toggle("hidden", !isKanaDataset);
        elements.writingScriptGroup.classList.toggle("hidden", !isKanaDataset || !isDrawingQuestion);
        elements.scriptSelect.disabled = !isKanaDataset || !isTypingQuestion;
        drawingFeature.setDrawingMarkButtonsEnabled(false);
        if (isDrawingQuestion) {
          const currentMode = state.currentQuestion && state.currentQuestion.canvasMode ? state.currentQuestion.canvasMode : elements.writingScriptSelect.value === "mixed" ? "both" : elements.writingScriptSelect.value;
          drawingFeature.setDrawingCanvasVisibility(currentMode);
        }
        if (isTypingQuestion) {
          if (shouldAutoFocusAnswer()) focusAnswerInput();
          if (elements.quickAnswerOptions) {
            elements.quickAnswerOptions.classList.toggle("hidden", !(state.activeDataset === DATASET_IDS.KANA));
          }
        } else if (elements.quickAnswerOptions) {
          elements.quickAnswerOptions.classList.add("hidden");
        }
        resetResult(elements);
      }
      function newQuestion() {
        if (state.nextQuestionTimer) {
          clearTimeout(state.nextQuestionTimer);
          state.nextQuestionTimer = null;
        }
        hintsManager.reset();
        try {
          const mode = elements.modeSelect.value;
          const nextQuestionKind = state.activeDataset === DATASET_IDS.KANA ? mode === "kanaToRomaji" ? "typing" : mode === "romajiToKana" ? "drawing" : Math.random() > 0.5 ? "typing" : "drawing" : state.activeDataset === DATASET_IDS.KANJI ? mode === "kanjiDrawing" ? "drawing" : mode === "kanjiMixed" ? Math.random() < 0.3 ? "drawing" : "typing" : "typing" : "typing";
          const previousRomaji = state.currentQuestion ? state.currentQuestion.trackingId || state.currentQuestion.trackingRomaji || state.currentQuestion.romaji || null : null;
          const preferredRomajiList = queueManager.getPreferredRomajiList(nextQuestionKind);
          if (state.activeDataset === DATASET_IDS.KANA && nextQuestionKind === "typing") {
            state.currentQuestion = pickTypingQuestion({
              kanaData,
              scriptMode: elements.scriptSelect.value,
              kanaSet: elements.kanaSetSelect.value,
              getKanaCategoryFn,
              getQuestionWeightFn: getQuestionWeight,
              backlog: state.backlog,
              preferredRomajiList,
              avoidRomaji: previousRomaji
            });
          } else if (state.activeDataset === DATASET_IDS.KANA) {
            state.currentQuestion = pickWritingQuestion({
              kanaData,
              writingMode: elements.writingScriptSelect.value,
              kanaSet: elements.kanaSetSelect.value,
              getKanaCategoryFn,
              getQuestionWeightFn: getQuestionWeight,
              backlog: state.backlog,
              preferredRomajiList,
              avoidRomaji: previousRomaji
            });
          } else if (state.activeDataset === DATASET_IDS.WORDS) {
            state.currentQuestion = pickWordQuestion({
              wordsData,
              mode,
              backlog: state.backlog,
              preferredIds: preferredRomajiList,
              avoidId: previousRomaji,
              showRomaji: state.showWordHelper
            });
          } else {
            state.currentQuestion = pickKanjiQuestion({
              kanjiData,
              mode,
              backlog: state.backlog,
              preferredIds: preferredRomajiList,
              avoidId: previousRomaji,
              showRomaji: state.showKanjiHelper
            });
          }
        } catch (error) {
          state.currentQuestion = null;
          showResult(elements, `Question error: ${error.message}`, false);
          return;
        }
        switchModeUI();
        resetResult(elements);
        setAnswerInputValue("");
        drawingFeature.clearAllCanvases();
        drawingFeature.setDrawingMarkButtonsEnabled(false);
        renderPromptHelper(state.currentQuestion.helperText || "");
        if (state.currentQuestion.kind === "typing") {
          elements.promptElement.textContent = state.currentQuestion.promptText || state.currentQuestion.kana;
          elements.answerInputLabel.textContent = state.currentQuestion.answerLabel || "Type answer";
          elements.answerInput.placeholder = state.currentQuestion.placeholder || "Type your answer";
          hintsManager.setQuestion(state.currentQuestion);
          updateHintButton();
          if (shouldAutoFocusAnswer()) focusAnswerInput();
        } else {
          configureDrawingTitles(state.currentQuestion);
          drawingFeature.setDrawingCanvasVisibility(state.currentQuestion.canvasMode);
          elements.promptElement.textContent = state.currentQuestion.promptText;
        }
        if (state.activeDataset === DATASET_IDS.KANA) {
          distractorRenderer && distractorRenderer.renderQuickAnswerOptions();
        } else if (elements.quickAnswerOptions) {
          elements.quickAnswerOptions.innerHTML = "";
          elements.quickAnswerOptions.classList.add("hidden");
        }
        queueManager.updateQueueMeta();
        eventBus.emit(EVENT_NAMES.QUESTION_NEW);
      }
      function updateHintButton() {
        const btn = document.getElementById("hintBtn");
        if (!btn) return;
        const hintText = hintsManager.getNextHint();
        if (hintText === null) {
          btn.textContent = "Hint";
          btn.disabled = false;
          btn.classList.remove("hint-exhausted");
          return;
        }
        if (hintsManager.isExhausted()) {
          btn.textContent = hintsManager.getFullHint();
          btn.disabled = true;
          btn.classList.add("hint-exhausted");
          return;
        }
        btn.disabled = false;
        btn.classList.remove("hint-exhausted");
        btn.textContent = `Hint (${hintsManager.getHintsUsed()}/${hintsManager.getTotalHints()})`;
      }
      function scheduleNextTypingQuestion(delayMs = 700) {
        if (state.nextQuestionTimer) clearTimeout(state.nextQuestionTimer);
        state.nextQuestionTimer = setTimeout(() => {
          state.nextQuestionTimer = null;
          newQuestion();
        }, delayMs);
      }
      function checkTypingAnswer(forcedAnswer = null) {
        const rawAnswer = typeof forcedAnswer === "string" ? forcedAnswer : forcedAnswer && typeof forcedAnswer === "object" && typeof forcedAnswer.answer === "string" ? forcedAnswer.answer : getAnswerInputValue();
        const userAnswer = sanitizeRomaji(rawAnswer);
        const outcome = answeringManager.processTypingAnswer(userAnswer);
        if (!outcome || !outcome.accepted) return null;
        setAnswerInputValue("");
        scheduleNextTypingQuestion(outcome.correct ? 850 : 2200);
        return outcome;
      }
      function revealDrawingAnswer() {
        if (!state.currentQuestion) {
          showResult(elements, "Create a question first.", false);
          return;
        }
        showResult(elements, state.currentQuestion.revealText, true);
        drawingFeature.setDrawingMarkButtonsEnabled(true);
      }
      function markDrawingResult(wasCorrect) {
        answeringManager.processDrawingResult(wasCorrect, () => drawingFeature.saveCurrentDrawingIfCorrect());
        drawingFeature.setDrawingMarkButtonsEnabled(false);
        showResult(
          elements,
          wasCorrect ? "Saved as correct for this romaji." : "Saved as wrong for this romaji.",
          wasCorrect
        );
        newQuestion();
      }
      async function resetAllData() {
        const confirmed = await showConfirm(
          "Reset all quiz data, including backlog, drawings, and daily history?"
        );
        if (!confirmed) return;
        state.typingRightCount = 0;
        state.typingWrongCount = 0;
        state.drawingRightCount = 0;
        state.drawingWrongCount = 0;
        Object.values(state.datasets).forEach((datasetState) => {
          datasetState.practiceStrategy = "srs";
          datasetState.recentMistakes = [];
          datasetState.recentTypingMistakes = [];
          datasetState.recentDrawingMistakes = [];
          datasetState.typingRightCount = 0;
          datasetState.typingWrongCount = 0;
          datasetState.drawingRightCount = 0;
          datasetState.drawingWrongCount = 0;
          datasetState.confusionPairs = {};
          datasetState.srsAccuracyWindow = {};
          datasetState.dailyDetailStats = {};
          Object.keys(datasetState.srsByItem || {}).forEach((itemId) => {
            datasetState.srsByItem[itemId] = {
              dueAt: 0,
              intervalHours: 0,
              lastSeenAt: 0,
              lastCorrect: false
            };
          });
          Object.keys(datasetState.backlog || {}).forEach((itemId) => {
            const row = datasetState.backlog[itemId];
            row.right = 0;
            row.wrong = 0;
            row.typingRight = 0;
            row.typingWrong = 0;
            row.drawingRight = 0;
            row.drawingWrong = 0;
            if ("hiraganaTypingRight" in row) {
              row.hiraganaTypingRight = 0;
              row.hiraganaTypingWrong = 0;
              row.hiraganaDrawingRight = 0;
              row.hiraganaDrawingWrong = 0;
              row.hiraganaRight = 0;
              row.hiraganaWrong = 0;
              row.katakanaTypingRight = 0;
              row.katakanaTypingWrong = 0;
              row.katakanaDrawingRight = 0;
              row.katakanaDrawingWrong = 0;
              row.katakanaRight = 0;
              row.katakanaWrong = 0;
            }
          });
          Object.keys(datasetState.drawingsByItem || {}).forEach((key) => delete datasetState.drawingsByItem[key]);
          Object.keys(datasetState.dailyStats || {}).forEach((key) => delete datasetState.dailyStats[key]);
          Object.keys(datasetState.dailyCategoryStats || {}).forEach((key) => delete datasetState.dailyCategoryStats[key]);
        });
        state.lastCloudSyncAt = 0;
        state.syncUserEmail = "";
        state.dailyGoals = {
          total: 25,
          typing: 12,
          drawing: 8,
          normal: 10,
          dakuten: 6,
          yoon: 6
        };
        state.dailyGoal = 25;
        state.showWordHelper = false;
        state.showKanjiHelper = false;
        progressPreferencesManager && progressPreferencesManager.resetBacklogFilters();
        state.progressSubtab = "overview";
        state.progressCollapsedSections = {
          overview: false,
          trends: false,
          compare: false,
          sync: false
        };
        state.progressUiDayMarker = getTodayKey();
        state.lastSavedAt = 0;
        localStorage.removeItem(STORAGE_KEY);
        state.activeDataset = DATASET_IDS.KANA;
        syncDatasetControls();
        elements.practiceStrategySelect.value = state.practiceStrategy;
        progressPreferencesManager && progressPreferencesManager.renderDailyGoalInputs();
        progressPreferencesManager && progressPreferencesManager.renderBacklogFilterInputs();
        queueManager.updateQueueMeta();
        updateStats(elements, state);
        renderGoalProgress(elements, state);
        renderBacklogView();
        refreshProgressView();
        drawingFeature.clearAllCanvases();
        drawingFeature.setDrawingMarkButtonsEnabled(false);
        setActiveProgressTab(elements, "backlog");
        showResult(elements, "All saved progress has been reset.", true);
      }
      function setupAnswerInputGuards() {
        const input = elements.answerInput;
        function looksLikeCredential(value) {
          if (!value) return false;
          const trimmed = String(value).trim();
          if (!trimmed) return false;
          if (/https?:\/\//i.test(trimmed)) return true;
          if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return true;
          if (trimmed.length > 48 && /[A-Z]/.test(trimmed) && /\d/.test(trimmed) && /[^a-z0-9\s-]/i.test(trimmed)) return true;
          return false;
        }
        function clearCredentialLikeValue() {
          const current = "value" in input ? input.value : input.textContent || "";
          if (looksLikeCredential(current)) {
            if ("value" in input) input.value = "";
            else input.textContent = "";
          }
        }
        setTimeout(clearCredentialLikeValue, 200);
      }
      function normalizeDailyGoalsFromState() {
        progressPreferencesManager && progressPreferencesManager.normalizeDailyGoalsFromState();
      }
      function renderDailyGoalInputs() {
        progressPreferencesManager && progressPreferencesManager.renderDailyGoalInputs();
      }
      function saveDailyGoalFromUi() {
        progressPreferencesManager && progressPreferencesManager.saveDailyGoalFromUi();
      }
      function resetBacklogFilters() {
        progressPreferencesManager && progressPreferencesManager.resetBacklogFilters();
      }
      function renderBacklogFilterInputs() {
        progressPreferencesManager && progressPreferencesManager.renderBacklogFilterInputs();
      }
      function applyBacklogFiltersFromUi() {
        progressPreferencesManager && progressPreferencesManager.applyBacklogFiltersFromUi();
      }
      function normalizeProgressLayoutState() {
        progressLayoutManager && progressLayoutManager.normalizeState();
      }
      function renderProgressSubtabUi() {
        progressLayoutManager && progressLayoutManager.render();
      }
      function setActiveProgressSubtab(subtabName) {
        progressLayoutManager && progressLayoutManager.setActiveSubtab(subtabName);
      }
      function toggleProgressSection(sectionName) {
        progressLayoutManager && progressLayoutManager.toggleSection(sectionName);
      }
      function exportLocalProgress() {
        backupManager && backupManager.exportLocalProgress();
      }
      async function importLocalProgressFromFile(file) {
        backupManager && await backupManager.importLocalProgressFromFile(file);
      }
      function getLocalPayload() {
        return backupManager ? backupManager.getLocalPayload() : {};
      }
      function applyRemotePayload(payload) {
        backupManager && backupManager.applyRemotePayload(payload);
      }
      function subscribeToEvents() {
        const onAnswerProcessed = () => {
          updateStats(elements, state);
          renderGoalProgress(elements, state);
          renderBacklogView();
          refreshProgressView();
          persistState();
        };
        eventBus.on(EVENT_NAMES.ANSWER_CORRECT, onAnswerProcessed);
        eventBus.on(EVENT_NAMES.ANSWER_WRONG, onAnswerProcessed);
        eventBus.on(EVENT_NAMES.QUIZ_REQUEST_NEW, () => newQuestion());
        eventBus.on(EVENT_NAMES.QUIZ_DATASET_CHANGED, () => {
          state.activeDataset = elements.datasetSelect.value;
          syncDatasetControls();
          queueManager.updateQueueMeta();
          renderBacklogView();
          refreshProgressView();
          persistState();
          newQuestion();
        });
        eventBus.on(EVENT_NAMES.QUIZ_MODE_CHANGED, () => {
          switchModeUI();
          newQuestion();
        });
        eventBus.on(EVENT_NAMES.QUIZ_KANA_SET_CHANGED, () => {
          queueManager.updateQueueMeta();
          newQuestion();
        });
        eventBus.on(EVENT_NAMES.QUIZ_STRATEGY_CHANGED, () => {
          state.practiceStrategy = elements.practiceStrategySelect.value;
          queueManager.updateQueueMeta();
          persistState();
          newQuestion();
        });
        eventBus.on(EVENT_NAMES.QUIZ_WRITING_SCRIPT_CHANGED, () => {
          const mode = elements.modeSelect.value;
          if (mode === "romajiToKana" || mode === "mixedPractice") newQuestion();
        });
        eventBus.on(EVENT_NAMES.QUIZ_CHECK_ANSWER, () => checkTypingAnswer());
        eventBus.on(EVENT_NAMES.QUIZ_QUICK_ANSWER, ({ answer }) => {
          const normalizedAnswer = typeof answer === "string" ? answer : answer && typeof answer === "object" && typeof answer.answer === "string" ? answer.answer : "";
          setAnswerInputValue(normalizedAnswer);
          const outcome = checkTypingAnswer(normalizedAnswer);
          if (!outcome || !outcome.accepted) return;
          const optionButtons = elements.quickAnswerOptions ? Array.from(elements.quickAnswerOptions.querySelectorAll(".quick-answer-btn")) : [];
          optionButtons.forEach((btn) => {
            btn.disabled = true;
          });
          if (outcome.correct) {
            const clicked2 = optionButtons.find((btn) => btn.dataset.answer === normalizedAnswer);
            if (clicked2) clicked2.classList.add("is-correct");
            return;
          }
          const clicked = optionButtons.find((btn) => btn.dataset.answer === normalizedAnswer);
          if (clicked) clicked.classList.add("is-wrong");
          const correctBtn = optionButtons.find((btn) => btn.dataset.answer === outcome.correctAnswer);
          if (correctBtn) correctBtn.classList.add("is-correct");
        });
        eventBus.on(EVENT_NAMES.QUIZ_REVEAL_DRAWING, () => revealDrawingAnswer());
        eventBus.on(EVENT_NAMES.QUIZ_CLEAR_CANVAS, () => drawingFeature.clearAllCanvases());
        eventBus.on(EVENT_NAMES.QUIZ_MARK_RIGHT, () => markDrawingResult(true));
        eventBus.on(EVENT_NAMES.QUIZ_MARK_WRONG, () => markDrawingResult(false));
        eventBus.on(EVENT_NAMES.QUIZ_RESET_ALL, () => resetAllData());
        eventBus.on(EVENT_NAMES.TAB_BACKLOG, () => setActiveProgressTab(elements, "backlog"));
        eventBus.on(EVENT_NAMES.TAB_PROGRESS, () => setActiveProgressTab(elements, "daily"));
        eventBus.on(EVENT_NAMES.TAB_SYNC, () => {
          setActiveProgressTab(elements, "daily");
          progressLayoutManager && progressLayoutManager.openSyncSection();
          elements.syncCard.scrollIntoView({ behavior: "smooth", block: "start" });
          elements.syncEmail.focus();
        });
        eventBus.on(EVENT_NAMES.PROGRESS_TAB_CHANGED, ({ tab }) => {
          setActiveProgressSubtab(tab);
          persistState();
        });
        eventBus.on(EVENT_NAMES.PROGRESS_SECTION_TOGGLED, ({ section }) => {
          toggleProgressSection(section);
        });
        eventBus.on(EVENT_NAMES.BACKLOG_FILTER_CHANGED, () => applyBacklogFiltersFromUi());
        eventBus.on(EVENT_NAMES.BACKLOG_FILTER_RESET, () => {
          resetBacklogFilters();
          renderBacklogFilterInputs();
          renderBacklogView();
          persistState();
        });
        eventBus.on(EVENT_NAMES.SETTINGS_SAVE_GOAL, () => saveDailyGoalFromUi());
        eventBus.on(EVENT_NAMES.SETTINGS_DRAW_GUIDE_CHANGED, () => {
          state.drawGuideEnabled = elements.drawGuideToggle.checked;
          drawingFeature.setGuideEnabled(state.drawGuideEnabled);
          persistState();
        });
        eventBus.on(EVENT_NAMES.SETTINGS_HELPER_TOGGLE_CHANGED, () => {
          if (state.activeDataset === DATASET_IDS.WORDS) {
            state.showWordHelper = elements.helperToggle.checked;
          } else if (state.activeDataset === DATASET_IDS.KANJI) {
            state.showKanjiHelper = elements.helperToggle.checked;
          }
          persistState();
          newQuestion();
        });
        eventBus.on(EVENT_NAMES.DATA_EXPORT, () => exportLocalProgress());
        eventBus.on(EVENT_NAMES.DATA_IMPORT, async ({ file }) => {
          await importLocalProgressFromFile(file);
        });
        eventBus.on(EVENT_NAMES.AUDIO_PLAY, () => audioManager.playCurrentAudio());
        eventBus.on(EVENT_NAMES.AUDIO_TOGGLE_MUTE, () => {
          audioManager.toggleAudioMute();
          persistState();
        });
        eventBus.on(EVENT_NAMES.GALLERY_OPEN, ({ kanaChar }) => drawingFeature.openDrawingGallery(kanaChar));
        eventBus.on(EVENT_NAMES.GALLERY_CLOSE, () => elements.drawingGalleryDialog.close());
        eventBus.on(EVENT_NAMES.UI_VISIBLE, () => refreshProgressView());
        eventBus.on(EVENT_NAMES.SYNC_CONFLICT_APPLIED, () => {
          showConflictToast("Cloud data was newer \u2014 your local progress was updated from the cloud.");
        });
        const hintBtn = document.getElementById("hintBtn");
        if (hintBtn) {
          hintBtn.addEventListener("click", () => {
            const reveal = hintsManager.revealNext();
            if (reveal) {
              elements.answerInput.placeholder = reveal;
            }
            updateHintButton();
          });
        }
      }
      function showConflictToast(message) {
        const existing = document.getElementById("syncConflictToast");
        if (existing) existing.remove();
        const toast = document.createElement("div");
        toast.id = "syncConflictToast";
        toast.className = "conflict-toast";
        toast.setAttribute("role", "alert");
        toast.innerHTML = `
    <span>${message}</span>
    <button type="button" class="conflict-toast-close" aria-label="Dismiss">\u2715</button>
  `;
        toast.querySelector(".conflict-toast-close").addEventListener("click", () => toast.remove());
        document.body.appendChild(toast);
        setTimeout(() => {
          if (toast.parentNode) toast.remove();
        }, 7e3);
      }
      function setupKeyboardShortcuts() {
        const keyboard = new KeyboardController(elements.answerInput);
        keyboard.register("Space", () => {
          if (state.currentQuestion && state.currentQuestion.kind === "drawing") {
            eventBus.emit(EVENT_NAMES.QUIZ_REVEAL_DRAWING);
          }
        });
        keyboard.register("KeyR", () => {
          if (state.currentQuestion && state.currentQuestion.kind === "drawing") {
            if (!elements.markRightBtn.disabled) eventBus.emit(EVENT_NAMES.QUIZ_MARK_RIGHT);
          }
        });
        keyboard.register("KeyW", () => {
          if (state.currentQuestion && state.currentQuestion.kind === "drawing") {
            if (!elements.markWrongBtn.disabled) eventBus.emit(EVENT_NAMES.QUIZ_MARK_WRONG);
          }
        });
        keyboard.register("KeyN", () => eventBus.emit(EVENT_NAMES.QUIZ_REQUEST_NEW));
      }
      function init() {
        loadProgress({
          storageKey: STORAGE_KEY,
          state,
          kanaData,
          maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
          dailyHistoryLimit: DAILY_HISTORY_LIMIT
        });
        progressPreferencesManager = createProgressPreferencesManager({
          state,
          elements,
          persistState,
          refreshProgressView,
          renderBacklogView,
          showResult: (msg, ok) => showResult(elements, msg, ok)
        });
        progressLayoutManager = createProgressLayoutManager({
          state,
          elements,
          persistState
        });
        backupManager = createBackupManager({
          state,
          kanaData,
          MAX_DRAWINGS_PER_KANA,
          DAILY_HISTORY_LIMIT,
          showResultFn: (message, success) => showResult(elements, message, success),
          buildProgressPayload,
          applyProgressPayload,
          onImportComplete() {
            ensureTodayEntry();
            syncDatasetControls();
            elements.practiceStrategySelect.value = state.practiceStrategy;
            elements.drawGuideToggle.checked = state.drawGuideEnabled;
            renderDailyGoalInputs();
            renderBacklogFilterInputs();
            drawingFeature.setGuideEnabled(state.drawGuideEnabled);
            audioManager.refreshAudioButton();
            updateStats(elements, state);
            renderGoalProgress(elements, state);
            renderBacklogView();
            refreshProgressView();
            queueManager.updateQueueMeta();
            persistState();
          }
        });
        distractorRenderer = createDistractorRenderer({ elements, state, kanaData });
        ensureTodayEntry();
        setupCloudSync({
          elements,
          state,
          getLocalPayload,
          applyRemotePayload,
          onLocalStateApplied() {
            updateStats(elements, state);
            renderGoalProgress(elements, state);
            renderBacklogView();
            refreshProgressView();
            queueManager.updateQueueMeta();
            saveProgress({ storageKey: STORAGE_KEY, state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
          },
          onLocalStateSaved(payload) {
            state.lastSavedAt = Number(payload.savedAt || state.lastSavedAt || 0);
            state.lastCloudSyncAt = Number(payload.cloudSyncedAt || state.lastCloudSyncAt || 0);
            state.syncUserEmail = payload.userEmail || state.syncUserEmail || "";
          },
          eventBus
        }).then((syncApi) => {
          cloudSync = syncApi;
        }).catch((error) => {
          elements.syncStatus.textContent = `Cloud sync unavailable: ${error.message}`;
        });
        subscribeToEvents();
        bindEvents(elements, state);
        drawingFeature.bindCanvasEvents();
        setupKeyboardShortcuts();
        ensureAudioButtonsAboveKanaBox();
        setupAnswerInputGuards();
        setupPwaInstall();
        syncDatasetControls();
        elements.practiceStrategySelect.value = state.practiceStrategy;
        elements.drawGuideToggle.checked = state.drawGuideEnabled;
        normalizeDailyGoalsFromState();
        normalizeProgressLayoutState();
        renderDailyGoalInputs();
        renderBacklogFilterInputs();
        renderProgressSubtabUi();
        drawingFeature.setGuideEnabled(state.drawGuideEnabled);
        audioManager.refreshAudioButton();
        queueManager.updateQueueMeta();
        switchModeUI();
        drawingFeature.clearAllCanvases();
        updateStats(elements, state);
        renderGoalProgress(elements, state);
        renderBacklogView();
        refreshProgressView();
        setActiveProgressTab(elements, "backlog");
      }
      init();
    }
  });

  // js/app.js
  var require_app = __commonJS({
    "js/app.js"() {
      var import_bootstrap = __toESM(require_bootstrap());
    }
  });
  require_app();
})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-21205181.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
