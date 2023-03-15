import { Component, useState } from "react";
import { useNavigate } from "react-router";
import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const Checkout = () => {

    const [ingredients, setIngredients] = useState(
        {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    )

    const navigate = useNavigate();

    const checkOutCancelledHandler = () => {
        navigate(-1);
    }

    const checkOutContinued = () => {
        navigate('/checkout/contact-data');
    }

    return (
        <div>
            <CheckOutSummary
                ingredients={ingredients}
                checkOutCancelled={checkOutCancelledHandler}
                checkOutContinued={checkOutContinued}
            />
        </div>
    );
}

export default Checkout;