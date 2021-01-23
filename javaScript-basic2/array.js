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
