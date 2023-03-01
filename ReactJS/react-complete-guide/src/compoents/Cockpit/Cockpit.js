import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useeffect")
        const timer = setTimeout(() => {
             alert('Saved data to cloud!');
        }, 1000);
        // CleanUp in UseEffect
        return () => {
            clearTimeout(timer);
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

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className='button' onClick={props.clicked}>Toggle People</button>
        </div>
    )
}
export default React.memo(Cockpit);