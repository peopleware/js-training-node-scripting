#!/usr/bin/env node

const now = new Date();
console.log(now);
console.log(now.getTime());
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());
console.log(now.toUTCString());
console.log("%j", now);
console.log(now.getTimezoneOffset());

let someTime = new Date(2017, 8, 4, 11, 14, 23, 232.52536353535);
console.log(now.toISOString());
console.log(now.getTime());
someTime = new Date(2017, 8, 4, 11, 14, 23, 232.5);
console.log(now.toISOString());
console.log(now.getTime());
someTime = new Date(2017, 8, 4, 11, 14, 23, 232);
console.log(now.toISOString());
console.log(now.getTime());
