import React from 'react';
import ReactDatePicker from 'react-datepicker';
import TextField from '@hig/text-field';
import '@hig/text-field/build/index.css';
import './stylesheets/datePicker.css';

export default class DatePicker extends React.Component {
  render() {
    const props = this.props;

    return <ReactDatePicker
      {...props}
      fixedHeight={true}
      isClearable={false}

      //use TextField as inputField
      customInput={<TextField
        label={props.label}
        showClearButton={props.isClearable}

        //use ref to allow the use clear button in TextField component
        //instead of the one comes with ReactDatePicker
        onClearButtonClick={() => {
          this.node.clear();
          //props.onClearClick();
        }}
        placeholderText={props.placeholderText}
      />}

      ref={node => this.node = node}

      //settings for calender popper
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
  }
}

