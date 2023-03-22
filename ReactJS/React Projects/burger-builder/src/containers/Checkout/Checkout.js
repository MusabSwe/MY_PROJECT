import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Routes, Route, useSearchParams, useLocation, Outlet } from "react-router-dom";
import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

const Checkout = (props) => {

    // const [ingredients, setIngredients] = useState(
    //     {
    //         salad: 1,
    //         meat: 1,
    //         cheese: 1,
    //         bacon: 1
    //     }
    // )
    // const [price, setPrice] = useState(0);


    const navigate = useNavigate();
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    // useMemo(() => {
    //     const urlIngredients = []
    //     let price = 0;
    //     for (let param of searchParams.entries()) {
    //         // output: ['salad','1']
    //         // 0 means point to the first index which is the name of ingredient
    //         // 1 means the value of the ingredient

    //         // console.log(param);
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             urlIngredients[param[0]] = +param[1]; // means at index 0 get the value at index 1
    //         }


    //     }
    //     console.log(urlIngredients);
    //     setIngredients(urlIngredients)
    //     setPrice(price);
    //     setCurrentPath(location.pathname);
    //     console.log(location.pathname);
    // }, []);


    const checkOutCancelledHandler = () => {
        // reyurn back to the previoes page
        navigate(-1);
    }

    const checkOutContinued = () => {
        navigate('contact-data', { replace: true, state: { ingredients: props.ings, price: props.price } });
    }
    return (
        <div>
            <CheckOutSummary
                ingredients={props.ings}
                checkOutCancelled={checkOutCancelledHandler}
                checkOutContinued={checkOutContinued}
            />

            <Outlet />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // we add state.burger.ing
        // since we have multiple reducers
        // so as a result we add file that 
        // we are managing its state
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
    };
}

// we do not dispatch since everything handlling using routing
// const mapStateToDispatch = state => {
//     return {

//     };
// }

export default connect(mapStateToProps)(Checkout);