import './AddPerson.css';
const AddPerson = (props) => {
    return (
        <div className='add-person'>
            <input type="text" placeholder='Name' />
            <input type="number" placeholder='age' />
            <button onClick={props.cliked}>Add Person</button>
        </div>
    );
}

export default AddPerson;