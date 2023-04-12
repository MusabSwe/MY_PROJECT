import React, { useState } from "react";
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";
const Layout = (props) => {

    const [showSiderDrawer, setShowSiderDrawer] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSiderDrawer(false);
    }
    const sideDrawerToggleHandler = () => {
        setShowSiderDrawer(!showSiderDrawer);
    }

    return (
        <Auxiliry>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSiderDrawer}
                closed={sideDrawerCloseHandler}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliry>
    )
};
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

export default connect(mapStateToProps)(Layout);