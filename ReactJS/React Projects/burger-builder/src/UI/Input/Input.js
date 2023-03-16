import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            // {...props} --> means the attribute will be
            //  passed and each input can have its own attributes
            // dynamic attributes
            inputElement = <input className={classes.InputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} />;
            break;
        default:
            inputElement = <input className={classes.InputElement}{...props} />;
    }

    return (
        <div className={classes.Input} >
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;