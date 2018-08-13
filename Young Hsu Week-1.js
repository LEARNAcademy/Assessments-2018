// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
function isDivisibleBy3(number){
	if(number%3 === 0){
		console.log(number, " is divisible by three")
	} else {
		console.log(number, " is not divisible by three")
	}
}

console.log(isDivisibleBy3(30))
console.log(isDivisibleBy3(31))


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
console.log(youngHsu = { favoriteSport: "basketball", favoriteBootcamp: "LEARN Academy", favoriteDrink: "Barley Tea"})
// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
myArray = [4, 3, "Hocus Pocus", true]
console.log(myArray[1])
console.log(myArray.pop())
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var array = str.split("")
	console.log(array)
	array = array.sort()
	console.log(array)
	str = array.join("")
	console.log(str)
	return str;
}

// keep this function call here
AlphabetSoup("fhasdjflkhasdf");

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

for (var i = 0; i < nums.length; i++){
	console.log(`${nums[i]} ${nouns[i]}`);
}

// To accomodate for arrays of different lengths, set the condition for statement 2 of the for loop to be i < array.length where array is the longer of the two arrays. Will need to deal with the situation where one array is shorter than the other.
