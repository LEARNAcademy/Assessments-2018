// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
// var numbers1 = [1, 2, 3, 4, 5]
// function divisibleByThree(){
// 		if (i % 3 === 0){
// 			numbers1.forEach(function(el) {
// 				if (el % 3 === 0){
// 					console.log("divisible by three");
// 				} else {
// 					console.log("is not divisible by thee");
// 				}
// 			}
// 	}
// }
//
// divisibleByThree();
// var divisibleByThree = (num) => {
// 	if(num % 3 === 0){
// 		console.log(num + " is divisible by three")
// 	} else {
// 		console.log(num + " is not divisible by three")
// 	}
// }
// divisibleByThree(4)
// divisibleByThree(10)
// divisibleByThree(8)
// divisibleByThree(9)
	//
	// var a = [1,2,3,30,17]
	// var b = [2,30,1,15]
	// // expected output [1,2,3,17,15,30]
	// function removeDuplicates(arr1, arr2){
	//   newArr = []
	// //compare arr1 element with arr2
	// //if element of arr2 is not found in arr1, then push arr2 element
	// //looping arr2
	//   arr1.forEach(function(value){
	//     if (arr2.includes(value)) {
	//     }
	//     else{newArr.push(value)
	//     }
	//   })
	// var cleanArray = newArr.concat(arr2)
	//   return cleanArray
	// }
	// removeDuplicates(a,b)


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

// var juan = {city: "San Diego", school: "Learn Academy", subject: "JavaScript", show:"GOT",};
//
// // 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
//
// let food = ["Ramen", "Burrito", "Pizza", "Burger"];
//
// 	// food [0] = "Ramen"
// 	// food [1] = "Burrito"
// 	// food [2] = "Pizza"
// 	// food [3] = "Burger"
//
// 	// console.log(food[0]);
// 	// console.log(food[1]);
// // Ramen, Burrito,
// // food[3] = "duck"
// // console.log(food);
//
// // 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.
//
// // Input:"hooplah"
// // Output:"ahhloop"
//
//
// function AlphabetSoup(str){
// 	// console.log(str);
// 	// splitting string into an array
// 	var strArr = str.split('')
// 	// console.log(strArr);
// 	// sorting the array
// 	var sortArr = strArr.sort();
// 	// console.log(sortArr);
// 	// joined array into a new string
// 	var joinStr = sortArr.join('');
// 	// console.log(joinStr);
//  // returning sorted string
// 		return joinStr
// 	// return str.split('').sort().join('');
//   }
// 	//console logging here the alphabetized string
// console.log(AlphabetSoup("hooplah"));
//
//
// // // 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
//output of the first function should be: "1 ducks"

// var nums = [1, 5, 88, 2, 5, 42, 57, 101]
//
// var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
//
// // the for loop, index is starting at position 0 of the array, "scanning" through the length of the "nums" array and incremenenting
// // through once (i++)
// for (let i = 0; i < nums.length; i++) {
// // logging shows
//   console.log(nums[i]+ " " +nouns[i])
// }
