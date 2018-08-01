import {configure} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

setOptions({addonPanelInRight: true});

function loadStories() {
  require('../src/__stories__/datePickerStories');
}

configure(loadStories, module);