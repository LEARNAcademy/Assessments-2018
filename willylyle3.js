// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      I am a component
      </div>
    );
  }
}

export default App;

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

stuffArray.forEach(function(item, index, array) {
  console.log(item + " is at index: " + index);
});
//
// // your for loop here, you can use the same stuffArray array
//
//
// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
//

var Arr = [3.11, 1.99, 6.16, 4.23, 5.99];

for (var i = 1; i < Arr.length; i++)
      for (var j = 0; j < i; j++)
          if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
          }

  console.log(Arr[0]);
