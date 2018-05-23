import React, {Component} from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import Headline from './Headline';

class PickDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      chosenDate: undefined
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeDate(date) {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    this.setState({
      startDate: date,
      chosenDate: date.toLocaleString('en-US', options)
    });
    console.log(this.state.chosenDate)
  };

  render() {
    return (
      <div>
        <Headline title="Date Picker using React-date-picker library"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
        />
        {this.state.chosenDate && <p>{this.state.chosenDate}</p>}
      </div>
    );
  }
}

export default PickDate;
