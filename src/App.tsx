import React from "react";
import HomeScreen from "./components/screens/HomeScreen";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarWars from "./components/screens/StarWars";
import Avengers from "./components/screens/Avengers";
import Settings from "./components/screens/Settings";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/"} component={HomeScreen}/>
                <Route path={"/dashboard"} component={HomeScreen}/>
                <Route path={"/starwars"} component={StarWars}/>
                <Route path={"/avengers"} component={Avengers}/>
                <Route path={"/settings"} component={Settings}/>
            </Switch>
        </Router>
    );
};

export default App;

