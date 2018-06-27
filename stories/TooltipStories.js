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

  const mouseEnterDelay = number('mouseEnterDelay', 0);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);

  return (<TooltipSmall
    anchorPoint={anchorPoint}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
  />);
});

// Medium tooltip
storiesOfTooltip.add('Tooltip Medium', () => {
  const anchorOptions = ['top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right',
    'left-center', 'left-top', 'left-bottom', 'right-center', 'right-top', 'right-bottom'];

  const anchorPoint = select('AnchorPoint', anchorOptions, 'bottom-center');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const linkEnableOptions = ['true', 'false'];
  const linkEnabled = select('link enabled', linkEnableOptions, 'true');

  const mouseEnterDelay = number('mouseEnterDelay', 0);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);

  return (<TooltipMedium
    anchorPoint={anchorPoint}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
    linkEnabled={linkEnabled}
  />);
});

// Large tooltip
storiesOfTooltip.add('Tooltip Large', () => {
  const anchorOptions = ['top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right',
    'left-center', 'left-top', 'left-bottom', 'right-center', 'right-top', 'right-bottom'];

  const anchorPoint = select('AnchorPoint', anchorOptions, 'bottom-center');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const linkEnableOptions = ['true', 'false'];
  const linkEnabled = select('link enabled', linkEnableOptions, 'true');

  const mouseEnterDelay = number('mouseEnterDelay', 0);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);

  return (<TooltipLarge
    anchorPoint={anchorPoint}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
    linkEnabled={linkEnabled}
  />);
});
