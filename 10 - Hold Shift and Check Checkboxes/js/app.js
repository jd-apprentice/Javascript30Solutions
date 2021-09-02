// Var
const getCheckbox = document.querySelectorAll(".check");
const getButtonReload = document.querySelector(".reloadPage");
const getButtonReset = document.querySelector(".resetValues");
let lastCheck;

// Handle the checkboxes
const handleCheckbox = (event) => {
  let getBetween = false;
  if (event.shiftKey && event.target.checked) {
    getCheckbox.forEach((checkbox) => {
      if (checkbox === event.target || checkbox === lastCheck) {
        getBetween = !getBetween;
      }
      if (getBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastCheck = event.target;
};

// Replace text in the DOM
const handleCtrl = (event) => {
  let texto = event.target.nextElementSibling.innerText;
  getCheckbox.forEach((checkbox) => {
    if (checkbox.checked && event.ctrlKey) {
      checkbox.nextElementSibling.innerText = texto;
    }
  });
};

// Reload page
getButtonReload.addEventListener("click", () => {
  window.location.reload();
});

// Remove checkbox.checked
getButtonReset.addEventListener("click", () => {
  getCheckbox.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

// Add event listeners - Handle checkbox and ctrl
getCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckbox);
});

getCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("keydown", handleCtrl);
});
