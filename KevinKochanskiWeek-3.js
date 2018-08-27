1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';

class Statement extends Component {
  render() {
    return (
      <div>
        <h1>I am a component</h1>
      </div>
    )
  }
}

export default App;


2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
// Would output "42 is at index: 0", "Arthur Dent is at index: 1", etc.
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
for (let i = 0; i < stuffArray.length, i++) {
  text += stuffArray[i] + " is at index: " + i + "<br>";
}


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
var prices = [//Array of Prices Here]
var steal = function(){

  // your logic here
  console.log(Math.min.apply(null, prices))
}
