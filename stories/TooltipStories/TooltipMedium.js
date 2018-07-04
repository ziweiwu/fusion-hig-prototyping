import React from 'react';
import Button from '@hig/button';
import Tooltip from '../../src/components/Tooltip/index';
import '@hig/button/build/index.css';


const description = `Create a generative design with the current parameters, 
  note: this operation GPU intensive  
  and may takes anywhere from few minutes up to an hour.`;

const linkTitle = 'Learn more';
const linkURL = 'https://www.autodesk.com';

const TooltipMedium = props => (
  <div>
    <div style={{ margin: '180px' }} />
    <span>
      <div style={{ margin: '180px', float: 'left' }} />
      <Tooltip
        title={props.title}
        description={props.description}
        anchorPoint={props.anchorPoint}
        trigger={props.trigger}
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
        linkTitle={props.linkTitle}
        linkURL={props.linkURL}
      >
        <Button title="Tooltip medium" />
      </Tooltip>
    </span>
  </div>
);

export default TooltipMedium;
