// // 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
//
import React, { Component } from 'react';

export default Header extends Component {
  render() {
    return (
      <h1>I am a component.</h1>
    )
  }
}

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
function vanilla(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " is at index: " + i)
  }
}

console.log(vanilla(stuffArray))

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
var prices = [17, 21, 7 ,8, 5, 10]

var steal = function(arr) {

  // The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
  // console.log(Math.min(...arr))

  // using for loop to find the lowest price
  var smallestNumber = Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i]

    }
  } return smallestNumber
}

console.log(steal(prices))
