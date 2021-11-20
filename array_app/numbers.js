'use strict';

// NOTE: JavaScript Numbers are Always 64-bit Floating Point (binary format - compose of 0s & 1s)
// Just ONE DATA TYPE for all numbers.

// Unlike many other programming languages, JavaScript does not define different types of numbers,
// like integers, short, long, floating-point etc.

// JavaScript numbers are always stored as double precision 'floating point' numbers,

// JavaScript has only one type of number. Numbers can be written with or without decimals.
console.log(23 === 23.0); // true

// In the 'binary system', it is very hard to represent some 'fractions' that are very easy
// to represent in 'base 10' system

// NOTE: Base 10 are basically a numbers from 0 to 9
// Binary is 'Base 2' which are numbers between 0 & 1

// There are certain numbers which are very difficult to represent of base 2 in javascript
// One example of that is fraction - 0.1, returns weird results like below - infinite fractions
console.log(0.1 + 0.2); // 0.30000000000000004 - this result should be 0.3 only, not will all 0s
// But, javascript simply don't have better way to represent this number


// NOTE: just remember you can't do precise scientific calculation with javascript
console.log(0.1 + 0.2 === 0.3); // false, this should be TRUE but we need to accept the fact

// conversion - string to number
console.log(Number('23'));
console.log(+'23'); // same as above with type coercion

// NOTE - Integers and floats are two different kinds of numerical data.
// An integer (more commonly called an int) is a number without a decimal point.
// A float is a floating-point number, which means it is a number that has a decimal place.

// Integer
// Number.parseInt() method parses a string argument and returns an integer of the specified radix or base
// The parseInt() function parses a string and returns an integer.

// Note: Only the first number in the string is returned!
// Note: Leading and trailing spaces are allowed.
// Note: If the first character cannot be converted to a number, parseInt() returns NaN.

// javascript will try to figure out the number that is in the string
// in order for this to work, the string has to start with number
console.log(Number.parseInt('30px', 10)); // 30 - using base 10 to avoid bugs
console.log(Number.parseInt('e23', 10)); // NaN

// Note: parseInt() accepts second arg knowns as Radix
// The Radix is the base of the numerical system that we are using

// Float
// The parseFloat() function parses a string and returns a floating point number.

// This function determines if the first character in the specified string is a number.
// If it is, it parses the string until it reaches the end of the number,
// and returns the number as a number, not as a string.

// Note: Only the first number in the string is returned!
// Note: Leading and trailing spaces are allowed.
// Note: If the first character cannot be converted to a number, parseFloat() returns NaN.
console.log(Number.parseFloat('2.5rem')); // 2.5 - useful when reading a value from CSS
console.log(Number.parseInt('2.5rem')); // 2

// NaN to check some value is a Number
// NOTE: NaN is not a perfect way to check a Number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false

// converting string to number
console.log(Number.isNaN(+'20x')); // true

// isFinite() is a better way to check a value is NUMBER or not
// The isFinite() function determines whether a number is a finite, LEGAL NUMBER.
// This function returns false if the value is +infinity, -infinity, or NaN (Not-a-Number),
// otherwise it returns TRUE.
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

// NOTE: isFinite() is a best way to check if any value is a NUMBER

// Note: use isInteger() to check if a number is INTEGER
// NOTE - In JS, Integer are floating point numbers
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
