import React, {Component} from 'react';
import DatePicker from '../../src/components/DatePicker/index';
import '../../src/components/DatePicker/stylesheets/datePicker.css';

export default class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({startDate: date});
  };

  handleChangeEnd(date) {
    this.setState({endDate: date});
  };

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          label="Pick a start date"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
        />
        <DatePicker
          selected={this.state.endDate}
          label="Pick an end date"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
        />
      </div>
    );
  }
}

