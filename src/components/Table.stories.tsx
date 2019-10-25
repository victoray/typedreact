import React from "react";
import {storiesOf} from "@storybook/react";

import Table from "./Table";

storiesOf("Table", module)
    .addDecorator((story) => <div style={{padding: "10rem"}}>{story()}</div>)
    .add("default", () => <Table/>,
        {
            info: {
                text: `

  ### Notes

      Data Loaded from https://swapi.co/api/species

  ### Usage
  ~~~js
  ~~~

`,
            },
        });
