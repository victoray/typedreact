import React from "react";
import {storiesOf} from "@storybook/react";
import Spinner from "../components/Spinner";
import {withInfo} from "@storybook/addon-info";

storiesOf("Spinner", module)
    .add("default", () => <Spinner/>, withInfo({inline: true}))
    .add("error", () => <Spinner message={"There has been an error"}/>);

