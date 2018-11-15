1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props);

		}
	}

  	render() {
		<div>
			<h1>"I am a component"</h1>
		</div>
    return ()

}

export Default App 

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
function standardJs(arr) {
	for(let i = 0; i < stuffArray.length; i++){
		console.log(arr[i] " is at index: " + i)
	}
}


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var foodPrice = [ 1, 3, 5, 6, 29]

var lowestPrice = Math.min(...foodPrice)
// built in function to find the lowest number in an array.

var steal = function(){
	// your logic here
	var lowestPrice = Math.min(...foodPrice)
	console.log(steal);
}
