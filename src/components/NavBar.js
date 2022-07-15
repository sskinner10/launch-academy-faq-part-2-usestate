import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import FAQList from "./FAQList";
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow";

const NavBar = () => {
    return (
        <div className="layout">
            <div className="top-bar grid-x">
                <div className="top-bar-left">
                    <div className="menu">
                        <Link to="/launchers">Famous Launchers</Link>
                        <Link to="/">Launcher FAQs</Link>
                    </div>
                    <div className="main-body">
                        <Switch>
                            <Route exact path="/" component={FAQList} />
                            <Route exact path="/launchers" component={LauncherList} />
                            <Route exact path="/launchers/:id" component={LauncherShow} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar