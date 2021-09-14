// Variables
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

// Mirar posicion
navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = Math.round(data.coords.speed); // Round velocidad a un decimal
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; // Mover la brujula
  },
  (err) => {
    console.error(err);
  }
);
