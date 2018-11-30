// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.

// test array: var testCase = ["one", "two", "three", "four"]

var reverseArray(list) {
  // ... your code here
}

reverseArray(test)

// expected output: ["four", "three", "two", "one"]

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
console.log()

// Log just the bell from the list of gear
console.log()

// Log the correct PSI for the tires
console.log()

// 3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.

// examples:

countLetter("Hello World", "l")

// should return => 3

countLetter("Hello World", "z")

// should return => 0
