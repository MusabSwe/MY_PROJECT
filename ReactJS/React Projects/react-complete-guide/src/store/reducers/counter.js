import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';
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
            // longer approach it is same as ...state
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            // cleaner way to implement actions
            return updateObject(state, { counter: state.counter + 1 })

        case actionTypes.DECREMENT:
            // cleaner way to implement actions
            return updateObject(state, { counter: state.counter - 1 });
        // return {
        //     ...state,
        //     counter: state.counter - 1,
        // }

        case actionTypes.ADD_FIVE:
            // cleaner way to implement actions
            return updateObject(state, { counter: state.counter + action.val });
        // return {
        //     // we add spread operator to keep 
        //     // state.result untouched
        //     ...state,
        //     counter: state.counter + action.val,
        // }
        case actionTypes.SUB_FIVE:
            // cleaner way to implement actions
            return updateObject(state, { counter: state.counter - action.val });
        // return {
        //     ...state,
        //     counter: state.counter - action.val,
        // }
    }
    return state;
};

export default reducer;