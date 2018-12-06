// console.log("trabajas?");

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

// since this will be a factory, I want several variables to ensure this function will work properly.

var usersNumber = 3
var usersNumber2 = 6
var usersNumber3 = 11
var usersNumber4 = 15
var usersNumber5 = 5
var usersNumber6 = -9

//creating generic function.  Arguement will be used to point to the variables to the if/else statement.

function number(numObj) {

	if (numObj % 3 === 0) { // test and result if divisable by 3
		console.log(numObj, "is divisiable by three")

	}	else { // test and result if not divisable by 3
		console.log(numObj, "is not divisiable by three")
	}

}

// calling to ensure the function works.  I've tested to see if the funciton I've created is generic enugh to make it a "factory"

number(usersNumber)
number(usersNumber2)
number(usersNumber3)
number(usersNumber4)
number(usersNumber5)
number(usersNumber6)

// note that this function does not produce the correct response when you input a zero.

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

// function that creates a new person

function newHomoSapiens(newHeight, newHairColor, newNativeLanguage, newSkillz) {
	return {
		height: newHeight,
		hairColor: newHairColor,
		nativeLanguance: newNativeLanguage,
		skillz: newSkillz
	}
}

// creating variable with my name and atributes

var danielLagos = newHomoSapiens("5-8", "Brown", "Spanish", "Ninja Master")

// testing if the code works.  You all didn't know I was a Ninja, did you!!!
console.log(danielLagos);

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

// creating array with 4 items

var fourItems = ["north", "Iwori", "Oche", 8]


// testing if my array works.  Comment:  test passed
// console.log(fourItems);


// standard method of referencing an index within an array.  executed twice to access two values.  in this case the first and second items in the array.
console.log(fourItems[0]);
console.log(fourItems[1]);

// this is not what I was asked to do, I am just playing with the features of .indexOf
// console.log(fourItems.indexOf(8))

// going to use a loop to print out two vallues of the array.  running the loop twice

i = 0
while (i <= 1) {
	console.log(fourItems[i])
	i++
}

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

var word = "hooplah"

// Output:"ahhloop"

function AlphabetSoup(str) {
		// convert to an array

	wordArr = str.split("")

	// sorts into alphabetical
	wordArr.sort()
	// new array joined together with no commas
	var newArr = wordArr.join("")
	return newArr
}

// keep this function call here

// console.log(AlphabetSoup(word))

// success!!!  output is" ahhloop"


// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// generic function that accepts the two arrays
function pairArr(arrOne, arrTwo) {
	for (let i = 0; i < arrOne.length; i++) {
		console.log(arrOne[i], arrTwo[i])
	}
}

pairArr(nums, nouns)

// output of the first function should be: "1 ducks"
