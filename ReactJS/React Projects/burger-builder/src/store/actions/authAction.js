import axios from 'axios';
import * as actionTypes from './actionTypes';

// used to show spinner loading state
export const authStart = (authData) => {
    return {
        type: actionTypes.AUTH_START,
    };
};


export const authSuccess = (token, userId) => {
    return {
        // [same as auth state in the reducer]:[res.data.anyNAme]
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000) //convert from ms to s
    }
}

// async code for authentication
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        // sign up
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNdN6q8PUCnnwt3ZTu4VAQhiKkHBlUrfc';
        if (!isSignup) {
            // sign in
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNdN6q8PUCnnwt3ZTu4VAQhiKkHBlUrfc'
        }
        axios.post(url, authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            })
    }
}