import React from 'react';
import Button from '@hig/button';
import Tooltip from '../../src/components/Tooltip/index';
import '@hig/button/build/index.css';

const TooltipSmall = props => (
  <div>
    <div style={{ margin: '180px' }} />
    <span>
      <div style={{ margin: '180px', float: 'left' }} />
      <Tooltip
        title={props.title}
        anchorPoint={props.anchorPoint}
        trigger={props.trigger}
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
      >
        <Button title="Tooltip small" />
      </Tooltip>
    </span>
  </div>
);

export default TooltipSmall;

