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

// lets say we want to get opening hours of our restaurant for Monday
// if property that doesn't exists
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// NOTE: now, above can cause issues when we have deeply nested objects with lots of optional properties
// es 2020 introduced a great solution for this, a feature call - OPTIONAL CHAINING
// With 'optional chaining' if certain property doesn't exists then UNDEFINED is return immediately to avoid errors
console.log(restaurant.openingHours.mon?.open); // ? optional operator
// This is how it works - So only if 'mon' property exists then 'open' property will be read/execute
// if not, 'undefined' is return immediately

// multiple ? optional operators
// if 'openingHours' prop exists then 'mon' gets read
// if both exist then 'open' prop gets execute
console.log(restaurant.openingHours?.mon?.open);

// without optional chaining
// console.log(restaurant.openingHours.mon.open); // error - reading from undefined

// real world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  // [day] - destructuring & ?? - nullish operator to set default value
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining does also work for 'Calling Methods' to check if method exists before we call it
// ?? nullish operator if method returns null or undefined
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists'); // ?. - call it if exists
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// arrays - to check if array is empty
const users = [{ name: 'Rupak', email: 'hell0@rupak.io' }];
console.log(users[0]?.name ?? 'User does not exists');
