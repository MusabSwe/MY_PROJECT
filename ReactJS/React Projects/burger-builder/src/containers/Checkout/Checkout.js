import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useSearchParams, useLocation, Outlet } from "react-router-dom";
import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
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
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
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

        setCurrentPath(location.pathname);
        console.log(location.pathname);
    }, [location]);


    const checkOutCancelledHandler = () => {
        navigate(-1);
    }

    const checkOutContinued = () => {
        navigate('contact-data', { replace: true });
    }

    return (
        <div>
            <CheckOutSummary
                ingredients={ingredients}
                checkOutCancelled={checkOutCancelledHandler}
                checkOutContinued={checkOutContinued}
            />
            <Outlet />
        </div>
    );
}

export default Checkout;