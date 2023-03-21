import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    // if statemens for each action that come from dispatch
    //  in the react component
    // Note Update state immutably
    switch (action.type) {
        case actionTypes.INCREMENT:
            // Clone state in immutable way
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionTypes.ADD_FIVE:
            return {
                // we add spread operator to keep 
                // state.result untouched
                ...state,
                counter: state.counter + action.val,
            }
        case actionTypes.SUB_FIVE:
            return {
                ...state,
                counter: state.counter - action.val,
            }
    }
    return state;
};

export default reducer;