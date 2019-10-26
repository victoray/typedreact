import React from "react";
import renderer from 'react-test-renderer';
import SideBar from "../components/SideBar";
import {BrowserRouter} from "react-router-dom";
import NavBar from "../components/NavBar";


it('should render correctly', function () {
    const tree = renderer
        .create(<NavBar visible={false}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render correctly with sidebar', function () {
    const sidebar = renderer
        .create(<BrowserRouter><SideBar visible={true}/></BrowserRouter>)
        .toJSON();
    expect(sidebar).toMatchSnapshot();

    const navbar = renderer
        .create(<NavBar visible={true}/>)
        .toJSON();
    expect(navbar).toMatchSnapshot();
});