import React, { Component } from 'react';
import DatePicker from '../../src/components/myDatePicker/index';
import '../../src/components/myDatePicker/stylesheets/datePicker.css';

export default class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({ startDate: date });
  }

  handleChangeEnd(date) {
    this.setState({ endDate: date });
  }

  render() {
    return (
      <div>
        <span style={{ float: 'left' }}>
          <DatePicker
            selected={this.state.startDate}
            shouldCloseOnSelect={false}
            label="From"
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
          />
          <span style={{ paddingLeft: '270px', float: 'left' }} />
        </span>
        <span style={{ float: 'left' }}>
          <DatePicker
            selected={this.state.endDate}
            label="To"
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
          />
        </span>
      </div>
    );
  }
}

