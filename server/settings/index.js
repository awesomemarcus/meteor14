// SETTINGS
// Loading custom settings (local, dev, prod) - not pretty but it works :)

export default function () {

 // CUSTOM SETTING FILE
  switch (process.env.SETTINGS) {
    default:
      require('/imports/settings/local.js');
      break;
    case 'dev':
      require('/imports/settings/dev.js');
      break;
    case 'prod':
      require('/imports/settings/prod.js');
      break;
  }
  // ALWAYS INCLUDE VERSION
  require('/imports/settings/version.js');

}
