"use client";

import { useState } from "react";
import { EventsSidebar } from "./event-sidebar";
import TableTable from "@/components/table";
import { eventsData } from "@/data/draftData";

export default function EventTableView() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(
    eventsData[0]?.id || null
  );

  const selectedEvent = eventsData.find(
    (event) => event.id === selectedEventId
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Fixed Events Sidebar */}
      <EventsSidebar
        events={eventsData}
        selectedEventId={selectedEventId}
        onEventSelect={setSelectedEventId}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <div className="border-b border-border bg-card px-8 py-6">
          <h1 className="text-2xl font-semibold text-foreground">
            {selectedEvent ? selectedEvent.name : "Event Details"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {selectedEvent
              ? selectedEvent.description
              : "Select an event to view participant details"}
          </p>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-auto px-8 py-6">
          {selectedEventId ? (
            <TableTable eventId={selectedEventId} />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Select an event to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
