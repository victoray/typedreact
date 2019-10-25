import React from "react";
import {storiesOf} from "@storybook/react";

import NavBar from "./NavBar";

storiesOf("Title", module)
    .add("default", () => <NavBar visible={false} setVisible={""}/>);
