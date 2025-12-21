"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users } from "lucide-react";

interface BackendEvent {
  id: string;
  name: string;
  is_group: "SOLO" | "GROUP";
}

interface Participant {
  // same as your Participant type
  team_name?: string;
  student_name: string;
  email: string;
  college: string;
  city: string;
  is_amrita_student: any;
}

interface EventsSidebarProps {
  events: BackendEvent[];
  selectedEventId: string | null;
  onEventSelect: (eventId: string) => void;
  participants: Record<string, Participant[]>; // eventId -> participants
}

export function EventsSidebar({
  events,
  selectedEventId,
  onEventSelect,
  participants,
}: EventsSidebarProps) {
  const getStatusColor = (type: BackendEvent["is_group"]) => {
    switch (type) {
      case "GROUP":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20";
      case "SOLO":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const mapType = (type: BackendEvent["is_group"]) =>
    type === "GROUP" ? "group" : "solo";

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
        {events.map((event) => {
          const participantCount = participants[event.id]?.length || 0;

          return (
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
                  className={cn(
                    "text-xs capitalize",
                    getStatusColor(event.is_group)
                  )}
                >
                  {mapType(event.is_group)}
                </Badge>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="h-3.5 w-3.5 text-amber-400/70" />
                  {/* Optional: add a date if your backend has it */}
                  {/* {new Date(event.date).toLocaleDateString()} */}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-amber-400/70" />
                  {participantCount} Participant
                  {participantCount !== 1 ? "s" : ""}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
