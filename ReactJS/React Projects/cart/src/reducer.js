const reducer = (state, action) => {

    if (action.type === "CLEAR_CART") {
        // RETURN the new sate, but change cart to empty
        return { ...state, cart: [] }
    }

    if (action.type === "REMOVE_ITEM") {
        return {
            ...state, 
            cart: state.cart.filter((cartItem) =>
                cartItem.id !== action.payload),
        }
    }

    return state;
}

export default reducer;