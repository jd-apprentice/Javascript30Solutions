const arrPressed = [];
const secretCode = 'meow';

window.addEventListener('keydown', (e) => {
 console.log(e.key);
 arrPressed.push(e.key);
 arrPressed.splice(-secretCode.length - 1, arrPressed.length - secretCode.length); // Maximo caracter de letras == secretCode.length
 if(arrPressed.join("").includes(secretCode)){ // Convertir el array en string y verificar si contiene la secuencia de letras
     console.log('MEOWWWW');
     cornify_add();
 }
});