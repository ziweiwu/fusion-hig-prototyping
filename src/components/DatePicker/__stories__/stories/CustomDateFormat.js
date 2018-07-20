import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../index';

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
    const filterOptions = {
      Weekdays: this.isWeekday,
      Weekends: this.isWeekend,
      None: null,
    };

    return (
      <DatePicker
        selected={startDate}
        label={this.props.label}
        dateFormat={this.props.dateFormat}
        startDate={startDate}
        onChange={this.handleChangeDate}
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
