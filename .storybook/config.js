import { configure} from '@storybook/react';

function loadStories() {
  require('../stories/TooltipStories');
  require('../stories/DatepickerStories');
}

configure(loadStories, module);
