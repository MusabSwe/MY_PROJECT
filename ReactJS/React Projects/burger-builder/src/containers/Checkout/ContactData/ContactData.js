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
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
        },

        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
        },

        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
            },
            valid: false,
        },

        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
        },

        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
        },

        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }
                ],
                // To config the attributes of select not options
                // config: {}
            },
            value: '',
        },
    });

    const [loading, setLoading] = useState(false);

    // Routes
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location.state.ingredients)
    // const ig = {
    //     ...location.state.ingredients,
    // }


    const orderHandler = (e) => {
        e.preventDefault();
        // To test the date come from Checkout by useNavigate
        // console.log(location.state.price);
        // console.log(location.state.ingredients)
        setLoading(true);

        // On submit handler 
        // will get input values from the form 
        const formData = {};
        // formElementIdentifier --> name, email, country, ZIP code
        for (let formElementIdentifier in orderForm) {
            // formElementIdentifier = each user input has entered
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }

        const order = {
            price: location.state.price,
            ingredients: { ...location.state.ingredients },
            // below is the Form input values
            // and will post in the FireBase
            orderData: formData
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

    // Implement validation for the form inpust such as not enter a value
    const chackValidity = (value, rules) => {
        let isValid = false;
        // rules point to the --> 
        // validation: {
        //     required: true,
        // }, in orderForm object
        if (rules.required) {
            // to check if the user enter a value
            isValid = value.trim() !== ''
        }

        if (rules.minLength) {
            // 
            isValid = value.length >= rules.minLength
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength
        }

        return isValid;
    }

    // Implemnt OnChange Handler
    const inputChangedHandler = (e, inputIdentifier) => {
        // console.log(e.target.value);
        // CLone all the inputs of the form
        // to chane it safely with affect the orignal form 

        const updatedOrderForm = {
            ...orderForm
        }
        // inputIdentifier --> point to the name street, ZIP Code,
        // country, Email in the orderForm to access each value for each input 
        // without intercations between other inputs
        const updatedOrderFormElment = {
            // we make clone for the inputIdentifer which is the single input in the form
            //   --> which is 
            // inputIdentifier: {
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'email',
            //         placeholder: 'Your E-Mail'
            //     },
            //     value: '',
            // },

            // and to change it safely
            ...updatedOrderForm[inputIdentifier]
        };

        updatedOrderFormElment.value = e.target.value;
        // updatedOrderFormElment.value enterd value by the user,
        // updatedOrderFormElment.validation rules for the input such as required
        updatedOrderFormElment.valid = chackValidity(updatedOrderFormElment.value, updatedOrderFormElment.validation)
        updatedOrderForm[inputIdentifier] = updatedOrderFormElment;
        console.log(updatedOrderFormElment)
        setOrderForm(updatedOrderForm);
    }


    const formElementArray = [];
    // key will be name.street,email
    for (let key in orderForm) {
        // console.log(key);
        formElementArray.push({
            id: key,
            // config values index --> ex config = values of name : {....values element config value,}
            config: orderForm[key]
        });
    }

    let form = (
        <form onSubmit={orderHandler}>
            {formElementArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    // formElement.id will be name.street,email
                    changed={(e) => inputChangedHandler(e, formElement.id)}
                />
            ))}
            <Button btnType='Success'>ORDER</Button>
        </form >
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