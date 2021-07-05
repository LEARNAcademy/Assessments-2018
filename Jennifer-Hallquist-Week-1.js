const assert = require('assert');

// 1. Write an anonymous function that takes one argument of type number and
//    decides if that number is evenly divisble by three or not. If it is, print
//    the number and "is divisible by three". If it is not, print that the
//    number "is not divisble by three".

const isDivisible = 'is divisible by 3';
const notDivisible = 'is not divisible by 3';

const isDivisibleByThree = n => (
  n % 3 === 0 ? `${n} ${isDivisible}` : `${n} ${notDivisible}`
);

assert.equal(isDivisibleByThree(15), '15 is divisible by 3');
assert.equal(isDivisibleByThree(22), '22 is not divisible by 3');
assert.equal(isDivisibleByThree(-15), '-15 is divisible by 3');
assert.equal(isDivisibleByThree('hey'), 'hey is not divisible by 3');

// 2. Write about yourself using an object. Include at least three properties
//    of you and store your object in a variable with your name.

const jen = {
  fullName: 'Jennifer Hallquist',
  age: 27,
  siblings: [
    {
      name: 'Anthony',
      age: 24
    },
    {
      name: 'Amanda',
      age: 25
    }
  ],
  hobbies: ['spoiling her dogs', 'playing video games', 'watching tv']
};

assert.equal(jen.age, 27);
assert.equal(jen.siblings[0].name, 'Anthony');

// 3. Create an array with at least 4 items inside it. Show how to access two
//    values from the array in two different ways.

const colors = ['magenta', 'violet', 'fushia', 'lavender'];

assert.equal(colors[0], 'magenta');
assert.equal(colors.pop(), 'lavender');

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed
//    and return a string with the letters in alphabetical order (ie. hello
//    becomes ehllo). Assume no numbers or punctuation symbols will not be
//    included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

const AlphabetSoup = str => str.toLowerCase().split('').sort().join('');

// keep this function call here
assert.equal(AlphabetSoup('hello'), 'ehllo');
assert.equal(AlphabetSoup('California'), 'aacfiilnor');

// 5. Given the arrays below, use a for loop to print one value from each array
//    concatenated together. How would your code need to change to accomodate
//    arrays of different lengths?

const nums = [1, 5, 88, 2, 5, 42, 57, 101];
const nouns = [
  'ducks',
  'telephone booth',
  'the enterprise',
  'robots',
  'amazon',
  'eraser',
  'zafod',
  'a'
];

const expectedResult = [
  '1 ducks',
  '5 telephone booth',
  '88 the enterprise',
  '2 robots',
  '5 amazon',
  '42 eraser',
  '57 zafod',
  '101 a'
];

const nums2 = [3, 7, 11];
const nouns2 = ['turkeys', 'porkchops'];

const expectedResult2 = [
  '3 turkeys',
  '7 porkchops'
];

const nums3 = [12, 8, 4];
const nouns3 = ['books', 'boats', 'brains', 'barns'];

const expectedResult3 = [
  '12 books',
  '8 boats',
  '4 brains'
];

// output of the first function should be: "1 ducks"

const concatenateArrays = (array1, array2) => {
  const results = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (!array2[i]) return results;
    results.push(`${array1[i]} ${array2[i]}`);
  }

  return results;
};

assert.deepEqual(concatenateArrays(nums, nouns), expectedResult);
assert.deepEqual(concatenateArrays(nums2, nouns2), expectedResult2);
assert.deepEqual(concatenateArrays(nums3, nouns3), expectedResult3);
