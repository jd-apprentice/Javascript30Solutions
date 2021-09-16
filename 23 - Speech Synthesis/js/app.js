// Speech Object
const msg = new SpeechSynthesisUtterance(); 

// Array of voices
let voices = []; 

// Elementos del DOM
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

// Funciones
const getVoices = () => {
    // Obtener voces
    voices = speechSynthesis.getVoices();
    // Devuelve un array de opciones con las voces
    voicesDropdown.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}

// Cambiar voces
const changeVoices = () => msg.voice = voices.find(voice => voice.name === voicesDropdown.value); // Si la voz es igual a la seleccionada

// Escuchar texto
const speakClick = () => speechSynthesis.speak(msg);

// Detener texto
const stopClick = () => speechSynthesis.cancel();

// Cambio de voz
const setToggle = (comenzar = true) => {
    speechSynthesis.cancel();
    if (comenzar) {
        speechSynthesis.speak(msg);
    }
}

// Pitch y Rate
let setOption = (e) => {
    msg[e.target.name] = e.target.value;
    setToggle();
}

// AddEventListener
speechSynthesis.addEventListener('voiceschanged', getVoices);
voicesDropdown.addEventListener('change', changeVoices);
speakButton.addEventListener('click', speakClick);
stopButton.addEventListener('click', stopClick);
options.forEach(option => option.addEventListener('change', setOption));