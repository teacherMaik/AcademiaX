console.log(`¿El número 10 es mayor que el número 5? ${10 > 5}`);
console.log(`¿El número 10 es mayor que el número 5? ${10 < 5}`);
console.log(`¿El número 1 es igual al número 2? ${1 === 2}`);
console.log(`¿El texto 1 es igual al texto 2? ${'1' === '2'}`);

const x = {};
const y = {};
console.log(`¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y}`);

console.log(`AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4}`);
console.log(`OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4}`);
console.log(`La suma de 10 + 3: ${10 + 3}`);
console.log(`La resta de 10 - 7: ${10 - 7}`);
console.log(`La multiplicación de 10 * 3: ${10 * 3}`);
console.log(`La división de 10 / 3: ${10 / 3}`);
console.log(`10 % 3: ${10 % 3}`);


const ex01 = `¿El número 10 es mayor que el número 5? ${10 > 5}`;
const ex02 = `¿El número 10 es mayor que el número 5? ${10 < 5}`;
const ex03 = `¿El número 1 es igual al número 2? ${1 === 2}`;
const ex04 = `¿El texto 1 es igual al texto 2? ${'1' === '2'}`;
const ex05 = `¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y}`;
const ex06 = `AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4}`;
const ex07 = `OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4}`;
const ex08 = `La suma de 10 + 3: ${10 + 3}`;
const ex09 = `La resta de 10 - 7: ${10 - 7}`;
const ex10 = `La multiplicación de 10 * 3: ${10 * 3}`;
const ex11 = `La división de 10 / 3: ${10 / 3}`;
const ex12 = `10 % 3: ${10 % 3}`;

const printArr = [ex01, ex02, ex03, ex04, ex05, ex06, ex07, ex08, ex09, ex10, ex11, ex12];

const  runBtn = document.querySelector('.run-code-btn');
const displayTerminal = document.querySelector('.display-terminal');

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

runBtn.addEventListener('click', async (e) => {

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />`;
  await delay(420);

  displayTerminal.innerHTML =
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />`;
  await delay(420);
  
  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />` +
    `>OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />` +
    `>OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4} <br />` +
    `>La suma de 10 + 3: ${10 + 3} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />` +
    `>OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4} <br />` +
    `>La suma de 10 + 3: ${10 + 3} <br />` + 
    `>La resta de 10 - 7: ${10 - 7} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />` +
    `>OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4} <br />` +
    `>La suma de 10 + 3: ${10 + 3} <br />` + 
    `>La resta de 10 - 7: ${10 - 7} <br />`+ 
    `>La multiplicación de 10 * 3: ${10 * 3} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />` +
    `>OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4} <br />` +
    `>La suma de 10 + 3: ${10 + 3} <br />` + 
    `>La resta de 10 - 7: ${10 - 7} <br />`+ 
    `>La multiplicación de 10 * 3: ${10 * 3} <br />` +
    `>La división de 10 / 3: ${10 / 3} <br />`;
  await delay(420);

  displayTerminal.innerHTML = 
    `>¿El número 10 es mayor que el número 5? ${10 > 5} <br />` + 
    `>¿El número 10 es mayor que el número 5? ${10 < 5} <br />` +
    `>¿El número 1 es igual al número 2? ${1 === 2} <br />` + 
    `>¿El texto 1 es igual al texto 2? ${'1' === '2'} <br />`+ 
    `>¿Los objectos 'const x = {}' y const y = {}' son iguales? ${x === y} <br />` +
    `>AND lógico ('4' === 4 && '4' == 4): ${'4' === 4 && '4' == 4} <br />` +
    `>OR lógico ('4' === 4 || '4' == 4): ${'4' === 4 || '4' == 4} <br />` +
    `>La suma de 10 + 3: ${10 + 3} <br />` + 
    `>La resta de 10 - 7: ${10 - 7} <br />`+ 
    `>La multiplicación de 10 * 3: ${10 * 3} <br />` +
    `>La división de 10 / 3: ${10 / 3} <br />` +
    `>10 % 3: ${10 % 3} <br />`;
});

//export default delay;
