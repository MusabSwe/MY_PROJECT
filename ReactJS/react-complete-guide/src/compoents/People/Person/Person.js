import style from "./Person.module.css"
import React, { Component } from 'react';
import Auxilry from "../../../HOC/Auxilry";

class person extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        console.log("[Person.js] render")
        // Redndering adjacent JSX by enclose them by square brakets []
        // and separate each element by comma and assign for each elemnt a key

        return (
            // <div className={style.Person} >
            <Auxilry>
                <p key="l1" onClick={this.props.click}> I'm {this.props.name}, and I'm {this.props.age} years old</p>
                <p key="l2" >{this.props.children}</p>
                <input key="l3" type="text" onChange={this.props.txtInput} />
            </Auxilry>
            // </div 
        )
    }
}
export default person;