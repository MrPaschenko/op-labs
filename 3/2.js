'use strict';

function random(min, max) {
  if (max === undefined) {
    return Math.round(Math.random() * min);
  } else
    return Math.round(Math.random() * (max - min) + min);
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  const string = [];
  for (let i = 0; i <= length; i++) {
    string[i] = characters[random(characters.length)];
  }
  return string.join('');
}

console.log(generateKey(15, characters));
