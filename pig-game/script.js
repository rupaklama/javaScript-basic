'use strict';

// selecting elements

// switch background
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

// player 1 score
const score0El = document.querySelector('#score--0');

// player 2 score
// same as above - not using selector instead just passing the name of id
const score1El = document.getElementById('score--1');

// To hide dice using 'classList' prop by add CSS class 'hidden' to an element
// This property is useful to add, remove and toggle CSS classes on an element.
const diceEl = document.querySelector('.dice');

// player 1 with current score
const currentScorePlayer1 = document.getElementById('current--0');

// player 2 with current score
const currentScorePlayer2 = document.getElementById('current--1');

// start new game
const btnNew = document.querySelector('.btn--new');

// roll dice
const btnRoll = document.querySelector('.btn--roll');

// save score
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// player current score
let currentScore = 0;

// storing scores of both players in an array
// 0 points for both players to start
const scores = [0, 0];
// score of player 1 in index 0
// score of player 2 in index 1

// players - need to keep track which player is the active player
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. Generate a random dice score
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);

  // 2. Display dice score - remove hidden class
  diceEl.classList.remove('hidden');

  // Will manipulate image's src attrib to display image matching randomly generated number
  diceEl.src = `dice-${randomNumber}.png`;

  // 3. Check for score 1:
  if (randomNumber !== 1) {
    // Add Dice Score to the current score
    // currentScore = currentScore + randomNumber;
    currentScore += randomNumber;

    // selecting score dynamically based on the current active player
    // selecting id name dynamically
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // if active player is 0 it will switch to player 1
    // else active player is player 1, it will switch to 0
    activePlayer = activePlayer === 0 ? 1 : 0;

    // switch background
    // toggle adds a class if not there, if class is there it will remove it
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  }
});
