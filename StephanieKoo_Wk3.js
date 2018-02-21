1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, {Component} from 'react'
import SimpleReact from './simplereact.js'

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    smallPrint: "I am a component!"
    }
  }

render () {
  return (
    <main>
    <h1> {this.state.smallPrint}</h1>
    </main>
  );
}
}

export default App;

// ----------------------------------Child Component below----------------------------------------------

import React, {Component} from 'react'

class SimpleReact extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.smallPrint}</h3>
      </div>
    )
  }
}
 export default SimpleReact;



2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// ---------------------------------------Vanilla loop below-------------------------------------------------------------

var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

  for (i=0; i<stuffArray.length; i++) {
      console.log(stuffArray[i] + " is at index: " + i)
  }


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var array = [7,8,9,10]

var steal = function(){
  var minNumber = Math.min(...array)
  console.log(minNumber)
}

//call steal() and get 7 as the output.
