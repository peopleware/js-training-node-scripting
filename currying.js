#!/usr/bin/env node

function callback(message) {
  console.log(message);
}

console.log("tik");
setTimeout(
  function() {
    callback("tok");
  },
  5000 /* ms */
);

console.log("tak");
setTimeout(
  function() {
    callback("tek");
  },
  5000 /* ms */
);

