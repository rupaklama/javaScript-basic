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

  orderPasta: function (spice1, spice2, spice3) {
    console.log(`Here is your delicious pasta with ${spice1}, ${spice2} and ${spice3}`);
  }
};

const arr = [7, 8, 9];

// old way of adding array in an array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// ES6 spread operator - creates a new array including arr array elements
const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9 ]
console.log(newArr);

// display all elements of an array but not the whole array like []
// This is good coz we can access array elements directly & use in our code
console.log(...newArr); // 1 2 7 8 9 - spread operator unpacks inividual array elements

// creating new menu array
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(...newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']


// NOTE: Two important use cases of spread operator which is to create 
// shallow copies of arrays & to merge two arrays together. 

// copy array - shallow copy
// shallow copy - a new object is created that has an exact copy of the values in the original object
// Object is not copied, only the reference addresses/memory addresses are copied
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// join two arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu);


// NOTE: Iterables: arrays, strings, maps, sets. NOT objects
// string
const str = 'Rupak';
// converts letters as an individual elements
const letters = [...str, ' ', 'D']; 
console.log(letters);
console.log(...letters); // to access elements directly

// Note: this won't work, an error because
// this not a place to put in multiple values separated by commas. 
// Multiple Values separated by 'comma' are usually only expected when we 
// pass as an Arguments into the Function or when we built New Array
// console.log(`${...str} Lama`); // NOT GOING TO WORK WITH TEMPLATE LITERALS

// calling orderPasta function
// user prompt
// const ingredients = [prompt('let\'s make pasta! Ingredient 1?'), prompt('let\'s make pasta! Ingredient 2?'),
//                       prompt('let\'s make pasta! Ingredient 3?')]
// console.log(ingredients);

// func - old way of assigning args
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

// with spread operator same as above on Function
// restaurant.orderPasta(...ingredients)

// NOTE: SPREAD OPERATOR ALSO WORKS ON OBJECTS - even though OBJECTS are not Iterable
// ORDERS DOES NOT MATTERS in an object
const newRestaurant = { chef: 'Indira',...restaurant, founder: 'Rupak'}
console.log(newRestaurant); // Joining Objects

// shallow copy of original object
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Leonardo\'s Kitchen';
console.log(restaurantCopy.name);

// original object
console.log(restaurant.name);
