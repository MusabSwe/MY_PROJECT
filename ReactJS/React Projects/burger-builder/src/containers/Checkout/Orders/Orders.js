import { useEffect, useState } from "react";
import Order from "../../../components/Order/Order";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import Spinner from "../../../UI/spinner/spinner";
import * as actions from '../../../store/actions/index';
const Orders = (props) => {

    useEffect(() => {
        props.onFetchOrders(props.token);
    }, []);

    let orders = <Spinner />;
    if (!props.loading) {
        orders = props.orders.map((order) => (
            <Order
                key={order.id}
                price={order.price}
                ingredients={order.ingredients}
            />
        ))
    }

    return (
        <div>
            {orders}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,  
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    };
};

// to display any netwok error in the screen
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));