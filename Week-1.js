// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

function anonymous(number) {
	if (number % 3 === 0) {
		console.log(number + " is divisible by three.");
	} else {
		console.log(number + " is not divisble by three");
	}
}
anonymous(9);

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var Rikki = {
	firstName: "Rikki",
	lastName: "Ringgold",
	age: 29,
	gender: "Male",
	ethnicity: "Multiracial",
};

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var array1 = ["burgers", "fries", "soda", "onion rings"];
array1[2];
array1.indexOf("soda");
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
    // your code goes here
	var lettersSplit = str.split('');
	var lettersSort = lettersSplit.sort();
	return lettersSort.join('');
}

// keep this function call here

AlphabetSoup("hooplah");


// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

var joined = nums.concat(nouns);

for(var i = 0; i<joined.length; i++) {
	return console.log(joined);
}



// output of the first function should be: "1 ducks"
