import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Musab Mohammed"
  }

  usernameChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      // JSX
      <div className='App'>
        <UserInput change={this.usernameChangeHandler.bind(this)} />
        <br />
        {/* <input type="text" onChange={this.usernameChangeHandler}/> */}
        <UserOutput name={this.state.username} currentName={this.state.username} />
        <UserOutput name={this.state.username} currentName={this.state.username} />
        <UserOutput name='Musab' />

      </div>
    );
  }
}

export default App;
