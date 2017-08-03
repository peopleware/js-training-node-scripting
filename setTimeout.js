#!/usr/bin/env node

function callback() {
  console.log("tok");
}

console.log("tik");
setTimeout(callback, 5000 /* ms */);

console.log("tak");
setTimeout(
  () => {
    console.log("tek");
  },
  5000 // ms
);

