import React, {Component} from 'react';
import './App.css';
import "@hig/styles/build/index.css";
import TableView from './components/TableView';
import PickDate from './components/PickDate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableView/>
        <PickDate/>
      </div>
    );
  }
}

export default App;
