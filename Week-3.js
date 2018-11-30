1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import 'react' from React;


//TODO: finishclass Simple extends React.Component {
  render () {
    return <p>I am a component</p>
  }
}


2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

function whereAt(arr) {
  for (i = 0; i < stuffArray.length; i++) {
    console.log(stuffArray[i] + " is at index: " + i);
  }
}

whereAt(stuffArray);

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var priceArr = [5, 10, 15, 20];

function steal(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

steal(priceArr);
