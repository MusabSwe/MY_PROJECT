const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0,
}

// Reducer --> has 2 params 1st param ==> the current state
// 2nd param ==> 
const rootReducer = (state = initialState, action) => {
    return state;
};
// Store
// should be initilized by reducer
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching action

// Subscription