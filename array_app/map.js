'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// Map is to update each item of an array to return in a New Array
const entriesUSD = movements.map(entry => entry * euroToUSD);

console.log(entriesUSD);

// Map method also have access to CURRENT INDEX & whole Array
const entries = movements.map((entry, i) => {
  if (entry > 0) {
    return `Entry ${i + 1}: You deposited ${entry}`; // + 1, start at 1
  } else {
    // abs() method returns the absolute value of a number to remove -
    return `Entry ${i + 1}: You withdrew ${Math.abs(entry)}`;
  }
});

console.log(entries);
