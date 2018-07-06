import React, { Component } from 'react';
import DatePicker from '../../index';

export default class FilterDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.isWeekday = this.isWeekday.bind(this);
    this.isWeekend = this.isWeekend.bind(this);
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

  isWeekend(date) {
    const day = date.day();
    return day === 0 || day === 6;
  }

  render() {
    const filterOptions = {
      Weekdays: this.isWeekday,
      Weekends: this.isWeekend,
    };

    return (
      <DatePicker
        preSelection={undefined}
        filterDate={filterOptions[this.props.chooseFilter]}
        locale={this.props.locale}
        dateFormatCalendar={this.props.dateFormat}
        dateFormat={this.props.dateFormat}
        selected={this.state.startDate}
        onChange={this.handleChangeStart}
        label={this.props.label}
        startDate={this.state.startDate}
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
