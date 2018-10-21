// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.

var testCase = ["one", "two", "three", "four"]

var reverseArray = (list) =>  list.reverse()

console.log(testCase)
let newArr = reverseArray(testCase)
console.log(newArr)

// 2. Given the object below, fill in how to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log just the bell from the list of gear
console.log(bicycle.gear[2])

// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// 3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.

// examples:

// function howMany(str, letter) {
// 	let regex = /letter/g
// 	return str.match(regex)
// }

function howMany(str, letter) {
	return (str.split(letter).length) -1
}

console.log(howMany("Hello World", "l"))

// should return => 3

console.log(howMany("Hello World", "z"))

// should return => 0
