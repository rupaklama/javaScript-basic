'use strict';

// making data immutable
// we can't add any new values to it but change the current values directly
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

budget[0].value = 1000;
console.log(budget);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (state, limits, value, description, user = 'jonas') {
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   console.log(spendingLimits[user]);

  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // refactoring above nested code
  // const limit = getLimit(user);

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }

    // const limit = spendingLimits?.[entry.user] ?? 0;

    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (const entry of budget) {
    if (entry.value <= -limit) {
      output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
