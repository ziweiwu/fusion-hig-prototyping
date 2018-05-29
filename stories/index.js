import React from 'react';
import {storiesOf} from '@storybook/react';
import PickDate from '../src/components/PickDate.js';
import DatePicker from "../src/components/DatePicker";

storiesOf('Date Picker', module)
  .add('Only Date ', () =>(<DatePicker label="Pick a date" />), {notes: 'Default Date Picker'})
  .add('Portal', () =>(<DatePicker withPortal label = "With Portal"/>), {notes: 'Portal Date Picker'})
  .add('Disabled', () =>(<DatePicker label="Disabled" disabled={true}/>), {notes: 'Disabled'})
  .add('With Placeholder Text', () =>(<DatePicker label="With Placehold Text" placeholderText="Please Pick a date"/>), {notes: 'With Place Holder'})


;
