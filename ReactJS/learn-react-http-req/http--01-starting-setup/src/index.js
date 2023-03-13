import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// to define the base url and in the http req use only last word 
// ex -->
// axios.get('/posts') instead of axios.get('https://jsonplaceholder.typicode.com/posts') 
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// interceptors define globally for handling error locally
// useful for autherization headers
// helpful for log responses

// for requests
axios.interceptors.request.use(req => {
    console.log(req);
    // Edit request
    // should return req to prevent blocking other requests
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// for response
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