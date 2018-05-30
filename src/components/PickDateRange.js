import React, {Component} from 'react';
import moment from 'moment'
import DatePicker from './DatePicker/index';
import './DatePicker/stylesheets/datePicker.css';
import Headline from './Headline';

//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
class PickDateRange extends Component {
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
    this.handleCheckDate = this.handleChangeEnd.bind(this);
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
        <Headline title="Date Range"/>
        <DatePicker
          selected={startDate}
          label="Pick Start Date"
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeStart}
        />

        <DatePicker
          selected={endDate}
          selectsEnd
          label="Pick End Date"
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeEnd}
        />

      </div>

    );
  }
}

export default PickDateRange;
