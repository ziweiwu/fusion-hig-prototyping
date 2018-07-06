import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import {
  CustomDateFormat,
  DateRangePicker,
  Default,
  DisableDates,
  Disabled,
  FilterDates,
  Locale,
  WithClearButton,
} from './stories/index';

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
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return (
    (
      <Default
        label={label}
        labelOn={labelOn}
        instruction={instruction}
        instructionOn={instructionOn}
        showIcon={showIcon}
        isClearable={isClearable}
        disabled={disabled}
        fixedHeight={fixedHeight}
        dateFormat={dateFormat}
        locale={locale}
      />
    )
  );
});

// with Clear Button
storiesOfDatePicker.add('With Clear Button', () => {
  const isClearable = boolean('Clearable', true);
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const disabled = boolean('disable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return (
    (
      <WithClearButton
        selected={moment()}
        label={label}
        showIcon={showIcon}
        isClearable={isClearable}
        disabled={disabled}
        labelOn={labelOn}
        instruction={instruction}
        instructionOn={instructionOn}
        fixedHeight={fixedHeight}
        dateFormat={dateFormat}
        locale={locale}
      />
    )
  );
});

// disable state
storiesOfDatePicker.add('Disabled', () => {
  const disabled = boolean('disable', true);
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', true);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return (
    (
      <Disabled
        label={label}
        showIcon={showIcon}
        isClearable={isClearable}
        disabled={disabled}
        selected={moment()}
        labelOn={labelOn}
        instruction={instruction}
        instructionOn={instructionOn}
        fixedHeight={fixedHeight}
        dateFormat={dateFormat}
        locale={locale}
      />
    )
  );
});

// Select a range of dates
storiesOfDatePicker.add('Select a Range of Dates', () => {
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const disabled = boolean('disable', false);
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return (
    (
      <DateRangePicker
        label={label}
        showIcon={showIcon}
        isClearable={isClearable}
        disabled={disabled}
        selected={moment()}
        labelOn={labelOn}
        instruction={instruction}
        instructionOn={instructionOn}
        fixedHeight={fixedHeight}
        dateFormat={dateFormat}
        locale={locale}
      />
    )
  );
});

// Restricted Date Range
storiesOfDatePicker.add('Restricted Date Range', () => {
  const defaultValue = 7;
  const maxDate = number('Date Range Restriction', defaultValue);
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const disabled = boolean('disable', false);
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return (
    (
      <DisableDates
        maxDate={maxDate}
        label={label}
        showIcon={showIcon}
        isClearable={isClearable}
        disabled={disabled}
        selected={moment()}
        labelOn={labelOn}
        instruction={instruction}
        instructionOn={instructionOn}
        fixedHeight={fixedHeight}
        dateFormat={dateFormat}
        locale={locale}
      />
    )
  );
});

// Filter Dates
storiesOfDatePicker.add('Filter Dates', () => {
  const chooseFilter = select('Filter', ['Weekdays', 'Weekends'], ['Weekdays']);
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const disabled = boolean('disable', false);
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');

  return (
    <FilterDates
      chooseFilter={chooseFilter}
      label={label}
      showIcon={showIcon}
      isClearable={isClearable}
      disabled={disabled}
      selected={moment()}
      labelOn={labelOn}
      instruction={instruction}
      instructionOn={instructionOn}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
    />
  );
});

// calender locale
storiesOfDatePicker.add('Locale', () => {
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'fr-ca');
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const disabled = boolean('disable', false);

  return (
    <Locale
      label={label}
      showIcon={showIcon}
      isClearable={isClearable}
      disabled={disabled}
      selected={moment()}
      labelOn={labelOn}
      instruction={instruction}
      instructionOn={instructionOn}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
    />
  );
});

// customize date format
storiesOfDatePicker.add('Custom Date Format', () => {
  const dateFormat = select('Date Format', ['ddd, MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'], 'YYYY-MM-DD');
  const locale = select('Locale', ['fr-ca', 'en-us', 'zh-cn', 'ja'], 'en-us');
  const label = text('Label', 'Date picker ');
  const labelOn = boolean('Label on', true);
  const instruction = text('Instruction', 'Please choose a date ');
  const instructionOn = boolean('Instruction on', false);
  const showIcon = boolean('Icon', true);
  const isClearable = boolean('Clearable', false);
  const fixedHeight = boolean('Fixed Calender Height', true);
  const disabled = boolean('disable', false);

  return (
    <CustomDateFormat
      dateFormat={dateFormat}
      locale={locale}
      label={label}
      showIcon={showIcon}
      isClearable={isClearable}
      disabled={disabled}
      selected={moment()}
      labelOn={labelOn}
      instruction={instruction}
      instructionOn={instructionOn}
      fixedHeight={fixedHeight}
    />
  );
});
