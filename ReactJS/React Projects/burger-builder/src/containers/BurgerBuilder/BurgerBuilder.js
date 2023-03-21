import React, { useEffect, useState } from "react";
import Auxiliry from "../../hoc/Auxiliry";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from '../../UI/Modal/Modal';
// axios configuration for order not globally defined
import axios from "../../axios-orders";
import Spinner from "../../UI/spinner/spinner";
import withErrorHandler from "../../withErrorHandler/withErrorHandler";
// import axios from "axios";
import { useNavigate } from "react-router";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = () => {
    // state = {
    //     ingredients: null,
    //     totalPrice: 4,
    //     purchaseable: false,
    //     purchasing: false,
    //     loading: false,
    //     error: false,
    // }

    // states 
    // We will add this in Redux to manage the state
    const [ingredients, setIngredients] = useState(null);
    const [totalPrice, setTotalPrice] = useState(4);

    // state for UI affect so it is not important to add in the redux
    // use to toggle order button from active to disabled and vice versa 
    const [purchaseable, setPurchaseable] = useState(false);
    // to hide & display Modal
    const [purchasing, setPurchasing] = useState(false);
    // To hide & display spinner
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://burger-builder-fe664-default-rtdb.firebaseio.com/ingredients.json')
            .then(res => {
                setIngredients(res.data);
            }).catch(error => {
                console.log(error);
                setError(true);
            });
    }, []);


    const updatePurchaseState = (ingredients) => {
        // create array of strings
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        setPurchaseable(sum > 0);
    }

    // flow of add ingrediens
    // 1. Specify the type of ingredient thet we will add to it
    // 2. retrieve the exist (old) amount of the specified type of ingredient
    // 3. add one to the old amount of the specified type of ingredient (use spread operator)
    // 4. update the amount of the specified type of ingredient 
    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        // Update of states should be done in immutable way
        // so we use spread operator
        const updateIngredients = {
            ...ingredients
        };

        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        // this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        setTotalPrice(newPrice);
        setIngredients(updateIngredients);
        updatePurchaseState(updateIngredients);
    }

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        let updatedCount;
        if (oldCount <= 0) {
            return;
        }
        updatedCount = oldCount - 1;
        const updateIngredients = {
            ...ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        // this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
        setTotalPrice(newPrice);
        setIngredients(updateIngredients);
        updatePurchaseState(updateIngredients);
    }

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        // alert('you continue!');

        const queryParams = [];

        for (let i in ingredients) {
            console.log(i);
            // used to get the ingredents from query
            // encodeURIComponent used to make params fits with the URL
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]))
        }
        queryParams.push('price=' + totalPrice);
        const queryString = queryParams.join('&');

        navigate({
            pathname: '/checkout',
            search: '?' + queryString,
        })
    }
    const disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0 // less than or equal zero
    }
    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />

    if (ingredients) {
        burger = (
            <Auxiliry>
                <Burger ingredients={ingredients} />
                <BuildControls
                    totalPrice={totalPrice.toFixed(2)}
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    purchaseable={purchaseable}
                    disabled={disabledInfo}
                    ordered={purchaseHandler}
                />
            </Auxiliry>
        );
        orderSummary = <OrderSummary
            ingredients={ingredients}
            price={totalPrice}
            purchaceCanceled={purchaseCancelHandler}
            purchaceContinued={purchaseContinueHandler}
        />
    }

    if (loading) {
        orderSummary = <Spinner />
    }

    return (
        <Auxiliry>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Auxiliry>
    );
}

export default withErrorHandler(BurgerBuilder, axios);