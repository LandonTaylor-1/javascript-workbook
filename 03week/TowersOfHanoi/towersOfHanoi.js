'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = { // an object with 3 arrays
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) { 
  stacks[endStack].push(stacks[startStack].pop());
  // startStack & endStack are parameters being called by the game
  // was able to condense this into once line and remove the need/use of an extra variable
  // it will remove the last item of the startStack array and push it to the end
  // of the endStack array
}

function isValid(startStack, endStack) {
  let newStart = startStack.toLowerCase().trim(); // removing spacing and errors from
  let newEnd = endStack.toLowerCase().trim(); // use of capitalization
  if (newStart == "a"|| newStart == 'b' || newStart == 'c' && newEnd == 'a' || newEnd == 'b' || newEnd== 'c') { 
    // the parameters called must a either a, b or c in the form of a string
    return true;
  } else {
    return false;
  }
}

function isLegal(startStack, endStack) {
  if (stacks[startStack][stacks[startStack].length - 1] < stacks[endStack][stacks[endStack].length - 1] || stacks[endStack][stacks[endStack].length - 1] == undefined && stacks[startStack][stacks[startStack].length - 1] !== undefined) {
    // this is making sure that the last item in the array of the startStack is less than
    // the last item in the array of the endStack. it also checks to ensure that the startStack
    // is not an empty array but the endStack can be.
    // console.log(stacks[startStack][stacks[startStack].length - 1])
    // console.log(stacks[endStack][stacks[endStack].length - 1])
    return true
  } else {
    // console.log(stacks[startStack][stacks[startStack].length - 1])
    // console.log(stacks[endStack][stacks[endStack].length - 1])
    console.log('Invalid move. Start stack is larger than end stack.')
    return false;
  }
}

function checkForWin() {
  // if (stacks[endStack].length == 4) {
  // if (stacks.b.length == 4 || stacks.c.length == 4) {
  if (stacks.b.toString() == '4,3,2,1' || stacks.c.toString() == '4,3,2,1') {
    // check to see if either array b or c has all 4 numbers
    console.log('You Win!');
    return true;
  } else return false;
}

function towersOfHanoi(startStack, endStack) { // our game function just calls our other functions
  if (isValid(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      if (movePiece(startStack, endStack)) {
        if (checkForWin()) {
          console.log('You Win!');
          // return true;
        } else return false;
      } else return false;
    } else return false;
  } else {
    console.log('Invalid input. Please select a, b, or c.');
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
      towersOfHanoi('a', 'c'); // added
      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
      towersOfHanoi('b', 'c'); // added
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
    });
    it('should not be able to move a block', () => { // added
      towersOfHanoi('b', 'a');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
      towersOfHanoi('b', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [], c: [2, 1] });
    });
  });

  describe('#movePiece()', () => { //added
    it('should move the piece', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      stacks = {
        a: [4, 3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal('b', 'c'), true);
    });
    it('should not move the piece', () => {
      stacks = {
        a: [4, 3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal('a', 'c'), false);
      stacks = {
        a: [4, 3],
        b: [],
        c: [2, 1]
      };
      assert.equal(isLegal('b', 'c'), false);
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
      stacks = { // added
        a: [4, 3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('a', 'c'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      stacks = { // added
        a: [4, 3],
        b: [],
        c: [2, 1]
      };
      assert.equal(isLegal('a', 'b'), true);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] }; //added
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [4, 3, 2, 1], b: [], c: [] }; //added
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}