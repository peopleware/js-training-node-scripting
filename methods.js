#!/usr/bin/env node

const person = {
  firstName: "Jane",
  lastName:  "Doe",
  ηλικία:    42,
  female:    true,
  metrics:   {
    mass:     64,
    shoeSize: 38
  },
  isMale: function() {
    return !this.female;
  },
  utcYearOfBirth: function() {
    const today = new Date();
    const currentYear = today.getUTCFullYear();
    return currentYear - this.ηλικία;
  },
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  setNames: function(names) {
    let split = names.split(" ");
    split = split.map(name => name.trim());
    this.firstName = split[0];
    this.lastName = split[1];
  }
};

console.log(person);
console.log("%s", person);
console.log("%j", person);
console.log(Object.keys(person));

console.log(person.isMale());
console.log(person.utcYearOfBirth());
console.log(person.getFullName());

person.setNames("John Deer");
console.log("%j", person);

function addToηλικία(additionalAge) {
  this.ηλικία += additionalAge;
}
person.age = addToηλικία;

person.age(35);
console.log("%j", person);

person.isMale = function() {
  return Math.PI;
};
console.log(person.isMale());

console.log(Math.pow(2, 3));
Math.pow = function(x, y) {
  return x / y;
};
console.log(Math.pow(2, 3));

const originalLog = console.log;
console.log = function() {
  originalLog("You want me to say:", ...arguments);
};
console.log(Math.pow(2, 3));

person.toString = function() {
  return this.firstName + " " + this.lastName + ", aged " + this.ηλικία + " years";
};
console.log(Object.keys(person));
console.log(person);
console.log("" + person);
console.log("%s", person);
originalLog("%s", person);
originalLog(person.toString());

person.toJSON = function() {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    age: this.ηλικία
  };
};
console.log(Object.keys(person));
originalLog("%j", person);
