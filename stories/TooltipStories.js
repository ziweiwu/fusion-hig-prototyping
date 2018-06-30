import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { TooltipSmall, TooltipMedium, TooltipLarge } from './TooltipStories/index';

/*
  Tooltip stories
 */
const storiesOfTooltip = storiesOf('Tooltip', module);
storiesOfTooltip.addDecorator(withKnobs);

// Small tooltip
storiesOfTooltip.add('Tooltip Small', () => {
  const anchorOptions = ['top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right',
    'left-center', 'left-top', 'left-bottom', 'right-center', 'right-top', 'right-bottom'];

  const anchorPoint = select('AnchorPoint', anchorOptions, 'bottom-center');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const mouseEnterDelay = number('mouseEnterDelay', 1);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.2);


  const title = text('title', 'Tooltip small');

  return (<TooltipSmall
    anchorPoint={anchorPoint}
    title = {title}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
  />);
});


// some default fields
const defaultDescription = `Create a generative design with the current parameters, 
  note: this operation GPU intensive  
  and may takes anywhere from few minutes up to an hour.`;
const defaultLinkTitle = 'More detail';
const defaultLinkURL = 'https://www.autodesk.com';


// Medium tooltip
storiesOfTooltip.add('Tooltip Medium', () => {
  const anchorOptions = ['top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right',
    'left-center', 'left-top', 'left-bottom', 'right-center', 'right-top', 'right-bottom'];

  const anchorPoint = select('AnchorPoint', anchorOptions, 'bottom-center');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const mouseEnterDelay = number('mouseEnterDelay', 1);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.2);
  
  const title = text('title', 'Tooltip small');
  const description = text('description', defaultDescription);
  const linkTitle  = text('link title', defaultLinkTitle);
  const linkURL  = text('link URL', defaultLinkURL);

  return (<TooltipMedium
    anchorPoint={anchorPoint}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
    title={title}
    description={description}
    linkTitle = {linkTitle}
    linkURL = {linkURL}
  />);
});

// Large tooltip
storiesOfTooltip.add('Tooltip Large', () => {
  const anchorOptions = ['top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right',
    'left-center', 'left-top', 'left-bottom', 'right-center', 'right-top', 'right-bottom'];

  const anchorPoint = select('AnchorPoint', anchorOptions, 'bottom-center');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const mouseEnterDelay = number('mouseEnterDelay', 1);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.2);
  
  const title = text('title', 'Tooltip small');
  const description = text('description', defaultDescription);
  const linkTitle  = text('link title', defaultLinkTitle);
  const linkURL  = text('link URL', defaultLinkURL);

  return (<TooltipLarge
    anchorPoint={anchorPoint}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
    title={title}
    description={description}
    linkTitle = {linkTitle}
    linkURL = {linkURL}
  />);
});
