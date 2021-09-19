// Variables
const getSlider = document.querySelector('.items');
let isDown = false;
let getStartX;
let scrollLeft;

// Se ejecuta cuando se presiona el mouse
getSlider.addEventListener('mousedown', (e) => {
  isDown = true;
  getSlider.classList.add('active');
  getStartX = e.pageX - getSlider.offsetLeft; // Posición del mouse en el elemento
  scrollLeft = getSlider.scrollLeft; // Posicion del scroll
});

// Se deja de mover el mouse
getSlider.addEventListener('mouseleave', () => isDown = false && getSlider.classList.remove('active'));

// Se levanta el mouse y se mueve
getSlider.addEventListener('mouseup', () => isDown = false && getSlider.classList.remove('active'));

// Se mueve el mouse
getSlider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // Evitar que la función se ejecute cuando no se está presionando el mouse
  e.preventDefault();
  const x = e.pageX - getSlider.offsetLeft;
  const walk = (x - getStartX) * 2;
  getSlider.scrollLeft = scrollLeft - walk;
});