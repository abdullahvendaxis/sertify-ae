import { apiRequest } from "./api";

/**
 * Get published articles with optional filters
 * @param {Object} params - Query parameters
 * @param {string} params.category_id - Filter by category UUID
 * @param {string} params.lang - Filter by language ('en' | 'ar')
 * @param {string} params.tag - Filter by tag
 * @param {string} params.q - Search query (ILIKE across title, excerpt, body_text)
 * @param {string} params.sort - Sort order ('recent' | 'popular' | 'oldest')
 * @param {number} params.limit - Number of results (default 20, max 100)
 * @param {number} params.offset - Pagination offset (default 0)
 * @param {boolean} params.lean - Omit author/reviewer joins for list views
 * @returns {Promise<{articles: Array, pagination: Object}>}
 */
export const getPublishedArticles = async (params = {}) => {
  const queryParams = new URLSearchParams();

  // Add query parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      queryParams.append(key, value.toString());
    }
  });

  const queryString = queryParams.toString();
  const url = `/articles${queryString ? `?${queryString}` : ''}`;

  return apiRequest(url);
};

/**
 * Get featured articles
 * @param {number} limit - Number of articles to return (default 12)
 * @returns {Promise<{articles: Array}>}
 */
export const getFeaturedArticles = async (limit = 12) => {
  return apiRequest(`/articles/featured?limit=${limit}`);
};

/**
 * Get pinned articles
 * @param {number} limit - Number of articles to return (default 12)
 * @returns {Promise<{articles: Array}>}
 */
export const getPinnedArticles = async (limit = 12) => {
  return apiRequest(`/articles/pinned?limit=${limit}`);
};

/**
 * Search articles using full-text search
 * @param {string} query - Search query
 * @param {Object} filters - Additional filters
 * @param {number} limit - Number of results (default 20)
 * @param {number} offset - Pagination offset (default 0)
 * @returns {Promise<{articles: Array, pagination: Object}>}
 */
export const searchArticles = async (query, filters = {}, limit = 20, offset = 0) => {
  const params = {
    q: query,
    limit,
    offset,
    ...filters
  };

  return getPublishedArticles(params);
};

/**
 * Get a single published article by slug
 * @param {string} slug - Article slug
 * @returns {Promise<{article: Object}>}
 */
export const getArticleBySlug = async (slug) => {
  return apiRequest(`/articles/${slug}`);
};

/**
 * Get related articles for a given article
 * @param {string} slug - Article slug to find related articles for
 * @param {number} limit - Number of related articles (default 24)
 * @returns {Promise<{articles: Array}>}
 */
export const getRelatedArticles = async (slug, limit = 24) => {
  return apiRequest(`/articles/${slug}/related?limit=${limit}`);
};

/**
 * Get articles by category
 * @param {string} categoryId - Category UUID
 * @param {Object} params - Additional parameters
 * @returns {Promise<{articles: Array, pagination: Object}>}
 */
export const getArticlesByCategory = async (categoryId, params = {}) => {
  return getPublishedArticles({ category_id: categoryId, ...params });
};

/**
 * Get articles by tag
 * @param {string} tag - Tag name
 * @param {Object} params - Additional parameters
 * @returns {Promise<{articles: Array, pagination: Object}>}
 */
export const getArticlesByTag = async (tag, params = {}) => {
  return getPublishedArticles({ tag, ...params });
};

/**
 * Get articles by language
 * @param {string} lang - Language code ('en' | 'ar')
 * @param {Object} params - Additional parameters
 * @returns {Promise<{articles: Array, pagination: Object}>}
 */
export const getArticlesByLanguage = async (lang, params = {}) => {
  return getPublishedArticles({ lang, ...params });
};

export default {
  getPublishedArticles,
  getFeaturedArticles,
  getPinnedArticles,
  searchArticles,
  getArticleBySlug,
  getRelatedArticles,
  getArticlesByCategory,
  getArticlesByTag,
  getArticlesByLanguage,
};
