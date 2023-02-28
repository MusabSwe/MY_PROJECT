import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import Person from '../compoents/Pearsons/Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <h1>H1, I'm a React App</h1>
//     </div>
//   );
// }
// const StyledButton = styled.button`
//       // Regular CSS
//       background-color: ${props => props.dyn ? "red": "green"};
//       color: white;
//       font: sans-serif;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;

//       // we add & to tell style this hover belong to the button 
//       &:hover {
//         background-color: ${props => props.dyn ? "salmon": "lightgreen"};
//         color: black;
//       }
// `;

class App extends Component {
  // state & this setState are from Component class
  // const [people, setPeople] = useState([
  //   { name: 'Jaber', age: 28 },
  //   { name: 'Ali', age: 18 },
  //   { name: 'Ahmed', age: 48 }
  // ]);

  state = {
    people: [
      { id: 1, name: 'Jaber', age: 28 },
      { id: 2, name: 'Ali', age: 18 },
      { id: 3, name: 'Ahmed', age: 48 }
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

  // To see which element change
  nameChangeHandler = (e, id) => {
    const perosnIndex = this.state.people.findIndex(p => { return p.id === id });
    // It is good practice to do not change state directly
    // so we will use spread operator
    const person = { ...this.state.people[perosnIndex] };
    // To update each name alone
    // and assign each text Input
    // for its component 
    person.name = e.target.value;
    const persons = [...this.state.people];
    persons[perosnIndex] = person;

    this.setState({ people: persons });
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

  deleteHandler = (personIndex) => {
    // Immutable Way
    // 1. using Slice which will not change the original array
    // const people = this.state.people.slice();
    // 2. Using spread operator which will not change the original array
    const people = [...this.state.people];
    // remove the personIndex
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'sans-serif',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer",
    };
    // Steps to display & hide contents
    // 1. set value null
    // 2. condition statment
    // 3. value = JSX ()
    // 4. state value with the condition statement

    let people = null;
    if (this.state.showPeople) {
      people = (
        // JSX
        <div>
          {this.state.people.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deleteHandler(index)}
              txtInput={(e) => this.nameChangeHandler(e, person.id)}
              key={person.id}
            />
          })}
        </div>
      );
      style.backgroundColor = "red ";

    }

    // To display dynamic style and red and bord 
    // are css style in the App.css
    let classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red');
    }
    if (this.state.people.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className='App'>
        <h1>Hi, I'm a react App</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        {/* 
          Do not add pranthesis switchNameHandler() --> as a result, 
          the method will invoke when we run the app only
          only add the refernce switchNameHandler
        */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <button className='button' onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>

    );
  }
}
// Radium(App) called higher order component 
export default App;
