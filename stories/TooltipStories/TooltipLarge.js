import React from 'react';
import Button from '@hig/button';
import Tooltip from '../../src/components/Tooltip/index';
import YouTube from 'react-youtube';
import '@hig/button/build/index.css';


const description = `Create a generative design with the current parameters, 
  note: this operation GPU intensive  
  and may takes anywhere from few minutes up to an hour.`;

const opts = {
  height: 'auto',
  width: '300',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0, // disable relevant videos after playing
  },
};

const youtubeVideo = (
  <div>
    <YouTube
      videoId="NSJwq9CVoIk"
      opts={opts}
    />
  </div>
);

const linkTitle = 'Learn more';
const linkURL = 'https://www.autodesk.com';

const TooltipLarge = props => (
  <div>
    <div style={{ margin: '150px' }} />
    <span>
      <div style={{ margin: '180px', float: 'left' }} />
      <Tooltip
        title="Tooltip large"
        description={description}
        placement={props.placement}
        trigger={props.trigger}
        mouseLeaveDelay={props.mouseLeaveDelay}
        mouseEnterDelay={props.mouseEnterDelay}
        linkTitle={props.linkEnabled && linkTitle}
        linkURL={props.linkEnabled && linkURL}
        content={youtubeVideo}
      >
        <Button title="Tooltip large" />
      </Tooltip>
    </span>
  </div>
);

export default TooltipLarge;
