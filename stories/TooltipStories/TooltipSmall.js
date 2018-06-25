import React, {Component} from 'react';
import Button from '@hig/button';
import Tooltip from '../../src/components/Tooltip/index';
import '@hig/button/build/index.css';

const TooltipSmall = props => (
  <div>
    <div style={{margin: '100px'}}/>
    <span>
      <div style={{margin: '100px', float: 'left'}}/>
      <Tooltip
        title="Tooltip small"
        placement={props.placement}
        trigger="hover"
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
      >
          <button>Small Tooltip</button>
      </Tooltip>
    </span>
  </div>
);

export default TooltipSmall;

