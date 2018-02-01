// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var num
function modulo(num) {
	if (num % 3 == 0) {
		return console.log(num + " is divisible by three")
	} else {
		console.log(num + " is not divisible by three")
	}
}
// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var Jack = {
	hair:"blonde",
	height:"5 feet 11 inches",
	glasses: true
}
// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

	//method 1
var array = [10, "LEARN", false, "Android ftw"]
	for (var i = 0; i < array.length; i++) {
		if (i == 1 || i == 3) {
			console.log(array[i])
		}
	}

	//method 2
	function printArray(num1, num2) {
		console.log(array[num1])
		console.log(array[num2])
	}
//Get Output
printArray(1, 3)
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

    // your code goes here
		str = str.split('').sort().join('')
	return str;
}

// keep this function call here

AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

var len = 0

function printConcat(nums, nouns, len) {
	if (nums.length >= nouns.length) {
		len = nums.length
	} else {
		len = nouns.length
	}

	for (var i = 0; i < len; i++) {
		console.log(nums[i] + " " + nouns[i])
	}
}

//Get Output
printConcat(nums, nouns, len)
// output of the first function should be: "1 ducks"
