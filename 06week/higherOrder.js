'use strict';

const assert = require('assert');

let arr = [10, 20, 30, 40, 50];

function map(arr, callback) {
  // create an empty array to store the looped through elements
  const newArr = [];
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // the callback takes the number in the array
    // save it to variable element
    let elements  = callback(arr[i]);
    // push all of the saved elements into the new array
    newArr.push(elements);
  }
  // return a new array
  return newArr;
}

// const mapIt = map(arr, function(n) {
//   n = n * 2
//   return n;
// });

const mapIt = map(arr, (n) => { n = n; return n});
console.log(mapIt);

function filter(array, callback, thisObject) {
  var filteredArray = [];
  var filterCallback = callback;
if (thisObject) {
    filterCallback = callback.bind(thisObject);
  }
for (var i = 0; i < array.length; i++) {
    if (filterCallback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
return filteredArray;
}

function reduce(arr, callback, accumulator) {
  accumulator = accumulator || 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      accumulator = accumulator + arr[i];
    } else if (typeof arr == 'object') {
      for (let index in arr[i]) {
      accumulator = accumulator + arr[i][index];
      }
    }
    callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}