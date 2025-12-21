"use client";
import { useMemo, useState } from "react";
import { EventsSidebar } from "./event-sidebar";
// import GroupEventTable from "@/components/group-event-table";
// import SoloEventTable from "@/components/solo-event-table";
import { eventsData, eventParticipants } from "@/data/draftData";
import { Users, Calendar } from "lucide-react";
import TableTable from "./table";
import SoloTable from "./solotable";

export default function EventTableView() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectedEvent = useMemo(
    () => eventsData.find((e) => e.id === selectedEventId) ?? null,
    [selectedEventId]
  );

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <EventsSidebar
        events={eventsData}
        selectedEventId={selectedEventId}
        onEventSelect={setSelectedEventId}
      />

      {/* Main Panel */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <div className="bg-card/30 backdrop-blur-sm px-8 py-6 ">
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
                {selectedEvent
                  ? selectedEvent.description
                  : "Select an event from the sidebar to view participant details and manage registrations"}
              </p>
            </div>

            {selectedEvent && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border">
                <Users className="h-5 w-5 text-amber-400" />
                <span className="font-medium">
                  {(eventParticipants[selectedEvent.id] || []).length}{" "}
                  Participants
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-8 py-6">
          {!selectedEvent ? (
            <EmptyState />
          ) : selectedEvent.type === "group" ? (
            <TableTable eventId={selectedEvent.id} />
          ) : (
            <SoloTable eventId={selectedEvent.id} />
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
