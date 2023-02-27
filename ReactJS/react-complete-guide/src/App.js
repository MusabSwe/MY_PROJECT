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
    ],
    showPeople: false
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

  nameChangeHandler = (e) => {
    this.setState({
      people: [
        { name: e.target.value, age: 50 },
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

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  }

  render() {
    const style = {
      background: 'white',
      font: 'sans-serif',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    };
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
        <button style={style} onClick={this.togglePeopleHandler}>Toggle People</button>
        {
          this.state.showPeople === true ?
            <div>
              <Person
                name={this.state.people[0].name}
                age={this.state.people[0].age}
                click={this.switchNameHandler}
                txtInput={this.nameChangeHandler}
              />
              <Person
                name={this.state.people[1].name}
                age={this.state.people[1].age}
                click={this.switchNameHandler.bind(this, "MAx!")}
              >
                <strong>My Hobbies: Racing</strong>
              </Person>
            </div>
            : null
        }
      </div>
    );
  }
}

export default App;
