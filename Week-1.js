// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var num = 3

var divide = function(num) {
	if (typeof(num) === "number"){
		if(num % 3 === 0){
			return num + " Is divisible by 3"}
		else if(num % 3 !== 0){
			return num + " Is not divisible by 3"}
		else{
			return "Error"}
		}
	else{
		return "Not a number"
	}
}


console.log(divide(num));



// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

function createPerson(firstName, secondName, hobbiesArr, born){
	return{
	firstname: firstName,
	surname: secondName,
	hobbies: hobbiesArr,
	nationality: born,
	printData: function(){
		return 'My name is ' + this.firstname + ' ' + this.surname  + '\n' +
						'My Hobbies are ' + this.hobbies + '\n' +
					'I am ' + this.nationality}

			}
}
var sam = createPerson('Sam', 'Sale', ['Gym', 'Soccer', 'Tennis'], 'British')

console.log(sam.printData());

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var arr1 = ['Blue', 'Yellow', 'Orange', 'Brown']

console.log(arr1[1],arr1[2]);
console.log(arr1[arr1.length -1], arr1[arr1.length - 2]);
console.log(arr1.indexOf('Yellow'), arr1.indexOf('Blue'));



// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

Input:"hooplah"
Output:"ahhloop"
var input = 'hooplah'
function AlphabetSoup(str) {
		var sortedString = str.split('').sort().join('');

	return sortedString;
}

// keep this function call here

console.log(AlphabetSoup(input));

AlphabetSoup(readline());

// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
//
var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"



function concatArrays(array1, array2){
	array1.forEach(function(value, index){
		console.log(array1[index], array2[index]);
	})
}

concatArrays(nums, nouns)
