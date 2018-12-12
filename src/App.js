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
      { id: '1234', name: 'Jared', age: 41 },
      { id: '2345', name: 'Laura', age: 34 },
      { id: '3456', name: 'Georgia', age: 3 },
      { id: '4567', name: 'Abel', age: .5 }
    ],
    showPersons:false
  }
nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.find(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});
}

  togglePersonsHandler = (newName) => {
    console.log('Clicked');
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person 
                name={person.name}
                age={person.age}
                click={()=>this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                key={person.id}/>
              })}
              {/* <Person
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
                changed={this.nameChangeHandler} /> */}
              <Cakes
                name={this.state.cakes[0].name} />
            </div> 
          )
      }
 
    return (
      <div className="App">
        <h1>hello world</h1>
        <button style={style} 
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
