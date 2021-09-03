// Variables
const link =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const searchBar = document.querySelector("#textoForm");
const listCities = document.querySelector("#cities");
let cities = [];

// Fetch cities
const getCities = async () => {
  const response = await fetch(link);
  cities = await response.json();
  renderCities(cities);
};

// Search cities
searchBar.addEventListener("keyup", (e) => {
  const text = e.target.value.toLowerCase();

  const filteredCities = cities.filter((ciudad) => {
    return (
      ciudad.city.toLowerCase().includes(text) ||
      ciudad.state.toLowerCase().includes(text)
    );
  });
  renderCities(filteredCities);
});

// Render cities
const renderCities = (ciudades) => {
  const mapCities = ciudades.map((ciudad) => {
    return `<li>${ciudad.city}, ${ciudad.state} <span>${ciudad.population}</span></li>`;
  });
  listCities.innerHTML = mapCities.join("");
};

// Init app
getCities();
