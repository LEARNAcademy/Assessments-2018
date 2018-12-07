// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

var x = function(num) {
    if(num % 3 === 0) {
        return `${num} is divisible by three`
    } else {
        return `${num} is not divisble by three`
    }
}


console.log(x(3));
console.log(x(5));
// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var jonathan = {
    favoriteFood: "pizza", 
    hobby: "running", 
    favoriteBook: "Mere Christianity" 
    } 

console.log(jonathan);



// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

num1 = [2, 4, 7, 22, 5]

//access to it with index
console.log(num1[0])
console.log(num1[num1.length - 1]);

console.log(num1.indexOf(2))
console.log(num1.includes(4))

num1.forEach(function(el){
    console.log(el)
})




// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
    //     // your code goes here  
    // convert str variable to an array to use the sort function that sorts alphabetically. Then join the array to convert it back to a string. All this will be stored in the str varibale, and return the string.
    var str = str.split('').sort().join("")
	return str; 
}

// keep this function call here 
console.log(AlphabetSoup("hooplah"));

// AlphabetSoup(readline());   

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
var concArr = []
function combArr(arr1,arr2) {
    for(let i = 0; i < nums.length; i++) {
        if(!arr1.includes(arr2[i])) {
            concArr.push(arr1[i] + " " + arr2[i])
        } 
    }
    return concArr
}
console.log(combArr(nums,nouns));

// output of the first function should be: "1 ducks"
