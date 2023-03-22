import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

// create Actions
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const RemoveIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

// fetch ingredients async
export const initIngredients = () => {

    return dispatch => {
        axios.get('https://burger-builder-fe664-default-rtdb.firebaseio.com/ingredients.json')
            .then(res => {
                // to reducer dispatched
                dispatch(setIngredients(res.data));
            }).catch(error => {
                //  to reducer dispatched
                dispatch(fetchIngredientsFailed);
            });
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
};