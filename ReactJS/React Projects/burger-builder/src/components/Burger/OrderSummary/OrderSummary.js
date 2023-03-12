import { Component } from "react";
import Auxiliry from "../../../hoc/Auxiliry";
import Button from "../../../UI/Button/Button";

class OrderSummary extends Component {
    // This could be functional component, does not have to be class component
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}
                    ><span
                        style={{ textTransform: 'capitalize' }}>
                        </span> : {this.props.ingredients[igKey]}
                    </li>
                )
            });
        return (
            <Auxiliry>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaceCanceled} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaceContinued} >CONTINUE</Button>
            </Auxiliry>
        );
    }
}

export default OrderSummary;