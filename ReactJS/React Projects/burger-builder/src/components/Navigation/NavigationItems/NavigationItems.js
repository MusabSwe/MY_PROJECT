import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active >Burger Builder</NavigationItem>
            <NavigationItem link='/' >Check out</NavigationItem>

        </ul>
    )
}

export default navigationItems;