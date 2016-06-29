import publications from './publications';
import methods from './methods';

// SETTINGS
// Loading custom settings (local, dev, prod) - not pretty but it works :)
switch (process.env.SETTINGS) {
  case 'local':
    require('/imports/settings/local.js');
    break;
  case 'dev':
    require('/imports/settings/dev.js');
    break;
  case 'prod':
    require('/imports/settings/dev.js');
    break;
  default:
    throw new Error("No valid settings enviroment variable");
}


console.log(process.env.SETTINGS);
console.log(Meteor.settings.var1);

publications();
methods();
