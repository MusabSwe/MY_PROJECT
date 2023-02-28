import style from "./Person.module.css"
import React from 'react';


const person = (props) => {
    console.log('[Person.js] render');
    return (
        <div className={style.Person} >
            <p onClick={props.click}> I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.txtInput} />
        </div >
    );
}

export default person;