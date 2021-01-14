'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(object) {
  const person = {};
  const keys = Object.keys(object);
  for (const key of keys) {
    const obj = object[key];
    person[key] = obj.died - obj.born;
  }
  return person;
}

console.log(ages(persons)); // { lenin: 54, mao: 83, gandhi: 79, hirohito: 88 }
