'use strict';

// sort() method sorts the items of an array
// By default, the sort() method sorts the values as strings in alphabetical and ascending order
// Note: This method changes the original array

// Strings
const owners = ['Rupak', 'Indira', 'Sajina', 'Deepak'];
console.log(owners.sort()); // ["Deepak", "Indira", "Rupak", "Sajina"]

// The localeCompare() method compares two strings in the current locale.
// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
// The current locale is based on the language settings of the browser.
const  data = ['t', 'A', 'a', 'B', 'b']
// strings in alphabetical and ascending order
data.sort((a, b) => a.localeCompare(b)); // ['a', 'A', 'b', 'B', 't']


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

// values in an array
// Here A is greater than B, so we have to return greater than 0 
// [450, -400] = [a, b]

// NOTE - if we return greater than 0, value 'b' is put before 'a' in the sorted output array
// if a > b (SWITCH ORDER) return 1

// NOTE - if we return less than 0, value 'a' is sorted before 'b'
// if a < b (KEEP ORDER) return -1

// ascending order 
// if return > 0 then B is before A - switch order
// if return < 0 then A is before B - keep order

// descending order
// opposite of ascending in above

const ascending = movements.sort((a, b) => {
  // return number here doesn't matter as long it's greater than 0
  // NOTE:  A - B (Greater Number - Smaller Number ) is always POSITIVE, so return positive 1
  if (a > b) return 1; // if we return greater than 0, switch order

  // NOTE:  B - A (Smaller Number - Greater Number) is always NEGATIVE, so return negative -1
  // if (b > a) return -1; // keep order
  if (a < b) return -1; // if we return less than 0, keep order
});
console.log(ascending);

// same as above - ascending
// a - b: if a is greater than b we know its a positive number, return positive number
console.log(movements.sort((a, b) => a - b));

// descending order - doing just opposite of ascending in above
const descending = movements.sort((a, b) => {
  // opposite of ascending above in the 'return' statement
  if (a > b) return -1; // keep order

  if (a < b) return 1; // switch order
});
console.log(descending);

// same as above - descending
// if a is less than b, (a - b) this operation is always be a negative number
console.log(movements.sort((a, b) => b - a));

// NOTE: THIS ALSO WORKS FOR STRINGS but not with mix - strings & numbers
