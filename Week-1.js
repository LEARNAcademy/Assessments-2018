// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
let divisibleByThree = function (num) {
	if (num % 3 === 0) {
		console.log(`${num} is divisible by three`);
	} else {
			console.log(`${num} is not divisible by three`);
	}
}

divisibleByThree(3);
divisibleByThree(4);
divisibleByThree(12);
divisibleByThree(17);


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

let Julianne = {
	middleName: "Scott",
	favNum: 17,
	pet: {
		dog: 1,
		name: "Berk",
	}
	favSport: "Vollyball",
	hobby: "Photography",
}

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
let items = ["apples", "laptop", "goggles", "car", "cello"]

// NOTE:  index number:
console.log(items[0],items[3])

// NOTE: by loop:
for (let i = 0; i < items.length; i++) {
	console.log(items[i]);
}

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

Output:"ahhloop"
let str = "hooplah"
let strArr = []

function alphabetSoup(string) {
	strArr = str.split("");
	strArr.sort();
	let newStr = strArr.join("");
	return newStr
}

alphabetSoup(str)


// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]


function pairArrays (num, noun) {
	for(let i = 0; i < num.length; i++) {
		console.log(`${num[i]} ${noun[i]}`);
	}
}

pairArrays(nums, nouns)

// NOTE: code could change to either loop through shorter array again, or to stop when the shorter array ends.
