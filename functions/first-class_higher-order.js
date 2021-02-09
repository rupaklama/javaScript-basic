'use strict';

// NOTE: There is no First Class Function in practice since it is just a concept.
// Meaning Functions are simply Values in javaScript.

// However, we write Higher Oder Function always.
// Higher Order Function is a function that receives another function as an argument
// like callback function or return another nested function.

const oneWord = str => {
  // regex to replace globally - meaning replacing all spaces with none - ''
  // this func takes a string & returns a new one without any spaces in it
  return str.replace(/ /g, '').toLowerCase();
  // first arg is the string we want to replace, second arg is the string replacing the first one
};

// Split method - allows us to split a string into multiple parts based on the divider/separator string
// split() method is used to split a string into an array of substrings, and returns the new array
// This will create a new array with two elements when separated with empty string (' ')

// NOTE: default value is a comma(, )
// If an empty string (" ") is used as the separator, the string is split between each character
// console.log('Rupak Lama'.split(' ')); // ' ' space - ["Rupak", "Lama"]
// const [firstName, lastName] = 'Rupak Lama'.split(' '); // ' '
// console.log(firstName, lastName); // Rupak Lama

// JOIN method is OPPOSITE of Split
// join() method is used to join the elements of an array into a string.
// The elements of the string will be separated by a specified separator and its default value is a comma(, )
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Mr. Rupak LAMA - converts above array into string by join method

const upperFirstWord = str => {
  // transforming first word of a string into Uppercase
  // we can use ... on both side of assignment operator
  // NOTE: REST PATTERN IS DONE ON LEFT HAND SIDE WHILE DOING DESTRUCTURING & ALWAYS MUST BE IN THE LAST ELEMENT
  // Rest is packing meaning it will take rest of the remaining elements & put them into a NEW array - others
  const [first, ...others] = str.split(' ');
  // return [first.toUpperCase(), ...others].join(' ');
  // same as above
  return [[first.toUpperCase()], ...others].join(' ');
};
// console.log(upperFirstWord('rupak, indira, sajina')); // RUPAK, indira, sajina

// NOTE: higher order function - takes call back function as an argument or return nested function
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); // calling callback with arg

  // can use function's props & methods
  console.log(`Transformed by: ${fn.name}`); // name of function
};

// transform the string using callback function
// NOTE: we are only passing value, not calling function in the arg
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// NOTE: addEventListener is also a Higher Order Function
const high5 = () => {
  console.log('🇳🇵');
};
document.body.addEventListener('click', high5);

// Callback functions allow us to create abstractions - hide details
