import axios from 'axios';
import * as actionTypes from './actionTypes';

// used to show spinner loading state
export const authStart = (authData) => {
    return {
        type: actionTypes.AUTH_START,
    };
};


export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

// async code for authentication
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNdN6q8PUCnnwt3ZTu4VAQhiKkHBlUrfc', authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    }
}