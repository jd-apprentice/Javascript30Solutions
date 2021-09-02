// Get all the inputs
const getInputs = document.querySelectorAll(".controls input");

// Set values to inputs
getInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const extension = input.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${input.name}`,
      input.value + extension
    );
  });
});
