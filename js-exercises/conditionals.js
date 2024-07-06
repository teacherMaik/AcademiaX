// Startic variables for challenges, changed to inputs for portfolio

/* const age = 42;
const action = 'crear';
const num = 21; */

const displayTerminal = document.querySelector('.display-terminal');
const runBtn = document.querySelector('.run-code-btn');


async function ageIf(age) {
  if (age >= 18) {

    console.log(`Tienes ${age} años y eres mayor de edad`);
    const p = document.createElement('p');
    p.textContent = `>Tienes ${age} años y eres mayor de edad`;
    displayTerminal.appendChild(p);
  } else {

    console.log(`Tienes ${age} años y eres menor de edad`);
    const p = document.createElement('p');
    p.textContent = `>Tienes ${age} años y eres menor de edad`;
    displayTerminal.appendChild(p);
  }
}

async function actionSwitch(action) {

  const p = document.createElement('p');
  p.textContent = `>Vamos a ${action}`;
  displayTerminal.appendChild(p);

  /* switch (action) {
    case 'crear':
      console.log(`La acción es ${action}`);
      break;

    case 'colocar':
      console.log(`La acción es ${action}`);
      break;

    case 'actualizar':
      console.log(`La acción es ${action}`);
      break;

    case 'borrar':
      console.log(`La acción es ${action}`);
      break;
  } */
}

async function numTern(num) {
  
  const p = document.createElement('p');
  num % 2 == 0 ? p.textContent = `>${num} es un número par` : p.textContent = `>${num} es un número impar`;

  displayTerminal.appendChild(p);
}

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printAll() {

  const ageInput = document.getElementById('age');
  const actionInput = document.getElementById('action');
  const numInput = document.getElementById('number');

  await ageIf(ageInput.value);
  await delay(420);
  await actionSwitch(actionInput.value);
  await delay(420);
  await numTern(numInput.value);
}


runBtn.addEventListener('click', async (e) => {

  displayTerminal.innerHTML = '';
  await delay(210);
  printAll();
})

window.addEventListener('keypress', async (e) => {

  if (e.target.key === 'Enter') {

    displayTerminal.innerHTML = '';
    await delay(210);
    printAll();
  }
  
});

//export default printAll;