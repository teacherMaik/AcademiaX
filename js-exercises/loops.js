// for in loops are good for objects because often they are not ordered
const translator = {
  bucle: 'loop',
  lista: 'array',
  declaración: 'declaration',
  objeto: 'object',
}

for (let word in translator) {
  console.log(`${word} en inglés es ${translator[word]}`)
}

// While to stop after specific value in array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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

let numSquared = 1;
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
} while (j <= 10);


