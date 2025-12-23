export const api = {
	LOGIN: "/api/v1/auth/organizer/login",
	DASHBOARD: "/api/v1/organizers/dashboard",
	PARTICIPANTS: (eventId: string) => `/api/v1/organizers/dashboard/${eventId}`,
	SESSION: "/api/v1/auth/organizer/session",
	LOGOUT: "/api/v1/auth/organizer/logout",
};
