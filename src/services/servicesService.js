import { apiRequest } from "./api";

/**
 * MARKETPLACE SERVICES - Public endpoints (no auth required)
 */

/**
 * Get all marketplace services with filters
 * @param {Object} filters - Query filters
 * @param {string} filters.category_id - Filter by category UUID
 * @param {string} filters.provider_id - Filter by provider UUID
 * @param {string} filters.service_mode - CONSULTATION | FIXED_SERVICE | CUSTOM_QUOTE
 * @param {string} filters.pricing_type - FIXED | STARTING_FROM | CUSTOM | FREE
 * @param {string} filters.location_type - ONLINE | OFFICE | CLIENT_LOCATION | HYBRID
 * @param {string} filters.emirate - Free-form location string
 * @param {string} filters.is_featured - "true" | "false"
 * @param {string} filters.is_verified - "true" | "false"
 * @param {string[]} filters.tags - Array of tag strings
 * @param {string} filters.q - Free-text search query
 * @param {string} filters.sort - newest | price_asc | price_desc | popular
 * @param {number} filters.limit - Pagination limit
 * @param {number} filters.offset - Pagination offset
 * @returns {Promise} Services list
 */
export const getMarketplaceServices = async (filters = {}) => {
  try {
    const queryString = new URLSearchParams(filters).toString();
    const path = `/marketplace/services${queryString ? `?${queryString}` : ''}`;
    const response = await apiRequest(path);
    return response.services ?? response.data ?? response;
  } catch (error) {
    console.error('Error fetching marketplace services:', error);
    throw error;
  }
};

/**
 * Get featured marketplace services
 * @param {number} limit - Number of services to return
 * @returns {Promise} Featured services list
 */
export const getFeaturedServices = async (limit = 10) => {
  try {
    const path = `/marketplace/services/featured?limit=${limit}`;
    const response = await apiRequest(path);
    return response;
  } catch (error) {
    console.error('Error fetching featured services:', error);
    throw error;
  }
};

/**
 * Search services with full-text search (English + Arabic)
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.q - Search query
 * @param {string[]} searchParams.tags - Filter by tags (comma-separated in query)
 * @param {string} searchParams.sort - relevance | newest | price_asc | price_desc | popular
 * @param {number} searchParams.limit - Pagination limit
 * @param {number} searchParams.offset - Pagination offset
 * @returns {Promise} Search results
 */
export const searchServices = async (searchParams = {}) => {
  try {
    const queryString = new URLSearchParams(searchParams).toString();
    const path = `/marketplace/services/search${queryString ? `?${queryString}` : ''}`;
    const response = await apiRequest(path);
    return response;
  } catch (error) {
    console.error('Error searching services:', error);
    throw error;
  }
};

/**
 * Get full service details by slug
 * Increments view count on access
 * @param {string} slug - Service slug
 * @returns {Promise} Full service details
 */
export const getServiceBySlug = async (slug) => {
  try {
    const response = await apiRequest(`/marketplace/services/${slug}`);
    return response;
  } catch (error) {
    console.error('Error fetching service details:', error);
    throw error;
  }
};

/**
 * Get services by category
 * @param {string} categoryId - Category UUID
 * @param {Object} filters - Additional query filters
 * @returns {Promise} Category services
 */
export const getServicesByCategory = async (categoryId, filters = {}) => {
  try {
    const queryString = new URLSearchParams(filters).toString();
    const path = `/marketplace/categories/${categoryId}/services${queryString ? `?${queryString}` : ''}`;
    const response = await apiRequest(path);
    return response.services ?? response.data ?? response;
  } catch (error) {
    console.error('Error fetching category services:', error);
    throw error;
  }
};

/**
 * Get active service categories for marketplace filters
 * @param {Object} params - Optional query params
 * @param {string} params.type - Category type, defaults to 'service'
 * @returns {Promise} Category list
 */
export const getServiceCategories = async (params = {}) => {
  try {
    const queryParams = { type: 'service', ...params };
    const queryString = new URLSearchParams(queryParams).toString();
    const response = await apiRequest(`/categories?${queryString}`);
    return response.categories ?? response.data ?? response;
  } catch (error) {
    console.error('Error fetching service categories:', error);
    throw error;
  }
};

/**
 * Get public provider profile with their published services
 * @param {string} providerId - Provider UUID
 * @returns {Promise} Provider profile data
 */
export const getProviderProfile = async (providerId) => {
  try {
    const response = await apiRequest(`/marketplace/providers/${providerId}/profile`);
    return response;
  } catch (error) {
    console.error('Error fetching provider profile:', error);
    throw error;
  }
};

/**
 * Aggregated home-page payload — featured services, top firms, categories,
 * recent articles and FAQs. Single round-trip for the dashboard.
 */
export const getHomePage = async () => {
  const data = await apiRequest('/marketplace/home');
  const body = data?.data || data || {};
  return {
    featured_services: body.featured_services || [],
    top_firms: body.top_firms || [],
    categories: body.categories || [],
    recent_articles: body.recent_articles || [],
    faqs: body.faqs || [],
  };
};

/**
 * Public list of approved providers ("Firms" page).
 */
export const listPublicProviders = async (params = {}) => {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') qs.set(k, String(v));
  });
  const path = `/marketplace/providers${qs.toString() ? `?${qs}` : ''}`;
  const data = await apiRequest(path);
  return {
    providers: data.providers || data.data?.providers || [],
    pagination: data.pagination || data.data?.pagination || null,
  };
};

/** Provider rating-distribution summary. */
export const getProviderRatingSummary = async (providerId) => {
  const data = await apiRequest(`/marketplace/providers/${providerId}/rating-summary`);
  return data.summary || data.data?.summary || null;
};

/** Paginated reviews for a provider. */
export const getProviderReviews = async (providerId, params = {}) => {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') qs.set(k, String(v));
  });
  const path = `/marketplace/providers/${providerId}/reviews${qs.toString() ? `?${qs}` : ''}`;
  const data = await apiRequest(path);
  return {
    reviews: data.reviews || data.data?.reviews || [],
    pagination: data.pagination || data.data?.pagination || null,
  };
};

/**
 * Get available time slots for a consultation service
 * @param {string} serviceId - Service UUID
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise} Available slots for the date
 */
export const getAvailableSlots = async (serviceId, date) => {
  try {
    const path = `/marketplace/services/${serviceId}/available-slots?date=${date}`;
    const response = await apiRequest(path);
    return response;
  } catch (error) {
    console.error('Error fetching available slots:', error);
    throw error;
  }
};

/**
 * Get booking quote (pricing breakdown) for a service
 * @param {string} serviceId - Service UUID
 * @returns {Promise} Booking quote with pricing details
 */
export const getBookingQuote = async (serviceId) => {
  try {
    const response = await apiRequest(`/marketplace/services/${serviceId}/booking-quote`);
    return response;
  } catch (error) {
    console.error('Error fetching booking quote:', error);
    throw error;
  }
};





export default {
  // Marketplace
  getMarketplaceServices,
  getFeaturedServices,
  searchServices,
  getServiceBySlug,
  getServicesByCategory,
  getProviderProfile,
  getServiceCategories,
  getAvailableSlots,
  getBookingQuote,
};
