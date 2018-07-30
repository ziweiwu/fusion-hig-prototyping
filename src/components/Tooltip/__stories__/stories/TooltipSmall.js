import React from 'react';
import Button from '@hig/button';
import Tooltip from '../../index';
import '@hig/button/build/index.css';

const TooltipSmall = props => (
  <div>
    <div style={{ margin: '100px' }} />
    <span>
      <div style={{ margin: '100px', float: 'left' }} />
      <Tooltip
        title={props.title}
        anchorPoint={props.anchorPoint}
        trigger={props.trigger}
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
        width={props.width}
        lightTheme={props.lightTheme}
      >
        <Button title="Tooltip small" />
      </Tooltip>
    </span>
  </div>
);

export default TooltipSmall;
