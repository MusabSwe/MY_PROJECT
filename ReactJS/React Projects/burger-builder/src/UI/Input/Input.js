import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            // {...props} --> means the attribute will be
            //  passed and each input can have its own attributes
            // dynamic attributes
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={classes.Input} >
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;