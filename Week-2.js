// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.

// test array: var testCase = ["one", "two", "three", "four"]

function reverseArray(list) {
	let tempArr = []
  for(let i=(list.length-1); i >= 0; i--){
		tempArr.push(list[i])
	}
	return tempArr

}

console.log(reverseArray(["one", "two", "three", "four"]))

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
console.log(bicycle.type)

// Log just the bell from the list of gear
console.log(bicycle.gear[2])

// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// 3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.

function countLetter(string, aLetter){
	let counter = 0; //initial counter
	let stringArr = string.split("");
	let stringLength = stringArr.length

	for(let index=0; index < stringLength; index++){
		if(stringArr[index] === aLetter){
			counter += 1;
		}
	}
	return counter
}

// examples:

console.log(countLetter("Hello World", "l"))

// should return => 3

console.log(countLetter("Hello World", "z"))

// should return => 0
