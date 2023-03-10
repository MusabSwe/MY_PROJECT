import React, { PureComponent } from "react"
import Person from "./Person/Person"
// Note if the function will return JSX
// make sure put Parentheses () not curly brackets {}
class people extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[People.js] getDerivedStateFromProps');
    //     return state;
    // }

    // used for performance improvement
    // when we run shouldComponentUpdate 
    // only run the props have changed not refresing all DOM
    // as a result will have a higher performance
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[People.js] shouldComponentUpdate')
    //     // check used for optimization
    //     // but if you return true without 
    //     // checking all the props of will refresh
    //     // so will result bad performance
    //     if (nextProps.people !== this.props.people
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[People.js] componentDidUpdate')
        console.log(snapshot);

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('[People.js] getSnapshotBeforeUpdate');
        return { message: "snapshot!" };
    }

    render() {
        console.log('[People.js] render');
        return (this.props.people.map((person, index) => {
            return (
                <Person
                    IsAuth={this.props.IsAuthenticated}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    txtInput={(e) => this.props.changed(e, person.id)}
                    key={person.id}
                />
            );
        })
        );
    }
}

export default people