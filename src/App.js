import React from 'react';
// import '@hig/styles/build/index.css';
// import ToolTipHig from '@hig/tooltip';
import '@hig/tooltip/build/index.css';
import { Button, Popover, Tooltip as TooltipAnt } from 'antd';
import YouTube from 'react-youtube';
import Dropdown from '@hig/dropdown';
import Flyout from '@hig/flyout';
import '@hig/flyout/build/index.css';
import '@hig/dropdown/build/index.css';
import TextFieldPresenter from '@hig/text-field';
// import Demo from './components/Tooltip/NewTooltip/TooltipPopper';
// import TextFieldPresenter from './components/TextPresenter/TextFieldPresenter.js'
import 'react-tippy/dist/tippy.css';
import { Tooltip as Tooltipy } from 'react-tippy';
import Example from './components/Tooltip/NewTooltip/TooltipNew';
import Tooltip from './components/Tooltip/index';
import DatePicker from './components/DatePicker/index';
import './components/DatePicker/datePicker.css';


// import 'react-tippy/dist/tippy.css';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.scss';
import './components/TextPresenter/text-field.scss';

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

const picture = (
  <div>
    <img
      alt="cat"
      src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
    />
  </div>
);
// parameters for a youtube video embeddeed
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

const App = () => (
  <div className="App">
    <h1>
      App Started
      {' '}
    </h1>
    <DatePicker />
    <Example
      placement="right"
      content={(
        <div>
          tooltip
        </div>
      )}
    >
      <button>
        my button
      </button>
    </Example>
    {/* <TooltipAnt><Button> ToolTip Ant</Button></TooltipAnt> */}
    {/* <div> */}
    {/* <ToolTipHig anchorPoint="top-center" content="Testing"> */}
    {/* <Button>hig tooltip</Button> */}
    {/* </ToolTipHig> */}
    {/* </div> */}
    {/* <div> */}
    {/* <TooltipAnt title="prompt text" placement="right" mouseLeaveDelay={300}> */}
    {/* <Button>Ant Tooltip</Button> */}
    {/* </TooltipAnt> */}
    {/* <TooltipAnt title="prompt text" placement="right" mouseLeaveDelay={300} overlay={youtubeVideo}> */}
    {/* <Button>Ant Tooltip</Button> */}
    {/* </TooltipAnt> */}
    {/* </div> */}
    <div>
      <Tooltip
        title="Tooltip title"
      >
        <Button>
          Show some text
        </Button>
      </Tooltip>

      <div style={{ margin: '200px' }} />

      <Tooltip
        title="This is a cat picture"
        description="This is a description of the button"
        adjustX
        adjustY
        placement="bottom-center"
        content={picture}
        linkTitle="Learn more"
        linkURL="https://www.autodesk.com"
      >
        <Button>
          Show picture
        </Button>
      </Tooltip>

      <div style={{ margin: '200px' }} />

      <Tooltip
        placement="top-center"
        title="Tooltip title"
        mouseLeaveDelay={1000}
        linkTitle="Learn more"
        linkURL="https://www.autodesk.com"
      >
        <Button>
          This is tooltip with some link
        </Button>
      </Tooltip>

      <div style={{ margin: '200px' }} />

      <Tooltip
        title="Tooltip with video"
        content={youtubeVideo}
        mouseEnterDelay={0.5}
        mouseLeaveDelay={1}
        linkTitle="Learn more"
        linkURL="https://www.autodesk.com"
      >
        <Button>
          This is tooltip with a video
        </Button>
      </Tooltip
      >

      <div style={{ margin: '200px' }} />

      {/* <Popover */}
      {/* title="prompt text" */}
      {/* placement="right" */}
      {/* content={youtubeVideo} */}
      {/* mouseLeaveDelay={1} */}
      {/* > */}
      {/* <Button>Ant Popover</Button> */}
      {/* </Popover> */}

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
        <button>
          Fly out button
        </button>
      </Flyout>

      <Tooltipy
        title="Welcome to React"
        position="top"
        trigger="click"
        arrow="true"
      >
        <Button>
          Click here to show popup
        </Button>
      </Tooltipy>

      <Tooltipy
        html={youtubeVideo}
        arrow="true"
        position="right"
        trigger="click"
      >
        <Button>
          Click here to show popup
        </Button>
      </Tooltipy>
      <TextFieldPresenter
        label="true"
        showClearButton
        focused
        onFocus={() => console.log('focused')}
        onBlur={() => console.log('blurred')}
      />
      <TextFieldPresenter
        label="false"
        showClearButton
        focused={false}
        onFocus={() => console.log('focused')}
        onBlur={() => console.log('blurred')}
      />
      <TextFieldPresenter
        label="undefined"
        showClearButton
        onFocus={() => console.log('focused')}
        onBlur={() => console.log('blurred')}
      />
      <TextFieldPresenter label="undefined" showClearButton />
    </div>
  </div>
);

export default App;
