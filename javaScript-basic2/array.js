// for debugging - displays errors in the console
'use strict';

// NOTE: ARRAY
// another way to create array
let years = new Array(1985, 1987, 1995);
let count = years.length;
console.log(count);

// normal array
let names = ['Rupak', 'Indira', 'Miguel'];

// access elements in array with indexes
console.log(names[0]);

// mutate data in an array
names[2] = 'Steve';

// add data at the end of array
names[names.length] = 'Miguel';
console.log(names);

// different data types
var rupak = ['Dhoj', 'Lama', 1985, false];

// adding element at the end of array
rupak.push('blue');

// adding element at the beginning of array
rupak.unshift('Mr.');

// remove first element
rupak.shift();

// remove element from the end
rupak.pop();
rupak.pop();

console.log(rupak);

// indexOf - to find index position
// to also find out if the element is in the array or not
// returns -1 if the element is not in array by default
console.log(rupak.indexOf('Lama'));

// Array methods since an array is an object
const arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// slice is to get portion of original array without mutating original array
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1, -1)); // ['b', 'c', 'd']

// simply to make a shallow copy of an array like with Spread Operator
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// SPLICE
// to remove an element which does mutate original array
// console.log(arr.splice(-1)); // ['e'] removing last element
console.log(arr.splice(1, 2)); // second arg 2 is how many items to delete - ['b', 'c']
console.log(arr); // ['a', 'd', 'e'] - original array

// REVERSE - mutates original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']

// CONCAT - to join array like with Spread Operator to create a new array
const letters = arr.concat(arr2);
console.log(letters);

// JOIN - a new string, based on separator string
console.log(letters.join(' - '));

// At method
// Use the at() method to return an element of an array by an index.
// The at() method with a negative index will return an element from the end of the array.
const arr3 = [23, 11, 64];
console.log(arr3[0]); // 23
console.log(arr3.at(0)); // 23 same as above but new way

// common use case
console.log(arr3[arr3.length - 1]); // 64
console.log(arr3.slice(-1)[0]); // 64
console.log(arr3.at(-1)); // 64 same as above but new way

// at() method also works on String
console.log('rupak'.at(0)); // r
console.log('rupak'.at(-1)); // k

