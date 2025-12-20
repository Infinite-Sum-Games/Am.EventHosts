"use client";
import { useState } from "react";
import { EventsSidebar } from "./event-sidebar";
import TableTable from "@/components/table";
import { eventsData } from "@/data/draftData";
import { Users, Calendar } from "lucide-react";

export default function EventTableView() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(
    eventsData[0]?.id || null
  );

  const selectedEvent = eventsData.find(
    (event) => event.id === selectedEventId
  );

  return (
    <div className="flex h-full bg-background">
      <EventsSidebar
        events={eventsData}
        selectedEventId={selectedEventId}
        onEventSelect={setSelectedEventId}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="border-b border-border bg-card/30 backdrop-blur-sm px-8 py-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Calendar className="h-5 w-5 text-amber-400" />
                </div>
                <h1 className="text-2xl font-semibold text-foreground">
                  {selectedEvent ? selectedEvent.name : "Event Details"}
                </h1>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-13">
                {selectedEvent
                  ? selectedEvent.description
                  : "Select an event from the sidebar to view participant details and manage registrations"}
              </p>
            </div>
            {selectedEvent && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border">
                <Users className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-medium text-foreground">
                  {(eventParticipants[selectedEvent.id] || []).length}{" "}
                  Participants
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto px-8 py-6 bg-background">
          {selectedEventId ? (
            <TableTable eventId={selectedEventId} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                <Calendar className="h-8 w-8 text-amber-400" />
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                No Event Selected
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                Select an event from the sidebar to view participant details,
                manage registrations, and export data
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Import for participant count
import { eventParticipants } from "@/data/draftData";
