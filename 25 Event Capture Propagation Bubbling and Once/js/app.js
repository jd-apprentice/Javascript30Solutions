/* Clase de estudio para aprender Event capture, Propagation, Bubbling y Once */
/* Capture: Comienza desde arriba hacia abajo, modo cascada */
/* Propagation: Comienza desde el elemento padre hacia el hijo, en conjunto con capture puede ser usado para
obtener solo el elemento que uno desee en vez de lanzar todos */
/* Bubbling: Comienza desde el hijo hacia el padre */
/* Once: Solo se ejecuta una vez */

// Variables
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

const logText = (e) => {
  console.log(e.classList.value);
  // e.stopPropagation(); // Detener propagacion
};

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false, // false = default, true = captura
    once: true, // true = solo una vez
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true,
  }
);
