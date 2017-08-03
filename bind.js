#!/usr/bin/env node

function callback(message) {
  console.log(message);
}

console.log("tik");
setTimeout(callback.bind(undefined, "tok"), 5000 /* ms */);

console.log("tak");
setTimeout(callback.bind(undefined, "tek"), 5000 /* ms */);

