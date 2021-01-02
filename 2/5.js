'use strict';

const matrix = [];

function isEven(num) {
  return !(num % 2);
}

function range(start, end) {
  const interval = end - start;

  for (let i = 0; i <= interval / 2; i++) {
    if (isEven(start)) {
      matrix[i] = start;
    } else {
      i--;
    }
    start++;
  }
  return matrix;
}

console.log(range(15, 30));
