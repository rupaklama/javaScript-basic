'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Array - array is an Object & has special built in methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE method - similar to String to extract part of array & return NEW ARRAY
// The slice() method returns the selected elements in an array, as a new array object
// The slice() method selects the elements starting at the given start argument,
// and ends at before of second argument, but does not include, the given end argument.

// start at index 2 & all the way to the end
console.log(arr.slice(2)); // ["c", "d", "e"]

// with first & second args
console.log(arr.slice(2, 4)); // ["c", "d"]

// negative start arg to copy from the END of an array
console.log(arr.slice(-1)); // ["e"]
console.log(arr.slice(-2)); // ["d", "e"]
console.log(arr.slice(1, -2)); // ["b", "c"]

// we can use the SLICE method to simply create a SHALLOW COPY of an array
// We can do it with either Array Slice method or Spread operator - console.log([...arr]);
// The ONLY TIME you really need to use Slice method is When you want to CHAIN multiple methods together

// SPLICE method - splice() method adds or removes items to an array, and returns the removed item(s) also
// Note: This method works as the SLICE method but changes/mutate the ORIGINAL ARRAY

// SYNTAX - array.splice(index, deleteCount, item1, ....., itemX)
// index - Required. An integer that specifies at what position to add or remove items,
// Use negative values to specify the position from the end of the array

// deleteCount - Optional, The number of items to be removed. If set to 0, no items will be removed

// item1, ..., itemX	- Optional, The new item(s) to be added to the array

let arraySplice = ['a', 'b', 'c', 'd', 'e'];
// start at index 2 & all the way to the end
// console.log(arrSplice.splice(2)); // ["c", "d", "e"]

// NOTE: now, our ORIGINAL ARRAY GOT MUTATED
// In practice, we use Splice to delete one or more elements in an ORIGINAL ARRAY
console.log(arraySplice); // ["a", "b"]

// ONE COMMON practice is to simply delete last element in an array
console.log(arraySplice.splice(-1)); // ["a", "b", "c", "d"]

// REVERSE method - reverse() method reverses the order of the elements in an array
// Note: this method will CHANGE the original array
let arrayReverse = ['a', 'b', 'c', 'd', 'e'];
console.log(arrayReverse.reverse());

// CONCAT method - concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
const concatArray = ['f', 'g', 'h', 'i', 'j'];
const concatLetters = concatArray.concat(arrayReverse);
console.log(concatLetters);

// same result as above
console.log([...arrayReverse, ...concatArray]);

// JOIN method - returns the array as a STRING
// Note: this method will not change the original array
// The elements will be separated by a specified separator. The default separator is comma (,)
const joinArray = ['f', 'g', 'h', 'i', 'j'];
console.log(joinArray.join(' - '));
