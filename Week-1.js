// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
function anonymous(x){
	if(x%3 == 0)
	return(x + " " + "is divisible by three");
	else
	return(x + " " + "is not divisible by three");
}

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var laura = {
	lastName:"strom",
	 age:32,
	 eyeColor:"blue"
};
// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var animals = ["dog", "cat", "bird", "horse"]
animals.pop(1);
animals.slice(2);
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var x = str.split("");
		return x.sort().join("");
  }

console.log(AlphabetSoup("hooplah"));

// keep this function call here

AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
