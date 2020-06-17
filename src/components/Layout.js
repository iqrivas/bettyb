import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

function Layout(props) {
    return (
        <React.Fragment>
            <TopNav />
                {props.children}
            <Footer />
        </React.Fragment>
    );
}


export default Layout;