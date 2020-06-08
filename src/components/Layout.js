import React from "react";
import TopNav from "./TopNav";

function Layout(props) {
    return (
        <React.Fragment>
            <TopNav />
            {props.children}
        </React.Fragment>
    );
}


export default Layout;