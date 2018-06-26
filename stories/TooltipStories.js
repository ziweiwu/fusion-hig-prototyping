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
  const placementOptions = ['top', 'bottom', 'left', 'right'];
  const placement = select('Placements', placementOptions, 'bottom');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const mouseEnterDelay = number('mouseEnterDelay', 0);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);

  return (<TooltipSmall
    placement={placement}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
  />);
});

// Medium tooltip
storiesOfTooltip.add('Tooltip Medium', () => {
  const placementOptions = ['top', 'bottom', 'left', 'right'];
  const placement = select('Placements', placementOptions, 'bottom');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const linkEnableOptions = ['true', 'false'];
  const linkEnabled = select('link enabled', linkEnableOptions, 'true');

  const mouseEnterDelay = number('mouseEnterDelay', 0);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);

  return (<TooltipMedium
    placement={placement}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
    linkEnabled={linkEnabled}
  />);
});

// Large tooltip
storiesOfTooltip.add('Tooltip Large', () => {
  const placementOptions = ['top', 'bottom', 'left', 'right'];
  const placement = select('Placements', placementOptions, 'bottom');

  const triggerOptions = ['click', 'hover', 'focus'];
  const trigger = select('Trigger', triggerOptions, 'click');

  const linkEnableOptions = ['true', 'false'];
  const linkEnabled = select('link enabled', linkEnableOptions, 'true');

  const mouseEnterDelay = number('mouseEnterDelay', 0);
  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);

  return (<TooltipLarge
    placement={placement}
    trigger={trigger}
    mouseLeaveDelay={mouseLeaveDelay}
    mouseEnterDelay={mouseEnterDelay}
    linkEnabled={linkEnabled}
  />);
});
