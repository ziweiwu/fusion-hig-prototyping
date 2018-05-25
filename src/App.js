import React, {Component} from 'react';
import './App.css';
import "@hig/styles/build/index.css";
import TableView from './components/TableView';
import PickDate from './components/PickDate'
import {Container, Row, Col} from 'react-grid-system'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container height="100%"/>
        <Row>
          <Col sm={2} className="side-area"></Col>
          <Col sm={8}>
            <TableView/>
            <PickDate/>
          </Col>
          <Col sm={2} className="side-area"></Col>
        </Row>
        <Container/>
      </div>
    );
  }
}

export default App;
