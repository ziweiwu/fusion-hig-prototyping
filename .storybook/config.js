import { configure} from '@storybook/react';

function loadStories() {
  require('../src/components/DatePicker/__stories__/datePickerStories');
  require('../stories/TooltipStories');
}

configure(loadStories, module);
