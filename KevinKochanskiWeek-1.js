// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
function divThree(number){
	if ((number % 3) == 0){
		return(`${number} is divisible by three.`)
	} else {
		return(`${number} is not divisible by three.`)
	}
}
console.log(divThree(10));

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var Kevin = {hair: 'brown', originCity: 'Baltimore', age: 40}
//console.log(Kevin);


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var cities = ['Baltimore', 'San Diego', 'Atlanta', 'New York']
// First Method:
var cities2 = cities[1] + ", " + cities[2];
console.log(cities2);
// Second Method (same two cities):
var cities3 = cities.splice(1,2);
console.log(cities3);




// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var word = str.split("");
	var wordSorted = word.sort();
	var str = wordSorted.join("");
	return str
}

// keep this function call here
console.log(AlphabetSoup("learn"));
AlphabetSoup("learn");


// 5. Given the arrays below, use a for loop to print one value from each array concatenated together.


var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var resultArray = [];

// output of the first function should be: "1 ducks"

function comboList(arr1, arr2){
	for (var i = 0; i < arr1.length; i++)
	console.log(arr1[i] + " " + arr2[i]);
};

comboList(nums, nouns);

//NOTE: this commented out works but I looked it up...SEE IF I CAN GET BELOW TO WORK
// for (var i = 0, j = nouns.length; i < j; i++){
// resultArray.push(nums[i] + " " + nouns[i]);
// }
// for (var i = 0; i < nums.length; i++){
// }
// 	for (var j = 0; j < nouns.length; j++){
// 		resultArray.push(nums[i] + " " + nouns[]);
// 	}
//This is giving what should be nums as 'undefined'

console.log(resultArray);

// for (i = 0; i < nums.length; i++) {
// 	output += nums[i] + " " +nouns[i] + "\n";
// }
// console.log(output);

// How would your code need to change to accomodate arrays of different lengths?
//NOTE: This question isn't clear about what the expected output should be, but assuming that it would assign a num element to each noun element as requested, you would just use the length of the shorter array for the for loops and the excess elements in the longer array would go unused.
