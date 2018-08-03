// 1. Write an anonymous function that takes one argument of type number and decides if
// that number is evenly divisble by three or not. If it is, print the number and
// "is divisible by three". If it is not, print that the number "is not divisble by three".
//
function isMultipleOfThree(number) {
	if ( number % 3 === 0 ) {
		return console.log(number + " is divisible by three")
	} else if ( number % 3 > 0 ) {
		return console.log(number + " is not divisible by three")
	}
}

isMultipleOfThree(3)
//
// 2. Write about yourself using an object. Include at least three properties of you
// and store your object in a variable with your name.
//
var marySanAgustin = {
  name: "Mary San Agustin",
  phone: 9492912504,
  birthday: "10-05-83"
}
//
// 3. Create an array with at least 4 items inside it. Show how to access two values
// from the array in two different ways.
//
// method 1 logs the element that exists in the supplied index of the array
//
var oneThruFour = [1, 2, 3, 4]

console.log(oneThruFour[0], oneThruFour[1])

method 2 uses a for loop to iterate through only the firt two elements of the array

for ( i=0; i < 2; i++ ) {
	console.log(oneThruFour[i])
}
//
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed
// and return a string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume no numbers or punctuation symbols will not be included in the parameter.
//
// Input:"hooplah"
// Output:"ahhloop"
//
function alphabetSoup(str) {
//Convert string to array with str.split()
//Sort array with str.sort()
//Convert back array to string
    var strArr = str.split("")
	var arrSorted = strArr.sort()
	var sortedStr = arrSorted.join("")
	return console.log(sortedStr)
}

alphabetSoup("hooplah")
//
// keep this function call here
//
// alphabetSoup(readline())
//
//
// 5. Given the arrays below, use a for loop to print one value from each array concatenated together.

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
//
//For loop should iterate through nums.length to concatenate nums[i] + nouns[i]
//use the length of the longer array for the for loop's conditional statement
//
for( i=0; i < nums.length; i++ ) {
	console.log(nums[i] + " " + nouns[i])
}

// output of the first function should be: "1 ducks"
// How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

//push first elements from each array into new empty arrays
//concat the two new arrays together with .concat()
//convert the concated array to a string with .join()
//use the length of the longer array for the for loop's conditional statement

for( i=0; i < nouns.length; i++ ) {
	var num = []
	var noun = []
	var shiftedNum = nums.shift()
	var shiftedNoun = nouns.shift()
	num.push(shiftedNum)
	noun.push(shiftedNoun)
	var concat = num.concat(noun)
	console.log( concat.join(" ") )
}
