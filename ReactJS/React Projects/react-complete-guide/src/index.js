import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// take the reducer as an input
// so we create a folder called store and inside it a reducer file 
// to initiate the store 
const store = createStore(reducer);

// Provider helper component used to inject or store into react components
// has store prop
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
