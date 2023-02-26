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
  render() {
    return (
      // JSX
      <div className='App'>
        <h1>Hi, I'm a react App</h1>
        <Person name="Ahmed" age="22" />
        <Person name="Ali" age="32"><strong>My Hobbies: Racing</strong></Person>
      </div>
    );
  }
}

export default App;
