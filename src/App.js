import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  incrCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, Nitin</h1>
        Current Count: {this.state.count}<br/>
        <button onClick={this.incrCounter}>Increase Counter</button>
      </div>
    )
  }
}

export default App;
