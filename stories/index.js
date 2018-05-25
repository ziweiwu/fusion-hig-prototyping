import React from 'react';
import {storiesOf} from '@storybook/react';
import PickDate from '../src/components/PickDate.js';

storiesOf('Date Picker', module)
  .add('Default Date Input', () =>(<PickDate />), {notes: 'A daypicker component'});
