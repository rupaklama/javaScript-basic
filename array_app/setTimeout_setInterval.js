'use strict';

// JavaScript can be executed in time-intervals.
// These time intervals are called timing events

// The two key methods to use with JavaScript are:
// 1. setTimeout(function, milliseconds) - Executes a function, after waiting a specified number of milliseconds.
// 2. setInterval(function, milliseconds) - Same as setTimeout(), but repeats the execution of the function continuously

// setTimeout - async function
// The first parameter is a function to be executed.
// The second parameter indicates the number of milliseconds before execution.

// NOTE - 'olives', 'spinach' - All the args that we pass after the delay will be the args to the function
// (ing1, ing2) - the parameters
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!`),
  3000, // 3 secs
  'olives', // args
  'spinach'
);

console.log('Waiting...');

// NOTE- we can actually CANCEL the TIMER at least until the Time is up
const ingredients = ['mushroom', 'cheese'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!`),
  4000,
  ...ingredients // putting array elements here
);

// clearTimeout() method stops the execution of the function specified in setTimeout()
// clearTimeout() method uses the 'variable' returned from setTimeout()
// using the setTimeout Variable to clear the time out
if (ingredients.includes('mushroom')) clearTimeout(pizzaTimer); // stop the execution

// Another practical example
const hello = setTimeout(() => {
  console.log('Hello');
}, 3000);

// <button onclick="hello()">Try it</button> - To start

// <button onclick="clearTimeout(hello)">Stop it</button> - To stop

// SET INTERVAL METHOD
// setInterval() method repeats a given function at every given time-interval
// simply schedule to run a function after certain amount of time over and over again
// The first parameter is the function to be executed.
// The second parameter indicates the length of the time-interval between each execution.
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString()); // current local time
}, 1000);

// clearInterval() method stops the executions of the function specified in the setInterval() method
// clearInterval() method uses the variable returned from setInterval()
