import React from "react";
import HomeScreen from "../components/screens/HomeScreen";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";

const app = (
    <Router>
        <HomeScreen/>
    </Router>);

it("should render correctly", () => {
    const tree = renderer
        .create(app)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
