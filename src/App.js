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

  sampleMethod = (newName) => {
    // DONT DO THIS. REACT WILL NOT RECOGNISE THIS, INSTEAD USE A REACT'S SPECIAL METHOD, setState()
    // this.state.persons[0].name = 'Niku'
    this.setState({
      persons: [
        {name: newName, age:'25'},
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
        <button onClick={this.sampleMethod.bind(this, 'Nitonn')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={() => this.sampleMethod('Priyonn')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Child Property</Person>
      </div>
    )
    // THERE ARE TWO WAYS OF SENDING ARGS TO FUNCTION:
    // USING BIND, USING ARROW FUNCTION...BIND IS PREFERRED
    // ALSO, WHEN USING ARROW FUNCTION YOU HAVE TO USE () IN FUNCTION CALL(even if when you dont have args), COZ ITS INSIDE THE FUNCTION
    // WHEREAS WHEN CALLING FUNCTION DIRECTLY IN {} DONT USE (), COZ THEY WILL GET TRIGGERED AUTO, SO LET REACT HANDLE INTERNALLY
  }
}

export default App;
