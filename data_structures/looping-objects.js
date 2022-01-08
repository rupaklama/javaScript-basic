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

// We can also loop over Objects in a non-direct way
// Note - All the Object Methods(keys, values & entries) returns a New Array. 

// Object.keys - a new array with Object Properties only
const properties = Object.keys(openingHours);
console.log(`We are open on ${properties.length} days`);

properties.forEach(day => console.log(day));

// Object.values - a new array with Object key/property Values only
const values = Object.values(openingHours);
console.log(values);

// TO LOOP OVER AN ENTIRE OBJECT & To ACCESS KEY & VALUE
// Entire object - returns a New Array with Key/Value
const entries = Object.entries(openingHours);
console.log(entries); // ["thu", {…}]
entries.forEach((
  [key, { open, close }] // array/object destructuring
) => console.log(`On ${key} we open at ${open} and close at ${close}!`));
