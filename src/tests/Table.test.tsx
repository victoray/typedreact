import React from "react";
import Table from "../components/Table";
import renderer from 'react-test-renderer';


it('should render correctly', function () {
    const tree = renderer
        .create(<Table/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});