// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var byThree = function(number) {
    if (number%3 === 0) {
        return number + " is divisible by 3."
    } else {
        return number + " is not divisible by 3."
    }

}
console.log(byThree(12))

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var sarahProctor = {
    name: "Sarah Proctor",
    sex: "female",
    eyeColor: "brown",
    getData: function() {return "My name is " + this.name + ". I am a " + this.sex + ". I have " + this.eyeColor + " eyes."}
};
console.log(sarahProctor.getData());

var sarahProctor = {
    name: "Sarah Proctor",
    sex: "female",
    eyeColor: "brown",
    getData: function() {return `My name is ${this.name}. I am a ${this.sex}. I have ${this.eyeColor} eyes.`}
};
console.log(sarahProctor.getData());


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var array = [5, "Tralfamadore", "Pilgrim", 1944]
console.log(array [2], array [3])
for (i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
        console.log(array[i])
    }
}

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah" Output:"ahhloop"

function alphabetSoup(str) {
    return str.split("").sort().join("");
  }
console.log(alphabetSoup("hooplah"));
//If combining on one line, make sure they are ordered correctly and check for mutators vs. accessors

//In class review (first line to run)
function alphabetSoup(str) {

//create an empty array, third line to run
let letters = str.split("")

//split the string into an arrays

//Alphabetize the array, fourth line to run - calling the function "sort"
letters.sort()

//Join the letters back into a string, fifth line to run - calls the function "join" and redefines the variable
letters = letters.join("")

//return the string - sixth(last) line of the code to run - returning the variable
return letters;
}
//Second line to run
AlphabetSoup("hooplah");
// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon",
"eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

function numsAndNouns(numsArray, nounsArray){
    for (i = 0; i < numsArray.length; i++) {
        for (j = 0; j < nounsArray.length; j++)
        }
}
console.log(numsAndNouns(`${numArray[i]}`))

//I didn't get this one - will continue to work this weekend
