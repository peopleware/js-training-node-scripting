#!/usr/bin/env node

function test() {

  console.log("test start i ALREADY EXISTS:", i);
  console.log("test start deep ALREADY EXISTS:", deep);

  for (var i = 0; i < 10; i++) {
    console.log("loop start i:", i);
    console.log("loop start deep:", i);
    if (i >= 100) {
      if (i < 50) {
        var deep = "lala";
      }
    }
    console.log("loop end i:", i);
    console.log("loop end deep:", deep);
  }

  console.log("test end i STILL EXISTS:", i);
  console.log("test end deep STILL EXISTS:", deep);

  return i; // 10
}

console.log("test result:", test());
// console.log("end i", i); CRASH
// console.log("end deep", deep); CRASH
