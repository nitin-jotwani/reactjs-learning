import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, Nitin</h1>
    //   </div>
    // )
    /*
      Above code is using JSX. 
      Below code is the same output but without JSX.
      Above code is internally compiled to code like below by React.
      Hence writing JSX is easy.
    */
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Nitin'))
  }
}

export default App;
