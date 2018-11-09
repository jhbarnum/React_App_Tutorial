import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <Person name="Jared" age="41"> I like coding</Person>
        <Person name="Laura" age="34"/>
        <Person name="Georgia" age="3"/>
        <Person name="Abel" age="6 months"/> 
      </div>
    );
  }
}

export default App;
