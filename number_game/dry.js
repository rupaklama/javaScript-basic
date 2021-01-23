// Code clean up - DRY code / Refactoring
// Removing duplicate/repeated code

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
'use strict';

// secret number
// Math.trunc() method is used to return the integer part of a floating-point number
// by removing the fractional digits. In other words, Math.trunc() function cuts off the dot and
// the digits to the right of it.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// score update
let score = 20;

// high score will be always greater than 0
let highScore = 0;

// refactoring duplicate display message into Function
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

// The addEventListener() method attaches an event handler to the specified element
// calling 'event listener' method on the button element
// syntax - element.addEventListener(event, Callback function, useCapture)
document.querySelector('.check').addEventListener('click', () => {
  // converting string to number with Number function
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When the input is empty, the value returned is 0 or entering 0 value is also falsey
  // ! operator makes it 'true' changing the boolean value only but the value still remains - 0
  // which allows our if code block to get executed when True

  // when there's no input
  if (!guess) {
    // same as guess === 0
    console.log(!guess);
    // we want this block of code execute when the condition is True
    // ! operator makes guess(falsy value) to True
    // document.querySelector('.message').textContent = 'No number!';

    // NOTE - calling display message function
    displayMessage('No number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // NOTE: This styles will be applied as INLINE-STYLE in the html elements
    // NOTE: querySelector also use to select HTML DOM ELEMENTS
    // applying styles with javaScript in CAMEL CASE
    document.querySelector('body').style.backgroundColor = '#60b347';

    // NOTE: CSS values must be inside the ' ', string value
    // increasing width of a div container which holds the random number
    document.querySelector('.number').style.width = '30rem';

    // if current score is higher than highScore, current score which will be our new high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // NOTE: refactoring code here
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game, sorry.';
      displayMessage('You lost the game, sorry.');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

// to reset game
document.querySelector('.again').addEventListener('click', () => {
  // resetting initial values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // NOTE: This styles will be applied as INLINE-STYLE in the html elements
  // NOTE: querySelector also use to select HTML DOM ELEMENTS
  // applying styles with javaScript in CAMEL CASE
  document.querySelector('body').style.backgroundColor = '#222';

  // NOTE: CSS values must be inside the ' ', string value
  // increasing width of a div container which holds the random number
  document.querySelector('.number').style.width = '15rem';
});
