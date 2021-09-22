// Variables
const getHero = document.querySelector('.hero');
const getText = document.querySelector('h1');
const move = 200;

getHero.addEventListener('mousemove', (e) => {
    // Cursor position
    const height = getHero.offsetHeight;
    const width = getHero.offsetWidth;
    let x = e.offsetX;
    let y = e.offsetY;

    // Nested elements
    if(this !== e.target) { // If the cursor is not on the hero element
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // Math to get the movement of the text
    const xMove = Math.round(x / width * move) - move / 2;
    const yMove = Math.round(y / height * move) - move / 2;

    // Modify CSS properties
    getText.style.textShadow = `${xMove / 3}px ${yMove / 3}px 0 rgba(255,0,0,0.7)`;
    getText.style.transform = `translate(${xMove}px, ${yMove}px)`;
});