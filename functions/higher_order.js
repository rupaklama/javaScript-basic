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
