import React, { Component } from 'react';
import DatePicker from '../../index';

export default class Default extends Component {
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
        dateFormatCalendar={this.props.dateFormat}
        dateFormat={this.props.dateFormat}
        selected={this.state.startDate}
        onChange={this.handleChangeDate}
        showIcon={this.props.showIcon}
        showClearButton={this.props.showClearButton}
        disabled={this.props.disabled}
        label={this.props.label}
        showLabel={this.props.showLabel}
        instruction={this.props.instruction}
        showInstruction={this.props.showInstruction}
        fixedHeight={this.props.fixedHeight}
      />
    );
  }
}
