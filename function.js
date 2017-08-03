#!/usr/bin/env node

function add5(arg) {
  return arg + 5;
}

console.log("add5(4)", add5(4));
console.assert(typeof add5 === "function");
console.log(add5);
console.log("" + add5);
console.assert(add5 instanceof Object);
console.assert(add5 instanceof Function);
console.log("add5.constructor: " + add5.constructor);

let 모듈러스7 = function(যুক্তি) {
  return যুক্তি % 7;
};

console.log("모듈러스7(34)", 모듈러스7(34));
console.assert(typeof 모듈러스7 === "function");
console.log(모듈러스7);
console.log("" + 모듈러스7);
console.assert(모듈러스7 instanceof Object);
console.assert(모듈러스7 instanceof Function);
console.log("모듈러스7.constructor: " + 모듈러스7.constructor);

console.assert(add5.constructor === 모듈러스7.constructor);

let aVariable = 5;

function changeAVariable(newValue) {
  aVariable = newValue;
}

console.log("before: ", aVariable);
changeAVariable(623767.53252);
console.log("after: ", aVariable);

let changeReturn = changeAVariable("jhkgsk");
console.log("after 2: ", aVariable);
console.log("changeReturn", changeReturn);
console.assert(typeof changeReturn === "undefined");

function holyShit() {
  return
  5;
}

let holyShitReturn = holyShit();
console.log("holyShitReturn", holyShitReturn);
console.assert(typeof holyShitReturn === "undefined");

function isAFunction(f) {
  console.assert(typeof f === "function");
  console.assert(f instanceof Object);
  console.assert(f instanceof Function);
  console.assert(f.constructor === add5.constructor);
}

isAFunction(Object);
isAFunction(console.constructor);
isAFunction(Math.constructor);
isAFunction(Boolean);
isAFunction(Number);
isAFunction(String);
isAFunction(Symbol);

console.assert(typeof Math !== "function");
console.assert(typeof Math === "object");
console.assert(Math instanceof Object);
console.assert(!(Math instanceof Function));
console.assert(Math.constructor !== add5.constructor);
console.assert(Math.constructor === Object);

console.log(add5("This is the number "));

function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibonacci(12)", fibonacci(12));

let fibonacci2 = function(n) {
  switch (n) {
    case 0:
      return n;
    case 1:
      return n;
    default:
      return fibonacci2(n - 1) + fibonacci2(n - 2);
  }
};

console.log("fibonacci2(12)", fibonacci2(12));

let fibonacci4 = function fibonnaci3(n) {
  let result = n;
  let localN = n;
  do {
    localN--;
    result += localN;
  } while (0 < localN);
  return result;
};

console.log("fibonacci34(12)", fibonacci2(12));
