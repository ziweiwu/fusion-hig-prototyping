import React from "react";
import "@hig/tooltip/build/index.css";
import YouTube from "react-youtube";
import Dropdown from "@hig/dropdown";
import Flyout from "@hig/flyout";
import "@hig/flyout/build/index.css";
import "@hig/dropdown/build/index.css";
import TextFieldPresenter from "@hig/text-field";
import Tooltip from "./components/Tooltip/index";
import DatePicker from "./components/DatePicker/index";
import Example from "./components/Tooltip/popper/reactPopper";
import "./components/DatePicker/datePicker.scss";
import "./App.scss";
import "./components/TextPresenter/text-field.scss";

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
  }
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
  height: "auto",
  width: "300",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0 // disable relevant videos after playing
  }
};

const youtubeVideo = (
  <div>
    <YouTube videoId="NSJwq9CVoIk" opts={opts} />
  </div>
);

const App = () => (
  <div className="App">
    <h1>App Started</h1>
    <DatePicker />
    <div>
      <Tooltip title="Tooltip title">
        <button>Show some text</button>
      </Tooltip>

      <div style={{ margin: "200px" }} />

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
        <button>Show picture</button>
      </Tooltip>

      <div style={{ margin: "200px" }} />

      <Tooltip
        placement="top-center"
        title="Tooltip title"
        mouseLeaveDelay={1000}
        linkTitle="Learn more"
        linkURL="https://www.autodesk.com"
      >
        <button>This is tooltip with some link</button>
      </Tooltip>

      <div style={{ margin: "200px" }} />

      <Tooltip
        title="Tooltip with video"
        content={youtubeVideo}
        mouseEnterDelay={0.5}
        mouseLeaveDelay={1}
        linkTitle="Learn more"
        linkURL="https://www.autodesk.com"
      >
        <button>This is tooltip with a video</button>
      </Tooltip>

      <div style={{ margin: "200px" }} />

      <Dropdown label="dropdown menu" options={options} />

      <Flyout
        mountOnEnter
        unmountOnLExit
        anchorPoint="top-left"
        content={youtubeVideo}
        mouseLeaveDelay={1}
      >
        <button>Fly out button</button>
      </Flyout>
      <button>Click here to show popup</button>
      <TextFieldPresenter
        label="true"
        showClearButton
        focused
        onFocus={() => console.log("focused")}
        onBlur={() => console.log("blurred")}
      />
      <TextFieldPresenter
        label="false"
        showClearButton
        focused={false}
        onFocus={() => console.log("focused")}
        onBlur={() => console.log("blurred")}
      />
      <TextFieldPresenter
        label="undefined"
        showClearButton
        onFocus={() => console.log("focused")}
        onBlur={() => console.log("blurred")}
      />
      <TextFieldPresenter label="undefined" showClearButton />
      <Example />
    </div>
  </div>
);

export default App;
