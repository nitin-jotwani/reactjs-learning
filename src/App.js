import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Nitin</h1>
        <Person name="manu" age="25"/>
        <Person name="tanu" age="26"/>
        <Person name="zanu" age="27"/>
      </div>
    )
  }
}

export default App;
