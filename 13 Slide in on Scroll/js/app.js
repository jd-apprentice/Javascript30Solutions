// Obtener todas las imagenes
const getImagenes = document.querySelectorAll('.slide-in');

// Calcular el viewport
const viewPort = (elem) => {
	const distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// Quitar de pantalla
const debounce = (func, wait = 10, immediate = true) => {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

// Agregar en pantalla
const animar = () => {
    getImagenes.forEach(imagen => {
        if(viewPort(imagen)){
            imagen.classList.add('active');
        }else{
            imagen.classList.remove('active');
        }
    });
}

// Evento scroll
window.addEventListener('scroll', debounce(animar));