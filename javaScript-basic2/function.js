// for debugging - displays errors in the console
'use strict';

// note - Function is just a reusable piece of code store in a global variable.

// NOTE: ARROW FUNCTION
const name = 'Rupak';

let me = {
  name: 'Ashutosh Verma',
  thisInArrow: () => {
    console.log('My name is ' + name); // no 'this' binding here
    // NOTE - ES6 arrow function can't be bound a 'this' keyword,
    // so it will lexically go up a scope & find the value
  },
  thisInRegular() {
    console.log('My name is ' + this.name); // 'this' binding works here
  },
};
me.thisInArrow();
me.thisInRegular();

// Statement doesn't return value while Expression returns/produces value
// function expression produce immediate result, function declaration/statement don't

// function Statements/Declarations & Expressions

// The main difference between a function expression and a
// function declaration/statement is the function name,
// which can be omitted in function expressions to create anonymous functions.

// let whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     // return doesn't only return value but also finish execution like break statement
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case ' driver':
//       return firstName + ' drives a cab';
//     case 'developer':
//       return firstName + ' creates application';
//     default:
//       return firstName + ' does something else';
//   }
// }

// console.log(whatDoYouDo('developer', 'Rupak'))

// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:
// After a function expression has been stored in a variable,
// the variable can be used as a function. Functions stored in variables do not need function names.
// They are always invoked (called) using the variable name.

