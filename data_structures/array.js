'use strict';

// regular way of creating variables from the array items with bracket notation
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// ES6 array destructuring
// Array destructuring allows you to create new variables using an array item as a value.
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// destructuring from above restaurant object
// array destructuring of categories property
let [first, , second] = restaurant.categories;
console.log(first, second); // Italian Vegetarian

// re-assigning values of two variables, switching variables
// [first, second] = [second, first]
// console.log(first, second)

// method accessing array index with destructuring
// & also receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// // nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting default values when destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
