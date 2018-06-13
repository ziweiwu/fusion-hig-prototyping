import React from 'react';
import '@hig/styles/build/index.css';
import TextField from '@hig/text-field';
import ToolTip from '@hig/tooltip';
import '@hig/tooltip/build/index.css';
import { DatePicker, Tooltip as TooltipAnt } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

const App = () => (
  <div className="App">
    <h1>App Started </h1>
    <DatePicker />
    <TextField readOnly />
    <div>
      <ToolTip anchorPoint="top-center" content="Testing">
        <button>hig tooltip</button>
      </ToolTip>
    </div>
    <div>
      <TooltipAnt title="prompt text" placement="bottom">
        <button>ant tooltip</button>
      </TooltipAnt>
    </div>
  </div>
);

export default App;
