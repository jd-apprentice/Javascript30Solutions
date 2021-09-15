const links = document.querySelectorAll("a");
const destacar = document.createElement("span");
destacar.classList.add("highlight");
document.body.appendChild(destacar);

const destacarLink = (e) => {
  const link = e.currentTarget.getBoundingClientRect();

  // Cordenadas
  const cordenadas = {
    width: link.width,
    height: link.height,
    top: link.top + window.scrollY,
    left: link.left + window.scrollX
  }

  // Modificar el estilo del elemento
  destacar.style.width = `${cordenadas.width}px`;
  destacar.style.height = `${cordenadas.height}px`;
  destacar.style.transform = `translate(${cordenadas.left}px, ${cordenadas.top}px)`;
}

links.forEach(link => link.addEventListener("mouseenter", destacarLink));