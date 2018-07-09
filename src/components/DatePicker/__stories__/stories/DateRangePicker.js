import React, { Component } from 'react';
import DatePicker from '../../index';

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

  render() {
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
            dateFormatCalendar={this.props.dateFormat}
            dateFormat={this.props.dateFormat}
          />
          <span style={{ paddingLeft: '270px', float: 'left' }} />
        </span>
        <span style={{ float: 'left' }}>
          <DatePicker
            selected={this.state.endDate}
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
            dateFormatCalendar={this.props.dateFormat}
            dateFormat={this.props.dateFormat}
          />
        </span>
      </div>
    );
  }
}