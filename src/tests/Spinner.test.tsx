import React from "react";
import renderer from "react-test-renderer";
import Spinner from "../components/Spinner";


it("should render loading spinner", () => {
    const tree = renderer
        .create(<Spinner/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
