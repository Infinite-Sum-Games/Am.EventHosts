"use client";

import { CalendarDays, Users, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {/* Logo placeholder - using a stylized "A" for Anokha */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 font-bold text-black">
              A
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-semibold leading-none text-foreground">
                Anokha 2026
              </h1>
              <p className="text-xs text-muted-foreground">Organizer Panel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1 ml-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10"
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              Events
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent">
              <Users className="h-4 w-4 mr-2" />
              Participants
            </Button>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-amber-500/10 text-amber-400 text-xs">
              AD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
