'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// transaction entries
const displayMovements = (entries, sort = false) => {
  // empty container to start with
  containerMovements.innerHTML = '';

  // sorting
  // slice() - since we do not want to sort the original array / mutate data
  // We are using Slice here NOT Spread operator because here we are in the MIDDLE of a CHAIN
  const sortedEntries = sort ? entries.slice().sort((a, b) => a - b) : entries;

  sortedEntries.forEach((entry, i) => {
    const type = entry > 0 ? 'deposit' : 'withdrawal';

    // html template
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
      </div>
     
      <div class="movements__value">${entry}€</div>
    </div>`;

    // 'insertAdjacentHTML' methods to ADD above 'div' into the document which take TWO Arg Strings
    // first arg - position in which we want to attach the html, 'afterbegin': Just inside the element,
    // before its first child
    // second arg - string containing the HTML that we want to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

// Display total balance
const calculateDisplayBalance = account => {
  // accumulator & current element
  const totalBalance = account.movements.reduce((acc, entry) => acc + entry, 0);

  // creating 'balance' property to hold the balance value
  account.balance = totalBalance;
  // displaying in the dom
  labelBalance.textContent = `${account.balance} €`;
};
// calculateDisplayBalance(account1.movements);

// Display total income, expenses & interest
const calculateDisplaySummary = account => {
  const totalIncome = account.movements
    .filter(entry => entry > 0)
    .reduce((acc, entry) => acc + entry, 0);

  // display total income
  labelSumIn.textContent = `${totalIncome}€`;

  const totalExpenses = account.movements
    .filter(entry => entry < 0)
    .reduce((acc, entry) => acc + entry, 0);

  // display total expenses
  labelSumOut.textContent = `${Math.abs(totalExpenses)}€`;

  // calculating total interests
  // adding interest on each deposits, 1.2%
  const addInterest = account.movements
    .filter(entry => entry > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((interest, i, arr) => {
      // console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  // display total interest
  labelSumInterest.textContent = `${addInterest}€`;
};
// calculateDisplaySummary(account1.movements);

const createUsernames = users => {
  // performing SIDE EFFECTS here - doing some work without returning anything
  users.forEach(user => {
    // NOTE: modifying Existing Array State
    // user.username - added a NEW 'username' property with modified initials as a value from below
    user.username = user.owner
      .toLowerCase()
      .split(' ') // method is used to split a string into an array of substrings, and returns the new array
      .map(word => word[0]) // to get first letters of each words in an array
      .join(''); // join() method is use to join the elements of an array into a string
  });
};
createUsernames(accounts);
// console.log(accounts);

// to update all values
const updateUI = account => {
  // display movements
  displayMovements(account.movements);

  // display balance
  calculateDisplayBalance(account);

  // display summary
  calculateDisplaySummary(account);
};
// Event handlers to login
let currentAccount;

// Login user to display balances
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  // to login User, we need find user acc from Accounts array
  // to Find particular WHOLE Object on matching certain property
  // usually the goal of Find method is to find exactly ONE ELEMENT
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  ); // input value
  console.log(currentAccount);

  // verify user to login
  // With 'optional chaining' if certain property doesn't exists then UNDEFINED is return immediately to avoid errors
  // ? - optional operator, only if 'user name' exists then 'pin' input value will be evaluated
  // same as (currentAccount && currentAccount.pin)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI & welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0] // first name
    }!`;

    containerApp.style.opacity = 1;

    // clear input fields
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';

    // same as above
    // value from the right of assignment '' will be pass to left operand
    inputLoginUsername.value = inputLoginPin.value = '';

    // to remove focus input field after login
    // calling blur method to remove focus
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// transfer money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  // to find user receiver to transfer money to
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);

  // clearing out values
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    // transfer account - money out
    currentAccount.movements.push(-amount); // negative value
    // receiver account - money in
    receiverAccount.movements.push(amount); // positive value
  }

  // update UI
  updateUI(currentAccount);
});

// request loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    // some methods return a boolean value
    // returns true if any of the elements in the array pass the test
    // largest entry === 10 % of loan amount
    currentAccount.movements.some(entry => entry >= amount * 0.1)
  ) {
    // add entry
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  // clearing out values
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  // validating user to be current user
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // to find an index of current user object to delete
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // delete account
    // In practice, we use Splice to delete one or more elements in an ORIGINAL ARRAY
    // using splice method to delete current account
    accounts.splice(index, 1); // removing one element in array

    // hide ui
    containerApp.style.opacity = 0;
  }
  // clearing out values
  inputCloseUsername.value = inputClosePin.value = '';
});

// bank total balance of all the users accounts
// so, we need to take 'each object's array' & put it into New Array
// Now, we have new array containing other arrays
// const accountEntries = accounts.map(acc => acc.movements);

// Now, we want just ONE array by adding both the arrays from above
// const allEntries = accountEntries.flat();

// bank total balance
// const overallBalance = allEntries.reduce((acc, entry) => acc + entry, 0);

// NOTE: same as above with CHAINing using flat()
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((accu, entry) => accu + entry, 0);

// NOTE: When using flat() with MAP method, another method - flatMap() got introduced
// at the same time which combines MAP & FLAT method into ONE method to BOOST performance
// NOTE: same as above with CHAINing using flatMap()
const overallBalance = accounts
  .flatMap(acc => acc.movements) // same as map method
  .reduce((accu, entry) => accu + entry, 0);

// state variable
let sorted = false;

// sort entries
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);

  // flipping the value (true to false / false to true) on every time we click the button
  sorted = !sorted;

  // console.log(sorted);
});
