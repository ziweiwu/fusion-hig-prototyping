import React, { Component } from "react";
import moment from "moment";
import DatePicker from "../../index";
import "../../datePicker.scss";

export default class CustomDateFormat extends Component {
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
    const startDate = this.state.startDate;
    const filterOptions = {
      Weekdays: this.isWeekday,
      Weekends: this.isWeekend,
      None: null
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
