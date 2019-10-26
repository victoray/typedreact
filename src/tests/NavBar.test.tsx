import React from "react";
import renderer from "react-test-renderer";
import SideBar from "../components/SideBar";
import {BrowserRouter} from "react-router-dom";
import NavBar from "../components/NavBar";


it("should render correctly", () => {
    const tree = renderer
        .create(<NavBar visible={false}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("should render correctly with sidebar", () => {
    const sidebar = renderer
        .create(<BrowserRouter><SideBar visible={true}/><NavBar visible={true}/></BrowserRouter>)
        .toJSON();
    expect(sidebar).toMatchSnapshot();
});
