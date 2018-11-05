import React, { Component } from 'react';
import './App.css';
import Input from './pig.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      textToTranslate : "Dummy Text"
    }
  }
takeInput = (input) => {
  this.setState({textToTranslate: '' })
}

  render() {
    return (
      <div className="App">
        <h1>Pig Latin</h1>
        {/*input component- for collecting user input*/}
        {/*output component-to display pig lating translation*/}
        <p>{this.state.textToTranslate}</p>
      </div>
    );

  }

}
export default App;
