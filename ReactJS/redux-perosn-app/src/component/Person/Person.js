import './Person.css';
const Person = (props) => {
    return (
        <div className="person" onClick={props.click}>
            <h3>{props.name}</h3>
            <p>Age: <strong>{props.age}</strong></p>
        </div>
    );
}

export default Person;