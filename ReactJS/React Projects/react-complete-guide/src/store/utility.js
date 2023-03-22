export const updateObject = (oldObject, updatedValues) => {
    return{
        // create new object that clone old object
        ...oldObject,
        // 
        ...updatedValues,
    };
};