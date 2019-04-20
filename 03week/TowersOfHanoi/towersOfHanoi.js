'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
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
}

function isValid(startStack, endStack) {
  let newStart = startStack.toLowerCase().trim();
  let newEnd = endStack.toLowerCase().trim();
  if (newStart == "a"|| newStart == 'b' || newStart == 'c' && newEnd == 'a' || newEnd == 'b' || newEnd== 'c') { 
    return true;
  } else {
    return false;
  }
}

function isLegal(startStack, endStack) {
  if (stacks[startStack][stacks[startStack].length - 1] < stacks[endStack][stacks[endStack].length - 1] || stacks[endStack][stacks[endStack].length - 1] == undefined && stacks[startStack][stacks[startStack].length - 1]  !== undefined) {
    console.log(stacks[startStack][stacks[startStack].length - 1])
    console.log(stacks[endStack][stacks[endStack].length - 1])
    console.log('working')
    return true
  } else {
    console.log(stacks[startStack][stacks[startStack].length - 1])
    console.log(stacks[endStack][stacks[endStack].length - 1])
    console.log('Invalid move. Start stack is larger than end stack.')
    return false;
  }
}

function checkForWin(endStack) {
  if (stacks[endStack].length == 4) {
    console.log('You Win!')
    return true
  } else return false;
}

function towersOfHanoi(startStack, endStack) {
  if (isValid(startStack, endStack)) {
    if (isLegal(startStack, endStack)) {
      movePiece(startStack, endStack)
      checkForWin(endStack);
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
// add a movePiece() test

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
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}