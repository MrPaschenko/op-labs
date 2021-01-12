'use strict';

const array = [];

function isEven(num) {
  return !(num % 2);
}

function range(start, end) {
  const interval = end - start;

  for (let i = 0; i <= interval / 2; i++) {
    if (isEven(start)) {
      array[i] = start;
    } else {
      i--;
    }
    start++;
  }
  return array;
}

console.log(range(15, 30)); // [16, 18.. 30]
