// for in loops are good for objects because often they are not ordered
/* const translator = {
  bucle: 'loop',
  lista: 'array',
  declaración: 'declaration',
  objeto: 'object',
}

for (let word in translator) {
  console.log(`${word} en inglés es ${translator[word]}`)
} */

// While to stop after specific value in array

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let num = 0;
while (num < 14) {

  num = arr.shift();
  console.log(`Removing number ${num}`);
}

console.log(`Final array is ${arr}`);

// Challenges code
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

console.log(`----------------------------`);

const colors = ['red', 'yellow', 'blue', 'brown'];

for (let color of colors) {
  console.log(color);
}

console.log(`----------------------------`);

const person = {
  name: 'María',
  person: 27,
  profession: 'Diseñadora',
};

for (let att in person) {
  console.log(`${att}: ${person[att]}`);
}

console.log(`----------------------------`);


while (numSquared * numSquared < 100) {
  numSquared++;
}

console.log(`El número más cercano a 100 cuyo cuadrado es menor o igual a 100 es: ${numSquared}`);

console.log(`----------------------------`);

let j = 1;
do {
  if (j % 2 === 0) {
    console.log(`${j} es un número par`);
  }
  j++;
} while (j <= 10); */


// To Print in portfolio code

const runBtn = document.querySelector('.run-code-btn');
const displayTerminal = document.querySelector('.display-terminal');

const seperator = async function printSeperator() {
  console.log(`----------------------------`);
  const p = document.createElement('p');
  p.textContent = `----------------------------`;
  displayTerminal.appendChild(p);
}

const ex01 = async function ex01() {
  
  for (var i = 1; i <= 15; i++) {
  console.log(i);
  const p = document.createElement('p');
  p.textContent = i;
  displayTerminal.appendChild(p);
  await delay(140);
  }
}

const colors = ['red', 'yellow', 'blue', 'brown'];
const ex02 = async function ex02() {
  for (let color of colors) {
  console.log(color);
  const p = document.createElement('p');
  p.textContent = color;
  displayTerminal.appendChild(p);
  await delay(140);
  }
}

const person = {
  name: 'María',
  person: 27,
  profession: 'Diseñadora',
};

const ex03 = async function ex03() {
  for (let att in person) {

  console.log(`${att}: ${person[att]}`);
  const p = document.createElement('p');
  p.textContent = `${att}: ${person[att]}`;
  displayTerminal.appendChild(p);
  await delay(140);
  }
}

let numSquared = 1;
const ex04 = async function ex04() {
  while (numSquared * numSquared < 100) {
  numSquared++;
  }
  console.log(`El número más cercano a 100 cuyo cuadrado es menor o igual a 100 es: ${numSquared}`);
  const p = document.createElement('p');
  p.textContent = `El número más cercano a 100 cuyo cuadrado es menor o igual a 100 es: ${numSquared}`;
  displayTerminal.appendChild(p);
  await delay(140);
}

const ex05 = async function ex05() {
  let j = 1;
  do {
    if (j % 2 === 0) {
      console.log(`${j} es un número par`);
      const p = document.createElement('p');
      p.textContent = `${j} es un número par`;
      displayTerminal.appendChild(p);
      await delay(140);
    }
    j++;
  } while (j <= 10);
}

const printArr = [ex01, seperator, ex02, seperator, ex03, seperator, ex04, seperator, ex05];

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printAll() {

  //console.log(printArr);

  while(printArr.length) {

    await printArr.shift().call();
    await delay(420);
  }
}

runBtn.addEventListener('click', (e) => {
  printAll();
});