import React, {Component} from 'react';
import moment from 'moment'
import DatePicker from './DatePicker/DatePicker';
import './DatePicker/stylesheets/datePicker.css';
import Headline from './Headline';

class PickDate extends Component {
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
    return (
      <div>
        <Headline title="Date Picker Prototype based on React-Date-Picker library"/>
        <DatePicker
          placeholderText={"do something  Date"}
          selected={startDate}
          onChange={this.handleChangeDate}
          dateFormat="MM/DD/YYYY"
          calendarClassName="myCal"
        />
        {startDate && <p>Date: {startDate.local('en-US').format('YYYY-MM-DD').toString()}</p>}
        <Headline title="Use of Timstamp component from HIG to show time lapsed"/>
        <Timestamp timestamp={startDate}/>

        <Headline title="Select Time and Date"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
        />

        <Headline title="Specific Date Range"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
          minDate={moment()}
          maxDate={moment().add(5, "days")}
          placeholderText="Select a date between today and 5 days in the future"
        />

        <Headline title="Disable Date Picker"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
          disabled={true}
          placeholderText="This is disabled"/>


        <Headline title="Portal Version"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
          withPortal
        />

        <Headline title="Portal Version with Time"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
          withPortal
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="LLL"
          timeCaption="time"
        />

        <Headline title="Date Range"/>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
        />

        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
        />

        <Headline title="Clear Input"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
          isClearable={true}
          placeholderText="I have been cleared!"
        />

        <Headline title="With Year and Month Dropdown"/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />

      </div>

    );
  }
}

export default PickDate;
