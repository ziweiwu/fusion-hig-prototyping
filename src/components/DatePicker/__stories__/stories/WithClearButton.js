import React, { Component } from 'react';
import DatePicker from '../../index';

export default class WithClearButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.selected,
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
      None: null,
    };
    return (
      <DatePicker
        selected={this.state.startDate}
        startDate={this.state.startDate}
        onChange={this.handleChangeStart}
        label={this.props.label}
        showIcon={this.props.showIcon}
        showClearButton={this.props.showClearButton}
        disabled={this.props.disabled}
        showLabel={this.props.showLabel}
        instruction={this.props.instruction}
        showInstruction={this.props.showInstruction}
        fixedHeight={this.props.fixedHeight}
        locale={this.props.locale}
        dateFormat={this.props.dateFormat}
        filterDate={filterOptions[this.props.chooseFilter]}
      />);
  }
}
