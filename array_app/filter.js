'use strict';

// Filter method is to select certain items of an array
// Elements result in false condition, will be not included in an new array
// Here, we are filtering out negative values to get only positive values

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(entry => entry > 0);
console.log(deposits);

const withdrawals = movements.filter(entry => entry < 0);
console.log(withdrawals);
