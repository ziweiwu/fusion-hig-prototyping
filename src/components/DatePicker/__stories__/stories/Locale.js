import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../index';

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
      <DatePicker
        selected={this.state.startDate}
        label={this.props.label}
        locale={this.props.locale}
        dateFormatCalendar={this.props.dateFormat}
        dateFormat={this.props.dateFormat}
        startDate={this.state.startDate}
        onChange={this.handleChangeStart}
        showIcon={this.props.showIcon}
        showClearButton={this.props.showClearButton}
        disabled={this.props.disabled}
        showLabel={this.props.showLabel}
        instruction={this.props.instruction}
        showInstruction={this.props.showInstruction}
        fixedHeight={this.props.fixedHeight}
      />
    );
  }
}