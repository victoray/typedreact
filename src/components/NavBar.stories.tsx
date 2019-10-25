import React from "react";
import {storiesOf} from "@storybook/react";

import NavBar from "./NavBar";
import {BrowserRouter} from "react-router-dom";

storiesOf("NavBar", module)
    .addDecorator((story) => <BrowserRouter> {story()}</BrowserRouter>)
    .add("default", () => <NavBar visible={false}/>);

