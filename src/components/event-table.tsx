import { useEffect, useState, useMemo } from "react";
import { EventsSidebar } from "./event-sidebar";
import TableTable from "./table";
import SoloTable from "./solo-table";
import { Calendar } from "lucide-react";
import { axiosClient } from "@/lib/axios";
import { api } from "@/lib/api";
import type { Participant } from "@/types/participant";


interface BackendEvent {
  id: string;
  name: string;
  is_group: "SOLO" | "GROUP";
}

export default function EventTableView() {
  const [events, setEvents] = useState<BackendEvent[]>([]);
  const [participants, setParticipants] = useState<
    Record<string, Participant[]>
  >({});
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch organizer events
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const response = await axiosClient.get(api.DASHBOARD);
        const backendEvents: BackendEvent[] = response.data.events || [];
        setEvents(backendEvents);

        // Initialize every event with empty array for participants
        const initialParticipants: Record<string, Participant[]> = {};
        backendEvents.forEach((ev) => {
          initialParticipants[ev.id] = [];
        });
        setParticipants(initialParticipants);
      } catch (err) {
        console.error("[EventTableView] Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  // Fetch participants for a selected event
  useEffect(() => {
    if (!selectedEventId) {
      return;
    }

    const id = selectedEventId;

    async function fetchParticipants() {
      try {
        const response = await axiosClient.get(
          api.PARTICIPANTS(id)
        );
        const data: Participant[] = response.data.participants || [];
        setParticipants((prev) => ({ ...prev, [id]: data }));
      } catch (err) {
      }
    }

    fetchParticipants();
  }, [selectedEventId]);


  const selectedEvent = useMemo(
    () => events.find((e) => e.id === selectedEventId) ?? null,
    [events, selectedEventId]
  );

  const teamCount = useMemo(() => {
    if (!selectedEvent || selectedEvent.is_group !== "GROUP") return 0;

    const eventParticipants = participants[selectedEvent.id] || [];

    const uniqueTeams = new Set(eventParticipants.map((p) => p.team_name));

    return uniqueTeams.size;
  }, [participants, selectedEvent]);

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <EventsSidebar
        events={events}
        participants={participants}
        selectedEventId={selectedEventId}
        onEventSelect={(id) => {
          setSelectedEventId(id);
        }}
      />

      {/* Main Panel */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <div className="bg-card/30 backdrop-blur-sm px-8 py-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Calendar className="h-5 w-5 text-amber-400" />
                </div>
                <h1 className="text-3xl font-semibold">
                  {selectedEvent ? selectedEvent.name : "Event Details"}
                </h1>
              </div>

              <p className="text-muted-foreground max-w-3xl">
                {selectedEvent ? (
                  selectedEvent.is_group === "GROUP" ? (
                    <>
                      Teams: <span className="font-medium">{teamCount}</span> •
                      Participants:{" "}
                      <span className="font-medium">
                        {participants[selectedEvent.id]?.length || 0}
                      </span>
                    </>
                  ) : (
                    <>
                      Participants:{" "}
                      <span className="font-medium">
                        {participants[selectedEvent.id]?.length || 0}
                      </span>
                    </>
                  )
                ) : (
                  "Select an event from the sidebar to view participant details and manage registrations."
                )}
              </p>
            </div>
            {/* {selectedEvent && (
              <button
                onClick={() =>
                  exportParticipantsAsCSV(
                    participants[selectedEvent.id] || [],
                    selectedEvent.name
                  )
                }
                className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-black hover:bg-amber-400"
              >
                Export CSV
              </button>
            )} */}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-8 py-6">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading...</p>
          ) : !selectedEvent ? (
            <EmptyState />
          ) : selectedEvent.is_group === "GROUP" ? (
            <TableTable
              eventId={selectedEvent.id}
              participants={participants[selectedEvent.id]}
            />
          ) : (
            <SoloTable
              eventId={selectedEvent.id}
              participants={participants[selectedEvent.id]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
        <Calendar className="h-8 w-8 text-amber-400" />
      </div>
      <p className="text-lg font-medium mb-2">No Event Selected</p>
      <p className="text-sm text-muted-foreground max-w-md">
        Select an event from the sidebar to view participant details, manage
        registrations, and export data.
      </p>
    </div>
  );
}
