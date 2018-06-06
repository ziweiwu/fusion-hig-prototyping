import React from 'react';
import ReactDatePicker from 'react-datepicker';
import TextField from '@hig/text-field';
import '@hig/text-field/build/index.css';
import './styles/datePicker.css';

const DatePicker = (props) => {
  return <ReactDatePicker {...props}   customInput={<TextField />}/>
};

export default DatePicker;