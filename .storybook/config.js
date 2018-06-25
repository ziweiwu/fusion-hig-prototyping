import { configure} from '@storybook/react';

function loadStories() {
  require('../stories/DatepickerStories');
  require('../stories/TooltipStories')
}

configure(loadStories, module);
