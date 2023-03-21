import * as actionTypes from './actionsTypes';

const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
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
        type: actionTypes.DELETE_RESULT,
        resultEId: id
    }
};