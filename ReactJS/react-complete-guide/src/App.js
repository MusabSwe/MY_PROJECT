import React, { useState, Component } from 'react';
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
  // const [people, setPeople] = useState([
  //   { name: 'Jaber', age: 28 },
  //   { name: 'Ali', age: 18 },
  //   { name: 'Ahmed', age: 48 }
  // ]);

  state = {
    people: [
      { name: 'Jaber', age: 28 },
      { name: 'Ali', age: 18 },
      { name: 'Ahmed', age: 48 }
    ]
  }
  // Methods unlike const handler in the function
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      people: [
        { name: newName, age: 28 },
        { name: 'Ali', age: 50 },
        { name: 'Ahmed', age: 50 }
      ]
    })
  }

  // const switchNameHandler = () => {
  //   // when we use setPeople and remove 
  //   // an oject this will remove totally 
  //   // the old one, but if we want to it 
  //   // has the same structure then we 
  //   // implement as the original structure 
  //   setPeople([
  //     { name: 'Musab', age: 28 },
  //     { name: 'Ali', age: 50 },
  //     { name: 'Ahmed', age: 50 }
  //   ])
  // }

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
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, "MAx!")}
        >
          <strong>My Hobbies: Racing</strong>
        </Person>
      </div>
    );
  }
}

export default App;
