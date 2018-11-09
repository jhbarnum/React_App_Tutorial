import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Jared', age: 41 },
      { name: 'Laura', age: 34 },
      { name: 'Georgia', age: 3 },
      { name: 'Abel', age: .5 }
    ]
  }

  switchNameHandler = () => {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> I like coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/> 
      </div>
    );
  }
}

export default App;
