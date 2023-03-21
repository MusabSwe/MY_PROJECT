import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                // Notes
                // ...state does not deeply clone inner object inside state 
                // so we make 2 clone 1st for entire state (object) 2nd for ingredient object
                ...state,
                ingredients: {
                    ...state.ingredients,
                    //  In ES6 we can dynmically overwrite property in a given JS objetc
                    //  we can dynmically overwrite using array brakets 
                    // which is special syntax in the ES6 
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }

            };
        default:
            return state;
    }
}

export default reducer;