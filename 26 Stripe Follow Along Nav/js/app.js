// Variables
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// Abrir el dropdown
const handleEnter = (e) => {
  e.target.classList.add("trigger-enter");
  setTimeout(
    () =>
      e.target.classList.contains("trigger-enter") &&
      e.target.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const dropdown = e.target.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect(); // Obtener las coordenadas del dropdown
  const navCoords = nav.getBoundingClientRect(); // Obtener las coordenadas del nav

  // Obtener la posición del dropdown
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  
  // Aplicar la posición del dropdown
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
};

// Cerrar el dropdown
const handleLeave = (e) => {
  e.target.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
};

// Event Listeners
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
