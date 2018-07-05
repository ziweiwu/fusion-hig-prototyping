import React from 'react';
import PropTypes from "prop-types";
import '@hig/styles/build/index.css';
import '@hig/text-field/build/index.css';
import {TextFieldPresenter} from '@hig/text-field';
import ReactDatePicker from 'react-datepicker';
import './datePicker.css';

const calenderIcon =
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <title>calendar-24</title>
    <g id="final">
      <g id="calendar">
        <g id="outline">
          <path d="M15,10.08H14V12H9V10.08H8V12H4.23v1H8v3H4.23v1H8v2H9V17h5v2h1V17h4V16H15V13h4V12H15ZM14,16H9V13h5Z"
                fill="#2e4258"/>
          <path d="M18,6a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V5H8V6A1,1,0,0,1,7,7H6A1,1,0,0,1,5,6V5H3V8H20V5H18Z"
                fill="none"/>
          <rect x="3" y="9" width="17" height="12" fill="none"/>
          <path
            d="M20,4H18V3a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1V4H8V3A1,1,0,0,0,7,2H6A1,1,0,0,0,5,3V4H3A1,1,0,0,0,2,5V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V5A1,1,0,0,0,20,4ZM16,3h1V6H16ZM6,3H7V6H6ZM20,21H3V9H20ZM20,8H3V5H5V6A1,1,0,0,0,6,7H7A1,1,0,0,0,8,6V5h7V6a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V5h2Z"
            fill="#2e4258"/>
        </g>
      </g>
    </g>
  </svg>

export default class DatePicker extends React.Component {
  static propTypes = {
    adjustDateOnChange: PropTypes.bool,
    allowSameDay: PropTypes.bool,
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
    ///added props
    readOnly: PropTypes.bool,
    showIcon: PropTypes.bool,
    instruction: PropTypes.string,
    instructionOn: PropTypes.bool,
    label: PropTypes.string,
    labelOn: PropTypes.bool,
    fixedHeight: PropTypes.bool,
  };

  static defaultProps = {
    shouldCloseOnSelect: true,
    disabled: false,
    showIcon: true,
    label: undefined,
    labelOn: true,
    instruction: undefined,
    instructionOn: false,
    fixedHeight: true
  };

  render() {
    const props = this.props;
    const showIcon = this.props.showIcon ? calenderIcon : undefined;
    return (<ReactDatePicker
      {...props}
      ref={node => this.node = node}
      readOnly
      showMonthYearDropdown={false}
      showMonthDropdown={false}
      showYearDropdown={false}
      showTimeSelect={false}
      isClearable={false}
      disabledKeyboardNavigation={false}

      // use TextField as inputField
      // use ref to allow the use clear button in TextField component
      // instead of the one comes with ReactDatePicker
      customInput={
        <TextFieldPresenter
          readOnly
          disabled
          instructions={props.instructionOn ? props.instruction : undefined}
          label={props.labelOn ? props.label : undefined}
          icon={showIcon}
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

