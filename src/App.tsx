import React from "react";
import HomeScreen from "./components/HomeScreen";
import {BrowserRouter as Router, Route} from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <Route path={"/"} component={HomeScreen}/>
        </Router>
    );
};

export default App;

