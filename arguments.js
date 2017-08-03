#!/usr/bin/env node

let logger = anArgument => {
  console.log("good");
  console.log(anArgument);
};

logger("This is a value in a variable", 42, true, null, undefined, {}, function() {return "zaza"}, lolo => lolo);

function betterLogger() {
  console.log("better");
  Array.prototype.forEach.call(
    arguments,
    arg => {
      console.log(arg);
    }
  );
}

betterLogger("This is a value in a variable", 42, true, null, undefined, {}, function() {return "zaza"}, lolo => lolo);
