const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    // if statemens for each action that come from dispatch
    //  in the react component
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1,
            }
        case 'ADD_FIVE':
            return {
                counter: state.counter + 5,
            }
        case 'SUB_FIVE':
            return {
                counter: state.counter - 5,
            }
    }
    return state;
};

export default reducer;