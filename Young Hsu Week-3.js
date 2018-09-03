1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react'
class Message extends Component {
  render(){
    return(
      <div>
        <p>I am a component
        </p>
      </div>
    )
  }
}
export default Message

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
for(let i = 0;i<stuffArray.length;i++){
  console.log(stuffArray[i]+" is at index: " + i);
}

3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var steal = function(array){

  // your logic here
  var lowest_price = array[0]
  for(let i = 1; i < array.length; i++){
    if (array[i]<lowest_price){
      lowest_price = array[i]
    }
  }
  return lowest_price
}
