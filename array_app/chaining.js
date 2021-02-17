'use strict';

// NOTE- CHAINING multiple methods together

// converting from EURO to USD & finally, add them all up
const entries = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// filter positive
const totalDepositsUSD = entries
  .filter(entry => entry > 0)
  .map((entry, i, arr) => {
    // checking out values in a new array return from filter method
    console.log(arr);
    return entry * euroToUSD;
  })
  .reduce((acc, entry) => acc + entry, 0);

console.log(totalDepositsUSD);

// NOTE: we SHOULD NOT OVER USE CHAINING.
// Chaining together lots of Methods can cause 'performance issues' if we have really HUGE ARRAY
// The solution would be to create individuals function for each task.

// BAD PRACTICE using SPLICE OR REVERSE methods on chaining when mutating STATE
