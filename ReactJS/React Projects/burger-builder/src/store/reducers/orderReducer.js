import * as actionTypes from '../actions/actionTypes';
const initialState = {
    orders: [],
    loading: false,

}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        // dispatched in the in the actionCreator of frthching data 
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true,
            };
        // dispatched in the in the actionCreator of frthching data
        // if the data received  with 200 ok
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
            }
        // dispatched in the in the actionCreator of frthching data
        // if the data lost  with 404 not Found
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false,
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
};

export default orderReducer;