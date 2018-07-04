import React from 'react';
import moment from 'moment';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';
import DatePicker from '../src/components/DatePicker/index';
import {
  CustomDateFormat,
  DateRangePicker,
  Default,
  DisableDates,
  FilterDates,
  Locale,
  WithClearButton,
} from './DatePickerStories/index';

/*
  Date Picker Stories
 */
const storiesOfDatePicker = storiesOf('Date Picker', module);
storiesOfDatePicker.addDecorator(withKnobs);

// default view
storiesOfDatePicker.add('Default View', () => {
  const label = text('label', 'Date picker ');
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  return (
    (<Default
      label={label}
      showIcon={showIcon}
      isClearable={isClearable}
    />)
  );
});

// with Clear Button
storiesOfDatePicker.add('With Clear Button', () => {
  const isClearable = boolean('Clearable', true);
  return (
    (<WithClearButton
      selected={moment()}
      label="Select Date"
      isClearable={isClearable}
    />)
  );
});

// disable state
storiesOfDatePicker.add('Disabled', () => {
  const disableLabel = 'Disable State';
  const enableLabel = 'Enabled';
  const defaultValue = true;
  const disable = boolean('Disabled State', defaultValue);

  return (
    (<DatePicker label={disable ? disableLabel : enableLabel} disabled={disable}/>)
  );
});

// Select a range of dates
storiesOfDatePicker.add('Select a Range of Dates', () => (<DateRangePicker/>));

// Restricted Date Range
storiesOfDatePicker.add('Restricted Date Range', () => {
  const label = 'Restricted Date Range';
  const defaultValue = 7;
  const maxDate = number(label, defaultValue);
  return (
    (<DisableDates maxDate={maxDate}/>)
  );
});

// Filter Dates
storiesOfDatePicker.add('Filter Dates', () => <FilterDates label="SelectDate"/>);

// calender locale
storiesOfDatePicker.add('Locale', () => {
  const label = 'Locale';
  const options = ['fr-ca', 'en-us', 'zh-cn', 'ja'];
  const defaultValue = 'fr-ca';
  const locale = select(label, options, defaultValue);

  return <Locale label="Select Date" locale={locale}/>;
});

// customize date format
storiesOfDatePicker.add('Custom Date Format', () => {
  const label = 'Date Format';
  const options = ['ddd, d MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'];
  const defaultValue = 'ddd, d MMM, YYYY';
  const dateFormat = select(label, options, defaultValue);

  return <CustomDateFormat label="Select Date" dateFormat={dateFormat}/>;
});


