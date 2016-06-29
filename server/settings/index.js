// SETTINGS
// Loading custom settings (local, dev, prod) - not pretty but it works :)

export default function () {

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

}
