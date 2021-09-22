const getPanels = document.querySelectorAll(".panel");

getPanels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("open")) {
      panel.classList.remove("open", "open-active");
    } else {
      panel.classList.add("open", "open-active");
    }
  });
});
