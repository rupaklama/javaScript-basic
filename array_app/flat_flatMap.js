'use strict';

// flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

// flat() or flat(depth) - ES2019
// depth Optional - The depth level specifying how deep a nested array structure should be flattened.
// Defaults to 1

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2)); // expected output: [0, 1, 2, [3, 4]]

const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr3.flat());

const arr4 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr4.flat(2)); // going 2 levels deep

// NOTE: When using flat() with MAP method, another method - flatMap() got introduced
// at the same time which combines MAP & FLAT method into ONE method to boost performance
// flatMap() - same as map method
// flatMap() ONLY GOES TO ONE LEVEL DEEP
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);
