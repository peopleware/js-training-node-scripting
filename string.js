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

console.log("\"");
console.log("\\");
console.log("A text\non 2 lines");

console.log("la".repeat(50));
console.log("index of la:", "lilolalulely".indexOf("la"));
console.log("index of ma:", "lilolalulely".indexOf("ma"));

let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
console.log(longString);
