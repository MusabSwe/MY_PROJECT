import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active >Burger Builder</NavigationItem>
            <NavigationItem link='/orders' >Orders</NavigationItem>
            {!props.isAuthenticated
                ? <NavigationItem link='/auth' >Authenticate</NavigationItem>
                : <NavigationItem link='/logout' >Logout</NavigationItem>
            }
        </ul>
    )
}

export default navigationItems;