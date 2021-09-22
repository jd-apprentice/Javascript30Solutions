// Variables
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const lastScore = document.querySelector(".lastScore");
const moles = document.querySelectorAll(".mole");
const btnStart = document.querySelector(".startGame");
let lastHole;
let timeUp = false;
let score = 0;

// Intervalo que aparecen los animalitos
const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

// En que agujero aparecen
const randomHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
};

// Funcion que hace que los animalitos aparezcan
const peep = () => {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      peep();
    } else { // Actualizar contadores
      lastScore.textContent = score;
      scoreBoard.textContent = 0;
    }
  }, time);
};

// Comenzar el juego
const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
};

// Pegarle a los animalitos
const bonk = (e) => {
  bonkAudio();
  if (!e.isTrusted) return; // Haciendo trampa
  score++;
  e.target.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
};

// Pegarle audio
const bonkAudio = () => {
  const audio = new Audio("./assets/Bonk.mp3");
  audio.volume = 0.3;
  audio.play();
};

// AddEventListener
moles.forEach((mole) => mole.addEventListener("click", bonk));
btnStart.addEventListener("click", startGame);
