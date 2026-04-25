export function createDrawingFeature({ elements, state, maxDrawingsPerKana, eventBus, EVENT_NAMES }) {
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
    // A fresh canvas has no ink — disable reveal until user draws
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

    // Enable Reveal Answer only if at least one visible canvas has ink
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
      elements.galleryBody.innerHTML = "<div class=\"gallery-empty\">No saved drawings yet for this item.</div>";
    } else {
      renderGalleryItems(kanaChar);
    }

    elements.drawingGalleryDialog.showModal();
  }

  function renderGalleryItems(kanaChar) {
    const drawings = state.drawingsByKana[kanaChar] || [];
    if (drawings.length === 0) {
      elements.galleryBody.innerHTML = "<div class=\"gallery-empty\">No saved drawings yet for this item.</div>";
      return;
    }
    elements.galleryBody.innerHTML = drawings
      .map((imageData, index) => `
        <div class="gallery-item">
          <img src="${imageData}" alt="Saved drawing ${index + 1} for ${kanaChar}" />
          <button type="button" class="btn-danger gallery-delete-btn" data-index="${index}" data-kana="${kanaChar}" aria-label="Delete drawing ${index + 1}">✕</button>
        </div>
      `)
      .join("");

    // Wire delete buttons
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

    // Reset reveal button when a new question is shown
    if (eventBus && EVENT_NAMES) {
      eventBus.on(EVENT_NAMES.QUESTION_NEW, () => setRevealEnabled(false));
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
