'use strict';

// find() method is to get FIRST One element in an array that pass a test condition (provided as a function) 
// find() method executes the function once for each element present in the array
// If it finds an array element where the function returns a true value,
// find() returns the value of that array element (and does not check the remaining values)

// Note: find() does not execute the function for empty arrays.
// Note: find() does not change the original array
// NOTE: find() only returns ELEMENT, NOT A NEW ARRAY
// NOTE: // Find returns 'undefined' if no match found
const entries = [200, 450, -400, 3000, -650, -130, 70, 1300];

// find method loops over an array to retrieve a FIRST element in array that satisfies the condition
const firstWithdrawal = entries.find(entry => entry < 0);
console.log(firstWithdrawal);

// array of objects
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

const accounts = [account1, account2];

// NOTE - using find method, we can find an object in our array based on the some property of that object
//  to Find particular WHOLE Object on matching certain property
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); // {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222}

// usually the goal of Find method is to find exactly ONE ELEMENT
