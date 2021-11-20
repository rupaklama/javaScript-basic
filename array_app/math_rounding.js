'use strict';

// sqrt() method returns the square root of a number
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// to calculate CUBIC root
console.log(8 ** (1 / 3)); // 2

// to get Maximum Value - also works with String
// does Type Coercion
console.log(Math.max(5, 18, '23', 11, 2)); // 23

// to get Minimum Value
// does Type Coercion
console.log(Math.min(5, 18, '23', 11, 2)); // 2

// to calculate the area of a circle with radius - 10px
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// RANDOM NUMBERS
// Note - floor() is to round down & trunc() is to remove the fractional part
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6
// Math.trunc() function returns the integer part of a number by removing any fractional/decimal digits  - 23.123 = 23

// random integers between two values
// (max - min) is that Math.random() gives us number between 0 and 1
// if we multiply that with (max - min) then we get a number between 0 and (max - min)
// Now, if we add Min to all of this, we get range between MIN & MAX values
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));


// Converting to Integer
// In JavaScript, all numbers are floating point. Integers are floating-point numbers without a fraction.
// Converting a number n to an integer means finding the integer that is “closest” to n
// (where the meaning of “closest” depends on how you convert).

// Rounding integers
// Math.round() converts its argument to the closest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// Math.ceil() converts its argument to the closest higher integer
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Math.floor() converts its argument to the closest lower integer
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// TRUNC vs FLOOR - works the same with positive numbers but NOT with negatives
console.log(Math.trunc(-23.3)); // -23 // trunc basically removes the fractional part
console.log(Math.floor(-23.3)); // -24

// NOTE - Floor is better than Trunc as it works in all kinds of situation like positive & negative numbers

// ROUNDING DECIMALS - Floating Point numbers
// we have to specify numbers in () & call toFixed method
// NOTE - toFixed() always returns a STRING NOT a Number
console.log((2.7).toFixed(0)); // 3 - with 0 decimal places
console.log((2.7).toFixed(3)); // 2.700 - with 3 decimals (.700) places
console.log(Number((2.345).toFixed(2))); // 2.35 - with 2 decimals (.35) places

// NOTE:  javascript simply don't have better way to represent FRACTIONAL NUMBERS
// So, use above toFixed method to solve this issue
