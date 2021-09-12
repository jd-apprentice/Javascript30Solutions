// Variables
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const getPhoto = document.querySelector('.takePhoto');

// Capturar Video
const getVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
}

// Pintar Canvas
const getCanvas = () => {
    [width, height] = [video.videoWidth, video.videoHeight]; // Obtener el ancho y alto del video
    [canvas.width, canvas.height] = [width, height]; // Asignar el ancho y alto del canvas

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // Obtener los pixeles del canvas
        let getPixels = ctx.getImageData(0, 0, width, height);

        // Aplicar funcion rgbSplit
        // getPixels = rgbSplit(getPixels); Descomentar para aplicar la funcion rgbSplit
        ctx.putImageData(getPixels, 0, 0); 
    }, 16);
}
    
// Sacar foto
getPhoto.addEventListener("click", () => {
    // Sonido de foto
    snap.currentTime = 0;
    snap.play();
    // Descargar Foto
    const dataType = canvas.toDataURL('image/jpeg'); // data:image/jpeg;base64,
    const getLink = document.createElement('a');
    getLink.href = dataType;
    getLink.setAttribute('download', 'Tormenta de facha');
    getLink.innerHTML = `<img src="${dataType}" alt="Tormenta de facha" />`;
    strip.insertBefore(getLink, strip.firstChild); // Insertar en el strip
});

// Rbg Split
const rgbSplit = (pixels) => {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // Rojo
        pixels.data[i + 100] = pixels.data[i + 1]; // Verde
        pixels.data[i - 150] = pixels.data[i + 2]; // Azul
    }
    return pixels;
}

// Correr video en canvas
getVideo();
video.addEventListener('canplay', getCanvas); // Cuando el video este listo