import React from "react";
import { storiesOf } from "@storybook/react";
import UiButton from ".";

storiesOf("Components|Ui/UiButton", module).add("primary", () => (
  <UiButton type='primary'>ПОДРОБНЕЕ</UiButton>
));
