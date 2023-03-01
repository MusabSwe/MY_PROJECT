import style from "./Person.module.css"
import React, { Component } from 'react';
import Auxilry from "../../../HOC/Auxilry";
import wrapper from "../../../HOC/wrapper";
import propTypes from 'prop-types';
import AuthContext from "../../../context/auth-context";
class person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount() {
        this.inputElement.current.focus();

    }
    render() {
        console.log("[Person.js] render")
        // Redndering adjacent JSX by enclose them by square brakets []
        // and separate each element by comma and assign for each elemnt a key

        return (
            <Auxilry>
                <AuthContext.Consumer>
                    {(context) => context.authenticated? <p>Authenticated</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p key="l1" onClick={this.props.click}> I'm {this.props.name}, and I'm {this.props.age} years old</p>
                <p key="l2" >{this.props.children}</p>
                <input
                    key="l3"
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.txtInput}
                />
            </Auxilry>
        )
    }
}
// used to make the system robustness 
// if the user enter 
// string value and should number
person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    txtInput: propTypes.func
};
export default wrapper(person, style.Person);