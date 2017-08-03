#!/usr/bin/env node

function add5(arg) {
  return arg + 5;
}

console.log(add5.name);
console.log(add5.length);

add5.myInterestingProperty = "I thought you would like to know";
console.log(add5.myInterestingProperty);
