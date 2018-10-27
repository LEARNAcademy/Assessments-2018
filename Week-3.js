1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

//My React compoenet example
import React, { Component } from 'react';
import Display from './Display'
import './Week-3.js';

class Week3 exstends Component{
  constructor(props){
    super(props)

    this.state{
                outputText: "I am a component"
              }
  }

  render() {
    return (
      <div className="Week3">
          this.state.outputText
      </div>
    );
  }
}
export default Week3

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array

//this can also be done in vanilla JS with map
for(let i =0; i < stuffArray.length; i++){
  console.log(`${stuffArray[i]} is at index ${i}`);
}


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

numVar = [43.99, 22.95, 12.16, 5, 5.50, 10.99, 3.50]

var steal = function(arr){
  return arr.sort(function(a, b){return a-b})[0];
}

console.log(steal(numVar))
