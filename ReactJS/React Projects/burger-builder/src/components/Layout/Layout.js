import React, { useState } from "react";
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const Layout = (props) => {

    const [showSiderDrawer, setShowSiderDrawer] = useState(true);

    const sideDrawerCloseHandler = () => {
        setShowSiderDrawer(false);
    }

    return (
        <Auxiliry>
            <Toolbar />
            <SideDrawer open={showSiderDrawer} closed={sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliry>
    )
};

export default Layout;