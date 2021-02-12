'use strict';

// Immediately Invoked Function Expressions (IIFE)

// So, sometimes in javascript we need a function that is 'ONLY Executed Once'
// & then NEVER again. Basically, a function that 'disappears' right after it gets called ONCE.
// This technique is use commonly with Async Await.

// NOTE: We want to execute function immediately & not have it Save it somewhere
// Here, tricking javascript into thinking that this is just an expression by wrapping with ()
(function () {
  // transforming statement into expression
  console.log('This will never run again');
})(); // () - to call it

// with arrow function
(() => console.log('This will ALSO never run again'))();

// The reason why IIFE is created is that we know that Function creates scope &
// One OUTER SCOPE does not have access to Variables from INNER Scope but
// INNER SCOPE have access to variables defined in Outer/Global Scope
// NOTE: To keep inner variables encapsulated or protected

const myNum = 1;

const access = () => {
  // inner scope have access to outer scope variable
  console.log(myNum);

  // outer scope does not have access to inner scope variable
  const numPrivate = 2;
};
access();

// console.log(numPrivate); error

// NOTE: IIFE are not use that much now since Let/Const have a block scope to protect variables
// BUT if we want to Execute Function ONCE ONLY, IIFE still is a way to go
