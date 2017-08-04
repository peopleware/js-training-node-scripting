#!/usr/bin/env node

const anArray = ["zero-th element", null, 1, undefined, 8, , true, "no"];
console.log("base", anArray);

anArray.push("pushed");
console.log("after push", anArray);

const popped = anArray.pop();
console.log("after pop", anArray);
console.log("popped", popped);

anArray.unshift("unshifted");
console.log("unshifted", anArray);

const shifted = anArray.shift();
console.log("after shift", anArray);
console.log("shifted", shifted);

anArray.reverse();
console.log("after reverse", anArray);

// MUDO this example code does not give the expected output BUG
anArray.sort();
console.log("after sort", anArray);

anArray.sort((a, b) => {
  if (a === undefined) {
    return b === undefined ? 0 : -1;
  }
  else if (a === null) {
    return b === undefined
      ? +1
      : (b === null ? 0 : -1);
  }
  else if (typeof a === "boolean") {
    if (typeof b === "boolean") {
      return a === b
        ? 0
        : (a ? +1 : -1);
    }
    else {
      return -1;
    }
  }
  else if (typeof a === "number") {
    if (typeof b === "number") {
      return a < b
        ? -1
        : (a === b ? 0 : +1);
    }
    else {
      return -1;
    }
  }
  else {
    console.assert(typeof a === "string");
    if (typeof b === "string") {
      return a < b
        ? -1
        : (a === b ? 0 : +1);
    }
    else {
      return +1;
    }
  }
});
console.log("after good sort", anArray);

anArray.splice(1, 2, "new", "newer", "newest");
console.log("after splice", anArray);
