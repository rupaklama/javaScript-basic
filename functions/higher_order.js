'use strict';

// NOTE: higher order function - takes call back function as an argument or return nested function
// function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// greeterHey is referring to inner/nested function above
const greeterHey = greet('hey');
greeterHey('Rupak');
greeterHey('Indira');

// we can also do above all at once
greet('Hello')('Rupak');

// same as above with arrow function
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
const newGreet = greet2('Namaste');
newGreet('friends');

greet2('Hello')('Indira');

// NOTE: This will not call 'book' function instead it will RETURN NEW FUNCTION
// where 'this' keyword will always be set to 'eurowings' object, NOT to lufthansa object
// Now, the 'book' method of other object is going to store values into this object
// BASICALLY, bind creates a NEW Function for each object where its bound.
const bookEW = book.bind(eurowings);
bookEW(123, 'Rupak Lama');

const bookLH = book.bind(lufthansa);
bookLH(345, 'Indira Rai');

// same as with Call method, we can pass multiple arguments in Bind method too
