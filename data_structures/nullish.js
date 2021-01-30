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

// nullish Coalescing operator (??) - es 2020
// It works almost the same as OR operator but it will fix an error on return value
// restaurant.numGuests = 0;
const guest = restaurant.numGuests ?? 10;
console.log(guest); 
// ?? - nullish operator works with the concept of Nullish Value instead of falsey value
// Nullish value are Null & Undefined, it does NOT include 0 & '' - empty string
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
