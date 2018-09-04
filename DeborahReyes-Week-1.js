// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
function divisibleByThree(number){
	if (number % 3 === 0){
		console.log(number + " is divisible by three")
	} else {
		console.log(number + " is not divisible by three")
	}
}

// divisibleByThree(15)
// divisibleByThree(8)

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var deborahReyes = {
	beverageOfChoice: function(mood) {
		if (mood === "sleepy"){
			return "Oh gosh, I'd love to get a pour-over from James Coffee right now."
		} else if (mood === "celebratory"){
			return "Yes! Just figured out the Duplicate Array Challenge! Time to reward myself with a Diet Coke."
		} else{
			return "I'm always in the mood for a Lemon-flavored La Croix!"
		}
	},
	faveSportsTeam: function(sport){
		if (sport === "basketball"){
			return "I love the Lakers! #letsgoLebron"
		} else if (sport === "soccer"){
			return "Manchester United FC all day!"
		} else if(sport === undefined){
			return "You didn't ask me which sport's team I liked... Try again :)"
		} else {
			return "I don't know too much about " + sport + ". But obviously, LA's " + sport + " team is the BEST."
		}
	},
	currentlyListeningTo: function(status){
		if (status === "busy" || status === "working"){
			return "I gotta stay locked in and focused. Time to put on some Hiatus Kaiyote and Lianne La Havas."
		} else if (status === "driving"){
			return "A nice, long drive! The perfect time to pop in an audiobook"
		} else if (status === "dinner party"){
			return "Friends coming over? I've got the prefect Jazzy Dinner Playlist for the occasion."
		} else if (status === "reflective"){
			return "Deep thoughts... No words, just some Instrumental Piano Hymns."
		} else {
			return "Let's pop in some Hillsong United or Relient K."
		}
	}
}

// console.log(deborahReyes.beverageOfChoice("sleepy"))
// console.log(deborahReyes.faveSportsTeam())
// console.log(deborahReyes.currentlyListeningTo())

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
// var array = [3, "four", [5, 6, 7, 8], true]
// var newValue = array[0]




// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
console.log("Your current string is: " + str)
	var newArray = str.split("")
	// console.log(newArray)
	var sortedArray = newArray.sort()
	// console.log(sortedArray)
	str = sortedArray.join("")
	console.log("Here's your sorted string! " + str)
	return str;
}

// keep this function call here
// AlphabetSoup(readline());
// AlphabetSoup("supercalifragilisticexpialidocious");

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

function combinedOutput(array1, array2){

	if(array1.length > array2.length) {
		for (let i = 0; i < array1.length; i++) {
			var str1 = array1[i]
			var str2 = array2[i]
			var newStr1 = `${str1}  ${str2}`
			console.log(newStr1)
		}
	}
	else{
		for (let j = 0; j < array2.length; j++) {
			var str3 = array1[j]
			var str4 = array2[j]
			var newStr2 = `${str3}  ${str4}`
			console.log(newStr2)
		}
	}
}

// combinedOutput(nums, nouns)

// output of the first function should be: "1 ducks"
