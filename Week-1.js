// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
//create anonymous function stored in a variable
var isDivis = function () {
  //create the test number to be passed into the function
  var testNum = Math.floor(Math.random() * 10 + 1)
  //test for divisibility
  if (testNum % 3 === 0) {
    console.log(testNum + ' is divisible by three')
  } else {
    console.log(testNum + ' is not divisible by three')
  }
}
isDivis()
// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var AJ = {
  height: '69 inches tall',
  weight: 'heavy enough to need to diet',
  hairColor: 'black'
}
console.log(AJ)
// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
var testArray = [1, 2, 3, 4, 5]
console.log(testArray[0], testArray[1])
var [one, two] = testArray
console.log(one,two)
// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
  // created new Array from the string
  var newArray = [...str]
  //sort the array alphabetically
  sortedArray = newArray.sort()
  //join the array into a string without separators
  str = sortedArray.join('')
  console.log(str)
  return str;
}

// keep this function call here

AlphabetSoup('hooplah')

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
//create variable j and k to index arrays
//test which string is longer (if strings are different lengths, default is shorter = nums)

// var j = 0
// var k = 0
// if (nums.length > nouns.length) {
//   var shorter = nouns
//   var longer = nums
//   for (i = 0; i < longer.length; i++) {
//     if (j === shorter.length) {
//       j = 0
//     }
//     console.log(nums[i] + ' ' + nouns[j])
//     j++
//   }
// } else {
//   var shorter = nums
//   var longer = nouns
//   for (i = 0; i < longer.length; i++) {
//     if (j === shorter.length) {
//       j = 0
//     }
//     console.log(nums[j] + ' ' + nouns[i])
//     j++
//   }
// }


//refactor the previous code to not rely on global variables, simplify/remove redundant code, and be a function
function combine(numArray,nounArray){
  var j = 0
  if(numArray.length > nounArray.length){
    for(i=0;i<numArray.length;i++){
      if(j===nounArray.length){
        j = 0
      }
      console.log(`${numArray[i]} ${nounArray[j]}`)
      j++
    }
  } else {
    for (i=0;i<nounArray.length;i++){
      if(j===numArray.length){
        j=0
      }
      console.log(`${numArray[j]} ${nounArray[i]}`)
      j++
    }
  }
}
combine(nums,nouns)
