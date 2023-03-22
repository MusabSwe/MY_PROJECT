import * as actionTypes from './actionsTypes';

const saveResult = (result) => {
    // change data here or reducer
    // here better for async code 
    // const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}
// we use thunk third party library to implement 
// async code with action creators
export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultEId: id
    }
};