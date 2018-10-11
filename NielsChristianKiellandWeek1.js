// 1. Write an anonymous function that takes one argument of type number
	// and decides if that number is evenly divisble by three or not.
	// If it is, print the number and "is divisible by three".
	// If it is not, print that the number "is not divisble by three".

function divisbleByThree(num){
	if(num % 3 === 0){
		console.log(num + " is divisble by 3.");
	}
	else{
		console.log(num + " is NOT divisble by 3.");
	}
}

divisbleByThree(9);
divisbleByThree(10);

// 2. Write about yourself using an object.
	// Include at least three properties of you
	// and store your object in a variable with your name.

function createPerson(name, spokenLangauges, pet){ return {
	_name: name,
	_spokenLangauges: spokenLangauges,
	_pet: pet };
}

var Niels = createPerson("Niels", ["Norwegian", "English"],
	{breed: "Australian Shepherd", name: "Hazel"});

console.log(Niels);
console.log(Object.values(Niels));
console.log("My name is " + Niels._name + ". I speak two languages " + Niels._spokenLangauges + ". I have an " + Niels._pet.breed + " named " + Niels._pet.name + ".");

// 3. Create an array with at least 4 items inside it.
	// Show how to access two values from the array in two different ways.

var superheroes = [{name: "Batman", secretIdentity: "Bruce Wayne"}, {name: "Flash", secretIdentity: "Wally West"},
									 {name: "Green Lantern", secretIdentity: "John Stewart"}, {name: "Wonder Woman", secretIdentity: "Diana Prince"}];

console.log("--Access 1--");
console.log(superheroes[0], superheroes[1]);
//console.log(superheroes[0].name + " " + superheroes[0].secretIdentity)

function whatsInHalfTheArr(arr){
	for (i = 0; i < ( arr.length / 2 ); i++){
		for (key in arr[i]) {
			console.log(arr[i][key]);
		}
	}
}
console.log("--Access 2--");
whatsInHalfTheArr(superheroes);



// 4. Have the function AlphabetSoup(str) take the "str" parameter
	// being passed and return a string with the letters in alphabetical order
	// (ie. hello becomes ehllo). Assume no numbers or punctuation
	// symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {

	var str = str.toLowerCase();
	var strArr = [];

	for(let i = 0; i < str.length; i++){
		strArr.push(str.charAt(i));
	}

	for(let i = 0; i < strArr.length; i++){
		console.log("entering first loop...");
		for(let j = i+1; j < strArr.length; j++){
			console.log("entering second loop...");
			if(strArr[i] > strArr[j]){
				var tmp = strArr[i];
				strArr[i] = strArr[j];
				strArr[j] = tmp;
			}
		}
	}

	str = strArr.join("");
	return str;

}

function AlphabetSoup2(str) {
	return str.split('').sort((a,b) => a.localeCompare(b, { ignorePunctuation: true })).join('');
}

function AlphabetSoup3(str){
	return str.split("").sort().join("");
}

console.log("--case-sensitive--");
console.log(AlphabetSoup("hooPlah"));
console.log("--not-case-sensitive--");
console.log(AlphabetSoup2("HooPlah"));
console.log("--one line function version--");
console.log(AlphabetSoup2("hooplah"));

// keep this function call here

// AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from
	// each array concatenated together. How would your code need to
	// change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101];
var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
// Iterates length of arr1 , and logs arr1[i] + arr2[i]
function numsOfNouns(arr1, arr2){
	for (i = 0; i < arr1.length; i++){
		console.log(arr1[i] + " " + arr2[i]);
	}
	return;
}
console.log("5-1");
numsOfNouns(nums, nouns);

var nums2 = [1, 5, 88, 2, 5, 42, 57, 101, 1000, 54, 89];
var nouns2 = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
// Goes through the array for the full length of the longest array logs everyone even if values are undefined.
function numsOfNouns2(arr1, arr2){
	for (i = 0; i < arr1.length || i < arr2.length; i++){
		console.log(arr1[i] + " " + arr2[i]);
	}
	return;
}
console.log("--5-1--");
numsOfNouns2(nums2, nouns2);

var nums3 = [1, 5, 88, 2, 5, 42, 57, 101, 1000, 54, 89];
var nouns3 = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a", "banana", "bird"]
// Iterates through both arrays, only logs if values are defined
function numsOfNouns3(arr1, arr2){
	for (i = 0; i < arr1.length || i < arr2.length; i++){
		if (arr1[i] && arr2[i]){
			console.log(arr1[i] + " " + arr2[i]);
		}
	}
	return;
}
console.log("5-3");
numsOfNouns3(nums3, nouns3);

// output of the first function should be: "1 ducks"
