// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

function three(num) {
	if (num % 3 == 0) {
		console.log(num + " is divisible by three.")
	} else if (typeof num == "string"){
		console.log("Entry must be a numeral.")
	} else if (num % 3 !== 0) {
		console.log(num + " is not divisible by three.")
	}
}
 three("sjdfh")
 three(333)
 three(67547)

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var adrienne = {
	age: 29,
	petType: "Cat",
	favTV: ["Black Mirror", "Hannibal", "Peaky Blinders"]
}

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var favBooks = ["Count of Monte Cristo", "Tess of the D'urbervilles", "Jude the Obscure", "As Meat Loves Salt", "Wuthering Heights", "Song of Achilles"]

console.log(favBooks[3])
console.log(favBooks.pop())

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
  str = str.split('').sort().join('')
	return str;
}

console.log(AlphabetSoup("the quick brown fox jumps over a lazy dog"))

// keep this function call here

AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod"]

function concatenator(arra, arrb) {
	for (var i = 0; i < arra.length && i < arrb.length; i++) {
		console.log(arra[i] + " " + arrb[i])
	}
}

concatenator(nums, nouns)

// output of the first function should be: "1 ducks"
