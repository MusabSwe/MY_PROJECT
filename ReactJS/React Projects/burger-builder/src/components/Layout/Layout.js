import React from "react";
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const layout = (props) => (
    <Auxiliry>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliry>
);

export default layout;