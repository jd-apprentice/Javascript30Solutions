let getList = document.querySelector('#bands'); // Where bands are going to be located

// Array of bands
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const stripName = (name) => name.replace(/^(a |the |an )/i, '').trim(); // Remove articles from band names
const sortNames = bands.sort((a, b) => stripName(a) > stripName(b) ? 1 : -1); // Sort the bands alphabetically with articles removed
const mapBands = () => getList.innerHTML = sortNames.map(band => `<li>${band}</li>`).join(''); // Map the sorted bands to the list
mapBands(); // Run the function
