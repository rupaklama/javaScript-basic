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

// object
const rupak = {
  year: 1985,
  calcAge: function() {
    // when call inside Class method, 'this' refers to an Object
    // console.log(this);
    console.log(2021 - this.year); // same as rupak.year

  }
}

rupak.calcAge()









 
