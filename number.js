#!/usr/bin/env node

let variable = 4;
console.assert(typeof variable === "number");
console.log("4: " + variable + " ## " + typeof variable);

variable = 1.1415;
console.log(variable);
console.assert(typeof variable === "number");
console.log("1.1415: " + variable + " ## " + typeof variable);

variable = 2 / 7;
console.assert(typeof variable === "number");
console.log("2 / 7: " + variable + " ## " + typeof variable);

variable = 2 % 7;
console.assert(typeof variable === "number");
console.log("2 % 7: " + variable + " ## " + typeof variable);

variable = Math.PI;
console.assert(typeof variable === "number");
console.log("Math.PI: " + variable + " ## " + typeof variable);

variable = Math.E;
console.assert(typeof variable === "number");
console.log("Math.E: " + variable + " ## " + typeof variable);

variable = Number.EPSILON;
console.assert(typeof variable === "number");
console.log("Number.EPSILON: " + variable + " ## " + typeof variable);

variable = Number.MAX_SAFE_INTEGER;
console.assert(typeof variable === "number");
console.log("Number.MAX_SAFE_INTEGER: " + variable + " ## " + typeof variable);

variable = Number.MAX_VALUE;
console.assert(typeof variable === "number");
console.log("Number.MAX_VALUE: " + variable + " ## " + typeof variable);

variable = Number.MIN_SAFE_INTEGER;
console.assert(typeof variable === "number");
console.log("Number.MIN_SAFE_INTEGER: " + variable + " ## " + typeof variable);

variable = Number.MIN_VALUE;
console.assert(typeof variable === "number");
console.log("Number.MIN_VALUE: " + variable + " ## " + typeof variable);

variable = Number.POSITIVE_INFINITY;
console.assert(typeof variable === "number");
console.log("Number.POSITIVE_INFINITY: " + variable + " ## " + typeof variable);

variable = Number.NEGATIVE_INFINITY;
console.assert(typeof variable === "number");
console.log("Number.NEGATIVE_INFINITY: " + variable + " ## " + typeof variable);

variable = Number.NaN;
console.assert(typeof variable === "number");
console.log("Number.NaN: " + variable + " ## " + typeof variable);

console.assert(Math.PI === Math.PI);
console.assert(Number.POSITIVE_INFINITY === Number.POSITIVE_INFINITY);
console.assert(Number.POSITIVE_INFINITY === 7 / 0);
variable = 7 / 0;
console.log("7 / 0: " + variable + " ## " + typeof variable);
variable = -7 / 0;
console.log("-7 / 0: " + variable + " ## " + typeof variable);
console.assert(Number.NaN !== Number.NaN);
console.assert(Number.NaN !== 0 / 0);
console.assert(Number.isNaN(Number.NaN));
console.assert(Number.isNaN(0 / 0));
variable = 0 / 0;
console.log("0 / 0: " + variable + " ## " + typeof variable);
