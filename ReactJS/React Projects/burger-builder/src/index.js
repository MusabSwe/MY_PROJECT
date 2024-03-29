import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';
import authReducer from './store/reducers/authReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));


// we use combineReducers when we have multiple reducers to combine them
// where each reducer manage differnt state
const rootReducer = combineReducers({
  // burger & order we use it to access states for each reducer
  // and act as a global state 
  // make sure the same name below when you calle it
  burger: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
