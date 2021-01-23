// for debugging - displays errors in the console
'use strict';

// Hoisting
// When you execute a piece of JavaScript code, the javaScript engine creates Global Execution Context
// which has two phases: creation and execution.
// During the creation phase, JavaScript engine moves the VARIABLE and FUNCTION DECLARATION
// to the top of our code with INITIAL VALUES as UNDEFINED.

// Hoisting refers to the availability of functions and variables “at the top” of your code,
// as opposed to only after they are created. The objects are initialized at compile time
// and available anywhere in your file.

// NOTE: The JavaScript engine hoists the variables declared using let/const keyword,
// but it DOES NOT initialize them. 'Var' keyword gets initialize with 'undefined'

// this line of code doesn't cause an error because js engine moves the variable declaration
// to the top of the script. Variables declared with 'var' are actually hoisted with value 'undefined'
console.log(me); // returns 'undefined' since using 'var'
// console.log(job); // let & const keyword gets hoisted but does not get initialized, results in an ERROR
// console.log(year);

var me = 'Rupak';
let job = 'teacher';
const year = 1985;

// Function declarations are hoisted but function expressions are not.
// same with Arrow Function which is a syntactic sugar for defining Function Expression.
// Syntactic Sugar is syntax designed to make things easier to read or to express.

// using/calling functions below before they are defined
console.log(addDec(2, 3)); // no error since function declaration is hoisted

// error because assigning value to CONST variable which gets hoisted but does not get initialized
// console.log(addExpr(2, 3)); 
// console.log(addArrow(2, 3)); // same here

// NOTE: If Arrow Function or Function Expression is assigned to 'VAR' keyword, still an ERROR
// since VAR keyword is hoisted with 'undefined' results in 'TypeError: not a function'

// function declaration
function addDec(a, b) {
  return a + b;
}

// function expression
const addExpr = function (a, b) {
  return a + b
};

// arrow function
const addArrow = (a,b) => {
  return a + b
}

// The case for function expressions
// It might seem like function declarations, with their powerful hoisting properties,
// are going to edge out function expressions for usefulness.
// But choosing one over the other requires thinking about when and where the function is needed.
// Basically, who needs to know about it?

// Function expressions are invoked to avoid polluting the global scope.
// Instead of your program being aware of many different functions, when you keep them anonymous,
// they are used and forgotten immediately.

// Callbacks
// A function passed to another function is often referred to as a “callback” in JavaScript.
// Here’s an example:

// function mapAction(item) {
// do stuff to an item
// }

// array.map(mapAction)

// The problem here is that mapAction will be available to your entire application —
// there’s no need for that. If that callback is a function expression,
// it will not be available outside of the function that uses it:
// though mapAction will be available to code below its initialization.

// In short, use function declarations when you want to create a function on the global scope
// and make it available throughout your code. Use function expressions to limit where the
// function is available, keep your global scope light, and maintain clean syntax.
