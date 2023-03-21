import * as actionTypes from './actionsTypes';
// First action creator
export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT,
    }
};

export const addFive = (value) => {
    return {
        type: actionTypes.ADD_FIVE,
        val: value
    }
};

export const subFive = (value) => {
    return {
        type: actionTypes.SUB_FIVE,
        val: value
    }
};
