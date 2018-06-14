import React from 'react';
import '@hig/styles/build/index.css';
import TextField from '@hig/text-field';
import ToolTipHig from '@hig/tooltip';
import '@hig/tooltip/build/index.css';
import { DatePicker, Button } from 'antd';
import Tooltip from './components/Tooltip/index';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

const App = () => (
  <div className="App">
    <h1>App Started </h1>
    <DatePicker />
    <TextField readOnly />
    <div>
      <ToolTipHig anchorPoint="top-center" content="Testing" >
        <Button >hig tooltip</Button>
      </ToolTipHig>
    </div>
    <div>
      <Tooltip title="prompt text" placement="bottom" trigger={"hover"}>
        <Button >ant tooltip</Button>
      </Tooltip>
    </div>
  </div>
);

export default App;
