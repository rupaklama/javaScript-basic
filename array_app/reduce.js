'use strict';

// Reduce - boils(reduces) all array elements down to ONE single value
// reduce() method executes a provided function for each value of the array (from left-to-right)
// The return value of the function is stored in an accumulator (result/total)
// e.g adding all elements together to get Total, one single value

// Reduce method loops over an array & it keeps adding CURRENT Element onto
// ACCUMULATOR Variable until we have the TOTAL Value.
// Note: reduce() does not execute the function for array elements without values
// Note: This method DOES not change the original array

// total - Required. The initialValue, or the previously returned value of the function
// currentValue	- Required. The value of the current element
// currentIndex	- Optional. The array index of the current element
// arr - Optional. The array object the current element belongs to

// initialValue	- Optional. A value to be passed to the function as the initial value
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// to get the balance
// first param is the ACCUMULATOR (total) - initialValue, or the previously returned value of the function
// ACCUMULATOR - keep accumulating the values to return, like final TOTAL value

// second param is CURRENT ELEMENT - Required. The value of the current element
// third param is currentIndex	- Optional. The array index of the current element
// fourth param is our array - Optional. The array object the current element belongs to
const totalBalance = movements.reduce((acc, cur, i, arr) => {
  // adding CURRENT value of element into the accumulator to ADD on each iteration
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // initial value of the accumulator - on first iteration

// All the values of array added together
console.log(totalBalance); // 3840

// finding maximum value '3000' in an array
const maxValue = movements.reduce((acc, curr) => {
  if (acc > curr) {
    // In the Reduce method, we always have to return the Accumulator to the next Iteration
    return acc; // with the max value stored
  } else {
    return curr;
  }
}, movements[0]); // 0 wouldn't work if we have first value as negative

console.log(maxValue);
