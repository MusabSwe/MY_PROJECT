import Auxiliry from "../../../hoc/Auxiliry";
import Button from "../../../UI/Button/Button";
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}
                ><span
                    style={{ textTransform: 'capitalize' }}>
                    </span> : {props.ingredients[igKey]}
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
            <p>Continue to checkout</p>
            <Button btnType="Danger" clicked={props.purchaceCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaceContinued} >CONTINUE</Button>
        </Auxiliry>
    );
}

export default orderSummary;