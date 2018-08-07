import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Nitin</h1>
        Current Count: {this.props.ctr}<br/>
        <button onClick={this.props.onIncrementCounter}>Increase Counter</button>
      </div>
    )
  }
}

//WRITE HERE WHICH SLICE OF THE STATE YOU WANT TO GET IN TO THIS CONTAINER/COMPONENT
//AND WHICH ACTIONS YOU WANT TO DISPATCH 
const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'})
  }
}
//ITS A FUNCTION WHICH RETURNS A FUNCTION WHICH TAKES THEN A COMPONENT AS INPUT
//FIRST ARG IS THE CONFIG PASSED FOR THE GIVEN CONTAINER/COMPONENT
//SECOND ARG IS YOUR ACTIONS YOU WANT TO DISPATCH
export default connect(mapStateToProps, mapDispatchToProps)(App);
