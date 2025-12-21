"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import secureLocalStorage from "react-secure-storage";
import { axiosClient } from "@/lib/axios";
import { api } from "@/lib/api";
export function DashboardHeader() {
  
  return (
    <header className="h-20 md:h-24 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="relative flex h-full items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-amber-600 font-bold text-lg md:text-xl text-black shadow-lg shadow-amber-500/20">
            A
          </div>
          <div className="flex flex-col">
            <h1 className="text-base md:text-xl font-bold tracking-tight text-foreground">
              Anokha 2026
            </h1>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
          <div className="flex flex-col items-center">
            <h2 className="text-lg md:text-xl xl:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-foreground/90 whitespace-nowrap">
              Organisers <span className="text-amber-500">Panel</span>
            </h2>
            <div className="h-1 w-12 bg-amber-500 rounded-full mt-1 opacity-50" />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-all px-2 md:px-4 border"
          >
            <LogOut
              className="h-8 w-8 md:mr-2"
              onClick={(e) => {
                e.preventDefault();
                secureLocalStorage.clear();
                axiosClient.get(api.LOGOUT).then(() => {
                  router.navigate({ to: "/", replace: true });
                });
              }}
            />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
