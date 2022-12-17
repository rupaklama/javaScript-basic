// function declaration with function keyword
function logger() {
  console.log('log output');
}

// dice roll void function
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

// function lets us create reusable code
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

// args - inputs to a function
throwDice(5);

// param variable
function square(num) {
  console.log(num * num);
}

// return statement - built in method to return/output value to use it
function sum(x, y) {
  return x + y;
}

// multiple returns
function isPurple(color) {
  if (color.toLowerCase().trim() === 'purple') {
    return true;
  }

  return false;
}

function isPurpleBoolean(color) {
  // '===' is a boolean expression
  return color.toLowerCase().trim() === 'purple';
}

// password validator
function isValidPassword(password, username) {
  // if (password.length < 8) return false;
  // if (password.indexOf(' ') !== -1) return false;
  // if (password.indexOf(username) !== -1) return false;

  // return true;

  // note - just want one of it to be true
  // if (
  //   password.length < 8 ||
  //   password.indexOf(' ') !== -1 ||
  //   password.indexOf(username) !== -1
  // )
  //   return false;
  // return true;

  // boolean variables, comparison operators return a boolean value
  const isShort = password.length < 8; // false
  const hasSpace = password.indexOf(' ') !== -1;
  const hasUsername = password.indexOf(username) !== -1;

  // if (isShort || hasSpace || hasUsername) return false;
  // return true;

  // if (!isShort && !hasSpace && !hasUsername) return true;
  // return false;

  return !isShort && !hasSpace && !hasUsername;
}

console.log(isValidPassword('testtest', 'admin'));

// average in an array
function calcAverage(numArr) {
  // const total = numArr.reduce((acc, current) => acc + current);
  // const average = total / numArr.length;
  // return average;

  let total = 0;

  for (let num of numArr) {
    total += num;
  }

  return total / numArr.length;
}

console.log(calcAverage([2, 3, 3, 5, 7, 10]));

// pangram is a sentence that contains every letter of the alphabet
function isPangram(letters) {
  const lowercaseLetters = letters.toLowerCase();

  // check to see if every character is in the sentence by finding the index
  for (let char of 'abcdefghijklmanopqrstuvwxyz') {
    // console.log(char, letters.indexOf(char));

    // if character's index not found in the sentence, then it is missing
    // if (lowercaseLetters.indexOf(char) === -1) {
    //   return false;
    // }

    // note - easier to read
    if (!lowercaseLetters.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// returns a random playing card object
// reusable function to return random element from array
function random(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  // const valueIdx = Math.floor(Math.random() * values.length);
  // const value = values[valueIdx];

  const suits = ['club', 'spade', 'heart', 'diamond'];
  // const suitIdx = Math.floor(Math.random() * suits.length);
  // const suit = suits[suitIdx];

  return {
    value: random(values),
    suite: random(suits),
  };
}
