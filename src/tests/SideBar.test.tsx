import React from "react";
import renderer from "react-test-renderer";
import SideBar from "../components/SideBar";
import {BrowserRouter} from "react-router-dom";


it("should not be visible", () => {
    const tree = renderer
        .create(<BrowserRouter><SideBar visible={false}/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("should be visible", () => {
    const tree = renderer
        .create(<BrowserRouter><SideBar visible={true}/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
