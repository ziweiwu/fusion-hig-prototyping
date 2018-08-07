import React, { Component } from 'react';
import DatePicker from '../../index';
import '../../datePicker.scss';

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
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
      <DatePicker
        selected={this.state.startDate}
        label={this.props.label}
        withPortal
        dateFormat={this.props.dateFormat}
        startDate={this.state.startDate}
        onChange={this.handleChangeStart}
      />
    );
  }
}
