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
    }
}