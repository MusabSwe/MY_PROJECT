import * as actionTypes from './actions';
const initialState = {
    // list of div (People)
    // to create dynmic people based on  
    // click that receives from dispatch and store in the reducer
    pearsons: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.ADD_PERSON) {
        // OnClick() instrctions of adding persons below
        const age = Math.floor(Math.random() * 51) + 10;
        const p = { id: state.pearsons.length, name: "Max", age: age };
        return {
            ...state,
            // to add in the array immutably (non in the original)
            pearsons: state.pearsons.concat(p)
        }
    }
    return state;
}

export default reducer;