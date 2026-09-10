const moment = require('moment');

/**
 * Format date to string without year.
 */
hexo.extend.helper.register('format_date', function (date) {
    return moment(date).format('MMM D');
});

/**
 * Format date to string with year.
 */
hexo.extend.helper.register('format_date_full', function (date) {
    return moment(date).format('MMM D YYYY');
});

/**
 * Get the word count of a paragraph.
 */
hexo.extend.helper.register('word_count', (content) => {
    content = content.replace(/<\/?[a-z][^>]*>/gi, '');
    content = content.trim();
    return content ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length : 0;
});

/**
 * Export moment.duration
 */
hexo.extend.helper.register('duration', function () {
    return moment.duration.apply(null, arguments);
});

/**
 * Check if page has categories
 */
hexo.extend.helper.register('is_categories', function () {
    return this.page.__categories;
});

/**
 * Check if page has tags
 */
hexo.extend.helper.register('is_tags', function () {
    return this.page.__tags;
});

/**
 * Generate html head title based on page type
 */
hexo.extend.helper.register('page_title', function () {
    const page = this.page;
    let title = page.title;

    if (this.is_archive()) {
        title = this.__('common.archives');
        if (this.is_month()) {
            title += ': ' + page.year + '/' + page.month;
        } else if (this.is_year()) {
            title += ': ' + page.year;
        }
    } else if (this.is_category()) {
        title = this.__('common.category') + ': ' + page.category;
    } else if (this.is_tag()) {
        title = this.__('common.tag') + ': ' + page.tag;
    } else if (this.is_categories()) {
        title = this.__('common.categories');
    } else if (this.is_tags()) {
        title = this.__('common.tags');
    }

    const getConfig = hexo.extend.helper.get('get_config').bind(this);

    return [title, getConfig('title', '', true)].filter(str => typeof (str) !== 'undefined' && str.trim() !== '').join(' - ');
});

// Simple helper functions for internationalization
hexo.extend.helper.register('display_languages', function () {
    return ['en']; // Default to English only
});

hexo.extend.helper.register('page_language', function (page) {
    return 'en'; // Default to English
});

hexo.extend.helper.register('is_default_language', function (language) {
    return language === 'en'; // Default to English
});

/**
 * Get moment.js supported page locale
 */
hexo.extend.helper.register('momentjs_locale', function () {
    return 'en'; // Default to English
});
