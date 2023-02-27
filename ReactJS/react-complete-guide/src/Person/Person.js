// import React from 'react';
// should add css extension
import './Person.css'
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.txtInput} />
        </div>
    );
}

export default person;