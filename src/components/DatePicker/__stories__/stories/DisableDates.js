import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../index';

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

  isWeekday(date) {
    const day = date.day();
    return day !== 0 && day !== 6;
  }

  isWeekend(date) {
    const day = date.day();
    return day === 0 || day === 6;
  }

  render() {
    const startDate = this.state.startDate;
    const maxDate = this.props.maxDate;
    const filterOptions = {
      Weekdays: this.isWeekday,
      Weekends: this.isWeekend,
      None: null,
    };
    return (
      <DatePicker
        locale={this.props.locale}
        dateFormat={this.props.dateFormat}
        selected={startDate}
        onChange={this.handleChangeDate}
        label="Select Date"
        minDate={moment()}
        maxDate={moment().add(maxDate, 'days')}
        startDate={this.state.startDate}
        showIcon={this.props.showIcon}
        showClearButton={this.props.showClearButton}
        disabled={this.props.disabled}
        showLabel={this.props.showLabel}
        instruction={this.props.instruction}
        showInstruction={this.props.showInstruction}
        fixedHeight={this.props.fixedHeight}
        filterDate={filterOptions[this.props.chooseFilter]}
      />
    );
  }
}
