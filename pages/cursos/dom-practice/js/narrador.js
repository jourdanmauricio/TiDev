const d = document;
const w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select");
  const $speechTextArea = d.getElementById("speech-text");
  const $speechBtn = d.getElementById("speech-btn");
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    console.log("ssss");
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();

      console.log(voices);
      voices.forEach((voice) => {
        console.log("ssss2");
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });

  d.addEventListener("chamge", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextArea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
