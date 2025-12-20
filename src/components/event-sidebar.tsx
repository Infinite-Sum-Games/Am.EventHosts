"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { EventData } from "@/data/draftData";
import { CalendarIcon, Users } from "lucide-react";

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
  const getStatusColor = (status: EventData["type"]) => {
    switch (status) {
      case "group":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20";
      case "solo":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex h-full w-80 flex-col border-r border-border bg-card/30 backdrop-blur-sm">
      <div className="border-b border-border bg-card/50 px-6 py-5">
        <div className="flex items-center gap-2 mb-1">
          <CalendarIcon className="h-5 w-5 text-amber-400" />
          <h2 className="text-lg font-semibold">Events</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {events.length} total events • Select to view participants
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onEventSelect(event.id)}
            className={cn(
              "w-full text-left p-4 rounded-xl border transition-all",
              "hover:shadow-md hover:scale-[1.02]",
              selectedEventId === event.id
                ? "bg-amber-500/10 border-amber-500/50 ring-1 ring-amber-500/20"
                : "bg-card/50 border-border hover:border-amber-500/30"
            )}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3
                className={cn(
                  "font-semibold text-sm flex-1",
                  selectedEventId === event.id
                    ? "text-amber-400"
                    : "text-foreground"
                )}
              >
                {event.name}
              </h3>
              <Badge
                variant="outline"
                className={cn("text-xs capitalize", getStatusColor(event.type))}
              >
                {event.type}
              </Badge>
            </div>

            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {event.description}
            </p>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="h-3.5 w-3.5 text-amber-400/70" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-amber-400/70" />
                View Participants
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
