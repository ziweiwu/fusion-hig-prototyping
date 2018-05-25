import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import PickDate from '../src/components/PickDate';

storiesOf('Date Picker', module)
  .add('Default Date Input', () => (
    <PickDate/>
  ));
