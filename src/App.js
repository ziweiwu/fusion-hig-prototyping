import React, {Component} from 'react';
import './App.css';
import "@hig/styles/build/index.css";
import {Container, Row, Col} from 'react-grid-system'
import DatePicker from "./components/DatePicker/DatePicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col sm={2} className="side-area"></Col>
          <Col sm={8}>
            <DatePicker />
          </Col>
          <Col sm={2} className="side-area"></Col>
        </Row>
      </div>
    );
  }
}

export default App;
