// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const keys = Object.keys(obj);
  const initialValue = obj[keys[0]];

  console.log(`the initial value is ${initialValue}`);
  let matching = true;
  // const leafCheck = (object) => {
  //   const vals = [];
  //   const leafs = Object.keys(object);
  //   console.log(leafs);
  //   checkMatchingLeaves(Object.values(leafs));
  // };
  for (let i = 0; i < keys.length; i += 1) {
    // console.log(typeof obj[keys[i]] === 'object');
    if (typeof obj[keys[i]] === 'object') {
      return checkMatchingLeaves(obj[keys[i]]);
    }
    if (obj[keys[i]] !== initialValue) {
      matching = false;
      return matching;
    }
  }
  // console.log(keys);
  // console.log(matching);
  return matching;
};

/* Stretch Alogorithm */
// const checkMatchingLeaves = (obj) => {
  // initialize some value...
  // initialize some flag.. boolean.
  // initialize some helper function and pass obj... leaf checker recursive function
    // check all the keys = this is a hint......for loop of some kind
    // if a key is an object && initial value is undef
      // assign value
    // if a value is an object ==> recurse
    // if a value is found, and it doesn't match our initial value
    // trip our flag to false
    // return;
  // return true/false
// };


/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
