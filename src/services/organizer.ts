import { api } from "@/lib/api";
import { axiosClient } from "@/lib/axios";

export interface Event {
  id: string;
  name: string;
  is_group: "SOLO" | "GROUP";
}

export interface Participant {
  student_name: any;

  team_name?: string;
  email: string;
  college: string;
  city: string;
  is_amrita_student: boolean;
}

export const OrganizerService = {
  login: async (email: string, password: string) => {
    return axiosClient.post(api.LOGIN, { email, password });
  },

  fetchEvents: async (): Promise<Event[]> => {
    const res = await axiosClient.get(api.DASHBOARD);
    return res.data.events;
  },

  fetchParticipants: async (eventId: string): Promise<Participant[] | null> => {
    const res = await axiosClient.get(api.PARTICIPANTS(eventId));
    return res.data.participants;
  },
};
