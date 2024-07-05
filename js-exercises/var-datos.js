const person = 'Maik';
const helloWorld = '¡Hola Mundo!';
const arrNums = [1, 2, 3, 4, 5];
const word = 'lluvia';
const phrase = 'La lluvia en Sevilla es una maravilla'

console.log(`${helloWorld} Soy ${person}`);
console.log(`Mi nombre en mayúsculas es: ${person.toLocaleUpperCase()}`);
console.log(`Mi nombre en minúsculas es: ${person.toLocaleLowerCase()}`);
console.log(`El mensaje de ${helloWorld} tiene ${helloWorld.length} carácteres`);
console.log(`El tercer número del array con los valores '${arrNums}' es: ${arrNums[2]}`);
console.log(`Al añadir el siguiente número al array, ${arrNums.push(parseInt([arrNums.length]) + 1)}, tendremos el array ${arrNums}`);
console.log(`Buscamos el patrón '${word}' en el texto '${phrase}', por lo que el resultado es: ${phrase.includes(word)}`);



const ex01 = `>${helloWorld} Soy ${person}`;
const ex02 = `>Mi nombre en mayúsculas es: ${person.toLocaleUpperCase()}`;
const ex03 = `>Mi nombre en minúsculas es: ${person.toLocaleLowerCase()}`;
const ex04 = `>El mensaje de ${helloWorld} tiene ${helloWorld.length} carácteres`;
const ex05 = `>El tercer número del array con los valores '${arrNums}' es: ${arrNums[2]}`;
const ex06 = `>Al añadir el siguiente número al array, ${arrNums.push(parseInt([arrNums.length]) + 1)}, tendremos el array ${arrNums}`;
const ex07 = `>Buscamos el patrón '${word}' en el texto '${phrase}', por lo que el resultado es: ${phrase.includes(word)}`;

const printArr = [ex01, ex02, ex03, ex04, ex05, ex06, ex07]

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

async function appendParagraph() {

  for (let i = 0; i < printArr.length; i++) {
    const p = document.createElement('p');
    p.textContent = printArr[i];
    displayTerminal.appendChild(p);

    await delay(420);
  }
}

const  runBtn = document.querySelector('.run-code-btn');
const displayTerminal = document.querySelector('.display-terminal');

runBtn.addEventListener('click', (e) => {

  appendParagraph()
});
