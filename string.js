#!/usr/bin/env node

let variable = "This is a string"; // Our style decision
console.log("variable:", variable);
variable = 'This is a string'; // Alternative. Do not use.
console.log("variable:", variable);
console.log("typeof variable:", typeof variable);
console.assert(typeof variable === "string");

console.log("This is " + "a" + " concatenated string");
console.log("This is " + "a" + " concatenated string");

console.log("é — 学习 — ∃ — 💹 — 😱");
