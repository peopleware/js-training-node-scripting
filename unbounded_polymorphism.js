#!/usr/bin/env node

let aVariable = "This is a value in a variable";
console.log(aVariable);
aVariable = 42;
console.log(aVariable);
aVariable = true;
console.log(aVariable);
aVariable = null;
console.log(aVariable);
aVariable = undefined;
console.log(aVariable);
aVariable = {};
console.log(aVariable);
aVariable = new Object();
console.log(aVariable);
aVariable = function() {return "zaza";};
console.log(aVariable);
aVariable = lolo => lolo;
console.log(aVariable);

let anObject = {
  α: "alpha",
  a: 42,
  b: true,
  c: null,
  d: undefined,
  e: {},
  f: function() {return "zaza";},
  g: lolo => lolo
};
console.log(JSON.stringify(anObject)); // no functions
console.log(anObject);

anObject.α = {description: "this is an object"};
anObject.a = function() {return "zozo";};
anObject.b = null;
anObject.c = {}
anObject.e = -Math.PI;
anObject.f = "A string";
console.log(JSON.stringify(anObject)); // no functions
console.log(anObject);

let logger = anArgument => {
  console.log(anArgument);
};

logger("This is a value in a variable");
logger(42);
logger(true);
logger(null);
logger(undefined);
logger({});
logger(function() {return "zaza"});
logger(lolo => lolo);

logger("This is a value in a variable", 42, true, null, undefined, {}, function() {return "zaza"}, lolo => lolo);
logger();
