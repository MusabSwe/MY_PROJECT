import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// interceptors define globally for handling error locally
// useful for autherization headers
// helpful for log responses
axios.interceptors.request.use(req => {
    console.log(req);
    // Edit request
    // should return req to prevent blocking other requests
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(res => {
    console.log(res);
    // Edit request
    // should return req to prevent blocking other requests
    return res;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();