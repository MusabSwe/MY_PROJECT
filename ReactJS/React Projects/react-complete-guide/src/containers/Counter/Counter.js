import React, { Component } from 'react';
// HOC in react-redux package
// it is a function return a componetn to reach counter state in the index
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
class Counter extends Component {
    state = {
        counter: 0
    }
    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFiveCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {/* {this.props.storedResults.map(storedResult => (
                        <li key={storedResult.id} onClick={this.props.onDeleteResult}>{storedResult.value}</li>
                    ))} */}
                    {this.props.storedResults.map((strResult) => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// above export at the end of the file after return ()
// we expext state store in the Redux
// so each state in the component will be ignored 
// which will have central state
const mapStateToProps = state => {
    return {
        // state.[ctr].counter
        // ctr in the avove line point to the 
        // combineReducer in the index.js file
        // so make sure name same as in the index.js for combineReducers
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddFiveCounter: () => dispatch(actionCreators.addFive(5)),
        onSubFiveCounter: () => dispatch(actionCreators.subFive(5)),

        /* where result ==> result = this.props.ctr*/
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

// connect has 2 params 1st map passes state as props
// 2nd wrap the componetn of the state we want to manage
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// IF you HAVE a component & only want to dispatch actions
// make the first param as null, and 2nd the dispath actions

// export default connect(null,mapDispatchToProps)(Counter);