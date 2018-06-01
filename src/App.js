import React, {Component} from 'react';
import './App.css';
import "@hig/styles/build/index.css";
import {Container, Row, Col} from 'react-grid-system'
import Calendar from "./components/DatePickerFromScatch/Calender";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container height="100%"/>
        <Row>
          <Col sm={2} className="side-area"></Col>
          <Col sm={8}>
            <Calendar/>
          </Col>
          <Col sm={2} className="side-area"></Col>
        </Row>
        <Container/>
      </div>
    );
  }
}

export default App;
