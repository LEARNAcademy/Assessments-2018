// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly
// divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that
// the number "is not divisble by three".

var oddEven = function(num){
  if (num % 3 ===0){
  console.log(num + " is divisible by three")
  return num
  } else {
  console.log(num + " is Not divisible by three")
  return num
  }
}
oddEven(2)

// // 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var enriqueVerduzco = {dob: "March 14,1990", ssn: "***-**-****", height: "68 inches"}
console.log(enriqueVerduzco.dob)

// // 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var array = ["item1", "item2", "item3", "item4"]
console.log(array[1])

var item = array[0]
console.log(item)

// // 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with
// the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will
// not be included in the parameter.
//
// // Input:"hooplah"
// // Output:"ahhloop"
//
function alphabetSoup(str) {
var split = str.split("")
var sort = split.sort()
var join = split.join("")

return join
}
console.log(alphabetSoup("dadf"))
// //
//
// // 5. Given the arrays below, use a for loop to print one value from each array concatenated together.
 // How would your code need to change to accomodate arrays of different lengths?
//
var nums = [1, 5, 88, 2, 5, 42, 57, 101]
//
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

function(){
  var numNouns = []
  for (var i=0; i<nums.length, i++){
    numNouns.push(nouns[i])
  }
  console.log(numNouns)
  return numNouns
}
addNumnouns()
// // output of the first function should be: "1 ducks"
