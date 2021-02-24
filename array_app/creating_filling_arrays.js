'use strict';

// How to programmatically Create & Fill Arrays - useful in certain situations

// regular way
console.log([1, 2, 3, 4, 5]);

// array constructor
console.log(new Array(1, 2, 3, 4, 5));

// Creating Array Programmatically without defining all the Elements Manually
// NOTE: This does not create an array with one element of 7
// It creates an NEW EMPTY ARRAY WITH 7 ELEMENTS
const x = new Array(7); // With one arg, it creates length of 7 elements
console.log(x); //  (7) [empty × 7]

// NOTE: There's ONE Array method we can call in EMPTY ARRAY which is FILL METHOD
// fill up entire array with all these values
// NOTE: It MUTATES an ORIGINAL ARRAY
// x.fill(1);
// console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]

// Fill method is similar to a Slice method
// Second arg 3 is the START INDEX to start filling until to the end
// unless we specify an END PARAMETER just in Slice method
// Third arg 5 which is a final index & not going to get included just like in slice method
x.fill(1, 3, 5);
console.log(x); // (7) [empty × 3, 1, 1, empty × 2]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6); // note: add & replace with 23 at index position 2 to 6
console.log(arr); // (7) [1, 2, 23, 23, 23, 23, 7]

// Array.from
// Calling 'from' method on the Array Constructor
// NOTE: Array.from() method creates a NEW Array from any object with a length property or an iterable object

// Array.from(object, mapFunction, thisValue) - An array-like or iterable object to convert to an array.

// first arg is 'Object' with length property of 7
// second arg is mapping function like callback function to return 1 in each iteration
// which will put 1 in each array's indexes
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // (7) [1, 1, 1, 1, 1, 1, 1]

// NOTE: Array.from is lot cleaner to use than Fill method above
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const z = Array.from({ length: 7 }, (_, index) => index + 1); // since not using arg - item
console.log(z); // [1, 2, 3, 4, 5, 6, 7]
