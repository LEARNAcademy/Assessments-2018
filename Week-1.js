// 1. Write an anonymous function that takes one argument of type number and decides if that number is 
// evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, 
// print that the number "is not divisble by three".

function divBy(){
    var numb = 57
    if (numb % 3 === 0){
        return numb + " is divisible by three"
    } else {
        return numb + " is not divisible by three"
    }
}

console.log(divBy());


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var Brandon = {name: "Brandon", hometown: "Forestville", favoriteAnimal: "Lion"}

console.log(Brandon);


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var array = [5, 6, 12, 32, 18]

var accessArr = array[1] - array[4]
var accessArr2 = array.slice(1,3)
console.log(accessArr) 
console.log(accessArr2) 



// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical 
// order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
    var str = str.split("").sort().join("")	
	return str; 
}

console.log(AlphabetSoup("hooplah"));

// keep this function call here 

// AlphabetSoup(readline());   


// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. 
// How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
for (let i = 0; i < nums.length; i++){
    console.log(nums[i] +" "+ nouns[i])
}

function mergeArr(array1, array2){
    for (let i = 0; i < array1.length; i++){
        console.log(array1[i] +" "+ array2[i])
    }
}

console.log(mergeArr(nums, nouns))