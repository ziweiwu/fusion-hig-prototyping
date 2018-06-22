import React from 'react';
//import '@hig/styles/build/index.css';
import ToolTipHig from '@hig/tooltip';
import '@hig/tooltip/build/index.css';
import { DatePicker, Button, Popover, Tooltip as TooltipAnt } from 'antd';
import YouTube from 'react-youtube';
import Tooltip from './components/Tooltip/index';
import Dropdown from '@hig/dropdown';
import Flyout from '@hig/flyout';
import '@hig/flyout/build/index.css';
import '@hig/dropdown/build/index.css';
// import 'react-tippy/dist/tippy.css';
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './components/Tooltip/tooltip.css';

const options = [
  {
    label: 'apple',
    value: 'apple value',
  },
  {
    label: 'orange',
    value: 'orange value',
  },
  {
    label: 'pineapple',
    value: 'pineapple value',
  },
  {
    label: 'lemon',
    value: 'lemon value',
  },
];

const opts = {
  height: 'auto',
  width: '300',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0, // disable relevant videos after playing
  },
};

const picture = (
  <div>
    <img
      alt="cat"
      src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    />
  </div>
);

const youtubeVideo = (
  <div>
    <YouTube
      videoId="NSJwq9CVoIk"
      opts={opts}
    />
  </div>
);

const App = () => (
  <div className="App">
    <h1>App Started </h1>
    {/*<TooltipAnt><Button> ToolTip Ant</Button></TooltipAnt>*/}
    {/*<div>*/}
      {/*<ToolTipHig anchorPoint="top-center" content="Testing">*/}
        {/*<Button>hig tooltip</Button>*/}
      {/*</ToolTipHig>*/}
    {/*</div>*/}
    {/*<div>*/}
      {/*<TooltipAnt title="prompt text" placement="right" mouseLeaveDelay={300}>*/}
        {/*<Button>Ant Tooltip</Button>*/}
      {/*</TooltipAnt>*/}
      {/*<TooltipAnt title="prompt text" placement="right" mouseLeaveDelay={300} overlay={youtubeVideo}>*/}
        {/*<Button>Ant Tooltip</Button>*/}
      {/*</TooltipAnt>*/}
    {/*</div>*/}
    <div>
      <Tooltip
        title="Tooltip title"
      >
        <Button>Show some text</Button>
      </Tooltip>

      <div style={{ margin: '200px' }} />

      <Tooltip
        title="This is a cat picture"
        description="This is a description of the button"
        adjustX
        adjustY
        placement="bottomRight"
        content={picture}
        linkTitle={"Learn more"}
        linkURL={"https://www.autodesk.com"}
      >
        <Button>Show picture</Button>
      </Tooltip>

      <div style={{ margin: '200px' }} />

      <Tooltip
        placement="top"
        title="Tooltip title"
        mouseLeaveDelay={1000}
        linkTitle={"Learn more"}
        linkURL={"https://www.autodesk.com"}
      >
        <Button>This is tooltip with some link</Button>
      </Tooltip>

      <div style={{ margin: '200px' }} />

      <Tooltip
        title={"Tooltip with video"}
        content={youtubeVideo}
        mouseEnterDelay={0.5}
        mouseLeaveDelay={1}
        linkTitle={"Learn more"}
        linkURL={"https://www.autodesk.com"}
      >
        <Button>This is tooltip with a video</Button>
      </Tooltip
      >

      <div style={{ margin: '200px' }} />

      {/*<Popover*/}
        {/*title="prompt text"*/}
        {/*placement="right"*/}
        {/*content={youtubeVideo}*/}
        {/*mouseLeaveDelay={1}*/}
      {/*>*/}
        {/*<Button>Ant Popover</Button>*/}
      {/*</Popover>*/}

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
  </div>
);

export default App;
