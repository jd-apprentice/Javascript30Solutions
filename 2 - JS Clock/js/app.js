// Variables
const getHandSeconds = document.querySelector(".seconds");
const getHandMinutes = document.querySelector(".minutes");
const getHandHours = document.querySelector(".hours");

// Get the current time every second
let getDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();

  // Update the seconds
  const secondDeg = (seconds / 60) * 360 - 90;
  getHandSeconds.style.transform = `rotate(${secondDeg}deg)`;

  // Update the minutes
  const minutes = now.getMinutes();
  const minuteDeg = (minutes / 60) * 360 + 90;
  getHandMinutes.style.transform = `rotate(${minuteDeg}deg)`;

  // Update the hours
  const hours = now.getHours();
  const hourDeg = (hours / 12) * 360 + 90;
  getHandHours.style.transform = `rotate(${hourDeg}deg)`;
};

// Run the function every second
setInterval(getDate, 1000);

getDate();
