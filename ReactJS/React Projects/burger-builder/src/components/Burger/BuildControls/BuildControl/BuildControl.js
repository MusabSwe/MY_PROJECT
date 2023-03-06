import classes from './BuildControl.module.css';


const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} disabled={props.disabled} onClick={props.removed}>less</button>
            <button className={classes.More} onClick={props.added} >more</button>
        </div>
    );
}

export default buildControl;