var dividesByThree = function(number) {
  if(number % 3 === 0){
    console.log(number + " is divisible by three.");
  } else {
    console.log(number + " is not divisible by three.");
  }
}
console.log(dividesByThree(number));
console.log(dividesByThree(9));

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var tricia = {
  eyeColor: 'blue',
  haircolor: 'brown',
  hobbies: ['running', 'music', 'sports'],
  pet: 'cat'
}

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var bands = ['Muse', 'Metric', 'PJ Harvey', 'The Strokes']
console.log(bands[0] + ", " + bands[3]);
femaleBands = bands.slice(1,3);
console.log(femaleBands);
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	var str = str.split("");
	var str = str.sort();
  var str = str.join("");

	return str;
}

// keep this function call here

console.log(AlphabetSoup("shoobiedoobiedoo"));

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

function combine(nums, nouns){
  let newList = []
  for(let i = 0; i < nums.length; i++){
    newList.push(nums[i]+ " " + " " + nouns[i])
  }
  return newList
}

console.log(combine(nums, nouns))
