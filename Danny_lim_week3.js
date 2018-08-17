//1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
// App.js
import React, { Component } from 'react'
import Hello from './hello'

class App extends Component {
  render () {
    return {
      <div className="helloBox">
      <Hello />
      </div>
    };
  }
}
export default App;
// hello.js
import React, { Component } from 'react'

class Hello extends Component{
  render(){
    return{
      <div>
      <h1>I am a component!</h1>
      </div>
    }
  }
}
export default Hello

//2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map((el, i)=>{
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
