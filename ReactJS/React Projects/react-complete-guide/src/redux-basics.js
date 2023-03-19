const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0,
}

// Reducer --> has 2 params 1st param ==> the current state
// 2nd param ==> 
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        // do not do like this since the state is immutable such as string
        // and mutate it using spread operator
        // state.counter++;
        // return state;

        //but do the following below
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER') {
        // do not do like this since the state is immutable such as string
        // and mutate it using spread operator
        // state.counter++;
        // return state;

        //but do the following below
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};
// Store
// should be initilized by reducer
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
    /*
    output
    { counter: 0 } invoke by store
    [Subscription] { counter: 1 } invoke by subscription
    [Subscription] { counter: 11 } invoke by subscription
    { counter: 11 } invoke by dispatche
    so the flow reducer --> store --> subscription --> dispacth(type, action (payload))
   */
});


//Dispatching action
// implement if only added in the reducer
store.dispatch({ type: 'INC_COUNTER' });
// store.dispatch({ type: 'ADD_COUNTER', payload: { value: 10, /*add so many states as you want to access it in the reducer */ } });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

