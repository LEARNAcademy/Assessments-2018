// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

function divByThree(n) {
	if (n%3 === 0) {
		console.log(n+" is divisble by three");
	} else {
		console.log(n+" is not divisble by three");
	}
}

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var nico = {
	eyes:"green",
	favoriteBook: "Witches of Eileanan",
	livesIn: "lakeside",
	pets: "Watson",
}
// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var favorites = {
	song: "Matches",
	restaurant: "Butcher's Son",
	vacation: "Bay area",
	coffee: "Peanut Butter Mocha"
}

console.log(favorites.vacation);
console.log(favorites["coffee"]);
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

function myAlphabetSoup(str) {
return str.split("").sort().join("")
}

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
  str = str.split("").sort().join("")
	return str;
}

// keep this function call here
AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["duck", "telephone booths", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

function arrayConcat(arr1,arr2) {
	for (i=0;i<arr1.length;i++) {
		console.log(arr1[i]+" "+arr2[i]);
	}
}

// output of the first function should be: "1 ducks"

// I realize #6 wasn't necessary but i did the 2017 assessment on accident and so i'm going to share my pain with you by making you read my dumb code
// 6. Create an object "coffeeMachine" with attributes coffee and water. These attributes should have boolean values - false meaning there is not enough, and true meaning there is enough.
//Next, create a method for our coffeeMachine object to run the machine. The result of this method should be a message, saying that coffee is ready.
//There must be enough water and coffee in order to run the machine. If there aren't enough of either, the coffe maker should send you a message saying "add more ____."

var coffeeMachine = {
	coffee: true,
	water: false,
	makeCoffee: function(){
		if (this.coffee == true && this.water == true) {
			console.log("Coffee is ready");
		} else if (this.coffee == false && this.water == true) {
			console.log("Needs more coffee");
		} else if (this.coffee == true && this.water == false) {
			console.log("Needs more water");
		} else if (this.coffee == false && this.water == false) {
			console.log("Needs more coffee and water");
		} else {
			console.log("Error, coffee machine broken");
		}
	}
