#!/usr/bin/env node

let variable = undefined;
console.log("variable:", variable);
console.log("typeof variable:", typeof variable);
console.assert(typeof variable === "undefined");

let otherVariable;
console.assert(variable === otherVariable);
console.assert(otherVariable === undefined);
console.log("otherVariable:", variable);
console.log("typeof otherVariable:", typeof variable);
