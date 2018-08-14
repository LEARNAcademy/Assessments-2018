// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
 
function Anonymous (number) {
    if (number%3==0){
        console.log(number + " is divisible by three");
    } else {
        console.log(number + " is not divisible by three");
    }
}


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var kait = {
    eyeColor: "Blue"
    petName: "Remo"
    siblings: 4
}


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
1.
var colorArray = ["Blue", "Green", "Purple", "Orange"]
console.log(colorArray[2]+" "+colorArray[3]);

2.
var colorArray = ["Blue", "Green", "Purple", "Orange"]
var getTwo = colorArray.filter(colorArray => colorArray.includes("u"));
console.log(getTwo);

3.
var colorArray = ["Blue", "Green", "Purple", "Orange"]
console.log(colorArray.slice(0, 2));

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
    var reversed = str.split(/(?:)/u).reverse().join('');
	return reversed; 
}

// so apparently, I did some wishful reading and assumed it wanted the reverse of the word not the alphabet order of the word.

function AlphabetSoupAgain(str) {
    var sorted = str.split(/(?:)/u).sort().join('');
	return sorted; 
}

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

// output of the first function should be: "1 ducks"

var nums = [1, 5, 88, 2, 5, 42, 57, 101];
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"];

function producePairs (arr1,arr2) {
    var pairs = []
    for (let i = 0; i < arr1.length; i++){
        pairs.push(arr1[i] + " " + arr2[i])
    }
    return pairs
}

// keep this function call here 

AlphabetSoup(readline());   


//Ok, spent a while trying to return multiple arrays with the for loop because that's what I thought the question was asking for and then read that you cannot return multiple arrays.  Is that true?

// function producePair (arr1,arr2) {
//     var paired = []
//     for (let i = 0; i < arr1.length; i++){
//         paired.push(arr1[i] + " " + arr2[i])
//         return paired
//     }
//     var singlePair = []
//     singlePair.push(paired.shift())
//     return singlePair
// }

// producePair(nums,nouns)
// Array [ "1 ducks" ]
