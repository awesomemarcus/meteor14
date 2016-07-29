Package.describe({
  name: 'own-loader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Show a loading spinner while application code is downloading.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dropfen/meteor-app-loader',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('meteorhacks:inject-initial', ['server']);

  api.addAssets('loader.html', 'server');
  api.addFiles('app-loader.js', ['server', 'client']);
});
