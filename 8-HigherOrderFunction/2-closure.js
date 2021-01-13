'use strict';

// function store(value) {
//   const storage = [value];
//   return () => storage.shift();
// }

const store = value => () => value;

const read = store(5);
const value = read();
console.log(value); // 5
