// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

		// Instructions: Make function with argument (number)
		// returns: if number divisible / 3 "divisible by three", if not "is not divisible by three"

		//Answer 1:
		// function anonymous(number){
		// 	if (number % 3 === 0){
		// 		console.log("is divisible by three");
		// 	} else {
		// 		console.log("is not divisible by three");
		// 	}
		// }
		// //test divisible number
		// console.log(anonymous(6))
		// //test undivisible number
		// console.log(anonymous(10))



// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

		// //Answer 2:
	 	// var Jerome = {
	 	// 	lastName: "Sheppard",
		//  	secondLang: "Spanish",
	 	// 	favFood: "Italian",
	 	// }
		//
		// //test:
	 	// console.log(Object.values(Jerome))
	 	// console.log(Object.keys(Jerome))



// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

			//Answer 3:
			// var array1 = ["whiskey", "xray", "yankee", "zulu" ]
			//
			// //2 ways to access values from arrays:
		 	// console.log(array1[2])
		 	// console.log(array1[array1.length - 3])



// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

			//function alphabetSoup(str) should return a string with letters in a-z order

				// function alphabetSoup(str) {
			  // 	return str.split("").sort().join("");
				//   }
			  // console.log(alphabetSoup("hooplah"))
				//
				// //verified that it works with any word



// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?
// output of the first function should be: "1 ducks"

		//I created a loop, then used math.max for the loop to always use the longer array as my stop//

		var nums = [1, 5, 88, 2, 5, 42, 57, 101]
		var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

		for (var i = 0 ; i < (Math.max(nums.length, nouns.length)) ; i++) {
			console.log(nums[i] + " " + nouns[i])
		}





		// ***Please ignore the code below, the answer is above, but the code below is a work in progress, thanks! :)
		// if (nums.length ==== nouns.length) { //this is when nums is the same length as nouns
		// 	for (var i = 0 ; i < Math.max(nums.length, nouns.length)) ; i++) {
		// 		console.log(nums[i] + " " + nouns [i])
			// } else { // this is for when nums and nouns are not the same length
			// 	for (var i = 0 ; i < Math.max(nums.length, nouns.length)) ; i++) {
			// 		var xFactor = Math.min(nums.length, nouns.length) //this is the shortest array *this has to repeat itself with a max of Yfactor
			// 		var yFactor = Math.max(nums.length, nouns.length) //this is the longest array
			// 		for (var i = 0 ; i < yFactor ; i++) //loop to repeat the shorter array with yFactor (the longestarray) being the stop
			// 		console.log( //repeat X + " " + Y-the longer length )
				// }

			// }
		// }
