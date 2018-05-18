import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import RichText, { availableSizes } from "../index";
import infoOptions from "./infoOptions";

storiesOf("RichText", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <RichText size={select("Size", availableSizes)}>
      The RichText component lets me include any React children, including:
      <ul>
        <li>
          <strong>Any old HTML tag</strong>
        </li>
        <li>React components</li>
      </ul>
    </RichText>
  ))
);
