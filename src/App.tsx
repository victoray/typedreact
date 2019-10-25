import React from "react";
import HomeScreen from "./components/HomeScreen";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/"} component={HomeScreen}/>
                <Route path={"/dashboard"} component={HomeScreen}/>
                <Route path={"/starwars"} component={HomeScreen}/>
                <Route path={"/avengers"} component={HomeScreen}/>
                <Route path={"/settings"} component={HomeScreen}/>
            </Switch>
        </Router>
    );
};

export default App;

