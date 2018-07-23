import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Nitin</h1>
        <h1>Another Heading</h1>
      </div>
      // <h1>Another Heading</h1> // THIS WONT WORK, NEST UNDER ONE ELEMENT
    )
  }
}

export default App;
