import React, { Component } from 'react';
import DatePicker from '../../src/components/DatePicker/index';

export default class Disable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeDate(date) {
    this.setState({ startDate: date });
  }

  render() {
    return (
      <DatePicker
        locale={this.props.locale}
        dateFormat={this.props.dateFormat}
        dateFormatCalendar={this.props.dateFormat}
        label={this.props.label}
        selected={this.state.startDate}
        startDate={this.state.startDate}
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