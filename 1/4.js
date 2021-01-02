'use strict';

const matrix = [true, 'hello', 5, 12, -200, false, false, 'word'];

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

for (const value of matrix) {
  hash[`${typeof value}`]++;
}

console.log(hash);
