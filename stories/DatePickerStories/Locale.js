import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from '../../src/components/DatePicker/index';

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

