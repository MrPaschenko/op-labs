'use strict';

function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return Math.pow(x, 2);
}

function cube(x) {
  return Math.pow(x, 3);
}

function calculate(max) {
  const array = [];
  for (let i = 0; i < max; i++) {
    array[i] = average(square(i), cube(i));
  }
  return array;
}

console.log(calculate(9)); // [0, 1, 6... 288]
