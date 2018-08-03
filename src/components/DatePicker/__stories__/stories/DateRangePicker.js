import React, { Component } from 'react';
import DatePicker from '../../index';
import '../../datePicker.css';

export default class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
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
      <div>
        <span style={{ float: 'left' }}>
          <DatePicker
            selected={this.state.startDate}
            shouldCloseOnSelect
            label="From"
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
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
          />
          <span style={{ paddingLeft: '270px', float: 'left' }} />
        </span>
        <span style={{ float: 'left' }}>
          <DatePicker
            selected={this.state.endDate || this.state.startDate}
            label="To"
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
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
          />
        </span>
      </div>
    );
  }
}
