'use strict';

const matrix = [];

function range(start, end) {
  const interval = end - start;
  for (let i = 0; i <= interval; i++) {
    matrix[i] = start;
    start++;
  }
  return matrix;
}

console.log(range(15, 30));
