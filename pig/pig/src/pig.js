import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange}/>
        <Input type= 'submit' value="PugLatinify" />
      </form>
    )
    }
    handleChange = (e) => {
      //should update this.state.inputText whenever text is entered
      this.setState({inputText: e.target.value})
    }
    handleSubmit = (e) => {
      e.preventDefault()
      this.props.submit(this.state.inputText)
  }

}
export default Input;
