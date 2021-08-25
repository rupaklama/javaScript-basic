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

// Changing the CASE of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('rupak'.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // should look like this - Jonas
// first step is to put everything in lower case
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Check user input EMAIL to compare
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n'; // \n - Enter Character
// firs step to convert in lowercase
const lowerEmail = loginEmail.toLowerCase();
// removing white spaces with TRIM method
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// we can do above all in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// NOTE: Since es 2019 there's also trimStart() & trimEnd()

// Important - replacing part of String with REPLACE method
// This method also creates a brand new string, don't mutate the original one
const priceGB = 'Rs288,97';
// first arg is the strings that we want to replace
// second arg is the strings that will replace the first one
const priceUS = priceGB.replace('Rs', '$').replace(',', '.'); // chaining here
console.log(priceUS); // $288.97

// replacing entire word
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // replaces first occurrence of word - door
console.log(announcement.replaceAll('door', 'gate')); // replaces All occurrence of word - door

// with regular expression
console.log(announcement.replace(/door/g, 'gate')); // g stands for global

// NOTE: Three method that returns Booleans - includes, startsWith & endsWith
const myPlane = 'Airbus A320neo';
console.log(myPlane.includes('A320')); // true

console.log(myPlane.startsWith('Air')); // true

if (myPlane.startsWith('Airbus') && myPlane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!');
}

// Practice exercise
const checkBaggage = items => {
  // NOTE - FIRST always convert to lowercase which makes easier to compare
  // NOTE - All string's methods are case-sensitive, A & a is not the same
  const baggage = items.toLowerCase(); // to match/compare exactly like knife === knife, false when knife === Knife
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife.');
checkBaggage('I have socks and camera.');
checkBaggage('Got some snacks and a gun for protection.');
