import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // STATE IS AVAILABLE ONLY WHEN YOU EXTEND COMPONENT
  // IF STATE CHANGES, THEN RE-RENDER HAPPENS
  state = {
    persons: [
      {name: 'manu', age:'25'},
      {name: 'tanu', age:'27'},
      {name: 'zanu', age:'25'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, Nitin</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Child Property</Person>
      </div>
    )
  }
}

export default App;
