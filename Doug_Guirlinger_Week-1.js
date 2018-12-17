// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

// function divBy3(num) {
// 	if (num % 3 === 0) {
// 		return `${num} is divisible by three.`
// 	} else {
// 		return `${num} is not divisible by three.`
// 	}
// }
//
// console.log(divBy3(3));

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

// var doug = {
// 	firstName: "Doug",
// 	lastName: "Guirlinger",
// 	favoriteColor: "Blue"
// }
//
// console.log(doug);

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

// var colors = ["red", "blue", "yellow", "green"]

// // Access two values 1:
// console.log(colors[0], colors[1]);

// // Access two values 2:
// function accessTwoValues(fun) {
// 	var twoValues = []
// 	for (let i = 0; i < 2; i++) {
// 		twoValues.push(fun[i])
// 	}
// 	return twoValues
// }
//
// console.log(accessTwoValues(colors));

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

// function alphabetSoup(str) {
// 	str = str.split("").sort().join("")
// 	return str;
// }
//
// console.log(alphabetSoup("hooplah"));

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

// var nums = [1, 5, 88, 2, 5, 42, 57, 101]
//
// var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

// function pair(howMany) {
//
// }

// function combineValues(arr1, arr2, index) {
	// return `${arr1[index]} ${arr2[index]}`
// }
//
// console.log(combineValues(nums, nouns, 1));

// function combineValuesArray(arr1, arr2, numberOfValues) {
// 	var combinedArray = []
// 	for (let i = 0; i < numberOfValues; i++) {
// 		combinedArray.push(`${arr1[i]} ${arr2[i]}`)
// 	}
// 	return combinedArray
// }
//
// console.log(combineValuesArray(nums, nouns, 8));






// arr1.length - (9 % 8)
