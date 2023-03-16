import { useState } from "react";
import Button from "../../../UI/Button/Button";
import classes from './ContactData.module.css';
import { useLocation } from "react-router";
import axios from "../../../axios-orders";
import Spinner from "../../../UI/spinner/spinner";
import { useNavigate } from "react-router";
const ContactData = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        street: '',
        postalCode: '',
    });
    const [loading, setLoading] = useState(false);

    // Routes
    const location = useLocation();
    const navigate = useNavigate();

    const orderHandler = (e) => {
        e.preventDefault();
        // To test the date come from Checkout by useNavigate
        // console.log(location.state.price);
        // console.log(location.state.ingredients)
        setLoading(true);
        const order = {
            ingredients: location.state.ingredients,
            price: location.state.price,
            customer: {
                name: 'Max',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'China',
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }

        // in firebase you shoould add an extension of .json in the path
        axios.post('/orders.json', order)
            .then(res => {
                // this.setState({ loading: false, purchasing: false });
                setLoading(false);
                // setPurchasing(false);
                console.log(res);
                navigate('/');
            }).catch(err => {
                // this.setState({ loading: false, purchasing: false });
                setLoading(false);
                // setPurchasing(false);
                console.log(err);
            });
    }

    let form = (
        <form>
            <input className={classes.Input} type="text" name="name" id="" placeholder="Your name" />
            <input className={classes.Input} type="email" name="email" id="" placeholder="Your email" />
            <input className={classes.Input} type="text" name="street" id="" placeholder="Your street" />
            <input className={classes.Input} type="text" name="postal" id="" placeholder="Your postal code" />
            <Button btnType='Success' clicked={orderHandler}>ORDER</Button>
        </form>
    );

    if (loading) {
        form = <Spinner />;
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
}

export default ContactData;