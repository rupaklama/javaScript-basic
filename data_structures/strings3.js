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

// Split method - allows us to split a string into multiple parts based on the divider/separator string
// split() method is used to split a string into an array of substrings, and returns the new array
// NOTE: default value is a comma(, )
// If an empty string (" ") is used as the separator, the string is split between each character
// here + is divider/separator string
console.log('a+very+nice+string'.split('+')); // ["a", "very", "nice", "string"]
console.log('Rupak Lama'.split(' ')); // ' ' space - ["Rupak", "Lama"]

// This will create a new array with two elements when separated with empty string (' ')
const [firstName, lastName] = 'Rupak Lama'.split(' '); // ' '
console.log(firstName, lastName); // Rupak Lama

// To get the first array element after split
console.log("Indira Rai".split(" ")[0]);

// JOIN method is OPPOSITE of Split
// join() method is used to join the elements of an array into a string.
// The elements of the string will be separated by a specified separator and its default value is a comma(, )
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize multiple names
const capitalizeName = name => {
  // const firstLetter = name[0].toUpperCase() + name.slice(1);
  // Since we have multiple words here, we have to capitalize all of them one by one
  // It would be good to put all words inside an array to loop over - split method does that
  const names = name.split(' '); // splitting by space puts all words into a new array

  // an array to hold new capitalize words
  const namesUpper = [];

  for (const word of names) {
    // namesUpper.push(word[0].toUpperCase() + word.slice(1));
    // same as above with different way
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }

  // join() method is used to join the elements of an array into a string
  // string will be separated by space ' ' and its default value is a comma(, )
  return namesUpper.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('rupak lama'));

// NOTE: Padding a string
// Padding a string in JavaScript refers to add number of characters to the string
// until string has certain desire length
// Padding a string would be useful for sanitizing data input,
// for example if a certain input requires a string of a certain number of characters

const message = 'Go to gate 23!';
// padStart() adds some characters to the beginning of the string
// first arg - length of string that we want for the string - 25 characters long after padding
// second arg - the character that we want to pad the string with
// Note: the length of entire string should be 25
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23! - length is 25
console.log('Rupak'.padStart(25, '+')); // ++++++++++++++++++++Rupak - more pluses to make it 25

// padEnd() - adding padding to the end of the string
console.log('Rupak'.padStart(25, '+').padEnd(30, '+')); // 5 pluses at the end to be total of 30

// NOTE: real world example with credit card
const maskCreditCard = number => {
  // to convert a number to string use String() or below
  const cardNum = number + ''; // result will be string

  const lastFourNumbers = cardNum.slice(-4);

  return lastFourNumbers.padStart(cardNum.length, '*');
};

console.log(maskCreditCard(1345267893)); // ******7893

// also works with string
console.log(maskCreditCard('9329748340340384309')); // ***************4309

// NOTE: Repeat () - to repeat same string multiple times
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5)); // arg is number of times we want to repeat it

const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12); // There are 12 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
