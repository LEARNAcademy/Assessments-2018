//
// var nums = [1, 5, 88, 2, 5, 42, 57, 101]
// var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]
// var arr1 = [];
// var i = 0;
// var j = 0;
//
//
// 	for (i = 0; i < nums.length; i++) {
// 			for (j = 0; j< nouns.length; j ++) {
// 			arr1.push(nums[j] + " " + nouns[j]);
// 			}
// 	}
//
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);
// console.log(arr1[5]);
// console.log(arr1[6]);
// console.log(arr1[7]);
// console.log(arr1[5]);

var text = 'outside';

function logIt() {
	  console.log(text);
		var text = 'inside';
};

logIt();
