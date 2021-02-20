'use strict';
// The some() method checks if ANY of the elements in an array pass a test (provided as a function).
// NOTE: Return Value:	A Boolean. Returns true if any of the elements in the array pass the test,
// otherwise it returns false

// The some() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value,
// some() returns 'true' (and does not check the remaining values) Otherwise it returns false

// Note: some() does not execute the function for array elements without values.

// Note: some() does not change the original array.

// currentValue	Required. The value of the current element
// index	Optional. The array index of the current element
// arr	Optional. The array object the current element belongs to

// thisValue	Optional. A value to be passed to the function to be used as its "this" value.
// If this parameter is empty, the value "undefined" will be passed as its "this" value

// array.some(function(currentValue, index, arr), thisValue)

const entries = [200, 450, -400, 3000, -650, -130, 70, 1300];

// to test if array includes a certain value
// NOTE: includes() does strict equality '==='
console.log(entries.includes(-130)); // true

// NOTE: some() does conditional testing - to find positive values here
const positive = entries.some(entry => entry > 0);
console.log(positive); // true

// NOTE: Every() method
// every() method checks if ALL elements in an array pass a test (provided as a function)
// Return Value:	A Boolean. Returns true if all the elements in the array pass the test, otherwise it returns false

// The every() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a false value,
// every() returns false (and does not check the remaining values)

// If no false occur, every() returns true
// Note: every() does not execute the function for array elements without values.

// Note: every() does not change the original array
// to test all the entries are greater than 0
console.log(entries.every(entry => entry > 0)); // false
