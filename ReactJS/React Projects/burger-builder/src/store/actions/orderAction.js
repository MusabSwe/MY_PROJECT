// used to for submition orders
import * as actionTypes from './actionTypes';
import { useNavigate } from "react-router";
import axios from '../../axios-orders';

// action creators

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error,

    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,

    };
};


// when the user clicks on order button to post Data to Firebase DB
export const purchaseBurgerStartFetch = (orderData) => {

    return dispatch => {
       
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData)
            .then(res => {
                // setLoading(false);
                dispatch(purchaseBurgerSuccess(res.data, orderData));
                // navigate('/');
            }).catch(err => {
                // this.setState({ loading: false, purchasing: false });
                // setLoading(false);
                dispatch(purchaseBurgerFail(err))
                // setPurchasing(false);
                // console.log(err);
            });
    };
};