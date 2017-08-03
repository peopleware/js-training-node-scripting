#!/usr/bin/env node

let variable = true;
console.log("variable:", variable);
console.log("typeof variable:", typeof variable);
console.assert(typeof variable === "boolean");

variable = false;
console.log("variable:", variable);
console.log("typeof variable:", typeof variable);
console.assert(typeof variable === "boolean");

const yes = true;
const no = false;
console.log("!yes:", !yes);
console.log("!!yes:", !!yes);
console.log("!no:", !no);
console.log("!!no:", !!no);
console.log("yes && no:", yes && no);
console.log("yes || no:", yes || no);
console.log("yes ? \"it rains\" : \"it pours\":", yes ? "it rains" : "it pours");
