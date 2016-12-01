Package.describe({
  name: 'meteor-koa-testing',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor koa testing package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ssr-server/meteor-koa-testing',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  supertest: '2.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('meteor-koa-testing.js');
});
