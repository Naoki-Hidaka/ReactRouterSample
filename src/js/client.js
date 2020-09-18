import React from "react";
import ReactDOM from "react-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured"
import Archives from "./pages/Archives"
import Settings from "./pages/Settings"
import {BrowserRouter as Router, Route} from "react-router-dom"

const app = document.getElementById('app');

//ReactDOM.render(<Layout />, app);
ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Featured}></Route>
            <Route exact path="/archives" component={Archives}></Route>
            <Route path="/archives/:article" component={Archives}></Route>
            <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
        </Layout>
    </Router>, 
    app
)