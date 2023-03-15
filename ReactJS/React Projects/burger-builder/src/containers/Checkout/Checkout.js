import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const Checkout = (props) => {

    const [ingredients, setIngredients] = useState(
        {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    )
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const urlIngredients = []
        for (let param of searchParams.entries()) {
            // output: ['salad','1']
            // 0 means point to the first index which is the name of ingredient
            // 1 means the value of the ingredient
            
            console.log(param);
            urlIngredients[param[0]] = +param[1]; // means at index 0 get the value at index 1

        }
        console.log(urlIngredients);
        setIngredients(urlIngredients)
    }, []);


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