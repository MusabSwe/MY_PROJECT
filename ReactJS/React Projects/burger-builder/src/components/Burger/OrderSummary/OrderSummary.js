import Auxiliry from "../../../hoc/Auxiliry";

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
        </Auxiliry>
    );
}

export default orderSummary;