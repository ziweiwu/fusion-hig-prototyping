import React, { Component } from 'react';
import DatePicker from '../../src/components/DatePicker/index';

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

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          startDate={this.state.startDate}
          onChange={this.handleChangeStart}
          label={this.props.label}
          showIcon={this.props.showIcon}
          isClearable={this.props.isClearable}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

