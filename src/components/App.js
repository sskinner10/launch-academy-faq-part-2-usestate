import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={NavBar} />
        </BrowserRouter>
    )
}

export default App