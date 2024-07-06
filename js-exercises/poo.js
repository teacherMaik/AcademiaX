let auto1 = {
  model: 'Tesla',
  year: '2018',
  color: 'red',
}

let auto2 = {
  model: 'Rivian',
  year: '2022',
  color: 'black',
}

let changeModel = {
  name: 'Change model name to uppercase',
  change: function(auto) {
    auto.model = auto.model.toUpperCase();  
  }
}

console.log(auto1);
changeModel.change(auto1);
console.log(auto1);

function NewCar(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

const auto3 = new NewCar('Peaugot', '2011', 'white');

console.log(auto3);

NewCar.prototype.info = function() {
  return this.model + ' - ' + this.year + ' - ' + this.color;
}

const auto4 = new NewCar('Nissan Micra', '1999', 'yellow');
const auto5 = new NewCar('Ford Fiesta', '2014', 'gray');

console.log(auto3.info() + ' - from info prototype method');
console.log(auto4.info() + ' - from info prototype method');
console.log(auto5.info() + ' - from info prototype method');

// Now with Classes
class NewAuto {

  constructor(brand, model, year, color) {

    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  info() {

    return this.brand + ' - ' + this.model + ' - ' + this.year + ' - ' + this.color;
  }
}

const auto6 = new NewAuto('Peugot', '3008', '2010', 'black');

console.log(auto6.info());

// Inheritance

/*
function Father(name, surName, age) {

  this.name = name;
  this.surName = surName;
  this.age = age;
}

Father.prototype.welcome = function() {

  return `Soy ${this.name} ${this.surName} y tengo ${this.age} años`;
}

function Son(name, surName, age) {
  Father.call(this, name, surName, age);
}

Son.prototype = Father.prototype;

const sonBennett = new Son('Lucca', fatherBennett.surName, 11);
*/

// Extend with classes

class Father {

  constructor(name, surName, age) {

    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  welcome() {
    return `Soy ${this.name} ${this.surName} y tengo ${this.age} años`;
  }
}

class Son extends Father {

  constructor(name, surName, age) {
    super(name, surName, age);
  }

  welcome() {
    return `Soy ${this.name} ${this.surName} y tengo ${this.age} años`;
  }
}

const fatherBennett = new Father('Michael', 'Bennett', 42)
const sonBennett = new Son('Lucca', fatherBennett.surName, '11');


console.log(fatherBennett.welcome());
console.log(sonBennett.welcome());

// Mod Challenge

class Vehicle {

  constructor(numWheels) {
    this.numWheels = numWheels
  }

  printInfo() {
    return `Este vehículo tiene ${this.numWheels} ruedas.`;
  }
}

class VehiclePassengers extends Vehicle {

  constructor(numWheels, numPassengers) {
    super(numWheels);
    this.numPassengers = numPassengers
  }

  printInfo() {
    return `Este vehículo tiene ${this.numWheels} ruebdas y puede transportar ${this.numPassengers}.`
  }
}

const fourWheels = new Vehicle(4);
const twoWheels = new Vehicle(2);

console.log(fourWheels);
console.log(fourWheels.printInfo());
console.log(twoWheels);
console.log(twoWheels.printInfo())

const sixPassengers = new VehiclePassengers(fourWheels.numWheels, 6);
const onePassenger = new VehiclePassengers(twoWheels.numWheels, 1);

console.log(sixPassengers);
console.log(sixPassengers.printInfo());
console.log(onePassenger);
console.log(onePassenger.printInfo());

// Para portafolio
const  runBtn = document.querySelector('.run-code-btn');
const displayTerminal = document.querySelector('.display-terminal');

const vehiclePassenger = [sixPassengers, onePassenger];

function delay(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printTerminal() {

 for (var i = 0; i < vehiclePassenger.length; i++) {

    const p = document.createElement('p');
    p.textContent = vehiclePassenger[i].printInfo();
    displayTerminal.appendChild(p);
    await delay(420);
  };
}

runBtn.addEventListener('click', async (e) => {

  displayTerminal.innerHTML = '';
  await delay(210);
  printTerminal();
})
