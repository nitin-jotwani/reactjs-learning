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

  sampleMethod = () => {
    // DONT DO THIS. REACT WILL NOT RECOGNISE THIS, INSTEAD USE A REACT'S SPECIAL METHOD, setState()
    // this.state.persons[0].name = 'Niku'
    this.setState({
      persons: [
        {name: 'niku', age:'25'},
        {name: 'piku', age:'27'},
        {name: 'tiku', age:'25'}
      ]
    })
    // This will override above state
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Nitin</h1>
        <button onClick={this.sampleMethod}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Child Property</Person>
      </div>
    )
  }
}

export default App;
