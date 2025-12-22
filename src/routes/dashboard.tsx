import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { axiosClient } from "@/lib/axios";
import { api } from "@/lib/api";
import { DashboardHeader } from "@/components/dashboard";
import EventTableView from "@/components/event-table";
import { use, useEffect } from "react";

// -------------------------
// Dashboard UI (unchanged)
// -------------------------

export function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    axiosClient.get(api.SESSION).catch(() => {
      router.navigate({ to: "/", replace: true });
    });
  }, []);
  return (
    <div className="flex h-screen flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 overflow-hidden">
        <EventTableView />
      </main>
    </div>
  );
}

// -------------------------
// Route with Auth Protection
// -------------------------
export const Route = createFileRoute("/dashboard")({
  // beforeLoad: async () => {
  //   try {
  //     const response = await axiosClient.get(api.SESSION);
  //     return {
  //       user: response.data,
  //     };
  //   } catch (error) {
  //     throw redirect({
  //       to: "/",
  //     });
  //   }
  // },
  component: Dashboard,
});
