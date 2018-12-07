// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

function numCheck(number) {
  if (number % 3 === 0) {
    return number + " is divisible by three."
  } else if (number % 3 > 0) {
    return number + " is NOT divisible by three."
  } else {
    return "Please enter valid numbers."
  }
}

// is divisible
console.log(numCheck(12));

// is not divisible
console.log(numCheck(8));

// "else" catch-all message
console.log(numCheck("blah blah"));






// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var steven = {
  name: "Steven",
  gender: "male",
  age: 31,
  location: "San Diego"
}

console.log("Hi, my name is " + steven.name + ". I'm a " + steven.age + " year old " + steven.gender + " who lives in " + steven.location + ".");






// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var array = ["apple", "orange", "banana", "grape"]

// method #1 - using a variable
var identify = array[2] + " " + array[3]
console.log(identify);

// method #2 - destructuring
var [apple, orange, banana, grape] = array
console.log(apple, orange);






// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
  var splitToArray = str.split("")
  var alphabetize = splitToArray.sort()
  var joinToString = alphabetize.join("")
  return joinToString;
}
console.log(AlphabetSoup("hooplah"));






// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

// output of the first function should be: "1 ducks"

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

function output(){
	for (i = 0; i < (nums.length > nouns.length ? nums.length : nouns.length); i++) {
		var output = nums[i] + " " + nouns[i]
		console.log(output)
	} if (nums.length != nouns.length){
		console.log("Please input equal amounts of data in both arrays.");
	}
}
output()
