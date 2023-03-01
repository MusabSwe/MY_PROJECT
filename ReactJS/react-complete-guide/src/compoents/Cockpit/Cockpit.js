import React, { useEffect, useRef, useState } from 'react';
import cockpitStyle from './Cockpit.module.css';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log("[Cockpit.js] useeffect")
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        // // CleanUp in UseEffect
        toggleBtnRef.current.click();
        return () => {
            console.log('[cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useeffect")
        return () => {
            console.log('[cockpit.js] cleanup work in 2nd useEffect')
        }
    });

    // To display dynamic style and red and bord 
    // are css style in the App.css
    const classes = [];
    if (props.peopleLength <= 2) {
        classes.push('red');
    }
    if (props.peopleLength <= 1) {
        classes.push('bold');
    }
    // dynmic button
    let btnstyle = cockpitStyle.button;

    if (props.showPeople) {
        btnstyle = cockpitStyle.buttonRed;
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnstyle} onClick={props.clicked} >Toggle People</button>
        </div>
    )
}
export default React.memo(Cockpit);