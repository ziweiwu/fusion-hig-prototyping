import React from 'react';
import Button from '@hig/button';
import Tooltip from '../../index';
import '@hig/button/build/index.css';

const TooltipMedium = props => (
  <div>
    <div style={{ margin: '200px' }} />
    <span>
      <div style={{ margin: '100px', float: 'left' }} />
      <Tooltip
        title={props.title}
        description={props.description}
        anchorPoint={props.anchorPoint}
        trigger={props.trigger}
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
        linkTitle={props.linkTitle}
        linkURL={props.linkURL}
        width={props.width}
        lightTheme={props.lightTheme}
      >
        <Button title="Tooltip medium" />
      </Tooltip>
    </span>
  </div>
);

export default TooltipMedium;
