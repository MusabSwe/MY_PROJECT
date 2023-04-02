import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { connect } from "react-redux";

const Checkout = (props) => {

    const navigate = useNavigate();

    // Cancel Button in the /checkout page
    const checkOutCancelledHandler = () => {
        // return back to the previoes page
        navigate(-1);
    }

    // const refreshPage = () => {
    //     window.location.reload(false);
    // }

    // Continue Button in the /checkout page
    const checkOutContinued = () => {
        navigate('contact-data', { replace: true, state: { ingredients: props.ings, price: props.price } });
    }
    let summary = (
        <div>
            {/* not loading CheckOutSummary (/checkout page) page
            //  if the ingredients not loaded */}
            <CheckOutSummary
                ingredients={props.ings}
                checkOutCancelled={checkOutCancelledHandler}
                checkOutContinued={checkOutContinued}
            />

            <Outlet />
        </div>
    );

    // if (window.location.reload(false)) {
    //     navigate('/');
    // }

    return summary;
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