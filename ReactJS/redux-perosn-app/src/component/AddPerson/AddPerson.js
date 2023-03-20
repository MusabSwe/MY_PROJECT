import './AddPerson.css';
const AddPerson = (props) => {
    return (
        <div className='add-person'>
            <button onClick={props.cliked}>Add Person</button>
        </div>
    );
}

export default AddPerson;