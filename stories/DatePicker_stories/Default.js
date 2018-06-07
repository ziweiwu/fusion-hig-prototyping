import React, {Component} from 'react';
import DatePicker from '../../src/components/myDatePicker/index';
import '../../src/components/myDatePicker/stylesheets/datePicker.css';

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeDate(date) {
    this.setState({startDate: date});
  };

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
          startDate={this.state.startDate}
          onChange={this.handleChangeStart}
          label={this.props.label}
        />
      </div>
    );
  }
}

