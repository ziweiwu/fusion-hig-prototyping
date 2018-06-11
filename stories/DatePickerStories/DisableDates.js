import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../src/components/DatePicker/index';
import '../../src/components/DatePicker/stylesheets/datePicker.css';

export default class DisableDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
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
    const maxDate = this.props.maxDate;
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={this.handleChangeDate}
          label="Select Date"
          minDate={moment()}
          maxDate={moment().add(maxDate, 'days')}
        />
      </div>

    );
  }
}

