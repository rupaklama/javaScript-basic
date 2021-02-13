// Closure is a javaScript features that happens automatically
// Closure is an internal property of a Function, it's NOT an Object - can't access it directly
// However, we can take a look at this 'internal Scopes property' in the console.
// Closure automatically happens in certain Situations & we just have to recognize it
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// now booker variable is a function as well - function call
const booker = secureBooking();
booker();
booker();

// NOTE: 'booker' function exists in Global Scope.
// The environment in which the function is created - secureBooking function
// is no longer active since it exited the global execution context.
// BUT still the 'booker' function somehow continues to have access to the VARIABLE - passengerCount
// that was present at the time the 'secureBooking' function was created.
// THAT'S EXACTLY WHAT THE 'CLOSURE' DOES.
// So we can say that the CLOSURE makes the Function remember all variables that EXISTED
// at the function BIRTH PLACE.

// Closure is like a person who doesn’t loose connection to his/her hometown even after leaving hometown
// Everything can be still access by the memory/reference

// Closure is an internal property of a Function, it's NOT an Object - can't access it directly
// However, we can take a look at this internal property - [[Scopes]], where the CLOSURE is defined
// [[]] - meaning we can not access it directly from our code
console.dir(booker);

// NOTE: we DON'T have to return a FUNCTION from ANOTHER Function in order to create a CLOSURE
let f; // not defined inside of function local scope

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// assigning new value to 'f'
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();

// f is a function call - func returning func
// f is defined in Global scope but assigned a value in Local scope but still have access to that variable
// because of CLOSURE
f();

// Re-assigning f function
h();
f();

// CLOSURE in action
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // callback can have access to variable cause of CLOSURE
  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
