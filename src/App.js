import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Lisa", age: 19 },
      { name: "Mansi", age: 15 },
      { name: "Navin", age: 44 }
    ],
    otherState: 'some other value'
  };
  // state is available only for class based components and not for functional ones. But this feature is allowed
  // in some new way in the latest versions of React (16)
  // Changing props or state is the only way (apart from Rect Hooks) to make React re-render the DOM for update purposes

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS this.state.persons[0].name = "Wow tho"; doesn't work actually
    this.setState({persons: [
      { name: "Lisa Chandra", age: 19 },
      { name: "Mansi", age: 15 },
      { name: "Navin", age: 44 }
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Irritating people</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // It is best practice to return only one element that wraps everything instead of two or more adjacent elements
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

    // In the onClick function it is important to not add the paranthesis in the function name because that causes the
    // function to be executed immediately once the DOM is rendered.
  }
}

export default App;
