#!/usr/bin/env node

console.assert(true);
console.assert(!false);

console.assert(-1);
console.assert(!0);
console.assert(+1);

console.assert("This is a string");
console.assert(!"");

console.assert({});
console.assert(!null);

console.assert(!undefined);

function show(a) {
  console.log("" + a + ":", !!a);
}

[true, false, -1, 0, 1, "This is a string", "", {}, null, undefined,].forEach(show);

const person = {
  firstName: "John",
  setFirstName: function(name) {
    this.firstName = name || "Default";
  }
};

person.setFirstName("Joe");
console.log(person.firstName);

person.setFirstName("");
console.log(person.firstName);

person.setFirstName("Jef");
console.log(person.firstName);

person.setFirstName();
console.log(person.firstName);

person.setFirstName("Jack");
console.log(person.firstName);

person.setFirstName(4);
console.log(person.firstName);

person.setFirstName("Jeremiah");
console.log(person.firstName);

person.setFirstName(0);
console.log(person.firstName);
