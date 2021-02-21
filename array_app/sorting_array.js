'use strict';

// sort() method sorts the items of an array
// By default, the sort() method sorts the values as strings in alphabetical and ascending order
// Note: This method changes the original array

// Strings
const owners = ['Rupak', 'Indira', 'Sajina', 'Deepak'];
console.log(owners.sort()); // ["Deepak", "Indira", "Rupak", "Sajina"]

// Numbers
// However, if numbers are sorted as strings, the sort() method will produce an incorrect result when sorting numbers.
// The reason is sort() does the sorting based on STRINGS, first converts everything to string & does sorting
// You can fix this by providing a "compare function"

// array.sort(compareFunction)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// with callback COMPARE function
// two args - a is current value & b is next value
// let's think of a & b as simply being two consecutive numbers in an array, doesn't matter which ones

// ascending order
// [400, 450] = [a, b]
// if a > b (SWITCH ORDER) return 1
// if a < b (KEEP ORDER) return -1

const ascending = movements.sort((a, b) => {
  // return number here doesn't matter as long it's greater than 0
  // NOTE:  A - B (Greater Number - Smaller Number ) is always POSITIVE, so return positive 1
  if (a > b) return 1; // switch order

  // NOTE:  B - A (Smaller Number - Greater Number) is always POSITIVE, so return negative -1
  // if (b > a) return -1; // keep order
  if (a < b) return -1; // same thing as above - keep order
});
console.log(ascending);

// same as above - ascending
console.log(movements.sort((a, b) => a - b));
// a - b: if a is greater than b we know its a positive number, return positive number
// if a is less than b, (a - b) this operation is always be a negative number

// descending order
const descending = movements.sort((a, b) => {
  if (a > b) return -1; // switch order

  if (a < b) return 1; // keep order
});
console.log(descending);

// same as above - descending
console.log(movements.sort((a, b) => b - a));

// NOTE: THIS ALSO WORKS FOR STRINGS but not with mix - strings & numbers
