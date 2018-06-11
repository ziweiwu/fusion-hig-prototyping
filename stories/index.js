import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import DatePicker from '../src/components/DatePicker/index';

// import stories
import Default from './DatePickerStories/Default';
import Portal from './DatePickerStories/Portal';
import WithClearButton from './DatePickerStories/WithClearButton';
import DateRangePicker from './DatePickerStories/DateRangePicker';
import DisableDates from './DatePickerStories/DisableDates';
import FilterDates from './DatePickerStories/FilterDate';
import Locale from './DatePickerStories/Locale';
import CustomDateFormat from './DatePickerStories/CustomDateFormat';

// storybook module
const stories = storiesOf('Date Picker', module);
stories.addDecorator(withKnobs);

/**
 default view
 */
stories.add('Default View', () => (<Default label="Select Date" />));

/**
 portal view
 */
stories.add('Portal View', () => (<Portal label="Select Date" />));

/**
 with Clear Button
 */
stories.add('With Clear Button', () => {
  const defaultValue = true;
  const isClearable = boolean('Clearable', defaultValue);

  return (
    (<WithClearButton
      selected={moment()}
      label="Select Date"
      isClearable={isClearable}
    />)
  );
});

/**
 disable state
 */
stories.add('Disabled', () => {
  const disableLabel = 'Disable State';
  const enableLabel = 'Enabled';
  const defaultValue = true;
  const disable = boolean('Disabled State', defaultValue);

  return (
    (<DatePicker label={disable ? disableLabel : enableLabel} disabled={disable} />)
  );
});

/**
 Select a range of dates
 */
stories.add('Select a Range of Dates', () => (<DateRangePicker />));

/**
 Restricted Date Range
 */
stories.add('Restricted Date Range', () => {
  const label = 'Restricted Date Range';
  const defaultValue = 7;
  const maxDate = number(label, defaultValue);
  return (
    (<DisableDates maxDate={maxDate} />)
  );
});

/**
 Filter Dates
 */
stories.add('Filter Dates', () => <FilterDates label="Select Date" />);

/**
 calender locale
 */
stories.add('Locale', () => {
  const label = 'Locale';
  const options = ['fr-ca', 'en-us', 'zh-cn', 'ja'];
  const defaultValue = 'fr-ca';
  const locale = select(label, options, defaultValue);

  return <Locale label="Select Date" locale={locale} />;
});

/**
 customize date format
 */
stories.add('Custom Date Format', () => {
  const label = 'Date Format';
  const options = ['ddd, d MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'];
  const defaultValue = 'ddd, d MMM, YYYY';
  const dateFormat = select(label, options, defaultValue);

  return <CustomDateFormat label="Select Date" dateFormat={dateFormat} />;
});

