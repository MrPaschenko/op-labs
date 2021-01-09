'use strict';

function difference(array1, array2) {
  const newArray = array1;
  for (const value of array2) {
    if (newArray.includes(value)) newArray.splice(newArray.indexOf(value), 1);
  }
  return newArray;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result1 = difference(array1, array2);
console.log(result1);

const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array3, array4);
console.log(result2);
