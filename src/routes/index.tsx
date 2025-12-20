import { createFileRoute } from "@tanstack/react-router";
import EventTableView from "@/components/event-table";
import { DashboardHeader } from "@/components/dashboard";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <DashboardHeader />

      <main className="flex-1 overflow-hidden">
        <EventTableView />
      </main>
    </div>
  );
}
