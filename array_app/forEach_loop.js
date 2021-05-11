'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// starting with forOf loop to compare
// for (const movement of movements) {
// NOTE: to access Counter Variable/Indexes we have to do this by calling array method - entries
for (const [i, movement] of movements.entries()) {
  // NOTE - parameters ORDER matters
  // array destructuring
  if (movement > 0) {
    console.log(`Entry ${i + 1}: You deposited ${movement}`); // + 1, start at 1
  } else {
    // abs() method returns the absolute value of a number to remove -
    console.log(`Entry ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------forEach---------');
// forEach - forEach() method calls a function once for each element in an array, in order
// Note: the function is not executed for array elements without values

// Same as above with an EASIER way with CLEANER syntax & really EASY to access current INDEX
// forEach is a Higher Order Function with callback function

// forEach accepts between one and three arguments, parameters ORDER matters
// (currentValue, index, array)
movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`Entry ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Entry ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// NOTE: YOU CANNOT BREAK OUT OF forEach loop
// so the 'continue' & 'break' statement DO NOT WORK in forEach loop at all

// Map is a data structure we can use to map values to keys.
// Just like in Object, data is store in key/value pairs
// Difference between Object & Map is in Map keys can have ANY TYPES
// In Object keys are always Strings, in Map we can have any Types - object, arrays...
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Using forEach loop can be use with MAP data structure
currencies.forEach((value, key) => {
  console.log(`${key}: ${value}`); // USD: United States dollar
});

// forEach loop can be use with SET data structure
// SETS are collection of unique values - no duplicates
// pass in iterable - array
const currenciesUnique = new Set(['USD', 'GBP', 'RS', 'EURO', 'USD']);
console.log(currenciesUnique); // {"USD", "GBP", "RS", "EURO"}
currenciesUnique.forEach((value, _) => {
  // _ is throw away variable as a place holder for key/index, variable that is NOT NEEDED since SET does not have keys/indexes
  console.log(`${value}: ${value}`); // USD: USD
  // On console log, key is exactly the same as value because SET doesn't have keys & indexes either
});
