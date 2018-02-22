//1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, {Component} from 'react';

class Printer extends Component {
  render () {
    <div>
      <h2>I am a component!</h2>
    </div>
  }
}

export default Printer;

//2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// The vanilla-est:

for (var i = 0; i < stuffArray.length; i++) {
  console.log(`${stuffArray[i]} is at position ${i}`)
}


//3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

let prices = [40, 03, 27, 19]

var steal = function(array){
  array.sort(function(a, b){return a - b})
  console.log(array[0])
}

steal(prices)
