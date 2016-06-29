// SETTINGS
// Loading custom settings (local, dev, prod) - not pretty but it works :)

export default function () {

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

}
