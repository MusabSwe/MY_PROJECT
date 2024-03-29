import { useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from './Auth.module.css';
import Spinner from '../../UI/spinner/spinner';
import * as actions from '../../store/actions/index';
import { connect } from "react-redux";
const Auth = (props) => {
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false,
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
            },
            valid: false,
            touched: false,
        },
    })

    const [isSignup, setIsSignup] = useState(true);

    // Implement validation for the form inpust such as not enter a value
    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        // rules point to the --> 
        // validation: {
        //     required: true,
        // }, in orderForm state

        // Note:
        // 1. we add for each if statement an && isValid to 
        // fix the interactions of validation between other if statment 
        // and we make the default of isValid = true
        // since we will change at only one input
        if (rules.required) {
            // to check if the user enter a value
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            // 
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }


    // Implemnt OnChange Handler
    const inputChangedHandler = (e, controlName) => {
        const updatedControls = {
            ...controls,
            [controlName]: {
                // update indivisual control
                ...controls[controlName],
                value: e.target.value,
                valid: checkValidity(e.target.value, controls[controlName].validation),
                touched: true,
            }
        };
        setControls(updatedControls);
    }

    const submitHandller = (e) => {
        e.preventDefault();
        props.onAuth(controls.email.value, controls.password.value, isSignup);
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup)
    }

    const formElementArray = [];
    // key will be email and password
    for (let key in controls) {
        // console.log(key);
        formElementArray.push({
            id: key,
            // config point to the right side of property which is values of index --> ex config = values of email : {....values element config value,}
            config: controls[key]
        });
    }

    // create form inputs dynimacally
    let form = formElementArray.map((formElement) => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            // to change style if the user does not enter a value
            invalid={!formElement.config.valid}
            // to display only validation for the 
            // inputs has a validation property in the orderForm state
            shouldValidate={formElement.config.validation}
            // formElement.id will be name.street,email
            changed={(e) => inputChangedHandler(e, formElement.id)}
            touched={formElement.config.touched}
        />
    ));

    if (props.loading) {
        form = <Spinner />
    }
    let errorMessage = null;

    if (props.error) {
        errorMessage = (
            <p style={{color:"red"}}>{props.error.message}</p>
        )
    }

    return (
        <div className={classes.Auth}>
            {errorMessage}
            <form onSubmit={submitHandller}>
                {form}
                <Button btnType={"Success"}>Submit</Button>
            </form>
            <Button clicked={switchAuthModeHandler} btnType={"Danger"}>Switch to {isSignup ? 'sign in' : 'sign up'}</Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);