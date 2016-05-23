import { configure } from '@kadira/storybook';

/* import css */
import '/public/bootstrap-3.3.6/css/bootstrap.min.css';
import '/client/assets/stylesheets/products.css';

function loadStories() {
  require('../client/modules/users/components/.stories/signup');
  require('../client/modules/products/components/.stories/');
  // require as many stories as you need.
}

configure(loadStories, module);
