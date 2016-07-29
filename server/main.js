import settings from './settings';
import publications from './publications';
import methods from './methods';

Meteor.startup(function(){
  settings();
});
publications();
methods();
