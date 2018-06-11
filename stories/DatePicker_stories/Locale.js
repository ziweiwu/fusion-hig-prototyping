import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../src/components/myDatePicker/index';
import '../../src/components/myDatePicker/stylesheets/datePicker.css';

export default class Locale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
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
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          label={this.props.label}
          locale={this.props.locale}
          startDate={this.state.startDate}
          onChange={this.handleChangeStart}
        />
      </div>
    );
  }
}

