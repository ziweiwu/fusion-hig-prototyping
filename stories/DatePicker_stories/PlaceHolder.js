import React, {Component} from 'react';
import DatePicker from '../../src/components/DatePicker/DatePicker';
import '../../src/components/DatePicker/stylesheets/datePicker.css';

export default class PlaceHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
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
        <DatePicker
          selected={startDate}
          label={this.props.label}
          placeholderText={this.props.placeholderText}
          startDate={startDate}
          onChange={this.handleChangeStart}
        />
      </div>
    );
  }
}
