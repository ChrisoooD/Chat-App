import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import {ROUTES} from "./routes";
const App = () => {
    return (
        <Router>
        <Switch>
            { ROUTES.map((route, index) => <Route key={ index } { ...route }></Route>) }
        </Switch>
    </Router>     
    );
}

export default App;