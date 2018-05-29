import React, {Component} from 'react';
import moment from 'moment'
import DatePicker from './DatePicker/index';
import './DatePicker/stylesheets/datePicker.css';
import Headline from './Headline';
import Timestamp from '@hig/timestamp';

//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
class PickDate extends Component {
  constructor(props){
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

  handleCheckDate(date) {
    this.handleChangeStart(date);
    console.log(moment().add(3,'month'));
    if (this.state.startDate >= moment().add(3, 'months')) {
      this.setState({error: "Please select a date within 3 months."});
      console.log(this.state.error)
    } else {
      this.setState({error: undefined});
    }
  }

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

        <Headline title="Display error if pick a date greater than 3 months"/>
        <DatePicker
          placeholderText={"Please Choose a Date"}
          selected={startDate}
          onChange={this.handleCheckDate}
          dateFormat="MM, DD, YYYY"
          calendarClassName="myCal"
          shouldCloseOnSelect={false}
        >
          <p>Pick a date greater than 3 months.</p>
        </DatePicker>


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
