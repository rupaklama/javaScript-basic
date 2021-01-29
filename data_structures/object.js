'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // assigning default values if not found current value
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time, address}) {
    console.log(`order received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
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

// passing obj as arg
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

// Object destructuring with name of the properties- the order of the elements doesn't matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we want variable name different than the property name - renaming
const { name: restName, openingHours: hours, categories: tags } = restaurant;
console.log(restName, hours, tags);

// creating new property 'menu' with default value & setting default value on existing property of object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// wrap whole thing with () to avoid - unexpected token '=' error
 ({a, b} = obj);
 console.log(a, b); // over-riding initial values

 // nested objects
 const { fri: {open, close} } = openingHours;
 console.log(open, close);
