import React, { Component } from "react";
import DatePicker from "../../index";
import "../../datePicker.scss";

export default class Disable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeDate(date) {
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
      None: null
    };
    return (
      <DatePicker
        locale={this.props.locale}
        dateFormat={this.props.dateFormat}
        label={this.props.label}
        selected={this.state.startDate}
        startDate={this.state.startDate}
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
