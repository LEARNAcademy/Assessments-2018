// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var divideByThree = (num) => {
	if (num % 3 === 0) {
		return (num + " is divisible by three.")
	} else {
    return (num + " is not divisible by three")
  }
}
//TEST
console.log(divideByThree(6))
console.log(divideByThree(7))


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var Madison = {
  age: 24,
  eyes: "green",
	hair: "blonde",
}


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

var firstDay = days[0];
var findThurs = days.filter(day => day.length > 4)

console.log(firstDay)
console.log(findThurs)

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var letters = str.split("")
	var sorted = letters.sort()
	return sorted.join("")
}

console.log(AlphabetSoup("frog"))

// keep this function call here
// AlphabetSoup(readline());       << giving error message on terminal

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a", "a"]


//if arrays are different sizes, I could use console.assert.

// output of the first function should be: "1 ducks"

for (i = 0; i < nums.length; i++) {
	console.log(nums[i] + " " + nouns[i])
}
