// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
let byThree = function(num){
	if(num%3===0){
		console.log(`${num} is divisble by three`);
	}else{
		console.log(`${num} is not divisble by three`);
	}
}

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
let andyGarrett = {coffeeNeed: "high", sweetHaircut: true, income: -14000}

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
let arrOfFour = [1,2,3,4];
console.log(arrOfFour[0]); //1
let [one,,,] = arrOfFour; //1


// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.
function AlphabetSoup(str) {
	let strArr = str.split('').sort().join('')
	return strArr;
}

// keep this function call here

AlphabetSoup(readLine());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

//This for loop is based on the idea that both arrays are the same length, so the loop needs to run for the same number of times for both arrays to print all their values. However, depending on the desired outcome, you could change the for loops validation to run for the lenght of the longer or shorter arrays by putting that array's name.length instead.

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

for(let i=0;i<nums.length;i++){
	console.log(nums[i] + " " + nouns[i]);
}
// output of the first function should be: "1 ducks"
