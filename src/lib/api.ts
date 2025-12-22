export const api = {
  LOGIN: "http://localhost:8080/api/v1/auth/organizer/login",
  DASHBOARD: "http://localhost:8080/api/v1/organizers/dashboard",
  PARTICIPANTS: (eventId: string) =>
    `http://localhost:8080/api/v1/organizers/dashboard/${eventId}`,
  SESSION: "http://localhost:8080/api/v1/auth/organizer/session",
  LOGOUT: "http://localhost:8080/api/v1/auth/user/logout",
};
