import React from 'react';
import moment from 'moment'
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';

import DatePicker from "../src/components/DatePicker";
import PickDateRange from "../src/components/PickDateRange";
import DisableDates from "../src/components/DisableDates";
import Locale from "../src/components/Locale";
import CustomDateFormat from "../src/components/CustomDateFormat";

const stories = storiesOf('Date Picker', module);
stories.addDecorator(withKnobs);

//default view
stories.add('Default View', () => (<DatePicker label="Pick a date" selected={moment()}/>), {notes: 'Default View'});

//portal view
stories.add('Portal View', () => (<DatePicker withPortal label="With Portal"/>), {notes: 'Portal View'});

//disabled
stories.add('Disabled', () => {
    const disable_label = 'Disable State';
    const enable_label = 'Enabled';
    const defaultValue = true;
    const disable = boolean('Disabled State', defaultValue);

    return (
      (<DatePicker label={disable ? disable_label : enable_label} disabled={disable}/>)
    )
  }
);

//with placeholder text
stories.add('With Placeholder Text', () => (
    <DatePicker label="With Placehold Text" placeholderText="Please Pick a date"/>),
  {notes: 'With Place Holder Text'});

//select a range of dates
stories.add('Select a Range of Dates', () => (<PickDateRange/>), {notes: 'Select a Range of Dates'});

//disable certain days
stories.add('Disable Certain Days', () => (<DisableDates/>), {notes: 'Disable Certain Days'});

//Change calender locale
stories.add('Locale', () => {
  const label = 'Locale';
  const options = ['fr-ca', 'en-us', 'zh-cn', 'ja'];
  const defaultValue = 'fr-ca';
  const locale = select(label, options, defaultValue);

  return (
    (<Locale label="Calender with Locale" locale={locale}/>)
  )
});

//custom date format
stories.add('Custom Date Format', () => {
  const label = 'Date Format';
  const options = ['L', 'ddd,MMM', 'YYYY-MM-DD', 'DD-MM-YY'];
  const defaultValue = 'L';
  const dateFormat = select(label, options, defaultValue);

  return (
    (<CustomDateFormat label="Input with Custom Date Format" dateFormat={dateFormat}/>)
  )
});
