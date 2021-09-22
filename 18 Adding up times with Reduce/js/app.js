// Variables
const getVideos = [...document.querySelectorAll('[data-time]')];
const getImagenes = document.querySelectorAll('.imgVideo');
const getDuracion = document.querySelectorAll('.duracionVideo');
const getNombres = document.querySelectorAll('.nombreVideo');
const getHTML = document.querySelector('.totalTime');

// Array Tiempos
const arrDuraciones = [];
getVideos.map(node => arrDuraciones.push(node.dataset.time)).join(', ');

// Obtener tiempo total
const getSeconds = getVideos
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds); // Suma de los segundos

    let secondsLeft = getSeconds; // Tiempo restante
    const getHours = Math.floor(secondsLeft / 3600); // Horas
    secondsLeft = secondsLeft % 3600; // Resto de horas

    const getMins = Math.floor(secondsLeft / 60); // Minutos
    secondsLeft = secondsLeft % 60; // Resto de minutos

// Pintar Imagenes
getImagenes.forEach((imagen) => imagen.src = "https://dummyimage.com/200x50/000/fff.jpg&text=Video+Educativo");

// Pintar Nombres
getNombres.forEach((nombre, i) => nombre.innerHTML = `Video numero: #${i}`);


// Pintar Duracion
for (let i = 0; i < getDuracion.length; i++) getDuracion[i].innerHTML = `Duracion: ${arrDuraciones[i]} <hr>`;

// Pintar tiempo total restante
getHTML.innerText = `Tiempo total: ${getHours}:${getMins}:${secondsLeft}`;