import React, {Component} from 'react';
import Moment from 'moment'
import DatePicker from './DatePicker/index';
import './DatePicker/stylesheets/datePicker.css';
import Headline from './Headline';
import Timestamp from '@hig/timestamp';


class PickDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: Moment()
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeDate(date) {
    this.setState({startDate: date});
  };

  render() {
    const startDate = this.state.startDate;
    return (
      <div>
        <Headline title="Date Picker Prototype based on React-Date-Picker library"/>
        <DatePicker
          selected={startDate}
          onChange={this.handleChangeDate}
          dateFormat="YYYY/MM/DD"
        />
        <Timestamp timestamp={startDate}/>
        {startDate && <p>Date: {startDate.local('en-US').format('YYYY-MM-DD').toString()}</p>}
      </div>
    );
  }
}

export default PickDate;
