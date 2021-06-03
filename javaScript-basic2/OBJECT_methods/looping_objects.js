'use strict';

const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// We can also loop over Objects in a non-direct way

// PROPERTY NAMES
// Object.keys() method returns a New Array with PROPERTY NAMES as Indexes/Keys
const properties = Object.keys(restaurant.openingHours);
// console.log(properties); ["thu", "fri", "sat"]
console.log(`We are open on ${properties.length} days`);

// looping over an array
properties.forEach(day => console.log(day));

// PROPERTY VALUES
// Object.keys() method returns a New Array with PROPERTY VALUES
console.log(Object.values(restaurant.openingHours)); // [{…}, {…}, {…}]

// TO LOOP OVER AN ENTIRE OBJECT
// Object.entries() method returns a New Array with Key/Value pairs

const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// a: somestring
// looping_objects.js:44 b: 42

// another example
const entries = Object.entries(restaurant.openingHours);
console.log(entries); // an array with key/value - [Array(2), Array(2), Array(2)]
entries.forEach(
  (
    [key, { open, close }] // object destructuring
  ) => console.log(`On ${key} we open at ${open} and close at ${close}`)
);
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24
