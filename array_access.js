#!/usr/bin/env node

const anArray = ["zero-th element", null, 1, undefined, 8, , true, "no"];
console.log("base", anArray);

console.log("concat", anArray.concat(["lala", "lolo"]));
console.log("base", anArray);

const copy = anArray.slice();
copy[1] = "first";
console.log("copy", copy);
console.log("base", anArray);

const sliced = anArray.slice(1, 4);
console.log("sliced", sliced);
console.log("base", anArray);

const aPath = "a/b/c/d/e/f.js";
console.log("split", aPath.split("/"));
console.log("split and joined", aPath.split("/").join("\\"));

console.log("index of e", aPath.indexOf("e"));
console.log("has q", 0 <= aPath.indexOf("q"));
console.log("does not have q", aPath.indexOf("q") < 0);
