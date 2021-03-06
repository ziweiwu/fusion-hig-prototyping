import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import TooltipSmall from "./stories/TooltipSmall";
import TooltipMedium from "./stories/TooltipMedium";
import TooltipLarge from "./stories/TooltipLarge";

/*
  Tooltip __stories__
 */
const storiesOfTooltip = storiesOf("Tooltip", module);
storiesOfTooltip.addDecorator(withKnobs);

// Small tooltip
storiesOfTooltip.add("Tooltip Small", () => {
  const anchorOptions = [
    "top-center",
    "top-left",
    "top-right",
    "bottom-center",
    "bottom-left",
    "bottom-right",
    "left-center",
    "left-top",
    "left-bottom",
    "right-center",
    "right-top",
    "right-bottom"
  ];

  const anchorPoint = select("AnchorPoint", anchorOptions, "bottom-center");

  const triggerOptions = ["click", "hover", "focus"];
  const trigger = select("Trigger", triggerOptions, "click");

  const mouseEnterDelay = number("mouseEnterDelay", 0.5);
  const mouseLeaveDelay = number("mouseLeaveDelay", 0.1);

  const title = text("title", "Tooltip small");

  const width = number("width", 300);

  const isVisible = boolean("isVisible", undefined);
  // const theme = boolean("Light theme", false);

  return (
    <TooltipSmall
      anchorPoint={anchorPoint}
      title={title}
      trigger={trigger}
      isVisible={isVisible}
      mouseLeaveDelay={mouseLeaveDelay}
      mouseEnterDelay={mouseEnterDelay}
      width={width}
      // lightTheme={theme}
    />
  );
});

// some default fields
const defaultDescription = `Create a generative design with the current parameters, 
  note: this operation GPU intensive  
  and may take anywhere from a few minutes up to an hour.`;
const defaultLinkTitle = "More detail";
const defaultLinkURL = "https://www.autodesk.com";

// Medium tooltip
storiesOfTooltip.add("Tooltip Medium", () => {
  const anchorOptions = [
    "top-center",
    "top-left",
    "top-right",
    "bottom-center",
    "bottom-left",
    "bottom-right",
    "left-center",
    "left-top",
    "left-bottom",
    "right-center",
    "right-top",
    "right-bottom"
  ];

  const anchorPoint = select("AnchorPoint", anchorOptions, "bottom-center");

  const triggerOptions = ["click", "hover", "focus"];
  const trigger = select("Trigger", triggerOptions, "click");

  const mouseEnterDelay = number("mouseEnterDelay", 0.5);
  const mouseLeaveDelay = number("mouseLeaveDelay", 0.1);

  const title = text("title", "Tooltip medium");
  const description = text("description", defaultDescription);
  const linkTitle = text("link title", defaultLinkTitle);
  const linkURL = text("link URL", defaultLinkURL);

  const width = number("width", 300);

  const isVisible = boolean("isVisible", undefined);

  // const theme = boolean("Light theme", false);

  return (
    <TooltipMedium
      anchorPoint={anchorPoint}
      isVisible={isVisible}
      trigger={trigger}
      mouseLeaveDelay={mouseLeaveDelay}
      mouseEnterDelay={mouseEnterDelay}
      title={title}
      description={description}
      linkTitle={linkTitle}
      linkURL={linkURL}
      width={width}
      // lightTheme={theme}
    />
  );
});

// Large tooltip
storiesOfTooltip.add("Tooltip Large", () => {
  const anchorOptions = [
    "top-center",
    "top-left",
    "top-right",
    "bottom-center",
    "bottom-left",
    "bottom-right",
    "left-center",
    "left-top",
    "left-bottom",
    "right-center",
    "right-top",
    "right-bottom"
  ];

  const anchorPoint = select("AnchorPoint", anchorOptions, "bottom-center");

  const triggerOptions = ["click", "hover", "focus"];
  const trigger = select("Trigger", triggerOptions, "click");

  const mouseEnterDelay = number("mouseEnterDelay", 0.5);
  const mouseLeaveDelay = number("mouseLeaveDelay", 0.1);

  const title = text("title", "Tooltip large");
  const description = text("description", defaultDescription);
  const linkTitle = text("link title", defaultLinkTitle);
  const linkURL = text("link URL", defaultLinkURL);

  const width = number("width", 300);

  const isVisible = boolean("isVisible", undefined);

  // const theme = boolean("Light theme", false);

  return (
    <TooltipLarge
      anchorPoint={anchorPoint}
      trigger={trigger}
      isVisible={isVisible}
      mouseLeaveDelay={mouseLeaveDelay}
      mouseEnterDelay={mouseEnterDelay}
      title={title}
      description={description}
      linkTitle={linkTitle}
      linkURL={linkURL}
      width={width}
    />
  );
});
