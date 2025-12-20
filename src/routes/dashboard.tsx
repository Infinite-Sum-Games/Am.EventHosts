import { DashboardHeader } from "@/components/dashboard";
import EventTableView from "@/components/event-table";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

export function Dashboard() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <DashboardHeader />

      <main className="flex-1 overflow-hidden">
        <EventTableView />
      </main>
    </div>
    );
}
