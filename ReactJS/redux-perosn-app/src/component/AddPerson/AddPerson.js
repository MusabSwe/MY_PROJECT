import { useState } from 'react';
import './AddPerson.css';
const AddPerson = (props) => {
    // does not need to add it in the redux since 
    // it is manage only this component
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }
    return (
        <div className='add-person'>
            <input
                type="text"
                placeholder='Name'
                onChange={nameChangeHandler}
                value={name}
            />
            <input
                type="number"
                placeholder='age'
                onChange={ageChangeHandler}
                value={age}
            />
            {/* () +> props.clicked() called ananymous function which is used when want to pass variables */}
            {/* () => props.cliked(state.name, state.age) */}
            <button onClick={() => props.cliked(name, age)}>Add Person</button>
        </div>
    );
}

export default AddPerson;