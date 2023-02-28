import React, { Component } from 'react';
import './App.css';
import People from '../compoents/People/People';
import Cockpit from '../compoents/Cockpit/Cockpit';


class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor');
  }
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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  compo

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
    console.log('[App.js] render');
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
          <People
            people={this.state.people}
            clicked={this.deleteHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className='App'>
        <Cockpit
          title={this.props.appTitle}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
  }
}
// Radium(App) called higher order component 
export default App;
