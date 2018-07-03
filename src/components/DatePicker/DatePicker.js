import React from 'react';
import PropTypes from "prop-types";
import '@hig/styles/build/index.css';
import '@hig/text-field/build/index.css';
import {TextFieldPresenter} from '@hig/text-field';
import ReactDatePicker from 'react-datepicker';
import './datePicker.css';

export default class DatePicker extends React.Component {
  static propTypes = {
    adjustDateOnChange: PropTypes.bool,
    allowSameDay: PropTypes.bool,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    calendarClassName: PropTypes.string,
    calendarContainer: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    customInput: PropTypes.element,
    customInputRef: PropTypes.string,
    dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    dateFormatCalendar: PropTypes.string,
    dayClassName: PropTypes.func,
    disabled: PropTypes.bool,
    endDate: PropTypes.object,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    fixedHeight: PropTypes.bool,
    formatWeekNumber: PropTypes.func,
    highlightDates: PropTypes.array,
    id: PropTypes.string,
    includeDates: PropTypes.array,
    isClearable: PropTypes.bool,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    monthsShown: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onWeekSelect: PropTypes.func,
    openToDate: PropTypes.object,
    placeholderText: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    selected: PropTypes.object,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    startDate: PropTypes.object,
    startOpen: PropTypes.bool,
    title: PropTypes.string,
    todayButton: PropTypes.string,
    useWeekdaysShort: PropTypes.bool,
    formatWeekDay: PropTypes.func,
    utcOffset: PropTypes.number,
    value: PropTypes.string,
    weekLabel: PropTypes.string,
    shouldCloseOnSelect: PropTypes.bool,
    minTime: PropTypes.object,
    maxTime: PropTypes.object,
    readOnly: PropTypes.bool
  };

  render() {
    const props = this.props;

    return (<ReactDatePicker
      {...props}
      readOnly
      fixedHeight
      showMonthYearDropdown={false}
      showMonthDropdown={false}
      showYearDropdown={false}
      showTimeSelect={false}
      isClearable={false}

      // use TextField as inputField
      // use ref to allow the use clear button in TextField component
      // instead of the one comes with ReactDatePicker
      ref={node => this.node = node}
      customInput={<TextFieldPresenter
        {...props}
        id={props.selected.toString()} //use selected id to keep input id unique
        showClearButton={props.isClearable}
        onClearButtonClick={() => {
          this.node.clear();
        }}
      />}

      // calender popper settings
      popperPlacement="bottom-start"
      popperModifiers={{
        // adjust position of calender popper, (horizontal, vertical)
        offset: {
          enabled: true,
          offset: '0px, -30px',
        },
        flip: {
          enabled: false,
        },
        preventOverflow: {
          enabled: true,
          escapeWithReference: false,
        },
      }}
    />);
  }
}

