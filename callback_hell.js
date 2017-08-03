#!/usr/bin/env node

const delay = 1000; // ms

console.log("tik");
setTimeout(
  function() {
    console.log("tok");
    setTimeout(
      function() {
        console.log("tak");
        setTimeout(
          function() {
            console.log("tek");
            setTimeout(
              function() {
                console.log("tuk");
                setTimeout(
                  function() {
                    console.log("tyk");
                  },
                  delay /* ms */
                );
              },
              delay /* ms */
            );
          },
          delay /* ms */
        );
      },
      delay /* ms */
    );
  },
  delay /* ms */
);
