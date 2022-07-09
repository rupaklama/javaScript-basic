// for debugging - displays errors in the console
'use strict';

// to automate repetitive tasks using loop
// for loop
// i is the standard for 'counter' variable name in js
// counter initialization, condition & iteration-counter update
for (let i = 1; i <= 10; i += 2) {
  // for loop keeps running while condition is TRUE
  console.log(i); // print the counter
}

// normal array
const person = ['Rupak', 'Indira', 'Miguel'];

// without loop, we would do this
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// adding in empty array
// normal way types[0] = 'string'
const types = [];

for (let i = 0; i < person.length; i++) {
  // reading/printing all the values in array - names
  console.log(person[i], typeof person[i]);
  // using 'counter' variable here to retrieve all the elements of the array
  // instead of indexes like above

  // filling/adding typeof values in new empty array above loop
  // types[i] = typeof person[i];

  // same as above
  // we can also use push method to fill in array
  types.push(typeof person[i]);
}
console.log(types);
console.log('-------------------------');

// common operation
const birthYears = [1985, 1987, 1963, 1969];

// we are going to loop through years and fill up this array
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2021 - birthYears[i]);
}
console.log(ages);
console.log('----------------------');

//  continue & break statements
let data = ['Rupak', 'Indira', 'Miguel', 1985, false, 'cool']

for (let i = 0; i < data.length; i++) {
  // if value of our array is not string, skip it
  if (typeof data[i] !== 'string') continue;
  
  console.log(data[i])
}
console.log('---------------------')

for (let i = 0; i < data.length; i++) {
  // if value of our array is not string, stop the loop / get out of loop
  if (typeof data[i] !== 'string') break;
  
  console.log(data[i])
}
console.log('---------------------')

// NOTE: WHILE LOOP
// this loop will run while the given condition is true
let i = 1; // counter initialization
while (i <= 10) { // counter condition
  console.log(i)
  i++; //counter increment
}

// Both for..of and for..in statements iterate over lists;
// the values iterated on are different though, for..in returns a list of keys on the object being iterated,
// whereas for..of returns a list of values of the numeric properties of the object being iterated.
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // 0  1 2
}

for (let i of list) {
  console.log(i); // 4 5 6
}

