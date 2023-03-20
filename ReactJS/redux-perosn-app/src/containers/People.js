import Person from '../component/Person/Person';
import AddPerson from '../component/AddPerson/AddPerson';
import { useState } from 'react';
// import { connect } from 'react-redux';
const People = () => {
    // will remove local state and listen handler
    // and we use Redux
    const [persons, setPersons] = useState([]);

    const RandomPerson = () => {
        const age = Math.floor(Math.random() * 51) + 10;
        const p = { id: persons.length, name: "Max", age: age };
        // Spread operator to create list of elements
        setPersons([...persons, p])

        // console.log(p);
    }

    return (
        <div>
            <AddPerson cliked={RandomPerson} />
            {
                persons?.map((person) => (
                    <Person key={person.id} name={person.name} age={person.age} />
                ))
            }
        </div>
    );
}

export default People;