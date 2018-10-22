// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.

// test array: var testCase = ["one", "two", "three", "four"]

var reverseArray = ['one','two','three','four'];
	console.log(reverseArray.reverse());
// expected output: ["four", "three", "two", "one"]

2. Given the object below, fill in how to find specific information:

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

// // Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.

// examples:
var countLetter = function (alphabet, a) {
	var count = 0;
	for (var i = 0; i < alphabet.length; i++) {
		if (alphabet[i] === a) {
			count+=1;
		}
}
};
console.log(countLetter(count));
