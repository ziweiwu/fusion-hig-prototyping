import React from 'react';
import moment from 'moment';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';
import {
  CustomDateFormat,
  DateRangePicker,
  Default,
  DisableDates,
  Disabled,
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
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  const disabled = boolean('Disable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  return (
    (<Default
      label={label}
      labelOn={labelOn}
      instruction={instruction}
      instructionOn={instructionOn}
      showIcon={showIcon}
      isClearable={isClearable}
      disabled={disabled}
      fixedHeight={fixedHeight}
    />)
  );
});

// with Clear Button
storiesOfDatePicker.add('With Clear Button', () => {
  const label = text('label', 'Date picker ');
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', true);
  const disabled = boolean('disable', false);
  return (
    (<WithClearButton
      selected={moment()}
      label={label}
      showIcon={showIcon}
      isClearable={isClearable}
      disabled={disabled}
    />)
  );
});

// disable state
storiesOfDatePicker.add('Disabled', () => {
  const disabled = boolean('disable', true);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', true);

  return (
    (<Disabled
      label={disabled ? 'Disabled' : 'Enabled'}
      showIcon={showIcon}
      isClearable={isClearable}
      disabled={disabled}
    />)
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

