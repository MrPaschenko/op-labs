'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(array) {
  const person = {};
  for (const key in array) {
    const obj = array[key];
    person[key] = obj.died - obj.born;
  }
  return person;
}

console.log(ages(persons));
