// Variables
const getNav = document.querySelector('#main');
const getTop = getNav.offsetTop; // Altura del nav al cargar la pagina

// Cuando scrollamos la pagina y esta por debajo del nav, se le agrega la clase fixed
const fixedNav = () => {
    if (window.scrollY >= getTop) {
        document.body.style.paddingTop = getNav.offsetHeight + 'px';
        getNav.classList.add('fixed');
    } else {
        document.body.style.paddingTop = 0;
        getNav.classList.remove('fixed');
    }
}

// AddEventListener
window.addEventListener('scroll', fixedNav);