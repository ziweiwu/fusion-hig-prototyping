import React, { Component } from 'react';
import DatePicker from '../../src/components/DatePicker/index';

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
      <div>
        <DatePicker
          label={this.props.label}
          placeholderText={this.props.placeholderText}
          selected={this.state.startDate}
          startDate={this.state.startDate}
          onChange={this.handleChangeDate}
        />
      </div>
    );
  }
}

