import React from 'react';
import moment from 'moment'
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';

import DatePicker from "../src/components/DatePicker";
import PickDateRange from "../src/components/PickDateRange";
import DisableDates from "../src/components/DisableDates";

const stories = storiesOf('Date Picker', module);
stories.addDecorator(withKnobs);

//defeault view
stories.add('Default View', () => (<DatePicker label="Pick a date" selected={moment()}/>), {notes: 'Default View'});

//portal view
stories.add('Portal View', () => (<DatePicker withPortal label="With Portal"/>), {notes: 'Portal View'});

//disabled
stories.add('Disabled', () => (<DatePicker label="Disabled" disabled={true}/>), {notes: 'Disabled'});

//with placeholder text
stories.add('With Placeholder Text', () => (
    <DatePicker label="With Placehold Text" placeholderText="Please Pick a date"/>),
  {notes: 'With Place Holder Text'});

//select a range of dates
stories.add('Select a Range of Dates', () => (<PickDateRange/>), {notes: 'Select a Range of Dates'});

//disable certain days
stories.add('Disable Certain Days', () => (<DisableDates/>), {notes: 'Disable Certain Days'});

//locale
stories.add('Locale', () => {
  const label = 'Locale';
  const options ={French: 'fr-ca', English: 'en-us', Chinese: 'zh-cn', Japanese: 'ja'};
  const defaultValue = 'fr-ca';
  const locale = select(label, options, defaultValue);

  return (
    (<DatePicker label="Calender with Locale" selected={moment()} locale={locale}/>)
  )
});

