'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-02-25T17:01:17.194Z',
    '2021-02-26T23:36:17.929Z',
    '2021-02-27T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

// to format date
const formatMovementDate = date => {
  // 1000 converts milliseconds to seconds, then 60 to minutes, then 60 to hours, then 24 to convert in days
  // NOTE: Above is because there are 24 hours in a day, 60 minutes in an hour,
  // 60 seconds in 1 minute, 1000 milliseconds in 1 Second
  const calcDaysPassed = (date1, date2) =>
    // math.abs to get an absolute value which is to remove negative sign before number
    // so to get positive value
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  // to get date formatted into string like today, yesterday or day before yesterday
  // NOTE: first ROUND ALL THE values above
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today'; // no day has passed
  if (daysPassed === 1) return 'Yesterday'; // 1 day has passed
  // days passed within the last week
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // return number of days
  else {
    // only if more than 7 days have passed, we want to return actual DATE
    const month = `${date.getMonth() + 1}`.padStart(2, 0); // month
    const day = `${date.getDate()}`.padStart(2, 0); // day - display 0 if a number is single digit
    const year = date.getFullYear(); // full year

    return `${month}/${day}/${year}`;
  }
};

// to format currency
const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// transaction entries
const displayMovements = (account, sort = false) => {
  // empty container to start with
  containerMovements.innerHTML = '';

  // sorting
  // slice() - since we do not want to sort the original array / mutate data
  // We are using Slice here NOT Spread operator because here we are in the MIDDLE of a CHAIN
  const sortedEntries = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  sortedEntries.forEach((entry, i) => {
    const type = entry > 0 ? 'deposit' : 'withdrawal';

    // Here, we are looping over the movements & now we also need to loop over the movementsDates
    // It's not a problem since we already have an INDEX here
    // NOTE - COMMON TECHNIQUE LOOPING OVER TWO ARRAY AT SAME TIME
    const date = new Date(account.movementsDates[i]); // current movement date

    const displayDate = formatMovementDate(date);

    const formattedCurrency = formatCurrency(entry, 'USD');

    // html template
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}
      </div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedCurrency}</div>
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
  labelBalance.textContent = formatCurrency(account.balance, 'USD');
};
// calculateDisplayBalance(account1.movements);

// Display total income, expenses & interest
const calculateDisplaySummary = account => {
  const totalIncome = account.movements
    .filter(entry => entry > 0)
    .reduce((acc, entry) => acc + entry, 0);

  // display total income
  labelSumIn.textContent = formatCurrency(totalIncome, 'USD');

  const totalExpenses = account.movements
    .filter(entry => entry < 0)
    .reduce((acc, entry) => acc + entry, 0);

  // display total expenses
  labelSumOut.textContent = formatCurrency(totalExpenses, 'USD');

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
  labelSumInterest.textContent = formatCurrency(addInterest, 'USD');
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
  displayMovements(account);

  // display balance
  calculateDisplayBalance(account);

  // display summary
  calculateDisplaySummary(account);
};
// Event handlers to login
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

// logout timer
const startLogoutTimer = () => {
  const tick = () => {
    // Divide the number of seconds by 60 to convert seconds to minutes
    const min = String(Math.trunc(time / 60)).padStart(2, 0);

    // seconds
    const sec = String(time % 60).padStart(2, 0);

    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when timer is up or 0 seconds, stop timer & log out user
    if (time === 0) {
      // clearInterval() method uses the variable returned from setInterval()
      clearInterval(timer); // stop the timer

      labelWelcome.textContent = 'Log in to get started';

      containerApp.style.opacity = 0;
    }

    // decrease timer by 1 sec
    // time = time - 1;
    time--;
  };

  // set time to 5 mins
  let time = 60; // starting with 60 seconds

  // call the timer every seconds
  tick(); // now the timer gets call right away & every 1 sec
  const timer = setInterval(tick, 1000);

  // to stop timer in other parts of code we need variable - timer
  return timer;
};

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

    // current date
    // const now = new Date();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // month
    // const day = `${now.getDate()}`.padStart(2, 0); // day - display 0 if a number is single digit
    // const year = now.getFullYear(); // full year
    // const hour = now.getHours(); // hour
    // const min = now.getMinutes(); // minutes

    // Simply replacing above with Internationalization API

    // EXPERIMENTING WITH Internationalization API to format date in US
    const now = new Date();

    // option object for Time with Dates
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      // On month - instead of number or another option is '2-digit'
      month: 'long', // long returns February 27
      year: 'numeric', // or '2-digit'

      // On weekday, we can also experiment with 'short or narrow'
      weekday: 'long', //  Saturday, February 27, 2021, 10:35 AM
    };

    // NOTE: IN MANY SITUATIONS, IT ACTUALLY DOES NOT MAKE SENSE TO DEFINE MANUALLY BUT
    // INSTEAD TO GET IT SIMPLY FROM THE USER BROWSERS
    // To get Current Browser's Locale - language
    const locale = navigator.language;
    console.log(locale); // en-US

    // need to pass arg String - locale which is the Language - Country
    // DateTimeFormat() for dates & times
    // format() - pass in a Date that we want to format
    // first arg is current browser's locale - language
    // Second arg is the option object to formate the date
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );
    // DateTimeFormat() - Second arg to format Time pass with 'options object' to this method

    // month/day/year
    // labelDate.textContent = `${month}/${day}/${year}, ${hour}:${min}`;

    // clear input fields
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';

    // same as above
    // value from the right of assignment '' will be pass to left operand
    inputLoginUsername.value = inputLoginPin.value = '';

    // to remove focus input field after login
    // calling blur method to remove focus
    inputLoginPin.blur();

    // clearing out timer if already running
    if (timer) clearInterval(timer);

    // calling the logout timer
    // Resetting timer when another user logs in
    timer = startLogoutTimer();

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

  // Add transfer date
  currentAccount.movementsDates.push(new Date().toISOString());
  receiverAccount.movementsDates.push(new Date().toISOString());

  // update UI
  updateUI(currentAccount);

  // Reset timer - basically clear interval with a timer that was defined before
  clearInterval(timer);

  // start new Timer when user  request a loan
  timer = startLogoutTimer();
});

// request loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();

  // NOTE- Math.round() does type coercion itself,
  // no need to convert to a number
  const amount = Math.round(inputLoanAmount.value);

  if (
    amount > 0 &&
    // some methods return a boolean value
    // returns true if any of the elements in the array pass the test
    // largest entry === 10 % of loan amount
    currentAccount.movements.some(entry => entry >= amount * 0.1)
  )
    setTimeout(() => {
      // add entry
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // update UI
      updateUI(currentAccount);
    }, 2500);

  // Reset timer - basically clear interval with a timer that was defined before
  clearInterval(timer);

  // start new Timer when user transfer
  timer = startLogoutTimer();

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
  displayMovements(currentAccount, !sorted);

  // flipping the value (true to false / false to true) on every time we click the button
  sorted = !sorted;

  // console.log(sorted);
});
