/*eslint-disable no-unused-vars*/
require('/.setting/local.js');
/*eslint-enable no-unused-vars*/

import publications from './publications';
import methods from './methods';

console.log(Meteor.settings.var1);

publications();
methods();
