import Burger from "../../Burger/Burger";
import Button from "../../../UI/Button/Button";
import classes from './CheckoutSummary.module.css'
const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well!</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType='Danger'
                clicked={props.checkOutCancelled}>Cancel</Button>
            <Button
                btnType='Success'
                clicked={props.checkOutContinued}>Continue</Button>

        </div>
    );
}

export default checkOutSummary;