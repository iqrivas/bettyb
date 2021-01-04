import React from "react";
import TopNav from "./TopNav";

function Layout(props) {
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <TopNav/>
                    <div className="content mx-auto">
                        {props.children}
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}


export default Layout;