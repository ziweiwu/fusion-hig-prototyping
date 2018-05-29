import React from 'react';
import {storiesOf} from '@storybook/react';
import PickDate from '../src/components/PickDate.js';
import DatePicker from "../src/components/DatePicker";

storiesOf('Date Picker', module)
  .add('Default View', () =>(<DatePicker label="Pick a date" />), {notes: 'Default View'})
  .add('Portal View', () =>(<DatePicker withPortal label = "With Portal"/>), {notes: 'Portal View'})
  .add('Disabled', () =>(<DatePicker label="Disabled" disabled={true}/>), {notes: 'Disabled'})
  .add('With Placeholder Text', () =>(<DatePicker label="With Placehold Text" placeholderText="Please Pick a date"/>), {notes: 'With Place Holder Text'})


;
