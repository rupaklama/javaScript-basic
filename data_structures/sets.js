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

// es 6 - sets
// sets are collection of unique values - no duplicates
// pass in iterable - array
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// set removes duplicates
console.log(ordersSet);

// unique values
console.log(ordersSet.size);

// to check certain element is in the set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// add new element to a SET, adds only one
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// delete element
ordersSet.delete('Risotto');
console.log(ordersSet);

// delete all elements - ordersSet.clear()

// SETS are also iterable, we can loop through them
// NOTE: we don't have access to 'indexes' like in array
for (const order of ordersSet) {
  console.log(order);
}

// NOTE: big use case of sets is to remove duplicate values of ARRAYS
const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];

// create a set
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// NOTE: now, we want above return value from set to be an array
// conversion from set to array is easy since both of them are iterables
const staffUnique = [...new Set(staff)]; // using spread operator to create new array
console.log(staffUnique);

// strings are also iterable
console.log(new Set('Rupaak'));

// to count how many letters are in string
console.log(new Set('Rupaak').size);
