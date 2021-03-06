Package.describe({
  name: 'copleykj:grapher-link-executor',
  version: '2.0.1',
  summary: 'Allow defining grapher links alongside their collections',
  git: 'https://github.com/copleykj/grapher-link-executor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.12');
  api.use(['typescript', 'mongo', 'cultofcoders:grapher@1.3.19']);
  api.use();
  api.mainModule('grapher-link-executor.ts');
});
