// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
let isDivByThree = function(num) {
	if (num % 3 === 0) {
		console.log(`${num} is divisible by three`);
	} else if (num % 3 === 1) {
		console.log(`${num} is not divisible by three`);
	} else {
		console.log(`"${num}" must be a number`)
	}
}
//TESTS
//isDivByThree(9);
//isDivByThree(7);
//isDivByThree("cat");

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

let leila = {
	first_name: 'Leila',
	age: 26,
	pets: ["G", "Snoop", "Dre"]
}

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

let fruits = ['strawberry', 'orange', 'banana', 'kiwi', 'apple'];
//TESTS
//console.log(fruits[2]);
// console.log(fruits.slice(1, 2).pop());
// console.log(fruits);

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	str = str.split('').sort().join('');
	return str;
}
//TESTS
//console.log(AlphabetSoup("hooplah"));
//console.log(AlphabetSoup("hello"));

// keep this function call here
// AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a", "another1", "another2", "another3"]

// output of the first function should be: "1 ducks"

function concatAttack (arr1, arr2) {
	let biggerArr = (arr1.length > arr2.length ? arr1 : arr2);
	let combinedArr = [];
	for(let i = 0; i < biggerArr.length; i++){
		combinedArr = combinedArr.concat(arr1.slice(i, i+1));
		combinedArr = combinedArr.concat(arr2.slice(i, i+1));
	}
	return combinedArr;
}

//TEST
//console.log(concatAttack(nums, nouns));
