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
      ~~~js
      Data Loaded from https://swapi.co/api/species
      ~~~
      ### Usage
      ~~~js
       Data is fetched from the api with axios, the data is paginated serverside, so the table requests data based on the current page.
      ~~~`,
            },
        });
