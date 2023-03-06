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

    if (action.type === "INCREASE") {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 };
            }
            return cartItem
        });

        return { ...state, cart: tempCart }
    }

    if (action.type === "DECREASE") {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 };
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)

        return { ...state, cart: tempCart }
    }

    // both Total of items & Total price
    if (action.type === "GET_TOTALS") {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            // amount of items in the navbar
            cartTotal.amount += amount;
            return cartTotal;
        }, {
            total: 0,
            amount: 0,
        })
        total = parseFloat((total.toFixed(2)));
        return { ...state, total, amount }
    }

    // To imolement fetch data from an API using reducer
    if (action.type === "LOADING") {
        return { ...state, loading: true }
    }

    if (action.type === "DISPLAY_ITEMS") {
        return { ...state, cart: action.payload, loading: false }
    }

    return state;
}

export default reducer;