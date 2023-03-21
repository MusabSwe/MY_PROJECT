import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {
    // if statemens for each action that come from dispatch
    //  in the react component
    // Note Update state immutably
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // we use concat() to create a new array 
                // without changing the original array
                // but puch() function create array with changing the 
                // original array
                // concat() update array immutablly
                results: state.results.concat({ id: new Date(), value: action.result }),
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            // this remove, but it is not immutable
            // state.results.splice(id, 1);

            // filter remove from array without affecting the original array
            // and create a new array of the filtered 
            const updatedArray = state.results.filter(result => result.id !== action.resultEId);
            return {
                // JS object
                ...state,
                results: updatedArray,
            }
    }
    return state;
};

export default reducer;