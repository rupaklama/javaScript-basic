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
  orderPizza: function(mainIngredient, ...others) {
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

// 1. DESTRUCTURING 

// NOTE - Rest Pattern exactly looks like Spread Operator same syntax with (...) except 
// but it actually does the OPPOSITE of spread operator. 
// Spread operator is to UNPACK an array while Rest operator is to PACK elements into a New array. 

// SPREAD, on RIGHT hand side of the assignment (=)
const arr = [1, 2, ...[3, 4]];
console.log(arr) // [1 , 2, 3, 4]

// array destructuring 
// REST syntax because on LEFT hand side of the assignment (=) operator
// destructuring & rest of the values put into a new array with Rest operator 
const [a, b, ...others] = [1, 2, 3, 4, 5]; 
console.log(a, b, others); // 1, 2, [3, 4, 5]

// Rest is packing meaning it will take rest of the remaining elements & put them into a NEW array - others 
// Rest pattern basically collects the elements that are unused on array destructuring 

// we can use ... on both side of assignment operator
// NOTE: REST PATTERN IS DONE ON LEFT HAND SIDE WHILE DOING DESTRUCTURING & ALWAYS MUST BE IN THE LAST ELEMENT
const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// OBJECTS - remaining elements are collected into New Objects
// New object with week days
const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// note - Rest syntax can be used as the Only parameter or as the Last parameter in the list
// 2. FUNCTION
// this function should take many args as needed
// add(2, 3)
// add(2, 3, 7, 8, 9)
// To do this, we will use Rest Parameters same as Pattern
const add = (...numbers) => {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
}

// Spread operator is to UNPACK an array while Rest operator is to PACK elements into a NEW array. 
add(2, 3) // [5]
add(2, 3, 7, 8, 9) // [29]
add(2, 3, 7, 8, 9, 10, 3, 5, 6) // [53]

// calling func with new values in a variable
const x = [23, 5, 7]
add(...x) 
// NOTE: 'add 'function accepts single values & array also 


// calling func with many args as we wanted
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach')
