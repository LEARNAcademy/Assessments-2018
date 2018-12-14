// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.


var testCase = ["one", "two", "three", "four"] //test array

var reverseArray = function(list) { //anonymous function
  // ... your code here
  return list.reverse()
} 

console.log(reverseArray(testCase))

// expected output: ["four", "three", "two", "one"]

// // 2. Given the object below, fill in how to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// // Log the type of bicycle:
console.log(bicycle.type)

// // Log just the bell from the list of gear
console.log(bicycle.gear[2])

// // Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// // 3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.

// // examples:

// countLetter("Hello World", "l")

// // should return => 3

// countLetter("Hello World", "z")

// // should return => 0

// function countChar(string,char) {
// 	var count = 0
// 	for(let i=0; i <string.length; i++) {
// 	if(string.charAt(i) === char) {
// 		count++
// 	}
// }
// 	return count;
// } 

console.log(countChar("apples","a"))

function countChar(string,char) {
	count = string.split('').filter(value => value === char)
	return count
}


