import { useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import classes from './ContactData.module.css';
import { useLocation } from "react-router";
import axios from "../../../axios-orders";
import Spinner from "../../../UI/spinner/spinner";
import { useNavigate } from "react-router";
const ContactData = (props) => {

    const [orderForm, setOrderForm] = useState({
        customer: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
            },

            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
            },

            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: '',
            },

        },
    });
    const [loading, setLoading] = useState(false);

    // Routes
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state.ingredients)
    // const ig = {
    //     ...location.state.ingredients,
    // }


    const orderHandler = (e) => {
        e.preventDefault();
        // To test the date come from Checkout by useNavigate
        // console.log(location.state.price);
        // console.log(location.state.ingredients)
        setLoading(true);

        const order = {
            price: location.state.price,
            ingredients: { ...location.state.ingredients },

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
            <Input elementType="" elementConfig="" value="" />
            <Input elementType="" elementConfig="" value="" />
            <Input elementType="" elementConfig="" value="" />
            <Input elementType="" elementConfig="" value="" />
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