'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// we want this object inside of object below
const openingHours = {
  // we want property names out of weekDays array with array destructuring
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // methods don't have to assign to variable anymore
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // assigning default values if not found current value
  orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(`order received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // the property name here is same as object's name
  // With enhanced object literals, we don't have to write this
  // openingHours: openingHours,

  // es6 enhanced object literal - using object ref's variable name here as property
  openingHours,
};

// enhanced object literals - new features of es6
// es6 introduced three ways to create object literals
// 1. using object ref's variable name as property
// 2. methods don't have to assign to variable any more
// 3. replace property names with any sort of values with destructuring
