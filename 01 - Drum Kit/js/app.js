// Grab all keys
const teclas = document.querySelectorAll(".key");

// Keydown Function
const keyDown = (e) => {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

// Keyup Function
const keyUp = (e) => {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!key) return;
  key.classList.remove("playing");
};

// Event Listeners
window.addEventListener("keydown", (e) => {
  keyDown(e);
});

window.addEventListener("keyup", (e) => {
  keyUp(e);
});
