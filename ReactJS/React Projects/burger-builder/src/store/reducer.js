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

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
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
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

            };
        default:
            return state;
    }
}

export default reducer;