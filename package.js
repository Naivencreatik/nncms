Package.describe({
  summary: "Meteor modular CMS - Blog component"
});

Package.on_use(function(api) {
  api.use([
    'perseid',
  ], ['client', 'server']);

  api.add_files([
    'lib/blog.js',
    'collections/posts.js'
  ], ['client', 'server']);

  api.add_files([
    'server/server.js'
  ], 'server');

  api.add_files([
    'client/blog.js',
    
    'client/i18n/fr.js',

    'client/styles/blog.css',

    'client/vendor/showdown.js',
    'client/vendor/showdown.link.js',
    'client/vendor/showdown.youtube.js',

    'client/vendor/codemirror/codemirror.css',
    'client/vendor/codemirror/codemirror.js',
    'client/vendor/codemirror/markdown.js',
    'client/vendor/codemirror/night.css',

    'client/views/admin/editor.html',
    'client/views/admin/editor.js',
    'client/views/admin/header.html',
    'client/views/admin/list.html',
    'client/views/admin/list.js',

    'client/views/posts/posts.html',
    'client/views/posts/posts.js'

  ], 'client');
});