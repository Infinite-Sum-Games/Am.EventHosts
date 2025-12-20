"use client";

import { CalendarDays, Users, Settings, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    /* Increased height to h-24 for a more premium, spacious feel */
    <header className="h-24 border-b border-border bg-card/50 backdrop-blur-md supports-[backdrop-filter]:bg-card/50 sticky top-0 z-50">
      <div className="relative flex h-full items-center justify-between px-8">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 font-bold text-xl text-black shadow-xl shadow-amber-500/20">
              A
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Anokha 2026
              </h1>
              <p className="text-xs font-medium text-amber-500/80 uppercase tracking-widest">
                University Techfest
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 px-4"
            >
              <CalendarDays className="h-5 w-5 mr-2" />
              Events
            </Button>
            <Button variant="ghost" className="hover:bg-accent/50 px-4">
              <Users className="h-5 w-5 mr-2" />
              Participants
            </Button>
          </nav>
        </div>

        {/* CENTER HEADING: Absolutely positioned to stay dead-center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-foreground/90">
              Organisers <span className="text-amber-500">Panel</span>
            </h2>
            <div className="h-1 w-12 bg-amber-500 rounded-full mt-1 opacity-50" />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 mr-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 hover:bg-accent/50"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-background" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 hover:bg-accent/50"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          <div className="w-px h-10 bg-border mx-2" />

          <div className="flex items-center gap-4 pl-2">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-sm font-semibold">Admin Dashboard</span>
              <span className="text-[10px] text-muted-foreground uppercase">
                Verified Organizer
              </span>
            </div>
            <Avatar className="h-10 w-10 ring-2 ring-amber-500/20">
              <AvatarFallback className="bg-amber-500/10 text-amber-400 font-bold">
                AD
              </AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="sm"
              className="border-amber-500/20 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
