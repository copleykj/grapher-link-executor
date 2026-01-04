Package.describe({
  name: 'copleykj:grapher-link-executor',
  version: '3.0.0',
  summary: 'Allow defining grapher links alongside their collections',
  git: 'https://github.com/copleykj/grapher-link-executor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0');
  api.use(['typescript', 'mongo', 'cultofcoders:grapher@2.0.0-rc.0']);
  api.mainModule('grapher-link-executor.ts');
});
