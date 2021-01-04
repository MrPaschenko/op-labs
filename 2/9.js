'use strict';

const phoneBook = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433',
  },
  {
    name: 'Kyrylo Cholombytko',
    phone: '+380993883922'
  },
  {
    name: 'Marina',
    phone: '+380666666666'
  },
];

function findPhoneByName(name) {
  for (const obj of phoneBook) {
    if (obj.name === name) {
      return obj.phone;
    }
  }
}

console.log(findPhoneByName('Marcus Aurelius'));
