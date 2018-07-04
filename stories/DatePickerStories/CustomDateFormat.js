import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../src/components/DatePicker/index';

export default class CustomDateFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      error: undefined,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeDate(date) {
    this.setState({ startDate: date });
  }

  handleChangeStart(date) {
    this.setState({ startDate: date });
  }

  handleChangeEnd(date) {
    this.setState({ endDate: date });
  }

  render() {
    const startDate = this.state.startDate;
    return (

      <div>
        <DatePicker
          selected={startDate}
          label={this.props.label}
          dateFormatCalendar={this.props.dateFormat}
          dateFormat={this.props.dateFormat}
          startDate={startDate}
          onChange={this.handleChangeDate}
        />
      </div>
    );
  }
}

