import { type } from '@testing-library/user-event/dist/type'
import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const inititalState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, inititalState)

    // function to cleaar cart items 
    // we create function here to reusabe it 
    // everywhere in the app 
    // so we add them inside AppContext.Provider within value
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    }

    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: id })
    }

    const decrease = (id) => {
        dispatch({ type: "DECREASE", payload: id })
    }

    const fetchData = async () => {
        dispatch({ type: "LOADING" })
        const res = await fetch(url);
        const cart = await res.json();
        dispatch({ type: "DISPLAY_ITEMS", payload: cart })
    }

    const toggleAmount = (id, type) => {
        dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } })
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                removeItem,
                increase,
                decrease,
                toggleAmount,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }