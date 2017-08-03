#!/usr/bin/env node

function callback(message) {
  return function() {
    console.log(message);
  };
}

console.log("tik");
setTimeout(callback("tok"),5000 /* ms */);

console.log("tak");
setTimeout(callback("tek"), 5000 /* ms */);

