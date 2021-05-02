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
rest.set('name', 'Himalayan'); // key/value
rest.set(1, 'Santa Rosa');
console.log(rest.set(2, 'New York')); // returns updated map
