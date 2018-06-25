import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { TooltipSmall } from './TooltipStories/index';

/*
  Tooltip stories
 */
const storiesOfTooltip = storiesOf('Tooltip', module);
storiesOfTooltip.addDecorator(withKnobs);

// Small tooltip
storiesOfTooltip.add('Tooltip Small', () => {
  const placementOptions = ['top', 'bottom', 'left', 'right'];
  const placement = select('Placements', placementOptions, 'bottom');

  const triggerOptions = ['click', 'hover'];
  const trigger = select('Trigger', triggerOptions, 'hover');

  const mouseLeaveDelay = number('mouseLeaveDelay', 0.5);
  const mouseEnterDelay = number('mouseEnterDelay', 0);

  return <TooltipSmall placement={placement} trigger={trigger} mouseLeaveDelay={mouseLeaveDelay} mouseEnterDelay={mouseEnterDelay}/>;
});
