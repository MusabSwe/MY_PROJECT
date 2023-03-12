import React, { useState } from "react";
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
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
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer open={showSiderDrawer} closed={sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliry>
    )
};

export default Layout;