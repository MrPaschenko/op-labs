'use strict';

function createUser(name, city) {
  return {
    name,
    city,
  };
}

console.dir(createUser('Marcus Aurelius', 'Roma')); // { name: 'Marcus Aurelius', city: 'Roma' }

