import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

// we use combineReducers when we have multiple reducers to combine them
// where each reducer manage differnt state
const rootReducer = combineReducers({
    // ctr & res we use it to access states for each reducer
    // and act as a global state 
    // make sure the same name below when you calle it
    ctr: counterReducer,
    res: resultReducer
})

// Middleware
const logger = store => {
    return next => {
        return action => {
            // inner function to receive middleware
            console.log('Middleware Dispatcing', action)
            // let action continue to reducer
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

// to use redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// take the reducer as an input
// so we create a folder called store and inside it a reducer file 
// to initiate the store 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

// Provider helper component used to inject or store into react components
// has store prop
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
