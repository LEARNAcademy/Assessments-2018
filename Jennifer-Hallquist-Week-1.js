// 1. Write an anonymous function that takes one argument of type number and
//    decides if that number is evenly divisble by three or not. If it is, print
//    the number and "is divisible by three". If it is not, print that the
//    number "is not divisble by three".

const isNumber = (num) => {
  return typeof num === 'number';
};

const isDivisibleByThree = (num) => {
  if (isNumber(num)) {
    if (num % 3 === 0) {
      console.log(`${num} is divisible by three.`);
    } else {
      console.log(`${num} is not divisible by three.`);
    }
  } else {
    console.log(`${num} is not a number. Try again.`);
  }
};

isDivisibleByThree(15);
isDivisibleByThree(22);
isDivisibleByThree(-21);
isDivisibleByThree(-33);
isDivisibleByThree('hey');
isDivisibleByThree([3, 6, 9]);
isDivisibleByThree(false);

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

console.log(jen.age); // 27
console.log(jen.siblings[0].name); // Anthony

// 3. Create an array with at least 4 items inside it. Show how to access two
//    values from the array in two different ways.

let colors = ['magenta', 'violet', 'fushia', 'lavender'];

console.log(colors[0]); // magenta
console.log(colors[colors.length - 1]); // lavender

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed
//    and return a string with the letters in alphabetical order (ie. hello
//    becomes ehllo). Assume no numbers or punctuation symbols will not be
//    included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

let AlphabetSoup = (str) => {
  return str.split('').sort().join();
}

// keep this function call here

// AlphabetSoup(rl());
AlphabetSoup("hello");

// 5. Given the arrays below, use a for loop to print one value from each array
//    concatenated together. How would your code need to change to accomodate
//    arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = [
  "ducks",
  "telephone booth",
  "the enterprise",
  "robots",
  "amazon",
  "eraser",
  "zafod",
  "a"
];

const nums2 = [3, 7, 11];
const nouns2 = ["turkeys", "porkchops"];

const nums3 = [12, 8, 4];
const nouns3 = ["books", "boats", "brains", "barns"];

// output of the first function should be: "1 ducks"

let concatenateArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      console.log(`${array1[i]} ${array2[i]}`);
    }
  }

  if (array1.length > array2.length) {
    for (let j = 0; j < array2.length; j++) {
      console.log(`${array1[j]} ${array2[j]}`);
    }
  } else {
    for (let k = 0; k < array1.length; k++) {
      console.log(`${array1[k]} ${array2[k]}`);
    }
  }
}

concatenateArrays(nums, nouns);
concatenateArrays(nums2, nouns2);
concatenateArrays(nums3, nouns3);
