const API_BASE_URL =
  process.env.VITE_BACKEND_API ||
  process.env.NEXT_PUBLIC_BACKEND_API ||
  process.env.VITE_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "http://localhost:5000/api";

const buildUrl = (path) => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path}`;
};

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(buildUrl(path), {
    ...options,
    headers: {
      Accept: "application/json",
      ...options.headers,
    },
    ...(options.cache ? { cache: options.cache } : {}),
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    const error = new Error(data.message || data.error || "Something went wrong");
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};
