
import classes from './Modal.module.css';
import Auxiliry from '../../hoc/Auxiliry';
import BackDrop from '../Backdrop/BackDrop';
const modal = (props) => (
    <Auxiliry>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
            style={{                    // translateY(-100vh) outside the screen
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
            {props.children}
        </div>
    </Auxiliry>
)


export default modal;