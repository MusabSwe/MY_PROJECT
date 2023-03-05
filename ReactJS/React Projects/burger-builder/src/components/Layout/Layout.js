import React from "react";
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxiliry>
        <div>
            Toobar, SideDrawer, Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliry>
);

export default layout;