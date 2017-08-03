#!/usr/bin/env node

let variable = null;
console.log("variable:", variable);
console.log("typeof variable:", typeof variable);
console.assert(typeof variable === "object"); // NOTEWORTHY

const otherVariable = null;
console.assert(variable === otherVariable);
