// import React from 'react';
// should add css extension
// import './Person.css'
// import styled from 'styled-components';
import style from "./Person.module.css"
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 10px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;


// @media (min-width: 500px):{
//     width: 450px;
// }
// `;

const person = (props) => {

    return (
        // <div className="Person" style={style}>
        <div className={style.Person} >
            <p onClick={props.click}> I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.txtInput} />
        </div >
    );
}

export default person;