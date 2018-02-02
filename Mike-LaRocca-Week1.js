// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not.
// If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
function isDivBy3 (input){
	if (input % 3 === 0){
		alert ("This is divisible by 3")
	}
	else {
		alert("number is not divisible by 3")
	}
}
// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
function newPerson (newName, newHairColor, newHeight, newRace, newHobby) {
	return {
	name: newName,
	haircolor: newHairColor,
	height: newHeight,
	race: newRace,
	hobby: newHobby,
	getInfo: function () {
		console.log("Name is: "+this.name+ " Hair Color is: "+this.newhairColor+" Height is: "+this.height+" Race is: "
		+this.race+ " Hobby is: "+this.hobby)
	}
	}
}

var mike = ("Mike", "Brown", "6", "Caucasian", "Coding")
mike.getInfo()

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var array = [12, 4, 5, 6]

console.log(array[1], array[2])

for (i = 0; i < 2; i++){
	console.log(array[i])
}
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical
//order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var a = str.toLowerCase()
	var b = Array.from(a);
	var sort = b.sort();
	var reverse = sort.join("");
	return reverse;
}

// keep this function call here
//Try this with supercalifragilisticexpialidocious, something weird is happening.
AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change
// to accomodate arrays of different lengths?

function lesserArray(){
	var nums = [1, 5, 88, 2, 5, 42, 57, 101]
	var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
	if (nums.length < nouns.length) {
		var x = nums.length}
	else { var x =nouns.length
	}
for (var i = 0; i < x; i++) {
	console.log(nums[i]+" "+nouns[i])
}}
// output of the first function should be: "1 ducks"
