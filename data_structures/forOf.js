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

  // assigning default values if not found current value
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(`order received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
};

// ES6: new ways of looping through an Array - forOf loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// using regular for loop is lots of work using forOf instead
// get to access array elements directly
for (const item of menu) console.log(item);

// NOTE: to access Indexes we have to do this by calling array method - entries
// for (const item of menu.entries()) {
//   // 1: Pizza - print index to start from 1 & element in index 2 of each arrays
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// new way of doing same above with Array Destructuring
for (const [i, el] of menu.entries()) {
  // 1: Pizza - print index to start from 1 & element in index 2 of each arrays
  console.log(`${i + 1}: ${el}`);
}

// NOTE: array's 'entries' method creates a NEW array on every indexes with an element
console.log([...menu.entries()]);
