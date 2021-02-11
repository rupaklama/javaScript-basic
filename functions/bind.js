'use strict';

// Bind - just like 'call' method, BIND also allow us to manually set 'this' keyword for any func call
// The difference is that 'bind' does NOT immediately call the function instead
// it RETURNS a NEW FUNCTION where the 'this' keyword is bound, so it is SET to
// whatever Value we pass into bind.

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      // 'this' refers to an object - lufthansa
      // this keyword is same as lufthansa.airline = this.airline
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// In javascript functions are 'first class functions' meaning they are simply 'values'
// & we can assign it to the variable like below
// calling object with just Function Call
const book = lufthansa.book; // Now, the variable is a function call

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
console.log(eurowings);

// NOTE: This will not call 'book' function instead it will RETURN NEW FUNCTION
// where 'this' keyword will always be set to 'eurowings' object, NOT to lufthansa object
// Now, the 'book' method of other object is going to store values into this object
// BASICALLY, bind creates a NEW Function for each object where its bound.
const bookEW = book.bind(eurowings);
bookEW(123, 'Rupak Lama');

// same as with Call method, we can pass multiple arguments in Bind method too
// setting default arg here known as Partial Application - part of args already applied
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Sajina Rai');
bookEW23('Indira Rai');

// NOTE: Bind method is very useful when we use Objects together with Event Listeners
lufthansa.planes = 300; // adding new property

// adding new method
lufthansa.buyPlane = function () {
  // 'this' keyword here is the 'button' element because
  // in an Event Handler function 'this' always point to the element on which that handle is attached to
  console.log(this);

  // add new plane on button click
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// Since 'this' always point to HTML Element in an Event Handler Function,
// we need to manually define 'this' keyword to refer to an OBJECT so
// therefore we use BIND method which returns a NEW function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// NOTE: Big use case of Bind method - Partial Application
// To SET DEFAULT argument known as Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// same as above
// Partial Application - part of args already applied to preset the rate to be always 10 percent
// Note: Partial Application has to be 'first arg' of function
// first arg 'null' is standard way of doing it since not referring to any object
const addVAT = addTax.bind(null, 0.1); // func returning func
console.log(addVAT(200)); // passing just the value to calculate

// Doing same above with function returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.1);
console.log(addVAT2(200)); // 220
