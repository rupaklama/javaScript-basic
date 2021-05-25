'use strict';

// remainder / modulus operator (%) returns the remainder after (integer) division
console.log(6 % 2); // 0
console.log(6 / 2); // 3 - no remainder or 0, represented this above with modulus operator

// NOTE: This operator returns the remainder left over when one operand is divided by a second operand.
// When the first operand is a negative value, the return value will always be negative,
// and vice versa for positive values.

// A number is Even when 'remainder' is 0
// NOTE: when something is divisible by half, there's no remainder
console.log(6 % 2); // 0

// a function to check certain number is even or not
const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

// NOTE: To check if any number is divisible by any other number
// Whenever the result of the remainder operator is 0 then that means the FIRST NUMBER
// is completely DIVISIBLE by SECOND ONE
// THIS IS SOMETHING IMPORTANT TO KNOW IN PROGRAMMING
