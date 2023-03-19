import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    // to add Input css style withInvalid style using array and Join
    let inputClasses = [classes.InputElement];

    // if the user does not enter value
    // will dsplay a message
    // props.shouldValidate used to prevent display an error message 
    // for the inputs does not need a validation which has not
    // validation property in the orderForm state 
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            // {...props} --> means the attribute will be
            //  passed and each input can have its own attributes
            // dynamic attributes
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement =
                <select
                    className={inputClasses.join(' ')}
                    value={props.value} onChange={props.changed} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
    }

    return (
        <div className={classes.Input} >
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;