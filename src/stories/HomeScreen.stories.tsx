import React from "react";
import {storiesOf} from "@storybook/react";

import HomeScreen from "../components/screens/HomeScreen";
import {BrowserRouter} from "react-router-dom";

storiesOf("HomeScreen", module)
    .addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>)
    .add("default", () => <HomeScreen/>);


