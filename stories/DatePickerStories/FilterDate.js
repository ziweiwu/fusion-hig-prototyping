import React, { Component } from 'react';
import DatePicker from '../../src/components/DatePicker/index';

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.isWeekday = this.isWeekday.bind(this);
  }

  handleChangeDate(date) {
    this.setState({ startDate: date });
  }

  handleChangeStart(date) {
    this.setState({ startDate: date });
  }

  isWeekday(date) {
    const day = date.day();
    return day !== 0 && day !== 6;
  }


  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
          label={this.props.label}
          filterDate={this.isWeekday}
        />
      </div>
    );
  }
}
