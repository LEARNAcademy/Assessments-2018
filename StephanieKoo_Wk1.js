// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var divByThree = function (x) {

	if (x % 3 == 0) {
	return (x + " is divisible by three!");
} else {
	return (x + " is not divisible by three.");
	}
}

console.log(divByThree(3));
console.log(divByThree(5));



// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var stephanieKoo = {

	favColor: "skyblue",
	favHobby: "singing",
	favInstrument: "violin",
	favGadget: "Fitbit",
	sibling: "I love my bro",
	speakLanguages: ["Korean", "English", "Kind of Spanish"],
	familyMembers: 4

}



// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var koreanFood = ["Ddukboki", "Black Bean Paste noodle", "Rice Cake Soup", "Kimchi Stew"];

console.log(koreanFood[1]); //"Black Bean Paste noodle"
console.log(koreanFood[koreanFood.length-1]); //"Kimchi Stew"



// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

  str = str.split('').sort().join('');

	return str;
}

// keep this function call here

console.log(AlphabetSoup("hooplah"));

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"


function joinArray () {
  for (i=0; i<nouns.length; i++){
  console.log(nums[i] + " " + nouns[i])
  }
}

joinArray();

// 1 ducks
// 5 telephone booth
// 88 the enterprise
// 2 robots
// 5 amazon
// 42 eraser
// 57 zafod
// 101 a
