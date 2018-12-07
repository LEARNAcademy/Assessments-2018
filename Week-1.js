// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".

console.log();

function divisibleByThree(num){
	if(num % 3 === 0){
		console.log(num + " is divisble by three");
	} else {
		console.log(num + " is not divisble by three");
	}
}
divisibleByThree(12);
divisibleByThree(10);

console.log();

console.log((function(n){return (n % 3 === 0) ? n + ' is divisble by three' : n + ' is not divisble by three'})(12));
console.log((function(n){return n % 3 === 0 ? n + ' is divisble by three' : n + ' is not divisble by three'})(13));

console.log();

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

console.log();
var me = {lastName : 'Ko', nickName : 'Mike', sex : 'Male'};
var {lastName, nickName, sex} = me;
console.log('My Last Name is '+ lastName + ', and I am ' + sex);


// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.
console.log();
var array = ['earth', 'mercury', 'venus', 'mars'];
var [earth, mercury, venus, mars] = array
console.log(array[1]);
console.log(earth);

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	return str.split('').sort().join('')
}

// keep this function call here 
console.log();
console.log(AlphabetSoup('hooplah'));

/*AlphabetSoup(readline());   */

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a", "test"]

// output of the first function should be: "1 ducks"

function mergerTwoArray(arr1, arr2){
	var limit = Math.max(arr1.length, arr2.length)

	// if( arr1.length < limit){
	// 	let i = limit -arr1.length;
	// 	while(i > 0){
	// 	arr1.push('')
	// 	i--;
	// 	}
	// } else if(arr2.length < limit){
	// 	let i = limit -arr2.length;
	// 	while(i > 0){
	// 	arr2.push('')
	// 	i--;
	// 	}
	// }

	arr1.forEach(function(el, i, a){if(limit-a.length>0){a.push('')}})
	arr2.forEach(function(el, i, a){if(limit-a.length>0){a.push('')}})

	// for(let i = 0; i < limit; i++){
	// 	newArry.push(arr1[i]+' '+ arr2[i]);
	// }

	return [arr1, arr2].reduce((a, b) => a.map((e,i) => e + " " + b[i]))

}

console.log();
console.log(mergerTwoArray(nums, nouns));
console.log();
