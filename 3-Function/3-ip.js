'use strict';

let IP1 = '10.0.0.1';

function IPToArray(ip) {
  const tempIP = ip.split('.');
  for (const i in tempIP) {
    tempIP[i] = parseInt(tempIP[i]);
  }
  return tempIP;
}

IP1 = IPToArray(IP1); // array [10, 0, 0, 1]

IP1[0] = IP1[0] << 8 << 8 << 8;
IP1[1] = IP1[1] << 8 << 8;
IP1[2] <<= 8;

// const SUM = IP1[0] + IP1[1] + IP1[2] + IP1[3];

const sum = IP1.reduce((accumulator, value) => accumulator + value, 0);

console.log(sum); // 167772161
