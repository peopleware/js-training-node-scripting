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
aVariable = function zaza() {return "zaza"};
console.log(aVariable);
aVariable = lolo => lolo;
console.log(aVariable);

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
