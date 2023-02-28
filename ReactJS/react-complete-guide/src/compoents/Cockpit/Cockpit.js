import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {

    // To display dynamic style and red and bord 
    // are css style in the App.css
    const classes = [];
    if (props.people.length <= 2) {
        classes.push('red');
    }
    if (props.people.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, I'm a react App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className='button' onClick={props.clicked}>Toggle People</button>
        </div>
    )
}
export default cockpit;