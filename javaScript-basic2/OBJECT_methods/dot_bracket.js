'use strict';
// Dot vs Bracket Notation - to get & change data in Object

const rupak = {
  firstName: 'Rupak',
  lastName: 'Lama',
  age: 2021 - 1985,
  job: 'developer',
  friends: ['Indira', 'Robin', 'Miguel'],
};

// Using DOT notation/operator
console.log(rupak.lastName); // Lama

// Using Bracket Notation with Object's property as a String
console.log(rupak['lastName']); // Lama

// With Bracket Operator, we can add Any Expression to compute values
const nameKey = 'Name';
// string concatenation
console.log(rupak['first' + nameKey]); // Rupak
console.log(rupak['last' + nameKey]); // Lama

// another example
const userInput = prompt(
  'What do you want to know about Rupak? Choose between firstName, lastName, age, job and friends'
);

if (rupak[userInput]) {
  console.log(rupak[userInput]);
} else {
  console.log('Search not found. Property does not exists');
}

// NOTE - most of the time use DOT operator which looks lot CLEANER
// use BRACKET operator when we have to compute values

// TO ADD NEW PROPERTIES TO AN OBJECT ABOVE
rupak.location = 'New York'; // using dot notation
rupak['facebook'] = '@rupakL'; // using bracket notation
console.log(rupak);
