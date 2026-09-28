'use strict';

const { stripHTML } = require('hexo-util');

/**
 * Generator for Insight Search data file (content.json).
 * Exports posts, pages, categories, and tags in the schema expected by Insight Search.
 */
hexo.extend.generator.register('insight_content_json', function(locals) {
  const url_for = hexo.extend.helper.get('url_for').bind(hexo);

  const posts = locals.posts.sort('-date').toArray().map(post => {
    const text = post.content ? stripHTML(post.content).replace(/\s+/g, ' ').trim() : '';
    return {
      title: post.title || 'Untitled',
      text: text,
      link: url_for(post.path)
    };
  });

  const pages = locals.pages.toArray().map(page => {
    const text = page.content ? stripHTML(page.content).replace(/\s+/g, ' ').trim() : '';
    const cleanPath = page.path ? page.path.replace(/index\.html$/, '') : '';
    return {
      title: page.title || 'Untitled',
      text: text,
      link: url_for(cleanPath)
    };
  });

  const categories = locals.categories.toArray().map(cat => ({
    name: cat.name,
    slug: cat.slug || cat.name,
    link: url_for(cat.path)
  }));

  const tags = locals.tags.toArray().map(tag => ({
    name: tag.name,
    slug: tag.slug || tag.name,
    link: url_for(tag.path)
  }));

  const contentData = JSON.stringify({
    posts,
    pages,
    categories,
    tags
  });

  const routes = [
    {
      path: 'content.json',
      data: contentData
    }
  ];

  if (hexo.config.language && hexo.config.language !== 'en') {
    routes.push({
      path: `content.${hexo.config.language}.json`,
      data: contentData
    });
  }

  return routes;
});
