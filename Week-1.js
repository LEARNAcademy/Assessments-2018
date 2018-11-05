// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var div = function (num) {
	if (num % 3 === 0) {
		console.log(num + " is divisible by three");
	}else {
		console.log(num + " is not divisible by three");
	}
}
div(3)
div(5)
div(12)
// // 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var Name = {
	firstName: "Willy",
	favoriteFood: "Mac and Cheese",
	favoriteAnimal: "Dogs"
};
console.log((Name.firstName + "'s favorite is ") + Name.favoriteFood);
//
// // 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var arr1= ["car", "bike", "truck", "bus"]
console.log(arr1[3]);
console.log(arr1[1]);
//
// // 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str){
	str= str.toLowerCase();
	var arr = str.split('');
	var sorted = arr.sort();
	return sorted.join('');
}

console.log(AlphabetSoup("hooplah"));
console.log(AlphabetSoup("Willy"));
//
// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
//

var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var arr1 = [];
var i = 0;
var j = 0;
for (i = 0; i < nums.length; i++) {
  for (j = 0; j< nouns.length; j ++) {
		arr1.push(nums[j] + " " + nouns[j]);
			}
		}
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);

//
// // output of the first function should be: "1 ducks"
