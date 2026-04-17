# Kana Quiz Trainer

A small browser-based quiz app for practicing Japanese kana in three quiz modes:

1. Kana -> Romaji: the app shows hiragana/katakana, and you type romaji.
2. Romaji -> Kana: the app shows romaji, and you draw both hiragana and katakana to self-check.
3. Mixed: the app randomly gives typing or drawing questions.

It also keeps a backlog table for every romaji item, including:

- How many times you got it right
- How many times you got it wrong

Extra features:

- Typing mode auto-advances to the next question after you submit (button or Enter key).
- Writing mode has script options: both, mixed (random one script), hiragana-only, katakana-only.
- Daily progress tab with history table and graph.
- Reset all data button.
- Includes yoon combinations such as `kya`, `shu`, `cho`, `ryu`, and more.

## Run

1. Start a local server in this folder.
2. Open the served `index.html` in your browser.
3. Example (Python):

```bash
python -m http.server 8000
```

Then browse to:

```text
http://localhost:8000
```

4. Choose script mode:
   - `Hiragana`
   - `Katakana`
   - `Mixed`
5. Choose quiz mode and press `New Question`.

## Runtime Modes

- Served over `http://...`: loads modular source from `js/app.js`.
- Opened as `file://...`: falls back to bundled `script.js` for compatibility.

If you edit files under `js/` and want those changes to work in `file://` mode, rebuild the bundle:

```bash
npx esbuild js/app.js --bundle --format=iife --platform=browser --target=es2018 --outfile=script.js
```

## Project Structure

- `js/app.js` - app bootstrap and event wiring.
- `js/data/kanaData.js` - kana dataset and constants.
- `js/dom/elements.js` - DOM element lookups.
- `js/core/state.js` - mutable app state construction.
- `js/core/ui.js` - shared UI helpers.
- `js/core/utils.js` - utility helpers.
- `js/features/backlog.js` - backlog rendering and updates.
- `js/features/quiz.js` - question generation logic.
- `js/features/progress.js` - daily progress table, compare, graph.
- `js/features/storage.js` - localStorage load/save.
- `js/features/drawing.js` - canvas draw and gallery behavior.

## Progress Test Harness

To validate progress math and daily rollover logic:

1. Start the local server.
2. Open `http://localhost:8000/test-progress.html`.
3. Confirm all tests pass.

## Notes

- Drawing mode is self-check only (the app reveals answers, then you mark yourself right/wrong).
- The kana list currently includes basic gojuon plus voiced/semi-voiced sounds.
