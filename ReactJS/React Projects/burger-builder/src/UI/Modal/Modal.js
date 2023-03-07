
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <div className={classes.Modal}
            style={{                    // translateY(-100vh) outside the screen
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
            {props.children}
        </div>
    );
}

export default modal;