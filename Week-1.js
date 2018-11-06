// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var divThree = function (number) {
	if(number%3 === 0){
		console.log(`${number} is divisible by 3`)
	}else{
		console.log(`${number} is not divisible by 3`)
	}
}



// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var daBestEvan = {
	name: "Evan", //obviiously
	height: `5'11"`,
	favColors: ["blue", "black", "gray"],
	getData: function(){
		return this.name + " " + this.height + " " + this.favColors
	}
}

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
let myArray = ["cat", 14, "Never Ending Sotry", ["eggs", "milk", "bread"]]

console.log(myArray);
console.log(myArray[1]);
console.log(myArray[3]);

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

    str = str.split('').sort().join('')

	return str;
}

// keep this function call here

//AlphabetSoup(readline());
console.log(AlphabetSoup("myname"))

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

for(let i = 0; i < nums.length; i++){
	console.log(`${nums[i]} ${nouns[i]}`)
}

// output of the first function should be: "1 ducks"


var text = 'outside';
console.log("should be outside");
function logIt(){
		console.log("text inside: " + text);
    var text = 'inside';

		//return text;
};

logIt();
