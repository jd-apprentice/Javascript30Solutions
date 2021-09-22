// Variables
const displayText = document.querySelector('.display__time-left');
const displayEnd = document.querySelector('.display__end-time');
const getButtons = document.querySelectorAll('[data-time]');
let countdown;

// Obtener la hora actual
const getTimer = (seconds) => {
    clearInterval(countdown); // Limpiar el contador anterior
    // Obtener el tiempo actual y el final
    const getNow = Date.now();
    const getThen = getNow + seconds * 1000;
    // Inicializar el contador y la hora a volver
    getDisplayTime(seconds);
    getEndDisplayTime(getThen);
    // Cada segundo se actualiza el display
    countdown = setInterval(() => {
        const secondsLeft = Math.round((getThen - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        getDisplayTime(secondsLeft);
    }, 1000);
}

// Obtener y pintar en pantalla los minutos/segundos restantes
const getDisplayTime = (seconds) => {
    const getMinutes = Math.floor(seconds / 60);
    const getSeconds = seconds % 60;
    const getDisplay = `${getMinutes}:${getSeconds < 10 ? '0' : ''}${getSeconds}`;
    displayText.textContent = getDisplay;
    document.title = `Tiempo restante: ${getDisplay}`
}

// Obtener y pintar el tiempo para volver/terminar
const getEndDisplayTime = (timestamp) => {
    const getEnd = new Date(timestamp);
    const getHour = getEnd.getHours();
    const getMinutes = getEnd.getMinutes();
    displayEnd.textContent = `Volve a las: ${getHour}:${getMinutes < 10 ? '0' : ''}${getMinutes}`;
}

// Iniciar botones con sus respectivos tiempos
const startTimer = (e) => {
    const buttonTime = parseInt(e.target.dataset.time);
    getTimer(buttonTime);
}

// AddEventListener && Formulario
getButtons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const grabMinutes = parseInt(document.customForm.minutes.value); // Obtener los minutos
    getTimer(grabMinutes * 60); // Iniciar el contador
    customForm.reset(); // Limpiar el formulario
});