// Texto
const texts = document.querySelector(".words");

// Speech recognition para Chrome
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Nueva instancia de SpeechRecognition
const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;

// Cuando se detecta una palabra
let p = document.createElement("p");

// Función que se ejecuta cuando se detecta una palabra
recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  // Si decis abri mi perfil de git abre el mio
  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("Abrir mi perfil de git")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Abriendo el perfil de github";
      texts.appendChild(p);
      window.open("https://github.com/jd-apprentice");
    }
    p = document.createElement("p");
  }
});

// Cuando se termina de hablar
recognition.addEventListener("end", () => {
  recognition.start();
});

// Iniciar reconocimiento
recognition.start();
