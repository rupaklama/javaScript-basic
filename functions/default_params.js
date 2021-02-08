'use strict';

// default args for parameters with ES 6
const createBooking = (flightNum, numPassengers = 2, price = 199) => {
  console.log(flightNum, numPassengers, price);
};

createBooking('LH123');
createBooking('LH123', 2, 500); // over-riding default values
createBooking('LH123', 2, 500);
