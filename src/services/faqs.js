import { apiRequest } from "./api";

/**
 * Public FAQ list. `audience` is 'client' on this app (server merges in
 * audience=BOTH automatically).
 */
export const listFaqs = async ({ audience = "client", q } = {}) => {
  const qs = new URLSearchParams();
  qs.set("audience", audience);
  if (q) qs.set("q", q);
  const data = await apiRequest(`/faqs?${qs}`);
  const body = data?.data || data || {};
  return {
    faqs: body.faqs || [],
    groups: body.groups || [],
  };
};
