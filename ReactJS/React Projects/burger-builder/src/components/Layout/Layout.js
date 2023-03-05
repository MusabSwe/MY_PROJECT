import React from "react";
import Auxiliry from '../../hoc/Auxiliry';
const layout = (props) => (
    <Auxiliry>
        <div>
            Toobar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Auxiliry>
);

export default layout;