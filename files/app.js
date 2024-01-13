console.log("hello app");

const alphabet = [
  "KeyA",
  "KeyB",
  "KeyC",
  "KeyD",
  "KeyE",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyI",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyM",
  "KeyN",
  "KeyO",
  "KeyP",
  "KeyQ",
  "KeyR",
  "KeyS",
  "KeyT",
  "KeyU",
  "KeyV",
  "KeyW",
  "KeyX",
  "KeyY",
  "KeyZ",
];

function createKeyboard() {
  const keyboard = document.querySelector(".guess-keyboard");

  const keys = alphabet
    .map((char) => {
      const charBtn = `
    <div class="keyboard-button" data-code="${char}">${char.at(-1)}</div>`;
      return charBtn;
    })
    .join("");

  keyboard.insertAdjacentHTML("afterbegin", keys);
}

function main() {
  const keyboard = document.querySelector(".guess-keyboard");
  // add all content

  // create buttons
  createKeyboard();

  // add listener to keyboard buttons
  keyboard.addEventListener("click", (e) => {
    if (e.target.dataset.code) {
      e.target.style.backgroundColor = "#545454";
    }
  });

  document.addEventListener("keypress", (e) => {
    if (alphabet.includes(e.code)) {
      const button = document.querySelector(`[data-code="${e.code}"]`);
      button.style.backgroundColor = "#545454";
    }
  });
}

main();
