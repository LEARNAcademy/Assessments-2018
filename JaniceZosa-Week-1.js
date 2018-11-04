// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

function isDivisible(number) {
  if (number % 3 === 0) {
      return number+' '+'is divisible by three';
  } else {
      return number+' '+'is not divisible by three';
    }
}
console.log(isDivisible(9));

// // 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var aboutMe = {
	name: "janice",
	phone: 8585555555,
	fromCity: "San Diego",
	getAllabout : function() {
		return this.name;
	}
};
//
// console.log(aboutMe.getAllabout());
//
// // 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
//
var myFavoritecars = ["subaru", "bmw", "mclaren", "benz"];
var thirdArray = myFavoritecars[3]
console.log(myFavoritecars[3]);

var carMake = ["Honda","Toyota","Acura","Hyundai"]
var lastOnarray = carMake[carMake.length - 1];
console.log(lastOnarray);

// // 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.
//
// // Input:"hooplah"
// // Output:"ahhloop"
//
function AlphabetSoup(str) {
   var alphaSplit = str.split('');
   var alphaSort = alphaSplit.sort();
      return alphaSort.join('')
}
// AlphabetSoup(redline())??
console.log(AlphabetSoup('hooplah'));

// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
//
var nums = [1, 5, 88, 2, 5, 42, 57, 101]
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
//
// // output of the first function should be: "1 ducks"
function NumNoun(nums, nouns) {
  var NumNoun1 = [];

for (let i=0; i<nums.length; i++) {
  NumNoun1.push(nums[i]+' '+nouns[i])
}
return NumNoun1;
}
console.log(NumNoun(nums, nouns));
