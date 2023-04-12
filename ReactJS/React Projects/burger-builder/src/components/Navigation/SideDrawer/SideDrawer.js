import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../../UI/Backdrop/BackDrop'
import Auxiliry from '../../../hoc/Auxiliry';

const sideDrawer = (props) => {
    // to add these 2 css styles with join(' ')
    // when click on backdrop to move out the side bar
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        // we add HOC auxiliry because
        // to cover backdrop and to access the sidebar since if we wrap
        // using Backdrop then we can not use sidedrawe (sidebar) 
        // the entire scrren will be black
        // so we use HOC auxiliry
        <Auxiliry>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Auxiliry>
    );
}

export default sideDrawer;