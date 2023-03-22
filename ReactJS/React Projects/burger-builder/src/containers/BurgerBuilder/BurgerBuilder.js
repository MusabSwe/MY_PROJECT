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
import { connect } from "react-redux";
import * as burgerBuilderActions from '../../store/actions/index';

// const INGREDIENT_PRICES = {
//     salad: 0.5,
//     cheese: 0.4,
//     meat: 1.3,
//     bacon: 0.7
// }

const BurgerBuilder = (props) => {
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
    // const [totalPrice, setTotalPrice] = useState(4);

    // state for UI affect so it is not important to add in the redux
    // use to toggle order button from active to disabled and vice versa 
    const [purchaseable, setPurchaseable] = useState(false);
    // to hide & display Modal
    const [purchasing, setPurchasing] = useState(false);
    // To hide & display spinner
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    // we will use it when we take async Redux
    useEffect(() => {
        
    }, []);


    // used to disable & enable order button
    // to check if the ingredienst is added or removed
    const updatePurchaseState = (ingredients) => {
        // create array of strings
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        return sum > 0;
    }

    // flow of add ingrediens
    // 1. Specify the type of ingredient thet we will add to it
    // 2. retrieve the exist (old) amount of the specified type of ingredient
    // 3. add one to the old amount of the specified type of ingredient (use spread operator)
    // 4. update the amount of the specified type of ingredient 
    // const addIngredientHandler = (type) => {
    //     const oldCount = ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     // Update of states should be done in immutable way
    //     // so we use spread operator
    //     const updateIngredients = {
    //         ...ingredients
    //     };

    //     updateIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     // this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    //     setTotalPrice(newPrice);
    //     setIngredients(updateIngredients);
    //     updatePurchaseState(updateIngredients);
    // }

    // const removeIngredientHandler = (type) => {
    //     const oldCount = ingredients[type];
    //     let updatedCount;
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     updatedCount = oldCount - 1;
    //     const updateIngredients = {
    //         ...ingredients
    //     };
    //     updateIngredients[type] = updatedCount;
    //     const priceSubtraction = INGREDIENT_PRICES[type];
    //     const oldPrice = totalPrice;
    //     const newPrice = oldPrice - priceSubtraction;
    //     // this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    //     setTotalPrice(newPrice);
    //     setIngredients(updateIngredients);
    //     updatePurchaseState(updateIngredients);
    // }

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        // alert('you continue!');

        // const queryParams = [];

        // for (let i in props.ings) {
        //     console.log(i);
        //     // used to get the ingredents from query
        //     // encodeURIComponent used to make params fits with the URL
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ings[i]))
        // }
        // queryParams.push('price=' + props.price);
        // const queryString = queryParams.join('&');

        // navigate({
        //     pathname: '/checkout',
        //     search: '?' + queryString,
        // })

        navigate('/checkout')
    }

    const disabledInfo = {
        ...props.ings
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0 // less than or equal zero
    }
    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />

    if (props.ings) {
        burger = (
            <Auxiliry>
                <Burger ingredients={props.ings} />
                <BuildControls
                    totalPrice={props.price.toFixed(2)}
                    ingredientAdded={props.onAddIngredient}
                    ingredientRemoved={props.onRemoveIngredient}
                    purchaseable={updatePurchaseState(props.ings)}
                    disabled={disabledInfo}
                    ordered={purchaseHandler}
                />
            </Auxiliry>
        );
        orderSummary = <OrderSummary
            ingredients={props.ings}
            price={props.price}
            purchaceCanceled={purchaseCancelHandler}
            purchaceContinued={purchaseContinueHandler}
        />
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

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onRemoveIngredient: (ingName) => dispatch(burgerBuilderActions.RemoveIngredient(ingName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));