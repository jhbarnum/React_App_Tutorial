import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

import Cakes from './Cakes.js/Cakes.js';

class App extends Component {
  state = {
    cakes: [
      {name: 'chocolate', age: '5 days'}
    ],
    persons: [
      { name: 'Jared', age: 41 },
      { name: 'Laura', age: 34 },
      { name: 'Georgia', age: 3 },
      { name: 'Abel', age: .5 }
    ],
    showPersons:false
  }
nameChangeHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Jared', age: 40 },
      { name: 'Laura', age: 33 },
      { name: 'Georgia', age: 2 },
      { name: event.target.value, age: .5 }
    ]
  })
}

  switchNameHandler = (newName) => {
//console.log('Clicked');
    //this.state.persons[0].name = 'Barnum';
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    // this.setState( {
    //   persons: [
    // { name: newName, age: 40 },
    // { name: 'Laura', age: 33 },
    // { name: 'Georgia', age: 2 },
    // { name: 'Abel', age: .5 }
    //   ]
    // })
  }

  render() {
    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

   let persons = null;

   if (this.state.showPersons) {
      // persons = (
       

      // );
   }
    return (
      <div className="App">
        <h1>hello world</h1>
        <button style={style} 
        onClick={this.switchNameHandler}>Switch Name</button>
        {
          
        this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}> I like coding</Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'J-Rock')} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
            <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age}
              changed={this.nameChangeHandler} />
            <Cakes
              name={this.state.cakes[0].name} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
