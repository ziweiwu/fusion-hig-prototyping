import { configure} from '@storybook/react';

function loadStories() {
  require('../src/components/DatePicker/__stories__/datePickerStories');
  require('../src/components/Tooltip/__stories__/tooltipStories')
}

configure(loadStories, module);
