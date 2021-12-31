// for debugging - displays errors in the console
'use strict';

// note - Function is just a reusable piece of code store in a global variable.

// function Statements/Declarations & Expressions
// note - when it comes to JS Statement & Expression, it is not same with Functions
// In Function - it is how functions are named: Function Declaration/Keyword vs Function stored in a Variable

// The main difference between a function expression and a
// function declaration/statement is the function name - Function Declaration/Keyword vs Function stored in a Variable. 
// Function stored in a Variable is to create Anonymous functions.

// NOTE - The other big difference is Function Declaration are Hoisted
// meaning we can call it before/above where they are defined. 

// Function Declaration
function calcAge(birthYear) {
  return 2021 - birthYear
}

// Function Expression - Anonymous function here
// note - Arrow function is also Function Expression
let whatDoYouDo = function(job, firstName) {
  switch(job) {
    // return doesn't only return value but also finish execution like break statement
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case ' driver':
      return firstName + ' drives a cab';
    case 'developer':
      return firstName + ' creates application';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('developer', 'Rupak'))

// NOTE: ARROW FUNCTION
const name = 'Rupak';

let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    // console.log("My name is " + this.name); - adding 'this' here, no Variable will be found or value,
    // also no errors thrown
    console.log("My name is " + name); // no binding of 'this' here to the Object
    // NOTE - ES6 arrow function can't be bound with a 'this' keyword,
    // so it will Lexically go up a scope & find the value
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
me.thisInArrow(); // Rupak
me.thisInRegular(); // Ashutosh Verma



// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:
// After a function expression has been stored in a variable,
// the variable can be used as a function. Functions stored in variables do not need function names.
// They are always invoked (called) using the variable name.

