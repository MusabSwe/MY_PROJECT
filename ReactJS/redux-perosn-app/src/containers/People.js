import Person from '../component/Person/Person';
import AddPerson from '../component/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
const People = (props) => {
    // will remove local state and listen handler
    // and we use Redux
    // const [persons, setPersons] = useState([]);

    // const RandomPerson = () => {
    //     const age = Math.floor(Math.random() * 51) + 10;
    //     const p = { id: persons.length, name: "Max", age: age };
    //     // Spread operator to create list of elements
    //     setPersons([...persons, p])

    //     // console.log(p);
    // }

    return (
        <div>
            <AddPerson cliked={props.onAddPerson} />
            {
                props.people?.map((person) => (
                    <Person key={person.id} name={person.name} age={person.age} />
                ))
            }
        </div>
    );
}


const mapStateToProps = state => {
    return {
        people: state.pearsons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({ type: actionTypes.ADD_PERSON })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);