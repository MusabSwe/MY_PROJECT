import React, { Component } from "react";
import Auxiliry from "../../hoc/Auxiliry";
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        // console.log("Builder", this.state.ingredients);
        return (
            <Auxiliry>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxiliry>
        );
    }
}

export default BurgerBuilder;