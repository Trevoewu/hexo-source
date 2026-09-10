'use strict';

/**
 * Filter out posts with `hidden: true` or `hide: true` from index/home page generator.
 * These posts remain accessible via direct URL, archives, categories, and tags.
 */
hexo.extend.filter.register('before_generate', function() {
  const originalIndex = hexo.extend.generator.get('index');
  if (!originalIndex) return;

  hexo.extend.generator.register('index', function(locals) {
    const filteredLocals = Object.assign({}, locals, {
      posts: locals.posts.filter(post => !post.hidden && !post.hide)
    });
    return originalIndex.call(this, filteredLocals);
  });
});
