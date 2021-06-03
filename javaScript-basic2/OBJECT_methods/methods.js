'use strict';

const rupak = {
  firstName: 'Rupak',
  lastName: 'Lama',
  birthYear: 1985,
  job: 'developer',
  friends: ['Indira', 'Robin', 'Miguel'],
  hasDriverLicense: true,

  // es6 Enhanced method
  // calcAge() {
  //   return 2021 - this.birthYear;
  // },

  calcAge() {
    // adding new age property
    this.age = 2021 - this.birthYear;
  },
};

// accessing Object's method with DOT operator
console.log(rupak.calcAge());

// with Bracket notation
console.log(rupak['calcAge']());

// object with new property - age
console.log(rupak);
