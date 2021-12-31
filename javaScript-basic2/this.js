'use strict';

// 'this' here refers to Window object when in the Global Scope
console.log(this);

// regular function
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
  // in strict mode, 'this' will refer to undefined when in the Local Scope
};
calcAge(1985);


// arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this);
  // 'this' will refer to window object now since arrow function does not get it's 'this' keyword
  // instead arrow function simply uses 'lexical' this keyword from the Parent function's scope 
  // which is window object on the top in Global Scope - console.log(this);
}
calcAgeArrow(1985)

// Arrow with Object
const name = "Rupak";

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









 
