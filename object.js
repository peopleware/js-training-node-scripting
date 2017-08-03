#!/usr/bin/env node

const objectLiteral = {};
console.assert(typeof objectLiteral === "object");
console.assert(objectLiteral instanceof Object);
console.log(objectLiteral);

const objectConstructed = new Object();
console.assert(typeof objectConstructed === "object");
console.assert(objectConstructed instanceof Object);
console.log(objectConstructed);



console.assert(typeof console === "object");
console.log("console", console);
console.assert(console instanceof Object);
console.assert(console instanceof console.constructor);
console.assert(console.constructor !== Object);

console.assert(typeof Math === "object");
console.log("Math", Math);
console.assert(Math instanceof Object);
console.assert(Math instanceof Math.constructor);
console.assert(Math.constructor === Object); // noteworthy



console.assert(typeof Boolean !== "object");
console.log("Boolean: " + Boolean);
console.log(Boolean);

console.assert(typeof Number !== "object");
console.log("Number: " + Number);
console.log(Number);

console.assert(typeof String !== "object");
console.log("String: " + String);
console.log(String);

console.assert(typeof Symbol !== "object");
console.log("Symbol: " + Symbol);
console.log(Symbol);

console.assert(typeof Object !== "object");
console.log("Object: " + Object);
console.log(Object);
