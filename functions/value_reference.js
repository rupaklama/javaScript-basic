'use strict';

// How Passing Arguments Works - Value vs Reference
// In JavaScript, a variable may store two types of values: primitive and reference.
// JavaScript provides six primitive types as undefined, null, boolean, number, string, and symbol,
// and a reference type - object

// If the value is a primitive value, when you access the variable,
// you manipulate the actual 'value' stored in that variable.
// In other words, the variable that stores a primitive value is accessed by value
let a = 10;
let b = a;
b = 20;
// Since a and b have no relationship,
// when you change the value stored in the b variable, the value of the a variable doesn’t change.

// Unlike a primitive value, when you manipulate an object, you work on the reference of that object,
// rather than the actual object. It means a variable that stores an object is accessed by reference
let x = { name: 'rupak' };
let y = x; // x and y are now referencing the same object on the heap
// Third, modify the value stored in the name property of the object using the y variable
y.name = 'Indira';
// Since both x and y are referencing the same object,
// the change is also reflected if you access the object using the x variable
// console.log(x.name); // 'Indira'

// Applying same above concepts on Functions
const flight = 'LH234';

const rupak = {
  name: 'rupak',
  passport: 23434354,
};

const checkIn = (flightNum, passenger) => {
  // changing variable reference value to new one, it's valid
  // this will NOT CHANGE the value store in variable - flight,
  // there's no relationship between 'fight' & 'flightNum' variables
  // flightNum = flight; // the value is simply copied but don't change the original value
  flightNum = 'LH999';

  // manipulating object - the change is also reflected in object
  // since working on the 'reference' of the object - copy of object
  // when we update copy object, an original object gets updated too
  passenger.name = 'Mr.' + passenger.name;

  // check to see if passport number is correct
  if (passenger.passport === 23434354) {
    alert('Check in!');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, rupak);
// console.log(flight); // variable
// console.log(rupak); // object

// Avoid object mutation
const newPassport = person => {
  // creates an error since mutating object directly
  person.passport = Math.trunc(Math.random() * 10000000);
};

// updating the passport number
newPassport(rupak);
// NOTE- interactions with same object with different functions can create an issue
checkIn(flight, rupak);

// NOTE: JavaScript does NOT have passing by Reference, only passing by VALUE
// even though it looks like passing by Reference.
// However with OBJECT reference, that Reference itself is still a VALUE,
// it simply a value which contains a memory address.
