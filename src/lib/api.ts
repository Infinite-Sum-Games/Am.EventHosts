// For now, let's use a relative URL to leverage the Vite proxy.
const CURRENT_BASE_URL: string = "/api/v1";

export const api = {
  LOGIN: `${CURRENT_BASE_URL}/auth/admin/login`,
  LOGOUT: `${CURRENT_BASE_URL}/auth/admin/logout`,
  SESSION: `${CURRENT_BASE_URL}/auth/admin/session`,
};
