//1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
//public/index.html
<!doctype html></body>
<html lang="en">
  <head>
    <meta charset="utf-8"> </meta>
    <meta name="viewport" content="width = device-width, initial-scale=1"></meta>
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>Component</title></link>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

// src/App.js
import React, { Component } from 'react';

class App extends Component {
  render () {
    return {
      <h1>I am a component!</h1>
    };
  }
}
export default App;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
for (x in stuffArray){
  console.log(`${stuffArray[x]} is at index: ${x}`)
}

//3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var testPrices = [3.00, 547.45, 1.56, 5.89,123.45]
var steal = function(prices){
  var working= prices.sort()
  return working[0]
}
console.log(steal(testPrices))
