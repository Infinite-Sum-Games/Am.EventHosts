"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { EventData } from "@/data/draftData";
import { CalendarIcon } from "lucide-react";

interface EventsSidebarProps {
  events: EventData[];
  selectedEventId: string | null;
  onEventSelect: (eventId: string) => void;
}

export function EventsSidebar({
  events,
  selectedEventId,
  onEventSelect,
}: EventsSidebarProps) {
  const getStatusColor = (status: EventData["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "ongoing":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "completed":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex h-screen w-80 flex-col border-r border-border bg-card">
      {/* Header */}
      <div className="border-b border-border p-6">
        <h2 className="text-lg font-semibold text-foreground">Events</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Select an event to view details
        </p>
      </div>

      {/* Events List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 space-y-2">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => onEventSelect(event.id)}
              className={cn(
                "w-full text-left p-4 rounded-lg border transition-all duration-200",
                "hover:bg-accent/50 hover:border-amber-500/30",
                selectedEventId === event.id
                  ? "bg-amber-500/10 border-amber-500/50 shadow-sm"
                  : "bg-card border-border"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3
                  className={cn(
                    "font-medium text-sm leading-tight",
                    selectedEventId === event.id
                      ? "text-amber-400"
                      : "text-foreground"
                  )}
                >
                  {event.name}
                </h3>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs capitalize",
                    getStatusColor(event.status)
                  )}
                >
                  {event.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {event.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarIcon className="h-3 w-3" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
