// for debugging - displays errors in the console
'use strict';

// to automate repetitive tasks using loop
// for loop
// i is the standard for 'counter' variable name in js
// counter initialization, condition & iteration-counter update
for (let i = 1; i <= 10; i += 2) {
  // for loop keeps running while condition is TRUE
  console.log(i); // print the counter
}

// normal array
const person = ['Rupak', 'Indira', 'Miguel'];

// without loop, we would do this
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// adding in empty array
// normal way types[0] = 'string'
const types = [];

for (let i = 0; i < person.length; i++) {
  // reading/printing all the values in array - names
  console.log(person[i], typeof person[i]);
  // using 'counter' variable here to retrieve all the elements of the array
  // instead of indexes like above

  // filling/adding typeof values in new empty array above loop
  // types[i] = typeof person[i];

  // same as above
  // we can also use push method to fill in array
  types.push(typeof person[i]);
}
console.log(types);
console.log('-------------------------');

// common operation
const birthYears = [1985, 1987, 1963, 1969];

// we are going to loop through years and fill up this array
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2021 - birthYears[i]);
}
console.log(ages);
console.log('----------------------');

//  continue & break statements
let data = ['Rupak', 'Indira', 'Miguel', 1985, false, 'cool']

for (let i = 0; i < data.length; i++) {
  // if value of our array is not string, skip it
  if (typeof data[i] !== 'string') continue;
  
  console.log(data[i])
}
console.log('---------------------')

for (let i = 0; i < data.length; i++) {
  // if value of our array is not string, stop the loop / get out of loop
  if (typeof data[i] !== 'string') break;
  
  console.log(data[i])
}
console.log('---------------------')

// NOTE: WHILE LOOP
// this loop will run while the given condition is true
let i = 1; // counter initialization
while (i <= 10) { // counter condition
  console.log(i)
  i++; //counter increment
}

// Both for..of and for..in statements iterate over lists;
// the values iterated on are different though, for..in returns a list of keys on the object being iterated,
// whereas for..of returns a list of values of the numeric properties of the object being iterated.
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // 0  1 2
}

for (let i of list) {
  console.log(i); // 4 5 6
}

console.log('---------------------')
// for (expression 1; expression 2; expression 3) {}
// Expression 1 is the initial value which gets executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 increases the initial value (i++) each time the code block in the loop has been executed.

// for (let i = 1; i <= 10; i++) {
//   console.log('Hello: ', i);
// }

// increment by 3
// for (let i = 1; i <= 10; i += 3) {
//   console.log('Hello: ', i);
// }

// square
for (let num = 1; num <= 10; num++) {
  console.log(`${num}x${num} = ${num * num}`);
}

// reverse - decrement by 10
for (let num = 50; num >= 0; num -= 10) {
  console.log(num);
}

// array
const scores = [2, 4, 6, 2, 5];

// index is less than 5 since it starts at 0
for (let i = 0; i < scores.length; i++) {
  console.log(i, scores[i]);
}

console.log('----------------------------------');

scores.forEach((item, i) => {
  console.log(i, item);
});

// array with objects
const students = [
  {
    firstName: 'Rupak',
    grade: 86,
  },
  {
    firstName: 'Indira',
    grade: 96,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].firstName} scored ${students[i].grade}`);
}

// Strings
const word = 'five';
// since the index starts at 0
// console.log(word.length - 1);

let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord = reversedWord + word[i];
}

console.log(reversedWord);

console.log('same as above');

const wordArr = word.split('');
console.log(wordArr.reverse().join(''));

// Nested loops
for (let i = 1; i <= 10; i++) {
  console.log('OUTER LOOP:', i);

  // this loop does the full cycle
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   INNER LOOP', j);
  }
}

// sum
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i]; // 0 1 2 3
  console.log(row);

  // this loop does the full cycle
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    totalScore += row[j];
  }
}

console.log(totalScore);

console.log('--------------------------------------------');

let j = 0;
// this kind of condition is good to use with for loop
// while loop is similar to if statement but with loop
while (j <= 5) {
  console.log(j);
  j++;
}



// while loop is great to use when you don't how many times to run
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  // note - we need to eventually make this condition false to stop the loop
  console.log('Guess', guess);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`);



