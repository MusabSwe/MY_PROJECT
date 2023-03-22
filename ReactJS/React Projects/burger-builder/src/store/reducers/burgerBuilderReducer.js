import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    error: false,
    totalPrice: 4,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const burgerBuilderReducer = (state = initialState, action) => {
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
        // SET Ingredients --> means fetch ingredients
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                    error: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default burgerBuilderReducer;