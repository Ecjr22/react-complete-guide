import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

 state = {
      persons: [
        {
          id: 1, name: 'Max', age: 28
        }, 
        {
          id: 2, name: 'Manu', age: 29
        },
        {
          id: 3, name: 'Stephanie', age: 26
        }
      ], 
      otherState: 'some other value',
      showPersons: false
      
    }

  nameChangedHandler = (event) => {

    this.setState({
      persons: [
        {
          name: 'Max', age: 28
        }, 
        {
          name: event.target.value, age: 29
        },
        {
          name: 'Stephanie', age: 27
        }
      ]
    });

  }

  deletePersonHandler = (personIndex) => {

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // a new array with the objects of the old array but not the old object itself (same as using slice)
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});

  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            { // using JavaScript for outputting a list by mapping the array
              this.state.persons.map((person, index) => {
                return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id}/>
              })
            }
          </div>
      );
    }

    return (

      // This is JSX not html
      //The arrow function for 'onClick' may not be effienct like the example bellow with 'click' I should use .bind regularly
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );

  }

    // This is what JSX gets compiled to. This is cumbersome
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;

