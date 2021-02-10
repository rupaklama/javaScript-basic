'use strict';

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

// calling object with its method
lufthansa.book(238, 'Rupak Lama');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// similar object
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// In javascript functions are 'first class functions' meaning they are simply 'values'
// & we can assign it to the variable like below
// calling object with just Function Call
const book = lufthansa.book;
// book(23, 'Kaala Rai Lama'); // error: Cannot read property 'airline' of undefined
// NOTE: error because book() is now just a regular function call
// In a regular function call 'this' keyword points to 'undefined' because
// book() is no longer lufthansa object's method, it's a Function Call

// we have to tell javaScript explicitly which object 'this' keyword is referring to
// NOTE: there are THREE methods to do that - CALL, APPLY & BIND
// because function is an object & object has methods

// first arg is referring to which OBJECT we want 'this' keyword to point to
// and Second arg & more is the rest of the arguments
// NOTE: CALL method can 'MANUALLY' set reference to any particular OBJECT with 'this' keyword
// MANUALLY manipulating 'this'
book.call(eurowings, 23, 'Kaala Rai Lama');
// NOTE: Now, we are not doing regular Function CALL,
// we are calling CALL method which then calls 'book' function
// with 'this' keyword set to 'eurowings' object
console.log(eurowings);

book.call(lufthansa, 435, 'Sajina Rai');
console.log(lufthansa);

// APPLY Method does same thing as CALL method but the only difference is
// apply does not receive the 'list of arguments' after the 'this' keyword - (lufthansa, NO args')
// but instead it is going to take an ARRAY of args
const flightData = [583, 'Miguel hoe'];
book.call(lufthansa, 435, 'Sajina Rai');
book.apply(lufthansa, flightData);
console.log(lufthansa);
// Note: This Apply method is not use in modern javaScript anymore, we have new method
// that does the same thing with Spread operator
book.call(lufthansa, ...flightData);
