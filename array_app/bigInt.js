'use strict';

// NOTE: JavaScript Numbers are Always 64-bit Floating Point (binary format - compose of 0s & 1s)
// Just ONE DATA TYPE for all numbers.
// Out of 64-bits, only 53 bits are use to store the digits themselves,
// rest store the position of decimals places & signs

// BigInt is introduced in ES 2020
// BigInt is a special numeric type that provides support for integers of arbitrary length.

// A bigint is created by appending n to the end of an integer literal or
// by calling the function BigInt that creates bigints from strings, numbers etc.

// 2 - working with base 2 ( 0 & 1)
// NOTE: This is the biggest number that javaScript can safely represent
console.log(2 ** 53 - 1); // 9007199254740991

// NOTE: This number is so important that it is saved as the biggest number in javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// NOTE: ANY INTEGER LARGER THAN ABOVE NUMBER IS NOT SAFE means
// can't represents those NUMBERS ACCURATELY
console.log(2 ** 53 + 0); // 9007199254740992
console.log(2 ** 53 + 1); // 9007199254740992
// both gives the same value
// WE CALL THEM UNSAFE NUMBERS

// NOTE: In some cases we need a real big numbers like for database ids or
// when interacting with 'real 60 bit' numbers which are actually use in other languages
// We might get a real larger number from some api then we have no way of storing that in javascript
// At least not until now.
// Starting from 2020 NEW PRIMITIVE is added which is call BIG INIT - BigInt
// stands for Big Integer and can be use to store number as large as we want - NO MATTER HOW BIG
// AND TO DISPLAY IT ACCURATELY

// A bigint is created by appending n to the end of an integer literal or
// by calling the function BigInt that creates bigints from strings, numbers etc.
// n transforms regular number to Big Int number
console.log(203304834348344430483483048493n); // 203304834348344430483483048493n

// by using bigInt(), this should be only use for smaller numbers if possible
console.log(BigInt(203304834)); // 203304834n

// OPERATIONS
console.log(298343038438403984903843n + 8404830848398430803n); // 298351443269252383334646n
console.log(29304039849304839043940399483n * 10000000000n);

// NOTE - MATH OPERATIONS DOES NOT WORK WITH BIG INT like Math.sqrt(16n)

// NOT POSSIBLE TO MIX REGULAR NUMBER WITH BIG INTS
const huge = 9484309483984903499038430948n;
const num = 23;
// console.log(huge * num); // TypeError: Cannot mix BigInt and other types, use explicit conversions
// We have to convert REGULAR NUMBER TO BIG INT

console.log(huge * BigInt(num)); // 218139118131652780477883911804n

// TWO EXCEPTIONS WHEN WORKING WITH COMPARISON & PLUS OPERATOR ( === & +)
// when working with STRINGS
console.log(20n > 15); // true - this still works
console.log(20n === 20); // false

// string concatenation - CONVERTS TO STRING
console.log(huge + ' is REALLY big!!!');

// DIVISIONS - returns closest big int
console.log(10n / 3n); // 3n
