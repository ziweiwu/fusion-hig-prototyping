import React from 'react';
import ReactDatePicker from 'react-datepicker';
import TextField from '@hig/text-field';
import '@hig/text-field/build/index.css';
import './stylesheets/datePicker.css';

const DatePicker = (props) => {
  return <ReactDatePicker
    {...props}
    fixedHeight={true}
    customInput={<TextField label={props.label} placeholderText={props.placeholderText}/>}
    popperPlacement="bottom-start"

    popperModifiers={{
      //adjust position of calender popper, (horizontal, vertical)
      offset: {
        enabled: true,
        offset: '0px, -30px'
      },

      //prevent calender popper to flip
      flip: {
        enabled: false
      },

      preventOverflow: {
        enabled: true,
        escapeWithReference: false
      }
    }}


  />
};

export default DatePicker;