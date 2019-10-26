import React from "react";
import {storiesOf} from "@storybook/react";

import SideBar from "../components/SideBar";
import {BrowserRouter} from "react-router-dom";

storiesOf("SideBar", module)
    .addDecorator((story) => <BrowserRouter> {story()}</BrowserRouter>)
    .add("visible", () => <SideBar visible={true}/>)
    .add("disabled", () => <SideBar visible={false}/>);
