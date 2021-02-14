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
const displayMovements = entries => {
  // empty container to start with
  containerMovements.innerHTML = '';

  entries.forEach((entry, i) => {
    const type = entry > 0 ? 'deposit' : 'withdrawal';

    // html template
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type} </div>
     
      <div class="movements__value">${entry}</div>
    </div>`;

    // 'insertAdjacentHTML' methods to ADD to the document which take TWO Arg Strings
    // first arg - position in which we want to attach the html, 'afterbegin': Just inside the element,
    // before its first child
    // second arg - string containing the HTML that we want to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

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
console.log(accounts);
