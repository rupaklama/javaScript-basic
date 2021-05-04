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
};

// NOTE: A string is just a one-dimensional array — a vector — with elements of the type character.
// String indexes are zero-based: The first character is in position 0, the second in 1, and so on.

const airline = 'Tap Air Portugal';
const plane = 'A320';

// just like an array, we can get string in certain position
console.log(plane[0]); // "A"
// Other way
console.log('NEP73'[0]); // "N"

// Length property of string
console.log(airline.length); // 16

// NOTE: Strings also have methods like an array
// some of them are quite similar to an array methods
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10

// NOTE - WHOLE WORD
// All characters are case sensitive in strings
// This will return -1 since 'portugal' is not found in string
console.log(airline.indexOf('portugal')); // -1

// NOTE: The slice() method extracts a section of a string and returns it as a new string,
// without modifying the original string. String is Primitive so we can't mutate it.
// Use the start and end parameters to specify the part of the string you want to extract.
// The first character has the position 0, the second has position 1, and so on.
// Tip: Use a negative number to select from the end of the string.

// If pass only ONE arg, it's a begin/start parameter
// The result is known as sub-string because it just part of original string

// const airline = 'TAP Air Portugal';
// Air Portugal - starts on the same letter which is a begin parameter
console.log(airline.slice(4)); // "Air Portugal"
// start & end parameter
// end value is not included in the string, stops extracting before reaching number 7
console.log(airline.slice(4, 7)); // "Air"

// NOTE: alternate way for putting values directly with indexOf
// extracting the first word by searching space
console.log(airline.slice(0, airline.indexOf(' '))); // "Tap"
// extracting the last word by searching space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // + 1 to remove space - "Portugal"

// extracting from the end
console.log(airline.slice(-2)); // last two letters - "al"
console.log(airline.slice(1, -1)); // start at index 1, cut off last word of the end of string - "ap Air Portuga"

// function that gets air plane sits as arg &
// logs to the console whether it is middle seat or not
const checkMiddleSeat = seat => {
  // B & E are middle seats
  const s = seat.slice(-1); // last letter of string

  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat!');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// NOTE: Boxing is when javaScript takes strings & put it into an Object to make Methods available
// since String is primitive & primitive don't have methods. JavaScript is smart on doing so.
console.log(new String('rupak'));
