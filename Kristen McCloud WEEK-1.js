// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

let divByThree = function(num) {
	if (num % 3 === 0) {
		return `${num} is divisble by 3.`
	} else {
		return `${num} is not divisble by 3.`
	}
};

console.log(divByThree(5));

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

let Kristen = {
	age: 24,
	height: 5.8,
	favoriteFood: "fries"
};

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

let icecreamArr = ["mint", "strawberry", "mocha", "sherbert"];

console.log(icecreamArr.pop());
console.log(icecreamArr.shift());



// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	return str.split('').sort().join('')
}

console.log(AlphabetSoup('macadamia'));
//

// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
//
var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

function NumNoun(nums, nouns) {
	var NumNounA = [];
	for (var i = 0; i < nums.length; i++) {
		 NumNounA.push(`${nums[i]} ${nouns[i]}`)
		 
	}

	return NumNounA;
}
console.log(NumNoun(nums, nouns));
