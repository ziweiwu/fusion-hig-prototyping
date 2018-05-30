import React, {Component} from 'react';
import moment from 'moment'
import DatePicker from './DatePicker/index';
import './DatePicker/stylesheets/datePicker.css';
import Headline from './Headline';

export default class DisableDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      error: undefined
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
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={this.handleChangeDate}
          label = "Please select between today and next ten days"
          minDate={moment()}
          maxDate={moment().add(10, "days")}
        />
      </div>

    );
  }
}

