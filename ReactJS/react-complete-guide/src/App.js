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
        <Person />
      </div>
    );
  }
}

export default App;
