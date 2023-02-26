import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// function App() {
//   return (
//     <div className="App">
//       <h1>H1, I'm a React App</h1>
//     </div>
//   );
// }

class App extends Component {
  // state & this setState are from Component class
  state = {
    people: [
      { name: 'Jaber', age: 28 },
      { name: 'Ali', age: 18 },
      { name: 'Ahmed', age: 48 }
    ]
  }
  // Methods unlike const handler in the function
  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      people: [
        { name: 'Musab', age: 28 },
        { name: 'Ali', age: 50 },
        { name: 'Ahmed', age: 50 }
      ]
    })
  }

  render() {
    return (
      // JSX
      <div className='App'>
        <h1>Hi, I'm a react App</h1>
        {/* 
          Do not add pranthesis switchNameHandler() --> as a result, 
          the method will invoke when we run the app only
          only add the refernce switchNameHandler
        */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}><strong>My Hobbies: Racing</strong></Person>
      </div>
    );
  }
}

export default App;
