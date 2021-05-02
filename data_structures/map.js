'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // at least need one arg but other args are optional, so to do this - Rest Parameters are perfect
  orderPizza: function (mainIngredient, ...others) {
    console.log(mainIngredient);
    console.log(others);
  },

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

// A Map is a collection of key🔑 — value pairs, similar to an object.
// It stores the key🔑 — value pairs in the insertion order
// Map is a data structure we can use to map values to keys.
// Just like in Object, data is store in key/value pairs
// Difference between Object & Map is in Map keys can have ANY TYPES
// In Object keys are always Strings, in Map we can have any Types - object, arrays...

const rest = new Map();

// set method - to add new element
rest.set('name', 'Cassico Italino');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Kathmandu, Nepal');

// chaining 'set' methods
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 9)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

// get method - to read data from a map
console.log(rest.get('name')); // Cassico Italino
console.log(rest.get(true)); // we are open :D

// getting string based on the time
const time = 9;
// return boolean - false
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // we are closed :(

// has method
console.log(rest.has('categories')); // true

// delete method
rest.delete(2);
// console.log(rest);

// size property
// console.log(rest.size); // 7

// clear method - to clear all elements
// rest.clear();
console.log(rest);

// using arrays & objects as Map's keys
rest.set([1, 2], 'Test');
console.log(rest.size);

