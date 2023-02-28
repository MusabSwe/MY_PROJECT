import style from "./Person.module.css"
import React, { Component } from 'react';


class person extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        console.log("[Person.js] render")
        return (
            <div className={style.Person} >
                <p onClick={this.props.click}> I'm {this.props.name}, and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.txtInput} />
            </div >
        );
    }
}
export default person;