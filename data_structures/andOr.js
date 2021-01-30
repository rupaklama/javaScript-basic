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

// Logical operator can use ANY data type, return ANY data type &
// Short-circuiting (shot circuit evaluation) - meaning if the FIRST value is a truthy value
// that will immediately return that Value
console.log(3 || 'Rupak'); // 3 is a truthy value
// Again, if the first operant is Truthy value like in above then the OTHER operand will even NOT be evaluated
// js will not check the other value with Short-circuiting

console.log('' || 'Rupak'); // Rupak
console.log(true || 0); // true
console.log(undefined || null); 
// null - even though it's a falsey value coz of Short-circuiting

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// Hello - because it's the first TRUTHY value  

// practical approach of setting DEFAULT values
// Number of guest property in an object, if there's none, set to 10
// so restaurant.numGuests doesn't exist - undefined, 10 will be the return value
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Instead of doing above, we can take advantage of Short-circuiting & OR operator
// first value is falsey, so second is the result of OR operator 
// Short-circuiting doesn't care if the second value is truthy or falsey, it will just return it
const guests2 = restaurant.numGuests || 10; 
console.log(guests2);

// AND operator works in the exact OPPOSITE way of OR operator
console.log(0 && 'Rupak'); // 0
// AND operator short circuits when the first value is falsey, falsey value gets return

console.log(7 && 'Rupak'); // Rupak
// when the first value is Truthy, evaluation continues & last value is returned
