#!/usr/bin/env node

const add5 = arg => arg + 5;

console.log("add5(4)", add5(4));
console.assert(typeof add5 === "function");
console.log(add5);
console.log("" + add5);
console.assert(add5 instanceof Object);
console.assert(add5 instanceof Function);
console.log("add5.constructor: " + add5.constructor);

let 모듈러스7 = (যুক্তি) => যুক্তি % 7;

console.log("모듈러스7(34)", 모듈러스7(34));
console.assert(typeof 모듈러스7 === "function");
console.log(모듈러스7);
console.log("" + 모듈러스7);
console.assert(모듈러스7 instanceof Object);
console.assert(모듈러스7 instanceof Function);
console.log("모듈러스7.constructor: " + 모듈러스7.constructor);

let quotient = (numerator, denominator) => numerator / denominator;
console.log("quotient", quotient(4, -35));

const c = 299792458;
let force = (acceleration, energy) => {
  const mass = energy / Math.pow(c, 2);
  return mass * acceleration;
};
console.log("force: ", force(34, 326262));

let aVariable = 5;

모듈러스7 = newValue => {
  aVariable = newValue;
};

console.log("before: ", aVariable);
모듈러스7(623767.53252);
console.log("after: ", aVariable);

let changeReturn = 모듈러스7("jhkgsk");
console.log("after 2: ", aVariable);
console.log("changeReturn", changeReturn);
console.assert(typeof changeReturn === "undefined");

const holyShit = () => {
  return
  5;
};

let holyShitReturn = holyShit();
console.log("holyShitReturn", holyShitReturn);
console.assert(typeof holyShitReturn === "undefined");
