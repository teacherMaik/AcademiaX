// Make and return copies of objects

let user = {
  name: 'Maik',
  age: 42,
  work: 'education',
}

function changeUser(user) {

  let userCopy = JSON.parse(JSON.stringify(user));
  userCopy.work = 'Programming';
  return userCopy;
}

let userCopy = changeUser(user);
console.log(`New user data is ${JSON.stringify(userCopy)}`);
console.log(`Old user data is ${JSON.stringify(user)}`);

// Create Method from object

let dog = {
  name: 'Ron',
  bark: function() {

    console.log('Ron ladra Woof!');
  }
}

dog.bark();

// Callbacks and CALLBACK HELL?
function myFunction(callback, a) {

  callback(a + 42);
}

myFunction(console.log, 200);

function evalReturn(onSuccess, onError) {

  let success = false;
  if (success) {
    onSuccess('It was a success');
  } else if (!success) {
    onError('Throw Error');
  }
}

evalReturn(console.log, console.log);

let arrNumms = [2, 3, 6, 7, 14, 21, 42];

// When only one arg, don't need () around arg nor {} around function
arrNumms.forEach(el => console.log(el));

// 'el' for "element of array" and 'i' as native arg referring to array index. Because more than 1 arg, useing () {} respectively
arrNumms.forEach((el, i) => console.log(`Number ${el} at position ${i} of array`));

// Reto Form Validation only js
let formName = 'mike';
let formEmail = 'm@m.com';
let formText = 'Hello World';

const submitForm = (formName, formEmail, formText) => {

  if (formName && formEmail &&  formText) {

    console.log('Formulario enviado con éxito');
  }
}

submitForm(formName, formEmail, formText);