'use strict';

const array = [];

function range(start, end) {
  const interval = end - start;
  for (let i = 0; i <= interval; i++) {
    array[i] = start;
    start++;
  }
  return array;
}

console.log(range(15, 30)); // [15, 16... 30]
