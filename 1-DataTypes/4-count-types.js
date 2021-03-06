'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

const hash = {
  number: 0,
  string: 0,
  boolean: 0,
};

// for (let value of matrix) {
//   if (typeof value === 'number') {
//     hash.number++;
//   } else if (typeof value === 'string') {
//     hash.string++;
//   } else if (typeof value === 'boolean') {
//     hash.boolean++;
//   }
// }

for (const value of array) {
  hash[`${typeof value}`]++;
}

console.log(hash); // { number: 3, string: 2, boolean: 3 }
