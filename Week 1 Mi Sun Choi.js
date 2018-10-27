// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisible by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var myFunc = function(num) {
	if (num % 3 == 0) {
		console.log(`${num} is divisible by three`)
	} else {
		console.log(`${num} is NOT divisible by three`);
	}
}
myFunc(3)


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.


var Miric = {
	glasses: true,
	ethnicity: "Asian",
	ownsFish: false

}

console.log(Miric)

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var myArr = ["Ironman", "Matrix", "Infinity War", "Crazy Rich Asians"]

console.log(myArr[0], myArr[1])

let [movie1, movie2] = myArr
console.log(movie1, movie2)

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.
//
// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	str = str.split('').sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} ).join('')
	// str = str.sort(function(a,b) {return (a > b) ? 1 : ((b > a) ? -1 : 0);} )

	return str;
}

// keep this function call here

AlphabetSoup("hooplah");
console.log(AlphabetSoup('hhoplah'))

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?


var nums = [1, 5, 88, 2, 5, 42, 57, 101, 4,6,8,8,53]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a", "b", "c", "d"]


function concatArray(arr, arr1) {
  for (var i = 0; i < ((arr.length > arr1.length) ? arr.length : arr1.length); i++) {
		console.log(arr[i% arr.length] + " " + arr1[i% arr1.length])

		}
	}

concatArray(nums, nouns)


console.log(concatArray(nums, nouns))

// output of the first function should be: "1 ducks"
