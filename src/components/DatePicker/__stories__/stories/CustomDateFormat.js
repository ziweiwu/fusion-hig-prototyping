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
    return (
      <DatePicker
        selected={startDate}
        label={this.props.label}
        dateFormatCalendar={this.props.dateFormat}
        dateFormat={this.props.dateFormat}
        startDate={startDate}
        onChange={this.handleChangeDate}
        showIcon={this.props.showIcon}
        isClearable={this.props.isClearable}
        disabled={this.props.disabled}
        labelOn={this.props.labelOn}
        instruction={this.props.instruction}
        instructionOn={this.props.instructionOn}
        fixedHeight={this.props.fixedHeight}
      />
    );
  }
}
