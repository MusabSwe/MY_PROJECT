import React from "react"
import Person from "./Person/Person"

// Note if the function will return JSX
// make sure put Parentheses () not curly brackets {}
const people = (props) => {
    console.log('[People.js] render');
    return props.people.map((person, index) => {
        return (
            <Person
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            txtInput={(e) => props.changed(e, person.id)}
            key={person.id}
        />
        );
    });
}

export default people