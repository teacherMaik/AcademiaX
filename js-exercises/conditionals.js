const age = 42;
const action = 'crear';
const num = 21;

if (age >= 18) {
  console.log(`Tienes ${age} años y eres mayor de edad`);
} else {
  console.log(`Tienes ${age} años y eres menor de edad`);
}

switch (action) {
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
}

num % 2 == 0 ? console.log(`${num} es un número par`) : console.log(`${num} es un número impar`);