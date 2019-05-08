import React from 'react';
import logo from './logo.svg';
import './App.css';



const textAreaStyles = {
  width: 235,
  margin: 5
};

// TASKS:

/*
  1 - Create a state object and define two states:
   a) userInput should be initialized as an empty string,
   b) toDoList should be initialized as an empty array.
  2 - Implement the logic to handle user's inputs to set the state.
  3 - Using Array.map, implement a <li> that will render a list with these items
  4 - Adding "eat, code, sleep, repeat" to the text area should render a list
  5 - Remeber to add a key attribute to <li> 
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    // changes code below this line
    this.state  = {
      toDoList : [],
      userInput: ''
    };
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleList = () => {
    return this.state.toDoList.map((item, key) =>{
      return(
        <li key={key}>{item}</li>
      )
    })
  }
  handleSubmit() {
    let itemsArray = new Array();
    itemsArray = this.state.userInput.split(',');
    console.log(itemsArray);
    // create a the logic for setting the state for itemsArray
    this.setState(prevState => ({
      toDoList : itemsArray.concat(this.state.toDoList)
    }))
    console.log(this.state.toDoList);
    this.setState({ userInput: ''})
  }
  handleChange(e) {
    // create a the logic for setting the state for userInput
    // TIP: use e.target.value
    this.setState({userInput : e.target.value});
  }
  render() {
    const items = null; // change code on the <ul>
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"/>
          <br/>
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {this.handleList()} 
        </ul>
      </div>
    );
  }
};


export default App;
