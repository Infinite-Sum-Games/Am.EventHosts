"use client";

import { CalendarDays, Users, Settings, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm supports-[backdrop-filter]:bg-card/50">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 font-bold text-black shadow-lg shadow-amber-500/20">
              A
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold leading-none text-foreground">
                Anokha 2026
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Organizer Panel
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-1 ml-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10"
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              Events
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-accent/50">
              <Users className="h-4 w-4 mr-2" />
              Participants
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-accent/50"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-card" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-accent/50">
            <Settings className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-border mx-1" />
          <Avatar className="h-8 w-8 ring-2 ring-border">
            <AvatarFallback className="bg-amber-500/10 text-amber-400 text-xs font-medium">
              AD
            </AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="sm" className="hover:bg-accent/50">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
