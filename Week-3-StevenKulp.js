// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

// import React, { Component } from 'react';
//
// class Hello extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       message: "I am a component"
//     }
//   }
//
// render() {
//   return (
//     <p>{this.state.message}</p>
//   );
// }
//
// export default Hello;




// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.

var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// stuffArray.map(function(el, i){
//   console.log(el + " is at index: " + i)
// })

for(i = 0; i < stuffArray.length; i++){
  console.log(stuffArray[i] + " is at index: " + stuffArray.indexOf(stuffArray[i]));
}




// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var pricesArray = [3.99, 4.50, 1.99, 7.00]
var steal = function(){
  console.log(Math.min(...pricesArray));
}
steal()
