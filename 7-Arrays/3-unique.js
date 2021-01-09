'use strict';

function unique(array) {
  const newArray = [];
  for (const value of array) {
    if (!newArray.includes(value)) newArray.push(value);
  }
  return newArray;
}

const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
