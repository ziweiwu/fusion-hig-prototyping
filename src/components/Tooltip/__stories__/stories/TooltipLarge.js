import React from 'react';
import Button from '@hig/button';
import YouTube from 'react-youtube';
import Tooltip from '../../index';
import '@hig/button/build/index.css';

const TooltipLarge = props => (
  <div>
    <div style={{ margin: '100px' }} />
    <span>
      <div style={{ margin: '100px', float: 'left' }} />
      <Tooltip
        title={props.title}
        lightTheme={props.lightTheme}
        description={props.description}
        anchorPoint={props.anchorPoint}
        trigger={props.trigger}
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
        linkTitle={props.linkTitle}
        linkURL={props.linkURL}
        width={props.width}
        content={(
          <div>
            <YouTube
              videoId="NSJwq9CVoIk"
              opts={{
                width: props.width - 20,
                height: props.width * 0.6,
                playerVars: {
                  autoplay: 0,
                  rel: 0, // disable relevant videos after playing
                },
              }}
            />
          </div>
      )}
      >
        <Button title="Tooltip large" />
      </Tooltip>
    </span>
  </div>
);

export default TooltipLarge;
