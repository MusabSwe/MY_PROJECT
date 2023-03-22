export const updateObject = (oldObject, updatedValues) => {
    return{
        // syntax of the action in the reducer
        // create new object that clone old object
        ...oldObject,
        // update state such as increment, update, remove etc..
        ...updatedValues,
    };
};