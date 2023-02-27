import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';

class App extends Component {
  state = {
    textLength: "",
  }

  textLengthlistener = (e) => {
    // Big Mistake since it is update
    // this.setState.textLength = [...e.target.value];
    this.setState({textLength: e.target.value.length}); 
    console.log(this.state.textLength);

  }

  render() {
    const style = {
      padding: "10px",
      margin: "10px",
      textAlign: "center"
    }
    return (
      <div style={style}>
        <input type="text" onChange={(e) => this.textLengthlistener(e)} />
        <p>{this.state.textLength}</p>
      </div>
    );
  }
}

export default App;
