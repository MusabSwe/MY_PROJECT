import React, { Component } from "react";
import Auxiliry from "../../hoc/Auxiliry";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    // flow of add ingrediens
    // 1. Specify the type of ingredient thet we will add to it
    // 2. retrieve the exist (old) amount of the specified type of ingredient
    // 3. add one to the old amount of the specified type of ingredient (use spread operator)
    // 4. update the amount of the specified type of ingredient 
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        // Update of states should be done in immutable way
        // so we use spread operator
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount;
        if (oldCount <= 0) {
            return;
        }
        updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    }

    render() {
        // console.log("Builder", this.state.ingredients);
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 // less than or equal zero
        }

        return (
            <Auxiliry>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    totalPrice={this.state.totalPrice.toFixed(2)}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Auxiliry>
        );
    }
}

export default BurgerBuilder;