#!/usr/bin/env node

const anArray = ["zero-th element", 0, 1, true, {}, "a string", null, undefined, , , 52353.35];
console.assert(typeof anArray === "object");
console.assert(anArray instanceof Array);

console.log("length", anArray.length);
console.log("array", anArray);
console.log("array to string " + anArray);
console.log("array json %j", anArray);

console.log("[0]", anArray[0]);
console.log("[1]", anArray[1]);
anArray[1] = "another 1th element";
console.log("[1]", anArray[1]);

anArray.remember = "I am an object";
console.log("remember:", anArray.remember);
console.log("remember:", anArray["remember"]);
anArray["4"] = "\"4\" ~ 4";
console.log("[\"4\"]:", anArray["4"]);

console.log("for");
for (let i = 0; i < anArray.length; i++) {
  console.log("[%d]: %s", i, anArray[i]);
}

console.log("reverse for");
for (let i = anArray.length - 1; 0 <= i; i--) {
  console.log("[%d]: %s", i, anArray[i]);
}

console.log("for in anArray");
for (let i in anArray) {
  console.log("[%d]: %s", i, anArray[i]); // remember …
}

console.log("Math keys - own enumerable property names", Object.keys(Math));
console.log("Math own property names", Object.getOwnPropertyNames(Math));
const anObject = {
  firstName: "Jane",
  lastName:  "Doe",
  ηλικία:    42,
  female:    true,
  metrics:   {
    mass:     64,
    shoeSize: 38
  }
};
console.log("anObject keys - own enumerable property names", Object.keys(anObject));
console.log("anObject own property names", Object.getOwnPropertyNames(anObject));

console.log("for in anObject");
for (let p in anObject) {
  console.log("[%s]: %s", p, anObject[p]);
}

anArray[anArray.length] = "extend the array";
console.log("extended", anArray);

anArray[2 * anArray.length] = "big extend the array";
console.log("big extended", anArray);
console.log("big extended type", anArray.map(e => typeof e).join(", "));
console.log("big extended type for");
for (let i = 0; i < anArray.length; i++) {
  console.log("[%d]: %s", i, typeof anArray[i]);
}

(function() {
  console.log(arguments[0]);
  console.assert(typeof arguments === "object");
  console.assert(!(arguments instanceof Array));
})("0th argument", 0, 1, false, null, undefined);
