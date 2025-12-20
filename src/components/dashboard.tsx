"use client";

import {
  CalendarDays,
  Users,
  Settings,
  Bell,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DashboardHeader() {
  return (
    <header className="h-20 md:h-24 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="relative flex h-full items-center justify-between px-4 md:px-8">
        {/* LEFT: Logo & Desktop Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-card">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-500 font-bold text-black">
                      A
                    </div>
                    Anokha 2026
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  <Button
                    variant="ghost"
                    className="justify-start text-amber-400 bg-amber-400/10"
                  >
                    <CalendarDays className="h-5 w-5 mr-3" /> Events
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Users className="h-5 w-5 mr-3" /> Participants
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-red-500 hover:bg-red-500/10 hover:text-red-500"
                  >
                    <LogOut className="h-5 w-5 mr-3" /> Logout
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 font-bold text-lg md:text-xl text-black shadow-lg shadow-amber-500/20">
              A
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-base md:text-xl font-bold tracking-tight">
                Anokha 2026
              </h1>
              <p className="text-[10px] font-medium text-amber-500/80 uppercase tracking-widest hidden md:block">
                University Techfest
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10"
            >
              <CalendarDays className="h-5 w-5 mr-2" /> Events
            </Button>
            <Button variant="ghost" className="hover:bg-accent/50">
              <Users className="h-5 w-5 mr-2" /> Participants
            </Button>
          </nav>
        </div>

        {/* CENTER: Adaptive Heading */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
          <div className="flex flex-col items-center">
            <h2 className="text-xl 2xl:text-2xl font-black uppercase tracking-[0.3em] text-foreground/90 whitespace-nowrap">
              Organisers <span className="text-amber-500">Panel</span>
            </h2>
            <div className="h-1 w-12 bg-amber-500 rounded-full mt-1 opacity-50" />
          </div>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:h-10 md:w-10 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-background" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:h-10 md:w-10 hidden sm:flex"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          <div className="hidden sm:block w-px h-8 bg-border mx-1 md:mx-2" />

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-sm font-semibold">Admin Dashboard</span>
              <span className="text-[10px] text-muted-foreground uppercase">
                Verified
              </span>
            </div>
            <Avatar className="h-9 w-9 md:h-10 md:w-10 ring-2 ring-amber-500/20">
              <AvatarFallback className="bg-amber-500/10 text-amber-500 text-xs md:text-sm font-bold">
                AD
              </AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-amber-500/20 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50"
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
