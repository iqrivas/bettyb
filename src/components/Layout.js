import React from "react";
import TopNav from "./TopNav";

function Layout(props) {
    return (
        <React.Fragment>
            <header>
                <div class="container">
                    <TopNav/>
                    {props.children}
                </div>
            </header>
        </React.Fragment>
    );
}


export default Layout;