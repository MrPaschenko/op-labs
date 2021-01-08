'use strict';

const getMaxOfArray = array => Math.max.apply(null, array);

function max(...args) {
  const arr = [];
  const tempArr = args[0];

  for (let key = 0; key < tempArr.length; key++) {
    arr.push(getMaxOfArray(tempArr[key]));
  }

  return Math.max(getMaxOfArray(arr));
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
