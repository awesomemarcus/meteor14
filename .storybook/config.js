import { configure } from '@kadira/storybook';

function loadStories() {
  require('expose?$!expose?jQuery!jquery');
  require("bootstrap-webpack");

  /* custom css */
  require('../client/assets/stylesheets/custom_style.css');
  require('../client/assets/stylesheets/products.css');

  require('../client/modules/users/components/.stories/');
  require('../client/modules/products/components/.stories/');
  require('../client/modules/categories/components/.stories/');
  // require as many stories as you need.
}

configure(loadStories, module);
