import React from 'react';
import '@hig/styles/build/index.css';
import ToolTipHig from '@hig/tooltip';
import '@hig/tooltip/build/index.css';
import {DatePicker, Button, Popover, Tooltip as TooltipAnt} from 'antd';
import YouTube from 'react-youtube';
import Tooltip from './components/Tooltip/index';
import Dropdown from '@hig/dropdown';
import Flyout from "@hig/flyout";
import "@hig/flyout/build/index.css";
import '@hig/dropdown/build/index.css';
import 'react-tippy/dist/tippy.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.css';

const options = [
  {
    label: "apple",
    value: "apple value"
  },
  {
    label: "orange",
    value: "orange value"
  },
  {
    label: "pineapple",
    value: "pineapple value"
  },
  {
    label: "lemon",
    value: "lemon value"
  },
]

const picture = (
  <div>
    <p>Some instruction is written here with picture</p>
    <img alt="cat"
         src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    />
  </div>
)

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0 //disable relevant videos after playing
  },
};

const youtubeVideo = (
  <div>
    <YouTube
      videoId="sRMRQw4Pu60"
      opts={opts}
    />
  </div>
)

const App = () => (
  <div className="App">
    <h1>App Started </h1>
    <TooltipAnt><Button> ToolTip Ant</Button></TooltipAnt>
    <div>
      <ToolTipHig anchorPoint="top-center" content="Testing">
        <Button>hig tooltip</Button>
      </ToolTipHig>
    </div>
    <div>
      <TooltipAnt title="prompt text" placement="right" mouseLeaveDelay={300}>
        <Button>Ant Tooltip</Button>
      </TooltipAnt>
    </div>
    <div>
      <Tooltip
        placement="top"
        content={picture}
      >
        <Button>This is tooltip show picture</Button>
      </Tooltip>

      <Tooltip
        content={<p>some text</p>}>
        <Button>This is tooltip show text</Button>
      </Tooltip>
      <Tooltip
        title="this is a prompt"
        content={<a href="https://www.google.com">link to google</a>}
        placement="bottom"
      >
        <Button>This is tooltip with some link</Button>
      </Tooltip>

      <Tooltip
        content={youtubeVideo}
        mouseEnterDelay={0.5}
        mouseLeaveDelay={1}
      >
        <Button>This is tooltip with a video</Button>
      </Tooltip
      >

      <div style={{margin: "200px"}}/>

      <Popover title="prompt text"
               placement="right"
               content={youtubeVideo}
               mouseLeaveDelay={1}>
        <Button>Ant Popover</Button>
      </Popover>

      <Dropdown
        label="dropdown menu"
        options={options}
      />

      <Flyout
        mountOnEnter
        unmountOnLExit
        anchorPoint="top-left"
        content={youtubeVideo}
        mouseLeaveDelay={1}
      >
        <button>Fly out button</button>
      </Flyout>

    </div>
    <
    /div>
    );

    export default App;
