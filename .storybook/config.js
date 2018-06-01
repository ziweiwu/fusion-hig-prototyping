import { configure} from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many DatePicker_stories as you need.
}

configure(loadStories, module);
