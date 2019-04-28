1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';
// import newComponent from "location of this file" in the Apps.js file
class newComponent extends Component {
  render(){
    return{
      <h1>I am a Component</h1>
    }
  }
}


export defualt newComponent

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
for (var i = 0; i < stuffArray.length; i++) {
  console.log(stuffArray[i] + " is at index: " + i)
}

3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var prices = [2, 5, 3, 10, 7, 99, 6, 25]

var steal = function(){
  var sortedPrices = prices.sort(function(a,b){
    if(a > b){
      return 1
    }
    else if (a < b) {
      return -1
    }
    else {
      return 0
    }
  })
  console.log(sortedPrices[0])
  // your logic here
}
