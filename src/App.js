import React, {Component} from 'react';
import './App.css';
import "@hig/styles/build/index.css";
import DatePicker from "./components/myDatePicker/index";
import moment from "moment"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Started </h1>
        <DatePicker startTime={moment("2017-09-15 09:30:00")}/>
      </div>
    );
  }
}

export default App;
