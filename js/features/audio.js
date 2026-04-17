/**
 * Audio/Pronunciation Handler
 * Manages text-to-speech for kana pronunciation
 */

export function createAudioManager(state, elements) {
  /**
   * Determine text to speak based on question type
   */
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

  /**
   * Play audio pronunciation for current question
   * Uses Web Speech API with Japanese voice selection
   */
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
    utterance.rate = 0.75;          // Slower for clarity
    utterance.pitch = 1.2;          // Slightly higher pitch
    utterance.volume = 1.0;         // Full volume

    // Wait for voices to load if empty, then speak
    const speak = () => {
      const voices = window.speechSynthesis.getVoices();
      const japaneseVoice = voices.find(v => v.lang && v.lang.startsWith('ja-'));
      if (japaneseVoice) {
        utterance.voice = japaneseVoice;
      }
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = speak;
      setTimeout(speak, 100); // Fallback if voices don't load
    } else {
      speak();
    }
  }

  /**
   * Update audio button display based on mute state
   */
  function refreshAudioButton() {
    elements.muteAudioBtn.textContent = state.audioMuted ? "Audio: Off" : "Audio: On";
    elements.muteAudioBtn.setAttribute("aria-pressed", String(state.audioMuted));
  }

  /**
   * Toggle audio mute state
   */
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
