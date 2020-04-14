import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Lisa", age: 19 },
      { name: "Mansi", age: 15 },
      { name: "Navin", age: 44 }
    ],
    otherState: 'some other value'
  });
  // useState returns an array that has exactly two elements. The first one is the current state and the other is used to set new state.
  // Changing props or state is the only way (apart from Rect Hooks) to make React re-render the DOM for update purposes.

  const [otherState, setOtherStae] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: "Lisa Chandra", age: 19 },
        { name: "Mansi", age: 15 },
        { name: "Navin", age: 20 }
      ],
      // otherState: personsState.otherState
    });
    // Now the setPersonsState here replaces the previous state unlike the setState method in class. 
    // Therefore you have to mention the values of other variables as well if you do not want to lose them.
    // However you can just use multiple useState instead of manually merging each time.
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Irritating people</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // It is best practice to return only one element that wraps everything instead of two or more adjacent elements
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  // In the onClick function it is important to not add the paranthesis in the function name because that causes the
  // function to be executed immediately once the DOM is rendered.
  
}

export default app;

// It is recommended to use as many stateless components as possible. Stateless components are also called dumb or presentational coponents.
// Stateful components are also called smart components.
// It is nice to have less stateful components to make it easy to understand and manage. Escpecially the workflow.