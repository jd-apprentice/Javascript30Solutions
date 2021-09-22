const dogs = [
  { name: "Negro", age: 2 },
  { name: "Shacky", age: 8 },
];

const makeBig = () => {
  const p = document.querySelector("p");
  p.style.color = "red";
  p.style.fontSize = "50px";
};

// Regular
console.log("BUENASSSSSSSSSSSSS");

// Interpolated
console.log("Hola soy un pedazo de %s en forma de string!", "💩");

// Styled
console.log(
  "%c Soy un texto tuneado",
  "font-size:15px; background:blue; text-shadow: 10px 10px 0 red"
);

// warning!
console.warn("Que haces chinchulin");

// Error :|
console.error("Rompiste todo");

// Info
console.info("Cuando hice este codigo estuvo lloviendo todo el dia");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "Te estas equivocando papa");

// clearing

// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("Negro");
console.count("Negro");
console.count("Shacky");
console.count("Shacky");
console.count("Negro");
console.count("Shacky");
console.count("Negro");
console.count("Shacky");
console.count("Shacky");
console.count("Shacky");
console.count("Shacky");
console.count("Shacky");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/jd-apprentice")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
