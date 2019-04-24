'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    //console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  let solutionArray = solution.split('')
  let guessArray = guess.split('')
  let correctLetterLocations = 0;
  let correctLetters = 0;
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations = correctLetterLocations + 1;
      solutionArray[i] = null;
    }
  }
  //console.log(correctLetterLocations);
  //console.log(solutionArray);
  
  for (let j = 0; j < solutionArray.length; j++) {
    let targetIndex = solutionArray.indexOf(guessArray[j]);
    if (targetIndex > -1) {
      correctLetters = correctLetters + 1;  
    }
  }
  //console.log(correctLetters);
  let hint = correctLetterLocations + '-' + correctLetters;
  console.log(hint);
}

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  if (guess === solution) {
    console.log('You guessed it!')
  } else {
    generateHint(solution, guess)
    console.log('Guess again')
    board += 1;
  }
  if (board.length == 10) {
    console.log(`You ran out of turns! The solution was: ${solution}`)
    return 
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
