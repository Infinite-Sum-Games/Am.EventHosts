const CURRENT_BASE_URL: string = "/api/v1";

export const api = {
  LOGIN: `${CURRENT_BASE_URL}/auth/organizer/login`,
  DASHBOARD: `${CURRENT_BASE_URL}/organizers/dashboard`,
  PARTICIPANTS: (eventId: string) =>
    `${CURRENT_BASE_URL}/organizers/dashboard/${eventId}`,
};
