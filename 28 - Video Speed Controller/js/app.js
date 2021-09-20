// Variables
const getSpeed = document.querySelector('.speed');
const getSpeedBar = document.querySelector('.speed-bar');
const getVideo = document.querySelector('.flex');

// Calcular posicion del mouse y actualizar la barra
getSpeed.addEventListener('mousedown', (e) => {
    const y = e.pageY - getSpeed.offsetTop; // Posicion del mouse en la barra
    const percent = y / getSpeed.offsetHeight; // Porcentaje de la barra
    const min = 0.3;
    const max = 3;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min; // Velocidad de reproduccion
    getSpeedBar.style.height = height;
    getSpeedBar.textContent = playbackRate.toFixed(2) + 'x';
    getVideo.playbackRate = playbackRate;
});