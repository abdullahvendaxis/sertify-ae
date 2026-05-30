import { apiRequest } from './api';

export const getArticleCategories = () => apiRequest('/categories?type=article');
