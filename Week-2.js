// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.

// var testCase = ["one", "two", "three", "four"]
//
// function reverseArray(list) { // function made
//   list.reverse() // reverse command
// 	return list // return reverse array to function
// }
//
// console.log(reverseArray(testCase)) // call funciton, pass arguement, print/  COMPLETE

// expected output: ["four", "three", "two", "one"]

// 2. Given the object below, fill in how to find specific information:

// var bicycle = {
// 	type: "Roadbike",
// 	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
// 	wheels: {
// 		count: 2,
// 		specs: ["road tires", "AX-7563", "80-115 PSI"],
// 		brand: "Trek"
// 	}
// }

// Log the type of bicycle:
// console.log(bicycle.type)

// Log just the bell from the list of gear
// console.log(bicycle.gear[2])

// Log the correct PSI for the tires
// console.log(bicycle.wheels)
// COMPLETE

// 3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.

// examples:

// countLetter("Hello World", "l")
// var countLetter = "Hellow World"
// var phraseArr = countLetter.split('')
// console.log(phraseArr)

function countLetter(phraseObj, letterObj) {
// use math to solve this.
// create a variable that has phraseObj without the letterObj.

// var phraseArr = phraseObj.split('') // turn into Array
var removeLets = phraseObj.split('').filter(function(phraseArrObj){
	return phraseArrObj.replace(letterObj, '')
})
//  subtract the length of phraseObj to the new variable
var occur = phraseObj.length - removeLets.length
// return the number. result is number of occurances of letter
return occur
}
console.log(countLetter("Hello World", "z"));

// should return => 3

// countLetter("Hello World", "z")

// should return => 0
