import React, { Component } from 'react';
import DatePicker from '../../src/components/DatePicker/index';

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
            isClearable={this.props.isClearable}
            disabled={this.props.disabled}
            labelOn={this.props.labelOn}
            instruction={this.props.instruction}
            instructionOn={this.props.instructionOn}
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
            isClearable={this.props.isClearable}
            disabled={this.props.disabled}
            labelOn={this.props.labelOn}
            instruction={this.props.instruction}
            instructionOn={this.props.instructionOn}
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

