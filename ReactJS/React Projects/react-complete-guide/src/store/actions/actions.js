// We use action.js for better readabilty and track error or missing text
// so we make action as a varibales to track the error if it happens qickly

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_FIVE = 'ADD_FIVE';
export const SUB_FIVE = 'SUB_FIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// First action creator
export const increment = () => {
    return {
        type: INCREMENT,
    }
};

export const decrement = () => {
    return {
        type: DECREMENT,
    }
};

export const addFive = (value) => {
    return {
        type: ADD_FIVE,
        val: value
    }
};

export const subFive = (value) => {
    return {
        type: SUB_FIVE,
        val: value
    }
};

const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    };
}

// we use thunk third party library to implement 
// async code with action creators
export const storeResult = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultEId: id
    }
};