1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (

<div>
  Hello, world!
</div>
    )
  }
}

export default Header

this component would have to be called in the parent component.  example  - <Header greeting={this.state.greeting} /> - this section of code would have to be in the app.js

2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can use the same stuffArray array
for (let i = 0; i < stuffArray.length; i ++) {
  console.log(stuffArray[i], 'is at index', i);
}

3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

// your logic here
function steal(stealObj) {
    var lense = stealObj.length
      for (let i = lense-1; i>0; i--) {
        for (let j = 1; j<=i; j++) {
          if(stealObj[j-1]>stealObj[j]){
            let tempVar = stealObj[j-1]
            stealObj[j-1] = stealObj[j]
            stealObj[j] = tempVar
          }
        }
      }
      return stealObj
}
