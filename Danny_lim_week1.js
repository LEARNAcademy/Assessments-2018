// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var divisibleby= function(num, divisor){ //2 inputs, the number being divisible, and the divisor
    if(num%divisor){ //if it's not divisible   
        console.log(num + " is not divisible by "+divisor) //print to console
    }
    else {//if it's not divisible 
        console.log(num + " is divisible by "+divisor) //print to console
    }
}
divisibleby(15,4)

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var Danny = {name: "Danny", lastname: "lim", age: 31} //creates object with 3 keys: (first) name, lastname, and age and assigns them values
console.log(Object.values(Danny)) //print values to console

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var array = [1,2,3,4] //creates array
console.log(array[1]) //prints 2nd element of the array
console.log(array.pop())//removes and prints the last element in the array

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

    // your code goes here  
    var temp = Array.from(str) //convert string to array
    temp = temp.sort() //sort array into alphabetial order (default behavior) (spaces are considered earlier in the Alphabet than letters, ALL capital letters are before lower case letters)
	return temp.join(''); //turn array back into string
}

// keep this function call here 

console.log(AlphabetSoup("alphabatize this"));   

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101, 23, 53, 23]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
function combine (nums, nouns){
    var len = Math.min(nums.length, nouns.length) //finds the shorter of nums or nouns
    for (i = 0; i < len; i++){//index up to the shortest of the number or noun length
        console.log(nums[i]+" "+nouns[i])
    }
}
combine(nums,nouns)