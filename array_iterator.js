#!/usr/bin/env node

const anArray = ["zero-th element", 0, 1, true, {}, "a string", null, undefined, , , 52353.35];

const filtered = anArray.filter(e => typeof e === "number");
console.log("filtered", filtered);
const mapped = filtered.map((n, i) => n * i);
console.log("mapped", mapped);
const mapped2 = mapped.map((n, i, arr) => i <= 0 ? n : n + arr[i - 1]);
console.log("mapped2", mapped2);
const reduced = mapped2.reduce(
  function(acc, e) {
    const newAcc = acc - e;
    return newAcc
  },
  1
);
console.log("reduced: %d (%s)", reduced, typeof reduced);

const reducedRight = mapped2.reduceRight(
  function(acc, e) {
    const newAcc = acc - e;
    return newAcc
  },
  1
);
console.log("reducedRight: %d (%s)", reducedRight, typeof reducedRight);

console.log(
  "alTogetherNow",
  anArray
    .filter(e => typeof e === "number")
    .map((n, i) => n * i)
    .map((n, i, arr) => i <= 0 ? n : n + arr[i - 1])
    .reduce((acc, e) => acc - e, 1)
);

console.log("forEach");
anArray.forEach((e, i) => {
  console.log("[%d]: %s", i, e);
});

console.log("every", anArray.every(e => typeof e === "number"));
console.log("some", anArray.some(e => typeof e === "number"));

(function() {
  console.log(arguments[0]);
  console.assert(typeof arguments === "object");
  console.assert(!(arguments instanceof Array));
  console.log(
    Array.prototype.filter.call(
      arguments,
      arg => typeof arg === "number")
    .reduce((acc, n) => acc + n, 0));
})("0th argument", 0, 1, false, null, undefined);
