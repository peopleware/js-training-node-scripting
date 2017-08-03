#!/usr/bin/env node

const person = {
  firstName: "Jane",
  lastName: "Doe",
  ηλικία: 42,
  female: true,
  metrics: {
    mass: 64,
    shoeSize: 38
  }
};
console.assert(typeof person === "object");
console.assert(person instanceof Object);
console.assert(person.constructor === Object);

console.log(
  person.firstName,
  person.lastName,
  person.ηλικία,
  person.female,
  person.metrics.mass,
  person.metrics.shoeSize
);
console.log(
  person["firstName"],
  person["lastName"],
  person["ηλικία"],
  person["female"],
  person["metrics"].mass,
  person["metrics"]["shoeSize"]
);
console.log(person);
console.log("" + person);

const json = JSON.stringify(person);
console.assert(typeof json === "string");
console.log(json);

const deserialized = JSON.parse(json);
console.assert(typeof deserialized === "object");
console.assert(deserialized instanceof Object);
console.assert(deserialized.constructor === Object);

console.assert(deserialized.firstName === person.firstName);
console.assert(deserialized.lastName === person.lastName);
console.assert(deserialized.ηλικία === person.ηλικία);
console.assert(deserialized.female === person.female);
console.assert(deserialized.metrics.mass === person.metrics.mass);
console.assert(deserialized.metrics.shoeSize === person.metrics.shoeSize);
console.assert(deserialized !== person);

console.log("keys:", Object.keys(person));
console.log("values:", Object.values(person));
// later
Object.keys(person).forEach(key => person[key] === deserialized[key]);

person.ηλικία = 78;
console.log("keys:", Object.keys(person));
console.log("values:", Object.values(person));

person.eyes = "blue";
console.log("keys:", Object.keys(person));
console.log("values:", Object.values(person));
console.log("person.eyes:", person.eyes);
console.log("deserialized.eyes:", deserialized.eyes);

delete person.firstName;
console.log("keys:", Object.keys(person));
console.log("values:", Object.values(person));
console.log("person.firstName", person.firstName);
console.log("deserialized.firstName:", deserialized.firstName);

const box = new Object();
console.assert(typeof box=== "object");
console.assert(box instanceof Object);
box.width = 72;
box.height = 345;
console.log(JSON.stringify(box));

console.name = "my little console";
console.log(console.name);
Math.c = 299792458;
console.log(Math["c"]);

let root = {
  left: {
    left: {
      left: 42,
      right: -45353
    },
    right: {
      left:  -4362,
      right: 4
    }
  },
  right: {
    left:  {
      left:  737,
      right: 62626
    },
    right: {
      left:  -300,
      right: -553
    }
  }
};

console.log("%j", root);

root.right.left = root;

console.log("%j", root);
