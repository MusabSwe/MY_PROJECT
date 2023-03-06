import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                // stop here at 6:00 Connecting states with Buildcontrols
                <BuildControl key={ctrl.label} label={ctrl.label} added={props.addIngredientHandler} />
            ))}
        </div>
    );
}

export default buildControls;