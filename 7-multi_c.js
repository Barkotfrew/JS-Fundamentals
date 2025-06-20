#!/usr/bin/node

const arg = process.argv[2];

if (arg !== undefined) {
  const x = parseInt(arg);
  if (!isNaN(x)) {
    for (let i = 0; i < x; i++) {
      console.log('C is fun');
    }
  } else {
    console.log('Missing number of occurrences');
  }
}
