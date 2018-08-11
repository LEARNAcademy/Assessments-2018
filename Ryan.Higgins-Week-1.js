// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var byThree = function(number) {
  if (number % 3 === 0) {
    console.log(`${number} is divisible by three.`)
  } else {
    console.log(`${number} is not divisible by three.`)
  }
}
byThree(3)
byThree(4)
byThree(13)


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var ryanH = {
  height: '6 foot',
  age: 31,
  personality: 'ESTP'
}
console.log(ryanH.height)
console.log(ryanH.age)
console.log(ryanH.personality)


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var array = [32, 11, 14, 90]
//logging a specific index of the array
console.log(array[1])
//creating variable for an index of the array
var number = array[3];
console.log(number)


// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

  // your code goes here
  //create variable to make string into array
  var arr = str.split('');
  //sort array to get it in alphabetical order
  arr.sort()
  //return the joined array and trim removes whitespace
  return arr.join('').trim();
};

// keep this function call here

AlphabetSoup(('hooplah'));

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a", ]

for (let i = 0; i < nums.length; i++) {
  if (nums.length !== nouns.length) {
    console.log('Error: the arrays are different lengths')
  } else {
    console.log(nums[i] + ' ' + nouns[i])
  }
}



// output of the first function should be: "1 ducks"
