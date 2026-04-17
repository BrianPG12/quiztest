(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
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
  var kanaData = [
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
    { romaji: "de", hiragana: "\u3067", katakana: "\u30C7" },
    { romaji: "do", hiragana: "\u3069", katakana: "\u30C9" },
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
  var YOON_SET = /* @__PURE__ */ new Set([
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
  var DAKUTEN_SET = /* @__PURE__ */ new Set([
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
    "de",
    "do",
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
  var STORAGE_KEY = "kanaQuizTrainer.v1";
  var MAX_DRAWINGS_PER_KANA = 16;
  var DAILY_HISTORY_LIMIT = 120;

  // js/dom/elements.js
  function getElements() {
    const canvasHiragana = document.getElementById("drawCanvasHiragana");
    const canvasKatakana = document.getElementById("drawCanvasKatakana");
    return {
      scriptSelect: document.getElementById("scriptSelect"),
      modeSelect: document.getElementById("modeSelect"),
      writingScriptGroup: document.getElementById("writingScriptGroup"),
      writingScriptSelect: document.getElementById("writingScriptSelect"),
      kanaSetSelect: document.getElementById("kanaSetSelect"),
      newQuestionBtn: document.getElementById("newQuestionBtn"),
      promptElement: document.getElementById("prompt"),
      typingArea: document.getElementById("typingArea"),
      drawingArea: document.getElementById("drawingArea"),
      answerInput: document.getElementById("answerInput"),
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
      openSyncBtn: document.getElementById("openSyncBtn"),
      resetAllDataBtn: document.getElementById("resetAllDataBtn"),
      backlogPanel: document.getElementById("backlogPanel"),
      progressPanel: document.getElementById("progressPanel"),
      compareDayASelect: document.getElementById("compareDayASelect"),
      compareDayBSelect: document.getElementById("compareDayBSelect"),
      compareSummary: document.getElementById("compareSummary"),
      dailyHistoryTable: document.getElementById("dailyHistoryTable"),
      syncEmail: document.getElementById("syncEmail"),
      syncPassword: document.getElementById("syncPassword"),
      signUpBtn: document.getElementById("signUpBtn"),
      loginBtn: document.getElementById("loginBtn"),
      logoutBtn: document.getElementById("logoutBtn"),
      syncNowBtn: document.getElementById("syncNowBtn"),
      forcePullBtn: document.getElementById("forcePullBtn"),
      forcePushBtn: document.getElementById("forcePushBtn"),
      syncCard: document.getElementById("syncCard"),
      syncStatus: document.getElementById("syncStatus"),
      dailyProgressGraph: document.getElementById("dailyProgressGraph"),
      drawingGalleryDialog: document.getElementById("drawingGalleryDialog"),
      galleryTitle: document.getElementById("galleryTitle"),
      galleryBody: document.getElementById("galleryBody"),
      closeGalleryBtn: document.getElementById("closeGalleryBtn"),
      canvasHiragana,
      canvasKatakana,
      ctxHiragana: canvasHiragana.getContext("2d"),
      ctxKatakana: canvasKatakana.getContext("2d"),
      dailyProgressGraphCtx: document.getElementById("dailyProgressGraph").getContext("2d")
    };
  }

  // js/core/utils.js
  function sanitizeRomaji(text) {
    return text.trim().toLowerCase();
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

  // js/core/state.js
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
  function createState(kanaData2) {
    return {
      currentQuestion: null,
      nextQuestionTimer: null,
      typingRightCount: 0,
      typingWrongCount: 0,
      drawingRightCount: 0,
      drawingWrongCount: 0,
      drawingsByKana: {},
      dailyStats: {},
      lastSavedAt: 0,
      progressUiDayMarker: getTodayKey(),
      backlog: createBacklog(kanaData2)
    };
  }

  // js/core/ui.js
  function updateStats(elements2, state2) {
    elements2.typingRightCountElement.textContent = String(state2.typingRightCount);
    elements2.typingWrongCountElement.textContent = String(state2.typingWrongCount);
    elements2.drawingRightCountElement.textContent = String(state2.drawingRightCount);
    elements2.drawingWrongCountElement.textContent = String(state2.drawingWrongCount);
  }
  function resetResult(elements2) {
    elements2.resultElement.textContent = "";
    elements2.resultElement.classList.remove("ok", "bad");
  }
  function showResult(elements2, message, isCorrect) {
    elements2.resultElement.textContent = message;
    elements2.resultElement.classList.toggle("ok", isCorrect);
    elements2.resultElement.classList.toggle("bad", !isCorrect);
  }
  function setActiveProgressTab(elements2, tabName) {
    const showBacklog = tabName === "backlog";
    elements2.backlogPanel.classList.toggle("hidden", !showBacklog);
    elements2.progressPanel.classList.toggle("hidden", showBacklog);
    elements2.backlogTabBtn.classList.toggle("active", showBacklog);
    elements2.dailyProgressTabBtn.classList.toggle("active", !showBacklog);
    elements2.backlogTabBtn.setAttribute("aria-selected", String(showBacklog));
    elements2.dailyProgressTabBtn.setAttribute("aria-selected", String(!showBacklog));
  }

  // js/features/backlog.js
  function getKanaCategory(romaji, YOON_SET2, DAKUTEN_SET2) {
    if (YOON_SET2.has(romaji)) return "yoon";
    if (DAKUTEN_SET2.has(romaji)) return "dakuten";
    return "normal";
  }
  function getCardStatus(stats) {
    if (stats.typingRight + stats.typingWrong + stats.drawingRight + stats.drawingWrong === 0) return "";
    const typingNetPositive = stats.typingRight > stats.typingWrong;
    const drawingNetPositive = stats.drawingRight > stats.drawingWrong;
    const enoughCombinedCorrect = stats.typingRight + stats.drawingRight > 3;
    if (typingNetPositive && drawingNetPositive && enoughCombinedCorrect) return "status-good";
    return "status-bad";
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
  function renderBacklog({ kanaData: kanaData2, backlog, drawingsByKana, getKanaCategoryFn: getKanaCategoryFn2 }) {
    function makeCard(kanaChar, romaji, row, scriptType) {
      const stats = getScriptStats(row, scriptType);
      const status = getCardStatus(stats);
      const drawingsCount = (drawingsByKana[kanaChar] || []).length;
      return `<div class="kana-card ${status}">
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
      const items = kanaData2.filter((item) => getKanaCategoryFn2(item.romaji) === category);
      document.getElementById(prefix + "HiraganaGrid").innerHTML = items.map((item) => {
        const row = backlog[item.romaji];
        return makeCard(item.hiragana, item.romaji, row, "hiragana");
      }).join("");
      document.getElementById(prefix + "KatakanaGrid").innerHTML = items.map((item) => {
        const row = backlog[item.romaji];
        return makeCard(item.katakana, item.romaji, row, "katakana");
      }).join("");
    }
    fillSection("normal", "normal");
    fillSection("dakuten", "dakuten");
    fillSection("yoon", "yoon");
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

  // js/features/quiz.js
  function pickQuestion({ kanaData: kanaData2, kanaSet, getKanaCategoryFn: getKanaCategoryFn2, getQuestionWeightFn, backlog }) {
    const pool = kanaSet === "all" ? kanaData2 : kanaData2.filter((item) => getKanaCategoryFn2(item.romaji) === kanaSet);
    const weights = pool.map((item) => getQuestionWeightFn(backlog, item));
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < pool.length; i++) {
      rand -= weights[i];
      if (rand <= 0) return pool[i];
    }
    return pool[pool.length - 1];
  }
  function pickTypingQuestion({ kanaData: kanaData2, scriptMode, kanaSet, getKanaCategoryFn: getKanaCategoryFn2, getQuestionWeightFn, backlog }) {
    const item = pickQuestion({ kanaData: kanaData2, kanaSet, getKanaCategoryFn: getKanaCategoryFn2, getQuestionWeightFn, backlog });
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
  function pickWritingQuestion({ kanaData: kanaData2, writingMode, kanaSet, getKanaCategoryFn: getKanaCategoryFn2, getQuestionWeightFn, backlog }) {
    const item = pickQuestion({ kanaData: kanaData2, kanaSet, getKanaCategoryFn: getKanaCategoryFn2, getQuestionWeightFn, backlog });
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
  function getScriptContextForTyping(question) {
    return question.scriptName === "Hiragana" ? "hiragana" : "katakana";
  }

  // js/features/storage.js
  function trimDailyStatsToLimit(dailyStats, limit) {
    const sorted = Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
    if (sorted.length <= limit) {
      return;
    }
    sorted.slice(limit).forEach((dateKey) => {
      delete dailyStats[dateKey];
    });
  }
  function buildProgressPayload({ state: state2, dailyHistoryLimit }) {
    trimDailyStatsToLimit(state2.dailyStats, dailyHistoryLimit);
    const savedAt = Date.now();
    state2.lastSavedAt = savedAt;
    return {
      savedAt,
      typingRightCount: state2.typingRightCount,
      typingWrongCount: state2.typingWrongCount,
      drawingRightCount: state2.drawingRightCount,
      drawingWrongCount: state2.drawingWrongCount,
      backlog: state2.backlog,
      drawingsByKana: state2.drawingsByKana,
      dailyStats: state2.dailyStats
    };
  }
  function applyProgressPayload({ payload, state: state2, kanaData: kanaData2, maxDrawingsPerKana, dailyHistoryLimit }) {
    if (!payload || typeof payload !== "object") {
      return;
    }
    state2.lastSavedAt = Number(payload.savedAt || 0);
    state2.typingRightCount = Number(payload.typingRightCount || 0);
    state2.typingWrongCount = Number(payload.typingWrongCount || 0);
    state2.drawingRightCount = Number(payload.drawingRightCount || 0);
    state2.drawingWrongCount = Number(payload.drawingWrongCount || 0);
    Object.keys(state2.drawingsByKana).forEach((kanaChar) => {
      delete state2.drawingsByKana[kanaChar];
    });
    Object.keys(state2.dailyStats).forEach((dateKey) => {
      delete state2.dailyStats[dateKey];
    });
    if (payload.backlog && typeof payload.backlog === "object") {
      kanaData2.forEach((item) => {
        const saved = payload.backlog[item.romaji];
        if (!saved || typeof saved !== "object") {
          return;
        }
        const target = state2.backlog[item.romaji];
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
    if (payload.drawingsByKana && typeof payload.drawingsByKana === "object") {
      Object.keys(payload.drawingsByKana).forEach((kanaChar) => {
        const savedList = payload.drawingsByKana[kanaChar];
        if (Array.isArray(savedList)) {
          state2.drawingsByKana[kanaChar] = savedList.filter((value) => typeof value === "string").slice(0, maxDrawingsPerKana);
        }
      });
    }
    if (payload.dailyStats && typeof payload.dailyStats === "object") {
      Object.keys(payload.dailyStats).forEach((dateKey) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
          return;
        }
        const saved = payload.dailyStats[dateKey];
        if (!saved || typeof saved !== "object") {
          return;
        }
        state2.dailyStats[dateKey] = {
          typingRight: Number(saved.typingRight || 0),
          typingWrong: Number(saved.typingWrong || 0),
          drawingRight: Number(saved.drawingRight || 0),
          drawingWrong: Number(saved.drawingWrong || 0)
        };
      });
    }
    trimDailyStatsToLimit(state2.dailyStats, dailyHistoryLimit);
  }
  function saveProgress({ storageKey, state: state2, dailyHistoryLimit }) {
    const payload = buildProgressPayload({ state: state2, dailyHistoryLimit });
    try {
      localStorage.setItem(storageKey, JSON.stringify(payload));
    } catch (e) {
    }
    return payload;
  }
  function loadProgress({ storageKey, state: state2, kanaData: kanaData2, maxDrawingsPerKana, dailyHistoryLimit }) {
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
      state: state2,
      kanaData: kanaData2,
      maxDrawingsPerKana,
      dailyHistoryLimit
    });
  }

  // js/features/progress.js
  function getSortedDateKeys(dailyStats) {
    return Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));
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
  function buildDayOptions(elements2, dailyStats) {
    const dateKeys = getSortedDateKeys(dailyStats);
    const options = dateKeys.map((dateKey) => `<option value="${dateKey}">${formatDateLabel(dateKey)}</option>`).join("");
    elements2.compareDayASelect.innerHTML = options;
    elements2.compareDayBSelect.innerHTML = options;
    if (dateKeys.length === 0) {
      elements2.compareDayASelect.innerHTML = "";
      elements2.compareDayBSelect.innerHTML = "";
      return;
    }
    if (!dateKeys.includes(elements2.compareDayASelect.value)) {
      elements2.compareDayASelect.value = dateKeys[0];
    }
    if (!dateKeys.includes(elements2.compareDayBSelect.value)) {
      elements2.compareDayBSelect.value = dateKeys[1] || dateKeys[0];
    }
  }
  function resetProgressTabForNewDay(elements2, dailyStats) {
    const dateKeys = getSortedDateKeys(dailyStats);
    if (dateKeys.length === 0) {
      return;
    }
    elements2.compareDayASelect.value = dateKeys[0];
    elements2.compareDayBSelect.value = dateKeys[1] || dateKeys[0];
  }
  function renderDailyProgressGraph(elements2, dailyStats) {
    const ctx = elements2.dailyProgressGraphCtx;
    const canvas = elements2.dailyProgressGraph;
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
      const y = top + i * height / 4;
      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(left + width, y);
      ctx.stroke();
      ctx.fillStyle = "#5e5446";
      ctx.font = "12px IBM Plex Sans";
      ctx.fillText(`${100 - i * 25}%`, 8, y + 4);
    }
    function getPoint(index, ratio) {
      const x = left + index * width / (dateKeys.length - 1);
      const y = bottom - ratio * height;
      return { x, y };
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
  function renderDayComparison(elements2, dailyStats) {
    const dayAKey = elements2.compareDayASelect.value;
    const dayBKey = elements2.compareDayBSelect.value;
    const dayA = dailyStats[dayAKey];
    const dayB = dailyStats[dayBKey];
    if (!dayA || !dayB) {
      elements2.compareSummary.innerHTML = '<div class="compare-empty">Do a few quiz attempts to unlock day-to-day comparison.</div>';
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
    elements2.compareSummary.innerHTML = `
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
  function renderDailyHistoryTable(elements2, dailyStats) {
    const dateKeys = getSortedDateKeys(dailyStats);
    if (dateKeys.length === 0) {
      elements2.dailyHistoryTable.innerHTML = '<div class="compare-empty">No daily history yet. Start practicing to populate this table.</div>';
      return;
    }
    elements2.dailyHistoryTable.innerHTML = `
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
            <tr>
              <td>${formatDateLabel(dateKey)}</td>
              <td>${day.typingRight}/${totals.typingTotal} (${asPercent(day.typingRight, totals.typingTotal)})</td>
              <td>${day.drawingRight}/${totals.drawingTotal} (${asPercent(day.drawingRight, totals.drawingTotal)})</td>
              <td>${totals.allRight}/${totals.allTotal} (${asPercent(totals.allRight, totals.allTotal)})</td>
            </tr>
          `;
    }).join("")}
      </tbody>
    </table>
  `;
  }
  function addDailyAttempt(state2, mode, wasCorrect) {
    const todayKey = getTodayKey();
    if (!state2.dailyStats[todayKey]) {
      state2.dailyStats[todayKey] = {
        typingRight: 0,
        typingWrong: 0,
        drawingRight: 0,
        drawingWrong: 0
      };
    }
    const entry = state2.dailyStats[todayKey];
    if (mode === "typing") {
      if (wasCorrect) {
        entry.typingRight += 1;
      } else {
        entry.typingWrong += 1;
      }
      return;
    }
    if (wasCorrect) {
      entry.drawingRight += 1;
    } else {
      entry.drawingWrong += 1;
    }
  }
  function renderDailyProgress({ elements: elements2, state: state2, setActiveProgressTab: setActiveProgressTab2 }) {
    const todayKey = getTodayKey();
    const hasNewDay = todayKey !== state2.progressUiDayMarker;
    state2.progressUiDayMarker = todayKey;
    buildDayOptions(elements2, state2.dailyStats);
    if (hasNewDay) {
      resetProgressTabForNewDay(elements2, state2.dailyStats);
      setActiveProgressTab2(elements2, "backlog");
    }
    renderDailyProgressGraph(elements2, state2.dailyStats);
    renderDayComparison(elements2, state2.dailyStats);
    renderDailyHistoryTable(elements2, state2.dailyStats);
  }
  function bindProgressCompareSelectors(elements2, state2) {
    elements2.compareDayASelect.addEventListener("change", () => renderDayComparison(elements2, state2.dailyStats));
    elements2.compareDayBSelect.addEventListener("change", () => renderDayComparison(elements2, state2.dailyStats));
  }
  function redrawProgressGraph(elements2, state2) {
    renderDailyProgressGraph(elements2, state2.dailyStats);
  }

  // js/features/drawing.js
  function createDrawingFeature({ elements: elements2, state: state2, maxDrawingsPerKana }) {
    let drawing = false;
    let activeCanvas = null;
    const canvases = [
      { canvas: elements2.canvasHiragana, ctx: elements2.ctxHiragana },
      { canvas: elements2.canvasKatakana, ctx: elements2.ctxKatakana }
    ];
    function setDrawingMarkButtonsEnabled(enabled) {
      elements2.markRightBtn.disabled = !enabled;
      elements2.markWrongBtn.disabled = !enabled;
    }
    function setDrawingCanvasVisibility(mode) {
      const showHiragana = mode === "both" || mode === "hiragana";
      const showKatakana = mode === "both" || mode === "katakana";
      elements2.canvasHiragana.closest(".draw-pane").classList.toggle("hidden", !showHiragana);
      elements2.canvasKatakana.closest(".draw-pane").classList.toggle("hidden", !showKatakana);
    }
    function clearCanvas(canvas, ctx) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function clearAllCanvases() {
      canvases.forEach(({ canvas, ctx }) => clearCanvas(canvas, ctx));
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
      const ctx = activeCanvas === elements2.canvasHiragana ? elements2.ctxHiragana : elements2.ctxKatakana;
      const point = getCanvasPoint(activeCanvas, event);
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    }
    function draw(event) {
      if (!drawing || activeCanvas !== event.currentTarget) {
        return;
      }
      const ctx = activeCanvas === elements2.canvasHiragana ? elements2.ctxHiragana : elements2.ctxKatakana;
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
      const existing = state2.drawingsByKana[kanaChar] || [];
      existing.unshift(canvas.toDataURL("image/png"));
      if (existing.length > maxDrawingsPerKana) {
        existing.length = maxDrawingsPerKana;
      }
      state2.drawingsByKana[kanaChar] = existing;
    }
    function saveCurrentDrawingIfCorrect() {
      if (!state2.currentQuestion || state2.currentQuestion.kind !== "drawing") {
        return;
      }
      if (state2.currentQuestion.canvasMode === "both") {
        addDrawingSnapshot(state2.currentQuestion.hiragana, elements2.canvasHiragana, elements2.ctxHiragana);
        addDrawingSnapshot(state2.currentQuestion.katakana, elements2.canvasKatakana, elements2.ctxKatakana);
        return;
      }
      if (state2.currentQuestion.canvasMode === "hiragana") {
        addDrawingSnapshot(state2.currentQuestion.hiragana, elements2.canvasHiragana, elements2.ctxHiragana);
        return;
      }
      addDrawingSnapshot(state2.currentQuestion.katakana, elements2.canvasKatakana, elements2.ctxKatakana);
    }
    function openDrawingGallery(kanaChar) {
      const drawings = state2.drawingsByKana[kanaChar] || [];
      elements2.galleryTitle.textContent = `Saved Drawings: ${kanaChar}`;
      if (drawings.length === 0) {
        elements2.galleryBody.innerHTML = '<div class="gallery-empty">No saved drawings yet for this kana.</div>';
      } else {
        elements2.galleryBody.innerHTML = drawings.map((imageData, index) => `
          <div class="gallery-item">
            <img src="${imageData}" alt="Saved drawing ${index + 1} for ${kanaChar}" />
          </div>
        `).join("");
      }
      elements2.drawingGalleryDialog.showModal();
    }
    function bindCanvasEvents() {
      canvases.forEach(({ canvas }) => {
        canvas.addEventListener("pointerdown", startDraw);
        canvas.addEventListener("pointermove", draw);
        canvas.addEventListener("pointerup", endDraw);
        canvas.addEventListener("pointerleave", endDraw);
      });
    }
    return {
      setDrawingMarkButtonsEnabled,
      setDrawingCanvasVisibility,
      clearAllCanvases,
      saveCurrentDrawingIfCorrect,
      openDrawingGallery,
      bindCanvasEvents
    };
  }

  // js/config/syncConfig.js
  var syncConfig = {
    enabled: false,
    firebase: {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    }
  };

  // js/features/cloudSync.js
  async function setupCloudSync({
    elements: elements2,
    state: state2,
    getLocalPayload: getLocalPayload2,
    applyRemotePayload: applyRemotePayload2,
    onLocalStateApplied,
    onLocalStateSaved
  }) {
    function setStatus(text) {
      elements2.syncStatus.textContent = text;
      elements2.syncStatus.classList.remove("ok", "bad");
      if (/error|disabled|unavailable/i.test(text)) {
        elements2.syncStatus.classList.add("bad");
      } else if (/connected|synced|uploaded|downloaded|pulled|ready|created|logged out/i.test(text)) {
        elements2.syncStatus.classList.add("ok");
      }
    }
    if (!syncConfig.enabled) {
      setStatus("Cloud sync disabled. Add Firebase config in js/config/syncConfig.js.");
      disableAuthButtons(true);
      return createNoopSync();
    }
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    const {
      getAuth,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut
    } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js");
    const { getFirestore, doc, getDoc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");
    const app = initializeApp(syncConfig.firebase);
    const auth = getAuth(app);
    const db = getFirestore(app);
    let currentUser = null;
    let uploadTimer = null;
    function disableAuthButtons(disabled) {
      elements2.signUpBtn.disabled = disabled;
      elements2.loginBtn.disabled = disabled;
      elements2.logoutBtn.disabled = disabled;
      elements2.syncNowBtn.disabled = disabled;
      elements2.forcePullBtn.disabled = disabled;
      elements2.forcePushBtn.disabled = disabled;
    }
    async function pullOrPushOnLogin(user) {
      const stateRef = doc(db, "quizStates", user.uid);
      const remoteSnap = await getDoc(stateRef);
      const localPayload = getLocalPayload2();
      if (!remoteSnap.exists()) {
        await setDoc(stateRef, localPayload);
        setStatus(`Connected: ${user.email || user.uid}. Uploaded local progress.`);
        return;
      }
      const remotePayload = remoteSnap.data();
      const remoteSavedAt = Number(remotePayload.savedAt || 0);
      const localSavedAt = Number(localPayload.savedAt || 0);
      if (remoteSavedAt > localSavedAt) {
        applyRemotePayload2(remotePayload);
        onLocalStateApplied();
        setStatus(`Connected: ${user.email || user.uid}. Downloaded newer cloud progress.`);
      } else {
        await setDoc(stateRef, localPayload);
        setStatus(`Connected: ${user.email || user.uid}. Cloud synced.`);
      }
    }
    async function pullNow() {
      if (!currentUser) {
        setStatus("Log in first to pull cloud data.");
        return;
      }
      const stateRef = doc(db, "quizStates", currentUser.uid);
      const remoteSnap = await getDoc(stateRef);
      if (!remoteSnap.exists()) {
        setStatus("No cloud data found yet.");
        return;
      }
      applyRemotePayload2(remoteSnap.data());
      onLocalStateApplied();
      setStatus("Pulled cloud progress to this device.");
    }
    async function uploadNow() {
      if (!currentUser) {
        setStatus("Log in first to sync.");
        return;
      }
      const stateRef = doc(db, "quizStates", currentUser.uid);
      const payload = getLocalPayload2();
      await setDoc(stateRef, payload);
      onLocalStateSaved(payload);
      setStatus(`Synced at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}.`);
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
    setStatus("Cloud sync ready. Log in to link data across devices.");
    elements2.signUpBtn.addEventListener("click", async () => {
      try {
        const email = elements2.syncEmail.value.trim();
        const password = elements2.syncPassword.value;
        if (!email || !password) {
          setStatus("Enter email and password first.");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        setStatus("Account created.");
      } catch (error) {
        setStatus(`Sign up error: ${error.message}`);
      }
    });
    elements2.loginBtn.addEventListener("click", async () => {
      try {
        const email = elements2.syncEmail.value.trim();
        const password = elements2.syncPassword.value;
        if (!email || !password) {
          setStatus("Enter email and password first.");
          return;
        }
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        setStatus(`Login error: ${error.message}`);
      }
    });
    elements2.logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
        setStatus("Logged out.");
      } catch (error) {
        setStatus(`Logout error: ${error.message}`);
      }
    });
    elements2.syncNowBtn.addEventListener("click", () => {
      uploadNow().catch((error) => {
        setStatus(`Sync error: ${error.message}`);
      });
    });
    elements2.forcePullBtn.addEventListener("click", () => {
      pullNow().catch((error) => {
        setStatus(`Pull error: ${error.message}`);
      });
    });
    elements2.forcePushBtn.addEventListener("click", () => {
      uploadNow().catch((error) => {
        setStatus(`Push error: ${error.message}`);
      });
    });
    onAuthStateChanged(auth, async (user) => {
      currentUser = user;
      if (!user) {
        setStatus("Cloud sync ready. Log in to link data across devices.");
        return;
      }
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

  // js/app.js
  var elements = getElements();
  var state = createState(kanaData);
  var drawingFeature = createDrawingFeature({
    elements,
    state,
    maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA
  });
  var cloudSync = { queueUpload() {
  }, async syncNow() {
  } };
  var getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);
  function renderBacklogView() {
    renderBacklog({
      kanaData,
      backlog: state.backlog,
      drawingsByKana: state.drawingsByKana,
      getKanaCategoryFn
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
  function refreshProgressView() {
    renderDailyProgress({ elements, state, setActiveProgressTab });
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
  }
  function scheduleNextTypingQuestion() {
    if (state.nextQuestionTimer) {
      clearTimeout(state.nextQuestionTimer);
    }
    state.nextQuestionTimer = setTimeout(() => {
      state.nextQuestionTimer = null;
      newQuestion();
    }, 700);
  }
  function switchModeUI() {
    const mode = elements.modeSelect.value;
    const isMixedMode = mode === "mixedPractice";
    const activeQuestionKind = state.currentQuestion ? state.currentQuestion.kind : "typing";
    const isTypingQuestion = mode === "kanaToRomaji" || isMixedMode && activeQuestionKind === "typing";
    const isDrawingQuestion = mode === "romajiToKana" || isMixedMode && activeQuestionKind === "drawing";
    elements.typingArea.classList.toggle("hidden", !isTypingQuestion);
    elements.drawingArea.classList.toggle("hidden", !isDrawingQuestion);
    elements.scriptSelect.disabled = !isTypingQuestion;
    elements.writingScriptGroup.classList.toggle("hidden", !isDrawingQuestion);
    drawingFeature.setDrawingMarkButtonsEnabled(false);
    if (isDrawingQuestion) {
      const currentMode = state.currentQuestion && state.currentQuestion.canvasMode ? state.currentQuestion.canvasMode : elements.writingScriptSelect.value === "mixed" ? "both" : elements.writingScriptSelect.value;
      drawingFeature.setDrawingCanvasVisibility(currentMode);
    }
    if (isTypingQuestion) {
      elements.answerInput.focus();
    }
    resetResult(elements);
  }
  function newQuestion() {
    if (state.nextQuestionTimer) {
      clearTimeout(state.nextQuestionTimer);
      state.nextQuestionTimer = null;
    }
    const mode = elements.modeSelect.value;
    if (mode === "kanaToRomaji") {
      state.currentQuestion = pickTypingQuestion({
        kanaData,
        scriptMode: elements.scriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog
      });
    } else if (mode === "romajiToKana") {
      state.currentQuestion = pickWritingQuestion({
        kanaData,
        writingMode: elements.writingScriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog
      });
    } else {
      state.currentQuestion = Math.random() > 0.5 ? pickTypingQuestion({
        kanaData,
        scriptMode: elements.scriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog
      }) : pickWritingQuestion({
        kanaData,
        writingMode: elements.writingScriptSelect.value,
        kanaSet: elements.kanaSetSelect.value,
        getKanaCategoryFn,
        getQuestionWeightFn: getQuestionWeight,
        backlog: state.backlog
      });
    }
    switchModeUI();
    resetResult(elements);
    elements.answerInput.value = "";
    drawingFeature.clearAllCanvases();
    drawingFeature.setDrawingMarkButtonsEnabled(false);
    if (state.currentQuestion.kind === "typing") {
      elements.promptElement.textContent = state.currentQuestion.kana;
      elements.answerInput.focus();
    } else {
      drawingFeature.setDrawingCanvasVisibility(state.currentQuestion.canvasMode);
      elements.promptElement.textContent = state.currentQuestion.promptText;
    }
  }
  function checkTypingAnswer() {
    if (!state.currentQuestion) {
      showResult(elements, "Create a question first.", false);
      return;
    }
    const userAnswer = sanitizeRomaji(elements.answerInput.value);
    if (!userAnswer) {
      showResult(elements, "Type a romaji answer.", false);
      return;
    }
    const correct = userAnswer === state.currentQuestion.romaji;
    if (correct) {
      state.typingRightCount += 1;
      showResult(elements, "Correct!", true);
    } else {
      state.typingWrongCount += 1;
      showResult(elements, `Not quite. Correct answer: ${state.currentQuestion.romaji}`, false);
    }
    updateBacklog({
      backlog: state.backlog,
      romaji: state.currentQuestion.romaji,
      wasCorrect: correct,
      scriptContext: getScriptContextForTyping(state.currentQuestion),
      answerMode: "typing"
    });
    addDailyAttempt(state, "typing", correct);
    updateStats(elements, state);
    renderBacklogView();
    refreshProgressView();
    persistState();
    scheduleNextTypingQuestion();
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
    if (!state.currentQuestion) {
      showResult(elements, "Create a question first.", false);
      return;
    }
    if (wasCorrect) {
      state.drawingRightCount += 1;
      drawingFeature.saveCurrentDrawingIfCorrect();
    } else {
      state.drawingWrongCount += 1;
    }
    updateBacklog({
      backlog: state.backlog,
      romaji: state.currentQuestion.romaji,
      wasCorrect,
      scriptContext: state.currentQuestion.canvasMode,
      answerMode: "drawing"
    });
    addDailyAttempt(state, "drawing", wasCorrect);
    updateStats(elements, state);
    renderBacklogView();
    refreshProgressView();
    persistState();
    drawingFeature.setDrawingMarkButtonsEnabled(false);
    showResult(
      elements,
      wasCorrect ? "Saved as correct for this romaji." : "Saved as wrong for this romaji.",
      wasCorrect
    );
    newQuestion();
  }
  function resetAllData() {
    const shouldReset = window.confirm("Reset all quiz data, including backlog, drawings, and daily history?");
    if (!shouldReset) {
      return;
    }
    state.typingRightCount = 0;
    state.typingWrongCount = 0;
    state.drawingRightCount = 0;
    state.drawingWrongCount = 0;
    Object.keys(state.backlog).forEach((romaji) => {
      const row = state.backlog[romaji];
      row.right = 0;
      row.wrong = 0;
      row.typingRight = 0;
      row.typingWrong = 0;
      row.drawingRight = 0;
      row.drawingWrong = 0;
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
    });
    Object.keys(state.drawingsByKana).forEach((kanaChar) => {
      delete state.drawingsByKana[kanaChar];
    });
    Object.keys(state.dailyStats).forEach((dateKey) => {
      delete state.dailyStats[dateKey];
    });
    state.progressUiDayMarker = getTodayKey();
    state.lastSavedAt = 0;
    localStorage.removeItem(STORAGE_KEY);
    updateStats(elements, state);
    renderBacklogView();
    refreshProgressView();
    drawingFeature.clearAllCanvases();
    drawingFeature.setDrawingMarkButtonsEnabled(false);
    setActiveProgressTab(elements, "backlog");
    showResult(elements, "All saved progress has been reset.", true);
  }
  function bindEvents() {
    elements.newQuestionBtn.addEventListener("click", newQuestion);
    elements.modeSelect.addEventListener("change", () => {
      switchModeUI();
      newQuestion();
    });
    elements.scriptSelect.addEventListener("change", newQuestion);
    elements.kanaSetSelect.addEventListener("change", newQuestion);
    elements.writingScriptSelect.addEventListener("change", () => {
      if (elements.modeSelect.value === "romajiToKana" || elements.modeSelect.value === "mixedPractice") {
        newQuestion();
      }
    });
    elements.backlogTabBtn.addEventListener("click", () => setActiveProgressTab(elements, "backlog"));
    elements.dailyProgressTabBtn.addEventListener("click", () => setActiveProgressTab(elements, "daily"));
    elements.openSyncBtn.addEventListener("click", () => {
      setActiveProgressTab(elements, "daily");
      elements.syncCard.scrollIntoView({ behavior: "smooth", block: "start" });
      elements.syncEmail.focus();
    });
    elements.resetAllDataBtn.addEventListener("click", resetAllData);
    bindProgressCompareSelectors(elements, state);
    elements.checkBtn.addEventListener("click", checkTypingAnswer);
    elements.revealBtn.addEventListener("click", revealDrawingAnswer);
    elements.clearCanvasBtn.addEventListener("click", drawingFeature.clearAllCanvases);
    elements.markRightBtn.addEventListener("click", () => markDrawingResult(true));
    elements.markWrongBtn.addEventListener("click", () => markDrawingResult(false));
    elements.closeGalleryBtn.addEventListener("click", () => elements.drawingGalleryDialog.close());
    window.addEventListener("resize", () => redrawProgressGraph(elements, state));
    window.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        refreshProgressView();
      }
    });
    elements.backlogPanel.addEventListener("click", (event) => {
      const button = event.target.closest(".view-drawings-btn");
      if (!button) {
        return;
      }
      const kanaChar = button.dataset.kana;
      if (kanaChar) {
        drawingFeature.openDrawingGallery(kanaChar);
      }
    });
    elements.answerInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkTypingAnswer();
      }
    });
    drawingFeature.bindCanvasEvents();
  }
  function init() {
    loadProgress({
      storageKey: STORAGE_KEY,
      state,
      kanaData,
      maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA,
      dailyHistoryLimit: DAILY_HISTORY_LIMIT
    });
    ensureTodayEntry();
    setupCloudSync({
      elements,
      state,
      getLocalPayload,
      applyRemotePayload,
      onLocalStateApplied() {
        updateStats(elements, state);
        renderBacklogView();
        refreshProgressView();
        saveProgress({ storageKey: STORAGE_KEY, state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
      },
      onLocalStateSaved(payload) {
        state.lastSavedAt = Number(payload.savedAt || state.lastSavedAt || 0);
      }
    }).then((syncApi) => {
      cloudSync = syncApi;
    }).catch((error) => {
      elements.syncStatus.textContent = `Cloud sync unavailable: ${error.message}`;
    });
    bindEvents();
    switchModeUI();
    drawingFeature.clearAllCanvases();
    updateStats(elements, state);
    renderBacklogView();
    refreshProgressView();
    setActiveProgressTab(elements, "backlog");
  }
  init();
})();
