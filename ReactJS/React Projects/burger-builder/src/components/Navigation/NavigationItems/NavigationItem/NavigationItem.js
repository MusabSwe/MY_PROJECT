import classes from './navigationItem.module.css'
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link}  href={props.link}>{props.children}</NavLink>
    </li>
)
export default navigationItem;