const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {
    // if statemens for each action that come from dispatch
    //  in the react component
    // Note Update state immutably
    switch (action.type) {
        case 'INCREMENT':
            // Clone state in immutable way
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'ADD_FIVE':
            return {
                // we add spread operator to keep 
                // state.result untouched
                ...state,
                counter: state.counter + 5,
            }
        case 'SUB_FIVE':
            return {
                ...state,
                counter: state.counter - 5,
            }
        case "STORE_RESULT":
            return {
                ...state,
                // we use concat() to create a new array 
                // without changing the original array
                // but puch() function create array with changing the 
                // original array
                // concat() update array immutablly
                results: state.results.concat({id: new Date(), value: state.counter}),
            }
        // case "DELETE_RESULT":
        //     return {

        //     }         
    }
    return state;
};

export default reducer;