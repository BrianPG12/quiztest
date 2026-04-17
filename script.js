(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

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
      STORAGE_KEY = "kanaQuizTrainer.v1";
      MAX_DRAWINGS_PER_KANA = 16;
      DAILY_HISTORY_LIMIT = 120;
    }
  });

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
      practiceStrategySelect: document.getElementById("practiceStrategySelect"),
      newQuestionBtn: document.getElementById("newQuestionBtn"),
      promptElement: document.getElementById("prompt"),
      queueMeta: document.getElementById("queueMeta"),
      playAudioBtn: document.getElementById("playAudioBtn"),
      muteAudioBtn: document.getElementById("muteAudioBtn"),
      typingArea: document.getElementById("typingArea"),
      drawingArea: document.getElementById("drawingArea"),
      drawGuideToggle: document.getElementById("drawGuideToggle"),
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
      installAppBtn: document.getElementById("installAppBtn"),
      openSyncBtn: document.getElementById("openSyncBtn"),
      resetAllDataBtn: document.getElementById("resetAllDataBtn"),
      backlogPanel: document.getElementById("backlogPanel"),
      progressPanel: document.getElementById("progressPanel"),
      compareDayASelect: document.getElementById("compareDayASelect"),
      compareDayBSelect: document.getElementById("compareDayBSelect"),
      insightsGrid: document.getElementById("insightsGrid"),
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
      canvasHiragana,
      canvasKatakana,
      ctxHiragana: canvasHiragana.getContext("2d"),
      ctxKatakana: canvasKatakana.getContext("2d"),
      dailyProgressGraphCtx: document.getElementById("dailyProgressGraph").getContext("2d")
    };
  }
  var init_elements = __esm({
    "js/dom/elements.js"() {
    }
  });

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
  var init_utils = __esm({
    "js/core/utils.js"() {
    }
  });

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
    const srsByRomaji = kanaData2.reduce((acc, item) => {
      acc[item.romaji] = {
        dueAt: 0,
        intervalHours: 0,
        lastSeenAt: 0,
        lastCorrect: false
      };
      return acc;
    }, {});
    return {
      currentQuestion: null,
      nextQuestionTimer: null,
      practiceStrategy: "srs",
      recentMistakes: [],
      srsByRomaji,
      audioMuted: false,
      drawGuideEnabled: true,
      dailyGoal: 25,
      installPromptSeen: false,
      typingRightCount: 0,
      typingWrongCount: 0,
      drawingRightCount: 0,
      drawingWrongCount: 0,
      drawingsByKana: {},
      dailyStats: {},
      lastSavedAt: 0,
      lastCloudSyncAt: 0,
      syncUserEmail: "",
      progressUiDayMarker: getTodayKey(),
      backlog: createBacklog(kanaData2)
    };
  }
  var init_state = __esm({
    "js/core/state.js"() {
      init_utils();
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
  function showResult(elements, message, isCorrect) {
    elements.resultElement.textContent = message;
    elements.resultElement.classList.toggle("ok", isCorrect);
    elements.resultElement.classList.toggle("bad", !isCorrect);
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
  function renderBacklog({ kanaData: kanaData2, backlog, drawingsByKana, getKanaCategoryFn }) {
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
      const items = kanaData2.filter((item) => getKanaCategoryFn(item.romaji) === category);
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
    preferredRomajiList = null
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
  function pickTypingQuestion({
    kanaData: kanaData2,
    scriptMode,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList
  }) {
    const item = pickQuestion({
      kanaData: kanaData2,
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
  function pickWritingQuestion({
    kanaData: kanaData2,
    writingMode,
    kanaSet,
    getKanaCategoryFn,
    getQuestionWeightFn,
    backlog,
    preferredRomajiList
  }) {
    const item = pickQuestion({
      kanaData: kanaData2,
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
  var init_quiz = __esm({
    "js/features/quiz.js"() {
    }
  });

  // js/features/storage.js
  function trimDailyStatsToLimit(dailyStats, limit) {
    const sorted = Object.keys(dailyStats).sort((a, b2) => b2.localeCompare(a));
    if (sorted.length <= limit) {
      return;
    }
    sorted.slice(limit).forEach((dateKey) => {
      delete dailyStats[dateKey];
    });
  }
  function buildProgressPayload({ state, dailyHistoryLimit }) {
    trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
    const savedAt = Date.now();
    state.lastSavedAt = savedAt;
    return {
      savedAt,
      practiceStrategy: state.practiceStrategy,
      recentMistakes: state.recentMistakes,
      srsByRomaji: state.srsByRomaji,
      audioMuted: state.audioMuted,
      drawGuideEnabled: state.drawGuideEnabled,
      dailyGoal: state.dailyGoal,
      lastCloudSyncAt: state.lastCloudSyncAt,
      syncUserEmail: state.syncUserEmail,
      typingRightCount: state.typingRightCount,
      typingWrongCount: state.typingWrongCount,
      drawingRightCount: state.drawingRightCount,
      drawingWrongCount: state.drawingWrongCount,
      backlog: state.backlog,
      drawingsByKana: state.drawingsByKana,
      dailyStats: state.dailyStats
    };
  }
  function applyProgressPayload({ payload, state, kanaData: kanaData2, maxDrawingsPerKana, dailyHistoryLimit }) {
    if (!payload || typeof payload !== "object") {
      return;
    }
    state.lastSavedAt = Number(payload.savedAt || 0);
    state.practiceStrategy = payload.practiceStrategy === "mistakeReview" || payload.practiceStrategy === "mixed" ? payload.practiceStrategy : "srs";
    state.recentMistakes = Array.isArray(payload.recentMistakes) ? payload.recentMistakes.filter((romaji) => typeof romaji === "string").slice(0, 120) : [];
    state.audioMuted = Boolean(payload.audioMuted);
    state.drawGuideEnabled = payload.drawGuideEnabled !== false;
    state.dailyGoal = Math.max(5, Math.min(200, Number(payload.dailyGoal || 25)));
    state.lastCloudSyncAt = Number(payload.lastCloudSyncAt || 0);
    state.syncUserEmail = typeof payload.syncUserEmail === "string" ? payload.syncUserEmail : "";
    state.typingRightCount = Number(payload.typingRightCount || 0);
    state.typingWrongCount = Number(payload.typingWrongCount || 0);
    state.drawingRightCount = Number(payload.drawingRightCount || 0);
    state.drawingWrongCount = Number(payload.drawingWrongCount || 0);
    Object.keys(state.drawingsByKana).forEach((kanaChar) => {
      delete state.drawingsByKana[kanaChar];
    });
    Object.keys(state.dailyStats).forEach((dateKey) => {
      delete state.dailyStats[dateKey];
    });
    kanaData2.forEach((item) => {
      const savedSrs = payload.srsByRomaji && payload.srsByRomaji[item.romaji];
      state.srsByRomaji[item.romaji] = {
        dueAt: Number(savedSrs && savedSrs.dueAt || 0),
        intervalHours: Number(savedSrs && savedSrs.intervalHours || 0),
        lastSeenAt: Number(savedSrs && savedSrs.lastSeenAt || 0),
        lastCorrect: Boolean(savedSrs && savedSrs.lastCorrect)
      };
    });
    if (payload.backlog && typeof payload.backlog === "object") {
      kanaData2.forEach((item) => {
        const saved = payload.backlog[item.romaji];
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
    if (payload.drawingsByKana && typeof payload.drawingsByKana === "object") {
      Object.keys(payload.drawingsByKana).forEach((kanaChar) => {
        const savedList = payload.drawingsByKana[kanaChar];
        if (Array.isArray(savedList)) {
          state.drawingsByKana[kanaChar] = savedList.filter((value) => typeof value === "string").slice(0, maxDrawingsPerKana);
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
        state.dailyStats[dateKey] = {
          typingRight: Number(saved.typingRight || 0),
          typingWrong: Number(saved.typingWrong || 0),
          drawingRight: Number(saved.drawingRight || 0),
          drawingWrong: Number(saved.drawingWrong || 0)
        };
      });
    }
    trimDailyStatsToLimit(state.dailyStats, dailyHistoryLimit);
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
      const x = left + index * width / (dateKeys.length - 1);
      const y2 = bottom - ratio * height;
      return { x, y: y2 };
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
  function renderDailyHistoryTable(elements, dailyStats) {
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
  function renderInsights(elements, state) {
    if (!elements.insightsGrid) {
      return;
    }
    const now = Date.now();
    const dueCount = Object.values(state.srsByRomaji || {}).filter((entry) => Number(entry.dueAt || 0) <= now).length;
    const mistakesCount = (state.recentMistakes || []).length;
    const today = state.dailyStats[getTodayKey()] || { typingRight: 0, typingWrong: 0, drawingRight: 0, drawingWrong: 0 };
    const todayDone = today.typingRight + today.typingWrong + today.drawingRight + today.drawingWrong;
    const goal = Number(state.dailyGoal || 25);
    const weakRows = Object.values(state.backlog || {}).map((row) => {
      const attempts = row.typingRight + row.typingWrong + row.drawingRight + row.drawingWrong;
      const right = row.typingRight + row.drawingRight;
      const accuracy = attempts ? Math.round(right / attempts * 100) : 100;
      return { romaji: row.romaji, attempts, accuracy };
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
    const weakText = weakRows.length ? weakRows.map((row) => `${row.romaji} (${row.accuracy}%)`).join(", ") : "Need more attempts";
    elements.insightsGrid.innerHTML = `
    <article class="insight-card">
      <h4>Due Reviews</h4>
      <div class="insight-value">${dueCount}</div>
      <p>Ready in spaced repetition queue.</p>
    </article>
    <article class="insight-card">
      <h4>Mistake Queue</h4>
      <div class="insight-value">${mistakesCount}</div>
      <p>Kana waiting for review mode.</p>
    </article>
    <article class="insight-card">
      <h4>Today Goal</h4>
      <div class="insight-value">${todayDone}/${goal}</div>
      <p>${Math.min(100, Math.round(todayDone / goal * 100))}% complete today.</p>
    </article>
    <article class="insight-card">
      <h4>7-Day Accuracy</h4>
      <div class="insight-value">${weekAccuracy}</div>
      <p>Typing + drawing combined.</p>
    </article>
    <article class="insight-card wide">
      <h4>Weakest Kana</h4>
      <p>${weakText}</p>
    </article>
  `;
  }
  function addDailyAttempt(state, mode, wasCorrect) {
    const todayKey = getTodayKey();
    if (!state.dailyStats[todayKey]) {
      state.dailyStats[todayKey] = {
        typingRight: 0,
        typingWrong: 0,
        drawingRight: 0,
        drawingWrong: 0
      };
    }
    const entry = state.dailyStats[todayKey];
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
    renderDailyHistoryTable(elements, state.dailyStats);
    renderInsights(elements, state);
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
  function createDrawingFeature({ elements, state, maxDrawingsPerKana }) {
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
    function setDrawingCanvasVisibility(mode) {
      const showHiragana = mode === "both" || mode === "hiragana";
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
        elements.galleryBody.innerHTML = '<div class="gallery-empty">No saved drawings yet for this kana.</div>';
      } else {
        elements.galleryBody.innerHTML = drawings.map((imageData, index) => `
          <div class="gallery-item">
            <img src="${imageData}" alt="Saved drawing ${index + 1} for ${kanaChar}" />
          </div>
        `).join("");
      }
      elements.drawingGalleryDialog.showModal();
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
      setGuideEnabled,
      clearAllCanvases,
      saveCurrentDrawingIfCorrect,
      openDrawingGallery,
      bindCanvasEvents
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
  function _isFirebaseServerApp(obj) {
    return obj.settings !== void 0;
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
  var PlatformLoggerServiceImpl, name$p, version$1, logger, name$o, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version, DEFAULT_ENTRY_NAME2, PLATFORM_LOG_STRING, _apps, _serverApps, _components, ERRORS, ERROR_FACTORY, FirebaseAppImpl, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, STORED_HEARTBEAT_RETENTION_MAX_MILLIS, HeartbeatServiceImpl, HeartbeatStorageImpl;
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
      const query = querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
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
      return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
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
  function _getFinalTarget(auth, host, path, query) {
    const base = `${host}${path}?${query}`;
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
  function isEnterprise(grecaptcha) {
    return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
  }
  async function getRecaptchaConfig(auth, request) {
    return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
  }
  async function deleteAccount(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
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
  async function linkEmailPassword(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
  }
  async function signInWithPassword(auth, request) {
    return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
  }
  async function sendOobCode(auth, request) {
    return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
  }
  async function sendPasswordResetEmail$1(auth, request) {
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
  function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
    const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
    return idTokenProvider.catch((error) => {
      if (error.code === `auth/${"multi-factor-auth-required"}`) {
        throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
      }
      throw error;
    });
  }
  async function _link$1(user, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link", response);
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
  function setPersistence(auth, persistence) {
    return getModularInstance(auth).setPersistence(persistence);
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
  function signOut(auth) {
    return getModularInstance(auth).signOut();
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
  function _overrideRedirectResult(auth, result) {
    redirectOutcomeMap.set(auth._key(), result);
  }
  function resolverPersistence(resolver) {
    return _getInstance(resolver._redirectPersistence);
  }
  function pendingRedirectKey(auth) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
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
  var prodErrorMap, _DEFAULT_AUTH_ERROR_FACTORY, logClient, Delay, FetchProvider, SERVER_ERROR_MAP, DEFAULT_API_TIMEOUT_MS, NetworkTimeout, RecaptchaConfig, ProactiveRefresh, UserMetadata, StsTokenManager, UserImpl, instanceCache, InMemoryPersistence, inMemoryPersistence, PersistenceUserManager, AuthMiddlewareQueue, MINIMUM_MIN_PASSWORD_LENGTH, PasswordPolicyImpl, AuthImpl, Subscription, externalJSProvider, RECAPTCHA_ENTERPRISE_VERIFIER_TYPE, FAKE_TOKEN, RecaptchaEnterpriseVerifier, AuthCredential, EmailAuthCredential, IDP_REQUEST_URI$1, OAuthCredential, VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_, PhoneAuthCredential, ActionCodeURL, EmailAuthProvider, FederatedAuthProvider, BaseOAuthProvider, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, UserCredentialImpl, MultiFactorError, STORAGE_AVAILABLE_KEY, BrowserPersistenceClass, _POLLING_INTERVAL_MS$1, IE10_LOCAL_STORAGE_SYNC_DELAY, BrowserLocalPersistence, browserLocalPersistence, BrowserSessionPersistence, browserSessionPersistence, Receiver, Sender, DB_NAME2, DB_VERSION2, DB_OBJECTSTORE_NAME, DB_DATA_KEYPATH, DBPromise, _POLLING_INTERVAL_MS, _TRANSACTION_RETRY_COUNT, IndexedDBLocalPersistence, indexedDBLocalPersistence, _JSLOAD_CALLBACK, NETWORK_TIMEOUT_DELAY, RECAPTCHA_VERIFIER_TYPE, PhoneAuthProvider, IdpCredential, AbstractPopupRedirectOperation, _POLL_WINDOW_CLOSE_TIMEOUT, PopupOperation, PENDING_REDIRECT_KEY, redirectOutcomeMap, RedirectAction, EVENT_DUPLICATION_CACHE_DURATION_MS, AuthEventManager, IP_ADDRESS_REGEX, HTTP_REGEX, NETWORK_TIMEOUT, cachedGApiLoader, PING_TIMEOUT, IFRAME_PATH, EMULATED_IFRAME_PATH, IFRAME_ATTRIBUTES, EID_FROM_APIHOST, BASE_POPUP_OPTIONS, DEFAULT_WIDTH, DEFAULT_HEIGHT, TARGET_BLANK, FIREFOX_EMPTY_URL, AuthPopup, WIDGET_PATH, EMULATOR_WIDGET_PATH, FIREBASE_APP_CHECK_FRAGMENT_ID, WEB_STORAGE_SUPPORT_KEY, BrowserPopupRedirectResolver, browserPopupRedirectResolver, MultiFactorAssertionImpl, PhoneMultiFactorAssertionImpl, PhoneMultiFactorGenerator, TotpMultiFactorGenerator, TotpMultiFactorAssertionImpl, TotpSecret, name3, version3, AuthInterop, DEFAULT_ID_TOKEN_MAX_AGE, authIdTokenMaxAge, lastPostedIdToken, mintCookieFactory;
  var init_index_21205181 = __esm({
    "node_modules/@firebase/auth/dist/esm2017/index-21205181.js"() {
      init_index_esm20174();
      init_index_esm2017();
      init_index_esm20173();
      init_tslib_es6();
      init_index_esm20172();
      prodErrorMap = _prodErrorMap;
      _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
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
      _JSLOAD_CALLBACK = _generateCallbackName("rcb");
      NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
      RECAPTCHA_VERIFIER_TYPE = "recaptcha";
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
  var init_index_esm2 = __esm({
    "node_modules/firebase/auth/dist/esm/index.esm.js"() {
      init_esm2017();
    }
  });

  // node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js
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
  function __PRIVATE_cloneLongPollingOptions(t) {
    const e = {};
    return void 0 !== t.timeoutSeconds && (e.timeoutSeconds = t.timeoutSeconds), e;
  }
  function __PRIVATE_generateUniqueDebugId() {
    return null === N ? N = (function __PRIVATE_generateInitialUniqueDebugId() {
      return 268435456 + Math.round(2147483648 * Math.random());
    })() : N++, "0x" + N.toString(16);
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
  function __PRIVATE_fieldPathFromArgument(t, e) {
    return "string" == typeof e ? __PRIVATE_fieldPathFromDotSeparatedString(t, e) : e instanceof FieldPath ? e._internalPath : e._delegate._internalPath;
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
  function setDoc(t, e, r) {
    const n = __PRIVATE_applyFirestoreDataConverter((t = __PRIVATE_cast(t, DocumentReference)).converter, e, r), i = __PRIVATE_parseSetData(__PRIVATE_newUserDataReader(t.firestore), "setDoc", t._key, n, null !== t.converter, r);
    return __PRIVATE_invokeCommitRpc(__PRIVATE_getDatastore(t.firestore), [i.toMutation(t._key, Precondition.none())]);
  }
  var User, d, f, E, m, A, T, R, P, V, p, y, w, g, F, v, D, b, FirestoreError, __PRIVATE_OAuthToken, __PRIVATE_EmptyAuthCredentialsProvider, __PRIVATE_EmulatorAuthCredentialsProvider, __PRIVATE_LiteAuthCredentialsProvider, __PRIVATE_FirstPartyToken, __PRIVATE_FirstPartyAuthCredentialsProvider, AppCheckToken, __PRIVATE_LiteAppCheckTokenProvider, DatabaseInfo, DatabaseId, BasePath, ResourcePath, S, FieldPath$1, DocumentKey, N, O, q, B, __PRIVATE_FetchConnection, __PRIVATE_AutoId, __PRIVATE_Base64DecodeError, ByteString, $, Timestamp, SnapshotVersion, SortedMap, SortedMapIterator, LLRBNode, SortedSet, SortedSetIterator, FieldMask, ObjectValue, MutableDocument, __PRIVATE_QueryImpl, TransformOperation, __PRIVATE_ServerTimestampTransform, __PRIVATE_ArrayUnionTransformOperation, __PRIVATE_ArrayRemoveTransformOperation, __PRIVATE_NumericIncrementTransformOperation, Precondition, Mutation, __PRIVATE_SetMutation, __PRIVATE_PatchMutation, __PRIVATE_DeleteMutation, __PRIVATE_VerifyMutation, JsonProtoSerializer, __PRIVATE_DatastoreImpl, k, FirestoreSettingsImpl, Firestore, Query, DocumentReference, CollectionReference, Bytes, FieldPath, FieldValue, GeoPoint, U, ParsedSetData, __PRIVATE_ParseContextImpl, __PRIVATE_UserDataReader, j, DocumentSnapshot, QueryDocumentSnapshot, __PRIVATE_LiteUserDataWriter;
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
      V = "permission-denied";
      p = "unauthenticated";
      y = "resource-exhausted";
      w = "failed-precondition";
      g = "aborted";
      F = "out-of-range";
      v = "unimplemented";
      D = "internal";
      b = "unavailable";
      FirestoreError = class extends FirebaseError {
        /** @hideconstructor */
        constructor(t, e) {
          super(t, e), this.code = t, this.message = e, // HACK: We write a toString property directly because Error is not a real
          // class and so inheritance does not work correctly. We could alternatively
          // do the same "back-door inheritance" trick that FirebaseError does.
          this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
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
      JsonProtoSerializer = class {
        constructor(t, e) {
          this.databaseId = t, this.useProto3Json = e;
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
    onLocalStateSaved
  }) {
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
    const app = getApps().length ? getApp() : initializeApp(syncConfig.firebase);
    const auth = getAuth(app);
    const db = getFirestore(app);
    try {
      await setPersistence(auth, browserLocalPersistence);
    } catch (e) {
      await setPersistence(auth, inMemoryPersistence);
    }
    let currentUser = null;
    let uploadTimer = null;
    async function pullOrPushOnLogin(user) {
      const stateRef = doc(db, "quizStates", user.uid);
      const remoteSnap = await getDoc(stateRef);
      const localPayload = getLocalPayload();
      if (!remoteSnap.exists()) {
        await setDoc(stateRef, localPayload);
        setStatus(`Connected: ${user.email || user.uid}. Uploaded local progress.`);
        return;
      }
      const remotePayload = remoteSnap.data();
      const remoteSavedAt = Number(remotePayload.savedAt || 0);
      const localSavedAt = Number(localPayload.savedAt || 0);
      if (remoteSavedAt > localSavedAt) {
        applyRemotePayload(remotePayload);
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
      applyRemotePayload(remoteSnap.data());
      onLocalStateApplied();
      setStatus("Pulled cloud progress to this device.");
    }
    async function uploadNow() {
      if (!currentUser) {
        setStatus("Log in first to sync.");
        return;
      }
      const stateRef = doc(db, "quizStates", currentUser.uid);
      const payload = getLocalPayload();
      await setDoc(stateRef, payload);
      const syncMeta = {
        ...payload,
        cloudSyncedAt: Date.now(),
        userEmail: currentUser.email || ""
      };
      onLocalStateSaved(syncMeta);
      setAccountInfo(syncMeta.userEmail, syncMeta.cloudSyncedAt);
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
        await createUserWithEmailAndPassword(auth, email, password);
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
        await signInWithEmailAndPassword(auth, email, password);
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
        await sendPasswordResetEmail(auth, email);
        setStatus("Password reset email sent.");
      } catch (error) {
        setStatus(`Reset error: ${error.message}`);
      }
    });
    elements.logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
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
    onAuthStateChanged(auth, async (user) => {
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
  var init_cloudSync = __esm({
    "js/features/cloudSync.js"() {
      init_syncConfig();
      init_index_esm();
      init_index_esm2();
      init_index_esm3();
    }
  });

  // js/features/srs.js
  function createSrsManager(state) {
    function getDueRomajiList() {
      const now = Date.now();
      return Object.entries(state.srsByRomaji).filter(([, entry]) => Number(entry.dueAt || 0) <= now).sort((a, b2) => Number(a[1].dueAt || 0) - Number(b2[1].dueAt || 0)).map(([romaji]) => romaji);
    }
    function upsertRecentMistake(romaji) {
      state.recentMistakes = [
        romaji,
        ...state.recentMistakes.filter((value) => value !== romaji)
      ].slice(0, MAX_RECENT_MISTAKES);
    }
    function removeRecentMistake(romaji) {
      state.recentMistakes = state.recentMistakes.filter((value) => value !== romaji);
    }
    function updateSrsOnAttempt(romaji, wasCorrect) {
      const current = state.srsByRomaji[romaji] || {
        dueAt: 0,
        intervalHours: 0,
        lastSeenAt: 0,
        lastCorrect: false
      };
      const now = Date.now();
      if (wasCorrect) {
        const previous = Number(current.intervalHours || 0);
        const nextInterval = previous <= 0 ? 1.5 : Math.min(previous * 2.5, 24 * 14);
        current.intervalHours = nextInterval;
        current.dueAt = now + nextInterval * 60 * 60 * 1e3;
        removeRecentMistake(romaji);
      } else {
        current.intervalHours = 0.5;
        current.dueAt = now + 30 * 60 * 1e3;
        upsertRecentMistake(romaji);
      }
      current.lastSeenAt = now;
      current.lastCorrect = wasCorrect;
      state.srsByRomaji[romaji] = current;
    }
    function getTotalAttempts() {
      return Object.values(state.srsByRomaji).reduce((sum, entry) => sum + (Number(entry.lastSeenAt) > 0 ? 1 : 0), 0);
    }
    return {
      getDueRomajiList,
      upsertRecentMistake,
      removeRecentMistake,
      updateSrsOnAttempt,
      getTotalAttempts
    };
  }
  var MAX_RECENT_MISTAKES;
  var init_srs = __esm({
    "js/features/srs.js"() {
      MAX_RECENT_MISTAKES = 120;
    }
  });

  // js/features/queue.js
  function createQueueManager(state, elements, srsManager, getKanaCategoryFn) {
    function filterRomajiForCurrentKanaSet(romajiList) {
      const setMode = elements.kanaSetSelect.value;
      if (setMode === "all") {
        return romajiList;
      }
      return romajiList.filter((romaji) => getKanaCategoryFn(romaji) === setMode);
    }
    function getPreferredRomajiList() {
      if (state.practiceStrategy === "mistakeReview") {
        return filterRomajiForCurrentKanaSet(state.recentMistakes).slice(0, 30);
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
      const mistakes = filterRomajiForCurrentKanaSet(state.recentMistakes).slice(0, mistakesCount);
      return [.../* @__PURE__ */ new Set([...mistakes, ...due])];
    }
    function updateQueueMeta() {
      const due = srsManager.getDueRomajiList().length;
      const mistakes = state.recentMistakes.length;
      const strategy = state.practiceStrategy === "mistakeReview" ? `Mistakes: ${mistakes}` : state.practiceStrategy === "srs" ? `Due: ${due}` : `Due ${due} \u2022 Mistakes ${mistakes}`;
      elements.queueMeta.textContent = strategy;
    }
    return {
      getPreferredRomajiList,
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
  function createAnsweringManager(state, elements, srsManager, queueManager, showResult2, updateStats2, updateBacklog2, addDailyAttemptFn, renderBacklogViewFn, refreshProgressViewFn, persistStateFn) {
    function validateTypingAnswer(romaji) {
      if (!romaji) {
        return { correct: false, answer: "", reason: "Type a romaji answer" };
      }
      return { correct: true, answer: romaji };
    }
    function processTypingAnswer(userRomaji) {
      if (!state.currentQuestion) {
        showResult2(elements, "Create a question first.", false);
        return;
      }
      const validation = validateTypingAnswer(userRomaji);
      if (!validation.correct) {
        showResult2(elements, validation.reason, false);
        return;
      }
      const correct = userRomaji === state.currentQuestion.romaji;
      if (correct) {
        state.typingRightCount += 1;
        showResult2(elements, "Correct!", true);
      } else {
        state.typingWrongCount += 1;
        showResult2(elements, `Not quite. Correct answer: ${state.currentQuestion.romaji}`, false);
      }
      updateBacklog2({
        backlog: state.backlog,
        romaji: state.currentQuestion.romaji,
        wasCorrect: correct,
        scriptContext: state.currentQuestion.scriptName === "Hiragana" ? "hiragana" : "katakana",
        answerMode: "typing"
      });
      srsManager.updateSrsOnAttempt(state.currentQuestion.romaji, correct);
      addDailyAttemptFn(state, "typing", correct);
      updateStats2(elements, state);
      renderBacklogViewFn();
      refreshProgressViewFn();
      queueManager.updateQueueMeta();
      persistStateFn();
    }
    function processDrawingResult(wasCorrect, saveDrawingFn) {
      if (!state.currentQuestion) {
        showResult2(elements, "Create a question first.", false);
        return;
      }
      if (wasCorrect) {
        state.drawingRightCount += 1;
        saveDrawingFn();
      } else {
        state.drawingWrongCount += 1;
      }
      updateBacklog2({
        backlog: state.backlog,
        romaji: state.currentQuestion.romaji,
        wasCorrect,
        scriptContext: state.currentQuestion.canvasMode,
        answerMode: "drawing"
      });
      srsManager.updateSrsOnAttempt(state.currentQuestion.romaji, wasCorrect);
      addDailyAttemptFn(state, "drawing", wasCorrect);
      updateStats2(elements, state);
      renderBacklogViewFn();
      refreshProgressViewFn();
      queueManager.updateQueueMeta();
      persistStateFn();
    }
    return {
      validateTypingAnswer,
      processTypingAnswer,
      processDrawingResult
    };
  }
  var init_answering = __esm({
    "js/features/answering.js"() {
    }
  });

  // js/app.js
  var require_app = __commonJS({
    "js/app.js"() {
      init_kanaData();
      init_elements();
      init_state();
      init_utils();
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
      var elements = getElements();
      var state = createState(kanaData);
      var drawingFeature = createDrawingFeature({
        elements,
        state,
        maxDrawingsPerKana: MAX_DRAWINGS_PER_KANA
      });
      var getKanaCategoryFn = (romaji) => getKanaCategory(romaji, YOON_SET, DAKUTEN_SET);
      var srsManager = createSrsManager(state);
      var queueManager = createQueueManager(state, elements, srsManager, getKanaCategoryFn);
      var audioManager = createAudioManager(state, elements);
      var answeringManager = createAnsweringManager(
        state,
        elements,
        srsManager,
        queueManager,
        showResult,
        updateStats,
        updateBacklog,
        addDailyAttempt,
        () => renderBacklogView(),
        () => refreshProgressView(),
        () => persistState()
      );
      var cloudSync = { queueUpload() {
      }, async syncNow() {
      } };
      var deferredInstallPrompt = null;
      function setupPwaInstall() {
        if (!("serviceWorker" in navigator)) {
          return;
        }
        navigator.serviceWorker.register("sw.js").catch(() => {
        });
        window.addEventListener("beforeinstallprompt", (event) => {
          event.preventDefault();
          deferredInstallPrompt = event;
          elements.installAppBtn.classList.remove("hidden");
        });
        elements.installAppBtn.addEventListener("click", async () => {
          if (!deferredInstallPrompt) {
            return;
          }
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
        try {
          const preferredRomajiList = queueManager.getPreferredRomajiList();
          const mode = elements.modeSelect.value;
          if (mode === "kanaToRomaji") {
            state.currentQuestion = pickTypingQuestion({
              kanaData,
              scriptMode: elements.scriptSelect.value,
              kanaSet: elements.kanaSetSelect.value,
              getKanaCategoryFn,
              getQuestionWeightFn: getQuestionWeight,
              backlog: state.backlog,
              preferredRomajiList
            });
          } else if (mode === "romajiToKana") {
            state.currentQuestion = pickWritingQuestion({
              kanaData,
              writingMode: elements.writingScriptSelect.value,
              kanaSet: elements.kanaSetSelect.value,
              getKanaCategoryFn,
              getQuestionWeightFn: getQuestionWeight,
              backlog: state.backlog,
              preferredRomajiList
            });
          } else {
            state.currentQuestion = Math.random() > 0.5 ? pickTypingQuestion({
              kanaData,
              scriptMode: elements.scriptSelect.value,
              kanaSet: elements.kanaSetSelect.value,
              getKanaCategoryFn,
              getQuestionWeightFn: getQuestionWeight,
              backlog: state.backlog,
              preferredRomajiList
            }) : pickWritingQuestion({
              kanaData,
              writingMode: elements.writingScriptSelect.value,
              kanaSet: elements.kanaSetSelect.value,
              getKanaCategoryFn,
              getQuestionWeightFn: getQuestionWeight,
              backlog: state.backlog,
              preferredRomajiList
            });
          }
        } catch (error) {
          state.currentQuestion = null;
          showResult(elements, `Question error: ${error.message}`, false);
          return;
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
        queueManager.updateQueueMeta();
      }
      function checkTypingAnswer() {
        const userAnswer = sanitizeRomaji(elements.answerInput.value);
        answeringManager.processTypingAnswer(userAnswer);
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
        answeringManager.processDrawingResult(wasCorrect, () => drawingFeature.saveCurrentDrawingIfCorrect());
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
        state.recentMistakes = [];
        state.practiceStrategy = "srs";
        state.lastCloudSyncAt = 0;
        state.syncUserEmail = "";
        Object.keys(state.srsByRomaji).forEach((romaji) => {
          state.srsByRomaji[romaji] = {
            dueAt: 0,
            intervalHours: 0,
            lastSeenAt: 0,
            lastCorrect: false
          };
        });
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
        elements.practiceStrategySelect.value = state.practiceStrategy;
        queueManager.updateQueueMeta();
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
        elements.kanaSetSelect.addEventListener("change", () => {
          queueManager.updateQueueMeta();
          newQuestion();
        });
        elements.practiceStrategySelect.addEventListener("change", () => {
          state.practiceStrategy = elements.practiceStrategySelect.value;
          queueManager.updateQueueMeta();
          persistState();
          newQuestion();
        });
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
        elements.playAudioBtn.addEventListener("click", () => audioManager.playCurrentAudio());
        elements.muteAudioBtn.addEventListener("click", () => {
          audioManager.toggleAudioMute();
          persistState();
        });
        elements.revealBtn.addEventListener("click", revealDrawingAnswer);
        elements.clearCanvasBtn.addEventListener("click", drawingFeature.clearAllCanvases);
        elements.markRightBtn.addEventListener("click", () => markDrawingResult(true));
        elements.markWrongBtn.addEventListener("click", () => markDrawingResult(false));
        elements.drawGuideToggle.addEventListener("change", () => {
          state.drawGuideEnabled = elements.drawGuideToggle.checked;
          drawingFeature.setGuideEnabled(state.drawGuideEnabled);
          persistState();
        });
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
            queueManager.updateQueueMeta();
            saveProgress({ storageKey: STORAGE_KEY, state, dailyHistoryLimit: DAILY_HISTORY_LIMIT });
          },
          onLocalStateSaved(payload) {
            state.lastSavedAt = Number(payload.savedAt || state.lastSavedAt || 0);
            state.lastCloudSyncAt = Number(payload.cloudSyncedAt || state.lastCloudSyncAt || 0);
            state.syncUserEmail = payload.userEmail || state.syncUserEmail || "";
          }
        }).then((syncApi) => {
          cloudSync = syncApi;
        }).catch((error) => {
          elements.syncStatus.textContent = `Cloud sync unavailable: ${error.message}`;
        });
        bindEvents();
        setupPwaInstall();
        elements.practiceStrategySelect.value = state.practiceStrategy;
        elements.drawGuideToggle.checked = state.drawGuideEnabled;
        drawingFeature.setGuideEnabled(state.drawGuideEnabled);
        audioManager.refreshAudioButton();
        queueManager.updateQueueMeta();
        switchModeUI();
        drawingFeature.clearAllCanvases();
        updateStats(elements, state);
        renderBacklogView();
        refreshProgressView();
        setActiveProgressTab(elements, "backlog");
      }
      init();
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
